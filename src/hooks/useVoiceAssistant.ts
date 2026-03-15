import { useCallback, useEffect, useRef, useState } from "react";

type ChatRole = "system" | "user" | "assistant";

export type ChatMessage = {
  role: ChatRole;
  content: string;
};

export type UseVoiceAssistantState = {
  activeDisplayMode: "idle" | "listening" | "assistant";
  isListening: boolean;
  isSpeaking: boolean;
  supportsSpeechRecognition: boolean;
  supportsSpeechSynthesis: boolean;
  transcript: string;
  userLiveText: string;
  assistantLiveText: string;
  messages: ChatMessage[];
  error: string | null;
  level: number;
  suggestedPrompts: string[];
  startListening: () => void;
  stopListening: () => void;
  sendTextMessage: (text: string) => void;
};

type SpeechRecognitionType = {
  new (): SpeechRecognitionInstance;
};

type SpeechRecognitionInstance = {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  start: () => void;
  stop: () => void;
  abort: () => void;
  onaudioend: (() => void) | null;
  onend: (() => void) | null;
  onerror: ((event: unknown) => void) | null;
  onresult: ((event: SpeechRecognitionEventLike) => void) | null;
};

type SpeechRecognitionAlternativeLike = {
  transcript: string;
};

type SpeechRecognitionResultLike = {
  isFinal: boolean;
  0: SpeechRecognitionAlternativeLike;
};

type SpeechRecognitionEventLike = {
  resultIndex: number;
  results: ArrayLike<SpeechRecognitionResultLike>;
};

type WindowWithSpeechRecognition = Window & {
  SpeechRecognition?: SpeechRecognitionType;
  webkitSpeechRecognition?: SpeechRecognitionType;
};

const SUGGESTED_PROMPTS = [
  "Tell me about your projects",
  "What technologies do you use?",
  "Why should someone hire you?",
];

const MAX_MESSAGES_PER_REQUEST = 12;
const REQUEST_COOLDOWN_MS = 1800;
const DUPLICATE_TRANSCRIPT_WINDOW_MS = 4000;
const USER_FINALIZE_DEBOUNCE_MS = 700;
const ASSISTANT_TEXT_HOLD_MS = 3200;
const ASSISTANT_FALLBACK_WORD_INTERVAL_MS = 110;
const MAX_RATE_LIMIT_RETRY = 1;

type AssistantApiResponse = {
  content?: string;
  retryAfterSeconds?: number;
};

export function useVoiceAssistant(): UseVoiceAssistantState {
  const [activeDisplayMode, setActiveDisplayMode] = useState<
    "idle" | "listening" | "assistant"
  >("idle");
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [supportsSpeechRecognition, setSupportsSpeechRecognition] =
    useState(false);
  const [supportsSpeechSynthesis, setSupportsSpeechSynthesis] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [userLiveText, setUserLiveText] = useState("");
  const [assistantLiveText, setAssistantLiveText] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [level, setLevel] = useState(0);

  const recognitionRef = useRef<SpeechRecognitionInstance | null>(null);
  const listeningRef = useRef(false);
  const speechSynthesisRef = useRef<SpeechSynthesis | null>(null);
  const lastRequestAtRef = useRef(0);
  const inFlightRequestRef = useRef(false);
  const lastFinalTranscriptRef = useRef("");
  const lastFinalTranscriptAtRef = useRef(0);
  const stableFinalTranscriptRef = useRef("");
  const lastCommittedFinalTranscriptRef = useRef("");
  const pendingFinalTranscriptRef = useRef("");
  const finalizeSpeechTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );
  const assistantHoldTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );
  const assistantFallbackIntervalRef = useRef<ReturnType<
    typeof setInterval
  > | null>(null);

  const clearAssistantTimers = useCallback(() => {
    if (assistantHoldTimeoutRef.current) {
      clearTimeout(assistantHoldTimeoutRef.current);
      assistantHoldTimeoutRef.current = null;
    }

    if (assistantFallbackIntervalRef.current) {
      clearInterval(assistantFallbackIntervalRef.current);
      assistantFallbackIntervalRef.current = null;
    }
  }, []);

  const clearSpeechFinalizeTimer = useCallback(() => {
    if (finalizeSpeechTimeoutRef.current) {
      clearTimeout(finalizeSpeechTimeoutRef.current);
      finalizeSpeechTimeoutRef.current = null;
    }
  }, []);

  const scheduleAssistantTextClear = useCallback(() => {
    if (assistantHoldTimeoutRef.current) {
      clearTimeout(assistantHoldTimeoutRef.current);
    }

    assistantHoldTimeoutRef.current = setTimeout(() => {
      setAssistantLiveText("");
      setActiveDisplayMode((prev) =>
        isListening ? "listening" : prev === "assistant" ? "idle" : prev,
      );
    }, ASSISTANT_TEXT_HOLD_MS);
  }, [isListening]);

  const normalizeSpacing = useCallback((value: string) => {
    return value.replace(/\s+/g, " ").trim();
  }, []);

  const extractIncrementalFinalText = useCallback(
    (cumulativeFinalText: string) => {
      const previous = lastCommittedFinalTranscriptRef.current;
      if (!previous) {
        return cumulativeFinalText;
      }

      if (cumulativeFinalText.startsWith(previous)) {
        const deltaText = cumulativeFinalText.slice(previous.length);
        return normalizeSpacing(deltaText);
      }

      // If recognizer rewrites earlier words, prefer the latest final phrase.
      return cumulativeFinalText;
    },
    [normalizeSpacing],
  );

  const buildLiveTranscriptFromResults = useCallback(
    (results: ArrayLike<SpeechRecognitionResultLike>) => {
      const finalParts: string[] = [];
      const interimParts: string[] = [];

      for (let i = 0; i < results.length; i++) {
        const result = results[i];
        const text = result?.[0]?.transcript?.trim();
        if (!text) continue;

        if (result.isFinal) {
          finalParts.push(text);
        } else {
          interimParts.push(text);
        }
      }

      return {
        finalText: normalizeSpacing(finalParts.join(" ")),
        liveText: normalizeSpacing([...finalParts, ...interimParts].join(" ")),
      };
    },
    [normalizeSpacing],
  );

  const runAssistantFallbackReveal = useCallback((fullText: string) => {
    const words = fullText.split(/\s+/).filter(Boolean);
    if (words.length === 0) return;

    let index = 0;
    assistantFallbackIntervalRef.current = setInterval(() => {
      index += 1;
      const nextText = words.slice(0, index).join(" ");
      setAssistantLiveText(nextText);

      if (index >= words.length && assistantFallbackIntervalRef.current) {
        clearInterval(assistantFallbackIntervalRef.current);
        assistantFallbackIntervalRef.current = null;
      }
    }, ASSISTANT_FALLBACK_WORD_INTERVAL_MS);
  }, []);

  const getWordBoundarySliceIndex = useCallback(
    (text: string, charIndex: number) => {
      if (charIndex >= text.length) return text.length;
      const nextSpaceIndex = text.indexOf(" ", charIndex);
      return nextSpaceIndex === -1 ? text.length : nextSpaceIndex;
    },
    [],
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const windowWithSpeechRecognition = window as WindowWithSpeechRecognition;
    const SpeechRecognition =
      windowWithSpeechRecognition.SpeechRecognition ||
      windowWithSpeechRecognition.webkitSpeechRecognition ||
      null;

    if (SpeechRecognition) {
      setSupportsSpeechRecognition(true);
      const recognition: SpeechRecognitionInstance = new (
        SpeechRecognition as SpeechRecognitionType
      )();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = "en-US";
      recognitionRef.current = recognition;
    } else {
      setSupportsSpeechRecognition(false);
    }

    if ("speechSynthesis" in window) {
      speechSynthesisRef.current = window.speechSynthesis;
      setSupportsSpeechSynthesis(true);
    } else {
      setSupportsSpeechSynthesis(false);
    }
  }, []);

  const updateLevel = useCallback(() => {
    setLevel((prev) => Math.max(0, prev * 0.9));
  }, []);

  useEffect(() => {
    const id = setInterval(updateLevel, 150);
    return () => clearInterval(id);
  }, [updateLevel]);

  const speak = useCallback(
    (text: string) => {
      if (!speechSynthesisRef.current) return;
      if (!text.trim()) return;

      const synth = speechSynthesisRef.current;
      clearAssistantTimers();
      setAssistantLiveText("");
      setActiveDisplayMode("assistant");

      if (synth.speaking) {
        synth.cancel();
      }

      const utterance = new SpeechSynthesisUtterance(text);

      const voices = synth.getVoices();
      const preferredVoice =
        voices.find(
          (v) =>
            v.lang.startsWith("en") && v.name.toLowerCase().includes("male"),
        ) ||
        voices.find((v) => v.lang.startsWith("en")) ||
        voices[0];

      if (preferredVoice) {
        utterance.voice = preferredVoice;
      }

      utterance.rate = 1;
      utterance.pitch = 1;
      utterance.volume = 1;

      let hasBoundaryEvents = false;

      utterance.onstart = () => {
        setIsSpeaking(true);
        runAssistantFallbackReveal(text);
      };
      utterance.onboundary = (event) => {
        hasBoundaryEvents = true;
        if (assistantFallbackIntervalRef.current) {
          clearInterval(assistantFallbackIntervalRef.current);
          assistantFallbackIntervalRef.current = null;
        }

        const index = getWordBoundarySliceIndex(text, event.charIndex);
        setAssistantLiveText(text.slice(0, index).trim());
      };
      utterance.onend = () => {
        setIsSpeaking(false);
        if (!hasBoundaryEvents && assistantFallbackIntervalRef.current) {
          clearInterval(assistantFallbackIntervalRef.current);
          assistantFallbackIntervalRef.current = null;
        }
        setAssistantLiveText(text);
        scheduleAssistantTextClear();
      };
      utterance.onerror = () => {
        setIsSpeaking(false);
        setAssistantLiveText(text);
        scheduleAssistantTextClear();
      };

      synth.speak(utterance);
    },
    [
      clearAssistantTimers,
      getWordBoundarySliceIndex,
      runAssistantFallbackReveal,
      scheduleAssistantTextClear,
    ],
  );

  const sendToAssistant = useCallback(
    async (updatedMessages: ChatMessage[], retryCount = 0) => {
      if (inFlightRequestRef.current) {
        return;
      }

      const now = Date.now();
      const elapsed = now - lastRequestAtRef.current;
      if (elapsed < REQUEST_COOLDOWN_MS) {
        const waitSeconds = ((REQUEST_COOLDOWN_MS - elapsed) / 1000).toFixed(1);
        setError(
          `Please wait ${waitSeconds}s before sending the next voice request.`,
        );
        return;
      }

      const messagesForRequest =
        updatedMessages.length > MAX_MESSAGES_PER_REQUEST
          ? updatedMessages.slice(-MAX_MESSAGES_PER_REQUEST)
          : updatedMessages;

      inFlightRequestRef.current = true;
      lastRequestAtRef.current = now;

      try {
        setError(null);

        const response = await fetch("/api/voice-assistant", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ messages: messagesForRequest }),
        });

        if (response.status === 429) {
          const data = (await response.json()) as AssistantApiResponse;
          const retryAfterSeconds = data.retryAfterSeconds ?? 10;

          if (retryCount < MAX_RATE_LIMIT_RETRY) {
            setError(`Rate limited. Retrying in ${retryAfterSeconds}s...`);
            inFlightRequestRef.current = false;
            await new Promise((resolve) =>
              setTimeout(resolve, retryAfterSeconds * 1000),
            );
            return sendToAssistant(updatedMessages, retryCount + 1);
          }

          setError(
            `Rate limited. Please wait ${retryAfterSeconds}s and try again.`,
          );
          return;
        }

        if (!response.ok) {
          const text = await response.text();
          console.error("Voice assistant API error:", text);
          setError("I had trouble reaching the assistant. Please try again.");
          return;
        }

        const data = (await response.json()) as AssistantApiResponse;
        const assistantText =
          data.content ??
          "I could not generate a response right now. Please try again.";

        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: assistantText },
        ]);
        speak(assistantText);
      } catch (err) {
        console.error("Voice assistant request failed:", err);
        setError("Something went wrong while talking to the assistant.");
      } finally {
        inFlightRequestRef.current = false;
      }
    },
    [speak],
  );

  const commitFinalizedUserSpeech = useCallback(
    (finalizedText: string) => {
      const normalizedFinalTranscript = finalizedText.toLowerCase();
      const now = Date.now();

      if (
        normalizedFinalTranscript === lastFinalTranscriptRef.current &&
        now - lastFinalTranscriptAtRef.current < DUPLICATE_TRANSCRIPT_WINDOW_MS
      ) {
        return;
      }

      lastFinalTranscriptRef.current = normalizedFinalTranscript;
      lastFinalTranscriptAtRef.current = now;

      setTranscript(finalizedText);
      setUserLiveText(finalizedText);
      setActiveDisplayMode("listening");

      const userMessage: ChatMessage = {
        role: "user",
        content: finalizedText,
      };

      setMessages((prev) => {
        const updated = [...prev, userMessage];
        void sendToAssistant(updated);
        return updated;
      });
    },
    [sendToAssistant],
  );

  const handleResult = useCallback(
    (event: SpeechRecognitionEventLike) => {
      const { finalText, liveText } = buildLiveTranscriptFromResults(
        event.results,
      );

      if (liveText) {
        const hasNewSpeechActivity =
          liveText !== lastCommittedFinalTranscriptRef.current;
        if (hasNewSpeechActivity) {
          setUserLiveText("");
        }
        setTranscript(liveText);
        setActiveDisplayMode("listening");
        setLevel(1);
      } else if (isListening) {
        setTranscript("");
      }

      if (finalText && finalText !== stableFinalTranscriptRef.current) {
        stableFinalTranscriptRef.current = finalText;
        pendingFinalTranscriptRef.current = finalText;
        setUserLiveText("");
        clearSpeechFinalizeTimer();
        finalizeSpeechTimeoutRef.current = setTimeout(() => {
          const cumulativeFinalText = pendingFinalTranscriptRef.current;
          if (cumulativeFinalText) {
            const finalizedText =
              extractIncrementalFinalText(cumulativeFinalText);
            if (finalizedText) {
              commitFinalizedUserSpeech(finalizedText);
            }
            lastCommittedFinalTranscriptRef.current = cumulativeFinalText;
            pendingFinalTranscriptRef.current = "";
          }
        }, USER_FINALIZE_DEBOUNCE_MS);
      }
    },
    [
      buildLiveTranscriptFromResults,
      clearSpeechFinalizeTimer,
      commitFinalizedUserSpeech,
      extractIncrementalFinalText,
      isListening,
    ],
  );

  const attachRecognitionHandlers = useCallback(() => {
    const recognition = recognitionRef.current;
    if (!recognition) return;

    recognition.onresult = handleResult;
    recognition.onerror = (event: unknown) => {
      console.error("Speech recognition error:", event);
      setError("Speech recognition encountered an error.");
      if (listeningRef.current) {
        try {
          recognition.abort();
        } catch {
          // ignore
        }
      }
    };
    recognition.onend = () => {
      if (listeningRef.current) {
        try {
          recognition.start();
        } catch (err) {
          console.error("Failed to restart recognition:", err);
          setError(
            "Unable to continue listening. Please toggle the microphone again.",
          );
          setIsListening(false);
          listeningRef.current = false;
        }
      }
    };
  }, [handleResult]);

  const startListening = useCallback(() => {
    if (!supportsSpeechRecognition) return;
    const recognition = recognitionRef.current;
    if (!recognition) return;

    try {
      attachRecognitionHandlers();
      clearSpeechFinalizeTimer();
      pendingFinalTranscriptRef.current = "";
      stableFinalTranscriptRef.current = "";
      lastCommittedFinalTranscriptRef.current = "";
      setUserLiveText("");
      setTranscript("");
      recognition.start();
      listeningRef.current = true;
      setIsListening(true);
      setActiveDisplayMode("listening");
      setError(null);
    } catch (err) {
      console.error("Error starting recognition:", err);
      setError("Unable to start speech recognition.");
    }
  }, [
    attachRecognitionHandlers,
    clearSpeechFinalizeTimer,
    supportsSpeechRecognition,
  ]);

  const stopListening = useCallback(() => {
    const recognition = recognitionRef.current;
    listeningRef.current = false;
    setIsListening(false);
    clearSpeechFinalizeTimer();
    pendingFinalTranscriptRef.current = "";
    stableFinalTranscriptRef.current = "";
    lastCommittedFinalTranscriptRef.current = "";
    setUserLiveText("");
    setTranscript("");
    setActiveDisplayMode((prev) => (isSpeaking ? prev : "idle"));
    if (!recognition) return;
    try {
      recognition.stop();
    } catch {
      // ignore
    }
  }, [clearSpeechFinalizeTimer, isSpeaking]);

  const sendTextMessage = useCallback(
    (text: string) => {
      const trimmed = text.trim();
      if (!trimmed) return;

      const userMessage: ChatMessage = { role: "user", content: trimmed };
      setMessages((prev) => {
        const updated = [...prev, userMessage];
        void sendToAssistant(updated);
        return updated;
      });
    },
    [sendToAssistant],
  );

  useEffect(() => {
    return () => {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.abort();
        } catch {
          // ignore
        }
      }
      if (speechSynthesisRef.current) {
        speechSynthesisRef.current.cancel();
      }
      clearAssistantTimers();
      clearSpeechFinalizeTimer();
    };
  }, [clearAssistantTimers, clearSpeechFinalizeTimer]);

  return {
    activeDisplayMode,
    isListening,
    isSpeaking,
    supportsSpeechRecognition,
    supportsSpeechSynthesis,
    transcript,
    userLiveText,
    assistantLiveText,
    messages,
    error,
    level,
    suggestedPrompts: SUGGESTED_PROMPTS,
    startListening,
    stopListening,
    sendTextMessage,
  };
}

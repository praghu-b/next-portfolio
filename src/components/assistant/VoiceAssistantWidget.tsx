"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaMicrophone, FaMicrophoneSlash } from "react-icons/fa";
import { useVoiceAssistant } from "@/hooks/useVoiceAssistant";

const WAVE_BARS = Array.from({ length: 16 }, (_, i) => `wave-bar-${i}`);

export default function VoiceAssistantWidget() {
  const {
    activeDisplayMode,
    isListening,
    isSpeaking,
    supportsSpeechRecognition,
    supportsSpeechSynthesis,
    userLiveText,
    assistantLiveText,
    error,
    startListening,
    stopListening,
  } = useVoiceAssistant();

  const [isOpen, setIsOpen] = useState(false);

  const toggleMic = () => {
    if (!supportsSpeechRecognition) return;
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };

  const listeningIndicator = isListening ? "Listening..." : "Tap mic to start";

  const canUseVoice = supportsSpeechRecognition && supportsSpeechSynthesis;
  const panelText =
    activeDisplayMode === "assistant"
      ? assistantLiveText
      : activeDisplayMode === "listening"
        ? userLiveText || "Listening..."
        : "";

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed bottom-20 right-5 md:right-10 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-primary text-white shadow-lg hover:scale-105 transition-transform border border-white"
        aria-label="Toggle Prakash voice assistant"
      >
        <FaMicrophone className="w-6 h-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 flex items-center justify-center bg-white/40 backdrop-blur-md"
          >
            <div className="flex flex-col items-center gap-6">
              <div className="flex flex-col items-center gap-2">
                <p className="text-lg font-bold tracking-wide text-black">
                  Talk with Prakash
                </p>
                {canUseVoice ? (
                  <p className="text-xs text-black/60">{listeningIndicator}</p>
                ) : (
                  <p className="text-xs text-amber-200 text-center max-w-xs">
                    Your browser does not fully support real-time speech
                    features.
                  </p>
                )}
                {error && (
                  <p className="text-xs text-red-300 text-center max-w-xs">
                    {error}
                  </p>
                )}
              </div>

              <div className="flex flex-col items-center gap-4">
                <div className="relative flex items-center justify-center">
                  <AnimatePresence>
                    {isSpeaking && (
                      <motion.div
                        key="pulse"
                        className="absolute w-32 h-32 rounded-full bg-primary/30"
                        initial={{ scale: 0.8, opacity: 0.4 }}
                        animate={{ scale: 1.2, opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{
                          duration: 1.2,
                          repeat: Infinity,
                          ease: "easeOut",
                        }}
                      />
                    )}
                  </AnimatePresence>
                  <motion.div
                    className="relative w-18 h-18 rounded-full bg-primary flex items-center justify-center border border-white/40 shadow-xl"
                    animate={{
                      scale: isListening ? 1.08 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaMicrophone className="w-7 h-7 text-white" />
                  </motion.div>
                </div>

                <div className="flex flex-col items-center gap-3 h-10">
                  <div className="flex items-end gap-1 min-h-10">
                    {WAVE_BARS.map((barKey, i) => (
                      <motion.span
                        key={barKey}
                        className="w-[3px] rounded-full bg-emerald-300/90"
                        animate={
                          isSpeaking
                            ? {
                              height: [
                                6 + (i % 3) * 4,
                                22 + (i % 4) * 3,
                                10 + (i % 3) * 4,
                              ],
                            }
                            : {
                              height: [8, 8, 8],
                            }
                        }
                        transition={{
                          duration: 0.7 + (i % 4) * 0.05,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.03,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Move the response panel below the buttons */}
              <div className="flex flex-col items-center w-full">
                <div className="flex items-center justify-center gap-4 mb-3">
                  <button
                    type="button"
                    onClick={toggleMic}
                    disabled={!supportsSpeechRecognition}
                    className={`flex items-center justify-center w-11 h-11 rounded-full border transition-colors ${isListening
                        ? "bg-red-500 border-red-400 text-white"
                        : "bg-slate-900/70 border-slate-400/80 text-slate-100"
                      } ${!supportsSpeechRecognition ? "opacity-50 cursor-not-allowed" : ""}`}
                    aria-label={
                      isListening ? "Stop listening" : "Start listening"
                    }
                  >
                    {isListening ? (
                      <FaMicrophoneSlash className="w-5 h-5" />
                    ) : (
                      <FaMicrophone className="w-5 h-5" />
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="text-sm px-4 py-2 font-semibold rounded-full bg-white/10 text-black hover:bg-white/20 border-2 border-black/30"
                  >
                    Close
                  </button>
                </div>
                <div className="w-[min(90vw,28rem)] max-h-60 overflow-y-auto px-3 py-2 text-center font-semibold">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={activeDisplayMode}
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.2 }}
                      className={`text-sm leading-6 ${panelText ? "text-black/75" : "text-black/40"}`}
                    >
                      {panelText ||
                        "Tap the mic and ask about Prakash's work."}
                    </motion.p>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

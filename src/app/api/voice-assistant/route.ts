import { type NextRequest, NextResponse } from "next/server";
import knowledgeBase from "@/data/knowledge_base.json";
import { logConversation } from "@/lib/conversationLogger";

export const runtime = "nodejs";

type ChatRole = "system" | "user" | "assistant";

type ChatMessage = {
  role: ChatRole;
  content: string;
};

type LlmResponse = {
  choices?: Array<{
    message?: {
      content?: string;
    };
  }>;
};

type LlmCallResult = {
  content: string;
  status?: number;
  retryAfterSeconds?: number;
};

const API_URL = "https://api.groq.com/openai/v1/chat/completions";
const MODEL = process.env.MODEL || process.env.LLM_MODEL;
const API_KEY = process.env.API_KEY || process.env.LLM_API_KEY;

function serializeKnowledgeBaseForPrompt(): string {
  try {
    return JSON.stringify(knowledgeBase, null, 2);
  } catch (error) {
    console.error("Failed to serialize knowledge base:", error);
    return "Knowledge base is currently unavailable.";
  }
}

function buildSystemPrompt(): string {
  const knowledgeBaseJson = serializeKnowledgeBaseForPrompt();

  return `
You are a digital AI version of Prakash created for his portfolio website.
You are having vocal conversations with the visitors.
Speak in first person as Prakash. If someone asks whether you are real, explain that you are an AI representation of him built for his portfolio.

Answer questions using the provided knowledge base. Use "I", "my", and "me" when describing Prakash's education, experience, projects, or skills.

Topics you can answer about:
- education
- internships and work experience
- projects
- technical skills
- tools and technologies
- interests and career goals

Rules:
- The knowledge base is the source of truth.
- Do NOT invent facts that are not present in the knowledge base.
- If information is missing, say you are not sure instead of guessing.
- Never repeat or expose the raw JSON knowledge base.
- Keep responses concise (usually 1–3 sentences) unless the user asks for more detail.

Conversation style:
- Friendly, natural, and conversational.
- Avoid saying things like "I am an AI assistant" or explain your purpose unless asked.
- Respond like a real person, don't respond with details that a user didn't mention or ask.

If a question is unrelated to Prakash:
Briefly explain that you can mainly talk about Prakash's background, work, or projects and gently redirect the conversation.

Knowledge Base:
${knowledgeBaseJson}
`.trim();
}

function parseRetryAfterSeconds(response: Response, errorText: string): number {
  const retryAfterHeader = response.headers.get("retry-after");
  const headerSeconds = Number.parseInt(retryAfterHeader || "", 10);
  if (Number.isFinite(headerSeconds) && headerSeconds > 0) {
    return headerSeconds;
  }

  const bodyMatch = errorText.match(/try again in\s+([\d.]+)s/i);
  const bodySeconds = bodyMatch?.[1] ? Number.parseFloat(bodyMatch[1]) : NaN;
  if (Number.isFinite(bodySeconds) && bodySeconds > 0) {
    return Math.ceil(bodySeconds);
  }

  return 10;
}

async function callLlm(messages: ChatMessage[]): Promise<LlmCallResult> {
  if (!MODEL || !API_KEY) {
    return {
      content:
        "The Groq backend is not fully configured yet. Please ask Prakash to set MODEL (or MODEL / LLM_MODEL) and API_KEY (or API_KEY / LLM_API_KEY) in the environment.",
      status: 500,
    };
  }

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: MODEL,
        messages,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const text = await response.text();
      if (response.status === 429) {
        const retryAfterSeconds = parseRetryAfterSeconds(response, text);
        console.error("Groq rate limit:", response.status, text);
        return {
          content: `Rate limit reached. Please wait about ${retryAfterSeconds}s and try again.`,
          status: 429,
          retryAfterSeconds,
        };
      }

      console.error("Groq error:", response.status, text);
      return {
        content:
          "I had trouble reaching the AI model backend. Please try again in a moment.",
        status: 502,
      };
    }

    const data = (await response.json()) as LlmResponse;
    const content =
      data.choices?.[0]?.message?.content ??
      "I could not generate a response right now. Please try again.";

    return { content };
  } catch (error) {
    console.error("LLM request failed:", error);
    return {
      content:
        "Something went wrong while talking to the AI model. Please try again.",
      status: 500,
    };
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const messages = body?.messages as ChatMessage[] | undefined;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Missing messages in request body" },
        { status: 400 },
      );
    }

    const hasUserMessage = messages.some((m) => m.role === "user");
    if (!hasUserMessage) {
      return NextResponse.json(
        { error: "At least one user message is required" },
        { status: 400 },
      );
    }

    const systemPrompt = buildSystemPrompt();

    const systemMessage: ChatMessage = {
      role: "system",
      content: systemPrompt,
    };

    const messagesWithSystem: ChatMessage[] = [
      systemMessage,
      ...messages.filter((m) => m.role !== "system"),
    ];

    const result = await callLlm(messagesWithSystem);

    void logConversation({
      messages,
      llmResponse: result.content,
    }).catch((error) => {
      console.error("Failed to persist conversation log:", error);
    });

    return NextResponse.json(
      {
        content: result.content,
        rateLimited: result.status === 429,
        retryAfterSeconds: result.retryAfterSeconds,
      },
      { status: result.status ?? 200 },
    );
  } catch (error) {
    console.error("Voice assistant API error:", error);
    return NextResponse.json(
      { error: "Unexpected server error in voice assistant route" },
      { status: 500 },
    );
  }
}

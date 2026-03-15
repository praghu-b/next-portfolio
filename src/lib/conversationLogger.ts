import { appendConversationRecord } from "@/lib/storage/fileLogger";

type ChatMessage = {
  role: "system" | "user" | "assistant";
  content: string;
};

type ConversationLogInput = {
  messages: ChatMessage[];
  llmResponse: string;
};

type NonSystemMessage = {
  role: "user" | "assistant";
  content: string;
};

function isNonSystemMessage(message: ChatMessage): message is NonSystemMessage {
  return message.role === "user" || message.role === "assistant";
}

function getLatestUserPrompt(messages: ChatMessage[]): string {
  for (let index = messages.length - 1; index >= 0; index -= 1) {
    const message = messages[index];
    if (isNonSystemMessage(message) && message.role === "user") {
      return message.content;
    }
  }

  return "";
}

export async function logConversation(
  input: ConversationLogInput,
): Promise<void> {
  const prompt = getLatestUserPrompt(input.messages);
  if (!prompt) {
    return;
  }

  await appendConversationRecord({
    prompt,
    response: input.llmResponse,
  });
}

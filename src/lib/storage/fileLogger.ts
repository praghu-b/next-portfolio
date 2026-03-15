import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";

export type PersistedConversationRecord = {
  prompt: string;
  response: string;
};

const DEFAULT_LOG_DIR = "conversations";
const DEFAULT_MAX_CONTENT_CHARS = 4000;

function resolveLogDirectory(): string {
  const configuredPath = process.env.CONVERSATION_LOG_DIR?.trim();
  const logDir = configuredPath || DEFAULT_LOG_DIR;
  return path.isAbsolute(logDir) ? logDir : path.join(process.cwd(), logDir);
}

function getDailyLogFilePath(): string {
  const date = new Date().toISOString().slice(0, 10);
  return path.join(resolveLogDirectory(), `${date}.jsonl`);
}

function getMaxContentChars(): number {
  const raw = Number.parseInt(
    process.env.CONVERSATION_LOG_MAX_CHARS || "",
    10,
  );

  if (!Number.isFinite(raw) || raw <= 0) {
    return DEFAULT_MAX_CONTENT_CHARS;
  }

  return raw;
}

function normalizeText(input: string, maxChars: number): string {
  const compact = input.replace(/\s+/g, " ").trim();
  return compact.length > maxChars
    ? `${compact.slice(0, maxChars)}...[truncated]`
    : compact;
}

export async function appendConversationRecord(
  record: PersistedConversationRecord,
): Promise<void> {
  const maxChars = getMaxContentChars();
  const safeRecord: PersistedConversationRecord = {
    prompt: normalizeText(record.prompt, maxChars),
    response: normalizeText(record.response, maxChars),
  };

  const filePath = getDailyLogFilePath();
  await mkdir(path.dirname(filePath), { recursive: true });
  await appendFile(filePath, `${JSON.stringify(safeRecord)}\n`, "utf8");
}

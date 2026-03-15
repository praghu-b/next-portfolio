# Conversation Logging

The voice assistant API stores each exchange in JSONL format with only the user prompt and LLM response.

## Where records are stored

- Default directory: `conversations/`
- Default file name: `YYYY-MM-DD.jsonl`
- Full default path: `<project-root>/conversations/YYYY-MM-DD.jsonl`

## Record schema

Each line in the JSONL file is one conversation record.

```json
{
  "prompt": "Tell me about your projects",
  "response": "I have built StartzyAI and a student management portal..."
}
```

## Environment variables

- `CONVERSATION_LOG_DIR` (optional): absolute or project-relative directory for log files.
- `CONVERSATION_LOG_MAX_CHARS` (optional): max characters per prompt/response before truncation.

## Notes

- Logging failures do not break API responses.
- This setup is intended for local/self-hosted Node runtime with filesystem persistence.
- For serverless production persistence, switch to a database-backed logger.

## Related Docs

- Architecture: `docs/architecture.md`
- API: `docs/api.md`

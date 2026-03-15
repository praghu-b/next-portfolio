# API Documentation

## POST /api/voice-assistant

Voice assistant endpoint used by the client hook to obtain LLM responses grounded in portfolio knowledge.

### Runtime

- Next.js Route Handler
- Runtime: `nodejs`

### Request Body

```json
{
  "messages": [
    {
      "role": "system | user | assistant",
      "content": "string"
    }
  ]
}
```

### Validation Rules

- `messages` must exist and be a non-empty array.
- At least one `user` role message must be present.
- `system` messages from client are ignored and replaced by server-side system prompt.

### Success Response

HTTP status: `200`

```json
{
  "content": "Assistant response text",
  "rateLimited": false
}
```

### Rate Limited Response

HTTP status: `429`

```json
{
  "content": "Rate limit reached. Please wait about 10s and try again.",
  "rateLimited": true,
  "retryAfterSeconds": 10
}
```

### Upstream/Server Error Responses

Possible statuses: `500`, `502`

```json
{
  "content": "I had trouble reaching the AI model backend. Please try again in a moment.",
  "rateLimited": false
}
```

When body validation fails, the route returns:

HTTP status: `400`

```json
{
  "error": "Missing messages in request body"
}
```

or

```json
{
  "error": "At least one user message is required"
}
```

## Environment Variables

Required:

- `MODEL` or `LLM_MODEL`: model identifier passed to Groq
- `API_KEY` or `LLM_API_KEY`: API key for Groq

Optional (logging):

- `CONVERSATION_LOG_DIR`: directory for log files
- `CONVERSATION_LOG_MAX_CHARS`: truncation threshold per prompt/response

## Integration Notes

- The route builds a system prompt using `src/data/knowledge_base.json`.
- Groq endpoint used: `https://api.groq.com/openai/v1/chat/completions`.
- Temperature is currently `0.7`.
- Logging is asynchronous and stores only prompt-response pairs.

## Example cURL

```bash
curl -X POST http://localhost:3000/api/voice-assistant \
  -H "Content-Type: application/json" \
  -d '{
    "messages": [
      { "role": "user", "content": "Tell me about your projects" }
    ]
  }'
```

## Related Docs

- Architecture overview: `docs/architecture.md`
- Logging details: `docs/conversation-logging.md`

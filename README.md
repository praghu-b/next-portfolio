# Next Portfolio

A personal portfolio built with Next.js, featuring an AI-powered voice assistant that answers questions about Prakash using a structured knowledge base.

## Features

- AI voice assistant widget integrated into the portfolio UI
- Speech-to-text input using browser Speech Recognition APIs
- Text-to-speech assistant responses with live speaking/listening animations
- Knowledge-base-grounded responses (education, projects, skills, experience)
- Rate-limit aware assistant flow with retry guidance
- Server-side conversation logging in JSONL format
- Prompt-response-only persistence for lightweight analytics and reuse
- Responsive layout with animated sections and assistant interactions

## Tech Stack

- Next.js 15 (App Router)
- React 19 + TypeScript
- Tailwind CSS 4
- Framer Motion
- Groq Chat Completions API (OpenAI-compatible endpoint)
- Biome (formatting and linting)

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Create a local environment file and add the values below.

```env
MODEL=<your_model_name>
API_KEY=<your_groq_api_key>
CONVERSATION_LOG_DIR=conversations
CONVERSATION_LOG_MAX_CHARS=4000
```

Supported aliases:

- `MODEL` or `LLM_MODEL`
- `API_KEY` or `LLM_API_KEY`

### 3. Run the dev server

```bash
npm run dev
```

Open `http://localhost:3000`.

## Project Structure

- `src/app`: App Router pages, layout, and API routes
- `src/components`: UI sections, common components, assistant widget
- `src/hooks`: custom React hooks including voice assistant behavior
- `src/data`: static portfolio data and assistant knowledge base
- `src/lib`: server-side utilities such as conversation logging
- `docs`: architecture and API documentation

## Voice Assistant Endpoint

- Route: `POST /api/voice-assistant`
- Accepts chat messages
- Injects a server-side system prompt built from `src/data/knowledge_base.json`
- Returns assistant response content and rate-limit metadata

See full API docs: `docs/api.md`

## Documentation

- Architecture explanation: `docs/architecture.md`
- API documentation: `docs/api.md`
- Conversation logging: `docs/conversation-logging.md`

## Scripts

- `npm run dev`: Start local dev server with Turbopack
- `npm run build`: Build for production
- `npm run start`: Start production server
- `npm run lint`: Run Biome checks
- `npm run format`: Format code with Biome

## Notes

- Conversation logs are intended for local or self-hosted Node runtime persistence.
- Logging failures are non-blocking and do not fail assistant responses.
- Do not commit real secrets in repository-tracked files.

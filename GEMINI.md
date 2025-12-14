# SocialAI - AI Social Media Management Tool

## Project Overview
An AI-powered social media management platform for marketing agencies. Features include AI content generation, post scheduling, and analytics.

## Tech Stack
- **Framework**: SvelteKit (Runes)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI (planned)
- **Runtime**: Bun / Node

## Architecture
- **Frontend**: SvelteKit with server-side rendering.
- **AI**: Integration with Gemini API for text and image generation.
- **State Management**: Svelte 5 Runes ($state).
- **Database**: Mocked for now / Supabase (future).

## Pages & Routes
- `/`: Landing page (Public)
- `/login`: Login page (Public)
- `/signup`: Registration page (Public)
- `/forgot-password`: Password recovery (Public)
- `/app/dashboard`: Main overview (Protected)
- `/app/create`: AI Post Creator (Protected)
- `/app/schedule`: Calendar/Scheduler (Protected)
- `/app/analytics`: Performance stats (Protected)
- `/app/accounts`: Social media account linking (Protected)
- `/app/settings`: User settings (Protected)

## Workflow
1. Plan & Design
2. Setup UI (Tailwind + Shadcn)
3. Implement Auth Pages
4. Implement Dashboard Layout
5. Implement Features (Create, Schedule, Analytics)
6. Finalize & Test

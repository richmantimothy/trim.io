# Trim.io - AI Social Media Management Tool

## Project Overview
**Trim.io** is an AI-powered social media management platform for marketing agencies. Features include AI content generation, post scheduling, and analytics.
*Brand Promise*: "Trim the noise, focus on growth."

## Tech Stack
- **Framework**: SvelteKit (Runes)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 (Deep Teal Theme)
- **UI Components**: Shadcn UI (bits-ui + tailwind-merge)
- **Runtime**: Bun / Node
- **AI**: Google Gemini API (@google/generative-ai)
- **Design**: Canva Button SDK Integration

## Branding
- **Name**: Trim.io
- **Theme**: Deep Teal (Primary: `#0f766e`, HSL: `175 77% 26%`) & Clean White.
- **Font**: Inter (Sans-serif)

## Architecture
- **Frontend**: SvelteKit with server-side rendering.
- **AI**: Integration with Gemini API for text and image generation.
- **State Management**: Svelte 5 Runes ($state).
- **Database**: Mocked for now / Supabase (future).

## Key Features
- **AI Content Generator**: Uses Gemini Flash 1.5 to generate engaging social posts based on topic and tone.
- **Design Studio**: Integrated Canva Button for designing visuals directly within the app.

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
- `/api/generate-post`: Backend endpoint for AI generation

## Workflow
1. Plan & Design
2. Setup UI (Tailwind + Shadcn)
3. Implement Auth Pages
4. Implement Dashboard Layout
5. Implement Features (Create, Schedule, Analytics)
6. Finalize & Test

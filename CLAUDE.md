# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```sh
npm install        # Install dependencies
npm run dev        # Start dev server (Vite, localhost)
npm run build      # Production build → dist/ (also copies 404.html and .nojekyll)
npm run lint       # ESLint
npm run preview    # Preview the production build locally
```

There are no automated tests in this project. After every feature or change, verify correctness by running:

1. `npm run build` — must succeed with no errors before committing any changes.
2. `npm run lint` — fix any lint errors introduced by the change.

## Architecture

This is a single-page React + TypeScript portfolio site built with Vite and deployed to GitHub Pages via `.github/workflows/deploy.yml` (triggers on push to `main`).

**Routing** (`src/App.tsx`): Two real routes (`/` → `Index`, `/certifications` → `Certifications`) plus a catch-all `NotFound`. The `404.html` at the project root is a copy used by GitHub Pages to handle SPA deep-links.

**Page structure** (`src/pages/Index.tsx`): The homepage is a single scrollable page composed of section components stacked in order: `Navigation → Hero → About → Projects → Experience → Skills → Achievements → Contact`. Each section lives in `src/components/`.

**Animations**: Scroll-triggered entrance animations use the custom `useInView` hook (`src/hooks/useInView.ts`), which wraps `IntersectionObserver`. Components apply Tailwind transition classes conditionally based on the `inView` boolean.

**Styling**: Tailwind CSS with a custom theme in `tailwind.config.ts`. Colors are CSS variables (`hsl(var(--primary))` etc.) defined in the global stylesheet, enabling light/dark mode via `next-themes`. Custom fonts: `Inter` (body, `font-sans`) and `Sora` (headings, `font-display`). Custom keyframe animations (`fade-in`, `float`, `glow`, etc.) are defined in the Tailwind config.

**UI components**: shadcn/ui components live in `src/components/ui/` and should not be hand-edited — regenerate them via the shadcn CLI if updates are needed.

## Comments

Only add comments for genuinely complex logic (e.g., intersection observer threshold tuning, Formspree error handling flow). Do not comment self-evident JSX, straightforward state updates, or standard Tailwind class usage.

**Contact form**: Uses Formspree (`FORMSPREE_ENDPOINT` constant in `src/components/Contact.tsx`) — no backend required.

**Static assets**: `public/resume.pdf` is the resume file referenced in the Contact section. The `BASE_URL` env variable (set by Vite) is used when linking to assets in `public/` so paths resolve correctly on GitHub Pages.

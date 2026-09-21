# Aarav Mittal — Portfolio Website

Personal portfolio for Aarav Mittal (EECS + Business @ Illinois '28, Artificial Intelligence '29), built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Stack

- React 18 + TypeScript (Create React App)
- Tailwind CSS
- Framer Motion
- React Router

## Project layout

```
src/
  about/        About section
  contact/      Contact / email link
  experience/   Experience timeline (data lives in src/constants/projects.ts)
  hero/         Landing hero
  navbar/       Sticky navbar
  projects/     Projects grid + per-project modal
  skills/       Skills grid (data lives in src/constants/skills.ts)
  shared/       Shared components, models, hooks
public/
  images/                Avatar / about image (add yours here)
  icons/libs/            Skill icons (kept from the original template)
  icons/organizations/   Company logos used in the experience timeline
```

## Where to add your content

- **Personal links / email**: `src/constants/links.ts`
- **Experience timeline**: `EXPERIENCES` in `src/constants/projects.ts`
- **Projects grid + modals**: `PROJECTS` in `src/constants/projects.ts`
- **Skill groupings**: `src/constants/skills.ts`
- **About copy / avatar**: `src/about/pages/About.tsx`
- **Hero name / subheader**: `src/hero/pages/Hero.tsx` and `src/hero/components/Subheader.tsx`
- **Page title / meta**: `public/index.html` and `public/manifest.json`

## Scripts

In the project directory you can run:

```bash
npm install     # install dependencies
npm start       # run dev server at http://localhost:3000
npm run build   # production build into ./build
npm test        # interactive test runner
```

## Deployment

This project is configured for Firebase Hosting (`firebase.json`, `.firebaserc`). Update `.firebaserc` to point at your own Firebase project before deploying.

```bash
npm run build
npx firebase deploy
```

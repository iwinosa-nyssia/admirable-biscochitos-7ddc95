# AGENTS.md

This document provides an overview of the project structure for developers and AI agents working on this codebase.

## Project Overview

A nonprofit organization site for "Wellspring Foundation" — a marketing/informational site presenting the mission, programs, impact stats, a donate call-to-action, and a contact form. Built with TanStack Start and deployed on Netlify.

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 |
| Icons | lucide-react |
| Forms | Netlify Forms |
| Language | TypeScript |
| Deployment | Netlify |

## Directory Structure

```
├── public
│   ├── contact-form.html   # Static skeleton so Netlify Forms detects the "contact" form at build time
│   └── placeholder.png     # Placeholder imagery for programs
├── src
│   ├── data
│   │   └── programs.ts     # Program content (name, description, image, stats)
│   ├── routes
│   │   ├── __root.tsx      # Root layout, page metadata
│   │   ├── index.tsx       # Home page: hero, impact stats, programs grid, donate CTA
│   │   ├── contact.tsx     # Contact form (Netlify Forms)
│   │   └── programs
│   │       └── $slug.tsx   # Individual program detail page
│   ├── router.tsx
│   └── styles.css
```

## Conventions

- Routes are file-based (TanStack Router). Add a page by creating a file under `src/routes`.
- Program content lives in `src/data/programs.ts` as plain data — edit that file to add or change programs rather than hardcoding content in components.
- The contact form uses Netlify Forms and requires the static `public/contact-form.html` skeleton to stay in sync with the fields submitted by `src/routes/contact.tsx` (same field names, same `form-name` value). Netlify Forms only work on a deployed site, not in local dev.
- Styling uses Tailwind utility classes directly in components; no separate component library.

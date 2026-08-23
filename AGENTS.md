# AGENTS.md

Personal portfolio site: Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS v4, deployed on Vercel. Single package, no backend, no tests.

## Commands

- Dev: `npm run dev` · Build: `npm run build`
- Typecheck: `npm run type-check`
- Lint: `npx eslint .` (**not** `npm run lint` — that runs `next lint`, which was removed in Next 16 and fails). Autofix variant: `npm run lint:fix`.
- Baseline: exactly one pre-existing eslint error in `src/context/LanguageContext.tsx` (`react-hooks/set-state-in-effect`). Lint output should never exceed that one error.
- `npm run format` fails: prettier is not installed despite being referenced in package.json.
- No test framework exists. Verification = `npm run type-check` && `npx eslint .` && `npm run build`.
- Requires Node >= 20, npm >= 10.

## Gotchas

- README is stale: says Next.js 15 / Framer Motion. Actual stack: Next 16.2.2, and animations use the `motion` package — import from `motion/react`, never `framer-motion`.
- Tailwind v4 with **no tailwind.config**: design tokens are CSS variables in `src/app/globals.css` (`:root` light / `.dark` dark), mapped to utilities via `@theme inline`. To add a color, define both the variable and the `--color-*` mapping.
- Dark mode is class-based (`.dark` on `<html>`), applied pre-hydration by an inline script in `src/app/layout.tsx`; default is dark, persisted in localStorage key `theme`. Don't break this script or the page flashes light on load.
- i18n (EN/ID) is custom client-side: `LanguageContext` + localStorage key `portfolio-lang`. `src/data/translations/id.ts` is NOT typed against `en.ts` — missing keys fail silently at runtime as `undefined`. Keep keys in sync manually.
- `next/image` remote hosts are allowlisted in `next.config.ts` (`remotePatterns`). Adding images from a new domain requires updating it or the build/runtime errors.
- SEO JSON-LD (Person/Project/WebSite/Service) is injected in `layout.tsx` from `src/data/seo.ts`; `sitemap.ts` and `robots.ts` also derive from it. Update `seo.ts`, not hardcoded strings.
- OG images are generated at request/build time via `next/og` (`src/app/opengraph-image.tsx`, `src/app/projects/[slug]/opengraph-image.tsx`) from `profile`/`projects` data — there is no static OG image file; colors there are hardcoded hex, not theme tokens.

## Architecture

- Data-first: all site content (profile, projects, skills, socials, nav, experience, certificates, testimonials) lives in plain TS objects under `src/data/`; components in `src/components/sections/` just render them. Content edits = edit data files, no component changes.
- Routes: `src/app/page.tsx` (one-page portfolio with section anchors like `/#work`) and dynamic `/projects/[slug]` — a server component (SSG via `generateStaticParams`, metadata from `projects.ts` + `seo.ts`) that delegates all UI to client component `ProjectDetailClient.tsx`.
- Everything interactive is `"use client"`; there is effectively no server-side data fetching.

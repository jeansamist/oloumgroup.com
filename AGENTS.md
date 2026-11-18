# Oloum Group website (oloumgroup.com)

Next.js 16 (App Router) + React 19 + Tailwind CSS v4 group site, bilingual French/English. Same structure as the Yves Oloume SARL site, animations from the Supplies and Works site (GSAP ScrollTrigger/SplitText + Lenis).

## Commands

- `pnpm dev` — dev server (honours `$PORT`)
- `pnpm build` / `pnpm start` — production build (type-checks) and server
- `pnpm copy` — regenerate `docs/03-*.md` from the dictionaries

## Project structure

- `src/proxy.ts` — unprefixed URLs redirect to `/fr/...`; unknown paths are rewritten to `/[locale]/page-introuvable` (404). Every page path must be in `src/lib/routes.ts`.
- `src/i18n/types.ts` — page data model: `PageData` = hero + `blocks: Block[]` (typed union)
- `src/i18n/dictionaries/fr/*.ts` — French copy (source of truth), `en/*.ts` typed against it via `Dictionary`
- `src/components/sections/Blocks.tsx` — renders blocks; one component per block in `sections/blocks/`
- `src/components/sections/PageView.tsx` — `pageView(key)` / `pageMetadata(key)` used by every `app/[locale]/**/page.tsx`
- `src/components/motion` — `MotionDirector` (data-attribute animations: `data-reveal`, `data-split`, `data-words`, `data-parallax`, `data-count`, `data-draw`), `SmoothScroll` (Lenis), `PageTransition`
- `src/components/layout` — Loader, Header (mega-menus), MobileMenu, Footer (wordmark), Cursor, ScrollProgress, CtaBand
- `src/components/ui/Logo.tsx` — MOCK logos (`Logo`, `ModuleMark`, `EntityMark`); swap here when real logos arrive
- `src/lib/og.tsx` — Open Graph image renderer; each page folder has an `opengraph-image.tsx`
- `src/lib/site.ts` — group info, images, site URL (Vercel env fallback)

## Conventions

- All user-facing text lives in the dictionaries (FR and EN). `*word*` = amber highlight, `**bold**`, `[X]` = placeholder chip.
- To add a page: route in `routes.ts`, `PageData` in both dictionaries, folder with `page.tsx` + `opengraph-image.tsx`.
- Server Components by default; `"use client"` only for interactivity.
- Images live in `src/assets/images` and are referenced by key (`ImageKey`).
- Default exports for components (a few modules also export named helpers).
- Mock content to validate is listed in `docs/05-A-FOURNIR.md`.

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

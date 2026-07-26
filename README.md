# Blanco Steel Detailing Services — Website (Phase 2 Scaffold)

Next.js 15 / React 19 / TypeScript / Tailwind project scaffold. This is the
**Phase 2** deliverable: folder structure, config, design tokens, and typed
content modules. Components (Phase 3) and full pages (Phase 4) are not yet
built — `src/app/page.tsx` is a placeholder so the project runs.

## Scope note (applies to all later phases)
Per client feedback after Phase 1: **Blanco is a structural steel detailing
company only** — not a multi-discipline BIM/design practice. All content in
`src/content/services.ts` reflects that: five detailing-focused services,
built around **Tekla Structures** as the primary platform and **AISC**
compliance as the core credibility claim. (Phase 1 document itself is left
unedited, as instructed — this note is the source of truth going forward.)

## Getting started
```bash
npm install
npm run dev
```

## What's in this phase

| Area | Files |
|---|---|
| Config | `package.json`, `tsconfig.json`, `next.config.ts`, `tailwind.config.ts`, `postcss.config.mjs`, `eslint.config.mjs`, `.prettierrc` |
| Design tokens | `tailwind.config.ts` (colors/type/radius/spacing), `src/styles/globals.css` |
| Fonts | Wired in `src/app/layout.tsx` (Inter, Plus Jakarta Sans, IBM Plex Mono) |
| Routing skeleton | `src/app/(marketing)/**` route folders for every page in the Phase 1 sitemap |
| Types | `src/types/index.ts` |
| Constants | `src/constants/brand.ts`, `nav.ts`, `images.ts` |
| Content (typed, brochure-sourced) | `src/content/services.ts`, `software.ts`, `company.ts` |
| Validation | `src/lib/validations.ts` (Zod schemas for Contact/Quote/Application/Newsletter) |
| SEO helper | `src/lib/seo.ts`, `src/app/sitemap.ts`, `src/app/robots.ts` |
| Real assets copied in | `public/images/**` (logo, office, team, 6 project renders, 5 software logos) — sourced from `BLANCO_ASSETS.zip` |

## Folder structure
```
src/
├── app/(marketing)/...     route folders per Phase 1 §4 sitemap
├── components/{layout,ui,sections,forms}/   empty — Phase 3
├── features/{project-filters,job-application,blog-search}/  empty — Phase 4
├── hooks/                  empty — Phase 3+
├── lib/                    utils.ts, validations.ts, seo.ts
├── types/                  index.ts
├── constants/              brand.ts, nav.ts, images.ts
├── content/                services.ts, software.ts, company.ts
└── styles/                 globals.css
```

## Open items still needing client input (carried from Phase 1 §"Open Items")
Ongoing-project count and headcount in `src/content/company.ts` are marked
🔶 placeholder — confirm exact figures before Phase 4 content freeze.

## Next: Phase 3
Build the reusable component library (Header/mega-menu, Footer, Hero,
Card family, Forms, Accordion/Tabs/Carousel, Stat counter) against these
tokens and content modules.

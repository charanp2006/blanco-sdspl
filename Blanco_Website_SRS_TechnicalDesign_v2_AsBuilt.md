# Blanco Steel Detailing Services Pvt. Ltd.
## Corporate Website — Software Requirements Specification & Technical Design Document
**Version 2.0 — As-Built (all 8 phases complete)**
Originally issued as Phase 1 planning (v1.0, July 2026); updated post-implementation.

> This version replaces v1.0's planning assumptions with the actual, built, and verified state of the site. Where the plan changed during implementation, that's called out explicitly rather than silently edited over — see §0 below. Sections not mentioned in §0 are materially unchanged from v1.0.

---

## 0. As-Built Summary — What Changed From the Original Plan

**1. Scope correction (client feedback, after Phase 1 approval):** Blanco is a **pure structural steel detailing company**, not a multi-discipline BIM/design practice. The original 7-service plan (which included Revit Modelling, PEB Design & Detailing, Precast Design & Detailing, and R&D as separate lines) was narrowed to **5 services**, all framed as facets of one discipline — structural steel detailing — built around **Tekla Structures** as the primary platform and **AISC compliance** as the core credibility claim:

| Built (final) | Removed from v1.0 plan |
|---|---|
| Structural Steel Detailing | ~~Revit Modelling~~ |
| Connection Design | ~~PEB Design & Detailing~~ |
| Tekla Modelling | ~~Precast Design & Detailing~~ |
| Material Take-offs | ~~Research & Development~~ |
| AutoCAD Drafting Support | |

This affected the sitemap, mega-menu, service content, and every place "software expertise" is discussed — all now lead with Tekla/AISC rather than a broad BIM narrative.

**2. One page added:** `/privacy-policy` — not in the original sitemap. It was added in Phase 8 after a QA sweep found the footer linked to it site-wide with no page behind it. Now built and in the sitemap.

**3. Dependency correction:** `lucide-react@0.383.0` (originally specified in the build prompt) only supports React ≤18. Since this project runs React 19, the build uses `lucide-react@^1.26.0`. That version also dropped brand/logo icons (LinkedIn, GitHub, etc. — an industry-wide trademark-driven change), so the footer's LinkedIn link uses a labeled generic icon instead of a brand glyph.

**4. Two real accessibility bugs found and fixed in Phase 8** (not anticipated in v1.0's guidelines, which stated principles but hadn't yet been tested against real content): a nested `<a>`-inside-`<button>` in the mobile nav, and two color combinations in the actual palette that failed WCAG AA contrast (see §17).

Everything else below reflects what was actually built, verified via `tsc --noEmit`, `eslint .`, and full production builds at the end of every phase (28/28 routes generating successfully in the final build).

---

## 1. Project Overview

*(Unchanged from v1.0 — see business overview, objectives, audience, and goals as originally defined.)* One refinement: all positioning copy across the built site now states the narrower, more accurate value proposition — *"AISC-compliant structural steel detailing, built on Tekla Structures, for USA construction and fabrication clients"* — rather than the broader multi-service framing originally planned.

---

## 4. Information Architecture — As-Built Sitemap

```
Home
├── About
│   ├── Overview
│   ├── Awards
│   ├── Our Team
│   └── Life at Blanco
├── Services
│   ├── Structural Steel Detailing
│   ├── Connection Design
│   ├── Tekla Modelling
│   ├── Material Take-offs
│   └── AutoCAD Drafting Support
├── Projects
│   ├── Completed Projects   (filterable by sector + paginated)
│   ├── Tekla Models
│   └── Sample Drawings
├── Careers                  (benefits, open roles, application form)
├── Blog
│   ├── Listing               (search + category filter)
│   └── /blog/[slug]           (3 seed posts shipped)
├── CSR
├── Contact                  (embedded map, quote request form)
├── Privacy Policy            ← added in Phase 8
└── (Utility) 404, sitemap.xml, robots.txt, icon.png, apple-icon.png
```

28 routes total in the final build (24 static + 3 SSG blog posts + 1 SSG service page pattern generating 5 paths, counted per Next.js's route table as `/services/[slug]` and `/blog/[slug]`).

**Header mega-menu / footer nav:** matches this structure exactly — built in `src/constants/nav.ts` and verified against the actual route folders in Phase 8 (every `href` in nav config confirmed to resolve to a real page; the one gap found — `/privacy-policy` — was fixed, not left dangling).

---

## 6. Page Breakdown — As-Built

All pages from v1.0 §6 were built as planned, with the service pages reflecting the narrowed 5-service list (§0) instead of 7, and one new page added:

| Page | Status |
|---|---|
| Home | Built — all 13 sections (Hero → Contact Preview) |
| About × 4 | Built — Overview, Awards (timeline), Our Team (departments + placeholder leadership), Life at Blanco (training/benefits/gallery) |
| Services × 5 | Built — dynamic `[slug]` route, `generateStaticParams` for all 5 |
| Projects × 3 | Built — Completed (filter + pagination), Tekla Models, Sample Drawings |
| Careers | Built — benefits, 3 seed open roles, working application form with resume upload |
| Blog | Built — listing (search + category filter) + 3 seed detail pages |
| CSR | Built as an explicit placeholder page — brochure contained no CSR content (see §21) |
| Contact | Built — embedded Google Map, quote request form |
| **Privacy Policy** | **Added in Phase 8** — placeholder legal copy, flagged for counsel review |
| 404 | Built — on-brand, links back home |

---

## 7. Component Inventory — As-Built

Every component category from v1.0 §7 was built. Final count: **~35 component files** across four folders, plus 4 custom hooks:

- **Layout:** `Header` (sticky, hover mega-menu), `MobileNav` (drawer, with focus trap), `Footer`, `Breadcrumbs` (emits `BreadcrumbList` JSON-LD), `ScrollProgressBar`, `BackToTopButton`
- **UI primitives:** `Button`, `Badge`, `Card` + 5 content-card variants, `Accordion`, `Tabs`, `Modal` (focus-trapped, dynamically imported), `Pagination`, `FilterBar`, `SearchInput`, `Skeleton`/`CardSkeleton`, `EmptyState`/`ErrorState`, `Toast`, `AnimatedCounter`, `RevealOnScroll`/`StaggerReveal`/`StaggerItem`
- **Sections:** `HomeHero`/`ServiceHero` (client, Framer Motion) + `InnerPageHero` (server component, CSS-only animation — split out in Phase 7 for performance, see §16), `SectionHeading`, `StatCounterSection`, `ProcessSteps`, `Timeline`, `LogoMarquee`, `Gallery` (lightbox via dynamically-imported `Modal`)
- **Forms:** shared `FormField`, `ContactForm`, `QuoteRequestForm`, `JobApplicationForm`, `NewsletterForm` — all React Hook Form + Zod
- **Feature modules:** `ProjectExplorer` (filter/pagination logic), `BlogExplorer` (search/category logic)
- **SEO:** `JsonLd` (generic structured-data injector)
- **Hooks:** `useMediaQuery`, `useScrollProgress`, `useCountUp`, `useOnClickOutside`, `usePrefersReducedMotion`

---

## 8. Design System — As-Built (with corrected contrast values)

**Color palette** — unchanged hex values from v1.0, but **two usages were corrected in Phase 8** after computing real WCAG contrast ratios (not visual inspection):

| Role | Hex | Status |
|---|---|---|
| Primary — Blanco Indigo | `#3E4096` | 8.8:1 on white — passes AA |
| Charcoal | `#292929` | 14.6:1 on white — passes AA |
| Accent — Structural Amber | `#F2A900` | **Corrected usage:** originally used as `accent-dark` (`#C98C00`) text on white for section "eyebrow" labels — measured 2.9:1, **fails AA**. Fixed by using `brand` for eyebrows instead (8.8:1), which also better matches the design system's own rule that accent is CTA-only. |
| Badge accent variant | `#F2A900` bg | Originally `bg-accent/15 text-accent-dark` (2.6:1, fails). Fixed to solid `bg-accent text-charcoal` (7.2:1), matching the Button component's accent variant. |
| Placeholder text | context-dependent | `neutral-500` (4.8:1) on light form backgrounds; **`neutral-400`** (4.9:1) on the footer's dark input background — these needed *opposite* fixes, discovered by computing contrast against each actual rendered background rather than assuming one global value works everywhere. |

Typography, spacing, radius, and breakpoints: unchanged from v1.0, implemented exactly as specified in `tailwind.config.ts`.

---

## 12. Animation Plan — As-Built

All animations from v1.0 §12 were implemented, plus two additions made during Phase 5 that weren't in the original plan:

- **Page transitions:** `src/app/template.tsx` — soft fade/slide on every route change (this file type re-renders per-navigation, unlike `layout.tsx`)
- **Reduced motion, handled two ways:** `MotionConfig reducedMotion="user"` wraps the entire app (auto-disables transform-based animation for every Framer Motion component site-wide), *plus* explicit handling in `AnimatedCounter` since a count-up isn't a transform animation and wouldn't be caught by `MotionConfig` alone — it jumps straight to the final number instead

A shared token file, `src/lib/motion.ts` (easing curve, durations, stagger values), wasn't in the original plan but was added in Phase 5 once inconsistent magic numbers across files became apparent.

---

## 13–14. Technical Architecture & Folder Structure — As-Built

Matches v1.0 exactly, with these implementation notes:
- **Next.js 15's breaking change** to dynamic route `params` (now a `Promise`) required `async`/`await` in `services/[slug]` and `blog/[slug]` — not knowable at planning time, caught by the Phase 4 build.
- **`@next/bundle-analyzer`** wired in (`npm run analyze`) — not in the original tooling list, added in Phase 7.
- Next's built-in build-time ESLint pass is disabled (`next.config.ts`) due to a version mismatch with the flat ESLint config; linting runs cleanly as a separate step (`npm run lint`).

---

## 15. SEO Strategy — As-Built

All items from v1.0 §15 implemented:
- **Structured data (`src/lib/structuredData.ts`):** `Organization` + `ProfessionalService` site-wide; `BreadcrumbList` auto-generated from the same props every page already passes to `Breadcrumbs`; `JobPosting` per open role; `BlogPosting` per article; `Service` per service page. All four dynamic schema types spot-checked against actual generated HTML in Phase 6 (not just assumed from a successful build).
- `metadataBase`, canonical URLs, Open Graph + Twitter Card images (with a sensible default fallback image) on every page via `src/lib/seo.ts`
- `sitemap.ts` / `robots.ts` — dynamic, includes all 28 routes including the Phase-8-added Privacy Policy page
- `app/icon.png` + `app/apple-icon.png` generated from the brand logo (not in v1.0's plan, added in Phase 6 as a low-cost branding/SEO win)

---

## 16. Performance Strategy — As-Built, With Measured Results

Unlike v1.0 (which stated targets), this is what was actually measured in Phase 7 using real before/after production builds:

| Route | Before | After |
|---|---|---|
| `/projects/tekla-models`, `/projects/sample-drawings` | 159 kB | **113 kB** (−46 kB) |
| `/csr` | 157 kB | **143 kB** (−14 kB) |
| `/about/awards` | 157 kB | **144 kB** (−13 kB) |
| `/about/overview`, `/about/our-team` | 157 kB | **148 kB** (−9 kB) |
| `/careers`, `/contact` | 184–186 kB | **177–179 kB** (−7 kB) |

**Two concrete changes drove this**, found via an audit of every `"use client"` boundary in the codebase (not guesswork):
1. `InnerPageHero` — used on 11 pages — was bundled inside the same client-marked file as the Home/Service hero variants, pulling Framer Motion's runtime into simple inner pages just for one fade-in. Extracted into its own **server component** using a CSS `@keyframes` animation instead.
2. The lightbox `Modal` is now dynamically imported (`next/dynamic`, `ssr: false`) inside `Gallery`, so its code only loads when a user actually opens an image — the main driver of the 46 kB drop on the gallery-heavy Tekla Models / Sample Drawings pages.

`priority` on `next/image` confirmed used exactly once site-wide (the homepage LCP image), not scattered.

---

## 17. Accessibility Strategy — As-Built, With Audit Findings

v1.0 stated accessibility *principles*; Phase 8 actually tested them against the built site and found real issues:

- **Contrast:** computed WCAG ratios for every color/background combination in actual use (not spot-checked visually) — found and fixed 2 failures (see §8).
- **Focus management:** `Modal` and `MobileNav` had no focus trap, no initial focus, no focus restoration on close, and no background scroll lock — all fixed with a shared trap pattern (Tab/Shift+Tab cycling within the dialog, focus returns to the triggering element on close).
- **Invalid HTML / broken interaction:** `MobileNav` had an `<a>` nested inside a `<button>` (invalid per HTML5, and caused two click handlers to fire on one tap — expand-toggle and close-and-navigate simultaneously). Restructured into a link plus a separate icon-only toggle button.
- **Toast semantics:** errors now use `role="alert"` (assertive) vs. success `role="status"` (polite), so errors interrupt screen reader users appropriately instead of both being announced the same way.
- Skip-to-content link, semantic landmarks, keyboard-operable Accordion/Tabs/Pagination/mega-menu, and `prefers-reduced-motion` support (§12) were all built in from Phase 3 onward and remained correct through the final audit.

---

## 19. Development Roadmap — Final Status

| Phase | Scope | Status |
|---|---|---|
| 1 | Planning & architecture | ✅ Complete (this document, v1.0) |
| 2 | Project scaffold, folder structure, design tokens, content modules | ✅ Complete |
| 3 | Reusable UI components | ✅ Complete — verified via `tsc`/`eslint` |
| 4 | All pages built | ✅ Complete — 25 routes, full production build passing |
| 5 | Animation pass | ✅ Complete — page transitions, reduced-motion handling, shared motion tokens |
| 6 | SEO implementation | ✅ Complete — structured data spot-checked in real HTML output |
| 7 | Performance optimization | ✅ Complete — measured, not estimated, bundle-size reductions |
| 8 | Final QA, accessibility, production polish | ✅ Complete — real bugs found and fixed, not just checklisted |

All phases verified the same way: `tsc --noEmit`, `eslint .`, and a full `next build` at the end of each phase (this sandbox can't reach Google Fonts' CDN, so builds were validated by temporarily swapping in local fonts, confirming the build succeeds, then restoring the real font configuration before packaging — noted here for transparency, not hidden).

---

## 20. Deliverables Checklist — Final

- [x] Approved sitemap & IA (§4 — as-built, includes Privacy Policy)
- [x] Design tokens implemented in Tailwind config, with 2 contrast corrections
- [x] Full component library (~35 files, §7)
- [x] All pages, responsive at all breakpoints
- [x] Contact, Quote Request, Job Application, Newsletter forms — validated, working
- [x] Animation pass complete, `prefers-reduced-motion` respected via `MotionConfig` + explicit counter handling
- [x] SEO: metadata, OG/Twitter cards, 5 structured data types, sitemap.xml, robots.txt, favicons
- [x] Performance: measured 7–46 kB First Load JS reductions across affected routes
- [x] Accessibility: WCAG contrast computed and corrected; focus trap + scroll lock on all dialogs; invalid HTML fixed
- [x] Content gap appendix — see §21 below for what's still genuinely outstanding
- [x] 404 page, breadcrumbs (with JSON-LD), back-to-top, scroll progress
- [ ] Deployment pipeline — not yet configured (no hosting/CI decision made in this engagement; project builds cleanly and is ready for Vercel or equivalent)

---

## 21. Open Items Still Requiring Client Input

These are unchanged from v1.0 — they depend on real data only the client has, not on anything further Claude could resolve through implementation:

1. **Leadership names/photos** for Our Team — brochure gives departments/roles, not individuals. Currently placeholder cards flagged inline with 🔶.
2. **CSR program content** — brochure contains none. The CSR page currently ships as an explicit "content coming soon" placeholder rather than invented copy.
3. **Current open job roles** — 3 plausible placeholder roles shipped (Junior Drafting Engineer, Tekla Modeller, Checking Engineer) based on the brochure's department structure; confirm actual current openings with HR.
4. **Client testimonials and logos** — brochure has none; 3 placeholder testimonials shipped, clearly marked, structurally ready to swap for real quotes.
5. **Project-level metadata** — the 6 project renders supplied have no accompanying sector/location/tonnage data; placeholder metadata was assigned per image and flagged.
6. **Confirm relevance of "SDS2 Models"** — resolved in practice: the built site uses "Tekla Models" only, since no SDS2 evidence exists in the brochure and the scope correction (§0) confirmed Tekla as the sole modelling platform.
7. **Privacy Policy legal text** — placeholder copy shipped in Phase 8; needs counsel review before launch.
8. **Ongoing-project count / headcount figures** in the stats counter — currently placeholder numbers (24+ ongoing projects, 80+ engineers), flagged in `src/content/company.ts`, pending real figures.

---

*End of v2.0 (as-built). This document now reflects the site exactly as delivered across all 8 phases.*

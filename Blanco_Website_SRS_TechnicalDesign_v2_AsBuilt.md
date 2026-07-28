# Blanco Steel Detailing Services Pvt. Ltd.
## Corporate Website — Software Requirements Specification & Technical Design Document
**Version 3.0 — As-Built (all phases complete, post-redesign)**
Originally issued as Phase 1 planning (v1.0, July 2026); updated as v2.0 post-implementation; revised v3.0 after comprehensive UI redesign.

> This version reflects the fully redesigned and production-ready site, incorporating all redesign work including new animation systems, marquee components, route restructuring, content tone overhaul, and page-level redesigns. Where the plan changed during implementation, that's called out explicitly. Sections not mentioned here are materially unchanged from v2.0.

---

## 0. As-Built Summary — What Changed

**1. Scope correction (client feedback, after Phase 1 approval):** Blanco is a **pure structural steel detailing company**, not a multi-discipline BIM/design practice. The original 7-service plan was narrowed to **5 services**, all framed as facets of one discipline — structural steel detailing — built around **Tekla Structures** as the primary platform and **AISC compliance** as the core credibility claim:

| Built (final) | Removed from v1.0 plan |
|---|---|
| Structural Steel Detailing | ~~Revit Modelling~~ |
| Connection Design | ~~PEB Design & Detailing~~ |
| Tekla Modelling | ~~Precast Design & Detailing~~ |
| Material Take-offs | ~~Research & Development~~ |
| AutoCAD Drafting Support | |

**2. Route group restructuring:** Renamed from `(marketing)` to `(pages)` for cleaner URLs. Removed blog, CSR, privacy-policy, awards, and life-at-blanco page stubs that were placeholder-only.

**3. Content tone overhaul:** All site-wide content rewritten from marketing/promotional to informational. Removed "Request a Quote" CTAs, testimonials, promotional language, and all references to "8 years of experience."

**4. Font system overhaul:** Centralized in `src/lib/fonts.ts`. Replaced Plus Jakarta Sans, IBM Plex Mono, and Inter with **Montserrat 900** (headings), **Oswald 500** (nav, buttons, eyebrows), **Outfit** (body), and **DM Mono 400** (quote text).

**5. Dependency correction:** `lucide-react@^1.26.0` used (React 19 compatible). Brand/logo icons dropped (industry-wide trademark change); LinkedIn uses labeled generic icon.

**6. New components added:** `ImageMarquee`, `LightSpeedReveal`, `IndustryCard`, `HoverCircle` (removed), plus significant rewrites to `LogoMarquee`, `ServiceCard`, `Gallery`.

---

## 1. Project Overview

A corporate information website for Blanco Steel Detailing Services Pvt. Ltd., a structural steel detailing firm based in Mysore, Karnataka, India. The site serves as a digital presence — not a marketing/client-acquisition tool — showcasing services, team, projects, and career opportunities.

**Tech Stack:** Next.js 15, React 19, TypeScript, Tailwind CSS, Framer Motion, React Hook Form + Zod.

---

## 4. Information Architecture — As-Built Sitemap

```
Home
├── About
│   ├── Overview
│   ├── Awards (with awards gallery marquee)
│   ├── Our Team (with team overview section)
│   └── Life at Blanco
├── Services
│   ├── Structural Steel Detailing
│   ├── Connection Design
│   ├── Tekla Modelling
│   ├── Material Take-offs
│   └── AutoCAD Drafting Support
├── Projects
│   ├── Completed Projects   (filterable by sector + paginated)
│   ├── Tekla Models (with image titles)
│   └── Sample Drawings (with image titles)
├── Careers                  (benefits, open roles, application form, career timeline)
├── Blog
│   ├── Listing               (search + category filter)
│   └── /blog/[slug]           (3 seed posts shipped)
├── CSR
├── Contact                  (embedded map, quote request form)
├── Privacy Policy            (full content from blanco1)
└── (Utility) 404, sitemap.xml, robots.txt, blanco-logo.webp, blanka-logo.webp, icon.webp
```

---

## 6. Page Breakdown — As-Built

| Page | Status | Notable Redesign |
|---|---|---|
| Home | Built — Hero carousel, about preview (LightSpeed), flipping service cards, industry image cards, stat counters, software marquee, careers CTA with radial gradient | Full redesign from blanco1 |
| About × 4 | Overview (Who We Are, expertise, track record, mission/vision, sister company Blanka, careers CTA), Awards (certifications + timeline + award gallery marquee), Our Team (team overview + departments + roles), Life at Blanco | Full blanco1 migration |
| Services × 5 | Dynamic `[slug]` route, `generateStaticParams` for all 5 | |
| Projects × 3 | Completed (filter + pagination), Tekla Models (titles), Sample Drawings (titles) | Gallery with title overlays |
| Careers | Why Join Blanco, career advancement timeline, benefits (inline icons), statutory/other benefits, application form, contact HR, radial gradient CTA | Full blanco1 redesign |
| Blog | Listing (search + category filter) + 3 seed detail pages | |
| CSR | Placeholder page — brochure contained no CSR content | |
| Contact | Two-column (info cards + map + form), styled form with success state | Full blanco1 redesign |
| Privacy Policy | Full content from blanco1 — 10 sections, animated reveals | Replaced placeholder |
| 404 | Built — on-brand, links back home | |

---

## 7. Component Inventory — As-Built

Final count: **~38 component files** across four folders, plus 5 custom hooks:

- **Layout:** `Header` (sticky, hover mega-menu with animated underline, staggered fade-down entrance), `MobileNav` (framer-motion slide-in with staggered items, focus trap), `Footer` (mobile: logo + name + social + 2-col links + contact; desktop: 4-col grid), `Breadcrumbs` (emits `BreadcrumbList` JSON-LD), `ScrollProgressBar`, `BackToTopButton`
- **UI primitives:** `Button` (original hover effects restored), `Badge`, `Card` (smooth hover transitions), `Accordion` (smooth expand), `Modal` (focus-trapped, dynamically imported), `Pagination`, `FilterBar`, `SearchInput`, `Skeleton`/`CardSkeleton`, `EmptyState`/`ErrorState`, `Toast`, `AnimatedCounter`, `RevealOnScroll`/`StaggerReveal`/`StaggerItem`, `LightSpeedReveal`, `IndustryCard`, `ServiceCard` (3D flip)
- **Sections:** `HomeHero`/`ServiceHero` (auto-cycling carousel with Ken Burns + navigation arrows) + `InnerPageHero` (server component, CSS animation), `SectionHeading`, `StatCounterSection` (3-col centered), `ProcessSteps`, `Timeline` (synced traveling line + circle icons), `LogoMarquee` (JS-driven infinite scroll with DOM recycling, hover tooltip), `ImageMarquee` (DOM-recycled infinite scroll for images, hover titles), `Gallery` (items with `{src, title}`, lightbox via dynamically-imported `Modal`)
- **Forms:** shared `FormField`, `ContactForm`, `QuoteRequestForm`, `JobApplicationForm`, `NewsletterForm` — all React Hook Form + Zod
- **Feature modules:** `ProjectExplorer` (filter/pagination logic), `BlogExplorer` (search/category logic)
- **SEO:** `JsonLd` (generic structured-data injector)
- **Hooks:** `useMediaQuery`, `useScrollProgress`, `useCountUp`, `useOnClickOutside`, `usePrefersReducedMotion`

---

## 8. Design System — As-Built

**Color palette:**

| Role | Hex | Status |
|---|---|---|
| Primary — Blanco Indigo | `#3E4096` | 8.8:1 on white — passes AA |
| Charcoal | `#292929` | 14.6:1 on white — passes AA |
| Accent — Structural Amber | `#F2A900` | Used for CTA-only; eyebrows now use `brand` instead |
| Badge accent variant | `#F2A900` bg | Solid `bg-accent text-charcoal` (7.2:1) |

**Typography (centralized in `src/lib/fonts.ts`):**

| Font | Weight | Usage |
|---|---|---|
| Montserrat | 900 | Headings h1–h4 via globals.css |
| Oswald | 500 | Nav links, buttons, eyebrows (`font-oswald`) |
| Outfit | 400 | Body text (`font-body`) |
| DM Mono | 400 | Quote text (`font-dm-mono`) |

**Tailwind config additions:** `font-oswald`, `font-dm-mono`, `animate-marquee` keyframe, design tokens for durations and stagger.

---

## 12. Animation Plan — As-Built

**Shared motion tokens (`src/lib/motion.ts`):**
- `DURATION`: fast 0.5s, base 0.7s, slow 0.9s (increased for slower, more deliberate feel)
- `STAGGER`: tight 0.12s, base 0.18s, loose 0.25s
- Easing curves: `EASE_OUT`, `EASE_IN_OUT`, `SMOOTH`

**Page transitions (`src/app/template.tsx`):** Soft fade/slide on every route change via Framer Motion.

**Component-level animations:**
- **Header:** Staggered fade-down entrance on logo, nav, search, hamburger (y: -12→0, opacity 0→1, 0.08s stagger, 0.5s duration). Dropdown menu: smooth fade + scale + slide (y: 12→0, scale: 0.97→1, duration 0.35s). Active nav link: animated underline via `layoutId` with spring physics.
- **MobileNav:** Framer-motion spring slide-in (stiffness 300, damping 30). Nav items stagger in from right (0.04s delay each). Accordion children animate height/opacity. Close button rotates in.
- **LogoMarquee:** JS-driven via `requestAnimationFrame`. DOM-recycled infinite scroll (no duplicate sets). Smooth lerp deceleration on hover (stiffness 3, damping 3). Individual logo tooltips via event delegation.
- **ImageMarquee:** Same mechanics as LogoMarquee. Images show gradient overlay with title on hover. Marquee pauses on hover.
- **ServiceCard:** CSS 3D flip (perspective 1000px, rotateY 180°). Front: image + title. Back: description + CTA.
- **Timeline:** Traveling SVG line and circle icons driven by same `progress` state — perfectly synchronized. Line uses `pathLength` animation. Circles fade in when line reaches 8% before their position.
- **LightSpeedReveal:** Slides in with skew (-8°→0° or +8°→0°) + translateX 80px. Used on homepage about preview and our-team overview.
- **RevealOnScroll/StaggerReveal:** Scroll-triggered fade-up with stagger for lists/grids.
- **Global CSS transitions:** `a`, `button`, `img` elements have 300ms color/opacity transitions.
- **Reduced motion:** `prefers-reduced-motion` respected globally via CSS + explicit handling in `AnimatedCounter` and `RevealOnScroll`.

---

## 13–14. Technical Architecture & Folder Structure — As-Built

```
src/
├── app/
│   ├── (pages)/...           route group (clean URLs)
│   ├── layout.tsx            root layout with font declarations
│   ├── template.tsx          page-level fade transitions
│   ├── page.tsx              homepage
│   ├── sitemap.ts            dynamic sitemap
│   ├── robots.ts             dynamic robots
│   ├── blanco-logo.webp      brand logo
│   ├── blanka-logo.webp      sister company logo
│   └── icon.webp             favicon
├── components/
│   ├── layout/               Header, Footer, MobileNav, Breadcrumbs, ScrollProgressBar, BackToTopButton
│   ├── sections/             Hero, InnerPageHero, SectionHeading, StatCounterSection, ProcessSteps, Timeline, LogoMarquee, ImageMarquee, Gallery
│   ├── ui/                   Button, Card, Accordion, Modal, RevealOnScroll, LightSpeedReveal, IndustryCard, ServiceCard, etc.
│   └── forms/                FormField, ContactForm, QuoteRequestForm, JobApplicationForm, NewsletterForm
├── content/                  services.ts, software.ts, company.ts, team.ts, careers.ts, testimonials.ts, projects.ts
├── constants/                brand.ts, nav.ts, images.ts
├── hooks/                    useMediaQuery, useScrollProgress, useCountUp, useOnClickOutside, usePrefersReducedMotion
├── lib/                      fonts.ts, motion.ts, utils.ts, validations.ts, seo.ts, structuredData.ts
├── types/                    index.ts
└── styles/                   globals.css
```

---

## 15. SEO Strategy — As-Built

- **Structured data:** `Organization` + `ProfessionalService` site-wide; `BreadcrumbList` auto-generated; `JobPosting` per open role; `BlogPosting` per article; `Service` per service page
- `metadataBase`, canonical URLs, Open Graph + Twitter Card images on every page via `src/lib/seo.ts`
- `sitemap.ts` / `robots.ts` — dynamic, includes all routes
- `blanco-logo.webp` used for favicon, apple-icon, and OG default

---

## 16. Performance Strategy — As-Built

| Route | First Load JS |
|---|---|
| `/projects/tekla-models`, `/projects/sample-drawings` | ~113 kB |
| `/csr` | ~143 kB |
| `/about/awards` | ~144 kB |
| `/about/overview`, `/about/our-team` | ~148 kB |
| `/careers`, `/contact` | ~177–179 kB |
| Shared JS | ~103 kB |

**Key optimizations:**
- `InnerPageHero` extracted as server component (CSS animation, no Framer Motion)
- `Modal` dynamically imported (`next/dynamic`, `ssr: false`) in `Gallery`
- `LogoMarquee` and `ImageMarquee` use vanilla DOM manipulation (no React re-renders for animation)
- `priority` on `next/image` used exactly once (homepage LCP)

---

## 17. Accessibility Strategy — As-Built

- WCAG AA contrast computed for every color/background combination — 2 failures found and fixed
- Focus trap + scroll lock on `Modal` and `MobileNav`
- Toast semantics: `role="alert"` for errors, `role="status"` for success
- Skip-to-content link, semantic landmarks, keyboard-operable Accordion/Tabs/Pagination/mega-menu
- `prefers-reduced-motion` support via CSS global + component-level handling

---

## 19. Development Roadmap — Final Status

| Phase | Scope | Status |
|---|---|---|
| 1 | Planning & architecture | ✅ Complete (v1.0) |
| 2 | Project scaffold, folder structure, design tokens, content modules | ✅ Complete |
| 3 | Reusable UI components | ✅ Complete |
| 4 | All pages built | ✅ Complete |
| 5 | Animation pass | ✅ Complete |
| 6 | SEO implementation | ✅ Complete |
| 7 | Performance optimization | ✅ Complete |
| 8 | Final QA, accessibility, production polish | ✅ Complete |
| 9 | **UI Redesign** — route restructuring, content tone, fonts, marquee components, page redesigns, LightSpeed animations, mobile nav/footer, gallery titles, awards gallery | ✅ Complete |

---

## 20. Deliverables Checklist — Final

- [x] Approved sitemap & IA
- [x] Design tokens implemented in Tailwind config, with contrast corrections
- [x] Full component library (~38 files)
- [x] All pages, responsive at all breakpoints (mobile footer redesigned, mobile nav fixed)
- [x] Contact, Quote Request, Job Application, Newsletter forms
- [x] Animation pass complete — LightSpeed, staggered header, marquee carousels, synced timeline, 3D card flip
- [x] SEO: metadata, OG/Twitter cards, 5 structured data types, sitemap.xml, robots.txt, favicons
- [x] Performance: measured bundle-size reductions, server components, dynamic imports
- [x] Accessibility: WCAG contrast computed, focus traps, scroll lock, reduced motion
- [x] Content: informational tone, brochure-sourced, no marketing CTAs
- [x] Gallery: title overlays on hover, modal titles, sample drawings with project names
- [ ] Deployment pipeline — not yet configured

---

## 21. Open Items Still Requiring Client Input

1. **Leadership names/photos** — currently placeholder data in `src/content/team.ts`
2. **CSR program content** — placeholder page, no brochure content available
3. **Current open job roles** — 3 placeholder roles based on department structure
4. **Project-level metadata** — 6 renders with placeholder sector/location/tonnage
5. **Privacy Policy legal text** — full content from blanco1, needs counsel review
6. **Ongoing-project count / headcount figures** — placeholder numbers in `src/content/company.ts`
7. **Real award images** — currently using Unsplash placeholders in awards gallery

---

*End of v3.0 (as-built). This document reflects the site exactly as delivered, including all redesign work.*

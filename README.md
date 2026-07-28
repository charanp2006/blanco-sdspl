# Blanco Steel Detailing Services — Corporate Website

Next.js 15 / React 19 / TypeScript / Tailwind CSS / Framer Motion corporate
information website for Blanco Steel Detailing Services Pvt. Ltd., Mysore, India.

## Scope

**Blanco is a structural steel detailing company only** — not a multi-discipline
BIM/design practice. Five services, built around **Tekla Structures** as the
primary platform and **AISC** compliance as the core credibility claim.

The site serves as a digital presence — informational, not marketing-focused —
showcasing services, team, projects, and career opportunities.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion + vanilla `requestAnimationFrame`
- **Forms:** React Hook Form + Zod validation
- **Icons:** Lucide React

## Getting Started

```bash
npm install
npm run dev
```

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run analyze` | Bundle analysis via `@next/bundle-analyzer` |

## Project Structure

```
src/
├── app/
│   ├── (pages)/...           Route group — About, Services, Projects, Careers, Blog, Contact, Privacy Policy
│   ├── layout.tsx            Root layout with font declarations
│   ├── template.tsx          Page-level fade/slide transitions
│   ├── page.tsx              Homepage
│   ├── sitemap.ts            Dynamic sitemap
│   ├── robots.ts             Dynamic robots
│   └── *.webp                Brand logos and favicon
├── components/
│   ├── layout/               Header, Footer, MobileNav, Breadcrumbs, ScrollProgressBar, BackToTopButton
│   ├── sections/             Hero, InnerPageHero, SectionHeading, StatCounterSection, ProcessSteps,
│   │                         Timeline, LogoMarquee, ImageMarquee, Gallery
│   ├── ui/                   Button, Card, Accordion, Modal, RevealOnScroll, LightSpeedReveal,
│   │                         IndustryCard, ServiceCard, AnimatedCounter, Toast, etc.
│   └── forms/                FormField, ContactForm, QuoteRequestForm, JobApplicationForm
├── content/                  Typed content modules (services, software, company, team, careers, projects)
├── constants/                Brand info, navigation, image paths
├── hooks/                    Custom hooks (useMediaQuery, useCountUp, useScrollProgress, etc.)
├── lib/                      Fonts, motion tokens, utils, validations, SEO, structured data
├── types/                    TypeScript interfaces
└── styles/                   Global CSS, Tailwind utilities
```

## Key Features

- **Homepage:** Auto-cycling hero carousel (Ken Burns effect), 3D flipping service cards, industry image cards, stat counters, software expertise marquee, careers CTA with radial gradient
- **About pages:** Overview (team photo + expertise), Awards (certifications + timeline + awards gallery marquee), Our Team (team overview + departments), Life at Blanco
- **Services:** Dynamic `[slug]` route with 5 structural steel detailing services
- **Projects:** Filterable completed projects, Tekla Models gallery, Sample Drawings gallery — all with title overlays on hover
- **Careers:** Career advancement timeline (synced traveling line + circle icons), benefits grid (inline icons), statutory/other benefits, application form
- **Contact:** Two-column layout (info cards + map + form) with styled success state
- **Privacy Policy:** Full content with animated section reveals

## Animation System

- **Shared tokens** (`src/lib/motion.ts`): Duration (0.5s/0.7s/0.9s), stagger (0.12s/0.18s/0.25s), easing curves
- **Header:** Staggered fade-down entrance, smooth dropdown with scale + slide, animated active underline via `layoutId`
- **MobileNav:** Framer-motion spring slide-in with staggered items, accordion animations
- **Marquees:** DOM-recycled infinite scroll via `requestAnimationFrame`, smooth lerp deceleration on hover
- **LightSpeed:** Skew + translateX entrance animation (used on about preview and team overview)
- **Timeline:** SVG traveling line synced with circle icon color changes via shared progress state
- **Cards:** CSS 3D flip animation (ServiceCard), smooth hover transitions (Card, ProjectCard)
- **Reduced motion:** Respected globally via CSS + component-level handling

## Design System

| Font | Weight | Usage |
|---|---|---|
| Montserrat | 900 | Headings h1–h4 |
| Oswald | 500 | Nav links, buttons, eyebrows |
| Outfit | 400 | Body text |
| DM Mono | 400 | Quote text |

| Color | Hex | Usage |
|---|---|---|
| Brand (Indigo) | `#3E4096` | Primary actions, text, borders |
| Charcoal | `#292929` | Headings, body text |
| Accent (Amber) | `#F2A900` | CTA-only |

## Performance

| Route | First Load JS |
|---|---|
| Gallery pages (Tekla/Samples) | ~113 kB |
| Static pages (Awards, Overview) | ~144–148 kB |
| Dynamic pages (Careers, Contact) | ~177–179 kB |
| Shared JS | ~103 kB |

## SRS Document

Full technical specification: [`Blanco_Website_SRS_TechnicalDesign_v2_AsBuilt.md`](./Blanco_Website_SRS_TechnicalDesign_v2_AsBuilt.md)

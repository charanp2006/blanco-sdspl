# Blanco Steel Detailing Services Pvt. Ltd.

# Software Requirements Specification & Technical Design Document

**Version:** 1.0
**Date:** July 2026
**Classification:** Confidential

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Existing Website Analysis](#2-existing-website-analysis)
3. [Reference Website Analysis](#3-reference-website-analysis)
4. [Information Architecture](#4-information-architecture)
5. [User Journey](#5-user-journey)
6. [Complete Page Breakdown](#6-complete-page-breakdown)
7. [Component Inventory](#7-component-inventory)
8. [Design System](#8-design-system)
9. [UI/UX Guidelines](#9-uiux-guidelines)
10. [Content Strategy](#10-content-strategy)
11. [Image Requirements](#11-image-requirements)
12. [Animation Plan](#12-animation-plan)
13. [Technical Architecture](#13-technical-architecture)
14. [Folder Structure](#14-folder-structure)
15. [SEO Strategy](#15-seo-strategy)
16. [Performance Strategy](#16-performance-strategy)
17. [Accessibility Strategy](#17-accessibility-strategy)
18. [Future Scalability](#18-future-scalability)
19. [Development Roadmap](#19-development-roadmap)
20. [Deliverables Checklist](#20-deliverables-checklist)

---

## 1. Project Overview

### 1.1 Business Overview

**Company:** Blanco Steel Detailing Services Pvt. Ltd.
**Industry:** Structural Steel Designing and Detailing
**Headquarters:** #3051, 1st, 2nd, & 3rd Floor, SPYR Arcade, Ring Road Near Mahamane Circle, Dattagalli 3rd Stage, Mysore, Karnataka, India - 570033
**Founded:** 2020
**Sister Company:** Blanka (Construction arm)
**Founder:** Mr. Deepu C
**Website:** https://blanco1.charanp.tech/
**LinkedIn:** https://www.linkedin.com/company/blanco-sdspl

**Contact:**
- HR: hr@blanco-sdspl.com
- Phone 1: +91 821 295 7958
- Phone 2: +91 80887 22234

**Key Statistics:**

| Metric | Value |
|--------|-------|
| Projects Completed | 1,000+ |
| Engineering Team | 150+ |
| Years of Operation | 4+ |
| AISC Compliance | 100% |
| On-Time Delivery | 100% |
| Global Markets | USA |

**Certifications:**
- Tekla Software Partner
- AISC Compliant (American Institute of Steel Construction)
- ISO 9001:2015 Certified

**Core Services:**
1. Structural Steel Detailing
2. Structural Design
3. PEB Design & Detailing
4. Precast Design & Detailing
5. Research & Development

**Software Stack:**
- Tekla Structures, AutoCAD, Revit, RISA, IDEA StatiCa, SDS2

**Industries Served:**
- Hospitality, Healthcare, Commercial, Industrial, Institutional, Mixed-Use, Retail & Shopping, Sports & Recreation

**Vision:** To be the global leader in precision-driven steel detailing and structural design.

**Mission:** Deliver world-class structural steel detailing and design solutions that exceed client expectations through technical excellence, cutting-edge technology, and a passionate team.

**Values:** Client-centric approach, Technical excellence, Innovation, Integrity, Timely delivery, Employee growth

### 1.2 Website Objective

Create a modern, premium, corporate website that positions Blanco as a world-class structural steel detailing firm, builds trust, generates leads, showcases projects, serves as a recruitment platform, and establishes thought leadership through blog content.

### 1.3 Target Audience

| Persona | Primary Need |
|---------|--------------|
| General Contractors (USA) | AISC-compliant detailing with on-time delivery |
| Structural Engineers | Technical accuracy, code compliance, fast turnaround |
| Architecture Firms | Revit modeling, integration, precision |
| Steel Fabricators | Accurate shop drawings, Tekla models |
| PEB Manufacturers | Complete PEB detailing packages |
| Real Estate Developers | Cost-effective structural solutions |
| Job Seekers | Growth opportunities, company culture |
| Industry Partners | Collaboration, certifications |

### 1.4 Business Goals

1. Lead Generation via contact forms and inquiries
2. Brand Positioning as premium steel detailing partner
3. Talent Acquisition through careers section
4. Portfolio Showcase for credibility
5. SEO Visibility for key search terms
6. Trust Building via certifications, testimonials, statistics
7. Client Retention via easy access to information

### 1.5 User Goals

1. Prospective Clients: Understand capabilities, view projects, initiate contact
2. Existing Clients: Access updates, contact information
3. Job Seekers: Explore culture, view positions, apply easily
4. Partners: Learn about technology, certifications
5. General Visitors: Understand what Blanco does

### 1.6 Website Purpose

Primary digital presence - a recruitment tool that communicates professionalism, technical expertise, and reliability to a global audience.

---

## 2. Existing Website Analysis

### 2.1 Current Website

URL: https://blanco1.charanp.tech/

Current pages: Home, About Us, Our Work, Technology, Life at Blanco, Careers, Contact

### 2.2 Strengths

1. Clean design with modern aesthetic
2. Consistent branding with Blanco logo
3. Responsive mobile support
4. Next.js + Tailwind CSS foundation
5. Software carousel showcasing technology partners
6. Career opportunities CTA
7. Essential footer contact information

### 2.3 Weaknesses

| Category | Issue |
|----------|-------|
| Information Architecture | Flat structure with no hierarchy |
| Services | No individual service pages |
| Projects | No gallery, filtering, or individual pages |
| About | No history, awards, certifications, or team |
| Blog | No content marketing |
| Careers | No structured job listings or application form |
| SEO | Minimal metadata, no structured data |
| Social Proof | No testimonials, client logos, or case studies |
| Navigation | No mega menu, breadcrumbs, or dropdowns |
| Animations | Limited or no scroll animations |
| Contact | No map, office locations, or structured form |

### 2.4 Missing Features (vs Reference)

- Mega menu navigation
- Individual service pages (7)
- Individual project pages with galleries
- Statistics counter with animation
- Certifications showcase
- Testimonials carousel
- Blog with categories and search
- Team members section
- Awards/achievements page
- Life at Blanco gallery
- CSR page
- Breadcrumbs, back to top, scroll progress
- 404 page, newsletter, Google Maps
- Application form (vs external link)

### 2.5 Why Improvements Are Necessary

The existing website lacks the depth, professionalism, and information architecture that the client admires in the reference site. It has no content hierarchy, no social proof, and missing critical pages. The gap is substantial enough to warrant a complete rebuild.

---

## 3. Reference Website Analysis

### 3.1 Reference URL

https://aarbeestructures.com/

### 3.2 Navigation Structure

```
Home
About Us (Dropdown)
  +-- Overview
  +-- Awards
  +-- Our Team
  +-- Life at Aarbee
Services (Dropdown)
  +-- Structural Designing
  +-- Structural Steel Detailing
  +-- Revit Modelling & AutoCAD
  +-- Research & Development
  +-- PEB Design & Detailing
  +-- Precast Design & Detailing
Projects (Dropdown)
  +-- Completed Projects
  +-- Tekla Models
  +-- SDS2 Models
  +-- Sample Drawings
Careers
Blog
CSR
Contact Us
[Search Icon]
```

**Patterns:** Logo left, nav center/right, mega menu dropdowns, social icons top bar, CTA button, search, sticky header, mobile hamburger.

### 3.3 Homepage Sections

1. Hero slider (3 slides with CTAs)
2. About preview (text + image)
3. 25 Years milestone
4. Services grid (6 cards)
5. Projects gallery with Load More
6. Statistics counter
7. Certifications bar
8. Footer

### 3.4 Design Language

- Deep navy/dark blue primary, gold/amber accents, white backgrounds
- Clean sans-serif font with strong hierarchy
- Full-width sections, max-width ~1200px
- Rounded corner cards with subtle shadows
- Alternating white and light gray backgrounds
- Dark multi-column footer

### 3.5 Animation Style

- Subtle fade-in on scroll
- Hero slider auto-rotation
- Hover effects on cards
- Counter animation
- Professional and understated

### 3.6 Inspiration for Our Implementation

| Element | Our Original Approach |
|---------|----------------------|
| Navigation | Same mega menu structure, Blanco branding |
| Hero | Full-width hero with animated text + CTAs |
| Services | Enhanced cards with hover animations |
| Projects | Filterable grid with categories and lightbox |
| Statistics | Framer Motion animated counters |
| Certifications | Enhanced showcase section |
| Contact | Form + embedded Google Maps + office cards |
| Footer | Newsletter, social, quick links |
| About | Rich timeline, team cards, values grid |
| Life at | Masonry gallery with lightbox |

---

## 4. Information Architecture

### 4.1 Complete Sitemap

```
blanco-sdspl.com
|
+-- / (Home)
|
+-- /about
|   +-- /about/awards
|   +-- /about/team
|   +-- /about/life-at-blanco
|
+-- /services
|   +-- /services/structural-steel-detailing
|   +-- /services/structural-design
|   +-- /services/revit-modelling
|   +-- /services/autocad-services
|   +-- /services/peb-design-detailing
|   +-- /services/precast-design-detailing
|   +-- /services/research-and-development
|
+-- /projects
|   +-- /projects/completed
|   +-- /projects/tekla-models
|   +-- /projects/sds2-models
|   +-- /projects/sample-drawings
|
+-- /careers
+-- /blog
|   +-- /blog/[slug]
+-- /csr
+-- /contact
+-- /privacy-policy
+-- /terms-and-conditions
+-- /sitemap.xml
+-- /robots.txt
+-- /not-found
```

### 4.2 Navigation Hierarchy

```
PRIMARY NAVIGATION:
+-- Home
+-- About Us (Dropdown)
|   +-- Overview -> /about
|   +-- Awards -> /about/awards
|   +-- Our Team -> /about/team
|   +-- Life at Blanco -> /about/life-at-blanco
+-- Services (Dropdown)
|   +-- Structural Steel Detailing -> /services/structural-steel-detailing
|   +-- Structural Design -> /services/structural-design
|   +-- Revit Modelling -> /services/revit-modelling
|   +-- AutoCAD Services -> /services/autocad-services
|   +-- PEB Design & Detailing -> /services/peb-design-detailing
|   +-- Precast Design & Detailing -> /services/precast-design-detailing
|   +-- Research & Development -> /services/research-and-development
+-- Projects (Dropdown)
|   +-- Completed Projects -> /projects/completed
|   +-- Tekla Models -> /projects/tekla-models
|   +-- SDS2 Models -> /projects/sds2-models
|   +-- Sample Drawings -> /projects/sample-drawings
+-- Careers -> /careers
+-- Blog -> /blog
+-- CSR -> /csr
+-- Contact -> /contact
```

### 4.3 URL Structure

| Page | Path | Parent |
|------|------|--------|
| Home | `/` | - |
| About Overview | `/about` | - |
| Awards | `/about/awards` | About |
| Our Team | `/about/team` | About |
| Life at Blanco | `/about/life-at-blanco` | About |
| Services Overview | `/services` | - |
| Structural Steel Detailing | `/services/structural-steel-detailing` | Services |
| Structural Design | `/services/structural-design` | Services |
| Revit Modelling | `/services/revit-modelling` | Services |
| AutoCAD Services | `/services/autocad-services` | Services |
| PEB Design & Detailing | `/services/peb-design-detailing` | Services |
| Precast Design & Detailing | `/services/precast-design-detailing` | Services |
| Research & Development | `/services/research-and-development` | Services |
| Projects Overview | `/projects` | - |
| Completed Projects | `/projects/completed` | Projects |
| Tekla Models | `/projects/tekla-models` | Projects |
| SDS2 Models | `/projects/sds2-models` | Projects |
| Sample Drawings | `/projects/sample-drawings` | Projects |
| Careers | `/careers` | - |
| Blog | `/blog` | - |
| Blog Detail | `/blog/[slug]` | Blog |
| CSR | `/csr` | - |
| Contact | `/contact` | - |
| Privacy Policy | `/privacy-policy` | - |
| Terms & Conditions | `/terms-and-conditions` | - |
| 404 | `/not-found` | - |

---

## 5. User Journey

### 5.1 Prospective Client

```
Google Search -> Homepage -> Services -> Projects -> About -> Contact -> [LEAD]
```

### 5.2 Job Seeker

```
LinkedIn -> Careers -> Life at Blanco -> Our Team -> Application Form -> [APPLIED]
```

### 5.3 Existing Client

```
Bookmark -> Homepage -> Blog -> Projects -> Contact -> [ENGAGEMENT]
```

### 5.4 Industry Partner

```
Referral -> About Overview -> R&D Services -> Awards -> Contact -> [PARTNERSHIP]
```

### 5.5 Mobile Visitor

```
Social Media -> Homepage (Mobile) -> Hamburger Menu -> Contact -> [DIRECT CALL]
```

---

## 6. Complete Page Breakdown

### 6.1 Homepage

**URL:** `/`
**Purpose:** First impression, credibility, conversions

**Sections:**

| # | Section | Description |
|---|---------|-------------|
| 1 | Hero | Full-width image, animated headline, two CTAs |
| 2 | About Preview | Company description + image |
| 3 | Why Choose Blanco | 4 value proposition cards |
| 4 | Services Overview | 7 service cards grid |
| 5 | Industries Served | 8 industry category icons |
| 6 | Statistics Counter | Animated counters |
| 7 | Project Highlights | Featured projects carousel |
| 8 | Software Expertise | Logo infinite scroll |
| 9 | Certifications | Badge showcase |
| 10 | Process | 4-step timeline |
| 11 | Testimonials | Client quotes carousel |
| 12 | CTA Banner | Full-width conversion section |
| 13 | Contact Preview | Map + address + mini form |

**CTAs:** Explore Services, View Our Work, Get in Touch, View Careers

**SEO Title:** "Blanco Steel Detailing | World-Class Structural Steel Engineering Solutions"

**Schema:** Organization, WebSite

### 6.2 About - Overview

**URL:** `/about`

Sections: Hero, Company Profile, Mission & Vision, Core Values, History/Timeline, Global Presence, Infrastructure, Sister Company (Blanka)

### 6.3 About - Awards

**URL:** `/about/awards`

Sections: Hero, Certifications Grid (Tekla, AISC, ISO), Awards Timeline, Milestones

### 6.4 About - Our Team

**URL:** `/about/team`

Sections: Hero, Leadership (Mr. M.P. Simha, Mr. P.C. Manuprasad, Ms. Chaithra Keshava, Mr. K.P. Harshith), Engineering Team Overview, Culture

### 6.5 About - Life at Blanco

**URL:** `/about/life-at-blanco`

Sections: Hero, Culture Overview, Office Gallery (masonry), Events & Celebrations, Training, Employee Testimonials

### 6.6 Services - Overview

**URL:** `/services`

Sections: Hero, All 7 Services Grid, Why Blanco, Software We Use, CTA

### 6.7 Services - Individual (x7)

**URL:** `/services/[slug]`

Each includes: Hero, Overview, Process, Deliverables, Benefits, Software, CTA, FAQs, Related Services

**Service Content Summary:**

| Service | Key Deliverables | Primary Software |
|---------|-----------------|------------------|
| Structural Steel Detailing | Shop drawings, erection drawings, connection details, BOM, NC files | Tekla, AutoCAD |
| Structural Design | Design calculations, foundation drawings, connection design, BIM | RISA, RAM, Tekla |
| Revit Modelling | Revit models, COBie data, clash reports, coordination drawings | Revit |
| AutoCAD Services | 2D drafting, production drawings, as-built, detail drawings | AutoCAD |
| PEB Design & Detailing | PEB drawings, connection details, material lists, 3D models | Tekla, AutoCAD |
| Precast Design & Detailing | Panel drawings, connection details, erection drawings, BOM | AutoCAD, Tekla |
| Research & Development | Custom tools, automated workflows, API integrations | Tekla API, .NET |

### 6.8 Projects - Overview

**URL:** `/projects`

Sections: Hero, Filter Bar, Projects Grid, Pagination

### 6.9 Projects - Completed

**URL:** `/projects/completed`

Sections: Hero, Stats, Type Filter, Project Grid (image, title, type, tonnage, location), Load More

**Sample Data:**

| Project | Type | Tonnage | Location |
|---------|------|---------|----------|
| Placeholder 1 | Commercial | 5,000 Tons | Texas, USA |
| Placeholder 2 | Industrial | 2,500 Tons | Ontario, Canada |
| Placeholder 3 | Healthcare | 1,200 Tons | Melbourne, Australia |
| Placeholder 4 | Sports | 8,000 Tons | California, USA |
| Placeholder 5 | Mixed-Use | 3,500 Tons | New Jersey, USA |
| Placeholder 6 | Institutional | 2,000 Tons | Wisconsin, USA |

### 6.10-6.12 Projects - Tekla Models, SDS2 Models, Sample Drawings

Similar grid layouts focused on model renders, SDS2 screenshots, and drawing samples.

### 6.13 Careers

**URL:** `/careers`

Sections: Hero, Why Join (3 pillars: Career Growth, Training, Work-Life Balance), Open Positions, Culture, Application Form

**Form Fields:** Name, Email, Phone, Position (select), Resume (upload), Cover Letter, LinkedIn (optional)

### 6.14 Blog

**URL:** `/blog` and `/blog/[slug]`

Sections: Hero, Search, Category Tabs (All, Industry News, Technical, Company Updates, Case Studies), Blog Grid, Sidebar (Recent, Categories, Newsletter)

**Blog Detail:** Hero, Featured Image, Author, Content, Tags, Related Articles, Share

**Placeholder Posts:**
1. "The Future of Steel Detailing in BIM" - Technical
2. "Why AISC Compliance Matters" - Industry News
3. "Blanco Achieves 1000+ Projects" - Company Update
4. "Tekla Structures vs SDS2" - Technical
5. "PEB Design Revolutionizing Construction" - Industry News

### 6.15 CSR

**URL:** `/csr`

Sections: Hero, Overview, Initiatives, Impact Stats, Gallery

### 6.16 Contact

**URL:** `/contact`

Sections: Hero, Contact Form, Office Details, Google Map, Social Links, Quick Info

**Form Fields:** Name, Email, Phone, Subject (dropdown), Message

**Office:**
```
Blanco Steel Detailing Services Pvt. Ltd.
#3051, SPYR Arcade, Ring Road, Dattagalli
3rd Stage, Mysore, Karnataka - 570033
Phone: +91 821 295 7958
Email: hr@blanco-sdspl.com
Hours: Mon-Fri, 9:00 AM - 6:00 PM IST
```

### 6.17-6.19 Privacy Policy, Terms, 404

Standard legal pages and custom 404 with illustration, search, and quick links.

---

## 7. Component Inventory

### 7.1 Layout Components

| Component | Description |
|-----------|-------------|
| Header | Sticky nav with logo, links, mega menu, CTA, hamburger |
| MegaMenu | Dropdown for About, Services, Projects |
| MobileNav | Slide-out drawer with accordion |
| Footer | Multi-column with links, contact, social, newsletter |
| PageLayout | Wrapper with breadcrumbs, hero, content |
| Breadcrumbs | Current path navigation |
| ScrollProgress | Top progress bar |
| BackToTop | Floating button |

### 7.2 Home Components

| Component | Description |
|-----------|-------------|
| HeroSlider | Full-width hero with animated text |
| AboutPreview | Two-column text + image |
| WhyChooseUs | Feature cards with icons |
| ServiceCardGrid | Service cards grid |
| IndustriesServed | Industry icon grid |
| StatsCounter | Animated counters |
| ProjectHighlights | Featured projects carousel |
| SoftwareCarousel | Infinite logo scroll |
| CertificationBadges | Logo row |
| ProcessTimeline | Step visualization |
| TestimonialCarousel | Client quotes slider |
| CTABanner | Full-width CTA section |
| ContactPreview | Mini contact with map |

### 7.3 Shared UI Components

| Component | Description |
|-----------|-------------|
| Button | Primary, secondary, outline, ghost |
| SectionHeading | Heading with subtitle and accent |
| PageHero | Inner page hero banner |
| Card | Base card with hover effects |
| ServiceCard | Service-specific card |
| ProjectCard | Project card with metadata |
| TeamCard | Team member card |
| BlogCard | Blog post card |
| TestimonialCard | Client quote card |
| CertificationCard | Certification badge card |
| FAQAccordion | Expandable FAQ items |
| FilterTabs | Category filter buttons |
| Pagination | Page navigation |
| ContactForm | Styled contact form |
| ApplicationForm | Career application form |
| SearchInput | Search with icon |
| NewsletterForm | Email subscription |
| GoogleMapEmbed | Embedded map |
| ImageLightbox | Full-screen image viewer |
| LoadingSpinner | Loading state indicator |
| EmptyState | No content state |
| ErrorState | Error message state |
| Badge | Status/category badge |
| Avatar | User/team photo |
| Icon | SVG icon wrapper |
| Divider | Section divider |
| Container | Max-width wrapper |
| Section | Full-width section wrapper |
| Grid | Responsive grid layout |
| Tabs | Content tabs |
| Tooltip | Hover tooltip |
| Modal | Overlay modal dialog |

### 7.4 Custom Hooks

| Hook | Purpose |
|------|---------|
| useScrollAnimation | Intersection observer for scroll animations |
| useCounter | Animated counter logic |
| useMediaQuery | Responsive breakpoint detection |
| useScrollProgress | Page scroll progress |
| useMobileMenu | Mobile menu open/close state |
| useMegaMenu | Mega menu hover/focus state |
| useDebouncedSearch | Debounced search input |
| useFormValidation | Form validation with Zod |

---

## 8. Design System

### 8.1 Color Palette

Derived from Blanco logo (blue + white + red accent):

```
Primary:
  50:  #EFF6FF    (lightest blue)
  100: #DBEAFE
  200: #BFDBFE
  300: #93C5FD
  400: #60A5FA
  500: #1E3A5F    (Blanco Navy - PRIMARY)
  600: #1A3152
  700: #152845
  800: #101F38
  900: #0B162B    (darkest navy)

Secondary:
  50:  #FFF7ED
  100: #FFEDD5
  200: #FED7AA
  300: #FDBA74
  400: #FB923C
  500: #E8531E    (Blanco Red/Orange - SECONDARY)
  600: #D14A1A
  700: #B74016
  800: #9C3612
  900: #812C0E

Accent:
  50:  #F0FDF4
  500: #22C55E    (Success Green - ACCENT)
  600: #16A34A

Neutral:
  50:  #F8FAFC    (background)
  100: #F1F5F9
  200: #E2E8F0
  300: #CBD5E1
  400: #94A3B8
  500: #64748B    (body text)
  600: #475569
  700: #334155    (headings)
  800: #1E293B
  900: #0F172A    (darkest)

White: #FFFFFF
Black: #000000
```

### 8.2 Typography

**Primary Font:** Plus Jakarta Sans (headings, navigation, CTAs)
**Body Font:** Inter (body text, paragraphs, descriptions)

```
Font Sizes:
  xs:   0.75rem   (12px)
  sm:   0.875rem  (14px)
  base: 1rem      (16px)
  lg:   1.125rem  (18px)
  xl:   1.25rem   (20px)
  2xl:  1.5rem    (24px)
  3xl:  1.875rem  (30px)
  4xl:  2.25rem   (36px)
  5xl:  3rem      (48px)
  6xl:  3.75rem   (60px)

Font Weights:
  Regular:  400
  Medium:   500
  SemiBold: 600
  Bold:     700
  ExtraBold: 800

Line Heights:
  Tight:   1.2
  Snug:    1.375
  Normal:  1.5
  Relaxed: 1.625

Letter Spacing:
  Tight:  -0.025em
  Normal:  0
  Wide:    0.025em
  Wider:   0.05em
```

### 8.3 Spacing

```
0: 0px
1: 4px
2: 8px
3: 12px
4: 16px
5: 20px
6: 24px
8: 32px
10: 40px
12: 48px
16: 64px
20: 80px
24: 96px
32: 128px
```

### 8.4 Grid & Breakpoints

```
Breakpoints:
  sm:  640px    (mobile landscape)
  md:  768px    (tablet)
  lg:  1024px   (small desktop)
  xl:  1280px   (desktop)
  2xl: 1536px   (large desktop)

Container Max-Widths:
  sm:  640px
  md:  768px
  lg:  1024px
  xl:  1280px
  2xl: 1280px (capped)

Grid Columns:
  Default: 12 columns
  Gap: 1.5rem (24px) desktop, 1rem (16px) mobile
```

### 8.5 Border Radius

```
none:  0
sm:    0.25rem  (4px)
md:    0.5rem   (8px)
lg:    0.75rem  (12px)
xl:    1rem     (16px)
2xl:   1.5rem   (24px)
full:  9999px   (pill)
```

### 8.6 Shadows

```
sm:    0 1px 2px rgba(0,0,0,0.05)
base:  0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)
md:    0 4px 6px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.06)
lg:    0 10px 15px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.05)
xl:    0 20px 25px rgba(0,0,0,0.1), 0 10px 10px rgba(0,0,0,0.04)
2xl:   0 25px 50px rgba(0,0,0,0.25)
```

### 8.7 Icons

**Library:** Lucide React
**Style:** Outline, 1.5px stroke, consistent sizing (20px/24px)
**Custom SVGs:** Service icons (steel beam, blueprint, 3D model, etc.)

### 8.8 Buttons

```
Primary:
  bg: primary-500
  text: white
  hover: primary-600
  padding: 12px 28px
  font: semiBold, base
  radius: lg

Secondary:
  bg: white
  text: primary-500
  border: 2px primary-500
  hover: primary-50 bg

Outline:
  bg: transparent
  text: white
  border: 2px white
  hover: white/10 bg

Ghost:
  bg: transparent
  text: primary-500
  hover: primary-50 bg

Sizes:
  sm: 8px 16px, text-sm
  md: 12px 28px, text-base
  lg: 16px 36px, text-lg
```

### 8.9 Cards

```
Default:
  bg: white
  radius: xl
  shadow: md
  hover: shadow-lg, translateY(-4px)
  padding: 24px
  transition: all 0.3s ease

Project Card:
  image: aspect-ratio 4/3, object-cover
  overlay: gradient on hover
  content: padding 16px
  badge: category tag
```

### 8.10 Animation Rules

- Duration: 200ms (fast), 300ms (normal), 500ms (slow)
- Easing: ease-out for entrances, ease-in for exits
- Stagger: 100ms between items
- Scroll triggers: 20% viewport threshold
- Hover transforms: max translateY(-4px) or scale(1.02)
- No animation on prefers-reduced-motion

---

## 9. UI/UX Guidelines

### 9.1 Design Principles

1. **Professional First:** Every element should convey engineering precision
2. **Content Hierarchy:** H1 > H2 > H3 > body > caption, with clear visual distinction
3. **White Space:** Generous padding between sections (py-20 to py-32)
4. **Consistency:** Same component, same style, every time
5. **Trust Signals:** Statistics, certifications, and testimonials prominently placed
6. **Action-Oriented:** Every section ends with a clear CTA

### 9.2 Accessibility

- WCAG 2.1 AA compliance minimum
- Color contrast ratio >= 4.5:1 for text
- Focus-visible outlines on all interactive elements
- Skip-to-content link
- Alt text on all images
- Form labels associated with inputs
- Keyboard-navigable mega menu

### 9.3 Responsive Behavior

| Breakpoint | Layout Changes |
|------------|---------------|
| < 640px | Single column, hamburger menu, stacked sections, full-width cards |
| 640-768px | Two-column grids, collapsible mega menu |
| 768-1024px | Three-column grids, simplified mega menu |
| 1024-1280px | Full layouts, mega menu, multi-column grids |
| > 1280px | Max-width containers, full feature set |

### 9.4 Loading States

- Skeleton loaders for images and content
- Spinner for form submissions
- Progressive image loading with blur placeholder
- Optimistic UI for form interactions

### 9.5 Error States

- Form validation: inline errors below fields
- 404 page: friendly message + search + home link
- API errors: retry button + error message
- Empty states: illustration + suggestion

### 9.6 Form Validation

- Real-time validation on blur
- Error messages below each field
- Required field indicators (*)
- Email format validation
- Phone number format validation
- Min/max length for text areas
- File type validation for uploads

---

## 10. Content Strategy

### 10.1 Content Sources

| Source | Content |
|--------|---------|
| Company Brochure (PDF) | Company profile, services, stats, team |
| Blanco Website | Existing copy, contact info, basic content |
| LinkedIn Company Page | Company description, updates |
| Client Input | Project data, awards, testimonials, photos |
| Content Creation | Blog posts, case studies, SEO content |

### 10.2 Placeholder Strategy

For content not yet available from the client:

| Content Type | Placeholder Approach |
|-------------|---------------------|
| Projects | Generic steel structure names with realistic data |
| Testimonials | "Client Name" / "Company Name" with placeholder quotes |
| Blog Posts | 5 SEO-optimized placeholder articles |
| Team Photos | Silhouette avatars or "Photo Coming Soon" |
| Project Images | Royalty-free steel structure images |
| Awards | "Award details coming soon" |
| CSR Content | "Our CSR initiatives are being documented" |
| Open Positions | "Check back soon for openings" |

### 10.3 Image Strategy

- Primary: Assets from `/public/BLANCO_ASSETS/`
- Secondary: Royalty-free from Unsplash/Pexels (steel structures, offices, construction)
- Tertiary: SVG illustrations for icons and empty states
- All paths organized for easy replacement

### 10.4 Blog Strategy

- 2 posts per month after launch
- Focus on: steel detailing insights, BIM technology, AISC compliance, project case studies
- Target: 800-1500 words per post
- SEO-optimized with target keywords

---

## 11. Image Requirements

### 11.1 Available Assets

| File | Usage |
|------|-------|
| BLANCO_LOGO.webp | Header, footer, favicon |
| BLANKA_LOGO.webp | Sister company section |
| Cover_Page_Photos.webp | Hero, about section |
| Team_Blanco.webp | About, team, careers |
| Collaged_Office_Photos.webp | Life at Blanco |
| Employment_Growth_Chart.webp | Careers, about |
| Project1-6.webp | Project gallery |
| Steel_Detailing_work.webp | Service pages, about |
| Tekla.png | Software section |
| AutoCad.webp | Software section |
| RISA.png | Software section |
| RAM.png | Software section |
| IdeaStatica.png | Software section |

### 11.2 Required Placeholder Images

| Image | Recommended Size | Source |
|-------|-----------------|--------|
| Hero background (steel structure) | 1920x1080 | Royalty-free |
| Service page heroes (x7) | 1920x800 | Royalty-free |
| Blog featured images | 1200x630 | Royalty-free |
| Team headshots (x4) | 400x400 | Placeholder |
| CSR activity photos | 800x600 | Placeholder |
| Awards/certification logos | 200x200 | Client to provide |
| Client logos | 200x100 | Placeholder |
| Gallery images (events) | 800x600 | Client to provide |
| 404 illustration | 600x400 | Custom SVG |
| Industry icons | 64x64 | Custom SVG |

### 11.3 Image Optimization

- Format: WebP (primary), JPEG (fallback)
- Quality: 80% for photos, 90% for graphics
- Lazy loading on all below-fold images
- Blur placeholder for progressive loading
- Responsive srcSet for all images
- Next.js `priority` on above-fold images only

---

## 12. Animation Plan

### 12.1 Page Load Animations

| Animation | Component | Details |
|-----------|-----------|---------|
| Logo fade-in | Header | 0.3s fade, 0.2s delay |
| Nav items stagger | Header | 100ms stagger, slide-down |
| Hero text reveal | Hero | Word-by-word stagger, 0.1s each |
| Hero CTA buttons | Hero | Scale from 0.8 + fade, 0.5s delay |
| Hero background | Hero | Subtle Ken Burns zoom, 20s loop |

### 12.2 Scroll Animations

| Animation | Trigger | Details |
|-----------|---------|---------|
| Section fade-up | 20% viewport | translateY(40px) + opacity, 0.6s |
| Stagger children | Parent in view | 100ms stagger per child |
| Counter animate | Counter in view | 0 to target, 2s duration |
| Image reveal | Image in view | Clip-path or scale reveal, 0.8s |
| Timeline items | Item in view | Slide from left, 0.5s each |
| Process steps | Step in view | Fade + slide, 150ms stagger |
| Service cards | Grid in view | Scale from 0.9, 100ms stagger |
| Project cards | Grid in view | Fade-up, 100ms stagger |

### 12.3 Hover Animations

| Element | Effect |
|---------|--------|
| Buttons | bg-color transition + slight scale(1.02) |
| Cards | shadow-lg + translateY(-4px), 0.3s |
| Service cards | border-left accent + shadow |
| Project cards | image zoom(1.05) + overlay gradient |
| Nav links | color transition + underline animation |
| Team cards | image grayscale removal |
| Social icons | color transition + scale(1.1) |

### 12.4 Page Transitions

| Transition | Details |
|-----------|---------|
| Route change | Content fade-out (0.2s) + fade-in (0.3s) |
| Scroll to section | Smooth scroll, 0.5s |
| Mega menu | Opacity + translateY, 0.2s |
| Mobile menu | Slide from right, 0.3s |
| Modal | Fade + scale, 0.2s |
| Back to top | Fade in/out on scroll threshold |

### 12.5 Reduced Motion

All animations wrapped in `prefers-reduced-motion: no-preference` media query. Users with reduced motion preference see instant state changes without animation.

---

## 13. Technical Architecture

### 13.1 Framework

| Technology | Version | Purpose |
|-----------|---------|---------|
| Next.js | 16.x (App Router) | Framework, routing, SSR, SSG |
| React | 19.x | UI library |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 4.x | Utility-first styling |
| Framer Motion | Latest | Animations |
| Lucide React | Latest | Icons |
| React Hook Form | Latest | Form state management |
| Zod | Latest | Schema validation |
| Embla Carousel | Latest | Carousels and sliders |

### 13.2 Routing Strategy

- All pages use Next.js App Router (`app/` directory)
- Dynamic routes: `/blog/[slug]`, `/projects/[category]`
- Layouts: Root layout (Header/Footer), section layouts
- Loading: `loading.tsx` for each route group
- Error: `error.tsx` for error boundaries

### 13.3 Rendering Strategy

| Page | Strategy | Reason |
|------|----------|--------|
| Home | SSG (Static) | Marketing page, update infrequently |
| About | SSG | Company info, static content |
| Services | SSG | Service descriptions, static |
| Projects | SSG + ISR | May update with new projects |
| Careers | SSG + ISR | Job listings may change |
| Blog | SSG + ISR | New posts published |
| Contact | SSG | Static form page |
| CSR | SSG | Static content |

### 13.4 Data Strategy

- Blog posts: Local JSON/MDX files (Phase 1), Headless CMS (future)
- Projects: Local JSON data, easy migration to CMS
- Job listings: Local JSON, API route for form submission
- All content in `content/` directory for easy management

### 13.5 Form Handling

- React Hook Form for state management
- Zod for validation schemas
- API routes (`app/api/`) for form submission
- Email notification via Resend or Nodemailer (future)
- File uploads via FormData to API route

### 13.6 SEO Implementation

- Next.js Metadata API for per-page SEO
- JSON-LD structured data via script tags
- Auto-generated sitemap.xml
- robots.txt via Next.js route
- Open Graph images per page
- Canonical URLs

### 13.7 Image Optimization

- Next.js `next/image` for all images
- Automatic WebP conversion
- Responsive srcSet generation
- Blur placeholder for lazy loading
- Priority loading for above-fold images

---

## 14. Folder Structure

```
blanco/
|
+-- app/
|   +-- layout.tsx                    # Root layout (Header, Footer, fonts)
|   +-- page.tsx                      # Homepage
|   +-- loading.tsx                   # Global loading state
|   +-- not-found.tsx                 # Custom 404 page
|   +-- globals.css                   # Global styles + Tailwind
|   |
|   +-- about/
|   |   +-- layout.tsx               # About section layout
|   |   +-- page.tsx                 # About overview
|   |   +-- awards/
|   |   |   +-- page.tsx             # Awards & certifications
|   |   +-- team/
|   |   |   +-- page.tsx             # Our team
|   |   +-- life-at-blanco/
|   |       +-- page.tsx             # Life at Blanco
|   |
|   +-- services/
|   |   +-- layout.tsx               # Services section layout
|   |   +-- page.tsx                 # Services overview
|   |   +-- [slug]/
|   |       +-- page.tsx             # Individual service (dynamic)
|   |       +-- loading.tsx          # Service page loading
|   |
|   +-- projects/
|   |   +-- layout.tsx               # Projects section layout
|   |   +-- page.tsx                 # Projects overview
|   |   +-- completed/
|   |   |   +-- page.tsx             # Completed projects
|   |   +-- tekla-models/
|   |   |   +-- page.tsx             # Tekla models
|   |   +-- sds2-models/
|   |   |   +-- page.tsx             # SDS2 models
|   |   +-- sample-drawings/
|   |       +-- page.tsx             # Sample drawings
|   |
|   +-- careers/
|   |   +-- page.tsx                 # Careers page
|   |
|   +-- blog/
|   |   +-- page.tsx                 # Blog listing
|   |   +-- [slug]/
|   |       +-- page.tsx             # Blog detail
|   |
|   +-- csr/
|   |   +-- page.tsx                 # CSR page
|   |
|   +-- contact/
|   |   +-- page.tsx                 # Contact page
|   |
|   +-- privacy-policy/
|   |   +-- page.tsx                 # Privacy policy
|   |
|   +-- terms-and-conditions/
|   |   +-- page.tsx                 # Terms & conditions
|   |
|   +-- api/
|       +-- contact/
|       |   +-- route.ts             # Contact form API
|       +-- careers/
|           +-- route.ts             # Career application API
|       +-- newsletter/
|           +-- route.ts             # Newsletter subscription API
|
+-- components/
|   +-- layout/
|   |   +-- Header.tsx
|   |   +-- Footer.tsx
|   |   +-- MegaMenu.tsx
|   |   +-- MobileNav.tsx
|   |   +-- Breadcrumbs.tsx
|   |   +-- ScrollProgress.tsx
|   |   +-- BackToTop.tsx
|   |   +-- Container.tsx
|   |   +-- Section.tsx
|   |
|   +-- home/
|   |   +-- Hero.tsx
|   |   +-- AboutPreview.tsx
|   |   +-- WhyChooseUs.tsx
|   |   +-- ServicesOverview.tsx
|   |   +-- IndustriesServed.tsx
|   |   +-- StatsCounter.tsx
|   |   +-- ProjectHighlights.tsx
|   |   +-- SoftwareCarousel.tsx
|   |   +-- CertificationBadges.tsx
|   |   +-- ProcessTimeline.tsx
|   |   +-- TestimonialCarousel.tsx
|   |   +-- CTABanner.tsx
|   |   +-- ContactPreview.tsx
|   |
|   +-- ui/
|   |   +-- Button.tsx
|   |   +-- Card.tsx
|   |   +-- ServiceCard.tsx
|   |   +-- ProjectCard.tsx
|   |   +-- TeamCard.tsx
|   |   +-- BlogCard.tsx
|   |   +-- TestimonialCard.tsx
|   |   +-- CertificationCard.tsx
|   |   +-- FAQAccordion.tsx
|   |   +-- FilterTabs.tsx
|   |   +-- Pagination.tsx
|   |   +-- SearchInput.tsx
|   |   +-- Badge.tsx
|   |   +-- Avatar.tsx
|   |   +-- SectionHeading.tsx
|   |   +-- PageHero.tsx
|   |   +-- Divider.tsx
|   |   +-- Tabs.tsx
|   |   +-- Modal.tsx
|   |   +-- Tooltip.tsx
|   |   +-- LoadingSpinner.tsx
|   |   +-- EmptyState.tsx
|   |   +-- ErrorState.tsx
|   |   +-- ImageLightbox.tsx
|   |
|   +-- forms/
|   |   +-- ContactForm.tsx
|   |   +-- ApplicationForm.tsx
|   |   +-- NewsletterForm.tsx
|   |   +-- FormField.tsx
|   |
|   +-- shared/
|       +-- GoogleMapEmbed.tsx
|       +-- SocialLinks.tsx
|       +-- AnimatedCounter.tsx
|       +-- InfiniteScroll.tsx
|       +-- MasonryGallery.tsx
|       +-- RichText.tsx
|
+-- content/
|   +-- blog/
|   |   +-- future-of-steel-detailing-bim.mdx
|   |   +-- aisc-compliance-matters.mdx
|   |   +-- blanco-1000-projects.mdx
|   |   +-- tekla-vs-sds2.mdx
|   |   +-- peb-design-revolution.mdx
|   |
|   +-- projects/
|   |   +-- completed.json
|   |   +-- tekla-models.json
|   |   +-- sds2-models.json
|   |   +-- sample-drawings.json
|   |
|   +-- services/
|   |   +-- structural-steel-detailing.json
|   |   +-- structural-design.json
|   |   +-- revit-modelling.json
|   |   +-- autocad-services.json
|   |   +-- peb-design-detailing.json
|   |   +-- precast-design-detailing.json
|   |   +-- research-and-development.json
|   |
|   +-- careers/
|   |   +-- positions.json
|   |
|   +-- testimonials.json
|   +-- team.json
|   +-- certifications.json
|
+-- hooks/
|   +-- useScrollAnimation.ts
|   +-- useCounter.ts
|   +-- useMediaQuery.ts
|   +-- useScrollProgress.ts
|   +-- useMobileMenu.ts
|   +-- useMegaMenu.ts
|   +-- useDebouncedSearch.ts
|   +-- useFormValidation.ts
|
+-- lib/
|   +-- utils.ts                     # cn() helper, formatting
|   +-- constants.ts                 # Site-wide constants
|   +-- metadata.ts                  # Default SEO metadata
|
+-- types/
|   +-- index.ts                     # Shared type definitions
|   +-- project.ts                   # Project types
|   +-- service.ts                   # Service types
|   +-- blog.ts                      # Blog types
|   +-- career.ts                    # Career types
|   +-- team.ts                      # Team types
|
+-- constants/
|   +-- navigation.ts                # Nav structure
|   +-- services.ts                  # Service data
|   +-- industries.ts                # Industry data
|   +-- statistics.ts                # Stats counter data
|   +-- software.ts                  # Software logos/data
|   +-- certifications.ts            # Certification data
|   +-- contact.ts                   # Contact information
|   +-- social.ts                    # Social media links
|
+-- utils/
|   +-- format.ts                    # Number/date formatting
|   +-- validation.ts                # Zod schemas
|   +-- seo.ts                       # SEO helper functions
|   +-- slugify.ts                   # URL slug generation
|
+-- public/
|   +-- BLANCO_ASSETS/               # Company assets
|   +-- images/
|   |   +-- hero/                    # Hero backgrounds
|   |   +-- services/                # Service page images
|   |   +-- projects/                # Project gallery
|   |   +-- blog/                    # Blog featured images
|   |   +-- team/                    # Team photos
|   |   +-- gallery/                 # Life at Blanco
|   |   +-- certifications/          # Cert logos
|   |   +-- clients/                 # Client logos
|   |   +-- icons/                   # Custom SVG icons
|   |   +-- illustrations/           # Custom illustrations
|   +-- fonts/                       # Local fonts (if needed)
|   +-- robots.txt
|   +-- sitemap.xml                  # Auto-generated
|   +-- favicon.ico
|   +-- og-image.png                 # Default OG image
|
+-- styles/
|   +-- (reserved for additional CSS if needed)
|
+-- middleware.ts                     # Redirects, rewrites
+-- next.config.ts                   # Next.js configuration
+-- tailwind.config.ts               # Tailwind configuration
+-- tsconfig.json                    # TypeScript configuration
+-- eslint.config.mjs                # ESLint configuration
+-- postcss.config.mjs               # PostCSS configuration
+-- package.json
```

### 14.1 Folder Purpose

| Folder | Purpose |
|--------|---------|
| `app/` | Next.js App Router pages and API routes |
| `components/layout/` | Structural layout components (Header, Footer, etc.) |
| `components/home/` | Homepage-specific section components |
| `components/ui/` | Generic, reusable UI components |
| `components/forms/` | Form components with validation |
| `components/shared/` | Components used across multiple pages |
| `content/` | Static content files (blog, projects, services) |
| `hooks/` | Custom React hooks |
| `lib/` | Utility functions and helpers |
| `types/` | TypeScript type definitions |
| `constants/` | Static data and configuration |
| `utils/` | Pure utility functions |
| `public/` | Static assets served directly |
| `styles/` | Additional CSS (if needed beyond Tailwind) |

---

## 15. SEO Strategy

### 15.1 Metadata

Every page gets unique metadata via Next.js Metadata API:

```typescript
// Pattern per page
export const metadata: Metadata = {
  title: "Page Title | Blanco Steel Detailing",
  description: "Unique meta description per page",
  openGraph: { title, description, url, images },
  twitter: { card: "summary_large_image", ... },
  alternates: { canonical: "https://blanco-sdspl.com/page" },
};
```

### 15.2 Structured Data (JSON-LD)

| Page | Schema Type |
|------|------------|
| Home | Organization, WebSite, SiteNavigationElement |
| About | AboutPage, Organization |
| Services | Service |
| Projects | CreativeWork |
| Blog | Article, BlogPosting |
| Blog Detail | Article, Author |
| Contact | LocalBusiness, ContactPage |
| Careers | JobPosting (per listing) |

### 15.3 Sitemap

Auto-generated `sitemap.xml` including:
- All static pages with lastModified
- Blog posts with publish dates
- Project pages with update frequencies
- Priority hierarchy: Home (1.0) > Services (0.9) > Projects (0.8) > Others (0.7)

### 15.4 Robots.txt

```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/

Sitemap: https://blanco-sdspl.com/sitemap.xml
```

### 15.5 Target Keywords

| Page | Primary Keywords |
|------|-----------------|
| Home | steel detailing services, structural steel detailing company |
| Steel Detailing | steel detailing services USA, AISC steel detailing |
| Structural Design | structural design services, steel structure design |
| Revit Modelling | BIM modelling services, Revit structural modeling |
| PEB | PEB design detailing, pre-engineered building design |
| Careers | steel detailing jobs, structural engineer jobs India |
| Blog | steel detailing blog, AISC standards guide |

### 15.6 Internal Linking

- Every page links to related services (sidebar/footer)
- Blog posts link to relevant service pages
- Project pages link to related service pages
- Footer contains links to all primary pages
- Breadcrumbs provide hierarchical linking

---

## 16. Performance Strategy

### 16.1 Core Web Vitals Targets

| Metric | Target | Strategy |
|--------|--------|----------|
| LCP | < 2.5s | Priority loading, image optimization, font preload |
| FID | < 100ms | Minimal JS, code splitting, lazy loading |
| CLS | < 0.1 | Image dimensions, font-display, skeleton loaders |
| TTFB | < 200ms | SSG, CDN, edge caching |
| INP | < 200ms | Optimized event handlers, minimal re-renders |

### 16.2 Image Optimization

- All images via `next/image` with automatic optimization
- WebP format preferred
- Responsive sizes via `sizes` attribute
- Blur placeholder via `placeholder="blur"`
- Priority loading only for LCP elements

### 16.3 Code Splitting

- Automatic route-based splitting via Next.js App Router
- Dynamic imports for heavy components (lightbox, map, carousel)
- Framer Motion loaded only when needed

### 16.4 Font Optimization

- `next/font` for Inter and Plus Jakarta Sans
- `display: swap` for font loading
- Preload critical font subsets
- Minimize font weight variations (400, 500, 600, 700)

### 16.5 Caching

- Static pages: CDN cache (1 hour)
- ISR pages: Revalidate every 60 seconds
- Images: Immutable caching headers
- API responses: Appropriate cache headers

### 16.6 Bundle Optimization

- Tree-shaking enabled (default in Next.js)
- Analyze bundle size periodically
- Avoid large dependencies
- Use `next/dynamic` for below-fold components

---

## 17. Accessibility Strategy

### 17.1 WCAG 2.1 AA Compliance

| Criterion | Implementation |
|-----------|---------------|
| 1.1.1 Non-text Content | Alt text on all images |
| 1.3.1 Info & Relationships | Semantic HTML (nav, main, section, article) |
| 1.4.3 Contrast | Min 4.5:1 text, 3:1 large text |
| 2.1.1 Keyboard | All interactive elements keyboard accessible |
| 2.4.1 Skip Navigation | Skip-to-content link |
| 2.4.3 Focus Order | Logical tab order |
| 2.4.6 Headings | Proper heading hierarchy (no skipping) |
| 2.4.7 Focus Visible | Visible focus outlines |
| 3.3.1 Error Identification | Clear error messages |
| 3.3.2 Labels | Associated labels on all form fields |
| 4.1.2 Name/Role/Value | ARIA attributes on custom components |

### 17.2 Keyboard Navigation

- Tab through all interactive elements
- Enter/Space to activate buttons and links
- Escape to close modals and mega menus
- Arrow keys for carousel navigation
- Focus trapped in modals when open

### 17.3 Screen Readers

- ARIA labels on icon-only buttons
- ARIA live regions for dynamic content (counters)
- Role attributes on custom widgets
- Screen reader-only text where needed (sr-only)

### 17.4 Semantic HTML

```html
<!-- Preferred structure -->
<header> <!-- Site header with nav -->
  <nav aria-label="Main navigation">
  <nav aria-label="Breadcrumb">
<main> <!-- Page content -->
  <section aria-labelledby="section-title">
  <article> <!-- Blog posts -->
<footer> <!-- Site footer -->
```

---

## 18. Future Scalability

### 18.1 CMS Integration

- Content currently in local JSON/MDX files
- Migration path: Contentful, Sanity, or Strapi
- All content types already defined in `types/` directory
- API routes can be swapped to fetch from CMS

### 18.2 Admin Panel

- Next.js Admin route group (`/admin/`)
- Authentication via NextAuth.js
- Blog CRUD operations
- Project management
- Career listing management
- Form submission viewing

### 18.3 Authentication

- NextAuth.js for admin authentication
- Role-based access control
- Session management

### 18.4 Blog Management

- MDX-based blog with local files (Phase 1)
- WYSIWYG editor integration (future)
- Draft/publish workflow
- Scheduled publishing

### 18.5 Careers Portal

- Application tracking system
- Email notifications to HR
- Status updates for applicants
- Integration with HR tools

### 18.6 Multi-Language

- Next.js i18n routing
- Content translation files
- Language switcher in header
- Initial languages: English, Hindi (potential)

### 18.7 Analytics

- Vercel Analytics (built-in)
- Google Analytics integration
- Event tracking for CTAs
- Form submission tracking

### 18.8 CRM Integration

- Form submissions to CRM (HubSpot, Salesforce)
- Lead scoring and routing
- Email automation

---

## 19. Development Roadmap

### Phase 1: Planning & Documentation (Current)

| Task | Complexity | Status |
|------|-----------|--------|
| Requirements analysis | Medium | Complete |
| Reference website analysis | Medium | Complete |
| Sitemap and IA | Medium | Complete |
| Design system definition | High | Complete |
| Component inventory | High | Complete |
| Technical architecture | High | Complete |
| Documentation creation | High | Complete |

### Phase 2: Project Setup

| Task | Complexity | Est. Time |
|------|-----------|-----------|
| Install dependencies (Framer Motion, RHF, Zod, etc.) | Low | 1 hour |
| Configure Tailwind with custom theme | Medium | 2 hours |
| Set up folder structure | Low | 1 hour |
| Configure TypeScript paths and types | Low | 1 hour |
| Set up ESLint + Prettier rules | Low | 30 min |
| Create global layout (Header + Footer) | High | 4 hours |
| Configure next.config.ts | Low | 30 min |

### Phase 3: Reusable UI Components

| Task | Complexity | Est. Time |
|------|-----------|-----------|
| Button variants | Low | 1 hour |
| Card component | Medium | 2 hours |
| SectionHeading + PageHero | Medium | 2 hours |
| Breadcrumbs | Low | 1 hour |
| FilterTabs | Medium | 1.5 hours |
| FAQ Accordion | Medium | 2 hours |
| Pagination | Medium | 1.5 hours |
| Contact/Application Form | High | 4 hours |
| AnimatedCounter | Medium | 2 hours |
| ImageLightbox | Medium | 2 hours |
| GoogleMapEmbed | Low | 1 hour |
| LoadingSpinner + EmptyState | Low | 1 hour |

### Phase 4: Pages

| Task | Complexity | Est. Time |
|------|-----------|-----------|
| Homepage (all 13 sections) | Very High | 12 hours |
| About Overview | Medium | 3 hours |
| About Awards | Medium | 2 hours |
| About Team | Medium | 2 hours |
| About Life at Blanco | Medium | 3 hours |
| Services Overview | Medium | 2 hours |
| 7 Individual Service Pages | High | 8 hours |
| Projects Overview + Completed | High | 4 hours |
| Tekla Models + SDS2 + Drawings | Medium | 4 hours |
| Careers | High | 4 hours |
| Blog Listing + Detail | High | 5 hours |
| CSR | Medium | 2 hours |
| Contact | Medium | 3 hours |
| Privacy Policy + Terms | Low | 1 hour |
| Custom 404 | Low | 1 hour |

### Phase 5: Animations

| Task | Complexity | Est. Time |
|------|-----------|-----------|
| Scroll animations (useScrollAnimation hook) | Medium | 2 hours |
| Hero animations | Medium | 2 hours |
| Counter animations | Low | 1 hour |
| Stagger animations | Low | 1 hour |
| Page transitions | Medium | 2 hours |
| Hover effects (global) | Low | 1 hour |
| Mobile menu animation | Medium | 1.5 hours |
| Mega menu animation | Medium | 1.5 hours |
| Scroll progress + Back to top | Low | 1 hour |

### Phase 6: SEO

| Task | Complexity | Est. Time |
|------|-----------|-----------|
| Per-page metadata | Medium | 3 hours |
| JSON-LD structured data | Medium | 3 hours |
| Sitemap generation | Low | 1 hour |
| Robots.txt | Low | 15 min |
| Open Graph images | Low | 1 hour |
| Canonical URLs | Low | 30 min |

### Phase 7: Testing & Optimization

| Task | Complexity | Est. Time |
|------|-----------|-----------|
| Responsive testing (all breakpoints) | High | 4 hours |
| Accessibility audit | Medium | 3 hours |
| Performance audit (Lighthouse) | Medium | 2 hours |
| Form testing | Medium | 2 hours |
| Cross-browser testing | Medium | 3 hours |
| SEO validation | Low | 1 hour |
| Bug fixes | Variable | 4 hours |

### Phase 8: Production Polish

| Task | Complexity | Est. Time |
|------|-----------|-----------|
| Final code review | Medium | 3 hours |
| Remove unused code | Low | 1 hour |
| Performance optimization | Medium | 2 hours |
| Deployment configuration | Low | 1 hour |
| Domain and SSL setup | Low | 1 hour |
| Analytics setup | Low | 1 hour |

**Total Estimated Time: ~120-140 hours**

---

## 20. Deliverables Checklist

### Pages (25 total)

- [ ] Homepage (`/`)
- [ ] About Overview (`/about`)
- [ ] Awards (`/about/awards`)
- [ ] Our Team (`/about/team`)
- [ ] Life at Blanco (`/about/life-at-blanco`)
- [ ] Services Overview (`/services`)
- [ ] Structural Steel Detailing (`/services/structural-steel-detailing`)
- [ ] Structural Design (`/services/structural-design`)
- [ ] Revit Modelling (`/services/revit-modelling`)
- [ ] AutoCAD Services (`/services/autocad-services`)
- [ ] PEB Design & Detailing (`/services/peb-design-detailing`)
- [ ] Precast Design & Detailing (`/services/precast-design-detailing`)
- [ ] Research & Development (`/services/research-and-development`)
- [ ] Projects Overview (`/projects`)
- [ ] Completed Projects (`/projects/completed`)
- [ ] Tekla Models (`/projects/tekla-models`)
- [ ] SDS2 Models (`/projects/sds2-models`)
- [ ] Sample Drawings (`/projects/sample-drawings`)
- [ ] Careers (`/careers`)
- [ ] Blog Listing (`/blog`)
- [ ] Blog Detail (`/blog/[slug]`)
- [ ] CSR (`/csr`)
- [ ] Contact (`/contact`)
- [ ] Privacy Policy (`/privacy-policy`)
- [ ] Terms & Conditions (`/terms-and-conditions`)
- [ ] Custom 404 (`/not-found`)

### Layout Components

- [ ] Header (sticky, responsive)
- [ ] Mega Menu (About, Services, Projects)
- [ ] Mobile Navigation (drawer + accordion)
- [ ] Footer (multi-column, newsletter)
- [ ] Breadcrumbs
- [ ] Scroll Progress Bar
- [ ] Back to Top Button
- [ ] Page Layout wrapper

### Homepage Sections

- [ ] Hero (animated text, CTAs)
- [ ] About Preview
- [ ] Why Choose Blanco
- [ ] Services Overview Grid
- [ ] Industries Served
- [ ] Statistics Counter (animated)
- [ ] Project Highlights
- [ ] Software Expertise (infinite scroll)
- [ ] Certification Badges
- [ ] Process Timeline
- [ ] Testimonials
- [ ] CTA Banner
- [ ] Contact Preview

### UI Components

- [ ] Button (4 variants)
- [ ] Card / ServiceCard / ProjectCard / TeamCard / BlogCard
- [ ] SectionHeading
- [ ] PageHero
- [ ] FAQ Accordion
- [ ] FilterTabs
- [ ] Pagination
- [ ] Badge
- [ ] Avatar
- [ ] Modal
- [ ] Tooltip
- [ ] LoadingSpinner
- [ ] EmptyState / ErrorState
- [ ] ImageLightbox
- [ ] GoogleMapEmbed
- [ ] SocialLinks
- [ ] AnimatedCounter
- [ ] InfiniteScroll / SoftwareCarousel
- [ ] MasonryGallery

### Forms

- [ ] Contact Form (validated)
- [ ] Career Application Form (validated + file upload)
- [ ] Newsletter Subscription
- [ ] Blog Search

### Animations

- [ ] Scroll-triggered fade-up
- [ ] Stagger animations
- [ ] Counter animation
- [ ] Image reveal
- [ ] Hero text animation
- [ ] Hover effects (cards, buttons, links)
- [ ] Page transitions
- [ ] Mega menu open/close
- [ ] Mobile menu slide
- [ ] Scroll progress
- [ ] Back to top fade

### SEO

- [ ] Per-page metadata
- [ ] Open Graph tags
- [ ] Twitter Cards
- [ ] JSON-LD structured data
- [ ] Auto-generated sitemap.xml
- [ ] robots.txt
- [ ] Canonical URLs
- [ ] Semantic HTML structure

### Performance

- [ ] Image optimization (next/image, WebP, lazy)
- [ ] Font optimization (next/font)
- [ ] Code splitting (dynamic imports)
- [ ] Bundle size optimization
- [ ] Core Web Vitals passing

### Accessibility

- [ ] WCAG 2.1 AA compliance
- [ ] Keyboard navigation
- [ ] Screen reader support
- [ ] Focus indicators
- [ ] Alt text on all images
- [ ] Form labels and errors
- [ ] Skip-to-content link
- [ ] Reduced motion support

### Content

- [ ] 5 blog posts (MDX)
- [ ] 7 service descriptions (JSON)
- [ ] 6+ project entries (JSON)
- [ ] Team data (JSON)
- [ ] Certification data (JSON)
- [ ] Testimonial data (JSON)
- [ ] Contact information (constants)
- [ ] Navigation structure (constants)

### API Routes

- [ ] Contact form submission
- [ ] Career application submission
- [ ] Newsletter subscription

### Configuration

- [ ] next.config.ts
- [ ] Tailwind theme configuration
- [ ] TypeScript configuration
- [ ] ESLint configuration
- [ ] robots.txt
- [ ] sitemap.xml generation

---

## Assumptions

1. The brochure PDF contains additional company information that can be extracted manually
2. Client will provide: team photos, project images, awards, testimonials, CSR content
3. The website will be deployed to Vercel (optimal for Next.js)
4. Domain: blanco-sdspl.com (or client-chosen domain)
5. No authentication required for public-facing pages
6. Blog content will be managed via local MDX files initially
7. Form submissions will be handled via API routes (email integration is future scope)
8. Google Maps integration requires a Maps API key from the client

## Areas Requiring Client Input

1. **Team Photos:** High-quality headshots of leadership team
2. **Project Data:** Actual project names, images, tonnage, locations
3. **Testimonials:** Client quotes with names and companies
4. **Awards:** Specific award names, dates, and descriptions
5. **Certification Logos:** Official logo files for Tekla, AISC, ISO
6. **CSR Content:** Description of CSR initiatives and photos
7. **Open Positions:** Current job openings with descriptions
8. **Blog Topics:** Preferred topics and any existing content
9. **Google Maps API Key:** For embedded map
10. **Domain & Hosting:** Final domain name and deployment platform
11. **Color Preferences:** Approval of color palette derived from logo
12. **Content Review:** Client review of all placeholder content

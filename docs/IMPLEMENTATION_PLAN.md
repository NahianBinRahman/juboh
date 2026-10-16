# JUBOH Companies International — Implementation Plan & Engineering Milestones

**Target Architecture:** Next.js App Router (TypeScript Strict), Tailwind CSS with tailored shadcn/ui primitives, PostgreSQL with Prisma ORM, Auth.js session security, Zod validation, and Resend transactional email integration.

---

## Milestone Roadmap Overview

```
Phase 01: Scaffold & Design System Tokens
   ↓
Phase 02: Cinematic Hero & First Impression (Desktop + Mobile)
   ↓
Phase 03: Full Editorial Homepage (Ivory/Navy Visual Rhythm)
   ↓
Phase 04: Interior Pages & Architectural Route Templates
   ↓
Phase 05: PostgreSQL Database, Prisma Schema & Secure Admin CMS
   ↓
Phase 06: Validated Contact Workflows, Inquiries & Asset System
   ↓
Phase 07: Mobile-First Luxury Polish & Responsive Audit
   ↓
Phase 08: SEO, Performance, Accessibility & Fact-Checking QA
   ↓
Phase 09: Production Handoff, Client Checklist & Deployment Guides
```

---

## Detailed Milestone Breakdown

### Phase 01: Foundation, Tokens & Core Layout
- **Scope:** Initialize clean Next.js App Router + TypeScript codebase; configure Tailwind CSS variables mapping to Midnight Navy, Warm Ivory, Charcoal, and Muted Brass.
- **Typography:** Configure `next/font/google` for `Newsreader` (serif headings) and `DM Sans` (body).
- **Core Primitives:** Create shared layout components (`Header`, `DesktopNav`, `MobileNav`, `Footer`) and base UI components (`Button`, `Badge`, `Card`, `Separator`).
- **Dev Tooling:** Create private `/design-system` preview page for visual token verification.
- **Checkpoint:** Strict TypeScript check passes; zero lint warnings; responsive layout shell renders at 1440px and 390px.

### Phase 02: Cinematic Homepage Hero & First Fold
- **Scope:** High-impact desktop and mobile hero adhering to the reference collage's visual elegance and PDF's approved copy.
- **Components:** Transparent-to-solid sticky navbar, 85–90svh hero canvas with subtle vignette overlay, verified brand line `"Building an Exceptional Future, Together!"`, dual CTAs (`/companies` and `/projects`).
- **Mobile UX:** Hand-tuned mobile crop (4:5 focal point), accessible full-height navigation drawer, 44px touch targets, zero clipping.
- **Checkpoint:** Visual evaluation in browser at 1440×900 and 390×844; clear contrast audit.

### Phase 03: Editorial Homepage Body
- **Scope:** Build the remaining homepage sections with architectural asymmetry and visual rhythm (avoiding generic equal-height cards).
- **Sections:**
  1. *Enterprise Overview:* Ivory canvas, editorial serif statement, 65ch body text.
  2. *Operating Disciplines:* Real Estate Development (dominant visual), Capital Advisory, Government Contracting.
  3. *Selected Work:* Architectural portfolio highlight with verified/preview badge.
  4. *Executive Education Teaser:* Dignified gateway to `/executive-education`.
  5. *Leadership Feature:* Featuring `assets/leadership-portrait-unverified.jpg` with restrained editorial crop (unverified identity safeguards applied).
  6. *Foundation & Community Impact:* Warm ivory interlude highlighting civic commitment.
  7. *News / Press Row:* Typographic articles list.
  8. *Footer & Global Closing:* Restrained midnight navy finish.
- **Checkpoint:** Responsive flow verified; no horizontal overflow; reduced-motion verified.

### Phase 04: Complete Interior Page Templates
- **Scope:** Dedicated page implementations with bespoke compositions (no repetitive generic templates):
  - `/about`, `/companies`, `/real-estate`, `/advisory`, `/government-contracting`
  - `/projects` (filterable grid) and dynamic `/projects/[slug]`
  - `/leadership` and `/leadership/[slug]`
  - `/foundation` and `/executive-education`
  - `/news` and dynamic `/news/[slug]`
  - `/contact`, `/privacy`, `/terms`
- **Data Layer:** Centralized typed data adapter (`lib/content/`) allowing immediate drop-in replacement by Prisma models in Phase 05.
- **Checkpoint:** All sitemap routes return 200 OK; dynamic slugs return 404 for unknown items.

### Phase 05: Data Layer, Prisma Schema & Secure Admin CMS
- **Scope:** Setup Prisma with PostgreSQL.
- **Models:** `SiteSetting`, `BusinessArea`, `Project`, `Leader`, `Article`, `FoundationProgram`, `MediaAsset`, `Inquiry`, `AdminUser`.
- **Admin Portal (`/admin`):** Protected by Auth.js session authentication; zero public registration; password hashing with bcrypt/argon2.
- **Admin CRUD:** Shadcn-based management views for projects, leaders, news, inquiries, and media focal points.
- **Checkpoint:** Mutation endpoints secured by Zod + session checks; drafts hidden from public view; seed script runs cleanly.

### Phase 06: Contact Workflows, Image Management & Integrations
- **Scope:** Enterprise inquiry form on `/contact` with React Hook Form + client/server Zod validation.
- **Spam Defense:** Honeypot fields, rate-limiting, CSRF protection.
- **Email Service:** Resend integration (graceful fallback to database logging when unconfigured).
- **Media Pipeline:** Admin-managed focal points, Next.js image optimization, layout shift prevention.
- **Checkpoint:** Form handles empty, invalid, and valid submissions; feedback displays properly; inquiry appears in `/admin/inquiries`.

### Phase 07: Mobile-First Polish & Micro-Interactions pass
- **Scope:** Comprehensive audit across 320px, 360px, 390px, 768px, 1024px, 1440px, and 1920px.
- **Art Direction:** Refine line breaks, typography clamp curves, image crops, and hover/focus states.
- **Motion Polish:** Fine-tune 200–350ms easing curves; ensure no scroll jank.
- **Checkpoint:** Pixel-perfection check against reference collage mood; 100% WCAG AA contrast compliance.

### Phase 08: Production-Grade QA, SEO & Factual Claim Audit
- **Scope:** Deep launch-gate inspection.
- **Audits:**
  - *Factual Claim Audit:* 100% scrub of lorem ipsum, fake years, unverified metrics, or unauthorized subsidiary names.
  - *SEO:* Per-route metadata, Open Graph cards, dynamic sitemap.xml, robots.txt (noindex on `/admin`).
  - *Performance:* Core Web Vitals optimization, image preloads, zero layout shift (CLS = 0).
  - *Accessibility:* Axe accessibility scan, keyboard navigation, screen-reader landmark labels.
- **Checkpoint:** Production build (`npm run build`) completes cleanly with zero TypeScript or ESLint errors.

### Phase 09: Production Handoff, Documentation & Client Checklist
- **Scope:** Complete documentation package (`README.md`, `.env.example`, deployment guides for Vercel/Postgres and Docker VPS).
- **Handoff Artifacts:** Media licensing inventory, client content request checklist, launch readiness scorecard.

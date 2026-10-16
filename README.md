# JUBOH Companies International — Official Enterprise Web Platform & CMS

> **Official Corporate North Star:**  
> *"BUILDING AN EXCEPTIONAL FUTURE, TOGETHER!"*

A state-of-the-art enterprise web platform and private administrative CMS engineered for **JUBOH Companies International**, advancing operations across Real Estate Development, Business Strategy & Capital Advisory, Government Contracting, Strategic Investments, Executive Education, and Community Impact.

---

## 1. Architectural Highlights & Technology Stack

- **Framework:** Next.js 15.5 (App Router, Server Components & Server Actions)
- **Runtime & Language:** Node.js 22, React 19, Strict TypeScript
- **Database & Data Layer:** PostgreSQL with Supabase (`@supabase/supabase-js`), resilient local JSON fallback
- **Styling & Design System:** Vanilla Tailwind CSS with bespoke brand palette:
  - Midnight Navy (`#101D2C`)
  - Warm Ivory (`#F6F3ED`)
  - Charcoal Ink (`#252A2F`)
  - Muted Architectural Brass (`#B49360`)
- **Typography:** `Newsreader` (Editorial Serif headings) & `DM Sans` (Clean modern body)
- **Security & CMS Auth:** Private `/admin` portal guarded by signed JWT session cookies (`jose`), bcrypt password hashing, zero public registration
- **Validation & Anti-Spam:** Zod schema validation, hidden honeypot defense, and speed anomaly filtering
- **Production Build:** 100% standalone container optimization with static page generation across all 35 canonical routes

---

## 2. Directory Structure

```
├── app/
│   ├── (admin)/admin/              # Private Admin CMS (Dashboard, Projects, Leaders, Inquiries, etc.)
│   ├── (site)/                     # Public Enterprise Site (Home, About, Disciplines, Case Studies, etc.)
│   ├── globals.css                 # Design system tokens, micro-interactions, luxury scrollbar
│   ├── layout.tsx                  # Root layout with JSON-LD Organization schema & OpenGraph
│   ├── robots.ts                   # Robots.txt with admin noindex guard
│   └── sitemap.ts                  # Dynamic canonical XML sitemap generator
├── components/
│   ├── admin/                      # Admin UI (InquiriesManager, Dashboard controls)
│   ├── forms/                      # Enterprise ContactForm with Honeypot & validation
│   ├── layout/                     # Header, DesktopNav, MobileNav, Footer
│   ├── sections/                   # Editorial sections (Hero, OperatingDisciplines, SelectedWork, etc.)
│   └── ui/                         # Design system primitives (Button, Badge, Card, Separator)
├── data/
│   └── inquiries.json              # Resilient local JSON inquiry store
├── docs/                           # Governance & ground truth documentation
│   ├── BRAND_SOURCE_OF_TRUTH.md    # Verified factual brand identity from creative direction PDF
│   ├── DESIGN_SYSTEM.md            # Comprehensive design system tokens & typography rules
│   ├── IMPLEMENTATION_PLAN.md      # Detailed 9-phase execution roadmap
│   └── SITEMAP.md                  # Complete canonical URL structure
├── lib/
│   ├── auth/                       # Secure session authentication & JWT handling
│   ├── content/                    # Typed content adapter & verified baseline records
│   ├── email/                      # Transactional email dispatcher (Resend + audit logging)
│   ├── inquiries/                  # Inquiries Zod schemas, server actions, and storage
│   ├── site-config.ts              # Global enterprise brand configuration
│   └── supabase/                   # Supabase client & server adapters
├── public/
│   ├── assets/                     # Leadership portrait (unverified safeguards active)
│   └── media/                      # Curated high-resolution architectural preview imagery
├── supabase/
│   └── schema.sql                  # Turnkey PostgreSQL schema for Supabase
├── Dockerfile                      # Production multi-stage Docker build
├── docker-compose.yml              # Production container orchestration
└── package.json
```

---

## 3. Quick Start & Local Development

### Prerequisites
- Node.js 20+ (Node.js 22 LTS recommended)
- npm or pnpm

### Installation
```bash
# Clone the repository
git clone <repo-url>
cd JUBOH

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env
```

### Running Locally
```bash
# Start local development server
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the public website.

### Typecheck & Production Build Verification
```bash
# Strict TypeScript validation
npm run typecheck

# Full production build test
npm run build
```

---

## 4. Supabase Database Setup

1. Create a project at [supabase.com](https://supabase.com).
2. Open the **SQL Editor** in your Supabase Dashboard.
3. Paste and run the turnkey schema from [supabase/schema.sql](supabase/schema.sql).
4. Copy your project credentials from **Project Settings > API**:
   - `Project URL` -> `NEXT_PUBLIC_SUPABASE_URL`
   - `anon public` key -> `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `service_role` secret -> `SUPABASE_SERVICE_ROLE_KEY`
5. Paste these into your `.env` file.

> **Resilience Guarantee:** The application operates gracefully even before Supabase is connected, automatically falling back to typed verified ground truth records and local JSON storage so development and builds never fail.

---

## 5. Admin CMS Access & Initial Credentials

- **Portal URL:** `http://localhost:3000/admin/login` (or `https://your-domain.com/admin/login`)
- **Default Email:** `admin@juboh.com`
- **Default Password:** `ChangeMeInProduction2026!`

### Changing the Default Credentials
In your `.env` or production environment variables, update:
```env
ADMIN_DEFAULT_EMAIL="your-secure-email@juboh.com"
ADMIN_DEFAULT_PASSWORD="YourStrongProductionPassword123!"
ADMIN_AUTH_SECRET="your-cryptographic-random-secret"
```

---

## 6. Brand Source-of-Truth & Governance Rules

All AI agents, engineers, and content editors must comply with [docs/BRAND_SOURCE_OF_TRUTH.md](docs/BRAND_SOURCE_OF_TRUTH.md) and [AGENTS.md](AGENTS.md):
1. **Approved Company Name:** JUBOH Companies International (or JUBOH).
2. **Approved Brand Statement:** *"BUILDING AN EXCEPTIONAL FUTURE, TOGETHER!"*
3. **Leadership Portrait Guardrail:** The photograph in `assets/leadership-portrait-unverified.jpg` must **not** have a name (e.g. Jalen Uboh) or title attributed in public production until explicit written verification is provided by the client. It is labeled as *DRAFT / Verification Pending*.
4. **Zero Fabrication Policy:** No mock statistics (`$1B+`, `250+ homes`), unverified awards, or invented subsidiary corporate names.

---

## 7. Production Deployment Guides

### Option A: Vercel + Supabase (Recommended Turnkey Cloud)
1. Push this repository to GitHub or GitLab.
2. In [Vercel](https://vercel.com), click **Add New Project** and select the repository.
3. Add the environment variables from your `.env`:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `ADMIN_AUTH_SECRET`
   - `ADMIN_DEFAULT_EMAIL`
   - `ADMIN_DEFAULT_PASSWORD`
   - `NEXT_PUBLIC_APP_URL`
4. Click **Deploy**. Vercel will build and deploy the application with zero additional configuration.

### Option B: Docker / Linux VPS Deployment
1. Ensure Docker and Docker Compose are installed on your server.
2. Clone the repository and configure `.env`.
3. Start the container in detached mode:
   ```bash
   docker compose up -d --build
   ```
4. Configure an Nginx reverse proxy or Caddy with SSL pointing to `http://localhost:3000`.

---

## 8. Milestone Completion Overview

| Milestone | Description | Status |
|---|---|---|
| **Phase 00** | Governance docs, brand source-of-truth, design system tokens | ✅ Completed |
| **Phase 01** | App shell, layout components, design system preview route | ✅ Completed |
| **Phase 02** | Cinematic hero fold, transparent-to-frosted header, 4-pillar strip | ✅ Completed |
| **Phase 03** | Editorial homepage body, disciplines, leadership feature, footer | ✅ Completed |
| **Phase 04** | All interior pages, dynamic case studies, dynamic news routes | ✅ Completed |
| **Phase 05** | Supabase database schema, private admin CMS, session auth | ✅ Completed |
| **Phase 06** | Contact inquiries, Zod validation, Honeypot, admin status actions | ✅ Completed |
| **Phase 07** | Mobile-first audit (360px–1920px), luxury micro-interactions | ✅ Completed |
| **Phase 08** | SEO sitemap, robots.txt, JSON-LD, factual audit, production build | ✅ Completed |
| **Phase 09** | Production handoff package, Docker setup, comprehensive README | ✅ Completed |

---

*© 2026 JUBOH Companies International. All rights reserved.*

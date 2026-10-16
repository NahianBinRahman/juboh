# Operational Guidelines & Brand Constraints for Agents

**Project:** JUBOH Companies International Official Website & CMS  
**Workspace:** `e:/Project/JUBOH`

---

## 1. Absolute Separation of Sources

1. **Visual Reference ONLY (`references/ui-reference-collage.jpg`):**
   - The screenshot collage dictates aesthetic quality, proportion, typography sizing, palette harmony, 1px dividing rules, and editorial confidence.
   - **DO NOT** use any copy, numbers, dollar amounts, project names, service titles, or mock statistics from the collage. They are strictly non-factual design placeholders.

2. **Factual Ground Truth (`source/juboh-creative-direction.pdf` & `docs/BRAND_SOURCE_OF_TRUTH.md`):**
   - The PDF is the sole source for company identity, mission, positioning, approved brand statement, and operational areas.
   - Company Name: **JUBOH Companies International** (or **JUBOH**).
   - Approved Brand Statement: **"BUILDING AN EXCEPTIONAL FUTURE, TOGETHER!"**
   - Approved Sectors: Real Estate Development, Business Strategy and Capital Advisory, Government Contracting, Strategic Investments, Executive Education, and Community Impact/Philanthropy.

3. **Photographic Assets (`assets/leadership-portrait-unverified.jpg`):**
   - The supplied portrait is a valid high-resolution image asset.
   - **DO NOT** attribute a name (e.g. "Jalen Uboh") or title (e.g. "Chairman & CEO") to this individual in public production content until the client provides explicit written verification. Label as DRAFT/Pending Verification in internal schemas.

---

## 2. Hard Anti-Patterns & Prohibited Code Behaviors

- **No Fabricated Claims:** Never inject fake statistics (`$1B+`, `250+ homes`, `20+ markets`), unverified awards, invented government contracts, or fake client testimonials.
- **No Conceptual AI Jargon:** Avoid *generational architecture, wealth deployment ecosystem, velocity multipliers, blueprint pillars, turnkey empire, bulletproof, guaranteed outcomes*.
- **No Generic SaaS / Startup Visuals:** Avoid generic 4-card grids, rounded pill buttons, neon gradients, glassmorphism, animated numeric counters, or marketing funnels.
- **No Commercial Funnel Mixing:** Executive Education, workshops, and courses must be isolated in `/executive-education` and must not dominate the corporate enterprise homepage.
- **No Dead Links or `#` Placeholders:** Every navigation link, button, and CTA must route to a legitimate, functioning Next.js page.
- **No Fake Interactive Success:** Forms must genuinely validate client/server side and communicate with real endpoints; never display optimistic false delivery messages on failed requests.

---

## 3. Technical Standards & Code Quality

- **Framework:** Next.js App Router (latest stable), strict TypeScript.
- **Styling:** Tailwind CSS with deeply customized shadcn/ui primitives following the design system tokens in `docs/DESIGN_SYSTEM.md`.
- **Database:** PostgreSQL with Prisma ORM.
- **Security:** Private `/admin` protected with secure session authentication (Auth.js); zero public user registration. Sensitive keys restricted to environment variables (`.env`).
- **Responsive Standard:** Art-directed mobile layouts (360px, 390px, 430px) as well as expansive desktop layouts (1440px, 1920px). Mobile is not merely a shrunk desktop.
- **Workflow Integrity:** Check existing files before modifying. Run typecheck (`tsc --noEmit`) and lint checks to ensure zero regressions before completing tasks.

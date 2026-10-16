# JUBOH Companies International — Design System & Visual Specification

**Design North Star:** *Established. Elegant. Substantial.* (PDF p. 1)  
**Aesthetic Reference:** `references/ui-reference-collage.jpg`  
**Guiding Benchmark:** Hines, Related Companies, bespoke architectural monographs, traditional private investment institutions.

---

## 1. Color Palette & Semantic Tokens

The visual palette mirrors the reference collage: an authoritative deep midnight navy, rich warm ivory, grounding charcoal, and a restrained, non-metallic muted brass accent.

| Token Name | Hex Code | HSL Value | Semantic Role & Application |
| :--- | :--- | :--- | :--- |
| **Midnight Navy** | `#101D2C` | `213° 47% 12%` | Primary corporate ground, dark hero backgrounds, dark section interludes, formal typography. |
| **Warm Ivory** | `#F6F3ED` | `43° 27% 95%` | Editorial light canvas, content reading backgrounds, card accents. |
| **Charcoal Ink** | `#252A2F` | `210° 12% 16%` | Deep body text on light backgrounds, secondary dark surface, borders. |
| **Muted Brass** | `#B49360` | `37° 35% 54%` | High-value accents, understated buttons, active indicators, subtle category kickers. Never shiny or neon gold. |
| **Dark Brass** | `#917445` | `37° 35% 42%` | Hover states on brass buttons, high-contrast dark accents. |
| **Slate Steel** | `#314C63` | `208° 34% 29%` | Secondary corporate blue, muted architectural badges, subdued borders. |
| **Hairline Rule** | `#DFD9CE` | `38° 22% 84%` | 1px horizontal and vertical dividing rules on ivory canvases. |
| **Dark Hairline** | `rgba(255,255,255,0.12)` | — | 1px dividing rules on midnight navy surfaces. |
| **Pure White** | `#FFFFFF` | `0° 0% 100%` | Card backgrounds on ivory, high-contrast text on navy. |

---

## 2. Typography Hierarchy

### 2.1 Font Pairing
- **Editorial Headings:** `Newsreader` (or `Playfair Display` / `Cormorant Garamond` serif) — literary, architectural, dignified character.
- **Corporate Body & UI:** `DM Sans` (or `Inter`) — crisp, modern sans-serif with high legibility across small sizes.

### 2.2 Typographic Scale & Measures

| Style Role | Font Family | Size (Desktop) | Size (Mobile) | Line Height | Tracking | Weight |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Display H1** | Serif | `3.75rem (60px)` | `2.5rem (40px)` | `1.08` | `-0.02em` | Medium / 500 |
| **Section H2** | Serif | `2.75rem (44px)` | `2.0rem (32px)` | `1.15` | `-0.015em` | Regular / 400 |
| **Subheading H3** | Serif | `1.875rem (30px)` | `1.5rem (24px)` | `1.25` | `-0.01em` | Regular / 400 |
| **Kicker / Eyebrow** | Sans | `0.75rem (12px)` | `0.6875rem (11px)`| `1.4` | `+0.12em` | SemiBold / 600, Uppercase |
| **Lead Paragraph** | Sans | `1.25rem (20px)` | `1.125rem (18px)`| `1.6` | `normal` | Light / 300 |
| **Body Standard** | Sans | `1.0rem (16px)` | `1.0rem (16px)` | `1.65` | `normal` | Regular / 400 |
| **Caption / Meta** | Sans | `0.8125rem (13px)`| `0.75rem (12px)` | `1.5` | `+0.02em` | Regular / 400 |

*Maximum reading line measure:* Strict `65ch` to `72ch` on body copy to preserve editorial comfort.

---

## 3. Layout Grid & Section Rhythm

- **Container Max-Width:** `1440px` (standard desktop max `1280px` content column with generous margins).
- **Responsive Gutters:**
  - Mobile (<640px): `20px`
  - Tablet (640–1024px): `32px` to `48px`
  - Desktop (1024px+): `64px` to `88px`
- **12-Column Desktop Architecture:**
  - Asymmetric 7/5 or 8/4 splits for editorial storytelling.
  - Large full-bleed image moments alternating with ivory content blocks.
- **Section Rhythm (Padding Y):**
  - Desktop: `100px` to `140px` top/bottom padding between major sections.
  - Mobile: `60px` to `80px` top/bottom padding.
  - 1px hairline rules punctuate transitions rather than drop shadows.

---

## 4. UI Components & Button States

### 4.1 Buttons
- **Primary Action (Brass Filled):**
  - Background: `#B49360`, Text: `#FFFFFF`, Border-radius: `2px` (subtly softened, never pill-shaped).
  - Hover: Background `#917445`, transform `translateY(-1px)`.
  - Focus: Outline `2px solid #B49360`, offset `2px`.
- **Secondary Action (Ghost / Dark Border):**
  - Transparent ground, 1px border `#101D2C` (on light) or `rgba(255,255,255,0.3)` (on dark), Text matches surface.
  - Hover: Inverted solid fill with smooth 200ms transition.
- **Editorial Text Link:**
  - Uppercase `12px` sans-serif with trailing `→` arrow, subtle bottom border with hover slide animation.

### 4.2 Cards & Modules
- Avoid heavy drop shadows or floating 3D cards.
- Surfaces use crisp 1px hairline borders (`#DFD9CE` on light or `rgba(255,255,255,0.08)` on dark).
- Generous internal padding: `32px` to `48px` on desktop; `24px` on mobile.

---

## 5. Photographic Art Direction & Image Ratios

- **Hero Aspect Ratio:** `16:9` desktop, art-directed crop `4:5` on mobile with focal center control.
- **Editorial Splits:** `5:4` or `4:3` architectural crops.
- **Leadership Portraits:** Strict `4:5` vertical portrait crop against deep studio navy/charcoal backdrop (matching supplied portrait asset).
- **Tonal Grading:** Natural daylight, dusk warmth, authentic architectural textures, deep blues, and crisp architectural lines. Zero neon flares or synthetic AI plastic finishes.

---

## 6. Motion & Micro-Interactions

- **Duration & Easing:** `200ms` to `350ms` using `cubic-bezier(0.16, 1, 0.3, 1)` (smooth deceleration).
- **Intersection Reveals:** Restrained `12px` upward translation with soft opacity fade on scroll entry.
- **Image Hover:** Micro scale `1.02` with slight contrast enhancement, no jarring motion.
- **Reduced Motion:** Fully respects `prefers-reduced-motion: reduce` by immediately presenting static rendered states without transitions.

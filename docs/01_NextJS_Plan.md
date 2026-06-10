# Plan: Archive Old Sites + Build ICF Next.js Website

## Context

The Inclusive Canada Foundation website needs to be rebuilt from scratch as a credible, grant-funder-ready Next.js site. The brand spec is fully documented in `docs/BRANDING.md` and the implementation blueprint in `docs/DESIGN_PLAN.md`. The existing live sites (inclusivecanada.com and lastmanstandsdei.com) hold real content that must be preserved — headings, program names, real stats, contact info. Before touching any code, we archive those pages at both desktop and mobile to capture that content.

The project directory (`/Users/hpatel/Data/Work/Profile/Finance_Courses/ICF/website`) currently contains only docs and brand assets — no Next.js app exists yet.

---

## Phase 1 — Archive Old Sites

### 1.1 Create archive Puppeteer script
Write `archive-old-sites.mjs` in the project root. It must:
- Use `puppeteer` (installed globally at `~/.nvm/versions/node/v18.18.0/lib/node_modules/puppeteer`)
- Create `./reference-screenshots/old-site/` directory
- Loop over 10 URLs × 2 viewports (1440×900 desktop, 375×812 mobile)
- Save with descriptive names: `old-home-desktop.png`, `old-home-mobile.png`, `old-lms-home-desktop.png`, etc.
- Full-page screenshots (`fullPage: true`)
- 2s `networkidle0` wait after navigation for JS-rendered content

| URL | Base name |
|-----|-----------|
| https://inclusivecanada.com | old-home |
| https://inclusivecanada.com/about | old-about |
| https://inclusivecanada.com/programs | old-programs |
| https://inclusivecanada.com/contact | old-contact |
| https://inclusivecanada.com/sports | old-sports |
| https://lastmanstandsdei.com | old-lms-home |
| https://lastmanstandsdei.com/newcomer-program | old-lms-newcomer |
| https://lastmanstandsdei.com/corporate-league | old-lms-corporate |
| https://lastmanstandsdei.com/university-league | old-lms-university |
| https://lastmanstandsdei.com/junior-program | old-lms-junior |

### 1.2 Run the archive script
```bash
node archive-old-sites.mjs
```

### 1.3 Read every screenshot
Use the Read tool on each PNG in `reference-screenshots/old-site/`. For each page note:
- **Real content**: actual headings, copy, program names, stats, contact details
- **Placeholder**: Lorem ipsum, "Your Heading", fake numbers, `yourhandler` social handles

Consolidate into a content inventory before writing a single JSX component.

---

## Phase 2 — Bootstrap Next.js Project

### 2.1 Scaffold
Run in `/Users/hpatel/Data/Work/Profile/Finance_Courses/ICF/website`:
```bash
npx create-next-app@latest . --typescript --tailwind --app --no-src-dir --import-alias "@/*" --yes
```
Existing files (`CLAUDE.md`, `docs/`, `brand_assets/`, `.claude/`) will not be overwritten.

### 2.2 Tailwind config (`tailwind.config.ts`)
Extend theme with brand colors and fonts per DESIGN_PLAN.md:
```ts
colors: { brand: { red: '#E30613', green: '#128341', teal: '#0097A7', orange: '#FF8C00', gray: '#6B7280', dark: '#111827' } }
fontFamily: { display: ['Poppins', 'sans-serif'], body: ['Inter', 'sans-serif'] }
```

### 2.3 Global CSS (`app/globals.css`)
Add all `--color-*` and `--pillar-*` CSS custom properties from BRANDING.md.

### 2.4 Root layout (`app/layout.tsx`)
- Import Poppins (700, 800) and Inter (400, 500) via `next/font/google`
- Set `<html lang="en">` with font variables on `<body>`
- Include `<Navbar />` and `<Footer />` wrapper

### 2.5 Data layer (`/lib/`)
- `lib/pillars.ts` — pillar array: `{ name, color, hex, icon (Lucide name), description, path }`
- `lib/stats.ts` — impact numbers extracted from old-site archive (or marked TODO if not real)

---

## Phase 3 — Shared Components

Build in this order (each gets a screenshot after completion):

| File | Description |
|------|-------------|
| `components/layout/Navbar.tsx` | White bg, logo (logo-horizontal.svg), nav links, red "Get Involved" CTA; shadow-sm on scroll (`'use client'`) |
| `components/layout/Footer.tsx` | Dark bg (#111827), logo-compact, links, contact info, no fake social handles |
| `components/ui/Button.tsx` | `variant="primary"` (red) + `variant="secondary"` (green outline), `rounded-full` |
| `components/ui/SectionLabel.tsx` | Eyebrow text — `text-sm uppercase tracking-widest font-medium` |
| `components/ui/PillarCard.tsx` | White card, 4px top border in pillar color, Lucide icon, "Learn More →" link |
| `components/ui/StatCounter.tsx` | Framer Motion count-up on scroll-enter |

---

## Phase 4 — Home Page (`app/page.tsx`)

Sections in order per DESIGN_PLAN.md:

1. **Hero** — White bg, two-column (text + large logo mark), headline "Empowering Communities / Through Inclusion.", two CTAs. Logo uses rotate-in Framer Motion animation.
2. **Impact Stats Bar** — Full-width `bg-[#111827]`, 4 `StatCounter` components (fill real numbers from archive or mark clearly as TODO).
3. **Four Pillars** — "What We Do" eyebrow, 4-column grid of `PillarCard`, stagger reveal.
4. **Mission Statement** — `bg-[#F3F4F6]`, pull quote, mission paragraph, "About Us →" link.
5. **Featured Program** — Split layout, green accent, cricket/Last Man Stands origin story from old-site content.
6. **Partners Strip** — Logo grid with "Supported By" heading. Use `placehold.co` for partner logos not yet available.
7. **Newsletter CTA** — Full-bleed `bg-[#128341]`, white text, email input (static for now, wire to Resend later).

After each section: screenshot localhost:3000, read PNG, fix visible issues, re-screenshot.

---

## Verification

After Home page is built and passes visual checks:
1. Start dev server: `npm run dev` (background)
2. Desktop screenshot: `node screenshot.mjs http://localhost:3000 home-desktop` at 1440px
3. Mobile screenshot: `node screenshot.mjs http://localhost:3000 home-mobile` at 375px
4. Compare against DESIGN_PLAN.md spec line by line:
   - Hero headline in Poppins 800 tight tracking ✓
   - Pillar cards: correct colors, top border, icons ✓
   - No hardcoded hex values in JSX ✓
   - No Lorem ipsum or placeholder stats ✓
   - Red primary button, green secondary button ✓
5. Fix any mismatches, re-screenshot until clean
6. Run `npx tsc --noEmit` to confirm no TypeScript errors

---

## Critical Files

| File | Role |
|------|------|
| `docs/BRANDING.md` | Source of truth for all colors, fonts, components |
| `docs/DESIGN_PLAN.md` | Page-by-page section spec |
| `lib/pillars.ts` | Single source for all pillar data |
| `lib/stats.ts` | Impact numbers — populate from archive, never invent |
| `app/globals.css` | CSS custom property definitions |
| `tailwind.config.ts` | Brand color and font extensions |

## Dependencies to install (beyond create-next-app defaults)
- `framer-motion` — animations
- `lucide-react` — pillar icons
- `react-hook-form` — contact form (Phase 5+)

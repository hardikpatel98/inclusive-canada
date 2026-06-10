# Inclusive Canada Foundation — Design Plan & Claude Code Brief

> **Stack:** Next.js 14 (App Router) · Tailwind CSS · TypeScript · Vercel
> **Always read `BRANDING.md` before touching any component, color, or copy.**

---

## Project Goal

Rebuild inclusivecanada.com as a fast, credible, grant-funder-ready nonprofit website. The primary audience is **two groups with different needs:**
1. **Grant funders / government bodies** — need to see mission clarity, impact evidence, professional presentation
2. **Community members** — need to quickly find their program, register, and feel welcomed

Every page must serve both audiences without feeling corporate or generic.

---

## Tech Stack Decisions

```
Framework:        Next.js 14 App Router (SSG/ISR for all public pages)
Styling:          Tailwind CSS + CSS custom properties from BRANDING.md
Fonts:            next/font/google — Poppins (display) + Inter (body)
Icons:            lucide-react
Animations:       Framer Motion (scroll reveals, pillar card hover, counter animation)
Forms:            React Hook Form + simple mailto or Resend for contact
Images:           next/image with WebP optimization
Deployment:       Vercel (free tier, auto-deploy from main branch)
Analytics:        Vercel Analytics (free, privacy-friendly)
```

---

## Aesthetic Direction

**Mood:** Confident civic nonprofit — not a charity asking for pity, a foundation demonstrating impact.

**Signature element:** The four-pillar color system runs as a continuous thread through the entire site. Each pillar has its own color, and that color appears consistently on that pillar's card, section, page header, and URL. Visitors subconsciously learn the system as they scroll — Sports is always green, Health is always teal, etc. This is uncommon for nonprofit sites and makes ICF memorable.

**Layout approach:** Clean white body with a single strong hero, alternating white / light-gray sections, and one full-bleed colored section per page for visual punch. No busy backgrounds. The logo's energy comes from its colors — the site gives it room.

**Typography risk:** Poppins at 800 weight for display, set tight (`tracking-tight leading-none`) at large size — gives the hero a boldness that reads as institutional confidence, not approachability-theater.

---

## File Structure

```
/app
  layout.tsx              # Fonts, metadata, nav, footer
  page.tsx                # Home
  /about
    page.tsx
  /programs
    page.tsx              # Programs overview (4 pillar cards)
    /sports/page.tsx
    /education/page.tsx
    /health/page.tsx
    /culture/page.tsx
  /impact
    page.tsx
  /partners
    page.tsx
  /contact
    page.tsx

/components
  /layout
    Navbar.tsx
    Footer.tsx
  /ui
    Button.tsx            # primary + secondary variants
    PillarCard.tsx        # reusable across home + programs page
    SectionLabel.tsx      # eyebrow text component
    StatCounter.tsx       # animated number counter
    ProgramBadge.tsx      # colored pill badge
  /sections
    Hero.tsx
    PillarsOverview.tsx
    ImpactStats.tsx
    MissionStatement.tsx
    Testimonials.tsx
    NewsletterCTA.tsx
    PartnersGrid.tsx

/lib
  pillars.ts              # pillar data: name, color, icon, description, path
  stats.ts                # impact numbers (update here, reflects everywhere)

/public
  /logo
    logo-icon.svg
    logo-horizontal.svg
    logo-compact.svg
  /images
    (program photos, team photos — real, not stock)

BRANDING.md               # ← always read this first
CLAUDE.md                 # project instructions for Claude Code
```

---

## CLAUDE.md (copy this into your project root)

```markdown
# Claude Code Instructions — Inclusive Canada Foundation

## Before every task
1. Read `BRANDING.md` fully before writing any component, choosing any color, or writing any copy.
2. Never introduce a color, font, or tone not defined in BRANDING.md.
3. Never use placeholder text. If real content isn't available, ask before proceeding.

## Code standards
- TypeScript strict mode
- Tailwind only for styling — no inline styles, no separate CSS files except globals.css for CSS vars
- All colors via CSS custom properties (--color-green etc.), never hardcoded hex in JSX
- next/image for all images (width, height, alt required)
- next/font for all fonts
- Mobile-first responsive: build for mobile, layer up with sm: md: lg: prefixes

## Component rules
- Every reusable component gets its own file in /components
- Pillar data lives in /lib/pillars.ts — never hardcode pillar names/colors in JSX
- All CTA buttons use the Button component with variant="primary" or variant="secondary"

## After every significant component
- Take a Puppeteer screenshot and review before moving on
- Check mobile view (375px) and desktop (1280px)
- Verify no hardcoded colors snuck in
```

---

## Page-by-Page Spec

### `/` — Home

**Sections in order:**

1. **Hero**
   - Full-viewport, white background
   - Headline (2 lines, Poppins 800): `"Empowering Communities` / `Through Inclusion."`
   - Subhead (Inter): "Inclusive Canada Foundation builds belonging through Sports, Education, Health, and Culture — for every newcomer, family, and community."
   - Two CTAs: `Get Involved` (red, primary) + `See Our Programs` (green, secondary)
   - Right side: the logo mark (large, ~400px) with a subtle rotate-in animation on load
   - No hero image — the logo IS the hero visual

2. **Impact Stats Bar**
   - Full-width, dark (`#111827`) background
   - 4 animated counters: Players · Matches · Teams · Communities
   - Numbers animate up on scroll-enter (use Framer Motion)
   - **Note:** Use real numbers once available; do not ship with placeholder values

3. **Four Pillars**
   - Section label: "What We Do"
   - Heading: "Four pillars, one mission."
   - 4-column grid (2x2 on mobile), each card:
     - Top border in pillar color (4px)
     - Lucide icon in pillar color
     - Pillar name in pillar color
     - 2-sentence description
     - "Learn More →" link in pillar color
   - Hover: card lifts (`shadow-xl`), subtle scale (1.02)

4. **Mission Statement**
   - Light gray background (`#F3F4F6`)
   - Large pull quote: "We don't just open doors. We build the rooms."
   - Brief mission paragraph
   - `About Us →` link

5. **Featured Program — Sports / Cricket**
   - Split layout: text left, image right (real cricket photo)
   - Green accent section label: "Featured Program"
   - Explain the cricket / Last Man Stands origin story — this is the hook for funders
   - CTA: "Join a Cricket League"

6. **Partners Strip**
   - Logo grid of partner organizations
   - Heading: "Supported By"

7. **Newsletter CTA**
   - Full-bleed green (`#128341`) section
   - White text, email input, "Stay Connected" button
   - Note: wire up to Resend or Mailchimp

---

### `/about` — About Us

Sections: Mission & Vision · Founding Story (cricket origin) · Team · Values (transparency, advocacy, research, empowerment)

---

### `/programs` — Programs Overview

Grid of 4 pillar cards (larger than home version) with full program descriptions. Each links to its dedicated subpage.

---

### `/programs/sports` — Sports

- Cricket focus: leagues (Newcomer, Corporate, University, Junior, Indoor, Tape-Ball)
- Registration CTA (link to Google Form currently)
- Schedule / upcoming matches section
- Green color treatment throughout

---

### `/impact` — Impact

- Real stats (update in `/lib/stats.ts`)
- Testimonials (real quotes, real names, real photos)
- Grant outcomes / program results
- This page is specifically for funders — keep tone evidence-based

---

### `/contact` — Contact

- Form: Name, Email, Subject (dropdown: General / Partnership / Grant Inquiry / Program Registration), Message
- Address, phone, email, hours
- Map embed (Surrey, BC)

---

## Animations (Framer Motion)

| Element | Animation |
|---|---|
| Hero logo | `rotateY: 0` from `rotateY: -15` + fade, 0.8s ease-out on load |
| Pillar cards | Stagger reveal on scroll (0.1s delay each) |
| Impact counters | Count up from 0 on scroll-enter |
| Nav | `shadow-sm` appears after 60px scroll |
| Page transitions | Fade in (`opacity: 0→1`, 0.3s) on route change |

Keep motion subtle — this is a civic organization, not a startup. Reduced motion media query must be respected (`@media (prefers-reduced-motion: reduce)`).

---

## Tailwind Config Additions

Add to `tailwind.config.ts`:

```ts
theme: {
  extend: {
    colors: {
      brand: {
        red:    '#E30613',
        green:  '#128341',
        teal:   '#0097A7',
        orange: '#FF8C00',
        gray:   '#6B7280',
        dark:   '#111827',
      }
    },
    fontFamily: {
      display: ['Poppins', 'sans-serif'],
      body:    ['Inter', 'sans-serif'],
    }
  }
}
```

---

## Content TODO (fill before launch)

- [ ] Real impact numbers (players, matches, teams, communities)
- [ ] Team bios and photos
- [ ] Partner logos (with permission)
- [ ] Real testimonials (name, photo, role)
- [ ] Program-specific photos (cricket, events)
- [ ] Social media handles (replace yourhandler)
- [ ] Privacy Policy page
- [ ] Google Analytics or Vercel Analytics setup
- [ ] Contact form backend (Resend recommended — free tier, simple)

---

## Launch Checklist

- [ ] All pages mobile-responsive (375px → 1440px)
- [ ] No Lorem ipsum or placeholder content
- [ ] All images have alt text
- [ ] Favicon set (logo-icon.svg)
- [ ] OG image for social sharing (1200×630)
- [ ] robots.txt and sitemap.xml generated
- [ ] Vercel domain connected to inclusivecanada.com
- [ ] Core Web Vitals: LCP < 2.5s, CLS < 0.1
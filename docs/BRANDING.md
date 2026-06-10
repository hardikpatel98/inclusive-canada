# Inclusive Canada Foundation — Brand Specification

> **Always reference this file for every component, page, and style decision.**
> Never introduce colors, fonts, or tone not defined here without explicit client approval.

---

## Identity

| Field | Value |
|---|---|
| **Organization Name** | Inclusive Canada Foundation |
| **Short Name** | Inclusive Canada |
| **Tagline** | Empowering Communities Through Inclusion. |
| **Domain** | inclusivecanada.com |
| **Location** | Surrey, BC, Canada |
| **Contact** | +1-778-863-8693 · help@inclusivecanada.com |
| **Hours** | Monday–Friday, 9 AM–5 PM PT |

---

## Color Palette

Use CSS custom properties defined in `globals.css`. Never hardcode hex values inline.

```css
:root {
  /* Primary Brand */
  --color-red:        #E30613;   /* Finance Red — CTAs, urgency, Education pillar */
  --color-green:      #128341;   /* Inclusive Green — primary brand, Sports pillar */
  --color-teal:       #0097A7;   /* Health Teal — Health pillar, secondary accents */
  --color-orange:     #FF8C00;   /* Culture Orange — Culture pillar, warm accents */

  /* Neutrals */
  --color-gray:       #6B7280;   /* Finance Gray — body text, captions, borders */
  --color-gray-light: #F3F4F6;   /* Backgrounds, cards, section fills */
  --color-white:      #FFFFFF;
  --color-dark:       #111827;   /* Primary headings */

  /* Pillar Map (for programmatic use) */
  --pillar-sports:    var(--color-green);
  --pillar-education: var(--color-red);
  --pillar-health:    var(--color-teal);
  --pillar-culture:   var(--color-orange);
}
```

### Usage Rules

- **Green (`#128341`)** — primary brand color; nav logo accent, primary buttons, active states
- **Red (`#E30613`)** — primary CTA buttons ("Get Involved", "Register"), Education pillar
- **Teal (`#0097A7`)** — secondary actions, Health pillar, links on dark backgrounds
- **Orange (`#FF8C00`)** — Culture pillar, highlight tags, warm section accents
- **Gray (`#6B7280`)** — body copy, secondary labels, footer text
- **Dark (`#111827`)** — all headings, nav text
- **White** — page backgrounds, card surfaces
- **Light Gray (`#F3F4F6`)** — alternating section backgrounds, card fills

---

## Typography

Use Google Fonts. Import in `layout.tsx` via `next/font/google`.

```ts
// Fonts
Display:  "Poppins"       — weights 700, 800  (headings, hero, pillar titles)
Body:     "Inter"         — weights 400, 500  (paragraphs, nav, labels)
Accent:   "Poppins"       — weight 600, italic (tagline, pull quotes)
```

### Type Scale (Tailwind classes)

| Role | Class | Notes |
|---|---|---|
| Hero Headline | `text-5xl lg:text-7xl font-extrabold` | Poppins 800 |
| Section Heading | `text-3xl lg:text-4xl font-bold` | Poppins 700 |
| Subheading | `text-xl font-semibold` | Poppins 600 |
| Body | `text-base font-normal leading-relaxed` | Inter 400 |
| Caption / Label | `text-sm font-medium tracking-wide uppercase` | Inter 500 |
| Tagline | `text-lg italic font-semibold` | Poppins 600 italic |

### Typography Rules
- Headings: `color-dark` (`#111827`) on light backgrounds; `white` on colored/dark backgrounds
- Body text: `color-gray` (`#6B7280`) for secondary, `color-dark` for primary reading copy
- Pillar section headings inherit their pillar color
- Never use more than 2 font families on the same page

---

## Four Pillars

Each pillar has a fixed color, icon (Lucide React), and routing path.

| Pillar | Color Variable | Hex | Icon (Lucide) | Path |
|---|---|---|---|---|
| Sports | `--pillar-sports` | `#128341` | `Trophy` | `/programs/sports` |
| Education | `--pillar-education` | `#E30613` | `BookOpen` | `/programs/education` |
| Health | `--pillar-health` | `#0097A7` | `HeartPulse` | `/programs/health` |
| Culture | `--pillar-culture` | `#FF8C00` | `Music` | `/programs/culture` |

---

## Logo

Logo files live in `/public/logo/`. Always use the correct lockup for context.

| Variant | File | Use Case |
|---|---|---|
| Icon Only | `logo-icon.svg` | Favicon, mobile nav collapsed, small badges |
| Horizontal | `logo-horizontal.svg` | Desktop nav header, email header |
| Compact Horizontal | `logo-compact.svg` | Mobile nav, dark backgrounds, footer |

### Logo Rules
- **Minimum clear space:** equal to the height of the "I" in "Inclusive" on all sides
- **Never** recolor, stretch, rotate, or add drop shadows to the logo
- **Never** place the logo on a busy photographic background without a white/dark overlay
- On dark backgrounds, use the compact lockup with white wordmark variant if available

---

## Logo Description (for SVG recreation if needed)

The mark is a circular arrangement of 4 maple-leaf segments, each in a pillar color, with a white maple leaf silhouette at center. Each segment contains a white icon:
- **Green (top-left):** open book → Education... *(note: in the final brand, green = Sports with cricket ball lines)*
- **Red (top-right):** cricket ball seam lines → Sports
- **Teal (bottom-left):** heart with pulse line → Health
- **Orange (bottom-right):** flowing lines → Culture

Four colored circles (people figures) sit at compass points outside the ring.

---

## Voice & Tone

| Context | Tone |
|---|---|
| Hero / Headlines | Bold, direct, inclusive — "Play. Learn. Thrive. Together." |
| Program descriptions | Warm, specific, action-oriented — describe real outcomes |
| CTAs | Active verbs — "Get Involved", "Join a Program", "See Our Impact" |
| Grant/funder-facing | Professional, evidence-based, mission-driven |
| Error / empty states | Helpful, never apologetic |

### Language Rules
- Avoid jargon: say "newcomers" not "EDGs" in public copy
- Sentence case for all UI labels and buttons (not ALL CAPS or Title Case buttons)
- Oxford comma always
- Canada/Canadian spelling: "organization" not "organisation" (ICF uses Canadian English)
- Real numbers only — never publish placeholder stats ("0+", "1+")

---

## Spacing & Layout

Based on Tailwind defaults. Consistent section rhythm matters for grant-funder credibility.

```
Section vertical padding:   py-16 lg:py-24
Container max-width:        max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
Card padding:               p-6 lg:p-8
Border radius:              rounded-2xl (cards), rounded-full (pills/badges)
Shadow:                     shadow-md (cards), shadow-lg (modals/dropdowns)
```

---

## Component Conventions

- **Primary Button:** `bg-[#E30613] text-white rounded-full px-6 py-3 font-semibold hover:bg-red-700 transition`
- **Secondary Button:** `border-2 border-[#128341] text-[#128341] rounded-full px-6 py-3 font-semibold hover:bg-green-50 transition`
- **Pillar Card:** white card, `rounded-2xl`, top border `4px solid var(--pillar-color)`, icon in pillar color
- **Section label (eyebrow):** `text-sm font-medium uppercase tracking-widest` in pillar or brand color
- **Nav:** white background, `shadow-sm` on scroll, green logo accent, red "Get Involved" CTA button

---

## Sitemap

```
/                       Home
/about                  About Us (mission, team, founding story)
/programs               Programs Overview (4 pillars)
/programs/sports        Sports — Cricket focus, leagues
/programs/education     Education — workshops, training
/programs/health        Health — youth mental health programs
/programs/culture       Culture — community & cultural programs
/impact                 Impact (stats, stories, grant outcomes)
/partners               Partners & Funders
/contact                Contact
```

---

## Do Not

- ❌ Use stock-photo hero images of generic "diverse hands" or "business handshakes"
- ❌ Use placeholder content, Lorem ipsum, or "Your Heading" in production
- ❌ Use social handles that aren't live (no `yourhandler`)
- ❌ Mix pillar colors arbitrarily — each color belongs to its pillar
- ❌ Use gradients between brand colors (the logo segments are flat, not gradient)
- ❌ Add decorative numbered markers (01/02/03) unless the content is a true sequence
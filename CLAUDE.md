# CLAUDE.md — Frontend Website Rules

## Always Do First
- **Invoke the `frontend-design` skill** before writing any frontend code, every session, no exceptions.

## Reference Images
- If a reference image is provided: match layout, spacing, typography, and color exactly. Swap in placeholder content (images via `https://placehold.co/`, generic copy). Do not improve or add to the design.
- If no reference image: design from scratch with high craft (see guardrails below).
- Screenshot your output, compare against reference, fix mismatches, re-screenshot. Do at least 2 comparison rounds. Stop only when no visible differences remain or user says so.

## Local Server
- **Always serve on localhost** — never screenshot a `file:///` URL.
- Start the dev server with `npm run dev` — Next.js serves at `http://localhost:3000` by default.
- Start it in the background before taking any screenshots.
- If the server is already running, do not start a second instance.
- For SSR pages, wait for the server to finish compiling before screenshotting (watch for "Ready" in output).

## Screenshot Workflow
- Puppeteer is installed globally; Chrome cache is managed automatically on macOS.
- **Always screenshot from localhost:** `node screenshot.mjs http://localhost:3000`
- Screenshots are saved automatically to `./temporary screenshots/screenshot-N.png` (auto-incremented, never overwritten).
- Optional label suffix: `node screenshot.mjs http://localhost:3000 label` → saves as `screenshot-N-label.png`
- `screenshot.mjs` lives in the project root. Use it as-is.
- After screenshotting, read the PNG from `temporary screenshots/` with the Read tool — Claude can see and analyze the image directly.
- When comparing, be specific: "heading is 32px but reference shows ~24px", "card gap is 16px but should be 24px"
- Check: spacing/padding, font size/weight/line-height, colors (exact hex), alignment, border-radius, shadows, image sizing

## Output Defaults
- Do not use emdashes anywhere in the content.
- **Framework:** Next.js (App Router) with TypeScript unless user says otherwise
- **Styling:** Tailwind CSS — installed as a package (`tailwindcss`), configured via `tailwind.config.ts`. Never use CDN Tailwind.
- **Components:** React Server Components (RSC) by default. Use `'use client'` only when interactivity requires it (event handlers, hooks, browser APIs).
- **File conventions:** Pages in `app/` directory. Shared UI in `components/`. One component per file, named exports.
- **Images:** Use Next.js `<Image>` from `next/image` for all images. Placeholder: `https://placehold.co/WIDTHxHEIGHT`.
- **Fonts:** Use `next/font` (e.g. `next/font/google`) — never load fonts via `<link>` tags.
- **No inline styles** — use Tailwind utility classes. Custom values go in `tailwind.config.ts` theme extension.
- Mobile-first responsive

## Brand Assets
- Always check the `brand_assets/` folder before designing.
- **Also read `BRANDING.md` in the project root before every session** — it defines all colors, fonts, pillar system, voice, and component conventions for this project.
- Never invent brand colors — all values are in BRANDING.md.

## Content Migration
- If asked to rebuild an existing page, use Puppeteer to visit the live URL first.
- Extract real text content only — ignore Lorem ipsum, placeholder stats, and "Your Heading" text.
- Rebuild using BRANDING.md design system, not the visual style of the source page.

## Anti-Generic Guardrails
- **Colors:** Never use default Tailwind palette (indigo-500, blue-600, etc.). Pick a custom brand color and derive from it.
- **Shadows:** Never use flat `shadow-md`. Use layered, color-tinted shadows with low opacity.
- **Typography:** Never use the same font for headings and body. Pair a display/serif with a clean sans. Apply tight tracking (`-0.03em`) on large headings, generous line-height (`1.7`) on body.
- **Gradients:** Layer multiple radial gradients. Add grain/texture via SVG noise filter for depth.
- **Animations:** Only animate `transform` and `opacity`. Never `transition-all`. Use spring-style easing.
- **Interactive states:** Every clickable element needs hover, focus-visible, and active states. No exceptions.
- **Images:** Add a gradient overlay (`bg-gradient-to-t from-black/60`) and a color treatment layer with `mix-blend-multiply`.
- **Spacing:** Use intentional, consistent spacing tokens — not random Tailwind steps.
- **Depth:** Surfaces should have a layering system (base → elevated → floating), not all sit at the same z-plane.

## Hard Rules
- Do not add sections, features, or content not in the reference
- Do not "improve" a reference design — match it
- Do not stop after one screenshot pass
- Do not use `transition-all`
- Do not use default Tailwind blue/indigo as primary color

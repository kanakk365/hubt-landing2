# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server at localhost:3000
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## Stack

- **Next.js 16** with App Router and React 19
- **TypeScript 5**: all imports use the `@/*` path alias (maps to `src/*`)
- **Tailwind CSS v4** with the PostCSS plugin. Design tokens (colours, type scale, utilities such as `panel`, `edge-lit`, `text-signal`) live in `src/app/globals.css` under `@theme`; `tailwind.config.ts` is not loaded by v4
- **Framer Motion** for animation, **Lucide React** for icons
- **React Bits** components come from the shadcn registry `@react-bits` (configured in `components.json`; add with `npx shadcn@latest add @react-bits/<Name>-TS-TW`). `.mcp.json` registers the shadcn MCP server
- **ESLint 9** flat config (`eslint.config.mjs`, `eslint-config-next` 16)

## Architecture

A multi-page marketing site with no API routes. `src/app/layout.tsx` renders the shared Navbar, Footer, the cal.com embed loader and a `MotionConfig` that respects reduced motion.

**Routes:** `/` (home) only. This repo is the home-page deployment; the AI and History pages live in the `htech` repo and the full five-page build in the HubTech design workspace. The navbar and footer link to sections of the home page (`#work`, `#ai`, `#process`, `#contact`). `DESIGN.md` describes the whole design system, including pages this repo does not ship.

**Component layout:**
- `src/components/site/`: shared primitives (BookCall with PillChip, LinkButton, CalEmbed, Logo, WaveTexture, SectionHeading, Spotlight, Reveal, Providers)
- `src/components/sections/`: one file per home section (HomeHero, WorkShowcase, AiTeaser + PillarDiagrams, EngagementStrip, CtaSection + InquiryForm)
- `src/components/scenes/`: coded interface scene per product (SceneShell + six scenes), keyed by product slug via `ProductScene`
- `src/components/Common/`: Navbar and Footer
- `src/components/illustrations/`: the drawing kit (`kit.tsx`: Figure, Backdrop, Glow, Label, Line, Signal, Ping, TextBars, ink scale) that the PillarDiagrams illustrations are built from
- `src/components/reactbits/`: vendored React Bits components (Topography terrain in the home hero, PatternWaves halftone in the CTA via `WaveTexture`). Components that draw into a React-owned canvas must not call `loseContext()` on cleanup: Strict Mode remounts reuse the canvas and a lost context renders as a white sheet

**Data:**
- `src/lib/site.ts`: all page content (products, AI pillars, anatomy, principles, capabilities, engagement phases, history order, booking link)
- `src/lib/accent.ts`: per-product accent classes (all greys: the site is black and white)

**Booking:** every "Book a call" uses `BookCall` / `openBooking()` (cal.com `hubtech/demo`, namespace `chat-with-hubtech`). The inquiry form prefills the same booking; there is no email address on the site by design.

**Assets:**
- Product screenshots under `public/static/landing-page/projects/`. Each raster carries its origin in embedded metadata; profile shots use the `*-redacted` versions so athletes' personal details stay off the site

## Conventions

- Class merging is always done with `cn()` from `src/lib/utils.ts`; it is configured so the custom `text-display` / `text-title` / `text-heading` sizes are not dropped as colour clashes
- Fonts: next/font variables (`--font-geist-sans`, `--font-geist-mono`, `--font-mona`) are set on `<html>`. Reference them directly in CSS; the `@theme inline` aliases (`--font-sans`, `--font-display`) only exist inside generated utilities, not as runtime variables
- Add `"use client"` to any component that uses hooks, browser APIs or Framer Motion
- Product facts, design direction and evidence rules are recorded in `PRODUCT.md` and `DESIGN.md`

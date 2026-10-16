# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

People deciding whether to hire an outside team, arriving to judge competence and book a first call:

- **Established businesses** that want AI inside their existing operations, data and workflows.
- **Startup founders** who need an MVP or AI product designed and shipped by an outside team.
- **Enterprise / IT leaders** running larger programmes where security, permissions, evaluation and monitoring matter.
- **Sports organisations and facilities** (leagues, clubs, academies, esports venues), the world HubTech's shipped platforms come from.

Their job on the site: understand what HubTech builds, see evidence it has shipped real systems, understand how an engagement runs, then book a call.

## Product Purpose

HubTech is an AI and software studio. It designs and builds AI systems, web platforms, mobile apps and QA/testing programmes for other businesses. The site succeeds when a qualified visitor books a discovery call (cal.com `hubtech/demo`, namespace `chat-with-hubtech`) or sends a project inquiry.

## Positioning

HubTech has shipped and runs real, data-heavy platforms end to end: hybrid esports tournaments (Battle's Lounge), live sports streaming (YSN), computer-vision athlete analysis (Connected Athlete), AI competitive intelligence (Rivalis), a unified console (OnePlace) and an energy-infrastructure platform with partner and advertiser portals (Xura). The claim a neighbouring studio cannot copy is that body of shipped work, plus an engineering stance on production AI: context and data, model, tools, permitted action, verification and monitoring, rather than demos.

## Operating Context

- Visitors compare HubTech against other agencies and studios; they scan for proof, process and fit before committing to a call.
- Booking runs through cal.com embed attributes on buttons (`data-cal-link="hubtech/demo"`).
- The inquiry form currently has no backend (it logs on submit). Where submissions go is an open decision.

## Capabilities and Constraints

- Service lines: AI development, web development, app development (iOS, Android, cross-platform), QA and testing.
- AI practice (from user-supplied reference material): AI systems (read, see, hear, understand, predict, recommend), AI agents and automation (deterministic, AI-assisted, controlled agentic), evaluation and observability (acceptance criteria, regression, drift, monitoring), and a set of engineering principles.
- Site pages requested: Home, AI, Products, Capabilities, History.
- Stack: Next.js 16 App Router, React 19, TypeScript, Tailwind CSS v4, Framer Motion, Lucide. Static site, no API routes.
- Contact: booking only. Do not show an email address on the site. The inquiry form hands off to the cal.com booking.
- History: tells the product story as ordered chapters without dates. No founding date or milestone years are confirmed; the chapter order is an inference awaiting user confirmation.
- Open: team, location and the confirmed launch order.

## Brand Commitments

- Name: HubTech (legal entity HubTech Ltd, domain hubts.io).
- Logo: the official HubTech logo mark has not been supplied yet. The swirl glyph in the old footer was NOT HubTech's logo (confirmed by the user, October 2026); never use it. Until the real mark arrives, the site sets the HubTech name as a wordmark only.
- Visual direction (chosen by the user, October 2026): the category standard for AI studios, the dark look of the attached references, executed at full craft. Revision 2 (October 2026), on the user's request: the home hero is about HubTech itself (the "Hub" shader with HubTech's mark and the six products orbiting), products are shown as coded interface scenes with real screenshots alongside, and headlines use Mona Sans. Revision 3 (October 2026), on the user's request: the home page must not look like the OnePlace landing page and the whole site goes black and white. The Hub shader and its echoes were replaced by React Bits backgrounds (a white contour terrain in the home hero, halftone textures on inner heroes and the CTA), every colour token and accent became neutral, real screenshots are shown in greyscale, the nav became a plain bar and the buttons squared. History chapters reveal as they scroll into view. Quality bar: the user's own sibling sites (Oneplace landing, Rivalis, Xura) plus Linear, Raycast and Resend.

## Evidence on Hand

- Shipped products: Battle's Lounge, YSN, Connected Athlete, Rivalis, OnePlace and Xura (Xura: site, partner portal and advertiser portal with one-time-code sign-in, source in `D:/HubTech/designs/xura`). PlayerHub is NOT a HubTech product (user, October 2026); never list it.
- Product descriptions in `src/lib/projects.ts`.
- OnePlace (HubTech's own console, from `D:/HubTech/designs/Allinone/deck-src/slides.html`): "Every module, one console": competitive intelligence (Rivalis), newsletter and blog, presentation (PDF in, web report out), AI research (several models answer, one cited report) and programs (tenant operations) behind one login. Screenshot: `public/static/landing-page/projects/oneplace-console.jpg` (demo workspace data).
- Rivalis: AI competitive intelligence that scores every company you track on 27 points; signs in through OnePlace with the same account.
- The numeric stats in `src/lib/projects.ts` (active players, tournaments per month, uptime and similar) are demo data and must not be shown as proof.
- Absent and not to be fabricated: client names or logos, testimonials, company-level stats, awards, team bios, pricing.

## Product Principles

1. Show shipped work, not adjectives: every claim should point at a real product, screen or process.
2. Never invent proof; when a slot needs facts the user has not supplied, leave it out or mark it plainly.
3. One action: booking a call. Everything else supports that decision.
4. Speak to four buyer types through outcomes and process, without splitting the site into per-audience funnels.
5. Engineering honesty over AI hype: production concerns (data, permissions, evaluation, monitoring) are part of the pitch.

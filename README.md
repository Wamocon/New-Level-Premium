# New Level Premium, 2026 Rebuild

A premium, award-level rebuild of the [New Level Group](https://newlevel-group.com/) real-estate & construction site (Alanya, Turkey). This is the **flagship "2026 highest-attention" variant**, the benchmark against which the current live site (the "before") is compared.

Trilingual (**RU / EN / TR**), motion-rich, with a guardrailed AI concierge.

---

## Stack

| Layer | Choice |
|---|---|
| Framework | **Next.js 16** (App Router, React 19, Turbopack) |
| Styling | **Tailwind CSS v4** (CSS-first tokens) |
| 3D / WebGL | **React Three Fiber 9 + drei 10 + three r185** (PBR materials, procedural HDRI, bloom) |
| Motion | **GSAP 3.15** (ScrollTrigger + ScrambleText, all free) + **Lenis** smooth scroll |
| Micro-interactions | **Framer Motion** |
| i18n | **next-intl 4** (RU/EN/TR, Cyrillic + Latin + Turkish) |
| AI | **Vercel AI SDK 7**, provider-agnostic (**Claude** or **OpenAI** via env) |
| Fonts | **Playfair Display** (display) + **Manrope** (body), both cover Cyrillic + Latin-ext |
| QA | **Playwright** (`scripts/qa.mjs`) |

---

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in your AI key (see below)
npm run dev                  # http://localhost:3000  → redirects to /ru
```

Other scripts:

```bash
npm run build       # production build (prerenders /ru, /en, /tr)
npm run start       # serve the production build
npm run typecheck   # tsc --noEmit
node scripts/qa.mjs # Playwright screenshot sweep (server must be running)
```

---

## Environment variables

The AI concierge is **provider-agnostic**. It's currently wired to a **self-hosted
OpenAI-compatible endpoint** (Sokrates on an NVIDIA DGX, exposed via Cloudflare):

```bash
# .env.local  (self-hosted / in use)
AI_API_URL=https://sokrates.test-qualitaetsmanagement.com/api
AI_API_KEY=sk-...
AI_CHAT_COMPLETIONS_PATH=/chat/completions
AI_MODEL_FAST=sokrates-fast          # concierge default
AI_MODEL_REASONING=qwen3.6-35b
AI_MODEL_PRO=sokrates-pro
# AI_MODEL_CHAT=sokrates-pro          # optional: force a specific concierge model
```

It also supports hosted providers as a fallback, set `AI_PROVIDER=anthropic` +
`ANTHROPIC_API_KEY`, or `AI_PROVIDER=openai` + `OPENAI_API_KEY`. See `.env.example`.
Until an endpoint/key is present the site works fully; only the chat replies fall
back to a polite "not configured yet" message.

> `.env.local` is git-ignored, the key never leaves your machine.

---

## Project structure

```
app/
  [locale]/          # locale-aware root layout + homepage
  api/chat/route.ts  # streaming AI endpoint (provider-agnostic)
components/
  sections/          # the 9 homepage sections (Hero, FeaturedListings, …)
  three/TowerMaquette # WebGL gold-tower maquette (complexes page vitrine)
  ai/ChatWidget      # the concierge UI
  anim/              # Reveal + ScrambleText (GSAP primitives)
  ui/                # Button, SectionHeading, PropertyCard
  layout/            # Header, Footer, LanguageSwitcher
  providers/         # Lenis smooth-scroll provider
i18n/                # next-intl routing / request / navigation
messages/            # ru.json · en.json · tr.json  (native-verified copy)
lib/
  data/              # mock properties, projects, services, site info
  ai/                # system prompt, knowledge base, provider resolver, starters
proxy.ts             # next-intl middleware (Next 16 "proxy" convention)
```

---

## Notes & next steps

- **Data is mock/static** (`lib/data/*`) so every filter, gallery and form works
  client-side. Swap for a CMS/DB or the live listings feed when ready.
- **Images are deterministic placeholders** (`lib/images.ts`). Replace the seeds
  with the client's real project photography / curated assets before launch.
- **AI guardrails**: the concierge system prompt (`lib/ai/knowledge.json`) is
  red-team-hardened, scope-limited to New Level Group, no invented prices or
  legal/tax promises, always offers a human hand-off, and mirrors the user's language.
- Subpages (`/properties`, `/complexes`, blog, etc.) are the next build phase;
  the homepage is the flagship showpiece.

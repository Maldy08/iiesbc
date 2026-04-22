# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Start dev server (Turbopack) at http://localhost:3000
- `npm run build` — Production build (Turbopack)
- `npm start` — Serve production build
- `npm run lint` — Run ESLint

No test runner is configured.

## Stack

- Next.js 15 (App Router, JavaScript — not TypeScript) on React 19
- Tailwind CSS v4 (PostCSS plugin, no `tailwind.config.js`-driven theme beyond defaults)
- Path alias `@/*` → `src/*` (see `jsconfig.json`)
- ESLint extends `next/core-web-vitals` but **most rules are explicitly disabled** in `eslint.config.mjs` (including `react-hooks/rules-of-hooks`, `no-unused-vars`, `no-undef`). Lint passes are not a correctness signal here.

## Architecture

Single Next.js app serving two distinct products that share the same UI shell (`src/app/layout.js` wraps every route in `Navbar` + `Footer`):

1. **Institutional site** — marketing/info pages: `sobre-nosotros/`, `oferta-academica/` (licenciaturas, maestrias, doctorado, diplomados), `eventos-academicos/`, `contacto/`, `inscripcion/[slug]`, `pago-exitoso/`.
2. **Congreso platform** — `src/app/congreso/` with its own `layout.js`, plus `subir-ponencia/`, `mis-ponencia/`, and `admin/` for reviewers.

### Two parallel persistence backends

The codebase has **two independent data pipelines** that do not share state — always check which one a feature is using before changing it:

- **Supabase** (newer, used by inscripciones/Stripe flow and ponencias system). Tables referenced: `usuarios`, `programas`, `inscripciones`, `ponencias`, `historial_versiones`, `tokens_acceso`. Two clients exist:
  - `src/lib/supabase/client.js` — anon key, browser-safe, imported as `supabase`.
  - `src/lib/supabase/server.js` — service-role key, **server-only**, imported as `supabaseAdmin`. Never import this from a client component.
  - Service modules in `src/lib/supabase/` (`usuarios.service.js`, `ponencias.service.js`, `tokens.service.js`, `storage.service.js`, `storage.js`) mix both clients — read the imports before trusting which one runs.
  - Note: `storage.js` and `storage.service.js` contain near-duplicate `subirArchivoPonencia` implementations. Prefer consolidating rather than adding a third.
- **Google Sheets + Vercel Blob** (older, used by `/api/registro-congreso`). Registrations append rows to a sheet (`Registros!A:L`) and receipts go to Vercel Blob. Tokens here are `crypto.randomBytes` hex strings, **unrelated** to the Supabase `tokens_acceso` table.

### Payment flow (Stripe)

1. `POST /api/inscripcion/crear-intento` — upserts user, creates `inscripciones` row in `pendiente`, creates Stripe PaymentIntent with `{inscripcion_id, usuario_id, programa_id}` in metadata, returns `clientSecret` to the `CheckoutForm.jsx` client component.
2. `POST /api/pagos/webhook` — verifies Stripe signature with `STRIPE_WEBHOOK_SECRET`, reads metadata, flips `inscripciones.estado` to `completado`/`fallido`, then sends confirmation email via Resend. The email send is wrapped in its own try/catch so a Resend failure still returns 200 to Stripe — **preserve this behavior** when editing the webhook.

### Email

Resend is the sender for all transactional mail (`contacto@iiesbc.mx`, `congreso@iiesbc.mx`). Legacy SMTP env vars exist in `.env.local` but aren't wired in. HTML is inlined directly in route handlers.

### Route handler conventions

- Files under `src/app/api/**/route.js` are Next.js route handlers.
- `src/app/api/test-*` directories are ad-hoc debugging endpoints left in the tree — don't assume they reflect production flows.
- `src/app/api/registro-congreso/route.js` pins `runtime = 'nodejs'` and `dynamic = 'force-dynamic'` because it uses `googleapis` and `FormData` with file uploads; match this when adding similar handlers.

## SEO

`src/app/layout.js` defines site-wide metadata (`metadataBase: https://www.iiesbc.mx`, OG images, robots). `src/app/sitemap.js` and `src/app/robots.js` are generated. Per-page `generateMetadata` / `metadata` exports override the defaults — prefer those over editing the root layout.

## Secrets

`.env.local` is gitignored but contains live-looking credentials (Stripe, Supabase service role, Google service account private key, SMTP password). Treat this file as sensitive; never echo, log, or commit its contents.

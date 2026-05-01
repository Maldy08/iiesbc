# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

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

## Design system (v2.0)

All institutional pages (`sobre-nosotros`, `contacto`, `eventos-academicos`, `oferta-academica/**`) follow an **editorial design system** derived from the home page components (`src/app/components/home/Hero.js`, `Mision.js`, `Bienvenida.js`). Tokens live in `src/app/globals.css`. **Any new page or redesign must use this system** — never introduce generic Tailwind colors like `green-700`, `blue-500`, `emerald-600`, `gray-800`, etc. outside of neutral utilities (`black/5`, `white/10`).

A project-local subagent lives at `.Codex/agents/iiesbc-redesigner.md` and encodes the full ruleset; it can be invoked for any page redesign and will preserve all data, text, links, images, state, and `metadata` exports while rewriting the visuals.

### Palette (only these colors)

| Hex | CSS var | Role |
| --- | --- | --- |
| `#66822c` | `--color-primary-green` | Verde oliva — acento A |
| `#556e23` | — | Hover del verde |
| `#a5c94c` | — | Lima — acento brillante (dots animados, checks) |
| `#f68c24` | `--color-primary-orange` | Naranja — acento B |
| `#cd751e` | `--color-primary-dark-orange` | Hover del naranja |
| `#1a1f14` | `--color-ink` | Texto primario |
| `#4a5240` | `--color-ink-soft` | Texto secundario |
| `#8a9180` | `--color-ink-muted` | Texto terciario / eyebrow muted |
| `#fafaf7` | `--color-surface` | Fondo alternante de sección |
| `#f3f1ea` | `--color-surface-alt` | Hover sutil |
| `#e6e3d8` | `--color-line` | Divisores |
| `#0c1208` | — | Overlay oscuro de heroes/CTAs |

Secciones alternan `bg-white` ↔ `bg-[var(--color-surface)]`. Heroes y CTAs finales con imagen o inmersivos usan fondo `#0c1208`.

### Typography (utilities from `globals.css`)

- `font-display` → Sora (headings y números destacados).
- `text-display-xl` → h1 de hero.
- `text-display-lg` → h2 de sección.
- `text-display-md` → h3 destacado / CTAs.
- `text-eyebrow` → etiquetas uppercase con `tracking-[0.2em]`.
- `tracking-display-tight` → headings densos.
- `text-balance` en headings, `text-pretty` en párrafos largos.
- `tabular-nums` para horarios, precios, enumeraciones.

### Animations (only those defined in `globals.css`)

`animate-slow-zoom`, `animate-float-slow/-medium/-fast`, `animate-shimmer`, `animate-fade-in-up`, `animate-fade-in`, `animate-ping`, `animate-pulse-slow`. **No crear keyframes locales ni `<style jsx>` que dupliquen lo que ya existe en globals.**

### Shadows

- `shadow-[var(--shadow-card)]` — tarjetas en reposo
- `shadow-[var(--shadow-card-hover)]` — tarjetas en hover
- `shadow-[var(--shadow-ring)]` — badges flotantes sobre imágenes
- Botón verde: `shadow-[0_14px_36px_-12px_rgba(102,130,44,0.7)] hover:shadow-[0_16px_40px_-8px_rgba(102,130,44,0.9)]`
- Botón naranja: `shadow-[0_14px_36px_-12px_rgba(246,140,36,0.7)] hover:shadow-[0_16px_40px_-8px_rgba(246,140,36,0.9)]`

### Page structure

Cada página institucional sigue este patrón:

1. **Hero** — sección `relative isolate` con `<Image fill priority className="object-cover scale-105 animate-slow-zoom">`, overlay oscuro en tres paradas (`from-[#0c1208]/85 via-[#0c1208]/60 to-[#0c1208]/92`) + radial naranja/verde, 3 partículas flotantes, chip con `animate-ping` verde-lima + texto eyebrow, `<h1>` `text-display-xl` con **una palabra en `text-[#f68c24]`**, barra shimmer de 40px (`from-[#66822c] via-[#f68c24] to-transparent`), subtítulo, 1–3 CTAs.
2. **Secciones de contenido** — fondo alternante `white`/`surface`, header editorial al inicio (línea + eyebrow → `<h2>` `text-display-lg` con una palabra en acento → párrafo opcional).
3. **CTA final** — oscuro `#0c1208` con radiales, chip, `<h2>` `text-display-lg`, botón naranja primario + opcionalmente uno glass secundario.

### Reusable patterns

- **Tarjeta estándar**: `bg-white rounded-[1.75rem] p-8 ring-1 ring-black/5 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-500 hover:-translate-y-1`. Línea superior tintada: `<span className="absolute top-0 left-0 right-0 h-px" style={{ backgroundColor: accent }} />`.
- **Ícono con tint**: cuadro `w-14 h-14 rounded-2xl` con `backgroundColor: \`${accent}15\`` y `<svg stroke={accent}>` o emoji grande dentro.
- **Botón primario verde**: `bg-[#66822c] hover:bg-[#556e23]` + sombra verde.
- **Botón primario naranja**: `bg-[#f68c24] hover:bg-[#cd751e]` + sombra naranja.
- **Botón glass (sobre oscuro)**: `bg-white/10 hover:bg-white/15 border border-white/25 backdrop-blur-md` con puntito `bg-[#f68c24]` o `bg-[#a5c94c]`.
- **Blockquote editorial**: `pl-6 lg:pl-8 border-l-2 border-[#f68c24]` con `<p className="font-display text-xl lg:text-2xl text-[#1a1f14] font-medium">`.
- **Badge flotante sobre imagen**: `bg-white rounded-2xl px-6 py-4 shadow-[var(--shadow-ring)] ring-1 ring-black/5` con eyebrow + título breve.
- **Imagen editorial vertical**: `aspect-[4/5] rounded-[2rem] overflow-hidden ring-1 ring-black/5 shadow-[var(--shadow-card-hover)]` con overlay `from-[#0c1208]/80 via-[#0c1208]/10 to-transparent`.
- **Acordeón (`<details>`)**: `rounded-[1.25rem] ring-1 ring-black/5 shadow-[var(--shadow-card)] open:shadow-[var(--shadow-card-hover)]`, `<summary list-none>` con ícono en cuadro tintado + chevron con `group-open:rotate-180`. **Conservar `<details>`/`<summary>` — es el toggle nativo sin JS.**

### Antipatterns (elimina del código legacy al tocarlo)

- Gradientes saturados multi-paso (`from-green-900/90 via-green-800/80 to-orange-900/70`) → reemplaza por overlays `#0c1208/XX`.
- Glow blur decorativo (`absolute -inset-1 bg-gradient ... blur-xl opacity-0 group-hover:opacity-20`) → usa `shadow-[var(--shadow-card-hover)]`.
- Múltiples blobs de colores saturados (`bg-green-200/20 blur-3xl`) → máximo 2 blobs por sección con opacidad ≤ 10% usando la paleta (`bg-[#66822c]/5`).
- Decoradores de 3 líneas bajo headings → reemplaza por línea + eyebrow arriba.
- `font-black text-6xl/7xl/8xl drop-shadow-2xl` → `font-display font-extrabold text-display-xl tracking-display-tight`.
- `transform hover:scale-105/110` en tarjetas → `hover:-translate-y-1` + sombra.
- `border-4 border-white` / `border-[6px]` → `ring-1 ring-black/5`.
- Centrar headings y descoradores horizontales (`text-center` + `flex items-center justify-center gap-2`) → preferir layouts alineados a la izquierda tipo editorial.
- `bg-gradient-to-r from-green-600 to-orange-600` en botones → usar un color sólido de la paleta con su sombra coloreada.
- `<style jsx>` que duplica animaciones ya definidas en `globals.css` → elimínalo.

### Rules when redesigning

1. **No quitar secciones.** Cada bloque semántico del original debe existir.
2. **No cambiar textos, datos, enlaces, imágenes, `metadata`, `"use client"`, state ni handlers.** Solo cambia el look & feel.
3. **No crear archivos nuevos.** Subcomponentes al final del mismo `page.js`.
4. **No editar `globals.css`** — el sistema ya está completo.
5. Validar con `npx next lint --file <ruta>` antes de dar por cerrado el cambio.

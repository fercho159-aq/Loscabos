# FICC Los Cabos — Agent Handoff

Complement to `CLAUDE.md`. Read that first for stack/conventions, then this for project-specific context an incoming AI agent needs.

## Site

- Festival Internacional de Cine y Creatividad de Los Cabos, 14ª edición.
- Dates: 9 — 13 Dec 2026.
- Deploy: https://ficc.vercel.app (Vercel, auto from `main`).
- Tagline: `#BeyondTheScreen`.

## Stack snapshot

- **Next.js 16.2.3**, App Router, React 19, TS 5
- **Tailwind v4** (`@theme` tokens in `globals.css`)
- **GSAP 3 + ScrollTrigger** — all scroll-driven anims
- **Three.js + react-three-fiber** — only for FilmGrain overlay + GradientBlobs
- **next/font/local** for PRINTF; Typekit `<link>` for Neue Haas Grotesk (`--font-inter`); Google Fonts `<link>` for EB Garamond
- **Mailchimp** `mcjs` script loaded `lazyOnload` in `layout.tsx` (candidate for removal; only link-out forms used, no embedded)

## Routes (all static)

| Path | File | Notes |
|---|---|---|
| `/` | `src/app/page.tsx` | Hero SVG logo (LCP), preventa CTA, impulso plataformas, aliados carousel |
| `/el-festival` | `src/app/el-festival/page.tsx` | 5 pinned ScrollTrigger sections (`ElFestival*.tsx` components) |
| `/programacion` | — | Currently minimal |
| `/aliados` | — | Standalone aliados page |
| `/convocatorias` | — | Timeline + cards |
| `/prensa` | — | Press quotes |
| `/ffgf` | `src/app/ffgf/page.tsx` | Fondo Fílmico Gabriel Figueroa — intro grid + legado flip cards + aliados |
| `/fon` | — | Frequencies Of Now |
| `/la-baja-inspira` | `src/app/la-baja-inspira/page.tsx` | Heaviest page: desc grid, comite, legado, aliados |
| `/plataformas-de-impulso` | — | Plataformas overview with GradientBlobs |
| `/demo` | — | Legacy demo — not linked from nav |

## Architecture patterns

### Per-page animations component

Each heavy page has its own GSAP component that returns `null` and registers ScrollTriggers. These are now lazy-loaded via client wrappers:

- `GSAPAnimations` (home) → wrapped by `GSAPAnimationsLazy.tsx`
- `LBIAnimations` → `LBIAnimationsLazy.tsx`
- `FFGFAnimations` → `FFGFAnimationsLazy.tsx`

Pattern for any new one:

```tsx
// MyLazy.tsx
"use client";
import dynamic from "next/dynamic";
const MyAnim = dynamic(() => import("./MyAnim"), { ssr: false });
export default function MyAnimLazy() { return <MyAnim />; }
```

Server page imports the Lazy wrapper. **Do not** `dynamic(..., { ssr: false })` directly from a Server Component — Next 16 rejects it.

### ElFestival pinned sections

`src/components/ElFestival{Intro,Comunidad,Programacion,PlataformaCreativa,ImpulsoIndustria}.tsx` — near-identical structure. Two-row layout:

- Row 1: `flex-col md:flex-row` — 2/3 bg+title + 1/3 image (or reversed ratios per section)
- Row 2: 1/2 SVG icon + 1/2 body text

On desktop they pin via ScrollTrigger; on mobile (`useIsMobile` hook) animations are skipped and sections render stacked.

Body text styling (unified): `text-cream font-normal text-[clamp(1.3rem,2vw,1.75rem)] leading-snug` + `fontFamily: var(--font-garamond)`.

### Data conventions

- Aliados logos carousel: array is duplicated (`[...aliados, ...aliados]`) for CSS-only infinite loop via `translateX(-50%)` keyframe.
- Aliados carousel `<Image>`: `width={200} height={100} sizes="(max-width:768px) 100px, 200px" loading="lazy"` — intentionally oversampled from 100px display size × DPR.
- Stills and comite images: absolute paths under `/images/<folder>/...`. Most source-of-truth formats are JPG after the 2026-04-14 compression pass; `escine.png` is the only comite PNG left (small, not compressed).

## Fonts

- `--font-inter` → Neue Haas Grotesk Display via Typekit kit `euv2emd`. **Fallback chain in `globals.css`:** `"Helvetica Neue", Helvetica, Arial, sans-serif` (local Inter was removed deliberately).
- `--font-garamond` → EB Garamond via Google Fonts (body/serif copy).
- `--font-printf` → local PRINTF Regular (only on FFGF).
- Footer, navbar, CTA buttons all use `--font-inter`. Any Garamond reference in footer is a regression.

## Colors

See `CLAUDE.md` table. Most-used: `--color-cream` `#F6EDDB`, `--color-navy` `#081722`, `--color-orange` `#FA6935`, and dark bg `#0A1E23`.

## Performance baseline (2026-04-14)

Initial mobile Lighthouse, sim 4G Moto G Power:

| Page | Score | LCP | TBT |
|---|---|---|---|
| la-baja-inspira | 40 | 11.5s | 1,140ms |
| ffgf | 48 | 7.6s | 750ms |
| plataformas | 57 | 3.9s | 1,210ms |
| home | 59 | 8.9s | 280ms |
| el-festival | 61 | 4.0s | 890ms |
| prensa | 68 | 7.1s | 100ms |
| aliados | 78 | 3.9s | 60ms |
| programacion | 80 | 4.3s | 120ms |
| fon | 82 | 4.0s | 120ms |
| convocatorias | 83 | 4.0s | 90ms |

After fixes (desktop home reaches 94 PSI, mobile home ~52–62, still improving).

### Fixes already applied

1. **Image compression** (via `sips`): stills PNG→JPG (3-4M→50-150K), webpdf/img-{005,010,025,040,055,089} PNG→JPG (4-5M→300-800K), `water-bg.jpg` 3.2M→358K, `cta-cactus.jpg` 1.7M→469K, `lbi-hero-whale.jpg` 6.3M→1.4M, `comite/juan-patricio-riveroll.jpg` 6.1M→48K, `comite/ivan-carrillo.png`→`.jpg` 1.3M→73K.
2. **`next/image` migration**: `cta-cactus` raw `<img>` → `<Image fill>`; `water-bg` CSS `background-image` → `<Image fill>` absolute behind content. Triggers AVIF/WebP via Next `images.formats`.
3. **`sizes` everywhere**: every `<Image fill>` has a `sizes` prop. Aliado carousel images reduced to `width={200}` to avoid Next generating oversized variants.
4. **Priority & preload**: hero logo `<img>` has `fetchPriority="high"` + `decoding="async"`; home page injects `<link rel="preload" as="image" href="/images/FICCLosCabos_2026_Logo_Claro.svg" fetchPriority="high" />`.
5. **CLS**: `width`/`height` added to hero logos, footer logo, navbar logo.
6. **Third-party**: Typekit + Google Fonts `<link>` use `media="print" onLoad="this.media='all'"` non-blocking trick (spread cast to bypass React type check). Preconnect hints for `use.typekit.net`, `p.typekit.net`, Google Fonts. Mailchimp `strategy="lazyOnload"`.
7. **Lazy GSAP/Three**: per-page animation components dynamic-imported via client wrappers. `FilmGrain` same pattern (`FilmGrainLazy`).
8. **ScrollTrigger**: `ignoreMobileResize: true` configured to prevent refresh on mobile URL-bar show/hide. `GSAPAnimations` root `useLayoutEffect` replaced with `useEffect` + `requestIdleCallback` to defer GSAP init past LCP.
9. **Modern browserslist** in `package.json`: chrome≥91, edge≥91, firefox≥90, safari≥15, ios_saf≥15. Drops Next/SWC polyfills (~14 KB).
10. **Image src refs** updated: `.png` → `.jpg` where source files were converted (regex patch; `escine.png` reverted after regression).

### Known outstanding issues

- **Unused heavy files** still in `public/images/`: `programacion-hero.png` (19M), `programacion-hero.jpg` (8.2M), `lbi-mapa.png` (8M), `beyond-the-screen-bg.jpg` (6.4M), `lbi-banner-sunset.jpg` (5.7M), `lbi-convocatoria.jpg` (5.7M), `brandbook/` (~120M), unused `webpdf/*.png` originals. None referenced from `src/`. **Require user approval before `rm`.**
- **Mailchimp `mcjs` ~110KB** still ships on every page. If no popup/embed is needed, removable from `src/app/layout.tsx`. Ask first.
- **231KB unused JS** in main chunk (React/Next runtime) — not easily reducible without dropping features.
- **Forced reflow ~80-500ms** on mobile — largely from GSAP `ScrollTrigger.refresh()` on first paint. `requestIdleCallback` deferral already applied; further reduction needs refactoring triggers to read once and cache.
- Mobile LCP on home remains ~6-8s even with fixes — main bottleneck is main-thread JS during hydration. Further wins require removing Mailchimp or code-splitting Navbar.

## Build / dev

```bash
npm install
npm run dev       # local on :3000
npm run build     # production build — must pass before every PR
```

`npm run build` ends with a static route table. All pages should be `○ (Static)` except `/opengraph-image` which is `ƒ (Dynamic)`.

## Git workflow

- User controls commits. **Do not commit unless asked.**
- `main` auto-deploys to Vercel.
- No PR template; commits are Spanish-ish one-liners like `"cambios"`. No need to imitate — use conventional messages when asked.

## Image compression pipeline

macOS `sips` is the agreed tool (no dependencies). Patterns used:

```bash
# PNG → JPG @ Q75, max 1000px wide
sips -s format jpeg -s formatOptions 75 -Z 1000 in.png --out out.jpg && rm in.png

# Resize JPG in place
sips -Z 2000 -s formatOptions 70 file.jpg
```

After any compression that changes extensions, grep `src/` for the old path and patch references before testing.

## CSS specificity gotcha

`globals.css` (~3000 lines) sets `display` on many class names (`.profiles-grid`, `.aliados-carousel`, etc). Tailwind responsive utilities (`max-md:hidden`) will **not** override them. Use dedicated media-query CSS with `!important` instead — there are existing `.lbi-comite-desktop` / `.lbi-comite-mobile` examples to follow.

## Do-not-touch list

- `escine.png` in `comite/` — small, never compressed, path must stay `.png`.
- Raw `<img>` tags used for SVG texture backgrounds inside `ElFestival*.tsx` (e.g. `layer-bg.svg`) — converting them to `next/image` breaks the parallax + aspect-fit layout.
- Typekit `<link>` non-blocking hack in `layout.tsx` — the string-attribute spread cast looks wrong in React; it is intentional. Keep as-is.

## Caveman mode note

User enables a `/caveman` skill that constrains assistant prose style (fragments, drop articles, etc.). Does not affect code — write code normally. Revert prose to full sentences if user says `stop caveman` or `normal mode`.

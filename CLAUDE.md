# FICC Los Cabos - Guia de Proyecto

## Stack

- **Next.js 15** App Router (server components por defecto, `"use client"` para interactividad)
- **GSAP + ScrollTrigger** para animaciones scroll-driven
- **Tailwind CSS v4** (`@import "tailwindcss"` + `@theme` tokens) combinado con CSS global
- **Three.js** (FilmGrain overlay global, GradientBlobs en algunas paginas)
- **TypeScript**

## Fuentes

Definidas en `src/app/layout.tsx`:

| Variable        | Fuente                  | Archivo / Fuente          | Uso                    |
|-----------------|-------------------------|---------------------------|------------------------|
| `--font-inter`  | Neue Haas Grotesk Display (fallback Inter) | Adobe Fonts (Typekit) + local Inter | Todo: body, headings, UI |
| `--font-printf` | PRINTF Regular          | `public/fonts/PRINTF-Regular.ttf` | Headings en FFGF page  |

`--font-inter` es la fuente principal del sitio. Se aplica globalmente en `body`.

## Paleta de Colores

Definidos en `globals.css` bajo `@theme`:

| Token                | Hex       | Uso principal                               |
|----------------------|-----------|---------------------------------------------|
| `--color-cream`      | `#F6EDDB` | Background global, secciones claras          |
| `--color-navy`       | `#081722` | Texto principal sobre fondo claro            |
| `--color-orange`     | `#FA6935` | Accent, CTAs, headings de seccion            |
| `--color-acid`       | `#BDC957` | Accent verde/lima                            |
| `--color-teal`       | `#006666` | Accent teal                                  |
| `--color-wine`       | `#960942` | Accent vino                                  |
| `--color-blue`       | `#6687C3` | Accent azul                                  |
| `--color-peach`      | `#C47A3D` | Accent durazno                               |
| `--color-blush`      | `#E9B0BD` | Accent rosa                                  |
| `--color-gray`       | `#9D9D9C` | Textos secundarios                           |

**Fondo oscuro recurrente**: `#0A1E23` (usado en hero, navbar, secciones dark)

## Estructura de Archivos

```
src/
  app/
    layout.tsx              # Root layout (fuentes, FilmGrain, Mailchimp)
    globals.css             # ~3000 lineas, todo el CSS global
    page.tsx                # Home
    el-festival/page.tsx
    programacion/page.tsx
    aliados/page.tsx
    convocatorias/page.tsx
    prensa/page.tsx
    ffgf/page.tsx
    fon/page.tsx
    la-baja-inspira/page.tsx
    plataformas-de-impulso/page.tsx
  components/
    Navbar.tsx              # Nav fijo con dropdowns
    Footer.tsx              # Footer con columnas y social
    PageHero.tsx            # Hero reutilizable (h-screen, #0A1E23, HeroTitle + TextureStrip)
    HeroTitle.tsx           # Titulo con animacion per-character GSAP
    TextureStrip.tsx        # SVG decorativo (1728x122) con stroke draw animation
    GSAPAnimations.tsx      # Animaciones GSAP del home (cursor, scroll reveals)
    LBIAnimations.tsx       # Animaciones GSAP de La Baja Inspira
    Card3D.tsx              # Tarjeta con efecto 3D hover
    ZoomLink.tsx            # Link con zoom on hover
    AliadosMarquee.tsx      # Carrusel infinito de logos
    CTAParallax.tsx         # Seccion CTA con parallax
    three/                  # FilmGrain, GradientBlobs, FloatingParticles
public/
  fonts/                    # Inter variable, PRINTF
  images/                   # Organizado por seccion (aliados/, comite/, posters/, etc.)
```

## Layout Global

Todo el sitio sigue este esqueleto:

```tsx
<Navbar />
<PageHero lines={["Titulo", "Pagina"]} />   // o hero custom en home
{/* Secciones de contenido */}
<Footer />
<AnimationsComponent />                      // GSAPAnimations, LBIAnimations, etc.
```

El componente de animaciones **siempre va al final** del JSX. Es un client component que retorna `null` y registra ScrollTriggers en `useLayoutEffect`.

## Componentes de Layout de Seccion

### Seccion Clara (`.section-text`)
```css
.section-text { background: var(--color-cream); padding: 4rem 2rem; }
.section-text-inner { max-width: 720px; margin: 0 auto; text-align: center; }
.section-heading { font-size: clamp(1.4rem, 3vw, 2rem); font-weight: 800; color: var(--color-navy); text-transform: uppercase; }
```

### Seccion Oscura (patron Convocatoria/Legado)
```tsx
<section className="relative w-full bg-[#0A1E23] flex flex-col overflow-hidden">
  <div className="shrink-0 flex flex-col justify-start pt-10 pr-5 pb-10 pl-5 md:pt-[7rem] md:pr-16 md:pb-[15rem] md:pl-[15rem]">
    <span className="text-white/40 text-[13px] tracking-[.05em]">Eyebrow</span>
    <h2 className="text-[42px] md:text-[58px] font-black text-white">Titulo</h2>
  </div>
  {/* Contenido: cards, grids, etc. */}
</section>
```

### Aliados Plaque
```css
.aliados-plaque { background: #E0DBD0; padding: 5rem 8rem 0; }
.aliados-plaque-tag { font-size: .75rem; font-weight: 600; }
.aliados-plaque-quote { font-size: clamp(1.1rem, 2.4vw, 2.2rem); font-weight: 700; max-width: 680px; }
```

Con carrusel infinito CSS:
```tsx
<div className="aliados-carousel">
  <div className="aliados-track">
    {[...aliados, ...aliados].map(...)}  // Duplicar array para loop infinito
  </div>
</div>
```

## Sistema de Animaciones GSAP

### Patron general

Cada pagina tiene su propio componente de animaciones (o usa `GSAPAnimations` del home):

```tsx
// ComponenteAnimaciones.tsx
"use client";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function MiAnimaciones() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animaciones aqui usando data-anim selectors
      const els = document.querySelectorAll('[data-anim="mi-anim"]');
      // gsap.from / gsap.to con ScrollTrigger once: true
    });
    return () => ctx.kill();
  }, []);
  return null;
}
```

### Convenciones

- **`data-anim="nombre"`** en el JSX para marcar elementos animables
- **ScrollTrigger `once: true`** — animaciones se disparan una vez al entrar al viewport
- **`force3D: true`** en transforms pesados para GPU acceleration
- **`overflow-x-clip`** en secciones con animaciones que vienen desde fuera del viewport
- Stagger per-character: envolver palabras en `<span style={{ whiteSpace: "nowrap" }}>` para evitar word breaks

### TextureStrip como divisor

```tsx
<div className="texture-strip-wrap w-full pointer-events-none relative z-10"
     style={{ height: 122, marginBottom: "-1rem", marginTop: -61 }}>
  <TextureStrip style={{ display: "block" }} />
</div>
```

`marginTop: -61` = half-overlap con seccion superior (122px / 2).

## CSS: Tailwind + Global

El proyecto mezcla Tailwind utility classes con CSS global. **Regla importante**: cuando CSS global define `display` en una clase (ej. `.profiles-grid { display: grid }`), las clases responsive de Tailwind (`max-md:hidden`) no funcionan porque el CSS global tiene igual o mayor especificidad. Solucion: usar clases CSS propias con media queries y `!important`.

```css
/* Correcto — switching desktop/mobile con CSS propio */
.mi-desktop { /* estilos */ }
.mi-mobile { display: none; }
@media (max-width: 768px) {
  .mi-desktop { display: none !important; }
  .mi-mobile { display: block !important; }
}
```

## Responsive

- Breakpoint principal: `768px` (mobile/desktop)
- Mobile: grids colapsan a 1-2 columnas, carruseles horizontales reemplazan grids
- Carrusel infinito CSS: duplicar array + `translateX(-50%)` keyframe
- Tamaños de texto: usar `clamp()` para escalar fluidamente

## Componentes Reutilizables por Seccion

| Componente        | Clase CSS          | Uso                                     |
|-------------------|--------------------|------------------------------------------|
| Profiles grid     | `.profiles-grid`   | Grid de personas (comite, equipo)        |
| Profile card      | `.profile-card`    | Avatar circular + nombre + descripcion   |
| Flip card         | `.flip-card`       | Poster frontal + info reverso (hover flip) |
| Impulso card      | `.impulso-card-outer` | Tarjetas de convocatoria/plataformas  |
| CTA button        | `.cta-button`      | Boton de accion                          |
| Bento grid        | `.bento-card`      | Layout tipo bento (tall, wide variants)  |
| Timeline          | `.conv-timeline`   | Linea de tiempo vertical                 |

## FilmGrain

Overlay WebGL global (montado en `layout.tsx`). Aplica textura de grano de pelicula sobre todo el sitio. No requiere configuracion por pagina.

## Paginas Documentadas en Detalle

- **La Baja Inspira**: Ver `LA-BAJA-INSPIRA.md` para identidad visual, animaciones, y estructura completa.

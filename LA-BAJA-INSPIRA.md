# La Baja Inspira - Guia de Identidad Visual y Arquitectura

## Contexto del Proyecto

**FICC Los Cabos** (Festival Internacional de Cine y Creatividad de Los Cabos) es un sitio web construido con **Next.js App Router** (server + client components), **GSAP + ScrollTrigger** para animaciones, y **CSS global** (no Tailwind modules). La tipografia principal es `--font-printf` para headings y `--font-inter` para body.

**La Baja Inspira** (`/la-baja-inspira`) es la plataforma del festival dedicada al cine de no ficcion que explora biodiversidad, memoria y desarrollo de Baja California Sur.

---

## Paleta de Colores

| Token              | Hex       | Uso                                        |
|--------------------|-----------|--------------------------------------------|
| `--color-cream`    | `#F6EDDB` | Background principal de secciones claras   |
| `--color-navy`     | `#081722` | Texto sobre fondo claro                    |
| Dark bg            | `#0A1E23` | Secciones oscuras (hero, convocatoria, legado) |
| Card bg            | `#EDE6DC` | Fondo de tarjetas convocatoria             |
| Accent naranja     | `#FA6935` | Titulos de seccion (h2)                    |
| Dark text alt      | `#0A1E21` | Texto sobre tarjetas claras                |
| White/40           | `rgba(255,255,255,0.4)` | Eyebrow labels en secciones oscuras |

---

## Tipografia

- **Headings de seccion**: `font-printf`, uppercase, `font-weight: 800-900`, color naranja `#FA6935`
- **Body text**: `font-inter`, `font-weight: 300` para parrafos normales, `900` para texto destacado
- **Tamaños responsivos**: Uso de `clamp()` para headings (`clamp(2rem, 5vw, 3rem)` tipico)

---

## Componentes Compartidos

### `PageHero`
`src/components/PageHero.tsx`

Hero a pantalla completa (`h-screen`) con fondo `#0A1E23`. Contiene:
- `HeroTitle`: animacion GSAP de caracteres cayendo desde arriba (`y: -120`, stagger)
- `TextureStrip`: franja decorativa SVG posicionada en `top: 630px`

```tsx
<PageHero lines={["La Baja", "Inspira"]} />
```

### `TextureStrip`
`src/components/TextureStrip.tsx`

Franja SVG inline decorativa (viewBox `0 0 1728 122`) con motivos geometricos: chevrones, diamantes, cruces, circulos y anillos apilados. Colores:
- `#A3CDD8` — chevrones (azul suave)
- `#8FA79D` — diamantes (verde/sage)
- `#D97A5B` — cruces X (terracota)
- `#EDE6DC` — circulos grandes (crema)
- `#E3A97C` — anillos apilados (durazno)

**Animaciones GSAP integradas** (se activan con ScrollTrigger `once: true`):
1. **Stroke draw-on**: Trazos se dibujan progresivamente via `strokeDashoffset`
2. **Circulos pop-in**: `scale: 0.5 → 1` con `back.out(1.8)`
3. **Anillos sequential pop**: `scale: 0.2 → 1` con stagger `0.055s`
4. **Entrada general**: `opacity: 0 → 1`, `y: 10 → 0`

**Uso como divisor entre secciones:**
```tsx
<div className="texture-strip-wrap w-full pointer-events-none relative z-10"
     style={{ height: 122, marginBottom: "-1rem", marginTop: -61 }}>
  <TextureStrip style={{ display: "block" }} />
</div>
```
El `marginTop: -61` (mitad de 122px) crea efecto de half-overlap con la seccion superior. `marginBottom: -1rem` elimina gap con seccion inferior.

### `LBIAnimations`
`src/components/LBIAnimations.tsx`

Componente client-only (`return null`) que registra todas las animaciones GSAP de la pagina. Se monta al final del JSX:
```tsx
<LBIAnimations />
```

---

## Estructura de Secciones

### 1. Hero + Water Banner

```
PageHero → h-screen, bg #0A1E23, titulo animado
Water Banner → 30vh, imagen /images/water-bg.jpg, object-fit cover
```

### 2. Descripcion (lbi-desc-section)

**Layout**: Grid 2 columnas (`.lbi-desc-grid`), imagen izquierda + texto derecha. En mobile: 1 columna.

**Animaciones** (via `data-anim`):
- `lbi-image` — Imagen slide-in desde izquierda (`x: "-100%" → "0%"`)
- `lbi-typewriter` — Texto aparece caracter por caracter (`visibility: hidden → visible`, stagger `0.008s`)
- `lbi-svg-icon` — Iconos SVG: stroke draw + scale/rotation pop-in + pulse loop
- `lbi-list-item` — Items de lista entran staggered desde arriba con `rotateX: 70 → 0`

**CSS clave:**
```css
.lbi-desc-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}
@media (max-width: 768px) {
  .lbi-desc-grid { grid-template-columns: 1fr; }
}
```

### 3. TextureStrip Divisor

Half-overlap entre descripcion y convocatoria. Ver uso arriba.

### 4. Convocatoria 2026

**Patron visual**: Replica el layout de "Apoya a la Industria" del home — fondo oscuro `#0A1E23` con eyebrow label + heading grande + dos tarjetas sobre imagen de fondo.

**Estructura:**
```
Section bg: #0A1E23
  └── Heading area (pt-[7rem], pl-[15rem] en desktop)
      ├── Eyebrow: "Convocatoria" (text-white/40, 13-14px, tracking .05em)
      └── h2: "Convocatoria 2026" (58px, font-black, blanco)
          └── Per-character stagger animation (data-anim="lbi-stagger-char")
  └── Cards area (bg-image: cta-cactus.jpg, cover)
      ├── Card 1 (bg: Group 113.svg, repeat, animated zoom loop)
      └── Card 2 (bg: Group 115.svg, repeat, animated zoom loop)
```

**Tarjetas convocatoria:**
- Fondo `#EDE6DC` con patron SVG repetido (`Group 113.svg` / `Group 115.svg`)
- `backgroundSize` animado de `100% → 25%` en loop (yoyo, repeat -1)
- Tiempos diferentes por tarjeta para evitar efecto sincronizado ("respiracion")
- Card 1: duration 4s, delay 0.8s, ease sine.inOut
- Card 2: duration 6.5s, delay 1.5s, ease power1.inOut
- Entrada: slide desde `±100vw` con `power4.out`
- Ancho fijo: `width: 587px`, `maxWidth: 90vw`

**Animacion de titulo staggered:**
Los titulos de seccion usan per-character `<span>` con `data-anim="lbi-stagger-char"`. Cada palabra se envuelve en un span con `whiteSpace: "nowrap"` para evitar que las palabras se rompan a mitad:
```tsx
{"Convocatoria 2026".split(" ").map((word, wi) => (
  <span key={wi} style={{ display: "inline-block", whiteSpace: "nowrap", marginRight: "0.25em" }}>
    {word.split("").map((char, ci) => (
      <span key={ci} data-anim="lbi-stagger-char" style={{ display: "inline-block" }}>{char}</span>
    ))}
  </span>
))}
```

Animacion: `y: -60`, `rotateX: 90`, `opacity: 0` → valores normales, ease `back.out(2.5)`, stagger `0.03s`.

### 5. Comite de Seleccion

**Desktop**: Grid 4 columnas (`.profiles-grid .lbi-comite-desktop`), max-width 960px.
**Mobile**: Carrusel infinito CSS-only (`.lbi-comite-mobile`).

**Responsive switch:**
```css
.lbi-comite-mobile { display: none; }
.lbi-page #lbi-comite-section .section-text-inner {
  display: block !important;
  max-width: 960px;
}
@media (max-width: 768px) {
  .lbi-comite-desktop { display: none !important; }
  .lbi-comite-mobile { display: block !important; }
}
```

**Carrusel mobile**: CSS `translateX(-50%)` con contenido duplicado (`[...comite, ...comite]`):
```css
.comite-carousel { overflow: hidden; width: 100%; }
.comite-track {
  display: flex;
  gap: 1.5rem;
  animation: comiteScroll 18s linear infinite;
}
@keyframes comiteScroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
```

**Animaciones desktop:**
- `lbi-comite-desc` — Descripcion slide desde derecha (`x: "100vw"`)
- `lbi-comite-card` — Tarjetas slide desde lados alternados (`±100vw`), stagger `0.15s`
- Section usa `overflow-x-clip` para evitar scroll horizontal durante animaciones

### 6. Legado La Baja Inspira

**Patron visual**: Mismo que Convocatoria — fondo oscuro con gradiente:
```tsx
background: "linear-gradient(to bottom, #0A1E23 66.66%, transparent 66.66%)"
```
El tercio inferior muestra imagen de ballena (`lbi-hero-whale.jpg`) detras del grid de peliculas.

**Grid de peliculas**: `.legado-grid` — 4 columnas desktop, **2 columnas mobile**.
```css
.legado-grid {
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}
@media (max-width: 768px) {
  .lbi-page .legado-grid {
    grid-template-columns: repeat(2, 1fr) !important;
  }
}
```

**Tarjetas flip**: `.flip-card` → `.flip-card-inner` con front (poster) y back (info). Hover flip 180deg en Y.

**Animacion de entrada** (`lbi-legado-card`): Cada card entra desde una direccion diferente (alternando izquierda/derecha/arriba/abajo), con rotacion `±15deg` y `scale: 0.7`, stagger `0.08s`, ease `power4.out`.

### 7. Aliados

Carousel infinito con logos de aliados. Texto: "Nuestros aliados y patrocinadores" (mismo que home). Clase `.aliados-plaque`.

---

## Sistema de Animaciones (GSAP)

Todas las animaciones usan **ScrollTrigger con `once: true`** — se disparan una sola vez cuando el elemento entra al viewport.

### Data attributes y sus animaciones

| Atributo                    | Efecto                                                         |
|-----------------------------|----------------------------------------------------------------|
| `data-anim="lbi-image"`     | Slide-in desde izquierda (`x: -100% → 0%`)                   |
| `data-anim="lbi-typewriter"`| Typewriter caracter por caracter (visibility stagger 0.008s)  |
| `data-anim="lbi-svg-icon"`  | Stroke draw + scale pop + pulse loop                          |
| `data-anim="lbi-list-item"` | Stagger entrada desde arriba con rotateX 3D                   |
| `data-anim="lbi-stagger-char"` | Per-character drop con rotateX 90→0, back.out(2.5)         |
| `data-anim="lbi-conv-card"` | Slide desde ±100vw + bg zoom loop (backgroundSize 100%↔25%)  |
| `data-anim="lbi-legado-card"`| Entrada desde direcciones alternadas con rotacion             |
| `data-anim="lbi-comite-card"`| Slide desde lados alternados (±100vw)                        |
| `data-anim="lbi-comite-desc"`| Slide desde derecha (x: 100vw)                               |

### Notas tecnicas

- **`useLayoutEffect`**: LBIAnimations usa `useLayoutEffect` para ejecutar antes del primer paint
- **`gsap.context`**: Todas las animaciones se envuelven en context y se limpian con `ctx.kill()` en cleanup
- **`force3D: true`**: Usado en animaciones con transform para forzar GPU acceleration
- **`overflow-x-clip`**: Usado en secciones con animaciones desde fuera del viewport para evitar scroll horizontal
- **Typewriter**: Usa `visibility: hidden/visible` (no opacity) para evitar que el texto ocupe espacio invisible
- **Stagger char**: Los `<span>` por caracter deben ser `display: inline-block`. Las palabras se envuelven en spans con `whiteSpace: "nowrap"` para evitar saltos de palabra

---

## Assets

| Archivo                          | Uso                                            |
|----------------------------------|-------------------------------------------------|
| `/images/water-bg.jpg`           | Banner de agua bajo el hero                    |
| `/images/lbi-logo.png`           | Logo La Baja Inspira (seccion descripcion)     |
| `/images/cta-cactus.jpg`         | Fondo fotografico seccion Convocatoria         |
| `/images/el-festival/Group 113.svg` | Patron SVG fondo card 1 convocatoria        |
| `/images/el-festival/Group 115.svg` | Patron SVG fondo card 2 (fechas clave)      |
| `/images/lbi-hero-whale.jpg`     | Imagen ballena, tercio inferior Legado         |
| `/images/comite/*.{png,jpg,jpeg}`| Fotos miembros del comite                      |
| `/images/posters/*.{png,jpg,jpeg}`| Posters de peliculas seleccionadas            |

---

## Archivos Clave

| Archivo                                    | Proposito                                      |
|--------------------------------------------|-------------------------------------------------|
| `src/app/la-baja-inspira/page.tsx`         | Pagina principal (server component)             |
| `src/components/LBIAnimations.tsx`         | Todas las animaciones GSAP (client component)   |
| `src/components/TextureStrip.tsx`          | SVG decorativo con animaciones propias          |
| `src/components/PageHero.tsx`              | Hero reutilizable (todas las subpaginas)        |
| `src/components/HeroTitle.tsx`             | Titulo animado del hero                         |
| `src/app/globals.css`                      | Estilos globales (secciones LBI: lineas ~2040+) |

---

## Patrones de Diseno Recurrentes

### Seccion Oscura (Convocatoria / Legado)
```
bg: #0A1E23
  ├── Eyebrow (text-white/40, 13px, tracking .05em)
  ├── h2 (58px, font-black, white, per-char stagger anim)
  ├── Descripcion (text-white/70, clamp font)
  └── Contenido (cards/grid sobre imagen de fondo)
```

### Seccion Clara (Descripcion / Comite)
```
bg: var(--color-cream) / #F6EDDB
  ├── h2.section-heading (naranja #FA6935)
  ├── p (navy #081722, weight 300)
  └── Grid de contenido
```

### Divisor TextureStrip
Siempre con half-overlap: `marginTop: -61px` (mitad de 122px altura), `marginBottom: -1rem`, `z-10`, `pointer-events-none`.

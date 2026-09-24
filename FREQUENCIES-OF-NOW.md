# Frequencies of Now - Guia de Identidad Visual y Arquitectura

## Contexto

**Frequencies of Now** (`/frequencies-of-now`) es la plataforma internacional de FICCLosCabos dedicada a construir un archivo documental de la cultura y el ecosistema contemporaneo de la musica. Nace bajo la vision #BeyondTheScreen.

**Estado: OCULTA** hasta el lanzamiento (24 sep 2026). Existe y se ve terminada, pero:
- `robots: { index: false, follow: false }` en `metadata` (sin `canonical` ni `openGraph`)
- No esta en `sitemap.ts`
- No esta en `Navbar.tsx` ni en `/plataformas-de-impulso`

**Para publicarla**: quitar `robots` y agregar `alternates.canonical` + `openGraph` en `page.tsx`; sumar la ruta a `sitemap.ts`; agregar `{ label: "Frequencies of Now", href: "/frequencies-of-now" }` al dropdown "Plataformas de impulso" del Navbar; opcionalmente agregar tarjeta en `/plataformas-de-impulso`.

---

## Identidad visual (brandbook `Frequencies_of_Now_2026.pdf`)

Tokens propios, definidos como CSS vars en `.fon-page` (no son tokens del sitio):

| Var             | Hex       | Uso                                                        |
|-----------------|-----------|------------------------------------------------------------|
| `--fon-dark`    | `#0E1B23` | Fondo de toda la pagina (hero, mision, convocatoria, jurado, cierre) |
| `--fon-card`    | `#1E2A35` | Tarjetas sobre fondo oscuro (ejes, categorias)             |
| `--fon-cream`   | `#F2EDE4` | Fondo intro; texto sobre oscuro                            |
| `--fon-coral`   | `#FF4F5E` | Eyebrows, boton, numeros de ejes, ultima tarjeta timeline, hashtag |
| `--fon-lime`    | `#C4DA6D` | Tagline, titulos Musica/Cine documental, roles jurado, highlight cita |

**Tipografia** (brandbook: Arial Black titulos / Arial cuerpo):
- Titulos: `--fon-display` = `"Arial Black", ... , var(--font-inter)` con `font-weight: 900`. Clases `.fon-h2`, `.fon-h3`, `.fon-intro-title`, fechas, iniciales.
- Wordmark del logo: `--font-inter` 800 uppercase (el brandbook usa Inter Bold en el logotipo).
- Cuerpo: `--font-inter` (Neue Haas), coherente con el resto del sitio.

**Logo** `src/components/FoNLogo.tsx`: siete barras redondeadas (coral/lima, alturas 34-84-136-200-136-84-34) + wordmark. Variantes `horizontal` (hero) y `vertical` (cierre). Estatico en `/images/fon-logo.svg`.

**Grafico "pulso de frecuencia"** `FoNMisionDiagram.tsx`: 5 clusters de barras repetidos sobre los tres verbos de la mision.

**Tagline**: "Stories Behind the Sound." (lima, italica). Claim: "Music tells us who we were. Documentary shows us who we are."

**Tarjetas**: radio 14px, sin sombra. Timeline en tarjetas (ultima coral, texto oscuro) como en el brandbook.

---

## Estructura de Secciones

```
Hero (.fon-hero)    custom (no PageHero): video fon-loop + velo + FoNLogo horizontal + tagline + sub + #BeyondTheScreen
Intro (.fon-intro)  crema, .lbi-desc-grid: imagen fon-mixer.jpg | eyebrow + h2 + parrafos typewriter + cita con highlight lima
Mision (.fon-mision) oscuro: eyebrow + h2 stagger + lead + FoNMisionDiagram (pulso) + .fon-lenguajes (Musica | Cine documental)
TextureStrip        divisor half-overlap (marginTop -61)
Convocatoria (.fon-convocatoria) oscuro sobre fon-hero.jpg velado .86:
                    h2 + 2 parrafos + .fon-timeline (5 tarjetas) + FoNConvocatoriaCTA
                    + "Seis ejes de contenido" (.fon-ejes, 6 tarjetas numeradas) + "Categorias" (.fon-cats, 2 tarjetas)
Jurado (.lbi-jurado-section.fon-jurado) 10 filas alternadas; sin foto -> .fon-jurado-placeholder (monograma coral/lima)
Cierre (.fon-ig-band) FoNLogo vertical + tagline + claim + @frequenciesofnow + #BeyondTheScreen
Footer + <FoNAnimations />
```

### Timeline `.fon-timeline`
- `<ol>` grid de tarjetas: 5 col desktop, 3 col ≤1024px, 2 col ≤768px (ultima a ancho completo). Ultima tarjeta coral.

### Ejes y categorias
Datos en `page.tsx` (`ejes[]`, `categorias[]`), tomados del brandbook (El Archivo). Son contenido publico de la convocatoria; si no se quieren mostrar, borrar los dos bloques `.fon-sub-header` + lista en la seccion Convocatoria.

### CTA `FoNConvocatoriaCTA.tsx`
Cliente, resuelve fase con `useSyncExternalStore` (snapshot server = null, no renderiza en SSR).
- Sin hora de apertura (abierto desde el 24 sep 2026). `CLOSE_AT` 2026-10-30 23:59 (UTC-7).
- Antes de `CLOSE_AT`: "Aplica ahora" link a `FORM_URL` = https://filmfreeway.com/FICCLosCabos. Despues: boton `disabled` "Convocatoria cerrada 30 de octubre".
- Siempre visible: "Descargar convocatoria" -> Google Doc.

### Jurado
Datos en `page.tsx` (`jurado[]`: `name, role, ig, img?, desc`). Reusa `.lbi-jurado-*`. Fotos en `/images/comunidad/` (1:1). Sin `img` se pinta `.fon-jurado-placeholder` (monograma: fondo coral o lima + iniciales en oscuro); al recibir la foto solo hay que agregar la ruta.

Con foto hoy: Riveroll, Cuevas, Sayre. Sin foto: Guardiola, Talamantes, Zunshu, Naudert, Metta, Marymen, Lenin. El placeholder alterna coral / lima segun la fila.

---

## Animaciones (`FoNAnimations.tsx`, lazy via `FoNAnimationsLazy.tsx`)

Todas `ScrollTrigger once: true`, `force3D`. Con `prefers-reduced-motion` no se anima nada (estado final).

| `data-anim`             | Efecto                                                   |
|-------------------------|----------------------------------------------------------|
| `fon-logo-bar` (hero)   | Barras suben desde el centro (`scaleY 0->1`, back.out) y luego respiran en loop (yoyo, duraciones distintas) |
| `fon-hero-text`         | Fade up en secuencia tras el logo                        |
| `fon-image`             | Slide desde izquierda (`x: -100%`)                       |
| `fon-typewriter`        | Caracter por caracter (visibility, stagger .006)         |
| `fon-title` + `fon-stagger-char` | h2 per-char drop `rotateX 90->0`, `back.out(2.5)` |
| `fon-eyebrow`, `fon-desc` | Fade up                                                |
| `fon-pulse-bar`         | Barras del pulso `scaleY 0->1` stagger .03 desde la izquierda |
| `fon-signal-label`      | Fade up tras las barras                                  |
| `fon-quote`             | Fade up                                                  |
| `fon-lenguaje`          | Fade up stagger .18                                      |
| `fon-timeline-item`, `fon-eje`, `fon-cat` | Tarjetas fade up en grupo, stagger .08-.12 |
| `fon-cta-row`           | Fade up                                                  |
| `fon-jurado-row`        | Slide alternado ±60px                                    |
| `fon-ig`                | Fade up                                                  |

---

## Assets

| Archivo                              | Uso                                              |
|--------------------------------------|--------------------------------------------------|
| `/images/fon-loop.mp4` / `.webm`     | Video hero (1440x810, 24fps, 3.4s loop, ~0.5-0.7 MB). Generado desde `FoN_GIF.gif` con ffmpeg (`minterpolate=fps=24`) |
| `/images/fon-loop-poster.jpg`        | Poster del video                                 |
| `/images/fon-logo.svg`               | Barras del logo (estatico)                       |
| `/images/fon-mixer.jpg`              | Imagen intro                                     |
| `/images/fon-hero.jpg`               | Fondo velado de la seccion Convocatoria          |
| `/images/comunidad/*.jpg`            | Fotos jurado                                     |

Regenerar video desde el GIF:
```bash
ffmpeg -i FoN_GIF.gif -vf "minterpolate=fps=24:mi_mode=blend,scale=1440:-2,format=yuv420p" -c:v libx264 -preset slow -crf 31 -movflags +faststart -an public/images/fon-loop.mp4
ffmpeg -i FoN_GIF.gif -vf "minterpolate=fps=24:mi_mode=blend,scale=1440:-2,format=yuv420p" -c:v libvpx-vp9 -crf 40 -b:v 0 -row-mt 1 -an public/images/fon-loop.webm
```

## Archivos Clave

| Archivo                                      | Proposito                              |
|----------------------------------------------|----------------------------------------|
| `src/app/frequencies-of-now/page.tsx`        | Pagina (server component) + datos      |
| `src/components/FoNLogo.tsx`                 | Logo (barras + wordmark), `FoNBars`    |
| `src/components/FoNMisionDiagram.tsx`        | Pulso de frecuencia + labels           |
| `src/components/FoNConvocatoriaCTA.tsx`      | CTA por fecha                          |
| `src/components/FoNAnimations.tsx` / `Lazy`  | GSAP                                   |
| `src/app/globals.css`                        | Bloque `/* FREQUENCIES OF NOW */` al final |

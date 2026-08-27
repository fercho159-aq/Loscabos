import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import YouTubeFacade from "@/components/YouTubeFacade";
import EdicionAnimations from "@/components/EdicionAnimations";
import PersonalidadesAnimations from "@/components/PersonalidadesAnimations";
import { editionsData } from "@/lib/editions-data";
import { personalidadesPorAnio } from "@/lib/personalidades-data";
import { initials } from "@/lib/initials";

export const metadata: Metadata = {
  title: "Ediciones anteriores | #BeyondTheScreen",
  description:
    "En 2025, FICC Los Cabos trascendió la pantalla y se transformó en un ecosistema creativo multidisciplinario: cine, música, arte digital y experiencias inmersivas bajo el concepto #BeyondTheScreen.",
  keywords: [
    "FICC Los Cabos 2025",
    "Edición 2025",
    "#BeyondTheScreen",
    "Recap 2025",
    "Festival Internacional de Cine y Creatividad",
    "Cine música arte digital",
    "Experiencias inmersivas",
    "Ecosistema creativo",
    "Recap FICC",
  ],
  alternates: { canonical: "/edicion-2025" },
  openGraph: {
    title: "Ediciones anteriores | #BeyondTheScreen",
    description:
      "El año en que el cine trascendió la pantalla: música, arte digital y experiencias inmersivas en Los Cabos.",
    url: "/edicion-2025",
  },
};

// Las 4 disciplinas del ecosistema #BeyondTheScreen — el eje estructural de 2025.
const disciplinas = [
  { label: "Cine", accent: "var(--color-orange)" },
  { label: "Música", accent: "var(--color-acid)" },
  { label: "Arte digital", accent: "var(--color-blue)" },
  { label: "Experiencias inmersivas", accent: "var(--color-wine)" },
];

// 23 fotos optimizadas en /images/edicion-2025/foto-00.jpg … foto-22.jpg
const fotos = Array.from({ length: 23 }, (_, i) => `/images/edicion-2025/foto-${String(i).padStart(2, "0")}.jpg`);
const fotosRow1 = fotos.slice(0, 12);
const fotosRow2 = fotos.slice(12);

// Carteles de todas las ediciones pasadas (enlazan al detalle de cada una).
const carteles = editionsData;

export default function Edicion2025() {
  return (
    <>
      <Navbar />

      <div className="edicion-page">
        {/* ── HERO ── */}
        <PageHero
          lines={["Ediciones", "anteriores"]}
          subtitle="#BeyondTheScreen"
        />

        {/* ── CONCEPTO ── */}
        <section className="edicion-concepto">
          <div className="edicion-concepto-inner">
            <span data-anim="ed-eyebrow" className="edicion-eyebrow">
              El año en que el cine salió de la sala
            </span>
            <p data-anim="ed-lede" className="edicion-lede">
              En 2025, <strong>FICC Los Cabos</strong> trascendió la pantalla para transformarse en un
              ecosistema creativo multidisciplinario. Bajo el concepto{" "}
              <span className="edicion-hashtag-inline">#BeyondTheScreen</span>, integramos cine, música,
              arte digital y experiencias inmersivas, generando un valor mediático sin precedentes para
              la industria y nuestros aliados.
            </p>

          </div>
        </section>

        {/* ── VIDEO RECAP ── */}
        <section className="edicion-video-section">
          <div data-anim="ed-video" className="edicion-video-frame">
            <YouTubeFacade id="DjSLAT8RJr0" title="Recap FICC Los Cabos 2025" />
          </div>
        </section>

        {/* ── CARRUSEL FOTOS ── */}
        <section className="edicion-fotos-section">
          <div className="edicion-marquee" aria-label="Galería de fotos del festival 2025">
            <div className="edicion-marquee-row">
              {[...fotosRow1, ...fotosRow1].map((src, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={`r1-${i}`} src={src} alt="" aria-hidden="true" loading="lazy" decoding="async" className="edicion-foto" />
              ))}
            </div>
            <div className="edicion-marquee-row edicion-marquee-row--rev">
              {[...fotosRow2, ...fotosRow2].map((src, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={`r2-${i}`} src={src} alt="" aria-hidden="true" loading="lazy" decoding="async" className="edicion-foto" />
              ))}
            </div>
          </div>
        </section>

        {/* ── PERSONALIDADES POR AÑO — línea de tiempo con el año sticky ── */}
        <section className="pers-section">
          <div className="pers-intro">
            <span data-anim="pers-eyebrow" className="editions-index-eyebrow">
              Quiénes han pasado por aquí
            </span>
            <p data-anim="pers-lede" className="editions-index-lead">
              Actrices, actores, cineastas y músicos que han caminado Los Cabos desde
              2012. Una línea de tiempo del talento que ha hecho suyo el Festival.
            </p>
          </div>

          <div className="pers-timeline">
            {personalidadesPorAnio.map((anio) => (
              <div key={anio.year} className="pers-year-row">
                <div className="pers-year-col">
                  <div className="pers-year-sticky">
                    <Link
                      href={`/ediciones-anteriores/${anio.slug}`}
                      data-anim="pers-year"
                      className="pers-year"
                    >
                      {anio.year}
                    </Link>
                  </div>
                </div>

                <div className="pers-grid">
                  {anio.people.map((persona) => (
                    <article key={persona.name} data-anim="pers-card" className="pers-card">
                      <div className="pers-photo">
                        {persona.image ? (
                          <Image
                            src={persona.image}
                            alt={persona.alt ?? `${persona.name} en FICC Los Cabos ${anio.year}`}
                            fill
                            sizes="(max-width: 560px) 45vw, (max-width: 900px) 30vw, 200px"
                            className="pers-photo-img"
                          />
                        ) : (
                          <span className="pers-photo-initials" aria-hidden="true">
                            {initials(persona.name)}
                          </span>
                        )}
                      </div>
                      <h3 className="pers-name">{persona.name}</h3>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CARTELES EDICIONES PASADAS ── */}
        <section className="edicion-carteles-section">
          <div className="edicion-carteles-head">
            <h2 className="edicion-carteles-title">Nuestras ediciones anteriores</h2>
          </div>
          <div className="edicion-carteles-grid">
            {carteles.map((ed) => (
              <Link key={ed.slug} href={`/ediciones-anteriores/${ed.slug}`} className="edicion-cartel">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={ed.posterSrc}
                  alt={`Cartel oficial edición ${ed.year} — ${ed.title}`}
                  loading="lazy"
                  decoding="async"
                  className="edicion-cartel-img"
                />
                <span className="edicion-cartel-year">{ed.year}</span>
              </Link>
            ))}
          </div>
          <Link href="/ediciones-anteriores" className="edicion-carteles-cta">
            Ver todas las ediciones &rarr;
          </Link>
        </section>
      </div>

      <Footer />
      <EdicionAnimations />
      <PersonalidadesAnimations />
    </>
  );
}

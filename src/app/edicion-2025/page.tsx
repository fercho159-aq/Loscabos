import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import YouTubeFacade from "@/components/YouTubeFacade";
import EdicionAnimations from "@/components/EdicionAnimations";
import { editionsData } from "@/lib/editions-data";

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

        {/* ── CARTEL 2025 ── */}
        <section className="edicion-cartel25">
          <div className="edicion-cartel25-inner">
            <div data-anim="ed-cartel25" className="edicion-cartel25-poster">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/edicion-2025/cartel-2025.jpg"
                alt="Cartel oficial FICC Los Cabos 2025 — 13ª Edición, #BeyondTheScreen"
                loading="lazy"
                decoding="async"
                className="edicion-cartel25-img"
              />
            </div>
            <div className="edicion-cartel25-text">
              <span data-anim="ed-eyebrow" className="edicion-eyebrow edicion-eyebrow--accent">
                Cartel oficial 2025
              </span>
              <p data-anim="ed-lede" className="edicion-lede">
                <strong>FICCLosCabos 2025</strong> consolidó su evolución hacia una plataforma
                creativa capaz de generar visibilidad, conversación y valor mediático real para la
                industria del cine, el ecosistema creativo y nuestros socios aliados: instituciones
                públicas y privadas, centros de consumo, hoteles y marcas.
              </p>
            </div>
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
    </>
  );
}

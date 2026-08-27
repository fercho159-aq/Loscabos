import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import PersonalidadesAnimations from "@/components/PersonalidadesAnimations";
import { editionsData } from "@/lib/editions-data";
import { personalidadesPorAnio } from "@/lib/personalidades-data";
import { initials } from "@/lib/initials";

export const metadata: Metadata = {
  title: "Ediciones Anteriores | FICC Los Cabos",
  description:
    "Explora el archivo del Festival Internacional de Cine y Creatividad de Los Cabos. 12 ediciones de cine, industria y creatividad desde 2012.",
  alternates: { canonical: "/ediciones-anteriores" },
  openGraph: {
    title: "Ediciones Anteriores | FICC Los Cabos",
    description:
      "Explora el archivo del Festival Internacional de Cine y Creatividad de Los Cabos. 12 ediciones de cine, industria y creatividad desde 2012.",
    url: "/ediciones-anteriores",
  },
};

export default function EdicionesAnteriores() {
  return (
    <>
      <Navbar />

      <PageHero lines={["Ediciones", "Anteriores"]} />

      <section className="editions-index-section">
        <div className="editions-index-intro">
          <span className="editions-index-eyebrow">Archivo</span>
          <p className="editions-index-lead">
            Desde 2012, el Festival Internacional de Cine y Creatividad de Los
            Cabos ha sido escenario de encuentros entre el cine iberoamericano y
            la industria cinematográfica mundial. Aquí, el registro de cada
            edición.
          </p>
        </div>

        <div className="editions-grid">
          {editionsData.map((ed, i) => (
            <Link
              key={ed.slug}
              href={`/ediciones-anteriores/${ed.slug}`}
              className="edition-card"
            >
              <div className="edition-card-poster-wrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={ed.posterSrc}
                  alt={`Póster oficial edición ${ed.year} — ${ed.title}`}
                  loading={i < 4 ? "eager" : "lazy"}
                  decoding="async"
                  className="edition-card-poster"
                />
                <div className="edition-card-overlay">
                  <span className="edition-card-cta">Ver edición →</span>
                </div>
              </div>
              <div className="edition-card-info">
                <span className="edition-card-year">{ed.year}</span>
                <span className="edition-card-title">{ed.title}</span>
                <span className="edition-card-dates">{ed.dates}</span>
              </div>
            </Link>
          ))}
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

      <Footer />
      <PersonalidadesAnimations />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { editionsData } from "@/lib/editions-data";

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

      <Footer />
    </>
  );
}

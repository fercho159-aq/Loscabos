import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { editionsData } from "@/lib/editions-data";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return editionsData.map((ed) => ({ slug: ed.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const ed = editionsData.find((e) => e.slug === slug);
  if (!ed) return {};
  return {
    title: `Edición ${ed.year} — ${ed.title} | FICC Los Cabos`,
    description: ed.description.slice(0, 160),
    alternates: { canonical: `/ediciones-anteriores/${slug}` },
    openGraph: {
      title: `Edición ${ed.year} — ${ed.title} | FICC Los Cabos`,
      description: ed.description.slice(0, 160),
      url: `/ediciones-anteriores/${slug}`,
      images: [{ url: ed.posterSrc, width: 536, height: 792 }],
    },
  };
}

export default async function EdicionDetalle({ params }: Props) {
  const { slug } = await params;
  const ed = editionsData.find((e) => e.slug === slug);
  if (!ed) notFound();

  const idx = editionsData.findIndex((e) => e.slug === slug);
  const prev = editionsData[idx + 1] ?? null;
  const next = editionsData[idx - 1] ?? null;

  return (
    <>
      <Navbar />

      {/* Hero mínimo */}
      <section className="edition-detail-hero">
        <div className="edition-detail-hero-inner">
          <span className="edition-detail-eyebrow">Edición</span>
          <h1 className="edition-detail-year">{ed.year}</h1>
          <p className="edition-detail-dates">{ed.dates}</p>
        </div>
      </section>

      {/* Contenido principal */}
      <section className="edition-detail-body">
        <div className="edition-detail-grid">

          {/* Columna izquierda — poster */}
          <div className="edition-detail-poster-col">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={ed.posterSrc}
              alt={`Póster oficial edición ${ed.year} — ${ed.title}`}
              loading="eager"
              decoding="async"
              className="edition-detail-poster"
            />
            {(ed.downloadPosterLink || ed.downloadCatalogLink) && (
              <div className="edition-detail-downloads">
                {ed.downloadPosterLink && (
                  <a
                    href={ed.downloadPosterLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="edition-dl-btn"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    Descargar cartel
                  </a>
                )}
                {ed.downloadCatalogLink && (
                  <a
                    href={ed.downloadCatalogLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="edition-dl-btn edition-dl-btn--outline"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                    Ver catálogo
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Columna derecha — info */}
          <div className="edition-detail-info-col">
            <Link href="/ediciones-anteriores" className="edition-back-link">
              ← Todas las ediciones
            </Link>
            <h2 className="edition-detail-title">{ed.title}</h2>
            <p className="edition-detail-description">{ed.description}</p>
          </div>

        </div>

        {/* Navegación anterior / siguiente */}
        <nav className="edition-nav">
          {next ? (
            <Link href={`/ediciones-anteriores/${next.slug}`} className="edition-nav-item edition-nav-item--next">
              <span className="edition-nav-label">Edición siguiente</span>
              <span className="edition-nav-year">{next.year} →</span>
            </Link>
          ) : <div />}
          {prev ? (
            <Link href={`/ediciones-anteriores/${prev.slug}`} className="edition-nav-item edition-nav-item--prev">
              <span className="edition-nav-label">Edición anterior</span>
              <span className="edition-nav-year">← {prev.year}</span>
            </Link>
          ) : <div />}
        </nav>

      </section>

      <Footer />
    </>
  );
}

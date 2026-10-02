import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { categorias2026, peliculas2026, getProgramaPelicula2026, PREVIEW_FILM_BASE, PREVIEW_SELECTION_URL } from "@/lib/seleccion-oficial-2026-data";
import PeliculaPresentadaPor from "@/components/PeliculaPresentadaPor";
import { getTrailerEmbedUrl } from "@/lib/trailer-embed";
import styles from "./pelicula.module.css";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return peliculas2026.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const film = peliculas2026.find((item) => item.slug === slug);
  if (!film) return { robots: { index: false, follow: false } };
  const programa = getProgramaPelicula2026(film);
  const description = film.synopsis?.slice(0, 160) || `${film.title}, de ${film.directors}. ${programa?.title || "Selección oficial"} 2026 de FICC Los Cabos.`;
  const image = film.image || film.poster;
  return {
    title: `${film.title} | ${programa?.title || "Selección oficial"} 2026 FICC Los Cabos`,
    description,
    alternates: { canonical: `${PREVIEW_FILM_BASE}/${film.slug}` },
    robots: { index: false, follow: false },
    openGraph: { title: film.title, description, url: `${PREVIEW_FILM_BASE}/${film.slug}`, ...(image ? { images: [{ url: image }] } : {}) },
  };
}

export default async function PeliculaDetalle({ params }: Props) {
  const { slug } = await params;
  const film = peliculas2026.find((item) => item.slug === slug);
  if (!film) notFound();
  const category = categorias2026.find((item) => item.id === film.categoryId);
  const programa = getProgramaPelicula2026(film);
  const catalogUrl = programa?.href || PREVIEW_SELECTION_URL;
  const catalogTitle = programa?.title || "Selección oficial";
  const trailer = getTrailerEmbedUrl(film.trailerUrl);
  const trailerLabel = film.trailerLabel || "Tráiler";
  const navigationFilms = programa
    ? peliculas2026.filter((item) => programa.categoryIds.includes(item.categoryId))
    : peliculas2026;
  const index = navigationFilms.findIndex((item) => item.slug === slug);
  const previous = navigationFilms[index - 1];
  const next = navigationFilms[index + 1];

  return (
    <>
      <Navbar />
      <main className={styles.page} style={{ "--film-accent": category?.color || "#FA6935" } as CSSProperties}>
        <header className={styles.header}>
          <Link href={catalogUrl} className={styles.back}>← {catalogTitle} 2026</Link>
          <p className={styles.category}>{category?.label}</p>
          <h1>{film.title}</h1>
          <p className={styles.directors}>Dir. {film.directors}</p>
        </header>

        {film.image && (
          <figure className={styles.still}>
            <Image src={film.image} alt={`Still de ${film.title}`} fill sizes="(max-width: 1440px) 100vw, 1440px" priority unoptimized={film.image.startsWith("http")} />
          </figure>
        )}

        <div className={styles.content}>
          <aside className={styles.sidebar} aria-label="Ficha técnica">
            <dl className={styles.facts}>
              <div><dt>Dirección</dt><dd>{film.directors}</dd></div>
              <div><dt>País</dt><dd>{film.countries}</dd></div>
              <div><dt>Año</dt><dd>{film.year}</dd></div>
              <div><dt>Duración</dt><dd>{film.duration}</dd></div>
            </dl>
          </aside>
          <div className={styles.synopsis}>
            <h2>Sinopsis</h2>
            <p>{film.synopsis || "Sinopsis por confirmar."}</p>
            {film.presentedBy && <PeliculaPresentadaPor name={film.presentedBy} />}
            {!trailer && <p className={styles.unavailable}>Tráiler no disponible.</p>}
          </div>
        </div>

        {trailer && (
          <section id="trailer-title" className={styles.trailerSection} aria-label={`${trailerLabel} de ${film.title}`}>
            {trailerLabel !== "Clip" && <h2>{trailerLabel}</h2>}
            <div className={styles.trailerPlayer}>
              <iframe
                src={trailer}
                title={`${trailerLabel} de ${film.title}`}
                loading="lazy"
                allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </section>
        )}

        {film.poster && (
          <section className={styles.posterSection} aria-label={`Póster de ${film.title}`}>
            <div className={styles.poster}>
              <Image src={film.poster} alt={`Póster de ${film.title}`} fill sizes="(max-width: 600px) 90vw, 520px" unoptimized={film.poster.startsWith("http")} />
            </div>
          </section>
        )}

        <nav className={styles.navigation} aria-label="Otras películas">
          {previous ? <Link href={`${PREVIEW_FILM_BASE}/${previous.slug}`}><span>← Anterior</span><strong>{previous.title}</strong></Link> : <span />}
          {next ? <Link href={`${PREVIEW_FILM_BASE}/${next.slug}`} className={styles.next}><span>Siguiente →</span><strong>{next.title}</strong></Link> : <span />}
        </nav>
        <Link href={catalogUrl} className={styles.back}>← Volver a {catalogTitle}</Link>
      </main>
      <Footer />
    </>
  );
}

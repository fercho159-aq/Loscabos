import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { categorias2026, peliculas2026, programasPublicos2026, getProgramaPelicula2026, PREVIEW_FILM_BASE, PREVIEW_SELECTION_URL, PUBLIC_FILM_BASE, type Pelicula2026 } from "@/lib/seleccion-oficial-2026-data";
import PeliculaPresentadaPor from "@/components/PeliculaPresentadaPor";
import { getTrailerEmbedUrl } from "@/lib/trailer-embed";
import styles from "./PeliculaDetalle2026.module.css";

export default function PeliculaDetalle2026({ film, preview = true }: { film: Pelicula2026; preview?: boolean }) {
  const filmBase = preview ? PREVIEW_FILM_BASE : PUBLIC_FILM_BASE;
  const category = categorias2026.find((item) => item.id === film.categoryId);
  const programa = preview ? getProgramaPelicula2026(film) : programasPublicos2026.find((item) => item.categoryIds.includes(film.categoryId));
  const catalogUrl = programa?.href || PREVIEW_SELECTION_URL;
  const catalogTitle = programa?.title || "Selección oficial";
  const trailer = getTrailerEmbedUrl(film.trailerUrl);
  const trailerLabel = film.trailerLabel || "Tráiler";
  const navigationFilms = programa
    ? peliculas2026.filter((item) => programa.categoryIds.includes(item.categoryId))
    : peliculas2026;
  const index = navigationFilms.findIndex((item) => item.slug === film.slug);
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
          {previous ? <Link href={`${filmBase}/${previous.slug}`}><span>← Anterior</span><strong>{previous.title}</strong></Link> : <span />}
          {next ? <Link href={`${filmBase}/${next.slug}`} className={styles.next}><span>Siguiente →</span><strong>{next.title}</strong></Link> : <span />}
        </nav>
        <Link href={catalogUrl} className={styles.back}>← Volver a {catalogTitle}</Link>
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { categorias2026, peliculas2026, PREVIEW_FILM_BASE } from "@/lib/seleccion-oficial-2026-data";
import styles from "./pelicula.module.css";

type Props = { params: Promise<{ slug: string }> };
const catalogUrl = "/programacion-2026-preview#seleccion-oficial";

export function generateStaticParams() {
  return peliculas2026.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const film = peliculas2026.find((item) => item.slug === slug);
  if (!film) return { robots: { index: false, follow: false } };
  const description = film.synopsis?.slice(0, 160) || `${film.title}, de ${film.directors}. Selección Oficial 2026 de FICC Los Cabos.`;
  const image = film.image || film.poster;
  return {
    title: `${film.title} | Selección Oficial 2026 FICC Los Cabos`,
    description,
    alternates: { canonical: `${PREVIEW_FILM_BASE}/${film.slug}` },
    robots: { index: false, follow: false },
    openGraph: { title: film.title, description, url: `${PREVIEW_FILM_BASE}/${film.slug}`, ...(image ? { images: [{ url: image }] } : {}) },
  };
}

function safeTrailer(value?: string) {
  if (!value) return undefined;
  try {
    const url = new URL(value.trim());
    return ["https:", "http:"].includes(url.protocol) ? url.href : undefined;
  } catch { return undefined; }
}

export default async function PeliculaDetalle({ params }: Props) {
  const { slug } = await params;
  const film = peliculas2026.find((item) => item.slug === slug);
  if (!film) notFound();
  const category = categorias2026.find((item) => item.id === film.categoryId);
  const trailer = safeTrailer(film.trailerUrl);
  const index = peliculas2026.findIndex((item) => item.slug === slug);
  const previous = peliculas2026[index - 1];
  const next = peliculas2026[index + 1];

  return (
    <>
      <Navbar />
      <main className={styles.page} style={{ "--film-accent": category?.color || "#FA6935" } as CSSProperties}>
        <header className={styles.header}>
          <Link href={catalogUrl} className={styles.back}>← Selección oficial 2026</Link>
          <p className={styles.category}>{category?.label}</p>
          <h1>{film.title}</h1>
          <p className={styles.directors}>Dir. {film.directors}</p>
        </header>

        {film.image && (
          <figure className={styles.still}>
            <Image src={film.image} alt={`Imagen de ${film.title}`} fill sizes="(max-width: 1440px) 100vw, 1440px" priority unoptimized={film.image.startsWith("http")} />
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
            {trailer ? (
              <a href={trailer} target="_blank" rel="noopener noreferrer" className={styles.trailer}>{trailer.includes("/folders/") ? "Ver material del tráiler" : "Ver tráiler"} <span aria-hidden="true">↗</span><span className={styles.srOnly}> (se abre en otra pestaña)</span></a>
            ) : <p className={styles.unavailable}>Tráiler no disponible.</p>}
          </div>
        </div>

        {film.poster && (
          <section className={styles.posterSection} aria-labelledby="poster-title">
            <h2 id="poster-title">Póster</h2>
            <div className={styles.poster}>
              <Image src={film.poster} alt={`Póster de ${film.title}`} fill sizes="(max-width: 600px) 90vw, 520px" unoptimized={film.poster.startsWith("http")} />
            </div>
          </section>
        )}

        <nav className={styles.navigation} aria-label="Otras películas">
          {previous ? <Link href={`${PREVIEW_FILM_BASE}/${previous.slug}`}><span>← Anterior</span><strong>{previous.title}</strong></Link> : <span />}
          {next ? <Link href={`${PREVIEW_FILM_BASE}/${next.slug}`} className={styles.next}><span>Siguiente →</span><strong>{next.title}</strong></Link> : <span />}
        </nav>
        <Link href={catalogUrl} className={styles.back}>← Volver a todas las películas</Link>
      </main>
      <Footer />
    </>
  );
}

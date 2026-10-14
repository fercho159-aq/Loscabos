import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { peliculas2026, getProgramaPelicula2026, PREVIEW_FILM_BASE } from "@/lib/seleccion-oficial-2026-data";
import PeliculaDetalle2026 from "@/components/PeliculaDetalle2026";

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
  return <PeliculaDetalle2026 film={film} />;
}

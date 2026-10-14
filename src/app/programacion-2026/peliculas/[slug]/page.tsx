import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { peliculasPublicas2026, getProgramaPelicula2026, PUBLIC_FILM_BASE } from "@/lib/seleccion-oficial-2026-data";
import PeliculaDetalle2026 from "@/components/PeliculaDetalle2026";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return peliculasPublicas2026.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const film = peliculasPublicas2026.find((item) => item.slug === slug);
  if (!film) notFound();
  const programa = getProgramaPelicula2026(film);
  const description = film.synopsis?.slice(0, 160);
  return {
    title: `${film.title} | ${programa?.title} 2026 FICC Los Cabos`,
    description,
    alternates: { canonical: `${PUBLIC_FILM_BASE}/${film.slug}` },
    openGraph: {
      title: film.title,
      description,
      url: `${PUBLIC_FILM_BASE}/${film.slug}`,
      ...(film.image ? { images: [{ url: film.image }] } : {}),
    },
  };
}

export default async function PeliculaPublica({ params }: Props) {
  const { slug } = await params;
  const film = peliculasPublicas2026.find((item) => item.slug === slug);
  if (!film) notFound();
  return <PeliculaDetalle2026 film={film} preview={false} />;
}

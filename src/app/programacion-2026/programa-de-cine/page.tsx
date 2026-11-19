import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Programacion2026Tabs from "@/components/Programacion2026Tabs";
import ProgramaCine2026, { type DiaLigado } from "@/components/ProgramaCine2026";
import { programaCine2026 } from "@/lib/programa-cine-2026-data";
import { peliculasPublicas2026, PUBLIC_FILM_BASE } from "@/lib/seleccion-oficial-2026-data";
import { eventosVisibles2026 } from "@/lib/programacion-2026-data";

const description = "Horarios y salas de todas las proyecciones de FICC Los Cabos 2026, del 10 al 13 de diciembre.";

export const metadata: Metadata = {
  title: "Programa de cine 2026 | FICC Los Cabos",
  description,
  alternates: { canonical: "/programacion-2026/programa-de-cine" },
  openGraph: { title: "Programa de cine 2026 | FICC Los Cabos", description, url: "/programacion-2026/programa-de-cine" },
};

// Revalida como las fichas de eventos, que se publican con `publishAt`.
export const revalidate = 60;

const norm = (s: string) => s.replace(/ \+ Q&A$/, "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();

export default function ProgramaDeCinePage() {
  // Solo se ligan fichas públicas; las demás quedan como texto hasta liberarse.
  const peliculas = new Map(peliculasPublicas2026.map((film) => [norm(film.title), `${PUBLIC_FILM_BASE}/${film.slug}`]));
  const eventos = new Set(eventosVisibles2026().map((ev) => ev.slug));
  const href = (title: string, evento?: string) => (evento ? (eventos.has(evento) ? `/programacion-2026/${evento}` : undefined) : peliculas.get(norm(title)));

  const dias: DiaLigado[] = programaCine2026.map((dia) => ({
    ...dia,
    funciones: dia.funciones.map(({ evento, films, ...fn }) => ({
      ...fn,
      href: href(fn.title, evento),
      films: films?.map((film) => ({ ...film, href: href(film.title) })),
    })),
  }));

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "4rem", background: "#D9D4CD" }}>
        <Programacion2026Tabs active="programa-de-cine" preview={false} gray />
        <ProgramaCine2026 dias={dias} />
      </main>
      <Footer />
    </>
  );
}

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Programacion2026Tabs from "@/components/Programacion2026Tabs";
import ProgramaCine2026, { type DiaLigado } from "@/components/ProgramaCine2026";
import { programaCine2026 } from "@/lib/programa-cine-2026-data";
import { peliculasPublicas2026, PUBLIC_FILM_BASE } from "@/lib/seleccion-oficial-2026-data";
import { eventosVisibles2026 } from "@/lib/programacion-2026-data";

const norm = (s: string) => s.replace(/ \+ Q&A$/, "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();

// Compartida por la página pública y su preview (que Mafer revisa antes de publicar).
export default function ProgramaCine2026Pagina() {
  // Solo se ligan fichas públicas; las demás quedan como texto hasta liberarse.
  const peliculas = new Map(peliculasPublicas2026.map((film) => [norm(film.title), `${PUBLIC_FILM_BASE}/${film.slug}`]));
  const slugs = new Set(peliculasPublicas2026.map((film) => film.slug));
  const eventos = new Set(eventosVisibles2026().map((ev) => ev.slug));
  const href = (title: string, evento?: string, pelicula?: string) => {
    if (evento) return eventos.has(evento) ? `/programacion-2026/${evento}` : undefined;
    if (pelicula) return slugs.has(pelicula) ? `${PUBLIC_FILM_BASE}/${pelicula}` : undefined;
    return peliculas.get(norm(title));
  };

  const dias: DiaLigado[] = programaCine2026.map((dia) => ({
    ...dia,
    funciones: dia.funciones.map(({ evento, pelicula, films, ...fn }) => ({
      ...fn,
      href: href(fn.title, evento, pelicula),
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

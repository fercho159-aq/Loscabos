import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ComunidadAnimations from "@/components/ComunidadAnimations";

export const metadata: Metadata = {
  title: "Comunidad FICC | Quienes la integran",
  description:
    "La comunidad del FICC Los Cabos: cineastas, artistas, músicos y líderes de opinión que impulsan el cine, la cultura y las industrias creativas. Comité, jurados y community leaders 2026.",
  keywords: [
    "Comunidad FICC",
    "Comunidad FICC Los Cabos",
    "FICC Los Cabos 2026",
    "Comité FICC",
    "Comité de selección FICC",
    "Jurado La Baja Inspira",
    "Fondo Fílmico Gabriel Figueroa",
    "Community leaders FICC",
    "Cineastas",
    "Industrias creativas",
    "FICCLosCabos2026",
  ],
  alternates: { canonical: "/comunidad" },
  openGraph: {
    title: "Comunidad FICC | Quienes la integran",
    description:
      "Cineastas, artistas, músicos y líderes que impulsan el cine, la cultura y las industrias creativas.",
    url: "/comunidad",
  },
};

/* ──────────────────────────────────────────────────────────────
   COMUNIDAD FICC — directorio de personas, agrupado por afiliación.

   FOTOS (pendientes — el cliente las envía): formato 1:1 (cuadradas),
   van en /public/images/comunidad/ con el slug del nombre + .jpg
   (ej. juan-patricio-riveroll.jpg). Sin `image` la tarjeta muestra un
   placeholder con las iniciales.

   `tbc: true` → "Pendiente" / "Falta información": NO se renderiza aún,
   queda en los datos para activar quitando `tbc`.

   NOTA estructura (confirmar con cliente):
   - "La Baja Inspira (no subir título)" → interpretado como: NO repetir un
     rol por persona en ese grupo (el encabezado ya lo dice). El encabezado
     del grupo sí se muestra; si tampoco debe ir, poner hideHeading: true.
   - Sin grupo / falta info (no renderizados): Chef Guillermo (Suelo Sur),
     Dolores Heredia.
   ────────────────────────────────────────────────────────────── */

type Person = {
  name: string;
  /** Rol/cargo bajo el nombre. Omitir para grupos donde el encabezado basta. */
  role?: string;
  /** Ruta en /images/comunidad (1:1). Sin ella → placeholder con iniciales. */
  image?: string;
  /** Pendiente / falta información: no se renderiza aún. */
  tbc?: boolean;
};

type Group = {
  id: string;
  title: string;
  /** Bajada opcional del grupo. */
  blurb?: string;
  accent: string;
  /** No mostrar rol por persona (heredan el del grupo). */
  hideRole?: boolean;
  people: Person[];
};

const groups: Group[] = [
  {
    id: "comite-ficc",
    title: "Comité FICC Los Cabos",
    blurb: "Quienes seleccionan, programan y dan forma al festival.",
    accent: "var(--color-teal)",
    people: [
      { name: "Juan Patricio Riveroll", role: "Comité de selección", image: "/images/comite/juan-patricio-riveroll.jpg" },
      { name: "Iván Carrillo", role: "Comité de selección", image: "/images/comite/ivan-carrillo.png" },
      { name: "Salvador Amores", role: "Coordinación de programación", image: "/images/comite/salvador-amores.png" },
      { name: "Johanna Murillo", role: "Comité FICC Los Cabos", tbc: true },
    ],
  },
  {
    id: "la-baja-inspira",
    title: "La Baja Inspira",
    blurb: "Comité y voces que acompañan la plataforma.",
    accent: "var(--color-blue)",
    hideRole: true,
    people: [
      { name: "Alonso Rodríguez", image: "/images/jurado/alonso-rodriguez.jpg" },
      { name: "Hans Herrmann", image: "/images/jurado/hans-herrmann.jpg" },
      { name: "Jerónimo Prieto", image: "/images/jurado/jeronimo-prieto.jpg" },
      { name: "Octavio Aburto", image: "/images/jurado/octavio-aburto.jpg" },
      { name: "Alejandro Rivas", image: "/images/jurado/alejandro-rivas.jpg" },
      { name: "Francisco Laresgoiti", image: "/images/jurado/francisco-laresgoiti.png" },
      { name: "Inti Cordera", image: "/images/jurado/inti-cordera.jpg" },
      { name: "Dra. Micheline Cariño", image: "/images/jurado/micheline-carino.jpg" },
    ],
  },
  {
    id: "ffgf",
    title: "Fondo Fílmico Gabriel Figueroa",
    blurb: "Jurado del FFGF.",
    accent: "var(--color-wine)",
    hideRole: true,
    people: [
      { name: "Elena Fortes", image: "/images/comunidad/elena-fortes.jpg" },
      { name: "Juan Pablo Bastarrachea", tbc: true },
      { name: "Bruno Santamaría", tbc: true },
      { name: "Ximena Urrutia Partida", tbc: true },
      { name: "Michel Lipkes Leduc", tbc: true },
      { name: "Nico Celis", tbc: true },
    ],
  },
  {
    id: "community-leaders",
    title: "Community Leaders",
    blurb: "Comité de Convocatoria.",
    accent: "var(--color-orange)",
    hideRole: true,
    people: [
      { name: "Anamaria Sayre", image: "/images/comunidad/anamaria-sayre.jpg" },
      { name: "Adolfo Margulis", image: "/images/comunidad/adolfo-margulis.jpg" },
      { name: "Mariana Arriaga", image: "/images/comunidad/mariana-arriaga.jpg" },
      { name: "Mar Prieto", image: "/images/comunidad/mar-prieto.jpg" },
      { name: "Ximena Lamadrid", image: "/images/comunidad/ximena-lamadrid.jpg" },
      { name: "David Zonana", image: "/images/comunidad/david-zonana.jpg" },
      { name: "Damián Romero", image: "/images/comunidad/damian-romero.jpg" },
      { name: "Mario Escobar", tbc: true },
    ],
  },
];

// Directorio plano (sin títulos de grupo): cada persona conserva su afiliación
// como subtítulo, derivada de su rol o del nombre del grupo al que pertenece.
const people = groups.flatMap((group) =>
  group.people
    .filter((p) => !p.tbc)
    .map((p) => ({ ...p, affiliation: p.role ?? group.title }))
);

function initials(name: string) {
  const parts = name
    .replace(/^(Dra?\.|Dr\.|Chef)\s+/i, "")
    .split(/\s+/)
    .filter(Boolean);
  return ((parts[0]?.[0] ?? "") + (parts[1]?.[0] ?? "")).toUpperCase();
}

export default function Comunidad() {
  return (
    <>
      <Navbar />

      <div className="comunidad-page">
        {/* ── BANNER ── */}
        <PageHero
          lines={["Comunidad", "FICC"]}
          overlay
          bgVideo={{
            mp4: "/videos/comunidad-banner.mp4",
            webm: "/videos/comunidad-banner.webm",
            poster: "/images/comunidad/banner-poster.jpg",
          }}
        />

        {/* ── INTRO ── */}
        <section className="comunidad-intro">
          <div className="comunidad-intro-inner">
            <p data-anim="comu-lede" className="comunidad-lede">
              En 2026, el FICC volverá a convertirse en punto de encuentro para quienes impulsan el
              cine, la cultura y las industrias creativas. Cineastas, artistas, músicos y líderes de
              opinión compartirán un mismo espacio, generando conversaciones y conexiones que
              difícilmente ocurren en otro lugar.
            </p>
            <p data-anim="comu-hashtag" className="comunidad-hashtag">
              #FICCLosCabos2026
            </p>
          </div>
        </section>

        {/* ── DIRECTORIO ── un solo grid, sin títulos de grupo ── */}
        <section className="comunidad-groups">
          <div className="cm-grid">
            {people.map((person) => (
              <article key={person.name} data-anim="comu-card" className="cm-card">
                <div className="cm-photo">
                  {person.image ? (
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      sizes="(max-width: 560px) 45vw, (max-width: 900px) 30vw, 200px"
                      className="cm-photo-img"
                    />
                  ) : (
                    <span className="cm-photo-initials" aria-hidden="true">
                      {initials(person.name)}
                    </span>
                  )}
                </div>
                <h3 className="cm-name">{person.name}</h3>
                {person.affiliation && <p className="cm-role">{person.affiliation}</p>}
              </article>
            ))}
          </div>
        </section>
      </div>

      <Footer />
      <ComunidadAnimations />
    </>
  );
}

import type { Metadata } from "next";
import type { CSSProperties } from "react";
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

   ESTRUCTURA: directorio agrupado por afiliación. Cada grupo muestra su
   título; separación entre grupos solo con espacio. El rol por persona
   solo se pinta si la persona lo trae (`role`). Grupos sin personas
   visibles (todas tbc) no se renderizan — hoy: Comité FICC (Johanna tbc)
   y Community Leaders.
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
  accent: string;
  people: Person[];
};

const groups: Group[] = [
  {
    id: "comite-ficc",
    title: "Comité FICC Los Cabos",
    accent: "var(--color-teal)",
    people: [
      { name: "Johanna Murillo", role: "Comité FICC Los Cabos", tbc: true },
    ],
  },
  {
    id: "la-baja-inspira",
    title: "La Baja Inspira",
    accent: "var(--color-blue)",
    people: [
      { name: "Juan Patricio Riveroll", role: "Comité de selección", image: "/images/comunidad/juan-patricio-riveroll.jpg" },
      { name: "Iván Carrillo", role: "Comité de selección", image: "/images/comunidad/ivan-carrillo.jpg" },
      { name: "Alonso Rodríguez", image: "/images/comunidad/alonso-rodriguez.jpg" },
      { name: "Hans Herrmann", image: "/images/comunidad/hans-herrmann.jpg" },
      { name: "Jerónimo Prieto", image: "/images/comunidad/jeronimo-prieto.jpg" },
      { name: "Octavio Aburto", image: "/images/comunidad/octavio-aburto.jpg" },
      { name: "Alejandro Rivas", image: "/images/comunidad/alejandro-rivas.jpg" },
      { name: "Francisco Laresgoiti", image: "/images/comunidad/francisco-laresgoiti.jpg" },
      { name: "Inti Cordera", image: "/images/comunidad/inti-cordera.jpg" },
      { name: "Dra. Micheline Cariño", image: "/images/comunidad/micheline-carino.jpg" },
      { name: "Chef Guillermo", role: "Suelo Sur", tbc: true },
      { name: "Dolores Heredia", tbc: true },
    ],
  },
  {
    id: "programa-de-cine",
    title: "Programa de cine",
    accent: "var(--color-teal)",
    people: [
      { name: "Salvador Amores", role: "Coordinador de programación", image: "/images/comunidad/salvador-amores.jpg" },
    ],
  },
  {
    id: "ffgf",
    title: "Fondo Fílmico Gabriel Figueroa",
    accent: "var(--color-wine)",
    people: [
      { name: "Elena Fortes", image: "/images/comunidad/elena-fortes.jpg" },
      { name: "Juan Pablo Bastarrachea", tbc: true },
      { name: "Bruno Santamaría Razo", tbc: true },
      { name: "Ximena Urrutia Partida", tbc: true },
      { name: "Michel Lipkes Leduc", tbc: true },
      { name: "Nico Celis", image: "/images/comunidad/nico-celis.jpg" },
    ],
  },
  {
    id: "voces-ficc",
    title: "Voces FICC",
    accent: "var(--color-orange)",
    people: [
      { name: "Adolfo Margulis", image: "/images/comunidad/adolfo-margulis.jpg" },
      { name: "Mariana Arriaga", image: "/images/comunidad/mariana-arriaga.jpg" },
      { name: "Mar Prieto", image: "/images/comunidad/mar-prieto.jpg" },
      { name: "Ximena Lamadrid", image: "/images/comunidad/ximena-lamadrid.jpg" },
      { name: "David Zonana", image: "/images/comunidad/david-zonana.jpg" },
      { name: "Damián Romero", image: "/images/comunidad/damian-romero.jpg" },
      { name: "Anamaria Sayre", image: "/images/comunidad/anamaria-sayre.jpg" },
      { name: "Romina Sacre", image: "/images/comunidad/romina-sacre.jpg" },
    ],
  },
  {
    id: "community-leaders",
    title: "Community Leaders",
    accent: "var(--color-acid)",
    people: [
      { name: "Mario Escobar", tbc: true },
    ],
  },
];

// Grupos con al menos una persona visible (los que son todo `tbc` no se pintan).
const visibleGroups = groups.filter((group) => group.people.some((p) => !p.tbc));

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
          </div>
        </section>

        {/* ── DIRECTORIO ── agrupado por afiliación, con título editorial y
            espacio entre grupos ── */}
        <section className="comunidad-groups">
          {visibleGroups.map((group) => {
            const visible = group.people.filter((p) => !p.tbc);
            return (
                <div
                  key={group.id}
                  className="cm-group"
                  style={{ "--cat": group.accent } as CSSProperties}
                >
                  <header data-anim="comu-group-head" className="cm-group-head">
                    <h2 className="cm-group-title">{group.title}</h2>
                  </header>
                  <div className="cm-grid">
                  {visible.map((person) => (
                    <article key={person.name} data-anim="comu-card" className="cm-card">
                      <div className="cm-photo">
                        {person.image ? (
                          <Image
                            src={person.image}
                            alt={person.name}
                            fill
                            sizes="(max-width: 560px) 45vw, (max-width: 820px) 30vw, 240px"
                            className="cm-photo-img"
                          />
                        ) : (
                          <span className="cm-photo-initials" aria-hidden="true">
                            {initials(person.name)}
                          </span>
                        )}
                      </div>
                      <h3 className="cm-name">{person.name}</h3>
                      {person.role && (
                        <p className="cm-role">{person.role}</p>
                      )}
                    </article>
                  ))}
                  </div>
                </div>
            );
          })}
        </section>
      </div>

      <Footer />
      <ComunidadAnimations />
    </>
  );
}

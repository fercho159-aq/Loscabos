import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ComunidadAnimations from "@/components/ComunidadAnimations";
import { initials } from "@/lib/initials";

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

   FOTOS: formato 1:1 (cuadradas), van en /public/images/comunidad/ con
   el slug del nombre + .jpg (ej. juan-patricio-riveroll.jpg).
   Sin `image` la persona NO se renderiza (regla del cliente: solo
   aparece quien tiene foto).

   `tbc: true` → "Pendiente" / "Falta información": NO se renderiza aún,
   queda en los datos para activar quitando `tbc`.

   ESTRUCTURA: directorio agrupado por afiliación. Cada grupo muestra su
   título; separación entre grupos solo con espacio. El rol por persona
   solo se pinta si la persona lo trae (`role`). Grupos sin personas
   visibles (todas tbc o vacías) no se renderizan — hoy: Austin, Canadá
   (sin personas) y los pendientes de cada grupo.
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
    id: "la-baja-inspira",
    title: "La Baja Inspira",
    accent: "var(--color-orange)",
    people: [
      { name: "Juan Patricio Riveroll", role: "Director Académico ESCINE <br> Comité de selección", image: "/images/comunidad/juan-patricio-riveroll.jpg" },
      { name: "Iván Carrillo", role: "Periodista y documentalista <br> Comité de selección", image: "/images/comunidad/ivan-carrillo.jpg" },
      { name: "Alonso Rodríguez", role: "Fundador de Mares México", image: "/images/comunidad/alonso-rodriguez.jpg" },
      { name: "Hans Herrmann", role: "Asociado Senior de IISD", image: "/images/comunidad/hans-herrmann.jpg" },
      { name: "Jerónimo Prieto", role: "Fundador de Pelagic Life", image: "/images/comunidad/jeronimo-prieto.jpg" },
      { name: "Octavio Aburto", role: "Profesor e investigador del SIO", image: "/images/comunidad/octavio-aburto.jpg" },
      { name: "Alejandro Rivas", role: "Codirector en Producciones Cormorán", image: "/images/comunidad/alejandro-rivas.jpg" },
      { name: "Francisco Laresgoiti", role: "Fundador de Corriente Alterna", image: "/images/comunidad/francisco-laresgoiti.jpg" },
      { name: "Inti Cordera", role: "Fundador de La Maroma Producciones", image: "/images/comunidad/inti-cordera.jpg" },
      { name: "Dra. Micheline Cariño", role: "Profesora investigadora de la UABCS", image: "/images/comunidad/micheline-carino.jpg" },
      { name: "Chef Guillermo J. Gómez", role: "Fundador de Suelo Sur", image: "/images/comunidad/chef-guillermo-gomez.jpg" },
      { name: "Dolores Heredia", tbc: true }, // falta confirmación
    ],
  },
  {
    id: "jalisco",
    title: "Jalisco",
    accent: "var(--color-orange)",
    people: [
      { name: "Alejandro Tavares", role: "Director General <br> FILMA Jalisco", image: "/images/comunidad/alejandro-tavares.jpg" },
      { name: "Raúl Orozco Magaña", role: "Gerente de Estímulos y Desarrollo para la Industria Fílmica y Audiovisual <br> FILMA Jalisco", image: "/images/comunidad/raul-orozco-magana.jpg" },
      { name: "Alfredo Aceves Fernández", role: "Director General <br> Ciudad Creativa Digital", image: "/images/comunidad/alfredo-aceves.jpg" },
      { name: "Fernando Lebrija", role: "Fundador <br> Irreversible Pictures", image: "/images/comunidad/fernando-lebrija.jpg" },
      { name: "Billy Rovzar", role: "Fundador y CEO <br> Lemon Studios", tbc: true }, // sin foto
      { name: "Fernando Rovzar", role: "Fundador y Director Creativo <br> Lemon Studios", tbc: true }, // sin foto
    ],
  },
  {
    id: "ffgf",
    title: "Fondo Fílmico Gabriel Figueroa",
    accent: "var(--color-orange)",
    people: [
      { name: "Cristina Velasco", role: "Cofundadora de Paloma Negra Films", image: "/images/comunidad/cristina-velasco.jpg" },
      { name: "María José Cuevas", role: "Directora y productora de cine", image: "/images/comunidad/maria-jose-cuevas.jpg" },
      { name: "Nico Celis", role: "Fundador de Pimienta Films", image: "/images/comunidad/nico-celis.jpg" },
      { name: "Juan Pablo Bastarrachea", role: "Co-fundador de Cine Tonalá", image: "/images/comunidad/juan-pablo-bastarrachea.jpg" },
      { name: "Bruno Santamaría Razo", role: "Director, productor y fotógrafo", image: "/images/comunidad/bruno-santamaria.jpg" },
      { name: "Elena Fortes", role: "Fundadora de FIASCO", image: "/images/comunidad/elena-fortes.jpg" },
      { name: "Juan Patricio Riveroll", role: "Director Académico ESCINE", image: "/images/comunidad/juan-patricio-riveroll.jpg" },
      { name: "Alfredo Ruiz", role: "Director de la Licenciatura en Cinematografía ESCINE", image: "/images/comunidad/alfredo-ruiz.jpg" },
    ],
  },
  {
    id: "programa-de-cine",
    title: "Programa de cine",
    accent: "var(--color-orange)",
    people: [
      { name: "Salvador Amores", role: "Coordinador de programación", image: "/images/comunidad/salvador-amores.jpg" },
    ],
  },
  {
    id: "austin",
    title: "Austin",
    accent: "var(--color-orange)",
    people: [], // pendiente
  },
  {
    id: "canada",
    title: "Canadá",
    accent: "var(--color-orange)",
    people: [], // pendiente
  },
  {
    id: "speakers",
    title: "Speakers",
    accent: "var(--color-orange)",
    people: [
      { name: "Jim Kolmar", role: "Programador de cine, escritor y consultor", image: "/images/comunidad/jim-kolmar.jpg" },
      // NO subir antes de finales de septiembre 2026.
      { name: "Marina Stavenhagen", role: "Directora General <br> Cineteca Nacional", tbc: true },
    ],
  },
  {
    id: "panelistas",
    title: "Panelistas",
    accent: "var(--color-orange)",
    people: [
      { name: "Griselda Siciliani", role: "Actriz, cantante y bailarina", image: "/images/comunidad/griselda-siciliani.jpg" },
    ],
  },
  {
    id: "emerging",
    title: "Emerging Filmmaker Panel",
    accent: "var(--color-orange)",
    people: [
      { name: "Natalia León", role: "Guionista, directora, animadora y actriz", image: "/images/comunidad/natalia-leon.jpg" },
      { name: "Mariana Mendívil", role: "Cineasta, artista visual y animadora", image: "/images/comunidad/mariana-mendivil.jpg" },
      { name: "Diego Gaxiola", role: "Guionista, director y productor", image: "/images/comunidad/diego-gaxiola.jpg" },
      { name: "Karla Condado", role: "Directora, guionista y fotógrafa", image: "/images/comunidad/karla-condado.jpg" },
      { name: "Leo Aguirre", role: "Guionista y director", image: "/images/comunidad/leo-aguirre.jpg" },
      { name: "Amandine Thomas", role: "Guionista, directora y editora", image: "/images/comunidad/amandine-thomas.jpg" },
      { name: "Gerardo Coello Escalante", role: "Guionista, director y productor", image: "/images/comunidad/gerardo-coello-escalante.jpg" },
      { name: "Federico Luis", role: "Guionista y director", image: "/images/comunidad/federico-luis.jpg" },
      { name: "Eduardo Braun Costa", role: "Guionista, director y productor", image: "/images/comunidad/eduardo-braun-costa.jpg" },
      { name: "Gabriela Ortega", role: "Directora, guionista y actriz", image: "/images/comunidad/gabriela-ortega.jpg" },
    ],
  },
  {
    id: "voces-ficc",
    title: "Voces FICC",
    accent: "var(--color-orange)",
    people: [
      { name: "Adolfo Margulis", role: "Director de cine y fotógrafo", image: "/images/comunidad/adolfo-margulis.jpg" },
      { name: "Mariana Arriaga", role: "Co-fundadora de Memento Mori Films", image: "/images/comunidad/mariana-arriaga.jpg" },
      { name: "Mar Prieto", role: "Directora y guionista", image: "/images/comunidad/mar-prieto.jpg" },
      { name: "Ximena Lamadrid", role: "Actriz, autora y productora", image: "/images/comunidad/ximena-lamadrid.jpg" },
      { name: "David Zonana", role: "Director, escritor y productor", image: "/images/comunidad/david-zonana.jpg" },
      { name: "Ana Maria Sayre", role: "Productora de Tiny Desk de NPR", image: "/images/comunidad/anamaria-sayre.jpg" },
      { name: "Johanna Murillo", tbc: true },
      { name: "Mario Escobar", tbc: true },
    ],
  },
];

// Solo se pintan personas con foto; grupos sin ninguna persona con foto no se pintan.
const visibleGroups = groups.filter((group) => group.people.some((p) => !p.tbc && p.image));

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
            const visible = group.people.filter((p) => !p.tbc && p.image);
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
  <p 
    className="cm-role" 
    dangerouslySetInnerHTML={{ __html: person.role }} 
  />
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

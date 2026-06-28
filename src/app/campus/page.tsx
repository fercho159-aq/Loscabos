import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CampusAnimations from "@/components/CampusAnimations";

export const metadata: Metadata = {
  title: "Campus FICC | Sedes",
  description:
    "Campus FICC se conforma por espacios con identidad: del cine al hotel, del brunch al atardecer y la cena inaugural. Un recorrido del día a la noche por las sedes del FICC Los Cabos.",
  keywords: [
    "Campus FICC",
    "Sedes FICC",
    "Sedes FICC Los Cabos",
    "FICC Los Cabos 2026",
    "Cinépolis San José del Cabo",
    "Hotel El Ganzo",
    "Sage Los Cabos",
    "Zadún Ritz-Carlton Reserve",
    "Crania Los Cabos",
    "Suelo Sur",
    "Sunset events Los Cabos",
    "Cena inaugural FICC",
    "Brunch FICC",
    "San José del Cabo",
    "Cabo San Lucas",
    "Baja California Sur",
  ],
  alternates: { canonical: "/campus" },
  openGraph: {
    title: "Campus FICC | Sedes",
    description:
      "Espacios con identidad que convierten cada encuentro en una conexión. Un recorrido del día a la noche.",
    url: "/campus",
  },
};

/* ──────────────────────────────────────────────────────────────
   CAMPUS FICC — Sedes, organizadas como el arco de un día de festival:
   Día (sede principal) → Mediodía (brunch) → Atardecer → Noche (cena).
   El fondo viaja de la luz a la oscuridad conforme avanza el recorrido.

   IMÁGENES en /public/images/campus/ (ya optimizadas).

   TBC (tbc: true) — NO se publican aún (FASE 2 · 1 jul). Quedan en los
   datos con su imagen ya cargada; para activarlas, quitar `tbc`.
   En cada momento, la primera sede visible se muestra como "feature".
   ────────────────────────────────────────────────────────────── */

type Venue = {
  name: string;
  image: string;
  /** Por confirmar: no se renderiza aún. */
  tbc?: boolean;
};

type Phase = "sunrise" | "midday" | "sunset" | "night";

type Moment = {
  id: string;
  phase: Phase;
  /** Momento del día (eyebrow). */
  time: string;
  /** Nombre del momento (título). */
  name: string;
  /** Subtítulo editorial. */
  kicker: string;
  /** Color de acento (paleta FICC). */
  accent: string;
  venues: Venue[];
};

const moments: Moment[] = [
  {
    id: "nuestro-campus",
    phase: "sunrise",
    time: "Día",
    name: "Nuestro Campus",
    kicker: "El punto de partida: donde se proyecta y se vive el festival.",
    accent: "var(--color-orange)",
    venues: [
      { name: "Cinépolis San José del Cabo", image: "/images/campus/cinepolis-sjc.jpg" },
      { name: "Hotel El Ganzo", image: "/images/campus/el-ganzo.jpg" },
      { name: "JW Marriott Los Cabos", image: "/images/campus/jw-marriott.jpg", tbc: true },
      { name: "Hotel Tropicana", image: "/images/campus/tropicana.jpg", tbc: true },
    ],
  },
  {
    id: "brunch",
    phase: "midday",
    time: "Mediodía",
    name: "Brunch",
    kicker: "Mesa larga, sol alto y conversaciones que encienden ideas.",
    accent: "var(--color-acid)",
    venues: [
      { name: "JW Marriott Los Cabos", image: "/images/campus/jw-marriott.jpg", tbc: true },
      { name: "Sage", image: "/images/campus/sage.jpg" },
      { name: "Jetty · Hotel El Ganzo", image: "/images/campus/jetty-el-ganzo.jpg" },
    ],
  },
  {
    id: "sunset-events",
    phase: "sunset",
    time: "Atardecer",
    name: "Sunset Events",
    kicker: "La hora dorada, frente al mar de Cortés.",
    accent: "var(--color-peach)",
    venues: [
      { name: "Zadún Los Cabos, a Ritz-Carlton Reserve", image: "/images/campus/zadun.jpg" },
      { name: "JW Marriott Los Cabos", image: "/images/campus/jw-marriott.jpg", tbc: true },
      { name: "CRANIA", image: "/images/campus/crania.jpg" },
    ],
  },
  {
    id: "cena-inaugural",
    phase: "night",
    time: "Noche",
    name: "Cena Inaugural",
    kicker: "El gran arranque, bajo el cielo de Baja.",
    accent: "var(--color-wine)",
    venues: [
      { name: "Suelo Sur", image: "/images/campus/suelo-sur.jpg" },
    ],
  },
];

function SunPhase({ phase }: { phase: Phase }) {
  // Glifo que marca la posición del sol en el arco del día (encode the rhythm).
  const common = {
    width: 30,
    height: 30,
    viewBox: "0 0 30 30",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  if (phase === "night") {
    return (
      <svg {...common}>
        <path d="M20.5 18.2A7.2 7.2 0 1 1 13 8a5.6 5.6 0 0 0 7.5 10.2Z" />
        <path d="M23 7.5l.6 1.7 1.7.6-1.7.6-.6 1.7-.6-1.7-1.7-.6 1.7-.6Z" />
      </svg>
    );
  }
  // sunrise / midday / sunset share a disc + horizon; the disc sits higher or lower.
  const cy = phase === "midday" ? 11 : phase === "sunrise" ? 14 : 17;
  const r = phase === "midday" ? 5 : 4.4;
  return (
    <svg {...common}>
      <circle cx="15" cy={cy} r={r} />
      <line x1="3" y1="22.5" x2="27" y2="22.5" />
      {/* rayos */}
      <line x1="15" y1={cy - r - 3} x2="15" y2={cy - r - 1} />
      <line x1={15 - r - 3} y1={cy} x2={15 - r - 1} y2={cy} />
      <line x1={15 + r + 1} y1={cy} x2={15 + r + 3} y2={cy} />
      <line x1={15 - r - 2} y1={cy - r - 1} x2={15 - r - 1} y2={cy - r} />
      <line x1={15 + r + 1} y1={cy - r} x2={15 + r + 2} y2={cy - r - 1} />
    </svg>
  );
}

export default function Campus() {
  return (
    <>
      <Navbar />

      <div className="campus-page">
        {/* ── HERO ── (la noche previa: navy) */}
        <PageHero lines={["Campus FICC"]} />

        {/* ── INTRO ── amanece: cream con destello cálido */}
        <section className="campus-intro">
          <div className="campus-intro-inner">
            <span data-anim="campus-kicker" className="campus-intro-eyebrow">
              Nuestras sedes · 14ª Edición
            </span>
            <p data-anim="campus-lede" className="campus-lede">
              <strong>Campus FICC</strong> se conforma por espacios con identidad que transforman
              cada encuentro en una conexión, cada conversación en una idea brillante y cada
              proyección en un momento memorable.
            </p>
            <p data-anim="campus-lede" className="campus-lede-sub">
              Aquí, los espacios son los coprotagonistas de una experiencia vibrante, con una
              personalidad que solo puede suceder aquí. Recórrelos del día a la noche.
            </p>
          </div>
        </section>

        {/* ── MOMENTOS ── */}
        {moments.map((moment) => {
          const visible = moment.venues.filter((v) => !v.tbc);
          if (visible.length === 0) return null;
          const solo = visible.length === 1;
          return (
            <section
              key={moment.id}
              id={moment.id}
              className={`campus-moment campus-moment--${moment.phase}`}
              style={{ "--cat": moment.accent } as CSSProperties}
            >
              <header data-anim="campus-moment-head" className="campus-moment-head">
                <span className="campus-moment-time">
                  <span className="campus-moment-glyph">
                    <SunPhase phase={moment.phase} />
                  </span>
                  {moment.time}
                </span>
                <h2 className="campus-moment-name">{moment.name}</h2>
                <div className="campus-moment-meta">
                  <span className="campus-moment-rule" aria-hidden="true" />
                  <p className="campus-moment-kicker">{moment.kicker}</p>
                </div>
              </header>

              <div className={`campus-moment-grid${solo ? " is-solo" : ""}`}>
                {visible.map((venue, i) => (
                  <article
                    key={venue.name}
                    data-anim="campus-plate"
                    className={`campus-plate${i === 0 ? " is-feature" : ""}`}
                  >
                    <div className="campus-plate-media">
                      <Image
                        src={venue.image}
                        alt={`${venue.name} — sede del Campus FICC Los Cabos`}
                        fill
                        sizes={
                          solo
                            ? "(max-width: 900px) 100vw, 1100px"
                            : i === 0
                              ? "(max-width: 760px) 100vw, 60vw"
                              : "(max-width: 760px) 100vw, 40vw"
                        }
                        className="campus-plate-img"
                      />
                    </div>
                    <div className="campus-plate-caption">
                      <h3 className="campus-plate-name">{venue.name}</h3>
                      <span className="campus-plate-underline" aria-hidden="true" />
                    </div>
                  </article>
                ))}
              </div>

              {/* Atardece → la noche: degradado que baja hacia la Cena */}
              {moment.phase === "sunset" && (
                <div className="campus-dusk" aria-hidden="true" />
              )}
            </section>
          );
        })}
      </div>

      <Footer />
      <CampusAnimations />
    </>
  );
}

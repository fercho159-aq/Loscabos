import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Programacion2026Animations from "@/components/Programacion2026Animations";
import { eventos2026 } from "@/lib/programacion-2026-data";

export const metadata: Metadata = {
  title: "Programación 2026 | FICC Los Cabos",
  description:
    "Sneak Peak de la programación 2026 de FICCLosCabos: el homenaje a Dolores Heredia, el Laboratorio de Escritura, el Brunch Girls At Films y el panel The Next Wave.",
  alternates: { canonical: "/programacion-2026" },
  openGraph: {
    title: "Programación 2026 | FICC Los Cabos",
    description:
      "Sneak Peak de la programación 2026 de FICCLosCabos: el homenaje a Dolores Heredia, el Laboratorio de Escritura, el Brunch Girls At Films y el panel The Next Wave.",
    url: "/programacion-2026",
    images: [{ url: "/images/programacion-2026/homenaje-dolores-heredia.jpg", width: 1600, height: 900 }],
  },
  // La página está fuera del menú hasta el anuncio oficial. Borrar al lanzar.
  robots: { index: false, follow: false },
};

export default function Programacion2026() {
  return (
    <>
      <Navbar />

      <div className="p26-page">
        <PageHero lines={["Programación", "2026"]} bgImage="/images/programacion-hero.jpg" overlay />

        <section className="p26-index">
          {/* Bloque divisor: filete + título, como el `divider-block` de la referencia. */}
          <header data-anim="p26-head" className="p26-divider">
            <hr />
            <h2 className="p26-section-title">Sneak Peak</h2>
          </header>

          <div className="p26-grid">
            {eventos2026.map((ev, i) => (
              <Link
                key={ev.slug}
                href={`/programacion-2026/${ev.slug}`}
                data-anim="p26-card"
                className="p26-card"
                style={{ "--cat": ev.accent } as CSSProperties}
              >
                <div className="p26-card-media">
                  <Image
                    src={ev.image}
                    alt={ev.imageAlt}
                    fill
                    sizes="(max-width: 700px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={i < 3}
                    className="p26-card-img"
                  />
                </div>
                <h3 className="p26-card-title">
                  <span className="p26-underline">{ev.cardTitle ?? ev.title}</span>
                </h3>
                {(ev.date || ev.venue) && (
                  <p className="p26-card-meta">{[ev.date, ev.venue].filter(Boolean).join(" · ")}</p>
                )}
              </Link>
            ))}
          </div>
        </section>
      </div>

      <Footer />
      <Programacion2026Animations />
    </>
  );
}

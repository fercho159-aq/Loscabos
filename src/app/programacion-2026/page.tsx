import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Programacion2026Animations from "@/components/Programacion2026Animations";
import Programacion2026Tabs from "@/components/Programacion2026Tabs";
import { eventos2026 } from "@/lib/programacion-2026-data";

export const metadata: Metadata = {
  title: "Programación 2026 | FICC Los Cabos",
  description:
    "Sneak Peek de la Programación 2026 de FICCLosCabos: keynotes de SXSW, COMEFILM, Ciudad Creativa Digital y Mighty Studios, el homenaje a Dolores Heredia, el Work in Progress de Insectario y el panel The Next Wave.",
  alternates: { canonical: "/programacion-2026" },
  openGraph: {
    title: "Programación 2026 | FICC Los Cabos",
    description:
      "Sneak Peek de la Programación 2026 de FICCLosCabos: keynotes de SXSW, COMEFILM, Ciudad Creativa Digital y Mighty Studios, el homenaje a Dolores Heredia, el Work in Progress de Insectario y el panel The Next Wave.",
    url: "/programacion-2026",
    images: [{ url: "/images/programacion-2026/homenaje-dolores-heredia.jpg", width: 1600, height: 900 }],
  },

};

export default function Programacion2026() {
  return (
    <>
      <Navbar />

      <div className="p26-page">
        <PageHero lines={["Programación", "2026"]} bgImage="/images/programacion-hero.jpg" overlay />

        <Programacion2026Tabs active="programacion" preview={false} />

        <section className="p26-index">
          <div data-anim="p26-head" className="p26-divider">
            <hr />
          </div>

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
                  <span className="p26-underline">
                    {ev.cardCredit && ev.credit ? `${ev.title} | ${ev.credit}` : ev.title}
                  </span>
                </h3>
                {ev.date && <p className="p26-card-meta">{ev.date}</p>}
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

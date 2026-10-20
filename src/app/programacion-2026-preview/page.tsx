import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Programacion2026Animations from "@/components/Programacion2026Animations";
import ProgramacionAgenda from "@/components/ProgramacionAgenda";
import Programacion2026Tabs from "@/components/Programacion2026Tabs";

export const metadata: Metadata = {
  title: "Programación 2026 | FICC Los Cabos",
  description:
    "Explora la agenda por día y los eventos especiales de FICCLosCabos 2026.",
  alternates: { canonical: "/programacion-2026-preview" },
  openGraph: {
    title: "Programación 2026 | FICC Los Cabos",
    description:
      "Explora la agenda por día y los eventos especiales de FICCLosCabos 2026.",
    url: "/programacion-2026-preview",
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

        {/* Los eventos especiales se abren desde su liga en la agenda. */}
        <ProgramacionAgenda nav={<Programacion2026Tabs active="programacion" gray soloProgramacion />} />
      </div>

      <Footer />
      <Programacion2026Animations />
    </>
  );
}

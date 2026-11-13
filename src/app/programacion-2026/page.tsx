import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Programacion2026Animations from "@/components/Programacion2026Animations";
import ProgramacionAgenda from "@/components/ProgramacionAgenda";
import Programacion2026Tabs from "@/components/Programacion2026Tabs";

const description = "Explora la agenda por día de FICCLosCabos 2026: proyecciones, conversatorios, keynotes, paneles y eventos especiales del 9 al 13 de diciembre.";

export const metadata: Metadata = {
  title: "Programación 2026 | FICC Los Cabos",
  description,
  alternates: { canonical: "/programacion-2026" },
  openGraph: {
    title: "Programación 2026 | FICC Los Cabos",
    description,
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

        {/* Los eventos especiales se abren desde su liga en la agenda. */}
        <ProgramacionAgenda nav={<Programacion2026Tabs active="programacion" preview={false} gray />} />
      </div>

      <Footer />
      <Programacion2026Animations />
    </>
  );
}

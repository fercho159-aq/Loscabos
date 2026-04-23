import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Programación FICC 2026 | Películas y Eventos",
  description:
    "Descubre la programación oficial del Festival Internacional de Cine y Creatividad Los Cabos 2026. Películas en competencia, secciones especiales y eventos.",
  alternates: { canonical: "/programacion" },
  openGraph: {
    title: "Programación FICC 2026 | Películas y Eventos",
    description:
      "Descubre la programación oficial del Festival Internacional de Cine y Creatividad Los Cabos 2026. Películas en competencia, secciones especiales y eventos.",
    url: "/programacion",
  },
};

export default function Programacion() {
  return (
    <>
      <Navbar />

      <PageHero lines={["Programación"]} subtitle="Próximamente" />

      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Programacion2026Tabs from "@/components/Programacion2026Tabs";
import SeleccionOficial2026 from "@/components/SeleccionOficial2026";
import { categoriasSeleccion2026, peliculasSeleccion2026, PREVIEW_FILM_BASE, PREVIEW_SELECTION_URL } from "@/lib/seleccion-oficial-2026-data";

export const metadata: Metadata = {
  title: "Selección oficial 2026 | FICC Los Cabos",
  description: `Descubre las ${peliculasSeleccion2026.length} películas de Marejada Nacional e Internacional en la selección oficial 2026 de FICC Los Cabos.`,
  alternates: { canonical: PREVIEW_SELECTION_URL },
  robots: { index: false, follow: false },
};

export default function SeleccionOficialPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "7rem" }}>
        <Programacion2026Tabs active="seleccion" />
        <SeleccionOficial2026 categories={categoriasSeleccion2026} catalog={peliculasSeleccion2026} filmBase={PREVIEW_FILM_BASE} />
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Programacion2026Tabs from "@/components/Programacion2026Tabs";
import SeleccionOficial2026 from "@/components/SeleccionOficial2026";
import { categoriasSeleccion2026, peliculasPublicas2026, PUBLIC_FILM_BASE } from "@/lib/seleccion-oficial-2026-data";

const catalog = peliculasPublicas2026.filter((film) => categoriasSeleccion2026.some((category) => category.id === film.categoryId));
// Solo las secciones con películas liberadas, para no mostrar filtros vacíos.
const categories = categoriasSeleccion2026.filter((category) => catalog.some((film) => film.categoryId === category.id));
const description = "Descubre las películas de Marejada en la Muestra Oficial 2026 de FICC Los Cabos.";

export const metadata: Metadata = {
  title: "Muestra Oficial 2026 | FICC Los Cabos",
  description,
  alternates: { canonical: "/programacion-2026/seleccion-oficial" },
  openGraph: {
    title: "Muestra Oficial 2026 | FICC Los Cabos",
    description,
    url: "/programacion-2026/seleccion-oficial",
    ...(catalog[0]?.image ? { images: [{ url: catalog[0].image }] } : {}),
  },
};

export default function SeleccionOficialPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "7rem" }}>
        <Programacion2026Tabs active="seleccion" preview={false} />
        <SeleccionOficial2026 categories={categories} catalog={catalog} filmBase={PUBLIC_FILM_BASE} />
      </main>
      <Footer />
    </>
  );
}

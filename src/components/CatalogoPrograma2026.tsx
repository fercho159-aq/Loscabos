import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Programacion2026Tabs from "@/components/Programacion2026Tabs";
import SeleccionOficial2026 from "@/components/SeleccionOficial2026";
import { categorias2026, peliculas2026 } from "@/lib/seleccion-oficial-2026-data";

export default function CatalogoPrograma2026({ categoryId }: { categoryId: "la-baja-inspira" | "animacion" }) {
  const categories = categorias2026.filter((category) => category.id === categoryId);
  const catalog = peliculas2026.filter((film) => film.categoryId === categoryId);

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "7rem" }}>
        <Programacion2026Tabs active={categoryId} />
        <SeleccionOficial2026 title={categories[0].label} categories={categories} catalog={catalog} />
      </main>
      <Footer />
    </>
  );
}

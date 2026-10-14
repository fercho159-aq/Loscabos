import type { Metadata } from "next";
import CatalogoPrograma2026 from "@/components/CatalogoPrograma2026";

export const metadata: Metadata = {
  title: "Animación 2026 | FICC Los Cabos",
  description: "Descubre las películas de Animación 2026 de FICC Los Cabos, incluidas las presentadas por Filma Jalisco.",
  alternates: { canonical: "/programacion-2026/animacion" },
  openGraph: { title: "Animación 2026 | FICC Los Cabos", url: "/programacion-2026/animacion", images: [{ url: "/images/seleccion-oficial-2026/iron-boy-still.jpg" }] },
};

export default function Animacion() {
  return <CatalogoPrograma2026 categoryId="animacion" preview={false} />;
}

import type { Metadata } from "next";
import CatalogoPrograma2026 from "@/components/CatalogoPrograma2026";

export const metadata: Metadata = {
  title: "Animación 2026 | FICC Los Cabos",
  description: "Descubre las películas de Animación 2026 de FICC Los Cabos, incluidas las presentadas por Filma Jalisco.",
  alternates: { canonical: "/programacion-2026-preview/animacion" },
  robots: { index: false, follow: false },
};

export default function AnimacionPreview() {
  return <CatalogoPrograma2026 categoryId="animacion" />;
}

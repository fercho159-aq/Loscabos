import type { Metadata } from "next";
import CatalogoPrograma2026 from "@/components/CatalogoPrograma2026";

export const metadata: Metadata = {
  title: "La Baja Inspira 2026 | FICC Los Cabos",
  description: "Descubre las películas del programa La Baja Inspira 2026 de FICC Los Cabos.",
  alternates: { canonical: "/programacion-2026-preview/la-baja-inspira" },
  robots: { index: false, follow: false },
};

export default function LaBajaInspiraPreview() {
  return <CatalogoPrograma2026 categoryId="la-baja-inspira" />;
}

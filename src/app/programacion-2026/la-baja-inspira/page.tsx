import type { Metadata } from "next";
import CatalogoPrograma2026 from "@/components/CatalogoPrograma2026";

export const metadata: Metadata = {
  title: "La Baja Inspira 2026 | FICC Los Cabos",
  description: "Descubre las películas del programa La Baja Inspira 2026 de FICC Los Cabos.",
  alternates: { canonical: "/programacion-2026/la-baja-inspira" },
  openGraph: { title: "La Baja Inspira 2026 | FICC Los Cabos", url: "/programacion-2026/la-baja-inspira", images: [{ url: "/images/seleccion-oficial-2026/my-blue-whale-family-still.jpg" }] },
};

export default function LaBajaInspira() {
  return <CatalogoPrograma2026 categoryId="la-baja-inspira" preview={false} />;
}

import type { Metadata } from "next";
import CatalogoPrograma2026 from "@/components/CatalogoPrograma2026";

export const metadata: Metadata = {
  title: "The Next Wave 2026 | FICC Los Cabos",
  description: "Descubre los cortometrajes de The Next Wave — Emerging Filmmakers en FICC Los Cabos 2026.",
  alternates: { canonical: "/programacion-2026/the-next-wave" },
  openGraph: { title: "The Next Wave 2026 | FICC Los Cabos", url: "/programacion-2026/the-next-wave", images: [{ url: "/images/seleccion-oficial-2026/albatross-still.jpg" }] },
};

export default function TheNextWave() {
  return <CatalogoPrograma2026 categoryId="next-wave" preview={false} />;
}

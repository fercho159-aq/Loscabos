import type { Metadata } from "next";
import CatalogoPrograma2026 from "@/components/CatalogoPrograma2026";

export const metadata: Metadata = {
  title: "Frequencies of Now 2026 | FICC Los Cabos",
  description: "Descubre las películas del programa Frequencies of Now 2026 de FICC Los Cabos.",
  alternates: { canonical: "/programacion-2026/frequencies-of-now" },
  openGraph: { title: "Frequencies of Now 2026 | FICC Los Cabos", url: "/programacion-2026/frequencies-of-now", images: [{ url: "/images/seleccion-oficial-2026/afilo-mi-gillete-still.jpg" }] },
};

export default function FrequenciesOfNow() {
  return <CatalogoPrograma2026 categoryId="frequencies-of-now" preview={false} />;
}

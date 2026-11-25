import type { Metadata } from "next";
import { redirect } from "next/navigation";
import ProgramaCine2026Pagina from "@/components/ProgramaCine2026Pagina";
import { programaCinePublico2026 } from "@/lib/programa-cine-2026-data";

const description = "Horarios y salas de todas las proyecciones de FICC Los Cabos 2026, del 10 al 13 de diciembre.";

export const metadata: Metadata = {
  title: "Programa de cine 2026 | FICC Los Cabos",
  description,
  alternates: { canonical: "/programacion-2026/programa-de-cine" },
  robots: programaCinePublico2026 ? undefined : { index: false, follow: false },
  openGraph: { title: "Programa de cine 2026 | FICC Los Cabos", description, url: "/programacion-2026/programa-de-cine" },
};

// Revalida como las fichas de eventos, que se publican con `publishAt`.
export const revalidate = 60;

export default function ProgramaDeCinePage() {
  if (!programaCinePublico2026) redirect("/programacion-2026");
  return <ProgramaCine2026Pagina />;
}

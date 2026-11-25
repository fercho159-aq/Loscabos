import type { Metadata } from "next";
import ProgramaCine2026Pagina from "@/components/ProgramaCine2026Pagina";

export const metadata: Metadata = {
  title: "Programa de cine 2026 (preview) | FICC Los Cabos",
  robots: { index: false, follow: false },
};

export const revalidate = 60;

export default function ProgramaDeCinePreview() {
  return <ProgramaCine2026Pagina />;
}

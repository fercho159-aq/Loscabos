import type { Metadata } from "next";
import FrequenciesOfNow from "@/app/frequencies-of-now/page";
import Programacion2026Tabs from "@/components/Programacion2026Tabs";

export const metadata: Metadata = {
  title: "Frequencies of Now 2026 | FICC Los Cabos",
  description: "Frequencies of Now, el archivo vivo de la cultura de la industria musical de FICC Los Cabos.",
  alternates: { canonical: "/programacion-2026-preview/frequencies-of-now" },
  robots: { index: false, follow: false },
};

export default function FrequenciesOfNowPreview() {
  return (
    <>
      <div style={{ paddingTop: "7rem" }}><Programacion2026Tabs active="frequencies-of-now" /></div>
      <FrequenciesOfNow />
    </>
  );
}

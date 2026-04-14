import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prensa | Sala de Prensa FICC Los Cabos",
  description:
    "Sala de prensa oficial del FICC Los Cabos. Comunicados, notas, acreditaciones y materiales de prensa para medios nacionales e internacionales.",
  alternates: { canonical: "/prensa" },
  openGraph: {
    title: "Prensa | Sala de Prensa FICC Los Cabos",
    description:
      "Sala de prensa oficial del FICC Los Cabos. Comunicados, notas, acreditaciones y materiales de prensa para medios nacionales e internacionales.",
    url: "/prensa",
  },
};

export default function PrensaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

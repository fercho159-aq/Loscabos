import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { FilmGrain } from "@/components/three";

const inter = localFont({
  src: "../../public/fonts/Inter-VariableFont_opsz,wght.ttf",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "FICC Los Cabos 2026 | Festival Internacional de Cine y Creatividad",
  description:
    "14° Edición del Festival Internacional de Cine y Creatividad de Los Cabos. 9 — 13 Diciembre 2026. #BeyondTheScreen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body suppressHydrationWarning
        className={`${inter.variable} antialiased`}
      >
        {children}
        <FilmGrain />
      </body>
    </html>
  );
}

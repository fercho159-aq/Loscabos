import type { Metadata } from "next";
import { Bebas_Neue, Barlow_Condensed, Barlow } from "next/font/google";
import "./globals.css";
import { FilmGrain } from "@/components/three";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-barlow-condensed",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-barlow",
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
        className={`${bebasNeue.variable} ${barlowCondensed.variable} ${barlow.variable} antialiased`}
      >
        {children}
        <FilmGrain />
      </body>
    </html>
  );
}

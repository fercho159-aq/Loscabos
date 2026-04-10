import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import { FilmGrain } from "@/components/three";

const inter = localFont({
  src: "../../public/fonts/Inter-VariableFont_opsz,wght.ttf",
  variable: "--font-inter",
});

const printf = localFont({
  src: "../../public/fonts/PRINTF-Regular.ttf",
  variable: "--font-printf",
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
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/euv2emd.css" />
      </head>
      <body suppressHydrationWarning
        className={`${inter.variable} ${printf.variable} antialiased`}
      >
        {children}
        <FilmGrain />
        <Script
          id="mcjs"
          strategy="afterInteractive"
          src="https://chimpstatic.com/mcjs-connected/js/users/24bf46409995ffe6e8ad030da/420621f0164c4fb39533f61a1.js"
        />
      </body>
    </html>
  );
}

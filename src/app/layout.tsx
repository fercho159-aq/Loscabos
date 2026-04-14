import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import { FestivalJsonLd } from "@/components/seo/JsonLd";
import FilmGrainLazy from "@/components/three/FilmGrainLazy";

const printf = localFont({
  src: "../../public/fonts/PRINTF-Regular.ttf",
  variable: "--font-printf",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ficc.vercel.app"),
  title: {
    default: "FICC Los Cabos 2026 | Festival Internacional de Cine y Creatividad",
    template: "%s | FICC Los Cabos",
  },
  description:
    "14° Edición del Festival Internacional de Cine y Creatividad de Los Cabos. 9 — 13 Diciembre 2026. #BeyondTheScreen",
  keywords: [
    "FICC Los Cabos",
    "Festival Internacional de Cine",
    "Festival de Cine Los Cabos",
    "Cine Iberoamericano",
    "Baja California Sur",
    "Cine Mexicano",
    "Festival de Cine 2026",
    "La Baja Inspira",
    "Fondo Fílmico Gabriel Figueroa",
    "FFGF",
    "Cine y Creatividad",
    "Beyond The Screen",
  ],
  authors: [{ name: "FICC Los Cabos" }],
  creator: "FICC Los Cabos",
  publisher: "FICC Los Cabos",
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://ficc.vercel.app",
    siteName: "FICC Los Cabos",
    title: "FICC Los Cabos 2026 | Festival Internacional de Cine y Creatividad",
    description:
      "14° Edición del Festival Internacional de Cine y Creatividad de Los Cabos. 9 — 13 Diciembre 2026. #BeyondTheScreen",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FICC Los Cabos 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FICC Los Cabos 2026 | Festival Internacional de Cine y Creatividad",
    description:
      "14° Edición del Festival Internacional de Cine y Creatividad de Los Cabos. 9 — 13 Diciembre 2026.",
    images: ["/og-image.jpg"],
    creator: "@ficclcabos",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://use.typekit.net" crossOrigin="" />
        <link rel="preconnect" href="https://p.typekit.net" crossOrigin="" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* Adobe Fonts — Neue Haas Grotesk (non-blocking) */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link rel="stylesheet" href="https://use.typekit.net/euv2emd.css" media="print" {...({ onLoad: "this.media='all'" } as unknown as Record<string, string>)} />
        {/* Google Fonts — EB Garamond (non-blocking) */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap" media="print" {...({ onLoad: "this.media='all'" } as unknown as Record<string, string>)} />
        <noscript>
          {/* eslint-disable-next-line @next/next/no-page-custom-font */}
          <link rel="stylesheet" href="https://use.typekit.net/euv2emd.css" />
          {/* eslint-disable-next-line @next/next/no-page-custom-font */}
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap" />
        </noscript>
      </head>
      <body suppressHydrationWarning
        className={`${printf.variable} antialiased`}
      >
        {children}
        <FestivalJsonLd />
        <FilmGrainLazy />
        <Script
          id="mcjs"
          strategy="lazyOnload"
          src="https://chimpstatic.com/mcjs-connected/js/users/24bf46409995ffe6e8ad030da/420621f0164c4fb39533f61a1.js"
        />
      </body>
    </html>
  );
}

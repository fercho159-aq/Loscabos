import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import { FestivalJsonLd } from "@/components/seo/JsonLd";
import FilmGrainLazy from "@/components/three/FilmGrainLazy";

const inter = localFont({
  src: "../../public/fonts/Inter-VariableFont_opsz_wght.woff2",
  variable: "--font-inter",
  display: "swap",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ficc.vercel.app"),
  title: {
    default: "FICC Los Cabos 2026 | Festival Internacional de Cine y Creatividad",
    template: "%s | FICC Los Cabos",
  },
  description:
    "14° Edición del Festival Internacional de Cine y Creatividad de Los Cabos. 9 – 13 diciembre 2026. #BeyondTheScreen",
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
      "14° Edición del Festival Internacional de Cine y Creatividad de Los Cabos. 9 – 13 diciembre 2026. #BeyondTheScreen",
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
      "14° Edición del Festival Internacional de Cine y Creatividad de Los Cabos. 9 – 13 diciembre 2026.",
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
      <body suppressHydrationWarning
        className={`${inter.variable} antialiased`}
      >
        {children}
        <FestivalJsonLd />
        <FilmGrainLazy />
        <Script
          id="mcjs"
          strategy="lazyOnload"
          src="https://chimpstatic.com/mcjs-connected/js/users/24bf46409995ffe6e8ad030da/420621f0164c4fb39533f61a1.js"
        />

        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1799745110909619');
fbq('track', 'PageView');`}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1799745110909619&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        {/* Google tag (gtag.js) */}
        <Script
          id="gtag-src"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-17633221839"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-17633221839');`}
        </Script>
      </body>
    </html>
  );
}

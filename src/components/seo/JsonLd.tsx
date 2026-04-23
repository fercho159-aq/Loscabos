import React from "react";

const SITE_URL = "https://ficc.vercel.app";

export function FestivalJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Festival",
        "@id": `${SITE_URL}/#event`,
        name: "FICC Los Cabos 2026",
        alternateName:
          "Festival Internacional de Cine y Creatividad de Los Cabos",
        description:
          "14° Edición del Festival Internacional de Cine y Creatividad de Los Cabos. #BeyondTheScreen",
        startDate: "2026-12-09",
        endDate: "2026-12-13",
        eventStatus: "https://schema.org/EventScheduled",
        eventAttendanceMode:
          "https://schema.org/OfflineEventAttendanceMode",
        url: SITE_URL,
        image: `${SITE_URL}/images/FICCLosCabos_2026_Logo_Claro.svg`,
        location: {
          "@type": "Place",
          name: "Los Cabos",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Los Cabos",
            addressRegion: "BCS",
            addressCountry: "MX",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 22.8905,
            longitude: -109.9167,
          },
        },
        organizer: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "FICC Los Cabos",
        alternateName:
          "Festival Internacional de Cine y Creatividad de Los Cabos",
        url: SITE_URL,
        logo: `${SITE_URL}/images/FICCLosCabos_2026_Logo_Claro.svg`,
        sameAs: [
          "https://www.instagram.com/ficc_loscabos",
          "https://twitter.com/ficc_loscabos",
          "https://www.facebook.com/ficc_loscabos",
          "https://www.youtube.com/@ficc_loscabos",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "FICC Los Cabos 2026",
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: "es-MX",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${SITE_URL}/programacion?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default FestivalJsonLd;

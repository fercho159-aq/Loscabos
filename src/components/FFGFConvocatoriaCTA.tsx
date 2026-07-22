"use client";

import { useEffect, useState } from "react";
import SubscribeCTA from "./SubscribeCTA";

/* Convocatoria FFGF 2026 — el CTA cambia solo el 24 de julio de 2026, 00:00
   hora de Los Cabos (UTC-7). Antes: registro para recibir la info. Después:
   descarga + aplicación al formulario. El switch se resuelve en el cliente
   (useEffect) para no romper la hidratación ni depender del build. */
const OPEN_AT = Date.parse("2026-07-24T00:00:00-07:00");
const FORM_URL = "https://forms.gle/FAhDCdrZASmN5HnDA";

export default function FFGFConvocatoriaCTA() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (Date.now() >= OPEN_AT) setOpen(true);
  }, []);

  if (!open) {
    return (
      <SubscribeCTA
        source="ffgf"
        label="Sé el primero en recibir la información de la convocatoria"
        title="Fondo Fílmico Gabriel Figueroa 2026"
        description="Déjanos tus datos y recibe la información de la convocatoria FFGF en cuanto se abra."
        className="cta-button"
        dataAnim="ffgf-cta"
        style={{ marginTop: "1.5rem" }}
      />
    );
  }

  return (
    <div style={{ marginTop: "1.5rem", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "1.25rem" }}>
      <a
        href={FORM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="cta-button"
        data-anim="ffgf-cta"
      >
        Aplica ahora
      </a>
      <a
        href={FORM_URL}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontFamily: "var(--font-inter)",
          fontSize: "clamp(.95rem, 1.4vw, 1.05rem)",
          fontWeight: 700,
          color: "#000",
          textDecoration: "underline",
          textUnderlineOffset: "0.25em",
        }}
      >
        Descarga la convocatoria
      </a>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import SubscribeCTA from "./SubscribeCTA";

/* Convocatoria FFGF 2026 — el CTA cambia según la fecha, hora de Los Cabos
   (UTC-7). El switch se resuelve en el cliente (useEffect) para no romper la
   hidratación ni depender del build.
   - Antes del 24 de julio: pre-registro.
   - 24 de julio al 28 de agosto: aplicación + descarga.
   - Después del 28 de agosto: convocatoria cerrada. */
const OPEN_AT = Date.parse("2026-07-24T00:00:00-07:00");
const CLOSE_AT = Date.parse("2026-08-28T00:00:00-07:00");
const FORM_URL = "https://forms.gle/FAhDCdrZASmN5HnDA";
const CONVOCATORIA_PDF = "/docs/convocatoria-ffgf-2026.pdf";

/* Conversión Google Ads: "Registro Fondo Fílmico — clic Aplica ahora".
   El botón abre el formulario en pestaña nueva, así que no hay que retrasar
   la navegación; si gtag aún no cargó simplemente no se dispara. */
const CONVERSION_ID = "AW-17633221839/TXV7CIHd79gcEM-5lthB";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function reportConversion() {
  if (typeof window.gtag === "function") {
    window.gtag("event", "conversion", { send_to: CONVERSION_ID });
  }
}

export default function FFGFConvocatoriaCTA() {
  const [phase, setPhase] = useState<"pre" | "open" | "closed">("pre");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const now = Date.now();
    if (now >= CLOSE_AT) {
      setPhase("closed");
    } else if (now >= OPEN_AT) {
      setPhase("open");
    } else {
      setPhase("pre");
    }
  }, []);

  if (!mounted) {
    return null;
  }

  if (phase === "pre") {
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

  if (phase === "closed") {
    return (
      <button
        disabled
        className="cta-button"
        data-anim="ffgf-cta"
        style={{ marginTop: "1.5rem", opacity: 0.6, cursor: "not-allowed" }}
      >
        Convocatoria cerrada 28 de agosto
      </button>
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
        onClick={reportConversion}
      >
        Aplica ahora
      </a>
      <a
        href={CONVOCATORIA_PDF}
        target="_blank"
        rel="noopener noreferrer"
        download
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

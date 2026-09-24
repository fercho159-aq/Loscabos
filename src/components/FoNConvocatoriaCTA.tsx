"use client";

import { useSyncExternalStore } from "react";

/* Convocatoria Frequencies of Now 2026 — el CTA cambia según la fecha, hora
   de Los Cabos (UTC-7); apertura a las 9:00 CDMX (UTC-6). Mismo patrón que FFGFConvocatoriaCTA: se resuelve en
   el cliente (useEffect) para no romper la hidratación.
   - Antes del 24 de septiembre, 9:00: botón bloqueado con la fecha de apertura.
   - 24 de septiembre (9:00) al 30 de octubre (23:59): "Aplica ahora" a
     FilmFreeway.
   - A partir del 31 de octubre: convocatoria cerrada.
*/
const OPEN_AT = Date.parse("2026-09-24T09:00:00-06:00");
const CLOSE_AT = Date.parse("2026-10-30T23:59:59-07:00");
const FORM_URL: string | null = "https://filmfreeway.com/FICCLosCabos";
const CONVOCATORIA_URL =
  "https://docs.google.com/document/d/1ri4K9cvziyhkMdi-T1Pzeicr6a309vvFZ9Jt7w6o0Ig/edit?tab=t.0";

type Phase = "pre" | "open" | "closed";

const noopSubscribe = () => () => {};
function getPhase(): Phase {
  const now = Date.now();
  if (now >= CLOSE_AT) return "closed";
  if (now >= OPEN_AT) return "open";
  return "pre";
}

export default function FoNConvocatoriaCTA() {
  /* Server snapshot null → no se renderiza en SSR; en cliente se resuelve
     con la hora local sin setState en effect. */
  const phase = useSyncExternalStore(noopSubscribe, getPhase, () => null);

  if (!phase) return null;

  let main: React.ReactNode;
  if (phase === "closed") {
    main = (
      <button disabled className="cta-button" data-anim="fon-cta">
        Convocatoria cerrada 30 de octubre
      </button>
    );
  } else if (phase === "open" && FORM_URL) {
    main = (
      <a href={FORM_URL} target="_blank" rel="noopener noreferrer" className="cta-button" data-anim="fon-cta">
        Aplica ahora
      </a>
    );
  } else {
    main = (
      <button disabled className="cta-button" data-anim="fon-cta" title="Disponible a partir del 24 de septiembre de 2026, 9:00 am">
        Aplica ahora
      </button>
    );
  }

  return (
    <div className="fon-cta-row" data-anim="fon-cta-row">
      {main}
      {phase !== "open" && (
        <span className="fon-cta-note">
          {phase === "pre" ? "Disponible a partir del 24 de septiembre de 2026, 9:00 am" : "Gracias a todas las personas que participaron"}
        </span>
      )}
      {phase === "open" && !FORM_URL && (
        <span className="fon-cta-note">El enlace de aplicación se publicará muy pronto</span>
      )}
      <a href={CONVOCATORIA_URL} target="_blank" rel="noopener noreferrer" className="fon-cta-link">
        Descargar convocatoria
      </a>
    </div>
  );
}

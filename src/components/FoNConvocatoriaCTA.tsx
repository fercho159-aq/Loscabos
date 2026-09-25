"use client";

import { useSyncExternalStore } from "react";

/* Convocatoria Frequencies of Now 2026 — el CTA cambia según la fecha, hora
   de Los Cabos (UTC-7). Mismo patrón que FFGFConvocatoriaCTA: se resuelve en
   el cliente para no romper la hidratación.
   - Hasta el 30 de octubre (23:59): "Aplica ahora" a FilmFreeway.
   - A partir del 31 de octubre: convocatoria cerrada.
*/
const CLOSE_AT = Date.parse("2026-10-30T23:59:59-07:00");
const FORM_URL: string | null = "https://filmfreeway.com/FICCLosCabos";
const CONVOCATORIA_URL =
  "https://drive.google.com/file/d/1ghcNajhjvSzWhMqn3FSfa4jEC72Mo7_s/view?usp=drive_link";

type Phase = "open" | "closed";

const noopSubscribe = () => () => {};
function getPhase(): Phase {
  return Date.now() >= CLOSE_AT ? "closed" : "open";
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
      <button disabled className="cta-button" data-anim="fon-cta">
        Aplica ahora
      </button>
    );
  }

  return (
    <div className="fon-cta-row" data-anim="fon-cta-row">
      {main}
      {phase !== "open" && (
        <span className="fon-cta-note">
          Gracias a todas las personas que participaron
        </span>
      )}
      {phase === "open" && FORM_URL && (
        <span className="fon-cta-note">Del 24 de septiembre al 30 de octubre</span>
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

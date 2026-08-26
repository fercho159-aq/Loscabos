"use client";

import { useEffect, useState } from "react";

/* Convocatoria Guión para la Gran Industria 2026 — el CTA cambia según la fecha,
   hora de Los Cabos (UTC-7). El switch se resuelve en el cliente (useEffect)
   para no romper la hidratación ni depender del build.
   - Antes del 5 de septiembre: sin CTA (la página muestra la fecha de apertura).
   - 5 de septiembre al 13 de septiembre: descarga de convocatoria.
   - A partir del 14 de septiembre: aplicación al formulario. */
const ANNOUNCE_AT = Date.parse("2026-09-05T00:00:00-07:00");
const APPLY_AT = Date.parse("2026-09-14T00:00:00-07:00");
const FORM_URL = "#"; // TODO: reemplazar con el link que proporcione Filma Jalisco
const CONVOCATORIA_PDF = "/docs/convocatoria-gplgi-2026.pdf"; // TODO: subir PDF

export default function GPLGIConvocatoriaCTA() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const now = Date.now();

  if (now >= APPLY_AT) {
    return (
      <a
        href={FORM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="cta-button"
        data-anim="gplgi-cta"
        style={{ marginTop: "1.5rem" }}
      >
        Aplica ahora
      </a>
    );
  }

  if (now >= ANNOUNCE_AT) {
    return (
      <a
        href={CONVOCATORIA_PDF}
        target="_blank"
        rel="noopener noreferrer"
        download
        className="cta-button"
        data-anim="gplgi-cta"
        style={{ marginTop: "1.5rem" }}
      >
        Descarga la convocatoria
      </a>
    );
  }

  // Antes de la apertura la página ya muestra la fecha; el CTA no pinta nada.
  return null;
}

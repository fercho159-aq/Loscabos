"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export type SubscribeSource = "preventa" | "comunidad" | "la-baja-inspira" | "ffgf" | "prensa";

type Props = {
  open: boolean;
  onClose: () => void;
  source: SubscribeSource;
  title: string;
  description?: string;
  eyebrow?: string;
};

type Status = "idle" | "submitting" | "success" | "error";

const EYEBROW_BY_SOURCE: Record<SubscribeSource, string> = {
  preventa: "Preventa · FICC 2026",
  comunidad: "Comunidad FICC",
  "la-baja-inspira": "La Baja Inspira · 2026",
  ffgf: "Fondo Fílmico Gabriel Figueroa · 2026",
  prensa: "Prensa · FICC 2026",
};

export default function SubscribeModal({
  open,
  onClose,
  source,
  title,
  description,
  eyebrow,
}: Props) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [medio, setMedio] = useState("");
  const [cargo, setCargo] = useState("");
  const [consent, setConsent] = useState(false);
  const isPrensa = source === "prensa";
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [duplicate, setDuplicate] = useState(false);
  const [mounted, setMounted] = useState(false);
  const firstInputRef = useRef<HTMLInputElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const t = window.setTimeout(() => firstInputRef.current?.focus(), 80);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      window.clearTimeout(t);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      setStatus("idle");
      setErrorMsg(null);
      setDuplicate(false);
    }
  }, [open]);

  if (!open || !mounted) return null;

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "submitting") return;
    setErrorMsg(null);

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setErrorMsg("Ingresa un correo válido.");
      return;
    }
    if (!name.trim()) {
      setErrorMsg("Ingresa tu nombre.");
      return;
    }
    if (isPrensa && !medio.trim()) {
      setErrorMsg("Ingresa el medio.");
      return;
    }
    if (isPrensa && !cargo.trim()) {
      setErrorMsg("Ingresa tu cargo.");
      return;
    }
    if (!consent) {
      setErrorMsg("Debes aceptar el aviso de privacidad.");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          name: name.trim(),
          phone: isPrensa ? undefined : phone.trim() || undefined,
          medio: isPrensa ? medio.trim() : undefined,
          cargo: isPrensa ? cargo.trim() : undefined,
          source,
          consent,
        }),
      });
      const data = (await res.json().catch(() => null)) as {
        ok?: boolean;
        duplicate?: boolean;
        error?: string;
      } | null;
      if (!res.ok || !data?.ok) {
        setStatus("error");
        setErrorMsg(friendlyError(data?.error));
        return;
      }
      setDuplicate(Boolean(data.duplicate));
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMsg("No pudimos procesar tu registro. Intenta de nuevo.");
    }
  };

  const eyebrowText = eyebrow ?? EYEBROW_BY_SOURCE[source];

  return createPortal(
    <div
      className="subscribe-modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="subscribe-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="subscribe-modal" data-source={source} ref={dialogRef}>
        <button
          type="button"
          className="subscribe-modal-close"
          onClick={onClose}
          aria-label="Cerrar"
        >
          ×
        </button>

        {status === "success" ? (
          <div className="subscribe-modal-success">
            <span className="subscribe-modal-success-badge" aria-hidden="true">
              ✓
            </span>
            <p className="subscribe-modal-eyebrow">
              <span className="subscribe-modal-eyebrow-dot" aria-hidden="true" />
              {duplicate ? "Ya registrado" : "Registro confirmado"}
            </p>
            <h2 id="subscribe-modal-title" className="subscribe-modal-title">
              {duplicate ? "Ya estabas en la lista" : "¡Listo, nos vemos pronto!"}
            </h2>
            <p className="subscribe-modal-desc">
              {duplicate
                ? "Este correo ya forma parte de esta lista. Te escribiremos con la información en cuanto esté lista."
                : "Gracias por registrarte. Te contactaremos con la información del FICC Los Cabos en cuanto esté disponible."}
            </p>
            <button
              type="button"
              className="subscribe-modal-submit"
              onClick={onClose}
            >
              Cerrar
            </button>
          </div>
        ) : (
          <>
            <p className="subscribe-modal-eyebrow">
              <span className="subscribe-modal-eyebrow-dot" aria-hidden="true" />
              {eyebrowText}
            </p>
            <h2 id="subscribe-modal-title" className="subscribe-modal-title">
              {title}
            </h2>
            {description && (
              <p className="subscribe-modal-desc">{description}</p>
            )}

            <div className="subscribe-modal-divider" aria-hidden="true" />

            <form onSubmit={onSubmit} className="subscribe-modal-form" noValidate>
              <label className="subscribe-modal-field">
                <span>Nombre completo</span>
                <input
                  ref={firstInputRef}
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  autoComplete="name"
                  maxLength={120}
                  placeholder="Tu nombre"
                />
              </label>

              <label className="subscribe-modal-field">
                <span>Correo electrónico</span>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                  inputMode="email"
                  placeholder="nombre@correo.com"
                />
              </label>

              {isPrensa ? (
                <>
                  <label className="subscribe-modal-field">
                    <span>Medio</span>
                    <input
                      type="text"
                      name="medio"
                      value={medio}
                      onChange={(e) => setMedio(e.target.value)}
                      required
                      maxLength={120}
                      placeholder="Nombre del medio"
                    />
                  </label>

                  <label className="subscribe-modal-field">
                    <span>Cargo</span>
                    <input
                      type="text"
                      name="cargo"
                      value={cargo}
                      onChange={(e) => setCargo(e.target.value)}
                      required
                      maxLength={120}
                      placeholder="Tu cargo"
                    />
                  </label>
                </>
              ) : (
                <label className="subscribe-modal-field">
                  <span>Teléfono (opcional)</span>
                  <input
                    type="tel"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    autoComplete="tel"
                    inputMode="tel"
                    maxLength={40}
                    placeholder="+52 ..."
                  />
                </label>
              )}

              <label className="subscribe-modal-consent">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  required
                />
                <span>
                  Acepto el aviso de privacidad y el uso de mis datos para recibir
                  información del FICC Los Cabos.
                </span>
              </label>

              {errorMsg && (
                <p className="subscribe-modal-error" role="alert">
                  {errorMsg}
                </p>
              )}

              <button
                type="submit"
                className="subscribe-modal-submit"
                disabled={status === "submitting"}
                data-loading={status === "submitting" ? "true" : undefined}
              >
                {status === "submitting" ? "Enviando" : "Registrarme"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>,
    document.body,
  );
}

function friendlyError(code?: string): string {
  switch (code) {
    case "invalid_email":
      return "El correo no es válido.";
    case "invalid_name":
      return "Ingresa tu nombre.";
    case "invalid_phone":
      return "El teléfono no es válido.";
    case "invalid_medio":
      return "Ingresa el medio.";
    case "invalid_cargo":
      return "Ingresa tu cargo.";
    case "invalid_source":
      return "Origen inválido. Recarga la página.";
    case "consent_required":
      return "Debes aceptar el aviso de privacidad.";
    default:
      return "No pudimos procesar tu registro. Intenta de nuevo.";
  }
}

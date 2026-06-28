"use client";

import { useState } from "react";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (res.ok) {
        window.location.reload();
      } else {
        setError("Contraseña incorrecta");
      }
    } catch {
      setError("Error de conexión");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#0A1E23] px-5">
      <form
        onSubmit={submit}
        className="w-full max-w-sm rounded-2xl bg-[var(--color-cream)] p-8 shadow-2xl"
      >
        <p className="text-xs font-semibold uppercase tracking-[.15em] text-[var(--color-orange)]">
          FICC Los Cabos
        </p>
        <h1 className="mt-2 text-2xl font-black text-[var(--color-navy)]">Panel de registros</h1>
        <p className="mt-1 text-sm text-[var(--color-gray)]">Acceso solo para el equipo de marketing.</p>

        <label className="mt-6 block text-sm font-semibold text-[var(--color-navy)]">Contraseña</label>
        <input
          type="password"
          autoFocus
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-2 w-full rounded-lg border border-[var(--color-navy)]/20 bg-white px-4 py-3 text-[var(--color-navy)] outline-none focus:border-[var(--color-orange)]"
          placeholder="••••••••"
        />

        {error && <p className="mt-3 text-sm font-medium text-[var(--color-wine)]">{error}</p>}

        <button
          type="submit"
          disabled={loading || !password}
          className="mt-6 w-full rounded-lg bg-[var(--color-orange)] px-4 py-3 font-bold text-white transition hover:opacity-90 disabled:opacity-50"
        >
          {loading ? "Entrando…" : "Entrar"}
        </button>
      </form>
    </main>
  );
}

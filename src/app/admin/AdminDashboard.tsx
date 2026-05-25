"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

type Row = {
  id: number;
  email: string;
  name: string;
  phone: string | null;
  source: string;
  consent: boolean;
  medio: string | null;
  cargo: string | null;
  created_at: string;
};

type Stat = { source: string; n: number };

const SOURCE_LABELS: Record<string, string> = {
  preventa: "Preventa",
  comunidad: "Comunidad",
  "la-baja-inspira": "La Baja Inspira",
  ffgf: "FFGF",
  prensa: "Prensa",
};

const fmtDate = (iso: string) =>
  new Date(iso).toLocaleString("es-MX", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

export default function AdminDashboard() {
  const [rows, setRows] = useState<Row[]>([]);
  const [stats, setStats] = useState<Stat[]>([]);
  const [source, setSource] = useState("");
  const [q, setQ] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const params = useMemo(() => {
    const p = new URLSearchParams();
    if (source) p.set("source", source);
    if (q.trim()) p.set("q", q.trim());
    return p.toString();
  }, [source, q]);

  const load = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`/api/admin/registros?${params}`);
      if (res.status === 401) {
        window.location.reload();
        return;
      }
      const data = await res.json();
      if (data.ok) {
        setRows(data.rows);
        setStats(data.stats);
      } else {
        setError("No se pudieron cargar los registros");
      }
    } catch {
      setError("Error de conexión");
    } finally {
      setLoading(false);
    }
  }, [params]);

  useEffect(() => {
    const t = setTimeout(load, 250); // debounce de busqueda
    return () => clearTimeout(t);
  }, [load]);

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    window.location.reload();
  }

  const total = stats.reduce((a, s) => a + s.n, 0);

  return (
    <main className="min-h-screen bg-[var(--color-cream)] px-5 py-8 md:px-10 md:py-12">
      <div className="mx-auto max-w-6xl">
        <header className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.15em] text-[var(--color-orange)]">
              FICC Los Cabos · Marketing
            </p>
            <h1 className="mt-1 text-3xl font-black text-[var(--color-navy)]">Base de registros</h1>
          </div>
          <div className="flex gap-3">
            <a
              href={`/api/admin/registros?${params}${params ? "&" : ""}format=csv`}
              className="rounded-lg bg-[var(--color-navy)] px-4 py-2.5 text-sm font-bold text-white transition hover:opacity-90"
            >
              Exportar CSV
            </a>
            <button
              onClick={logout}
              className="rounded-lg border border-[var(--color-navy)]/20 px-4 py-2.5 text-sm font-semibold text-[var(--color-navy)] transition hover:bg-[var(--color-navy)]/5"
            >
              Salir
            </button>
          </div>
        </header>

        {/* Stats */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          <button
            onClick={() => setSource("")}
            className={`rounded-xl p-4 text-left transition ${
              source === "" ? "bg-[var(--color-orange)] text-white" : "bg-white text-[var(--color-navy)]"
            }`}
          >
            <div className="text-2xl font-black">{total}</div>
            <div className="text-xs font-semibold uppercase tracking-wide opacity-80">Total</div>
          </button>
          {stats.map((s) => (
            <button
              key={s.source}
              onClick={() => setSource(source === s.source ? "" : s.source)}
              className={`rounded-xl p-4 text-left transition ${
                source === s.source ? "bg-[var(--color-orange)] text-white" : "bg-white text-[var(--color-navy)]"
              }`}
            >
              <div className="text-2xl font-black">{s.n}</div>
              <div className="text-xs font-semibold uppercase tracking-wide opacity-80">
                {SOURCE_LABELS[s.source] ?? s.source}
              </div>
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Buscar por email o nombre…"
            className="flex-1 min-w-[220px] rounded-lg border border-[var(--color-navy)]/20 bg-white px-4 py-2.5 text-[var(--color-navy)] outline-none focus:border-[var(--color-orange)]"
          />
          <span className="text-sm text-[var(--color-gray)]">
            {loading ? "Cargando…" : `${rows.length} resultado${rows.length === 1 ? "" : "s"}`}
          </span>
        </div>

        {error && <p className="mt-4 text-sm font-medium text-[var(--color-wine)]">{error}</p>}

        {/* Table */}
        <div className="mt-4 overflow-x-auto rounded-xl border border-[var(--color-navy)]/10 bg-white">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-[var(--color-navy)]/10 text-xs uppercase tracking-wide text-[var(--color-gray)]">
              <tr>
                <th className="px-4 py-3">Fecha</th>
                <th className="px-4 py-3">Nombre</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Teléfono</th>
                <th className="px-4 py-3">Origen</th>
                <th className="px-4 py-3">Medio / Cargo</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-navy)]/5 text-[var(--color-navy)]">
              {rows.map((r) => (
                <tr key={r.id} className="hover:bg-[var(--color-cream)]/60">
                  <td className="whitespace-nowrap px-4 py-3 text-[var(--color-gray)]">{fmtDate(r.created_at)}</td>
                  <td className="px-4 py-3 font-semibold">{r.name}</td>
                  <td className="px-4 py-3">{r.email}</td>
                  <td className="px-4 py-3">{r.phone ?? "—"}</td>
                  <td className="px-4 py-3">
                    <span className="rounded-full bg-[var(--color-navy)]/5 px-2.5 py-1 text-xs font-semibold">
                      {SOURCE_LABELS[r.source] ?? r.source}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-[var(--color-gray)]">
                    {[r.medio, r.cargo].filter(Boolean).join(" · ") || "—"}
                  </td>
                </tr>
              ))}
              {!loading && rows.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-4 py-10 text-center text-[var(--color-gray)]">
                    Sin registros.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { sql } from "@/lib/db";
import { ADMIN_COOKIE, verifyToken } from "@/lib/auth";
import { buildXlsx } from "@/lib/xlsx";

export const runtime = "edge";

const SOURCES = new Set(["preventa", "comunidad", "la-baja-inspira", "ffgf", "prensa"]);

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

function csvCell(v: unknown): string {
  const s = v === null || v === undefined ? "" : v instanceof Date ? v.toISOString() : String(v);
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

export async function GET(req: Request) {
  const store = await cookies();
  const ok = await verifyToken(store.get(ADMIN_COOKIE)?.value);
  if (!ok) {
    return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
  }

  const url = new URL(req.url);
  const source = url.searchParams.get("source") ?? "";
  const q = (url.searchParams.get("q") ?? "").trim().slice(0, 120);
  const format = url.searchParams.get("format");

  const conds: string[] = [];
  const params: unknown[] = [];
  if (SOURCES.has(source)) {
    params.push(source);
    conds.push(`source = $${params.length}`);
  }
  if (q) {
    params.push(`%${q}%`);
    conds.push(`(email ILIKE $${params.length} OR name ILIKE $${params.length})`);
  }
  const where = conds.length ? `WHERE ${conds.join(" AND ")}` : "";

  try {
    const rows = (await sql.query(
      `SELECT id, email, name, phone, source, consent, medio, cargo, created_at
       FROM registrations ${where} ORDER BY created_at DESC`,
      params,
    )) as Row[];

    const header = ["id", "email", "name", "phone", "source", "consent", "medio", "cargo", "created_at"];
    const stamp = new Date().toISOString().slice(0, 10);

    if (format === "csv") {
      const lines = [header.join(",")];
      for (const r of rows) {
        lines.push(header.map((h) => csvCell((r as Record<string, unknown>)[h])).join(","));
      }
      return new Response("﻿" + lines.join("\n"), {
        headers: {
          "Content-Type": "text/csv; charset=utf-8",
          "Content-Disposition": `attachment; filename="registros-ficc-${stamp}.csv"`,
        },
      });
    }

    if (format === "xlsx") {
      const norm = (v: unknown) => (v instanceof Date ? v.toISOString() : (v as string | number | boolean | null));
      const matrix = [header, ...rows.map((r) => header.map((h) => norm((r as Record<string, unknown>)[h])))];
      const buf = buildXlsx(matrix, "Registros FICC");
      const body = new ArrayBuffer(buf.length);
      new Uint8Array(body).set(buf);
      return new Response(body, {
        headers: {
          "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          "Content-Disposition": `attachment; filename="registros-ficc-${stamp}.xlsx"`,
        },
      });
    }

    const stats = (await sql.query(
      `SELECT source, count(*)::int AS n FROM registrations GROUP BY source ORDER BY n DESC`,
      [],
    )) as { source: string; n: number }[];

    return NextResponse.json({ ok: true, rows, total: rows.length, stats });
  } catch (err) {
    console.error("registros query failed", err);
    return NextResponse.json({ ok: false, error: "server_error" }, { status: 500 });
  }
}

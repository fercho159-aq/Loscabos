import { NextResponse } from "next/server";
import { sql } from "@/lib/db";

export const runtime = "edge";

const SOURCES = new Set(["preventa", "comunidad", "la-baja-inspira", "ffgf"]);
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Body = {
  email?: unknown;
  name?: unknown;
  phone?: unknown;
  source?: unknown;
  consent?: unknown;
};

export async function POST(req: Request) {
  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  const name = typeof body.name === "string" ? body.name.trim() : "";
  const phone = typeof body.phone === "string" && body.phone.trim() ? body.phone.trim() : null;
  const source = typeof body.source === "string" ? body.source : "";
  const consent = body.consent === true;

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 });
  }
  if (!name || name.length > 120) {
    return NextResponse.json({ ok: false, error: "invalid_name" }, { status: 400 });
  }
  if (!SOURCES.has(source)) {
    return NextResponse.json({ ok: false, error: "invalid_source" }, { status: 400 });
  }
  if (!consent) {
    return NextResponse.json({ ok: false, error: "consent_required" }, { status: 400 });
  }
  if (phone && phone.length > 40) {
    return NextResponse.json({ ok: false, error: "invalid_phone" }, { status: 400 });
  }

  const userAgent = req.headers.get("user-agent")?.slice(0, 400) ?? null;

  try {
    const rows = await sql`
      INSERT INTO registrations (email, name, phone, source, consent, user_agent)
      VALUES (${email}, ${name}, ${phone}, ${source}, ${consent}, ${userAgent})
      ON CONFLICT (email, source) DO NOTHING
      RETURNING id
    `;
    const inserted = rows.length > 0;
    return NextResponse.json({ ok: true, duplicate: !inserted });
  } catch (err) {
    console.error("register insert failed", err);
    return NextResponse.json({ ok: false, error: "server_error" }, { status: 500 });
  }
}

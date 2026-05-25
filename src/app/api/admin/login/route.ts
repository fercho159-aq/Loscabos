import { NextResponse } from "next/server";
import { sql } from "@/lib/db";
import { ADMIN_COOKIE, COOKIE_MAX_AGE, createToken, verifyPassword } from "@/lib/auth";

export const runtime = "edge";

export async function POST(req: Request) {
  let password = "";
  try {
    const body = (await req.json()) as { password?: unknown };
    password = typeof body.password === "string" ? body.password : "";
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  if (!password) {
    return NextResponse.json({ ok: false, error: "invalid_password" }, { status: 401 });
  }

  // Login compartido: la clave es valida si coincide con cualquier usuario activo.
  const users = (await sql`
    SELECT password_hash FROM admin_users WHERE active = true
  `) as { password_hash: string }[];

  let match = false;
  for (const u of users) {
    if (await verifyPassword(u.password_hash, password)) match = true;
  }

  if (!match) {
    return NextResponse.json({ ok: false, error: "invalid_password" }, { status: 401 });
  }

  const token = await createToken();
  const res = NextResponse.json({ ok: true });
  res.cookies.set(ADMIN_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: COOKIE_MAX_AGE,
  });
  return res;
}

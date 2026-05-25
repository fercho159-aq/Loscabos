// Administra usuarios del panel /admin (passwords con hash PBKDF2 en DB).
//
//   node scripts/admin-user.mjs set <email> <password>   # crea o cambia password
//   node scripts/admin-user.mjs list                      # lista usuarios
//   node scripts/admin-user.mjs disable <email>           # desactiva
//
// Requiere DATABASE_URL (cargado de .env.local automaticamente).

import { readFileSync } from "node:fs";
import { neon } from "@neondatabase/serverless";

// Carga simple de .env.local
try {
  const env = readFileSync(new URL("../.env.local", import.meta.url), "utf8");
  for (const line of env.split("\n")) {
    const m = line.match(/^\s*([A-Z_]+)\s*=\s*['"]?(.*?)['"]?\s*$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2];
  }
} catch {}

if (!process.env.DATABASE_URL) {
  console.error("Falta DATABASE_URL");
  process.exit(1);
}
const sql = neon(process.env.DATABASE_URL);

const ITER = 100_000;
const hex = (b) => [...b].map((x) => x.toString(16).padStart(2, "0")).join("");

async function hashPassword(password) {
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(password), "PBKDF2", false, ["deriveBits"]);
  const bits = await crypto.subtle.deriveBits({ name: "PBKDF2", salt, iterations: ITER, hash: "SHA-256" }, key, 256);
  return `pbkdf2$${ITER}$${hex(salt)}$${hex(new Uint8Array(bits))}`;
}

async function ensureTable() {
  await sql`
    CREATE TABLE IF NOT EXISTS admin_users (
      id serial PRIMARY KEY,
      email text UNIQUE NOT NULL,
      password_hash text NOT NULL,
      active boolean NOT NULL DEFAULT true,
      created_at timestamptz NOT NULL DEFAULT now()
    )
  `;
}

const [cmd, email, password] = process.argv.slice(2);

(async () => {
  await ensureTable();
  if (cmd === "set") {
    if (!email || !password) throw new Error("uso: set <email> <password>");
    const hash = await hashPassword(password);
    await sql`
      INSERT INTO admin_users (email, password_hash, active)
      VALUES (${email.toLowerCase()}, ${hash}, true)
      ON CONFLICT (email) DO UPDATE SET password_hash = EXCLUDED.password_hash, active = true
    `;
    console.log(`OK — usuario ${email} listo (password actualizado).`);
  } else if (cmd === "disable") {
    await sql`UPDATE admin_users SET active = false WHERE email = ${email.toLowerCase()}`;
    console.log(`OK — ${email} desactivado.`);
  } else if (cmd === "list") {
    const rows = await sql`SELECT email, active, created_at FROM admin_users ORDER BY created_at`;
    console.table(rows);
  } else {
    console.log("comandos: set <email> <password> | disable <email> | list");
  }
})().catch((e) => {
  console.error("ERROR:", e.message);
  process.exit(1);
});

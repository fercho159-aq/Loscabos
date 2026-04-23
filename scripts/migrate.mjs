import { neon } from "@neondatabase/serverless";
import fs from "node:fs";
import path from "node:path";

const envFile = fs.readFileSync(path.join(process.cwd(), ".env.local"), "utf8");
for (const line of envFile.split("\n")) {
  const m = line.match(/^([A-Z_][A-Z0-9_]*)=(.*)$/);
  if (m) process.env[m[1]] = m[2];
}

if (!process.env.DATABASE_URL) {
  console.error("DATABASE_URL not set");
  process.exit(1);
}

const sql = neon(process.env.DATABASE_URL);

const statements = [
  `CREATE TABLE IF NOT EXISTS registrations (
     id          SERIAL PRIMARY KEY,
     email       TEXT NOT NULL,
     name        TEXT NOT NULL,
     phone       TEXT,
     source      TEXT NOT NULL CHECK (source IN ('preventa','comunidad','la-baja-inspira')),
     consent     BOOLEAN NOT NULL,
     user_agent  TEXT,
     created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
     UNIQUE (email, source)
   )`,
  `CREATE INDEX IF NOT EXISTS idx_registrations_source     ON registrations(source)`,
  `CREATE INDEX IF NOT EXISTS idx_registrations_created_at ON registrations(created_at DESC)`,
];

for (const stmt of statements) {
  console.log("Running:", stmt.split("\n")[0].slice(0, 80));
  await sql.query(stmt);
}

const rows = await sql`SELECT COUNT(*)::int AS n FROM registrations`;
console.log("registrations row count:", rows[0].n);
console.log("Migration complete.");

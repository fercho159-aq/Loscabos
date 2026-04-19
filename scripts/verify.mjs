import { neon } from "@neondatabase/serverless";
import fs from "node:fs";
import path from "node:path";

const envFile = fs.readFileSync(path.join(process.cwd(), ".env.local"), "utf8");
for (const line of envFile.split("\n")) {
  const m = line.match(/^([A-Z_][A-Z0-9_]*)=(.*)$/);
  if (m) process.env[m[1]] = m[2];
}

const sql = neon(process.env.DATABASE_URL);
const counts = await sql`SELECT source, COUNT(*)::int AS n FROM registrations GROUP BY source ORDER BY source`;
console.log("counts by source:", counts);
const rows = await sql`SELECT id, email, name, phone, source, consent, created_at FROM registrations ORDER BY id DESC LIMIT 10`;
console.log("latest rows:");
for (const r of rows) console.log(r);

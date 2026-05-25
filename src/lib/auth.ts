// Auth de sesion para el panel /admin. Edge-compatible (Web Crypto, sin deps).
// Cookie httpOnly firmada con HMAC-SHA256. No guarda nada en DB.

export const ADMIN_COOKIE = "ficc_admin";
const SESSION_MS = 8 * 60 * 60 * 1000; // 8h

const enc = new TextEncoder();

function getSecret(): string {
  const s = process.env.AUTH_SECRET;
  if (!s) throw new Error("AUTH_SECRET no esta configurado");
  return s;
}

async function hmacHex(secret: string, msg: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    enc.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const sig = await crypto.subtle.sign("HMAC", key, enc.encode(msg));
  return [...new Uint8Array(sig)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

// Comparacion en tiempo constante (evita timing attacks).
function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

export function checkPassword(input: string): boolean {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) throw new Error("ADMIN_PASSWORD no esta configurado");
  return safeEqual(input, expected);
}

export async function createToken(): Promise<string> {
  const exp = String(Date.now() + SESSION_MS);
  const sig = await hmacHex(getSecret(), exp);
  return `${exp}.${sig}`;
}

export async function verifyToken(token: string | undefined): Promise<boolean> {
  if (!token) return false;
  const dot = token.indexOf(".");
  if (dot < 0) return false;
  const exp = token.slice(0, dot);
  const sig = token.slice(dot + 1);
  const expMs = Number(exp);
  if (!Number.isFinite(expMs) || expMs < Date.now()) return false;
  const expected = await hmacHex(getSecret(), exp);
  return safeEqual(sig, expected);
}

export const COOKIE_MAX_AGE = SESSION_MS / 1000;

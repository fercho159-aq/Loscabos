/** Iniciales para el placeholder de una persona sin foto. */
export function initials(name: string) {
  const parts = name
    .replace(/^(Dra?\.|Dr\.|Chef)\s+/i, "")
    .split(/\s+/)
    .filter(Boolean);
  return ((parts[0]?.[0] ?? "") + (parts[1]?.[0] ?? "")).toUpperCase();
}

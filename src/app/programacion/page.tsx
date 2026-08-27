import { redirect } from "next/navigation";

// La programación vive en /programacion-2026; esta ruta se conserva por los
// enlaces viejos que siguen apuntando aquí.
export default function Programacion() {
  redirect("/programacion-2026");
}

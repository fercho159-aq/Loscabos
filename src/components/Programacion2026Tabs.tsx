import Link from "next/link";
import { PREVIEW_SELECTION_URL } from "@/lib/seleccion-oficial-2026-data";
import styles from "./Programacion2026Tabs.module.css";

export default function Programacion2026Tabs({ active }: { active: "programacion" | "seleccion" }) {
  return (
    <nav className={styles.tabs} aria-label="Programación 2026">
      <Link href="/programacion-2026-preview" aria-current={active === "programacion" ? "page" : undefined}>Programación</Link>
      <Link href={PREVIEW_SELECTION_URL} aria-current={active === "seleccion" ? "page" : undefined}>Selección oficial</Link>
    </nav>
  );
}

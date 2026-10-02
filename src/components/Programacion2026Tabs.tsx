import Link from "next/link";
import { programasPeliculas2026 } from "@/lib/seleccion-oficial-2026-data";
import styles from "./Programacion2026Tabs.module.css";

type ProgramaTab = "programacion" | "seleccion" | "la-baja-inspira" | "animacion" | "frequencies-of-now" | "next-wave";

const tabs = [
  { id: "programacion", title: "Programación", href: "/programacion-2026-preview" },
  ...programasPeliculas2026.filter((programa) => programa.id !== "next-wave"),
  { id: "frequencies-of-now", title: "Frequencies of Now", href: "/programacion-2026-preview/frequencies-of-now" },
  ...programasPeliculas2026.filter((programa) => programa.id === "next-wave"),
];

export default function Programacion2026Tabs({ active }: { active: ProgramaTab }) {
  return (
    <nav className={styles.tabs} aria-label="Programación 2026">
      {tabs.map((tab) => (
        <Link key={tab.id} href={tab.href} aria-current={active === tab.id ? "page" : undefined}>{tab.title}</Link>
      ))}
    </nav>
  );
}

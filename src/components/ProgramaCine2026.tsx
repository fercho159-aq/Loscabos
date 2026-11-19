"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./ProgramaCine2026.module.css";

export type Linea = { title: string; meta: string; href?: string };
export type FuncionLigada = Linea & { time: string; sala: string; films?: Linea[] };
export type DiaLigado = { id: string; label: string; funciones: FuncionLigada[] };

const Titulo = ({ title, href }: Linea) => (href ? <Link href={href}>{title}</Link> : <>{title}</>);

export default function ProgramaCine2026({ dias }: { dias: DiaLigado[] }) {
  const [activo, setActivo] = useState(dias[0].id);
  const dia = dias.find((d) => d.id === activo) ?? dias[0];

  return (
    <section className={styles.programa} aria-label="Programa de cine por día">
      <div className={styles.days} role="tablist">
        {dias.map((d) => (
          <button key={d.id} type="button" role="tab" aria-selected={d.id === activo} aria-controls={`programa-${d.id}`} onClick={() => setActivo(d.id)}>
            {d.label}
          </button>
        ))}
      </div>

      <ul className={styles.list} id={`programa-${dia.id}`} role="tabpanel" aria-label={dia.label}>
        {dia.funciones.map((fn, i) => (
          <li key={i} className={styles.item}>
            <p className={styles.when}>{fn.time} hrs | {fn.sala}</p>
            <h3 className={styles.title}><Titulo {...fn} /></h3>
            <p className={styles.meta}>{fn.meta}</p>
            {fn.films && (
              <ul className={styles.films}>
                {fn.films.map((film) => (
                  <li key={film.title}>
                    <h4 className={styles.title}><Titulo {...film} /></h4>
                    <p className={styles.meta}>{film.meta}</p>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

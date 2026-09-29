"use client";

import { useMemo, useState, type CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { categorias2026, peliculas2026, PREVIEW_FILM_BASE } from "@/lib/seleccion-oficial-2026-data";
import styles from "./SeleccionOficial2026.module.css";

type SelectionSection = {
  id: string;
  label: string;
  color: string;
  lightText?: boolean;
  categoryIds?: string[];
  href?: string;
};

const sections: SelectionSection[] = [
  { id: "marejada-internacional", label: "Marejada: Panorama de Largometrajes Internacionales", color: "#0A1E23", lightText: true, categoryIds: ["marejada-internacional"] },
  { id: "marejada-nacional", label: "Marejada: Panorama de Largometrajes Nacionales", color: "#A3CDD5", categoryIds: ["marejada-nacional"] },
  { id: "animacion", label: "Animación", color: "#90A79C", categoryIds: ["animacion", "filma-jalisco"] },
  { id: "la-baja-inspira", label: "La Baja Inspira", color: "#FA6935", href: "/la-baja-inspira" },
  { id: "next-wave", label: "The Next Wave — Emerging Filmmakers Panel", color: "#E5AC82", categoryIds: ["next-wave"] },
  { id: "homenaje", label: "Homenaje 2026 — Dolores Heredia", color: "#886D5E", lightText: true, categoryIds: ["homenaje"] },
  { id: "proyecciones-especiales", label: "Proyección especial", color: "#ECE8DF", categoryIds: ["proyecciones-especiales"] },
];

function normalize(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase("es");
}

export default function SeleccionOficial2026() {
  const [categoryId, setCategoryId] = useState("all");
  const [query, setQuery] = useState("");
  const films = useMemo(() => {
    const search = normalize(query.trim());
    const selectedSection = sections.find((section) => section.id === categoryId);
    return peliculas2026.filter((film) =>
      (categoryId === "all" || selectedSection?.categoryIds?.includes(film.categoryId)) &&
      (!search || normalize(`${film.title} ${film.directors}`).includes(search)),
    );
  }, [categoryId, query]);

  return (
    <section id="seleccion-oficial" className={styles.section} aria-labelledby="seleccion-oficial-title">
      <header className={styles.header}>
        <h1 id="seleccion-oficial-title">Selección oficial</h1>
        <p className={styles.intro}>Descubre las películas de esta edición.</p>
      </header>

      <nav className={styles.categories} aria-label="Secciones de la selección oficial">
        {sections.map((section) => {
          const sectionStyle = { "--section-color": section.color, "--section-text": section.lightText ? "#F6EDDB" : "#0A1E23" } as CSSProperties;
          return section.href ? (
            <Link key={section.id} href={section.href} className={styles.categoryRibbon} style={sectionStyle}>
              {section.label}<span className={styles.ribbonIcon} aria-hidden="true">↗</span>
            </Link>
          ) : (
            <button key={section.id} className={styles.categoryRibbon} style={sectionStyle} type="button" aria-pressed={categoryId === section.id} aria-controls="seleccion-peliculas" onClick={() => setCategoryId(categoryId === section.id ? "all" : section.id)}>
              {section.label}<span className={styles.ribbonIcon} aria-hidden="true">{categoryId === section.id ? "✓" : ""}</span>
            </button>
          );
        })}
      </nav>

      <div className={styles.controls}>
        <button className={styles.allFilter} type="button" aria-pressed={categoryId === "all"} aria-controls="seleccion-peliculas" onClick={() => setCategoryId("all")}>
          Todas las películas <span>{peliculas2026.length}</span>
        </button>
        <label className={styles.search}>
          <span>Buscar película o dirección</span>
          <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Título, directora o director…" autoComplete="off" />
        </label>
      </div>

      <p className={styles.resultCount} role="status" aria-live="polite" aria-atomic="true">
        {films.length} {films.length === 1 ? "película" : "películas"}
      </p>
      {films.length ? (
        <div id="seleccion-peliculas" className={styles.grid}>
          {films.map((film) => {
            const category = categorias2026.find((item) => item.id === film.categoryId);
            const image = film.image;
            return (
              <article key={film.slug} className={styles.card} style={{ "--film-accent": category?.color || "#FA6935", "--film-label-color": ["marejada-internacional", "homenaje"].includes(film.categoryId) ? "#F6EDDB" : "#0A1E23" } as CSSProperties}>
                <Link href={`${PREVIEW_FILM_BASE}/${film.slug}`} className={styles.cardLink}>
                  <div className={`${styles.media} ${image ? styles.mediaWithImage : ""}`}>
                    {image ? (
                      <Image src={image} alt={`Still de ${film.title}`} fill sizes="(max-width: 600px) 100vw, (max-width: 950px) 50vw, 33vw" unoptimized={image.startsWith("http")} className={styles.image} />
                    ) : (
                      <div className={styles.placeholder}>
                        <span className={styles.placeholderTitle}>{film.title}</span>
                        <span className={styles.pending}>Still por confirmar</span>
                      </div>
                    )}
                    <span className={styles.category}>{category?.label}</span>
                  </div>
                  <h3>{film.title}</h3>
                </Link>
                <p className={styles.director}>Dir. {film.directors}</p>
                <p className={styles.facts}>{[film.countries, film.year, film.duration].filter(Boolean).join(" · ")}</p>
                <p className={styles.synopsis}>{film.synopsis || "Sinopsis por confirmar."}</p>
              </article>
            );
          })}
        </div>
      ) : (
        <div id="seleccion-peliculas" className={styles.empty}>
          <p>No encontramos películas con estos filtros.</p>
          <button type="button" onClick={() => { setCategoryId("all"); setQuery(""); }}>Ver todas las películas</button>
        </div>
      )}
    </section>
  );
}

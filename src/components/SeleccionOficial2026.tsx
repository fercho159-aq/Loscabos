"use client";

import { useMemo, useState, type CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { categoriasSeleccion2026, peliculasSeleccion2026, PREVIEW_FILM_BASE } from "@/lib/seleccion-oficial-2026-data";
import styles from "./SeleccionOficial2026.module.css";

function normalize(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase("es");
}

export default function SeleccionOficial2026() {
  const [categoryId, setCategoryId] = useState("all");
  const [query, setQuery] = useState("");
  const films = useMemo(() => {
    const search = normalize(query.trim());
    return peliculasSeleccion2026.filter((film) =>
      (categoryId === "all" || film.categoryId === categoryId) &&
      (!search || normalize(`${film.title} ${film.directors}`).includes(search)),
    );
  }, [categoryId, query]);

  return (
    <section id="seleccion-oficial" className={styles.section} aria-labelledby="seleccion-oficial-title">
      <header className={styles.header}>
        <h1 id="seleccion-oficial-title">Selección oficial</h1>
        <p className={styles.intro}>Descubre las películas de esta edición.</p>
      </header>

      <div className={styles.controls}>
        <div className={styles.categories} role="group" aria-label="Filtrar por sección">
          <button className={styles.allFilter} type="button" aria-pressed={categoryId === "all"} aria-controls="seleccion-peliculas" onClick={() => setCategoryId("all")}>
            Todas <span>{peliculasSeleccion2026.length}</span>
          </button>
          {categoriasSeleccion2026.map((category) => (
            <button
              key={category.id}
              className={styles.categoryFilter}
              style={{ "--section-color": category.color, "--section-text": ["marejada-internacional", "homenaje"].includes(category.id) ? "#F6EDDB" : "#0A1E23" } as CSSProperties}
              type="button"
              aria-pressed={categoryId === category.id}
              aria-controls="seleccion-peliculas"
              onClick={() => setCategoryId(categoryId === category.id ? "all" : category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>
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
            const category = categoriasSeleccion2026.find((item) => item.id === film.categoryId);
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

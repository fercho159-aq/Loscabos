import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Programacion2026Animations from "@/components/Programacion2026Animations";
import Programacion2026Tabs from "@/components/Programacion2026Tabs";
import { eventos2026 } from "@/lib/programacion-2026-preview-data";
import { peliculas2026, PREVIEW_FILM_BASE } from "@/lib/seleccion-oficial-2026-data";
import { initials } from "@/lib/initials";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return eventos2026.map((ev) => ({ slug: ev.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const ev = eventos2026.find((e) => e.slug === slug);
  if (!ev) return {};
  const description = ev.body[0].slice(0, 160);
  return {
    title: `${ev.title} | Programación 2026 FICC Los Cabos`,
    description,
    alternates: { canonical: `/programacion-2026-preview/${slug}` },
    openGraph: {
      title: `${ev.title} | Programación 2026 FICC Los Cabos`,
      description,
      url: `/programacion-2026-preview/${slug}`,
      images: [{ url: ev.image, width: 1600, height: 900 }],
    },
    // La sección está fuera del menú hasta el anuncio oficial. Borrar al lanzar.
    robots: { index: false, follow: false },
  };
}

export default async function EventoDetalle({ params }: Props) {
  const { slug } = await params;
  const ev = eventos2026.find((e) => e.slug === slug);
  if (!ev) notFound();

  const idx = eventos2026.findIndex((e) => e.slug === slug);
  const prev = eventos2026[idx - 1] ?? null;
  const next = eventos2026[idx + 1] ?? null;
  const filmCategory = slug === "panel-the-next-wave"
    ? "next-wave"
    : slug === "homenaje-dolores-heredia" ? "homenaje" : null;
  const relatedFilms = peliculas2026.filter((film) => film.categoryId === filmCategory);

  return (
    <>
      <Navbar />

      {slug === "panel-the-next-wave" && (
        <div style={{ paddingTop: "7rem" }}><Programacion2026Tabs active="next-wave" /></div>
      )}

      <div className="p26-detail-page" style={{ "--cat": ev.accent } as CSSProperties}>
        {/* Encabezado: eyebrow monoespaciado + titular grande sobre plano claro. */}
        <header className="p26-header">
          <p className="p26-eyebrow p26-header-eyebrow">
            <Link href="/programacion-2026-preview">
              <span className="p26-underline">Programación 2026</span>
            </Link>
          </p>
          <h1 className="p26-detail-title">{ev.title}</h1>
        </header>

        <figure className="p26-figure">
          <div className="p26-figure-media">
            <Image
              src={ev.image}
              alt={ev.imageAlt}
              fill
              sizes="(max-width: 1600px) 100vw, 1600px"
              priority
              className="p26-figure-img"
            />
          </div>
        </figure>

        {/* Cuerpo a dos columnas: fecha y sede a la izquierda, texto a la derecha. */}
        <div className="p26-two-col">
          <div className="p26-col-side">
            {ev.date && <h2 className="p26-detail-date">{ev.date}</h2>}
            {(ev.venue || ev.credit) && (
              <div className="p26-detail-facts">
                {ev.venue && <p>{ev.venue}</p>}
                {ev.credit && <p>{ev.credit}</p>}
              </div>
            )}
          </div>

          <div className="p26-col-main">
            <div className="p26-prose">
              {ev.body.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>

            {ev.presentedBy && ev.presentedBy.length > 0 && (
              <aside className="p26-presented">
                <span className="p26-presented-label">Presentado por</span>
                <div className="p26-presented-logos">
                  {ev.presentedBy.map((brand) => (
                    <Image
                      key={brand.name}
                      src={brand.logo}
                      alt={brand.name}
                      width={brand.width}
                      height={brand.height}
                      className="p26-presented-logo"
                    />
                  ))}
                </div>
              </aside>
            )}
          </div>
        </div>

        {ev.groups?.map((group) => (
          <section key={group.title} className="p26-people">
            <header data-anim="p26-head" className="p26-divider">
              <hr />
              <h2 className="p26-section-title">{group.title}</h2>
            </header>
            <div className={`p26-people-grid p26-people-grid--${group.layout}`}>
              {group.people.map((person) => (
                <article key={person.name} data-anim="p26-person" className="p26-person">
                  <div className="p26-person-photo">
                    {person.image ? (
                      <Image
                        src={person.image}
                        alt={person.name}
                        fill
                        sizes="(max-width: 760px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        className="p26-person-img"
                      />
                    ) : (
                      <span className="p26-person-initials" aria-hidden="true">
                        {initials(person.name)}
                      </span>
                    )}
                  </div>
                  <h3 className="p26-person-name">{person.name}</h3>
                  {person.country && <p className="p26-person-country">{person.country}</p>}
                  {person.meta && <p className="p26-person-meta">{person.meta}</p>}
                  {person.bio && <p className="p26-person-bio">{person.bio}</p>}
                </article>
              ))}
            </div>
          </section>
        ))}

        {relatedFilms.length > 0 && (
          <section className="px-5 pb-16 md:px-8" aria-labelledby="peliculas-del-programa">
            <h2 id="peliculas-del-programa" className="mb-6 text-2xl font-semibold md:text-3xl">Películas de este programa</h2>
            <ul className="grid gap-x-8 gap-y-4 md:grid-cols-2">
              {relatedFilms.map((film) => (
                <li key={film.slug}>
                  <Link href={`${PREVIEW_FILM_BASE}/${film.slug}`} className="p26-underline text-lg font-semibold">
                    {film.title}
                  </Link>
                  <p className="mt-1 text-sm">Dir. {film.directors}</p>
                </li>
              ))}
            </ul>
          </section>
        )}

        <nav className="p26-nav">
          {prev ? (
            <Link href={`/programacion-2026-preview/${prev.slug}`} className="p26-nav-item p26-nav-item--prev">
              <span className="p26-nav-label">← Anterior</span>
              <span className="p26-nav-title">
                <span className="p26-underline">{prev.cardTitle ?? prev.title}</span>
              </span>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link href={`/programacion-2026-preview/${next.slug}`} className="p26-nav-item p26-nav-item--next">
              <span className="p26-nav-label">Siguiente →</span>
              <span className="p26-nav-title">
                <span className="p26-underline">{next.cardTitle ?? next.title}</span>
              </span>
            </Link>
          ) : (
            <div />
          )}
        </nav>
      </div>

      <Footer />
      <Programacion2026Animations />
    </>
  );
}

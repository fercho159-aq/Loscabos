"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GradientBlobs } from "@/components/three";
import { ScrollContainer } from "@/components/ScrollAnimations";
import PageHero from "@/components/PageHero";

const plataformas = [
  {
    title: "La Baja Inspira",
    description:
      "Un programa integral de formación, desarrollo y producción que impulsa el talento creativo de Baja California Sur, conectando cineastas locales con la industria audiovisual internacional.",
    href: "/la-baja-inspira",
    bg: "bg-lime",
    cta: "Conoce más",
    image: "/images/webpdf/img-025.jpg",
    accent: "#BDC957",
  },
  {
    title: "Fondo Fílmico Gabriel Figueroa",
    description:
      "Fondo de apoyo a la postproducción de largometrajes latinoamericanos que busca impulsar voces emergentes y consolidar proyectos cinematográficos con visión autoral.",
    href: "/ffgf",
    bg: "bg-lavender",
    cta: "Conoce más",
    image: "/images/webpdf/img-010.jpg",
    accent: "#6687C3",
  },
  {
    title: "Guión para la Gran Industria",
    description:
      "Convocatoria especializada en guion cinematográfico de largometraje: estímulo económico, taller de pulido con casas productoras y ruta de producción para el proyecto seleccionado.",
    href: "/guion-para-la-gran-industria",
    bg: "bg-blush",
    cta: "Conoce más",
    image: "/images/gplgi-hero-poster.jpg",
    accent: "#E9B0BD",
  },
];

export default function PlataformasDeImpulso() {
  return (
    <ScrollContainer>
      <Navbar />

      {/* Hero banner */}
      <PageHero lines={["Plataformas de apoyo", "a la industria"]} />

      {/* Intro text */}
      <section className="festival-text" style={{ position: "relative", overflow: "hidden" }}>
        <GradientBlobs
          color1="#081722"
          color2="#081722"
          color3="#6687C3"
          speed={0.1}
        />
        <div className="festival-text-container" style={{ position: "relative", zIndex: 2 }}>
          <p className="gsap-fade-up">
            Las plataformas de apoyo a la industria del FICC Los Cabos son el corazón de
            nuestra misión: crear puentes entre el talento emergente y la industria
            cinematográfica global. A través de programas especializados, ofrecemos formación,
            financiamiento y visibilidad a proyectos que transforman el panorama
            audiovisual de México y Latinoamérica.
          </p>
        </div>
      </section>

      {/* Full-bleed stacked cards with parallax — unique to this page */}
      <section className="plat-fullbleed-stack">
        {plataformas.map((p, i) => (
          <div key={p.title} className="plat-fullbleed-card">
            {/* Parallax background image */}
            <div className="plat-fullbleed-img">
              <Image
                src={p.image}
                alt={`${p.title} — plataforma de apoyo a la industria FICC Los Cabos`}
                fill
                sizes="100vw"
                style={{ objectFit: "cover" }}
                className="gsap-parallax"
                data-speed="0.5"
              />
              <div className="plat-fullbleed-overlay" />
            </div>

            {/* Floating content panel */}
            <div className={`plat-floating-panel ${i % 2 === 0 ? "panel-left" : "panel-right"} ${p.bg} ${i % 2 === 0 ? "gsap-fade-left" : "gsap-fade-right"}`}>
              <span className="plat-floating-number">0{i + 1}</span>
              <h2 className="plat-title">{p.title}</h2>
              <div className="gsap-line-reveal" style={{ height: 2, background: "rgba(13,21,32,.15)", marginBottom: "1.2rem" }} />
              <p className="plat-desc">{p.description}</p>
              <Link href={p.href} className="plat-cta">
                {p.cta} &rarr;
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* Bottom band */}
      <section className="hashtag-band-overlap">
        <h2>#BeyondTheScreen</h2>
        <p>Impulsando el cine y la creatividad desde Baja California Sur</p>
      </section>

      <Footer />
    </ScrollContainer>
  );
}

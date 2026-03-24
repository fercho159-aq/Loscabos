"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FloatingParticles, GradientBlobs } from "@/components/three";
import { ScrollContainer } from "@/components/ScrollAnimations";

const plataformas = [
  {
    title: "La Baja Inspira",
    description:
      "Un programa integral de formación, desarrollo y producción que impulsa el talento creativo de Baja California Sur, conectando cineastas locales con la industria audiovisual internacional.",
    href: "/plataformas-de-impulso/la-baja-inspira",
    bg: "bg-lime",
    cta: "Inscríbete",
    image: "/images/webpdf/img-025.png",
    accent: "#C5D44A",
  },
  {
    title: "Fondo Fílmico Gabriel Figueroa",
    description:
      "Fondo de apoyo a la postproducción de largometrajes latinoamericanos que busca impulsar voces emergentes y consolidar proyectos cinematográficos con visión autoral.",
    href: "/plataformas-de-impulso/fondo-filmico-gabriel-figueroa",
    bg: "bg-lavender",
    cta: "Inscríbete",
    image: "/images/webpdf/img-010.png",
    accent: "#7B8FBF",
  },
  {
    title: "Frequencies of Now",
    description:
      "Espacio de convergencia entre cine, música y artes digitales que explora las frecuencias creativas del presente a través de experiencias inmersivas y colaboraciones interdisciplinarias.",
    href: "/plataformas-de-impulso/frequencies-of-now",
    bg: "bg-peach",
    cta: "Inscríbete",
    image: "/images/webpdf/img-040.png",
    accent: "#E8A070",
  },
  {
    title: "Semillas del Desierto",
    subtitle: "Emerging Film Makers",
    description:
      "Programa dedicado a descubrir y nutrir el talento de cineastas emergentes, ofreciendo mentoría, talleres y oportunidades de networking con profesionales de la industria.",
    href: "/plataformas-de-impulso/semillas-del-desierto",
    bg: "bg-blush",
    cta: "Conoce más",
    image: "/images/webpdf/img-005.png",
    accent: "#EBB0C4",
  },
  {
    title: "Miradas al Sur",
    description:
      "Ventana al cine latinoamericano que celebra las narrativas del sur global, creando puentes entre culturas y abriendo espacios de diálogo cinematográfico.",
    href: "/plataformas-de-impulso/miradas-al-sur",
    bg: "bg-lavender",
    cta: "Conoce más",
    image: "/images/webpdf/img-089.png",
    accent: "#7B8FBF",
  },
];

export default function PlataformasDeImpulso() {
  return (
    <ScrollContainer>
      <Navbar />

      {/* Hero banner */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <Image
            src="/images/webpdf/img-030.png"
            alt="Plataformas de impulso"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="page-hero-overlay" />
        </div>
        <FloatingParticles count={70} color="#BDC957" size={2} speed={0.05} />
        <div className="page-hero-content">
          <p className="page-hero-label">FICC Los Cabos</p>
          <h1 className="page-hero-title">
            Plataformas<br />de Impulso
          </h1>
          <p className="page-hero-subtitle">
            Programas que impulsan el talento cinematográfico y creativo de Latinoamérica
          </p>
        </div>
      </section>

      {/* Intro text */}
      <section className="festival-text" style={{ position: "relative", overflow: "hidden" }}>
        <GradientBlobs
          color1="#081722"
          color2="#1a2a40"
          color3="#2a3a55"
          speed={0.1}
        />
        <div className="festival-text-container" style={{ position: "relative", zIndex: 2 }}>
          <p className="gsap-fade-up">
            Las Plataformas de Impulso del FICC Los Cabos son el corazón de nuestra
            misión: crear puentes entre el talento emergente y la industria cinematográfica
            global. A través de cinco programas especializados, ofrecemos formación,
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
                alt={p.title}
                fill
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
              {p.subtitle && (
                <p className="plat-subtitle">{p.subtitle}</p>
              )}
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

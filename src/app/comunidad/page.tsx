"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FloatingParticles, GradientBlobs } from "@/components/three";
import { ScrollContainer } from "@/components/ScrollAnimations";

const pilares = [
  {
    title: "Comunidad Creativa",
    description:
      "Una red vibrante de cineastas, artistas, productores y creativos que comparten la visión de transformar el panorama cultural de Latinoamérica.",
    href: "/comunidad/comunidad-creativa",
    bg: "bg-lime",
    image: "/images/webpdf/img-050.png",
    size: "tall",
  },
  {
    title: "Aliados y Partners",
    description:
      "Empresas, instituciones y organizaciones que hacen posible el FICC Los Cabos.",
    href: "/comunidad/aliados-y-partners",
    bg: "bg-lavender",
    image: "/images/webpdf/img-060.png",
    size: "small",
  },
  {
    title: "Embajadores",
    description:
      "Voces influyentes del mundo del cine, la cultura y la creatividad que representan el espíritu del FICC Los Cabos.",
    href: "/comunidad/embajadores",
    bg: "bg-peach",
    image: "/images/webpdf/img-070.png",
    size: "small",
  },
  {
    title: "Newsletter",
    description:
      "Recibe las últimas noticias, convocatorias y novedades del festival directamente en tu bandeja de entrada.",
    href: "/comunidad/newsletter",
    bg: "bg-blush",
    image: "/images/webpdf/img-080.png",
    size: "wide",
  },
];

export default function Comunidad() {
  return (
    <ScrollContainer>
      <Navbar />

      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <Image
            src="/images/webpdf/img-040.png"
            alt="Comunidad FICC Los Cabos"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="page-hero-overlay" />
        </div>
        <FloatingParticles count={60} color="#EBB0C4" size={2.5} speed={0.04} />
        <div className="page-hero-content">
          <p className="page-hero-label">FICC Los Cabos</p>
          <h1 className="page-hero-title">Comunidad</h1>
          <p className="page-hero-subtitle">
            Conectamos creativos, aliados y embajadores que impulsan la cultura
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="festival-text" style={{ position: "relative", overflow: "hidden" }}>
        <GradientBlobs
          color1="#0D1520"
          color2="#1a2a40"
          color3="#2a3a55"
          speed={0.1}
        />
        <div className="festival-text-container" style={{ position: "relative", zIndex: 2 }}>
          <p className="gsap-fade-up">
            La comunidad del FICC Los Cabos es un ecosistema vivo de personas y
            organizaciones que creen en el poder transformador del cine y la
            creatividad. Desde cineastas emergentes hasta marcas globales, todos
            convergen en Puerto Los Cabos para crear algo extraordinario.
          </p>
        </div>
      </section>

      {/* Bento/Mosaic grid — unique to this page */}
      <section className="comunidad-bento">
        {pilares.map((p, i) => (
          <Link
            key={p.title}
            href={p.href}
            className={`bento-card bento-${p.size} ${p.bg} gsap-scale-in`}
          >
            <div className="bento-card-img">
              <Image
                src={p.image}
                alt={p.title}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="bento-card-content">
              <h2 className="bento-card-title">{p.title}</h2>
              <p className="bento-card-desc">{p.description}</p>
              <span className="bento-card-link">Explorar &rarr;</span>
            </div>
          </Link>
        ))}
      </section>

      {/* Marquee strip */}
      <section className="comunidad-marquee">
        <div className="marquee-track">
          {[...Array(3)].map((_, i) => (
            <span key={i} className="marquee-text">
              Cine &middot; Creatividad &middot; Cultura &middot; Comunidad &middot; Colaboración &middot;&nbsp;
            </span>
          ))}
        </div>
      </section>

      {/* Join band */}
      <section className="comunidad-join" style={{ position: "relative", overflow: "hidden" }}>
        <GradientBlobs
          color1="#0D1520"
          color2="#162840"
          color3="#4A7FBF"
          speed={0.08}
        />
        <div className="comunidad-join-inner" style={{ position: "relative", zIndex: 2 }}>
          <h2 className="comunidad-join-title gsap-fade-up">Sé parte del movimiento</h2>
          <p className="comunidad-join-text gsap-fade-up">
            El FICC Los Cabos es más que un festival — es una comunidad que
            trasciende fronteras. Únete y forma parte de la conversación creativa
            más importante de Latinoamérica.
          </p>
        </div>
      </section>

      <Footer />
    </ScrollContainer>
  );
}

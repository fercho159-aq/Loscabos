"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FloatingParticles, GradientBlobs } from "@/components/three";
import { ScrollContainer } from "@/components/ScrollAnimations";

export default function Programacion() {
  return (
    <ScrollContainer>
      <Navbar />

      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <Image
            src="/images/webpdf/img-020.png"
            alt="Programación"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="page-hero-overlay" />
        </div>
        <FloatingParticles count={60} color="#F4EFE3" size={2} speed={0.04} />
        <div className="page-hero-content">
          <p className="page-hero-label">FICC Los Cabos 2026</p>
          <h1 className="page-hero-title">Programación</h1>
          <p className="page-hero-subtitle">
            Cine, arte digital y experiencias creativas — 9 al 13 de diciembre
          </p>
        </div>
      </section>

      {/* Editorial layout — unique to this page */}
      {/* Featured section: large image with overlapping title */}
      <section className="prog-editorial">
        <div className="prog-featured gsap-scale-in">
          <div className="prog-featured-img">
            <Image
              src="/images/webpdf/img-015.png"
              alt="Selección Oficial 2026"
              fill
              style={{ objectFit: "cover" }}
              className="gsap-parallax"
              data-speed="0.3"
            />
          </div>
          <div className="prog-featured-overlay bg-peach">
            <span className="prog-tag-brand">Próximamente</span>
            <h2 className="prog-featured-title gsap-text-reveal">Selección Oficial 2026</h2>
            <p className="prog-featured-desc gsap-fade-up">
              La Selección Oficial del FICC Los Cabos 2026 reunirá lo mejor del cine contemporáneo
              con una curaduría que celebra voces diversas, narrativas arriesgadas y visiones
              que desafían los límites de la pantalla.
            </p>
          </div>
        </div>

        {/* Secondary section: asymmetric with text left, image right */}
        <div className="prog-asymmetric">
          <div className="prog-asymmetric-text bg-lavender gsap-fade-left">
            <span className="prog-tag-brand">Próximamente</span>
            <h2 className="plat-title">#BeyondTheScreen</h2>
            <p className="plat-subtitle">Arte Digital, Música y Animación</p>
            <p className="plat-desc">
              Una sección dedicada a las expresiones creativas que trascienden el formato
              tradicional del cine: instalaciones de arte digital, experiencias sonoras
              inmersivas y animación de vanguardia.
            </p>
          </div>
          <div className="prog-asymmetric-images gsap-stagger-parent">
            <div className="prog-asym-img-tall gsap-clip-reveal">
              <Image
                src="/images/webpdf/img-035.png"
                alt="BeyondTheScreen"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="prog-asym-img-small gsap-clip-reveal">
              <Image
                src="/images/webpdf/img-045.png"
                alt="Arte digital"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="prog-stats gsap-stagger-parent">
        <div className="prog-stat-item">
          <span className="prog-stat-number gsap-counter" data-target="60">60</span>
          <span className="prog-stat-label">Películas</span>
        </div>
        <div className="prog-stat-divider gsap-line-reveal" />
        <div className="prog-stat-item">
          <span className="prog-stat-number gsap-counter" data-target="12">12</span>
          <span className="prog-stat-label">Países</span>
        </div>
        <div className="prog-stat-divider gsap-line-reveal" />
        <div className="prog-stat-item">
          <span className="prog-stat-number gsap-counter" data-target="4">4</span>
          <span className="prog-stat-label">Días</span>
        </div>
        <div className="prog-stat-divider gsap-line-reveal" />
        <div className="prog-stat-item">
          <span className="prog-stat-number gsap-counter" data-target="25">25</span>
          <span className="prog-stat-label">Estrenos</span>
        </div>
      </section>

      {/* CTA section */}
      <section className="prog-cta-section" style={{ position: "relative", overflow: "hidden" }}>
        <GradientBlobs
          color1="#0D1520"
          color2="#162840"
          color3="#4A7FBF"
          speed={0.1}
        />
        <div className="prog-cta-inner" style={{ position: "relative", zIndex: 2 }}>
          <h2 className="prog-cta-title gsap-fade-up">
            La programación completa<br />se anunciará próximamente
          </h2>
          <p className="prog-cta-text gsap-fade-up">
            Suscríbete a nuestro newsletter para ser el primero en conocer la
            Selección Oficial 2026, las actividades de #BeyondTheScreen y todas
            las experiencias que hemos preparado.
          </p>
          <div className="prog-dates-badge gsap-scale-in">
            <span className="prog-dates-label">Diciembre</span>
            <span className="prog-dates-numbers">9 — 13</span>
            <span className="prog-dates-label">2026</span>
          </div>
        </div>
      </section>

      {/* Landscape */}
      <section className="desert-section">
        <Image
          src="/images/webpdf/img-089.png"
          alt="Paisaje de Baja California Sur"
          fill
          style={{ objectFit: "cover" }}
        />
      </section>

      <Footer />
    </ScrollContainer>
  );
}

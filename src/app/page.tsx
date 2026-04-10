import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const aliados = [
  { name: "Los Cabos", logo: "/images/aliados/FICC_Logos_Aliados_2026-01.png" },
  { name: "IMCINE", logo: "/images/aliados/FICC_Logos_Aliados_2026-02.png" },
  { name: "Grupo Questro", logo: "/images/aliados/FICC_Logos_Aliados_2026-03.png" },
  { name: "Puerto Los Cabos", logo: "/images/aliados/FICC_Logos_Aliados_2026-04.png" },
  { name: "ESCINE", logo: "/images/aliados/FICC_Logos_Aliados_2026-05.png" },
  { name: "Art Kingdom", logo: "/images/aliados/FICC_Logos_Aliados_2026-06.png" },
  { name: "CTT Exp & Rentals", logo: "/images/aliados/FICC_Logos_Aliados_2026-07.png" },
  { name: "Shalala", logo: "/images/aliados/FICC_Logos_Aliados_2026-08.png" },
  { name: "Artegios", logo: "/images/aliados/FICC_Logos_Aliados_2026-09.png" },
  { name: "Chemistry", logo: "/images/aliados/FICC_Logos_Aliados_2026-10.png" },
  { name: "CineNet", logo: "/images/aliados/FICC_Logos_Aliados_2026-11.png" },
  { name: "Ánima Village", logo: "/images/aliados/FICC_Logos_Aliados_2026-12.png" },
  { name: "Arte Abierto", logo: "/images/aliados/FICC_Logos_Aliados_2026-13.png" },
  { name: "Cine de Verano", logo: "/images/aliados/FICC_Logos_Aliados_2026-14.png" },
  { name: "Pólvora", logo: "/images/aliados/FICC_Logos_Aliados_2026-15.png" },
  { name: "Instituto de la Cultura y las Artes de Los Cabos", logo: "/images/aliados/FICC_Logos_Aliados_2026-16.png" },
  { name: "Hotel El Ganzo", logo: "/images/aliados/FICC_Logos_Aliados_2026-17.png" },
  { name: "Secrets Puerto Los Cabos", logo: "/images/aliados/FICC_Logos_Aliados_2026-18.png" },
  { name: "Tropicana", logo: "/images/aliados/FICC_Logos_Aliados_2026-19.png" },
  { name: "Krystal Grand Los Cabos", logo: "/images/aliados/FICC_Logos_Aliados_2026-20.png" },
  { name: "Veleros Beach Club", logo: "/images/aliados/FICC_Logos_Aliados_2026-21.png" },
  { name: "Crania", logo: "/images/aliados/FICC_Logos_Aliados_2026-22.png" },
  { name: "Casa Ballena", logo: "/images/aliados/FICC_Logos_Aliados_2026-23.png" },
  { name: "Suelo Sur", logo: "/images/aliados/FICC_Logos_Aliados_2026-24.png" },
  { name: "Sage", logo: "/images/aliados/FICC_Logos_Aliados_2026-25.png" },
  { name: "Baja Republic", logo: "/images/aliados/FICC_Logos_Aliados_2026-26.png" },
  { name: "Dobel 50", logo: "/images/aliados/FICC_Logos_Aliados_2026-27.png" },
  { name: "Grupo Aeroportuario del Pacífico", logo: "/images/aliados/FICC_Logos_Aliados_2026-28.png" },
  { name: "Aeromexico", logo: "/images/aliados/FICC_Logos_Aliados_2026-29.png" },
];
const aliadosTrack = [...aliados, ...aliados];

export default function Home() {
  return (
    <>
      <Navbar />

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-content">
          {/* Brand lockup — logo image only */}
          <div className="hero-brand-lockup">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo-light.svg"
              alt="Festival Internacional de Cine y Creatividad Los Cabos"
              className="hero-logo-img"
            />
          </div>

          {/* Edition + Date — right-aligned to logo's right edge */}
          <div className="hero-edition-block">
            <p className="hero-edition-label">14ª&nbsp;Edición</p>
            <p className="hero-date">9–13 de diciembre de 2026</p>
          </div>

          {/* #BEYONDTHESCREEN strip — centered, matching logo width */}
          <div className="hero-beyond-strip">
            <div className="hero-beyond-left">
              <p className="hero-hashtag">#BEYONDTHESCREEN</p>
              <p className="hero-description">
                El cine como punto de <br />encuentro entre la música,<br />
                el arte digital y la comunidad.
              </p>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/play.svg" alt="Ver video" className="hero-play-icon" />
          </div>
        </div>

        {/* Texture strip */}
        <div className="hero-texture-strip">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/texture-pattern.svg" alt="" role="presentation" />
        </div>
      </section>

      {/* ── CTA PREVENTA ── */}
      <section className="cta-section">
        {/* Photo block */}
        <div className="cta-photo-block">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/cta-cactus.jpg"
            alt="Paisaje de cactus de Los Cabos"
            className="cta-bg-img"
          />
          <div className="cta-photo-content">
            <p className="cta-text">
              Accede a la preventa de boletos<br />
              y descubre la programación<br />
              antes que nadie.
            </p>
            <a
              href="https://festivaldecinedeloscabos.us15.list-manage.com/subscribe?u=24bf46409995ffe6e8ad030da&id=12e1ce1334"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button"
            >
              Preventa de Boletos
            </a>
          </div>
        </div>

        {/* Bottom texture */}
        <div className="cta-texture">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/texture-pattern.svg" alt="" role="presentation" />
        </div>
      </section>

      {/* ── IMPULSO A LA INDUSTRIA ── */}
      <section className="impulso-section">
        <div className="impulso-header">
          <span className="impulso-tag">Apoya a la Industria</span>
          <h2 className="impulso-title">
            Conoce <br />Nuestras<br />
            Plataformas<br /> de Impulso<br />
            a la Industria<br /> del Cine
          </h2>
        </div>

        <div className="impulso-right">
          <div className="impulso-grid">
            {/* La Baja Inspira */}
            <div className="impulso-card">
              <svg className="impulso-card-x" viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="0" y1="0" x2="100" y2="100" stroke="#A3CDD8" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
                <line x1="100" y1="0" x2="0" y2="100" stroke="#A3CDD8" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
              </svg>
              <div className="impulso-card-content">
                <h3>La Baja<br />Inspira</h3>
                <Link href="/la-baja-inspira" className="impulso-link">Explorar</Link>
              </div>
            </div>

            {/* Fondo Fílmico Gabriel Figueroa */}
            <div className="impulso-card">
              <svg className="impulso-card-x" viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="0" y1="0" x2="100" y2="100" stroke="#A3CDD8" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
                <line x1="100" y1="0" x2="0" y2="100" stroke="#A3CDD8" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
              </svg>
              <div className="impulso-card-content">
                <h3>Fondo <br />Fílmico<br />Gabriel<br />Fiegueroa</h3>
                <Link href="/ffgf" className="impulso-link">Explorar</Link>
              </div>
            </div>
          </div>
          <div className="impulso-water-strip"></div>
        </div>
      </section>

      {/* ── ALIADOS ── */}
      <section className="aliados-plaque">
        <span className="aliados-plaque-tag">Nuestros aliados y patrocinadores</span>
        <p className="aliados-plaque-quote">
          Un espacio donde el cine se expande como experiencia,<br />
          conectando territorio, comunidad y una visión global.
        </p>
        <div className="aliados-carousel">
          <div className="aliados-track">
            {aliadosTrack.map((a, i) => (
              <div key={`${a.name}-${i}`} className="aliado-slide">
                <Image src={a.logo} alt={a.name} width={240} height={120}
                  style={{ width: "auto", height: 120, objectFit: "contain" }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer, { Newsletter } from "@/components/Footer";

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
        <div className="hero-bg">
          <Image
            src="/images/hero-bg.jpg"
            alt="Los Cabos landscape through sunglasses"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="hero-overlay" />
        </div>
        <div className="hero-content">
          <p className="hero-location">Los Cabos, Baja California Sur</p>
          <h1 className="hero-title">
            Festival<br />
            Internacional<br />
            de Cine<br />
            y Creatividad<br />
            de Los Cabos
          </h1>
          <p className="hero-date">9 &mdash; 13 &nbsp;Diciembre</p>
          <div className="hero-logo-wrapper">
            <Image
              src="/images/logo-light.png"
              alt="FICC Los Cabos 14ª Edición"
              width={280}
              height={100}
              className="hero-logo-img"
            />
          </div>
        </div>
        {/* Large year overlapping into the band */}
        <div className="hero-year-overlap">
          <span className="hero-year-number">2026</span>
        </div>
      </section>

      {/* ── CTA PREVENTA ── */}
      <section className="cta-section">
        <p className="cta-text">
          Accede a la preventa de boletos y descubre la programaci&oacute;n antes que nadie.
        </p>
        <a href="https://festivaldecinedeloscabos.us15.list-manage.com/subscribe?u=24bf46409995ffe6e8ad030da&id=12e1ce1334" target="_blank" rel="noopener noreferrer" className="cta-button">
          S&eacute; el primero en la fila
        </a>
      </section>

      {/* ── VIDEO SECTION ── */}
      <section className="video-section" style={{ position: "relative", background: "#006666", padding: "5rem 2rem 6rem", textAlign: "center", overflow: "hidden" }}>
        <div style={{ position: "relative", zIndex: 1, marginBottom: "3rem" }}>
          <h2 style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(2rem, 4.5vw, 3.5rem)", fontWeight: 900, color: "#BDC957", letterSpacing: ".02em", textTransform: "uppercase" as const, margin: "0 0 .8rem" }}>#BEYONDTHESCREEN</h2>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(.9rem, 1.3vw, 1.1rem)", fontWeight: 400, color: "#F6EDDB", opacity: .9, maxWidth: 520, margin: "0 auto", lineHeight: 1.6 }}>
            Cine, creatividad y experiencias culturales con proyecci&oacute;n global.
          </p>
        </div>

        <div style={{ position: "relative", zIndex: 1, maxWidth: 860, margin: "0 auto", aspectRatio: "16/9", borderRadius: 4, overflow: "hidden", boxShadow: "0 12px 48px rgba(0,0,0,.35)" }}>
          <iframe
            src="https://www.youtube.com/embed/VIDEO_ID"
            title="FICC Los Cabos - Beyond The Screen"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
          />
        </div>
      </section>

      {/* ── IMPULSO A LA INDUSTRIA ── */}
      <section className="impulso-section">
        <h2 className="impulso-title">Impulso a la Industria</h2>
        <p className="impulso-subtitle">
          Conoce nuestras plataformas de apoyo a la Industria
        </p>
        <div className="impulso-grid">
          <div className="impulso-card">
            <h3>La Baja Inspira</h3>
            <p>
              Plataforma de proyecci&oacute;n internacional para el cine documental que aborda
              la biodiversidad, la memoria hist&oacute;rica y el desarrollo sostenible del
              Golfo de California.
            </p>
            <Link href="/la-baja-inspira" className="impulso-link">Explorar</Link>
          </div>
          <div className="impulso-card">
            <h3>Fondo F&iacute;lmico Gabriel Figueroa</h3>
            <p>
              Fortalece la industria audiovisual mexicana al generar una vinculaci&oacute;n
              efectiva entre cineastas y empresas estrat&eacute;gicas del sector.
            </p>
            <Link href="/ffgf" className="impulso-link">Explorar</Link>
          </div>
          {/* <div className="impulso-card">
            <h3>Frequencies of Now</h3>
            <p>
              Laboratorio creativo donde el cine, la música y la moda convergen
              para impulsar nuevas narrativas audiovisuales.
            </p>
            <Link href="/fon" className="impulso-link">Explorar</Link>
          </div> */}
        </div>
      </section>

      <section className="aliados-plaque">
        <h3 className="aliados-plaque-title">Nuestros Aliados</h3>
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

      <Newsletter />
      <Footer />
    </>
  );
}

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
  { name: "Hotel El Ganzo", logo: "/images/aliados/FICC_Logos_Aliados_2026-06.png" },
  { name: "Tropicana", logo: "/images/aliados/FICC_Logos_Aliados_2026-07.png" },
  { name: "Suelo Sur", logo: "/images/aliados/FICC_Logos_Aliados_2026-08.png" },
  { name: "National Car Rental", logo: "/images/aliados/FICC_Logos_Aliados_2026-09.png" },
  { name: "Dobel", logo: "/images/aliados/FICC_Logos_Aliados_2026-10.png" },
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
          <p className="hero-location">Los Cabos, B.C.S.</p>
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
        <Link href="/comunidad" className="cta-button">
          S&eacute; el primero en la fila
        </Link>
      </section>

      {/* ── VIDEO SECTION ── */}
      <section className="video-section" style={{ position: "relative", background: "#0D7377", padding: "5rem 2rem 6rem", textAlign: "center", overflow: "hidden" }}>
        {/* Organic blob shapes */}
        <svg style={{ position: "absolute", fill: "#BDC957", opacity: .85, zIndex: 0, pointerEvents: "none", width: "clamp(280px, 40vw, 500px)", height: "auto", top: "-8%", left: "-8%", transform: "rotate(-15deg)" }} viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
          <path d="M421.9,291.3c25.5,52.7,8.1,120.8-28.8,168.2c-36.9,47.4-93.3,74.2-150.5,68.4c-57.2-5.8-115.2-44.3-147.7-99.6C62.4,373,55.4,300.9,78.8,243.1c23.4-57.8,77.2-101.3,134.3-118.5c57.1-17.3,117.5-8.2,159.4,24.5C414.4,183.8,396.4,238.6,421.9,291.3z" />
        </svg>
        <svg style={{ position: "absolute", fill: "#BDC957", opacity: .85, zIndex: 0, pointerEvents: "none", width: "clamp(320px, 45vw, 560px)", height: "auto", top: "20%", right: "-12%", transform: "rotate(30deg)" }} viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
          <path d="M448.3,330.8c-5.7,54.3-46.5,107.1-100.8,133.6c-54.3,26.5-122.2,26.7-172.4,3.3c-50.2-23.4-82.7-70.5-96.9-121.2C64,295.8,68,241.6,93.3,197.1c25.3-44.5,71.9-79.7,124-89.8c52.1-10.1,109.7,5,149.3,39.1C406.2,180.4,454,276.5,448.3,330.8z" />
        </svg>
        <svg style={{ position: "absolute", fill: "#BDC957", opacity: .85, zIndex: 0, pointerEvents: "none", width: "clamp(240px, 35vw, 420px)", height: "auto", bottom: "-10%", left: "5%", transform: "rotate(60deg)" }} viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
          <path d="M399.5,283.2c21.5,45.8,2.7,105.6-30.7,148.6c-33.4,43-81.4,69.3-131.8,64.7c-50.4-4.6-103.2-40-131.3-88.3c-28.1-48.3-31.5-109.5-10.2-157.5c21.3-48,67.3-82.8,115.2-96.3c47.9-13.5,97.7-5.7,134.5,20.5C382.1,199.1,378,237.4,399.5,283.2z" />
        </svg>

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
            <div className="impulso-icon">
              <Image src="/images/iconos/la-baja-inspira-v2.png" alt="" width={80} height={80} />
            </div>
            <h3>La Baja Inspira</h3>
            <p>
              Plataforma de proyecci&oacute;n internacional para el cine documental que aborda
              la biodiversidad, la memoria hist&oacute;rica y el desarrollo sostenible del
              Golfo de California.
            </p>
            <Link href="/la-baja-inspira" className="impulso-link">Explorar</Link>
          </div>
          <div className="impulso-card">
            <div className="impulso-icon">
              <Image src="/images/iconos/fondo-filmico-v2.png" alt="" width={80} height={80} />
            </div>
            <h3>Fondo F&iacute;lmico Gabriel Figueroa</h3>
            <p>
              Fortalece la industria audiovisual mexicana al generar una vinculaci&oacute;n
              efectiva entre cineastas y empresas estrat&eacute;gicas del sector.
            </p>
            <Link href="/ffgf" className="impulso-link">Explorar</Link>
          </div>
          <div className="impulso-card">
            <div className="impulso-icon">
              <Image src="/images/iconos/frequencies-v2.png" alt="" width={80} height={80} />
            </div>
            <h3>Frequencies of Now</h3>
            <p>
              Laboratorio creativo donde el cine, la m&uacute;sica y la moda convergen
              para impulsar nuevas narrativas audiovisuales.
            </p>
            <Link href="/fon" className="impulso-link">Explorar</Link>
          </div>
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

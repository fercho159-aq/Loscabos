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
            src="/images/hero.jpg"
            alt="Los Cabos at sunset"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="hero-overlay" />
        </div>
        <div className="hero-content">
          <div className="hero-logo-wrapper">
            <Image
              src="/images/logo-light.png"
              alt="FICC Los Cabos"
              width={460}
              height={165}
              className="hero-logo-img"
            />
          </div>
          <p className="hero-edition">14&ordf; Edici&oacute;n &nbsp;&bull;&nbsp; 9 al 13 de diciembre, 2026</p>
          <h2 className="hero-hashtag">#BEYONDTHESCREEN</h2>
          <p className="hero-tagline">
            El cine como punto de encuentro entre la m&uacute;sica, el arte digital y la comunidad.
          </p>
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
          <div className="impulso-card">
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

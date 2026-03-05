import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* ── HERO ── */}
      <section className="hero">
        {/* Background image */}
        <div className="hero-bg">
          <Image
            src="/images/hero.png"
            alt=""
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="hero-overlay" />
        </div>
        <div className="hero-content">
          <p className="hero-location">Puerto Los Cabos, B.C.S.</p>
          <h1 className="hero-title">
            Festival<br />
            Internacional<br />
            de Cine<br />
            y Creatividad<br />
            de Los Cabos
          </h1>
          <p className="hero-dates">2 — 5 Diciembre</p>
          <div className="hero-logo-wrapper">
            <Image
              src="/images/logo-light.png"
              alt="FICC Los Cabos 14° Edición"
              width={240}
              height={86}
              className="hero-logo-img"
              style={{ width: "auto", height: "auto", maxWidth: 240 }}
            />
          </div>
          <div className="hero-year">2026</div>
        </div>
        {/* Acid band inside hero, overlapping 2026 */}
        <div className="hashtag-band-overlap">
          <h2>#BeyondTheScreen</h2>
          <p>Cine, creatividad y experiencias culturales con proyección global.</p>
        </div>
      </section>

      {/* ── VIDEO SECTION ── */}
      <section className="video-section">
        <div className="blob b1" />
        <div className="blob b2" />
        <div className="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/DjSLAT8RJr0"
            title="#BeyondTheScreen: Cine, Mundo Digital Más Allá de la Pantalla"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </section>

      <Footer />
    </>
  );
}

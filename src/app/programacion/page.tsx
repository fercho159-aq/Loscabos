import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Programacion() {
  return (
    <>
      <Navbar />

      <section className="page-hero" style={{ minHeight: "60vh" }}>
        <div className="page-hero-bg">
          <Image
            src="/images/plataforma-cultural/cabos-sunset.jpg"
            alt="Los Cabos"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="page-hero-overlay" />
        </div>
        <div className="page-hero-content">
          <p className="page-hero-label">FICC Los Cabos 2026</p>
          <h1 className="page-hero-title">Programaci&oacute;n</h1>
          <p className="page-hero-subtitle">
            Pr&oacute;ximamente
          </p>
          <div className="prog-dates-badge" style={{ marginTop: "2.5rem" }}>
            <span className="prog-dates-label">Diciembre</span>
            <span className="prog-dates-numbers">9 &mdash; 13</span>
            <span className="prog-dates-label">2026</span>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

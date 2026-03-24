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
          <h1 className="page-hero-title">Programaci&oacute;n</h1>
          <p className="page-hero-subtitle" style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)", fontWeight: 800, letterSpacing: ".08em", textTransform: "uppercase", marginTop: "1rem" }}>
            Pr&oacute;ximamente
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const aliados = [
  { name: "Los Cabos", logo: "/images/aliados/FICC_Logos_Aliados_2026-01.png" },
  { name: "Secretar\u00eda de Cultura / IMCINE", logo: "/images/aliados/FICC_Logos_Aliados_2026-02.png" },
  { name: "Grupo Questro", logo: "/images/aliados/FICC_Logos_Aliados_2026-03.png" },
  { name: "Puerto Los Cabos", logo: "/images/aliados/FICC_Logos_Aliados_2026-04.png" },
  { name: "ESCINE", logo: "/images/aliados/FICC_Logos_Aliados_2026-05.png" },
  { name: "Hotel El Ganzo", logo: "/images/aliados/FICC_Logos_Aliados_2026-06.png" },
  { name: "Tropicana by Hilton", logo: "/images/aliados/FICC_Logos_Aliados_2026-07.png" },
  { name: "Suelo Sur", logo: "/images/aliados/FICC_Logos_Aliados_2026-08.png" },
  { name: "National Car Rental", logo: "/images/aliados/FICC_Logos_Aliados_2026-09.png" },
  { name: "Dobel 50", logo: "/images/aliados/FICC_Logos_Aliados_2026-10.png" },
];

// Duplicate for seamless infinite loop
const track = [...aliados, ...aliados];

export default function Aliados() {
  return (
    <>
      <Navbar />

      <section className="page-hero" style={{ minHeight: "40vh" }}>
        <div className="page-hero-bg">
          <Image
            src="/images/plataforma-cultural/ocean.jpg"
            alt="Los Cabos"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="page-hero-overlay" />
        </div>
        <div className="page-hero-content">
          <h1 className="page-hero-title">Aliados</h1>
          <p className="page-hero-subtitle">
            Quienes hacen posible el festival
          </p>
        </div>
      </section>

      <section className="section-text">
        <div style={{ textAlign: "center", maxWidth: 960, margin: "0 auto" }}>
          <h2 className="section-heading">Nuestros Aliados y Partners de Destino</h2>
        </div>
        <div className="aliados-carousel">
          <div className="aliados-track">
            {track.map((a, i) => (
              <div key={`${a.name}-${i}`} className="aliado-slide">
                <Image
                  src={a.logo}
                  alt={a.name}
                  width={240}
                  height={120}
                  style={{ width: "auto", height: 120, objectFit: "contain" }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

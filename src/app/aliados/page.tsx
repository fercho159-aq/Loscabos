import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

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

      <PageHero lines={["Aliados"]} />

      <section className="section-text">
        <div className="section-text-inner">
          <h2 className="section-heading">Nuestros Aliados y Partners de Destino</h2>
          <p>
            Juntos, proyectamos al Festival Internacional de Cine y Creatividad de Los Cabos a nivel internacional.
          </p>
        </div>
        <div className="aliados-carousel">
          <div className="aliados-track">
            {track.map((a, i) => (
              <div key={`${a.name}-${i}`} className="aliado-slide">
                <Image
                  src={a.logo}
                  alt={`Logo de ${a.name}, aliado del FICC Los Cabos`}
                  width={320}
                  height={220}
                  sizes="(max-width: 768px) 320px, 240px"
                  loading="lazy"
                  style={{ width: "auto", maxHeight: 170, height: "auto", objectFit: "contain" }}
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

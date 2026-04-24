import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

const aliados = [
  { name: "Los Cabos", logo: "/images/aliados/FICC_Logos_Aliados_2026-01.png" },
  { name: "IMCINE", logo: "/images/aliados/FICC_Logos_Aliados_2026-02.png" },
  { name: "Grupo Questro", logo: "/images/aliados/FICC_Logos_Aliados_2026-03.png" },
  { name: "Puerto Los Cabos", logo: "/images/aliados/FICC_Logos_Aliados_2026-04.png" },
  { name: "ESCINE", logo: "/images/aliados/FICC_Logos_Aliados_2026-05.png" },
  { name: "Hotel El Ganzo", logo: "/images/aliados/FICC_Logos_Aliados_2026-17.png" },
  { name: "Crania", logo: "/images/aliados/FICC_Logos_Aliados_2026-19.png" },
  { name: "Casa Ballena", logo: "/images/aliados/FICC_Logos_Aliados_2026-20.png" },
  { name: "Zad\u00fan, A Ritz-Carlton Reserve", logo: "/images/aliados/FICC_Logos_Aliados_2026-zadun.png" },
  { name: "Tropicana", logo: "/images/aliados/FICC_Logos_Aliados_2026-18.png" },
  { name: "YAYA Rentals", logo: "/images/aliados/FICC_Logos_Aliados_2026-yaya.png" },
  { name: "HAAS", logo: "/images/aliados/FICC_Logos_Aliados_2026-haas.png" },
  { name: "Trilogy", logo: "/images/aliados/FICC_Logos_Aliados_2026-trilogy.png" },
  { name: "Grupo Aeroportuario del Pac\u00edfico", logo: "/images/aliados/FICC_Logos_Aliados_2026-25.png" },
  { name: "Aeromexico", logo: "/images/aliados/FICC_Logos_Aliados_2026-26.png" },
  { name: "National Car Rental", logo: "/images/aliados/FICC_Logos_Aliados_2026-27.png" },
  { name: "\u00c1nima Village", logo: "/images/aliados/FICC_Logos_Aliados_2026-12.png" },
  { name: "The Cape, A Thompson Hotel", logo: "/images/aliados/FICC_Logos_Aliados_2026-the-cape.png" },
  { name: "Viceroy Los Cabos", logo: "/images/aliados/FICC_Logos_Aliados_2026-viceroy.png" },
  { name: "Suelo Sur", logo: "/images/aliados/FICC_Logos_Aliados_2026-21.png" },
  { name: "Sage", logo: "/images/aliados/FICC_Logos_Aliados_2026-22.png" },
  { name: "Flora Farms", logo: "/images/aliados/FICC_Logos_Aliados_2026-24.png" },
  { name: "Art Kingdom", logo: "/images/aliados/FICC_Logos_Aliados_2026-06.png" },
  { name: "CTT Exp & Rentals", logo: "/images/aliados/FICC_Logos_Aliados_2026-07.png" },
  { name: "Shalala", logo: "/images/aliados/FICC_Logos_Aliados_2026-08.png" },
  { name: "Artegios", logo: "/images/aliados/FICC_Logos_Aliados_2026-09.png" },
  { name: "Chemistry", logo: "/images/aliados/FICC_Logos_Aliados_2026-10.png" },
  { name: "CineNet", logo: "/images/aliados/FICC_Logos_Aliados_2026-11.png" },
  { name: "Arte Abierto", logo: "/images/aliados/FICC_Logos_Aliados_2026-13.png" },
  { name: "Cine de Verano", logo: "/images/aliados/FICC_Logos_Aliados_2026-14.png" },
  { name: "P\u00f3lvora", logo: "/images/aliados/FICC_Logos_Aliados_2026-15.png" },
  { name: "Instituto de la Cultura y las Artes de Los Cabos", logo: "/images/aliados/FICC_Logos_Aliados_2026-16.png" },
  { name: "Dobel 50", logo: "/images/aliados/FICC_Logos_Aliados_2026-29.png" },
  { name: "Baja Republic", logo: "/images/aliados/FICC_Logos_Aliados_2026-28.png" },
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

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

const aliados = [
  { name: "FITURCA", logo: "/images/aliados/FICC_Logos_Aliados_2026-01.png" },
  { name: "IMCINE", logo: "/images/aliados/FICC_Logos_Aliados_2026-02.png" },
  { name: "Grupo Questro", logo: "/images/aliados/FICC_Logos_Aliados_2026-03.png" },
  { name: "Puerto Los Cabos", logo: "/images/aliados/FICC_Logos_Aliados_2026-04.png" },
  { name: "Marina Puerto Los Cabos", logo: "/images/aliados/FICC_Logos_Aliados_2026-marina-puerto-los-cabos.png" },
  { name: "ESCINE", logo: "/images/aliados/FICC_Logos_Aliados_2026-05.png" },
  { name: "Hotel El Ganzo", logo: "/images/aliados/FICC_Logos_Aliados_2026-17.png" },
  { name: "Crania", logo: "/images/aliados/FICC_Logos_Aliados_2026-19.png" },
  { name: "Tropicana", logo: "/images/aliados/FICC_Logos_Aliados_2026-18.png" },
  { name: "JW Marriott Los Cabos", logo: "/images/aliados/FICC_Logos_Aliados_2026-jw-marriott.png" },
  { name: "Zadún, A Ritz-Carlton Reserve", logo: "/images/aliados/FICC_Logos_Aliados_2026-zadun.png" },
  { name: "Secrets Puerto Los Cabos Golf & Spa Resort", logo: "/images/aliados/FICC_Logos_Aliados_2026-secrets.png" },
  { name: "YAYA Rentals", logo: "/images/aliados/FICC_Logos_Aliados_2026-yaya.png" },
  { name: "Bar Ligaya", logo: "/images/aliados/FICC_Logos_Aliados_2026-bar-ligaya.png" },
  { name: "Trilogy", logo: "/images/aliados/FICC_Logos_Aliados_2026-trilogy.png" },
  { name: "Grupo Aeroportuario del Pacífico", logo: "/images/aliados/FICC_Logos_Aliados_2026-25.png" },
  { name: "Aeromexico", logo: "/images/aliados/FICC_Logos_Aliados_2026-26.png" },
  { name: "National Car Rental", logo: "/images/aliados/FICC_Logos_Aliados_2026-27.png" },
  { name: "Suelo Sur", logo: "/images/aliados/FICC_Logos_Aliados_2026-21.png" },
  { name: "Sage", logo: "/images/aliados/FICC_Logos_Aliados_2026-22.png" },
  { name: "Casa Ballena", logo: "/images/aliados/FICC_Logos_Aliados_2026-20.png" },
  { name: "Art Kingdom", logo: "/images/aliados/FICC_Logos_Aliados_2026-06.png" },
  { name: "CTT Exp & Rentals", logo: "/images/aliados/FICC_Logos_Aliados_2026-07.png" },
  { name: "Shalala", logo: "/images/aliados/FICC_Logos_Aliados_2026-08.png" },
  { name: "Artegios", logo: "/images/aliados/FICC_Logos_Aliados_2026-09.png" },
  { name: "Chemistry", logo: "/images/aliados/FICC_Logos_Aliados_2026-10.png" },
  { name: "CineNet", logo: "/images/aliados/FICC_Logos_Aliados_2026-11.png" },
  { name: "Pimienta Films", logo: "/images/aliados/FICC_Logos_Aliados_2026-pimienta-films.png" },
  { name: "Valiente Films", logo: "/images/aliados/FICC_Logos_Aliados_2026-valiente-films.png" },
  { name: "Pólvora", logo: "/images/aliados/FICC_Logos_Aliados_2026-15.png" },
  { name: "Cine de Verano", logo: "/images/aliados/FICC_Logos_Aliados_2026-14.png" },
  { name: "Instituto de la Cultura y las Artes de Los Cabos", logo: "/images/aliados/FICC_Logos_Aliados_2026-16.png" },
  { name: "Centro Cultural Tijuana", logo: "/images/aliados/FICC_Logos_Aliados_2026-cecut.png" },
  { name: "Mares de México", logo: "/images/aliados/FICC_Logos_Aliados_2026-mares.png" },
  { name: "Baja Republic", logo: "/images/aliados/FICC_Logos_Aliados_2026-28.png" },
  { name: "Salomon", logo: "/images/aliados/FICC_Logos_Aliados_2026-salomon.png" },
  { name: "Sudcaliforniano", logo: "/images/aliados/FICC_Logos_Aliados_2026-sudcaliforniano.png" },
  { name: "Cabo Mil", logo: "/images/aliados/FICC_Logos_Aliados_2026-cabomil.png" },
  { name: "Exa", logo: "/images/aliados/FICC_Logos_Aliados_2026-exa.png" },
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

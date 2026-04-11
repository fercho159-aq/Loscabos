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
            En 2026, FICCLosCabos se consolida como el hub creativo definitivo del destino a trav&eacute;s de una red de m&aacute;s de 90 aliados locales e internacionales.
          </p>
          <p>
            Juntos, proyectamos a la regi&oacute;n dentro del circuito global de las industrias creativas, transformando a Los Cabos en el epicentro de la conversaci&oacute;n audiovisual en M&eacute;xico.
          </p>
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

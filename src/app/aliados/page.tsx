import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

/* Pleca de aliados 2026. El orden es el que entregó diseño: los archivos en
   /images/aliados/2026/ van numerados con esa misma posición, así que para
   reacomodar basta mover la línea (el número del archivo es histórico, no
   manda). */
const aliados = [
  { name: "Los Cabos", logo: "/images/aliados/2026/01-fiturca-los-cabos.png" },
  { name: "Grupo Questro", logo: "/images/aliados/2026/02-grupo-questro.png" },
  { name: "Puerto Los Cabos", logo: "/images/aliados/2026/03-puerto-los-cabos.png" },
  { name: "Marina Puerto Los Cabos", logo: "/images/aliados/2026/04-marina-puerto-los-cabos.png" },
  { name: "Asociación de Hoteles de Los Cabos", logo: "/images/aliados/2026/04b-asociacion-hoteles-los-cabos.png" },
  { name: "Hotel El Ganzo", logo: "/images/aliados/2026/05-hotel-el-ganzo.png" },
  { name: "IMCINE", logo: "/images/aliados/2026/06-imcine.png" },
  { name: "ESCINE", logo: "/images/aliados/2026/09-escine.png" },
  { name: "Tropicana", logo: "/images/aliados/2026/10-tropicana.png" },
  { name: "JW Marriott Los Cabos", logo: "/images/aliados/2026/11-jw-marriott.png" },
  { name: "Zadún, A Ritz-Carlton Reserve", logo: "/images/aliados/2026/12-zadun.png" },
  { name: "Secrets Puerto Los Cabos Golf & Spa Resort", logo: "/images/aliados/2026/13-secrets.png" },
  { name: "Flora Farms", logo: "/images/aliados/2026/14-flora-farms.png" },
  { name: "YAYA Rentals", logo: "/images/aliados/2026/15-yaya-rentals.png" },
  { name: "Bar Ligaya", logo: "/images/aliados/2026/16-bar-ligaya.png" },
  { name: "Space Xmas", logo: "/images/aliados/2026/17-space-xmas.png" },
  { name: "Suelo Sur", logo: "/images/aliados/2026/18-suelo-sur.png" },
  { name: "Sage", logo: "/images/aliados/2026/19-sage.png" },
  { name: "Casa Ballena", logo: "/images/aliados/2026/20-casa-ballena.png" },
  { name: "Trilogy", logo: "/images/aliados/2026/21-trilogy.png" },
  { name: "Grupo Aeroportuario del Pacífico", logo: "/images/aliados/2026/22-grupo-aeroportuario-pacifico.png" },
  { name: "Aeromexico", logo: "/images/aliados/2026/23-aeromexico.png" },
  { name: "National Car Rental", logo: "/images/aliados/2026/24-national-car-rental.png" },
  { name: "Salomon", logo: "/images/aliados/2026/25-salomon.png" },
  { name: "Cinépolis", logo: "/images/aliados/2026/26-cinepolis.png" },
  { name: "Irreversible Pictures", logo: "/images/aliados/2026/28-irreversible.png" },
  { name: "Lemon Studios", logo: "/images/aliados/2026/29-lemon-studios.png" },
  { name: "Pimienta Films", logo: "/images/aliados/2026/30-pimienta-films.png" },
  { name: "Cine Club Documental Los Cabos", logo: "/images/aliados/2026/30b-cine-club-documental.png" },
  { name: "Mighty", logo: "/images/aliados/2026/30c-mighty.png" },
  { name: "Art Kingdom", logo: "/images/aliados/2026/31-art-kingdom.png" },
  { name: "CTT Exp & Rentals", logo: "/images/aliados/2026/32-ctt-exp-rentals.png" },
  { name: "Shalala", logo: "/images/aliados/2026/33-shalala.png" },
  { name: "Artegios", logo: "/images/aliados/2026/34-artegios.png" },
  { name: "Chemistry", logo: "/images/aliados/2026/35-chemistry.png" },
  { name: "CineNet", logo: "/images/aliados/2026/36-cinenet.png" },
  { name: "Pólvora", logo: "/images/aliados/2026/37-polvora.png" },
  { name: "Cine de Verano", logo: "/images/aliados/2026/38-cine-de-verano.png" },
  { name: "Instituto de la Cultura y las Artes de Los Cabos", logo: "/images/aliados/2026/39-instituto-cultura-artes-los-cabos.png" },
  { name: "Centro Cultural Tijuana", logo: "/images/aliados/2026/40-centro-cultural-tijuana.png" },
  { name: "Mares de México", logo: "/images/aliados/2026/41-mares-de-mexico.png" },
  { name: "Baja Republic", logo: "/images/aliados/2026/42-baja-republic.png" },
  { name: "Sudcaliforniano", logo: "/images/aliados/2026/43-sudcaliforniano.png" },
  { name: "Cabo Mil", logo: "/images/aliados/2026/44-cabo-mil.png" },
  { name: "Exa", logo: "/images/aliados/2026/45-exa.png" },
  { name: "Girls at Films", logo: "/images/aliados/2026/46-girls-at-films.png" },
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

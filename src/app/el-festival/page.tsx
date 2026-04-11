import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const aliados = [
  { name: "Los Cabos",                                  logo: "/images/aliados/FICC_Logos_Aliados_2026-01.png" },
  { name: "IMCINE",                                     logo: "/images/aliados/FICC_Logos_Aliados_2026-02.png" },
  { name: "Grupo Questro",                              logo: "/images/aliados/FICC_Logos_Aliados_2026-03.png" },
  { name: "Puerto Los Cabos",                           logo: "/images/aliados/FICC_Logos_Aliados_2026-04.png" },
  { name: "ESCINE",                                     logo: "/images/aliados/FICC_Logos_Aliados_2026-05.png" },
  { name: "Art Kingdom",                                logo: "/images/aliados/FICC_Logos_Aliados_2026-06.png" },
  { name: "CTT Exp & Rentals",                          logo: "/images/aliados/FICC_Logos_Aliados_2026-07.png" },
  { name: "Shalala",                                    logo: "/images/aliados/FICC_Logos_Aliados_2026-08.png" },
  { name: "Artegios",                                   logo: "/images/aliados/FICC_Logos_Aliados_2026-09.png" },
  { name: "Chemistry",                                  logo: "/images/aliados/FICC_Logos_Aliados_2026-10.png" },
  { name: "CineNet",                                    logo: "/images/aliados/FICC_Logos_Aliados_2026-11.png" },
  { name: "Ánima Village",                              logo: "/images/aliados/FICC_Logos_Aliados_2026-12.png" },
  { name: "Arte Abierto",                               logo: "/images/aliados/FICC_Logos_Aliados_2026-13.png" },
  { name: "Cine de Verano",                             logo: "/images/aliados/FICC_Logos_Aliados_2026-14.png" },
  { name: "Pólvora",                                    logo: "/images/aliados/FICC_Logos_Aliados_2026-15.png" },
  { name: "Instituto de la Cultura y las Artes",        logo: "/images/aliados/FICC_Logos_Aliados_2026-16.png" },
  { name: "Hotel El Ganzo",                             logo: "/images/aliados/FICC_Logos_Aliados_2026-17.png" },
  { name: "Secrets Puerto Los Cabos",                   logo: "/images/aliados/FICC_Logos_Aliados_2026-18.png" },
  { name: "Tropicana",                                  logo: "/images/aliados/FICC_Logos_Aliados_2026-19.png" },
  { name: "Krystal Grand Los Cabos",                    logo: "/images/aliados/FICC_Logos_Aliados_2026-20.png" },
  { name: "Veleros Beach Club",                         logo: "/images/aliados/FICC_Logos_Aliados_2026-21.png" },
  { name: "Crania",                                     logo: "/images/aliados/FICC_Logos_Aliados_2026-22.png" },
  { name: "Casa Ballena",                               logo: "/images/aliados/FICC_Logos_Aliados_2026-23.png" },
  { name: "Suelo Sur",                                  logo: "/images/aliados/FICC_Logos_Aliados_2026-24.png" },
  { name: "Sage",                                       logo: "/images/aliados/FICC_Logos_Aliados_2026-25.png" },
  { name: "Baja Republic",                              logo: "/images/aliados/FICC_Logos_Aliados_2026-26.png" },
  { name: "Dobel 50",                                   logo: "/images/aliados/FICC_Logos_Aliados_2026-27.png" },
  { name: "Grupo Aeroportuario del Pacífico",           logo: "/images/aliados/FICC_Logos_Aliados_2026-28.png" },
  { name: "Aeromexico",                                 logo: "/images/aliados/FICC_Logos_Aliados_2026-29.png" },
];
const aliadosTrack = [...aliados, ...aliados];
import PageHero from "@/components/PageHero";
import ElFestivalIntroScroll from "@/components/ElFestivalIntroScroll";
import ElFestivalPlataformaCreativa from "@/components/ElFestivalPlataformaCreativa";
import ElFestivalImpulsoIndustria from "@/components/ElFestivalImpulsoIndustria";
import ElFestivalProgramacion from "@/components/ElFestivalProgramacion";
import ElFestivalComunidad from "@/components/ElFestivalComunidad";

export default function ElFestival() {
  return (
    <>
      <Navbar />

      {/* ── HERO ── */}
      <PageHero lines={["El Festival"]} />

      {/* ── INTRO: #BeyondTheScreen ── */}
      <ElFestivalIntroScroll />

      {/* ── EJE 1: Plataforma Creativa Anclada en Los Cabos ── */}
      <ElFestivalPlataformaCreativa />

      {/* ── EJE 2: Impulso a la Industria ── */}
      <ElFestivalImpulsoIndustria />

      {/* ── EJE 3: Programación con Pulso Global ── */}
      <ElFestivalProgramacion />

      {/* ── EJE 4: Comunidad e Influencia ── */}
      <ElFestivalComunidad />




      {/* ── ALIADOS ── */}
      <section id="aliados-section" data-anim="aliados-marquee" className="aliados-plaque">
        <span data-anim="aliados-tag" className="aliados-plaque-tag">Nuestros aliados y patrocinadores</span>
        <p data-anim="aliados-quote" className="aliados-plaque-quote">
          En 2026, FICCLosCabos se consolida como el hub creativo definitivo del destino a través de una red de más de 90 aliados locales e internacionales.<br />
          Juntos, proyectamos a la región dentro del circuito global de las industrias creativas, transformando a Los Cabos en el epicentro de la conversación audiovisual en México.
        </p>
        <div className="aliados-carousel">
          <div className="aliados-track">
            {aliadosTrack.map((a, i) => (
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

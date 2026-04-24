import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GSAPAnimations from "@/components/GSAPAnimationsLazy";
import TextureStrip from "@/components/TextureStrip";
import ZoomLink from "@/components/ZoomLink";
import Card3D from "@/components/Card3D";
import SubscribeCTA from "@/components/SubscribeCTA";
import BrandbookHero from "@/components/BrandbookHero";

const aliados = [
  { name: "Los Cabos", logo: "/images/aliados/FICC_Logos_Aliados_2026-01.png" },
  { name: "IMCINE", logo: "/images/aliados/FICC_Logos_Aliados_2026-02.png" },
  { name: "Grupo Questro", logo: "/images/aliados/FICC_Logos_Aliados_2026-03.png" },
  { name: "Puerto Los Cabos", logo: "/images/aliados/FICC_Logos_Aliados_2026-04.png" },
  { name: "ESCINE", logo: "/images/aliados/FICC_Logos_Aliados_2026-05.png" },
  { name: "Hotel El Ganzo", logo: "/images/aliados/FICC_Logos_Aliados_2026-17.png" },
  { name: "Crania", logo: "/images/aliados/FICC_Logos_Aliados_2026-19.png" },
  { name: "Casa Ballena", logo: "/images/aliados/FICC_Logos_Aliados_2026-20.png" },
  { name: "Zadún, A Ritz-Carlton Reserve", logo: "/images/aliados/FICC_Logos_Aliados_2026-zadun.png" },
  { name: "Tropicana", logo: "/images/aliados/FICC_Logos_Aliados_2026-18.png" },
  { name: "YAYA Rentals", logo: "/images/aliados/FICC_Logos_Aliados_2026-yaya.png" },
  { name: "HAAS", logo: "/images/aliados/FICC_Logos_Aliados_2026-haas.png" },
  { name: "Trilogy", logo: "/images/aliados/FICC_Logos_Aliados_2026-trilogy.png" },
  { name: "Grupo Aeroportuario del Pacífico", logo: "/images/aliados/FICC_Logos_Aliados_2026-25.png" },
  { name: "Aeromexico", logo: "/images/aliados/FICC_Logos_Aliados_2026-26.png" },
  { name: "National Car Rental", logo: "/images/aliados/FICC_Logos_Aliados_2026-27.png" },
  { name: "Ánima Village", logo: "/images/aliados/FICC_Logos_Aliados_2026-12.png" },
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
  { name: "Pólvora", logo: "/images/aliados/FICC_Logos_Aliados_2026-15.png" },
  { name: "Instituto de la Cultura y las Artes de Los Cabos", logo: "/images/aliados/FICC_Logos_Aliados_2026-16.png" },
  { name: "Dobel 50", logo: "/images/aliados/FICC_Logos_Aliados_2026-29.png" },
  { name: "Baja Republic", logo: "/images/aliados/FICC_Logos_Aliados_2026-28.png" },
];
const aliadosTrack = [...aliados, ...aliados];

export default function Home() {
  return (
    <>
      <link rel="preload" as="image" href="/images/FICCLosCabos_2026_Brandbook.svg" fetchPriority="high" />
      <Navbar />

      {/* ── HERO ── */}
      <section id="hero-section" className="relative flex flex-col bg-[#0A1E23] overflow-x-clip min-h-screen">
        <div className="relative z-[1] px-6 pt-[5rem] pb-[5rem] md:px-8 md:pt-[8rem] md:pb-[9rem] flex flex-col items-center flex-1 justify-center gap-0">
          {/* Brand lockup — logo image only */}
          <h1 className="flex justify-center mb-[2.4rem] m-0" style={{ fontSize: 0, lineHeight: 0 }}>
            <span className="sr-only" style={{ position: "absolute", width: 1, height: 1, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0,0,0,0)", whiteSpace: "nowrap", border: 0 }}>Festival Internacional de Cine y Creatividad Los Cabos 2026</span>
            <BrandbookHero />
          </h1>

          {/* Fecha del festival */}
          <p
            data-anim="hero-date"
            className="text-center m-0 mb-6 text-[#F6EDDB]"
            style={{ fontSize: "clamp(1.4rem, 2.4vw, 2.1rem)", letterSpacing: ".04em", fontWeight: 400 }}
          >
            9 – 13 de diciembre 2026
          </p>

          {/* #BeyondTheScreen strip — centered, matching logo width */}
          <div
            className="flex items-center justify-between mt-8 md:mt-12 gap-6 md:gap-8"
            style={{ width: 511, maxWidth: "90vw" }}
          >
            <div className="flex flex-col gap-[.55rem] text-left">
              <p data-anim="hero-hashtag" className="text-[clamp(1.2rem,4vw,1.85rem)] font-black tracking-normal text-[#A3CDD8] m-0" style={{ overflow: "hidden" }}>
                {"#BeyondTheScreen".split("").map((char, i) => (
                  <span key={i} data-anim="hero-hashtag-char" style={{ display: "inline-block" }}>{char}</span>
                ))}
              </p>
              <p data-anim="hero-desc" className="text-[clamp(0.95rem,2.8vw,1.35rem)] font-normal text-[#F6EDDB] leading-[1.5] m-0 opacity-75 max-w-[360px]">
                El cine como punto de <br />encuentro entre la música,<br />
                el arte digital, la animación<br />
                y la comunidad.
              </p>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              data-anim="hero-play"
              src="/images/play.svg"
              alt="Ver video"
              className="shrink-0 cursor-pointer"
              style={{ width: "clamp(40px, 8vw, 58px)", height: "clamp(40px, 8vw, 58px)" }}
            />
          </div>
        </div>

        {/* Texture strip — inline SVG with GSAP animations */}
        <div
          className="texture-strip-wrap texture-strip-overlay absolute left-0 right-0 z-50 pointer-events-none"
          style={{ height: 122 }}
        >
          <TextureStrip style={{ display: "block" }} />
        </div>
      </section>

      {/* ── CTA PREVENTA ── */}
      <section id="cta-section" className="relative text-center bg-[#0A1E23]">
        {/* Photo block */}
        <div className="relative min-h-[420px] md:h-[560px] flex items-center justify-center px-5 py-[5.5rem] md:px-16 md:py-[110px]">
          <Image
            src="/images/cta-cactus.jpg"
            alt="Paisaje de cactus de Los Cabos"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="relative z-20 flex flex-row max-md:flex-col items-center max-md:items-start justify-between w-full max-w-[1100px] gap-8 md:gap-12 text-left">
            <p
              data-anim="cta-text"
              className="font-black max-w-[440px] leading-[1.3] m-0"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", color: "var(--color-cream)" }}
            >
              {"Accede a la preventa de boletos y descubre la programación antes que nadie.".split(" ").map((word, wi) => (
                <span key={wi} style={{ display: "inline-block", whiteSpace: "nowrap", marginRight: "0.28em" }}>
                  {word.split("").map((char, ci) => (
                    <span key={ci} data-anim="cta-text-char" style={{ display: "inline-block" }}>{char}</span>
                  ))}
                </span>
              ))}
            </p>
            <SubscribeCTA
              source="preventa"
              label=" Regístrate "
              title=" Regístrate "
              description="Déjanos tus datos y recibe la información de la preventa antes que nadie."
              className="cta-button"
              dataAnim="cta-btn"
            />
          </div>
        </div>

        {/* Bottom texture */}
        <div
          className="texture-strip-wrap texture-strip-overlay absolute left-0 right-0 z-50 pointer-events-none"
          style={{ height: 122 }}
        >
          <TextureStrip style={{ display: "block" }} />
        </div>
      </section>

      {/* ── IMPULSO A LA INDUSTRIA ── */}
      <section id="impulso-section" className="relative w-full bg-[#0A1E23] flex flex-col overflow-hidden">
        <div className="shrink-0 flex flex-col justify-start pt-[5rem] pr-5 pb-10 pl-5 md:pt-[7rem] md:pr-16 md:pb-[15rem] md:pl-[15rem]">
          <span data-anim="impulso-tag" className="text-[13px] md:text-[14px] font-normal tracking-[.05em] leading-none text-[#F6EDDB]/40 mb-4 block">
          </span>
          <h2 data-anim="impulso-title" className="text-[42px] md:text-[58px] font-black text-[#F6EDDB] leading-[1.0]">
            {[
              "Conoce nuestras",
              "Plataformas de Impulso",
              "a la Industria del Cine",
            ].map((line, li) => (
              <span key={li} style={{ display: "block" }}>
                {line.split(" ").map((word, i) => (
                  <span key={i} data-anim="impulso-word" style={{ display: "inline-block", marginRight: "0.25em" }}>{word}</span>
                ))}
              </span>
            ))}
          </h2>
        </div>

        <div>
          <div className="relative w-full flex max-md:flex-col items-end max-md:items-center justify-center gap-4 max-md:gap-6 min-h-[471px] max-md:min-h-0 max-md:py-10">
            <Image
              src="/images/cactus-sunset-bg.jpg"
              alt=""
              aria-hidden="true"
              fill
              sizes="100vw"
              className="object-cover -z-10"
            />
            {/* La Baja Inspira */}
            <div className="impulso-card-outer">
              <Link
                href="/la-baja-inspira"
                data-anim="impulso-card"
                className="relative overflow-hidden cursor-pointer block"
                style={{
                  width: 587,
                  maxWidth: "calc(100vw - 2rem)",
                  height: 460,
                  backgroundColor: "#0086C4",
                }}
              >
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <iframe
                    src="https://videopress.com/embed/dCWJUwu4?at=8&loop=1&autoPlay=1&muted=1&controls=0&preloadContent=metadata"
                    title="La Baja Inspira"
                    allow="clipboard-write; autoplay"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full aspect-video border-0"
                  />
                </div>
                <div className="absolute inset-0 pointer-events-none z-[1]" style={{ backgroundColor: "rgba(0, 130, 194, 0.3)" }} />
                <div className="absolute inset-0 z-[2] pointer-events-none p-8">
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/lbi-logo-normalizado.png"
                      alt="La Baja Inspira"
                      fill
                      sizes="587px"
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
              </Link>
            </div>

            {/* Fondo Fílmico Gabriel Figueroa */}
            <div className="impulso-card-outer">
              <Link
                href="/ffgf"
                data-anim="impulso-card"
                className="relative overflow-hidden cursor-pointer block"
                style={{
                  width: 587,
                  maxWidth: "calc(100vw - 2rem)",
                  height: 460,
                  backgroundColor: "#ffffff",
                }}
              >
                <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ filter: "grayscale(1)" }}>
                  <iframe
                    src="https://player.vimeo.com/video/286013330?h=44c9737e98&autoplay=1&muted=1&loop=1&background=1&controls=0"
                    title="Fondo Fílmico Gabriel Figueroa"
                    allow="autoplay; fullscreen; picture-in-picture"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full aspect-video border-0"
                  />
                </div>
                <div className="absolute inset-0 pointer-events-none z-[1]" style={{ backgroundColor: "rgba(0, 0, 0, 0.45)" }} />
                <div className="absolute inset-0 z-[2] pointer-events-none p-8">
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/ffgf-logo-normalizado.png"
                      alt="Fondo Fílmico Gabriel Figueroa"
                      fill
                      sizes="587px"
                      className="object-contain"
                    />
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div></div>
        </div>
      </section>

      {/* ── ALIADOS ── */}
      <section id="aliados-section" data-anim="aliados-marquee" className="aliados-plaque">
        <span data-anim="aliados-tag" className="aliados-plaque-tag">Nuestros aliados y patrocinadores</span>
        <p data-anim="aliados-quote" className="aliados-plaque-quote" style={{ fontSize: "clamp(1.2rem, 2vw, 1.6rem)", fontWeight: 400 }}>
          Juntos, proyectamos al Festival Internacional de Cine y Creatividad de Los Cabos a nivel internacional.
        </p>
        <div className="aliados-carousel">
          <div className="aliados-track">
            {aliadosTrack.map((a, i) => (
              <div key={`${a.name}-${i}`} className="aliado-slide">
                <Image src={a.logo} alt={`Logo de ${a.name}, aliado del FICC Los Cabos`} width={320} height={220} sizes="(max-width: 768px) 320px, 240px" loading="lazy"
                  style={{ width: "auto", maxHeight: 170, height: "auto", objectFit: "contain" }} />
              </div>
            ))}
          </div>
        </div>
      </section >

      <Footer />
      <GSAPAnimations />
    </>
  );
}

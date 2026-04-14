import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GSAPAnimations from "@/components/GSAPAnimations";
import TextureStrip from "@/components/TextureStrip";
import ZoomLink from "@/components/ZoomLink";
import Card3D from "@/components/Card3D";

const aliados = [
  { name: "Los Cabos", logo: "/images/aliados/FICC_Logos_Aliados_2026-01.png" },
  { name: "IMCINE", logo: "/images/aliados/FICC_Logos_Aliados_2026-02.png" },
  { name: "Grupo Questro", logo: "/images/aliados/FICC_Logos_Aliados_2026-03.png" },
  { name: "Puerto Los Cabos", logo: "/images/aliados/FICC_Logos_Aliados_2026-04.png" },
  { name: "ESCINE", logo: "/images/aliados/FICC_Logos_Aliados_2026-05.png" },
  { name: "Art Kingdom", logo: "/images/aliados/FICC_Logos_Aliados_2026-06.png" },
  { name: "CTT Exp & Rentals", logo: "/images/aliados/FICC_Logos_Aliados_2026-07.png" },
  { name: "Shalala", logo: "/images/aliados/FICC_Logos_Aliados_2026-08.png" },
  { name: "Artegios", logo: "/images/aliados/FICC_Logos_Aliados_2026-09.png" },
  { name: "Chemistry", logo: "/images/aliados/FICC_Logos_Aliados_2026-10.png" },
  { name: "CineNet", logo: "/images/aliados/FICC_Logos_Aliados_2026-11.png" },
  { name: "Ánima Village", logo: "/images/aliados/FICC_Logos_Aliados_2026-12.png" },
  { name: "Arte Abierto", logo: "/images/aliados/FICC_Logos_Aliados_2026-13.png" },
  { name: "Cine de Verano", logo: "/images/aliados/FICC_Logos_Aliados_2026-14.png" },
  { name: "Pólvora", logo: "/images/aliados/FICC_Logos_Aliados_2026-15.png" },
  { name: "Instituto de la Cultura y las Artes de Los Cabos", logo: "/images/aliados/FICC_Logos_Aliados_2026-16.png" },
  { name: "Hotel El Ganzo", logo: "/images/aliados/FICC_Logos_Aliados_2026-17.png" },
  { name: "Secrets Puerto Los Cabos", logo: "/images/aliados/FICC_Logos_Aliados_2026-18.png" },
  { name: "Tropicana", logo: "/images/aliados/FICC_Logos_Aliados_2026-19.png" },
  { name: "Krystal Grand Los Cabos", logo: "/images/aliados/FICC_Logos_Aliados_2026-20.png" },
  { name: "Veleros Beach Club", logo: "/images/aliados/FICC_Logos_Aliados_2026-21.png" },
  { name: "Crania", logo: "/images/aliados/FICC_Logos_Aliados_2026-22.png" },
  { name: "Casa Ballena", logo: "/images/aliados/FICC_Logos_Aliados_2026-23.png" },
  { name: "Suelo Sur", logo: "/images/aliados/FICC_Logos_Aliados_2026-24.png" },
  { name: "Sage", logo: "/images/aliados/FICC_Logos_Aliados_2026-25.png" },
  { name: "Baja Republic", logo: "/images/aliados/FICC_Logos_Aliados_2026-26.png" },
  { name: "Dobel 50", logo: "/images/aliados/FICC_Logos_Aliados_2026-27.png" },
  { name: "Grupo Aeroportuario del Pacífico", logo: "/images/aliados/FICC_Logos_Aliados_2026-28.png" },
  { name: "Aeromexico", logo: "/images/aliados/FICC_Logos_Aliados_2026-29.png" },
];
const aliadosTrack = [...aliados, ...aliados];

export default function Home() {
  return (
    <>
      <Navbar />

      {/* ── HERO ── */}
      <section id="hero-section" className="relative flex flex-col bg-[#0A1E23] overflow-x-clip min-h-screen">
        <div className="relative z-[1] px-6 pt-[5rem] pb-[5rem] md:px-8 md:pt-[8rem] md:pb-[9rem] flex flex-col items-center flex-1 justify-center gap-0">
          {/* Brand lockup — logo image only */}
          <div className="flex justify-center mb-[1.2rem]">
            {/* Two-layer logo: cream base + teal overlay (painted on scroll) */}
            <div id="hero-logo-wrap" style={{ position: "relative", width: 511, maxWidth: "90vw" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                id="hero-logo"
                src="/images/FICCLosCabos_2026_Logo_Claro.svg"
                alt="Festival Internacional de Cine y Creatividad Los Cabos"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                id="hero-logo-blue"
                src="/images/logo-blue.svg"
                alt=""
                aria-hidden="true"
                style={{
                  width: "100%", height: "auto",
                  position: "absolute", top: 0, left: 0,
                  clipPath: "inset(0 100% 0 0)",
                  pointerEvents: "none",
                }}
              />
            </div>
          </div>

          {/* #BeyondTheScreen strip — centered, matching logo width */}
          <div
            className="flex items-center justify-between mt-8 md:mt-12 gap-6 md:gap-8"
            style={{ width: 511, maxWidth: "90vw" }}
          >
            <div className="flex flex-col gap-[.55rem] text-left">
              <p data-anim="hero-hashtag" className="text-[1.85rem] font-black tracking-[.14em] text-[#A3CDD8] m-0" style={{ overflow: "hidden", fontFamily: "var(--font-inter)" }}>
                {"#BeyondTheScreen".split("").map((char, i) => (
                  <span key={i} data-anim="hero-hashtag-char" style={{ display: "inline-block" }}>{char}</span>
                ))}
              </p>
              <p data-anim="hero-desc" className="text-[1.35rem] font-semibold text-[#EDE6DC] leading-[1.5] m-0 opacity-75 max-w-[360px]" style={{ fontFamily: "var(--font-garamond)" }}>
                El cine como punto de <br />encuentro entre la música,<br />
                el arte digital y la comunidad.
              </p>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              data-anim="hero-play"
              src="/images/play.svg"
              alt="Ver video"
              className="shrink-0 cursor-pointer"
              style={{ width: 58, height: 58 }}
            />
          </div>
        </div>

        {/* Texture strip — inline SVG with GSAP animations */}
        <div
          className="texture-strip-wrap absolute left-0 right-0 z-50 pointer-events-none"
          style={{ height: 122 }}
        >
          <TextureStrip style={{ display: "block" }} />
        </div>
      </section>

      {/* ── CTA PREVENTA ── */}
      <section id="cta-section" className="relative text-center bg-[#0A1E23]">
        {/* Photo block */}
        <div className="relative min-h-[320px] md:h-[560px] flex items-center justify-center px-5 py-12 md:px-16 md:py-[110px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/cta-cactus.jpg"
            alt="Paisaje de cactus de Los Cabos"
            className="absolute inset-0 object-cover w-full h-full"
          />
          <div className="relative z-20 flex flex-row max-md:flex-col items-center max-md:items-start justify-between w-full max-w-[1100px] gap-8 md:gap-12 text-left">
            <p
              data-anim="cta-text"
              className="font-black max-w-[440px] leading-[1.3] m-0 uppercase"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", color: "var(--color-cream)", fontFamily: "var(--font-inter)" }}
            >
              {"Accede a la preventa de boletos y descubre la programación antes que nadie.".split(" ").map((word, wi) => (
                <span key={wi} style={{ display: "inline-block", whiteSpace: "nowrap", marginRight: "0.28em" }}>
                  {word.split("").map((char, ci) => (
                    <span key={ci} data-anim="cta-text-char" style={{ display: "inline-block" }}>{char}</span>
                  ))}
                </span>
              ))}
            </p>
            <a
              data-anim="cta-btn"
              href="https://festivaldecinedeloscabos.us15.list-manage.com/subscribe?u=24bf46409995ffe6e8ad030da&id=12e1ce1334"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button"
            >
              Preventa de Boletos
            </a>
          </div>
        </div>

        {/* Bottom texture */}
        <div
          className="texture-strip-wrap absolute left-0 right-0 z-50 pointer-events-none"
          style={{ height: 122 }}
        >
          <TextureStrip style={{ display: "block" }} />
        </div>
      </section>

      {/* ── IMPULSO A LA INDUSTRIA ── */}
      <section id="impulso-section" className="relative w-full bg-[#0A1E23] flex flex-col overflow-hidden">
        <div className="shrink-0 flex flex-col justify-start pt-10 pr-5 pb-10 pl-5 md:pt-[7rem] md:pr-16 md:pb-[15rem] md:pl-[15rem]">
          <span data-anim="impulso-tag" className="text-[13px] md:text-[14px] font-medium tracking-[.05em] leading-none text-white/40 mb-4 block">
          </span>
          <h2 data-anim="impulso-title" className="text-[42px] md:text-[58px] font-black text-white leading-[1.0] max-w-[420px]">
            {"Conoce Nuestras Plataformas de Impulso a la Industria del Cine".split(" ").map((word, i) => (
              <span key={i} data-anim="impulso-word" style={{ display: "inline-block", marginRight: "0.25em" }}>{word}</span>
            ))}
          </h2>
        </div>

        <div>
          <div
            className="w-full flex max-md:flex-col items-end max-md:items-center justify-center gap-4 max-md:gap-6 min-h-[471px] max-md:min-h-0 max-md:py-10"
            style={{
              backgroundImage: "url('/images/water-bg.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* La Baja Inspira — wrapper owns the desktop translateY */}
            <div className="impulso-card-outer">
              <div
                data-anim="impulso-card"
                className="relative overflow-hidden cursor-pointer bg-[#EDE6DC] border-2 border-[#A3CDD8]"
                style={{
                  width: 587,
                  height: 251,
                  backgroundImage: "url('/images/card-x-lbi.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <svg className="hidden" viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="0" y1="0" x2="100" y2="100" stroke="#A3CDD8" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
                  <line x1="100" y1="0" x2="0" y2="100" stroke="#A3CDD8" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
                </svg>
                <div className="relative z-[2] p-6 pt-6 pb-8 px-8">
                  <h3
                    className="font-black text-[#0A1E23] tracking-[-0.03em] leading-[.93] mb-4"
                    style={{ fontSize: "clamp(1.8rem, 4vw, 4.5rem)" }}
                  >
                    La Baja<br />Inspira
                  </h3>
                  <ZoomLink href="/la-baja-inspira" className="impulso-link">
                    Explorar
                  </ZoomLink>
                </div>
              </div>
            </div>

            {/* Fondo Fílmico Gabriel Figueroa — wrapper owns the desktop translateY */}
            <div className="impulso-card-outer">
              <div
                data-anim="impulso-card"
                className="relative overflow-hidden cursor-pointer bg-[#EDE6DC] border-2 border-[#A3CDD8]"
                style={{
                  width: 587,
                  height: 362,
                  backgroundImage: "url('/images/card-x-ffgf.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <svg className="hidden" viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="0" y1="0" x2="100" y2="100" stroke="#A3CDD8" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
                  <line x1="100" y1="0" x2="0" y2="100" stroke="#A3CDD8" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
                </svg>
                <div className="relative z-[2] p-6 pt-6 pb-8 px-8">
                  <h3
                    className="font-black text-[#0A1E23] tracking-[-0.03em] leading-[.93] mb-4"
                    style={{ fontSize: "clamp(1.8rem, 4vw, 4.5rem)" }}
                  >
                    Fondo <br />Fílmico<br />Gabriel<br />Figueroa
                  </h3>
                  <ZoomLink href="/ffgf" className="impulso-link">
                    Explorar
                  </ZoomLink>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </section>

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
                <Image src={a.logo} alt={a.name} width={240} height={120}
                  style={{ width: "auto", height: 120, objectFit: "contain" }} />
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

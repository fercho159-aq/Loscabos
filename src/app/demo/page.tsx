import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroCanvasClient from "@/components/HeroCanvas";
import HeroAnimations from "@/components/HeroAnimations";
import CTAParallax from "@/components/CTAParallax";
import AliadosMarquee from "@/components/AliadosMarquee";
import LogoReveal from "@/components/LogoReveal";

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
  { name: "YAYA Rentals", logo: "/images/aliados/FICC_Logos_Aliados_2026-30.png" },
  { name: "Zadún, A Ritz-Carlton Reserve", logo: "/images/aliados/FICC_Logos_Aliados_2026-31.png" },
  { name: "The Cape, A Thompson Hotel", logo: "/images/aliados/FICC_Logos_Aliados_2026-32.png" },
];

export default function DemoPage() {
  return (
    <>
      {/* Demo banner */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 60,
          background: 'rgba(10, 10, 10, 0.85)',
          backdropFilter: 'blur(8px)',
          padding: '0.4rem 1rem',
          textAlign: 'center',
          fontSize: '0.75rem',
          fontWeight: 400,
          letterSpacing: '0.08em',
          color: '#006666',
          textTransform: 'uppercase',
        }}
      >
        Vista de demostración · FICC Los Cabos 2026
      </div>

      {/* Sticky section index */}
      <nav
        style={{
          position: 'fixed',
          top: '3.5rem',
          right: '1rem',
          zIndex: 50,
          display: 'flex',
          flexDirection: 'column',
          gap: '0.4rem',
        }}
      >
        {[
          { label: 'Hero', href: '#hero' },
          { label: 'CTA', href: '#cta' },
          { label: 'Plataformas', href: '#plataformas' },
          { label: 'Aliados', href: '#aliados' },
        ].map((item) => (
          <a
            key={item.href}
            href={item.href}
            style={{
              background: '#006666',
              color: '#ffffff',
              fontSize: '0.65rem',
              fontWeight: 400,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              padding: '0.3rem 0.6rem',
              borderRadius: '4px',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <Navbar />

      {/* ── HERO ── */}
      <section id="hero" className="relative flex flex-col bg-[#0a0a0a] overflow-x-clip min-h-screen py-24">
        <div className="absolute inset-0 z-0">
          <HeroCanvasClient />
        </div>

        <div className="relative z-[1] px-8 pt-[8rem] pb-[9rem] flex flex-col items-center flex-1 justify-center gap-0">
          <div className="flex justify-center mb-[1.2rem]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              id="hero-logo"
              src="/images/logo-light.svg"
              alt="Festival Internacional de Cine y Creatividad Los Cabos"
              style={{ width: 511, maxWidth: "90vw", height: "auto" }}
            />
          </div>

          <div className="flex flex-col items-end" style={{ width: 511, maxWidth: "90vw" }}>
            <p
              className="font-normal italic text-[#EDE6DC] tracking-[.04em] mb-1"
              style={{ fontSize: "clamp(.85rem, 1.1vw, .98rem)" }}
            >
              14ª&nbsp;Edición
            </p>
            <p
              className="text-[#EDE6DC]/60 tracking-[.08em]"
              style={{ fontSize: "clamp(.7rem, .9vw, .82rem)" }}
            >
              <span id="hero-date-text">9–13 de diciembre de 2026</span>
            </p>
          </div>

          <div
            className="flex items-center justify-between mt-12 gap-8"
            style={{ width: 511, maxWidth: "90vw" }}
          >
            <div className="flex flex-col gap-[.55rem] text-left">
              <p className="text-[.78rem] font-black tracking-[.14em] uppercase text-[#A3CDD8] m-0">
                <span id="hero-hashtag-text">#BEYONDTHESCREEN</span>
              </p>
              <p className="text-[.72rem] font-normal text-[#A3CDD8] leading-[1.65] m-0 opacity-75 max-w-[260px]">
                El cine como punto de <br />encuentro entre la música,<br />
                el arte digital y la comunidad.
              </p>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/play.svg"
              alt="Ver video"
              className="shrink-0 cursor-pointer transition-[opacity,transform] duration-[250ms] hover:opacity-80 hover:scale-[1.06]"
              style={{ width: 58, height: 58 }}
            />
          </div>
        </div>

        <div
          className="absolute left-0 right-0 z-50 pointer-events-none"
          style={{
            bottom: -110,
            height: 206,
            backgroundImage: "url('/images/texture-pattern.svg')",
            backgroundRepeat: "repeat-x",
            backgroundSize: "auto 121px",
            backgroundPosition: "center",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/texture-pattern.svg" alt="" role="presentation" className="hidden" />
        </div>
      </section>

      {/* ── CTA PREVENTA ── */}
      <section id="cta" className="relative text-center bg-[#0A1E23] py-24">
        <div id="cta-section" className="relative h-[560px] flex items-center justify-center px-16 py-[110px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            id="cta-image"
            src="/images/cta-cactus.jpg"
            alt="Paisaje de cactus de Los Cabos"
            className="absolute inset-0 object-cover w-full h-full"
            style={{ scale: '1.2' }}
          />
          <div className="relative z-20 flex flex-row max-md:flex-col items-center max-md:items-start justify-between w-full max-w-[1100px] gap-12 max-md:gap-8 text-left">
            <p
              className="font-normal text-white max-w-[440px] leading-[1.65] m-0"
              style={{ fontSize: "clamp(1rem, 1.6vw, 1.25rem)" }}
            >
              Accede a la preventa de boletos<br />
              y descubre la programación<br />
              antes que nadie.
            </p>
            <a
              href="https://festivaldecinedeloscabos.us15.list-manage.com/subscribe?u=24bf46409995ffe6e8ad030da&id=12e1ce1334"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button"
            >
              Regístrate
            </a>
          </div>
        </div>

        <div
          className="absolute left-0 right-0 z-50 pointer-events-none"
          style={{
            bottom: -110,
            height: 220,
            backgroundImage: "url('/images/texture-pattern.svg')",
            backgroundRepeat: "repeat-x",
            backgroundSize: "auto 121px",
            backgroundPosition: "center",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/texture-pattern.svg" alt="" role="presentation" className="hidden" />
        </div>
      </section>

      {/* ── IMPULSO A LA INDUSTRIA ── */}
      <section id="plataformas" className="relative w-full bg-[#0A1E23] flex flex-col overflow-hidden py-24">
        <div className="shrink-0 flex flex-col justify-start pt-[7rem] pr-16 pb-[15rem] pl-[15rem]">
          <span className="text-[14px] font-normal tracking-[.05em] leading-none text-white/40 mb-4 block">
            Apoya a la Industria
          </span>
          <h2 className="text-[32px] font-black text-white leading-none max-w-[260px]">
            Conoce <br />Nuestras<br />
            Plataformas<br /> de Impulso<br />
            a la Industria<br /> del Cine
          </h2>
        </div>

        <div>
          <div
            className="w-full flex flex-row items-end justify-center gap-4 min-h-[471px]"
            style={{
              backgroundImage: "url('/images/water-bg.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* La Baja Inspira */}
            <div
              className="relative overflow-hidden cursor-pointer bg-[#EDE6DC] border-2 border-[#A3CDD8] shrink-0 mr-[10px] ml-[100px] impulso-card-anim"
              style={{
                width: 587,
                maxWidth: "calc(100vw - 2rem)",
                height: 251,
                backgroundImage: "url('/images/card-x-lbi.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                transform: "translateY(-350px)",
              }}
            >
              <svg className="hidden" viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="0" y1="0" x2="100" y2="100" stroke="#A3CDD8" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
                <line x1="100" y1="0" x2="0" y2="100" stroke="#A3CDD8" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
              </svg>
              <div className="relative z-[2] p-6 pt-6 pb-8 px-8">
                <h3
                  className="font-black text-[#0A1E23] tracking-[-0.03em] leading-[.93] mb-4"
                  style={{ fontSize: "clamp(2.2rem, 4vw, 4.5rem)" }}
                >
                  La Baja<br />Inspira
                </h3>
                <Link href="/la-baja-inspira" className="impulso-link">
                  Explorar
                </Link>
              </div>
            </div>

            {/* Fondo Fílmico Gabriel Figueroa */}
            <div
              className="relative overflow-hidden cursor-pointer bg-[#EDE6DC] border-2 border-[#A3CDD8] shrink-0 mr-[10px] ml-[100px] impulso-card-anim"
              style={{
                width: 587,
                maxWidth: "calc(100vw - 2rem)",
                height: 362,
                backgroundImage: "url('/images/card-x-ffgf.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                transform: "translateY(-350px)",
              }}
            >
              <svg className="hidden" viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="0" y1="0" x2="100" y2="100" stroke="#A3CDD8" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
                <line x1="100" y1="0" x2="0" y2="100" stroke="#A3CDD8" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
              </svg>
              <div className="relative z-[2] p-6 pt-6 pb-8 px-8">
                <h3
                  className="font-black text-[#0A1E23] tracking-[-0.03em] leading-[.93] mb-4"
                  style={{ fontSize: "clamp(2.2rem, 4vw, 4.5rem)" }}
                >
                  Fondo <br />Fílmico<br />Gabriel<br />Figueroa
                </h3>
                <Link href="/ffgf" className="impulso-link">
                  Explorar
                </Link>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </section>

      {/* ── ALIADOS ── */}
      <section id="aliados" className="aliados-plaque py-24">
        <span className="aliados-plaque-tag">Nuestros aliados y patrocinadores</span>
        <p className="aliados-plaque-quote">
          Un espacio donde el cine se expande como experiencia,<br />
          conectando territorio, comunidad y una visión global.
        </p>
        <AliadosMarquee logos={aliados} />
      </section>

      <Footer />

      {/* Animation components */}
      <HeroAnimations />
      <CTAParallax />
      <LogoReveal />
    </>
  );
}

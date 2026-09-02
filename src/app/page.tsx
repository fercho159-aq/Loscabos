import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GSAPAnimations from "@/components/GSAPAnimationsLazy";
import TextureStrip from "@/components/TextureStrip";
import SubscribeCTA from "@/components/SubscribeCTA";
import BrandbookHero from "@/components/BrandbookHero";

const aliados = [
  { name: "FITURCA", logo: "/images/aliados/2026/01-fiturca-los-cabos.png" },
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
  { name: "Bajar Space Xmas", logo: "/images/aliados/2026/17-space-xmas.png" },
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
  { name: "Lemon Films", logo: "/images/aliados/2026/29-lemon-studios.png" },
  { name: "Pimienta Films", logo: "/images/aliados/2026/30-pimienta-films.png" },
  { name: "Cine Club Documental Los Cabos", logo: "/images/aliados/2026/30b-cine-club-documental.png" },
  { name: "Mighty", logo: "/images/aliados/2026/30c-mighty.png" },
];
const aliadosTrack = [...aliados, ...aliados];

export default function Home() {
  return (
    <>
      <Navbar />

      {/* ── HERO ── */}
      <section id="hero-section" className="relative flex flex-col bg-[#0A1E23] overflow-x-clip min-h-screen">
        {/* Background video */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/videos/ficc-home-poster.jpg"
          aria-hidden="true"
        >
          <source src="/videos/ficc-home.webm" type="video/webm" />
          <source src="/videos/ficc-home.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for legibility */}
        <div className="absolute inset-0 z-0 pointer-events-none" style={{ backgroundColor: "rgba(10, 30, 35, 0.45)" }} />

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
            14ª Edición · del 9 al 13 de diciembre 2026
          </p>

          {/* #BeyondTheScreen strip — centered, matching logo width */}
          <div
            className="mt-8 md:mt-12 flex flex-col gap-[.55rem] text-left"
            style={{ width: 600, maxWidth: "90vw" }}
          >
            <p data-anim="hero-hashtag" className="text-[clamp(1.4rem,7.5vw,3.5rem)] font-black tracking-normal text-[#A3CDD8] m-0 leading-[1.05]" style={{ whiteSpace: "nowrap" }}>
              {"#BEYONDTHESCREEN".split("").map((char, i) => (
                <span key={i} data-anim="hero-hashtag-char" style={{ display: "inline-block" }}>{char}</span>
              ))}
            </p>
            <p data-anim="hero-desc" className="text-[clamp(0.95rem,2.8vw,1.35rem)] font-normal text-[#F6EDDB] leading-[1.5] m-0 opacity-75 text-center">
              El cine como punto de encuentro entre la música, el arte digital, la animación y la comunidad.
            </p>
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
              {"Recibe antes que nadie el anuncio de la programación y la apertura de taquilla 2026.".split(" ").map((word, wi) => (
                <span key={wi} style={{ display: "inline-block", whiteSpace: "nowrap", marginRight: "0.28em" }}>
                  {word.split("").map((char, ci) => (
                    <span key={ci} data-anim="cta-text-char" style={{ display: "inline-block" }}>{char}</span>
                  ))}
                </span>
              ))}
            </p>
            <SubscribeCTA
              source="preventa"
              label="Pre-regístrate"
              title="Pre-regístrate"
              description="Recibe antes que nadie el anuncio de la programación y la apertura de taquilla 2026."
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
          <div className="impulso-cards-row relative w-full flex max-md:flex-col items-end max-md:items-center justify-center gap-4 max-md:gap-6 min-h-[471px] max-md:min-h-0 max-md:py-10">
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
                style={{ backgroundColor: "#0086C4" }}
              >
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <iframe
                    src="https://videopress.com/embed/dCWJUwu4?at=8&loop=1&autoPlay=1&muted=1&controls=0&preloadContent=metadata"
                    title="La Baja Inspira"
                    allow="clipboard-write; autoplay"
                    loading="lazy"
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
                      sizes="(max-width: 768px) calc(100vw - 4rem), 33vw"
                      className="object-contain"
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
                style={{ backgroundColor: "#ffffff" }}
              >
                <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ filter: "grayscale(1)" }}>
                  <iframe
                    src="https://player.vimeo.com/video/286013330?h=44c9737e98&autoplay=1&muted=1&loop=1&background=1&controls=0"
                    title="Fondo Fílmico Gabriel Figueroa"
                    allow="autoplay; fullscreen; picture-in-picture"
                    loading="lazy"
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
                      sizes="(max-width: 768px) calc(100vw - 4rem), 33vw"
                      className="object-contain"
                    />
                  </div>
                </div>
              </Link>
            </div>

            {/* Guión para la Gran Industria */}
            <div className="impulso-card-outer">
              <Link
                href="/guion-para-la-gran-industria"
                data-anim="impulso-card"
                className="relative overflow-hidden cursor-pointer block"
                style={{ backgroundColor: "#0A1E23" }}
              >
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <Image
                    src="/images/GPLGI_GIF_SinLogo.gif"
                    alt=""
                    aria-hidden="true"
                    fill
                    sizes="(max-width: 768px) calc(100vw - 2rem), 33vw"
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="absolute inset-0 pointer-events-none z-[1]" style={{ backgroundColor: "rgba(10, 30, 35, 0.35)" }} />
                <div className="absolute inset-0 z-[2] pointer-events-none p-8">
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/Guion_Logo-02.png"
                      alt="Guión para la Gran Industria"
                      fill
                      sizes="(max-width: 768px) calc(100vw - 4rem), 33vw"
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

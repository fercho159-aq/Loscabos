"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ElFestivalIntroScroll() {
  const sectionRef = useRef<HTMLElement>(null);
  const row1Ref    = useRef<HTMLDivElement>(null);
  const row2Ref    = useRef<HTMLDivElement>(null);
  const bgSvgRef   = useRef<HTMLImageElement>(null);
  const iconRef    = useRef<HTMLImageElement>(null);
  const textRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      const row1    = row1Ref.current;
      const row2    = row2Ref.current;
      const bgSvg   = bgSvgRef.current;
      const icon    = iconRef.current;
      const textEl  = textRef.current;
      if (!section || !row1 || !row2 || !bgSvg || !icon || !textEl) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 64px",
          end: "+=140%",
          pin: true,
          pinSpacing: true,
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      });

      const chars = Array.from(section.querySelectorAll(".title-char"));

      // Rows slide in from opposite sides
      tl.from(row1,  { x: "55vw",  ease: "none" }, 0)
        .from(row2,  { x: "-55vw", ease: "none" }, 0)
        .from(bgSvg, { scale: 1.05, opacity: 0, ease: "none" }, 0)
        .from(icon,  { scale: 0, opacity: 0, y: 20, ease: "power2.out" }, 0.45);

      if (chars.length) {
        tl.from(chars, { y: -120, opacity: 0, stagger: { amount: 0.4, from: "start" }, ease: "power4.out" }, 0.2);
      }

      const words = Array.from(textEl.querySelectorAll(".body-word"));
      if (words.length) {
        tl.from(words, { opacity: 0, stagger: { amount: 0.5, from: "start" }, ease: "none" }, 0.6);
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="h-screen overflow-hidden bg-[#0A1E23]">
      <div className="h-full flex flex-col">

        {/* ── Row 1 (31vh): [2/3 blue+texto | 1/3 water] ── */}
        <div ref={row1Ref} className="flex flex-none h-[31vh] overflow-hidden will-change-transform">

          {/* Panel A: 2/3 — blue bg + título */}
          <div className="relative w-2/3 h-full overflow-hidden flex items-end pb-10 px-14">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              ref={bgSvgRef}
              src="/images/el-festival/layer-bg.svg"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none will-change-transform"
            />
            <h2 className="relative z-10 text-navy font-bold text-[88px] leading-[1.1] tracking-[-0.01em]">
              {["#BeyondTheScreen:", "El Pulso de la Creatividad", "en Los Cabos"].map((line, li) => (
                <span key={li} className="block overflow-hidden">
                  {line.split("").map((char, ci) => (
                    <span key={ci} className="title-char inline-block">
                      {char === " " ? "\u00A0" : char}
                    </span>
                  ))}
                </span>
              ))}
            </h2>
          </div>

          {/* Panel B: 1/3 — water texture */}
          <div className="relative w-1/3 h-full overflow-hidden">
            <Image
              src="/images/el-festival/water-texture.jpg"
              alt="Textura de agua"
              fill
              className="object-cover"
            />
          </div>

        </div>

        {/* ── Row 2 (flex-1): [1/2 circle SVG | 1/2 body text] ── */}
        <div ref={row2Ref} className="flex flex-1 bg-[#0A1E23] will-change-transform">

          {/* Panel C: 1/2 — circle outline top-left */}
          <div className="w-1/2 h-full flex items-start justify-start p-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              ref={iconRef}
              src="/images/el-festival/circle-outline.svg"
              alt=""
              aria-hidden="true"
              className="w-[128px] h-[127px] will-change-transform"
            />
          </div>

          {/* Panel D: 1/2 — body text */}
          <div className="w-1/2 h-full flex items-center py-8 pr-16 pl-4">
            <div ref={textRef} className="text-cream font-medium text-[32px] leading-snug tracking-normal w-[600px] text-justify">
              <p>
                {"#BeyondTheScreen: El Pulso de la Creatividad en Los Cabos".split(" ").map((word, i) => (
                  <span key={`a${i}`} className="body-word">{word}{" "}</span>
                ))}
                <br />
                {"Tras la expansión de nuestra visión en 2025, el Festival evoluciona. En nuestra 14ª edición —del 9 al 13 de diciembre de 2026— nos consolidamos como la plataforma de vinculación para la industria audiovisual en México.".split(" ").map((word, i) => (
                  <span key={`b${i}`} className="body-word">{word}{" "}</span>
                ))}
                <br /><br />
                {"Somos el punto de encuentro donde el cine converge con la música, el arte digital y la animación. Desde Los Cabos, conectamos el talento mexicano con el circuito internacional.".split(" ").map((word, i) => (
                  <span key={`c${i}`} className="body-word">{word}{" "}</span>
                ))}
                <br /><br />
                {"A través de un modelo multisede que integra naturaleza, hospitalidad y pensamiento creativo, generamos un entorno propicio para la circulación de obras, el encuentro profesional y la construcción de redes internacionales.".split(" ").map((word, i) => (
                  <span key={`d${i}`} className="body-word">{word}{" "}</span>
                ))}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

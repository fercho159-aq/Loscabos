"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ElFestivalIntroScroll() {
  const sectionRef = useRef<HTMLElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  const bgSvgRef = useRef<HTMLImageElement>(null);
  const iconRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      const bgSvg = bgSvgRef.current;
      const icon = iconRef.current;
      const textEl = textRef.current;
      if (!section || !bgSvg || !icon || !textEl) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          once: true,
        },
      });

      const chars = Array.from(section.querySelectorAll(".title-char"));

      tl.from(bgSvg, { scale: 1.05, opacity: 0, duration: 0.9, ease: "power3.out" }, 0)
        .from(icon, { scale: 0, opacity: 0, rotation: -45, duration: 0.7, ease: "back.out(2)", force3D: true }, 0.2);

      if (chars.length) {
        tl.from(chars, {
          opacity: 0,
          y: -60,
          rotateX: 90,
          transformOrigin: "50% 0% -10px",
          duration: 0.65,
          stagger: 0.03,
          ease: "back.out(2.5)",
          force3D: true,
        }, 0.1);
      }

      const words = Array.from(textEl.querySelectorAll(".body-word"));
      if (words.length) {
        tl.from(words, {
          opacity: 0,
          y: 20,
          duration: 0.5,
          stagger: 0.025,
          ease: "power3.out",
          force3D: true,
        }, 0.35);
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#0A1E23] pt-[88px] md:h-screen md:overflow-hidden">
      <div className="flex flex-col md:h-full">

        {/* ── Row 1: [2/3 blue+texto | 1/3 water] — apilado en móvil ── */}
        <div ref={row1Ref} className="flex flex-col md:flex-row flex-none h-auto md:h-[31vh] overflow-hidden">

          {/* Panel A: 2/3 — blue bg + título */}
          <div className="relative w-full md:w-2/3 h-[45vw] md:h-full overflow-hidden flex items-end pb-6 px-5 md:pb-10 md:px-14">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              ref={bgSvgRef}
              src="/images/el-festival/BeyondTheScreen.svg"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none will-change-transform"
            />
            <h2 className="relative z-10 text-navy font-black text-[clamp(1.75rem,6vw,64px)] leading-[1.05] tracking-[-0.015em]">
              {["#BeyondTheScreen:", "El Pulso de la Creatividad", "en Los Cabos"].map((line, li) => {
                const words = line.split(" ");
                return (
                  <span key={li} className="block overflow-hidden">
                    {words.flatMap((word, wi) => {
                      const wordEl = (
                        <span key={`w${wi}`} className="inline-block whitespace-nowrap align-baseline">
                          {word.split("").map((char, ci) => (
                            <span key={ci} className="title-char inline-block">{char}</span>
                          ))}
                        </span>
                      );
                      return wi < words.length - 1 ? [wordEl, <span key={`s${wi}`}>{" "}</span>] : [wordEl];
                    })}
                  </span>
                );
              })}
            </h2>
          </div>

          {/* Panel B: 1/3 — water texture */}
          <div className="relative w-full md:w-1/3 h-[40vw] md:h-full overflow-hidden">
            <Image
              src="/images/el-festival/sinai-r-lozano-cHXjUiDhNs4-unsplash.jpg"
              alt="Textura de agua"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>

        </div>

        {/* ── Row 2: [1/2 circle SVG | 1/2 body text] — apilado en móvil ── */}
        <div ref={row2Ref} className="flex flex-col md:flex-row bg-[#0A1E23] md:flex-1 md:min-h-0">

          {/* Panel C: 1/2 — circle outline top-left */}
          <div className="w-full md:w-1/3 h-auto md:h-full flex items-start justify-start p-5 md:p-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              ref={iconRef}
              src="/images/el-festival/icon BTS.svg"
              alt=""
              aria-hidden="true"
              className="w-16 h-16 md:w-[128px] md:h-[127px] will-change-transform"
            />
          </div>

          {/* Panel D: 1/2 — body text */}
          <div className="w-full md:w-2/3 h-auto md:h-full flex items-center py-6 px-5 md:py-8 md:pr-16 md:pl-4">
            <div ref={textRef} className="text-cream font-normal text-[clamp(1.1rem,1.6vw,1.375rem)] leading-relaxed tracking-normal w-full text-left" style={{ fontFamily: "var(--font-inter)" }}>

              <p className="mb-5">
                {"Tras la expansión de nuestra visión en 2025, el Festival evoluciona. En nuestra 14ª edición —del 9 al 13 de diciembre de 2026— nos consolidamos como la plataforma de vinculación para la industria audiovisual en México.".split(" ").map((word, i) => (
                  <span key={`b${i}`} className="body-word">{word}{" "}</span>
                ))}
              </p>
              <p className="mb-5">
                {"Somos el punto de encuentro donde el cine converge con la música, el arte digital y la animación. Desde Los Cabos, conectamos el talento mexicano con el circuito internacional.".split(" ").map((word, i) => (
                  <span key={`c${i}`} className="body-word">{word}{" "}</span>
                ))}
              </p>
              <p>
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

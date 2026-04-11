"use client";

import { useRef, useEffect, useLayoutEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useIsMobile } from "@/hooks/useIsMobile";

gsap.registerPlugin(ScrollTrigger);

export default function ElFestivalComunidad() {
  const sectionRef = useRef<HTMLElement>(null);
  const row1Ref    = useRef<HTMLDivElement>(null);
  const row2Ref    = useRef<HTMLDivElement>(null);
  const bgSvgRef   = useRef<HTMLImageElement>(null);
  const iconRef    = useRef<HTMLImageElement>(null);
  const textRef    = useRef<HTMLDivElement>(null);
  const ctxRef     = useRef<gsap.Context | null>(null);
  const isMobile   = useIsMobile();

  // Cleanup runs synchronously before React removes DOM nodes (pin spacer must still exist)
  useLayoutEffect(() => {
    return () => { try { ctxRef.current?.revert(); } catch (_) {} };
  }, []);

  useEffect(() => {
    // Revert previous context when isMobile changes
    try { ctxRef.current?.revert(); ctxRef.current = null; } catch (_) {}

    const ctx = gsap.context(() => {
      if (isMobile) return; // Sin animaciones de pin en móvil

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
    });

    ctxRef.current = ctx;
  }, [isMobile]);

  return (
    <section ref={sectionRef} className="min-h-screen md:h-screen overflow-visible md:overflow-hidden bg-[#0A1E23]">
      <div className="h-full flex flex-col">

        {/* ── Row 1 — apilado en móvil ── */}
        <div ref={row1Ref} className="flex flex-col md:flex-row flex-none h-auto md:h-[31vh] overflow-hidden will-change-transform">

          {/* Panel A — fondo + título */}
          <div className="relative w-full md:w-1/3 h-[45vw] md:h-full overflow-hidden flex items-end pb-6 px-5 md:pb-10 md:px-14">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              ref={bgSvgRef}
              src="/images/el-festival/Layer_1 (2).svg"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none will-change-transform"
            />
            <h2 className="relative z-10 text-navy font-bold text-[clamp(2rem,8vw,88px)] leading-[1.1] tracking-[-0.01em]">
              {["Comunidad", "e Influencia"].map((line, li) => (
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

          {/* Panel B — imagen */}
          <div className="relative w-full md:w-2/3 h-[40vw] md:h-full overflow-hidden">
            <Image
              src="/images/el-festival/Rectangle.png"
              alt="Comunidad e Influencia"
              fill
              sizes="(max-width: 768px) 100vw, 66vw"
              className="object-cover"
            />
          </div>

        </div>

        {/* ── Row 2 — apilado en móvil ── */}
        <div ref={row2Ref} className="flex flex-col md:flex-row flex-1 bg-[#0A1E23] will-change-transform">

          {/* Panel C — ícono top-left */}
          <div className="w-full md:w-1/2 h-auto md:h-full flex items-start justify-start p-5 md:p-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              ref={iconRef}
              src="/images/el-festival/Group 66 (1).svg"
              alt=""
              aria-hidden="true"
              className="w-16 h-16 md:w-[128px] md:h-[127px] will-change-transform"
            />
          </div>

          {/* Panel D — cuerpo de texto */}
          <div className="w-full md:w-1/2 h-auto md:h-full flex items-center py-6 px-5 md:py-8 md:pr-16 md:pl-4">
            <div ref={textRef} className="text-cream font-medium text-[clamp(1rem,4vw,32px)] leading-snug tracking-normal w-full md:w-[600px] text-justify">
              <p>
                {"Creamos un ecosistema que trasciende el evento. Activamos una red global de creadores, medios y plataformas para construir un ecosistema que se expande y empodera proyectos los 365 días del año.".split(" ").map((word, i) => (
                  <span key={i} className="body-word">{word}{" "}</span>
                ))}
                <br /><br />
                {"#BeyondTheScreen es una plataforma de innovación cultural. Integramos cine, música y arte digital para responder a la transformación de las industrias creativas, proyectando desde Los Cabos nuevas formas de crear y experimentar el cine.".split(" ").map((word, i) => (
                  <span key={`b${i}`} className="body-word">{word}{" "}</span>
                ))}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

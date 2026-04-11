"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ElFestivalPlataformaCreativa() {
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

        {/* ── Row 1 ── */}
        <div ref={row1Ref} className="flex flex-none h-[25vh] overflow-hidden will-change-transform">

          {/* Panel A — fondo + título */}
          <div className="relative w-1/2 h-full overflow-hidden flex items-end pb-10 px-14">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              ref={bgSvgRef}
              src="/images/el-festival/Group 113.svg"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none will-change-transform"
            />
            <h2 className="relative z-10 text-navy font-bold text-[80px] leading-[1.1] tracking-[-0.01em]">
              {["Plataforma Creativa", "Anclada en Los Cabos"].map((line, li) => (
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
          <div className="relative w-1/2 h-full overflow-hidden">
            <Image
              src="/images/el-festival/Group.png"
              alt="Plataforma Creativa"
              fill
              className="object-cover"
            />
          </div>

        </div>

        {/* ── Row 2 ── */}
        <div ref={row2Ref} className="flex flex-1 bg-[#0A1E23] will-change-transform">

          {/* Panel C — ícono top-left */}
          <div className="w-1/2 h-full flex items-start justify-start p-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              ref={iconRef}
              src="/images/el-festival/Mask group (4).svg"
              alt=""
              aria-hidden="true"
              className="w-[128px] h-[127px] will-change-transform"
            />
          </div>

          {/* Panel D — cuerpo de texto */}
          <div className="w-1/2 h-full flex items-center py-8 pr-16 pl-4">
            <div ref={textRef} className="text-cream font-medium text-[32px] leading-snug tracking-normal w-[600px] text-justify">
              <p>
                {"El entorno especial de Los Cabos es el origen de todo. Producto de la energía que emana del Golfo de California, surge este festival que, mediante alianzas estratégicas, fusiona la hospitalidad de Baja California Sur con un circuito creativo internacional sin precedentes.".split(" ").map((word, i) => (
                  <span key={i} className="body-word">{word}{" "}</span>
                ))}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

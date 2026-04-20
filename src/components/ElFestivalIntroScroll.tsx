"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { num: "14a", label: "Edición" },
  { num: "05", label: "Días" },
  { num: "04", label: "Disciplinas" },
  { num: "9–13", label: "Diciembre 2026" },
];

export default function ElFestivalIntroScroll() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgSvgRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLElement>(null);
  const iconRef = useRef<HTMLImageElement>(null);
  const heroImgWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      const bgSvg = bgSvgRef.current;
      const textEl = textRef.current;
      const railEl = railRef.current;
      const icon = iconRef.current;
      if (!section || !bgSvg || !textEl || !railEl) return;

      const chars = Array.from(section.querySelectorAll<HTMLElement>(".title-char"));
      const stats = Array.from(railEl.querySelectorAll<HTMLElement>(".ef-stat"));
      const statNums = Array.from(railEl.querySelectorAll<HTMLElement>(".ef-stat-num"));
      const paras = Array.from(textEl.querySelectorAll<HTMLElement>("[data-anim='intro-para']"));
      const accents = Array.from(textEl.querySelectorAll<HTMLElement>(".ef-kw-cine, .ef-kw-musica, .ef-kw-arte-digital, .ef-kw-animacion"));

      const words: HTMLElement[] = [];
      const splitWords = (el: Element) => {
        const kids = Array.from(el.childNodes);
        kids.forEach((node) => {
          if (node.nodeType === Node.TEXT_NODE) {
            const text = node.textContent || "";
            if (!text.trim()) return;
            const tokens = text.split(/(\s+)/);
            const frag = document.createDocumentFragment();
            tokens.forEach((tok) => {
              if (!tok) return;
              if (/^\s+$/.test(tok)) {
                frag.appendChild(document.createTextNode(tok));
              } else {
                const w = document.createElement("span");
                w.className = "ef-word";
                w.style.display = "inline-block";
                w.style.willChange = "transform, opacity";
                w.textContent = tok;
                words.push(w);
                frag.appendChild(w);
              }
            });
            el.replaceChild(frag, node);
          } else if (node.nodeType === Node.ELEMENT_NODE) {
            splitWords(node as Element);
          }
        });
      };
      paras.forEach((p) => splitWords(p));

      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduce) {
        gsap.set(bgSvg, { opacity: 1, scale: 1 });
        if (icon) gsap.set(icon, { opacity: 1, scale: 1, rotation: 0 });
        if (chars.length) gsap.set(chars, { opacity: 1, y: 0, rotateX: 0 });
        if (stats.length) gsap.set(stats, { opacity: 1, y: 0 });
        if (words.length) gsap.set(words, { opacity: 1, y: 0, rotateX: 0 });
        return;
      }

      gsap.set(bgSvg, { scale: 1.12, transformOrigin: "50% 50%" });
      gsap.fromTo(
        bgSvg,
        { yPercent: 5 },
        {
          yPercent: -5,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );

      const heroImgWrap = heroImgWrapRef.current;
      if (heroImgWrap) {
        const heroImgEl = heroImgWrap.querySelector<HTMLElement>("img");
        if (heroImgEl) {
          gsap.set(heroImgEl, { scale: 1.18, transformOrigin: "50% 50%" });
          gsap.fromTo(
            heroImgEl,
            { yPercent: -7 },
            {
              yPercent: 7,
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            },
          );
        }
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 60%",
          once: true,
        },
      });
      tl.timeScale(0.75);

      tl.from(bgSvg, { scale: 1.08, opacity: 0, duration: 1.0, ease: "power3.out" }, 0);

      if (heroImgWrapRef.current) {
        tl.from(heroImgWrapRef.current, {
          clipPath: "inset(0% 0% 100% 0%)",
          duration: 1.0,
          ease: "power3.out",
        }, 0.15);
      }

      if (chars.length) {
        tl.from(chars, {
          opacity: 0, y: -60, rotateX: 90,
          transformOrigin: "50% 0% -10px",
          duration: 0.65, stagger: 0.03,
          ease: "back.out(2.5)", force3D: true,
        }, 0.1);
      }

      if (stats.length) {
        tl.from(stats, {
          opacity: 0, y: 12,
          duration: 0.5, stagger: 0.08,
          ease: "power3.out", force3D: true,
        }, 0.45);
      }

      if (statNums.length) {
        tl.from(statNums, {
          scale: 0.7,
          duration: 0.55, stagger: 0.08,
          ease: "back.out(2)", transformOrigin: "0% 50%",
        }, 0.5);
      }

      if (words.length) {
        tl.from(words, {
          opacity: 0, y: -40, rotateX: 60,
          transformOrigin: "50% 0% -8px",
          duration: 0.55, stagger: 0.012,
          ease: "back.out(2)", force3D: true,
        }, 0.55);
      }

      if (accents.length) {
        tl.from(accents, {
          backgroundColor: "rgba(255,255,255,0.08)",
          duration: 0.9,
          stagger: 0.05,
          ease: "power1.out",
        }, 0.9);
      }

      if (icon) {
        tl.from(icon, {
          scale: 0, opacity: 0, rotation: -45,
          duration: 0.7, ease: "back.out(2)", force3D: true,
        }, 0.75);

        ScrollTrigger.create({
          trigger: section,
          start: "top 40%",
          once: true,
          onEnter: () => {
            gsap.to(icon, {
              y: -10,
              rotation: 5,
              duration: 3.2,
              yoyo: true,
              repeat: -1,
              ease: "sine.inOut",
            });
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="ef-intro bg-[color:var(--ef-ink)] pt-[70px] md:h-screen md:overflow-hidden"
    >
      <div className="flex flex-col md:h-full">

        {/* ── Row 1: [2/3 blue+texto | 1/3 water] — intacto ── */}
        <div className="flex flex-col md:flex-row flex-none h-auto md:h-[31vh] overflow-hidden">

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
          <div ref={heroImgWrapRef} className="relative w-full md:w-1/3 h-[40vw] md:h-full overflow-hidden">
            <Image
              src="/images/el-festival/sinai-r-lozano-cHXjUiDhNs4-unsplash.jpg"
              alt="Textura de agua"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover will-change-transform"
            />
          </div>

        </div>

        {/* ── Row 2: [rail stats | párrafos] ── */}
        <div className="flex flex-col md:flex-row bg-[color:var(--ef-ink)] md:flex-1 md:min-h-0">

          {/* Panel C: STATS RAIL — mobile 2×2 arriba, desktop 1/3 col izq full-height */}
          <aside
            ref={railRef}
            aria-label="Datos clave del festival"
            className="ef-rail
                       w-full md:w-1/3 md:h-full
                       grid grid-cols-2 md:flex md:flex-col md:justify-center
                       gap-0
                       px-5 py-6 md:px-10 md:py-8
                       md:border-r md:border-[color-mix(in_srgb,var(--ef-cream-dim)_10%,transparent)]"
          >
            {STATS.map((s, i) => (
              <div
                key={i}
                className="ef-stat
                           flex flex-col items-start gap-1
                           px-2 py-5
                           md:px-0 md:py-4"
              >
                <span className="ef-stat-num">{s.num}</span>
                <span className="ef-stat-label">{s.label}</span>
              </div>
            ))}
          </aside>

          {/* Panel D: PÁRRAFOS — copy verbatim, color-pop en P2 + ícono derecha */}
          <div className="w-full md:w-2/3 md:h-full flex items-center py-8 px-5 md:py-10 md:pr-10 md:pl-10">
            <div className="flex items-center justify-between gap-10 w-full">
              <div
                ref={textRef}
                className="text-[color:var(--ef-cream)] font-normal text-[clamp(1.1rem,1.55vw,1.375rem)] leading-relaxed tracking-normal w-full max-w-[55ch] text-left"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                <p data-anim="intro-para" className="mb-6 md:mb-7">
                  Tras la expansión de nuestra visión en 2025, el Festival evoluciona. En nuestra 14ª edición —del 9 al 13 de diciembre de 2026— nos consolidamos como la plataforma de vinculación para la industria audiovisual en México.
                </p>

                <p data-anim="intro-para" className="mb-6 md:mb-7">
                  Somos el punto de encuentro donde el <span className="ef-kw-cine">cine</span> converge con la <span className="ef-kw-musica">música</span>, el <span className="ef-kw-arte-digital">arte digital</span> y la <span className="ef-kw-animacion">animación</span>. Desde Los Cabos, conectamos el talento mexicano con el circuito internacional.
                </p>

                <p data-anim="intro-para">
                  A través de un modelo multisede que integra naturaleza, hospitalidad y pensamiento creativo, generamos un entorno propicio para la circulación de obras, el encuentro profesional y la construcción de redes internacionales.
                </p>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                ref={iconRef}
                src="/images/el-festival/icon BTS.svg"
                alt=""
                aria-hidden="true"
                className="hidden md:block shrink-0 w-[96px] h-[96px] lg:w-[128px] lg:h-[128px] will-change-transform"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

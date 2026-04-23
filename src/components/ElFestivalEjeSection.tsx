"use client";

import { useRef, useEffect, type ReactNode } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IconEje1, IconEje2, IconEje3, IconEje4 } from "@/components/ElFestivalEjeIcons";

gsap.registerPlugin(ScrollTrigger);

type IconReveal = "wipe-up" | "scale-fade" | "wipe-right" | "scale-rotate";

type Entity = { label: string };

type HeroImage = { src: string; alt: string; sizes?: string };

type Props = {
  ejeNum: 1 | 2 | 3 | 4;
  heroSvg: string;
  heroTitleLines: string[];
  heroImage: HeroImage;
  row1Split?: "2/3" | "1/2";
  entities?: Entity[];
  entitiesLabel?: string;
  numericAnchor?: { num: string; label: string };
  titleSize?: string;
  iconReveal?: IconReveal;
  children: ReactNode;
};

const ICONS = {
  1: IconEje1,
  2: IconEje2,
  3: IconEje3,
  4: IconEje4,
} as const;

const TITLE_DEFAULT = "clamp(1.75rem,6vw,64px)";

export default function ElFestivalEjeSection({
  ejeNum,
  heroSvg,
  heroTitleLines,
  heroImage,
  row1Split = "2/3",
  entities,
  entitiesLabel,
  numericAnchor,
  titleSize = TITLE_DEFAULT,
  iconReveal = "scale-fade",
  children,
}: Props) {
  const Icon = ICONS[ejeNum];
  const sectionRef = useRef<HTMLElement>(null);
  const bgSvgRef = useRef<HTMLImageElement>(null);
  const iconWrapRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const heroImgWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      const bgSvg = bgSvgRef.current;
      const iconWrap = iconWrapRef.current;
      const textEl = textRef.current;
      const railEl = railRef.current;
      if (!section || !bgSvg || !textEl) return;

      const chars = Array.from(section.querySelectorAll<HTMLElement>(".title-char"));
      const paras = Array.from(textEl.querySelectorAll<HTMLElement>("[data-anim='eje-para']"));
      const accents = Array.from(textEl.querySelectorAll<HTMLElement>(".ef-accent, .ef-kw-cine, .ef-kw-musica, .ef-kw-arte-digital, .ef-kw-animacion"));

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
      const ents = railEl
        ? Array.from(railEl.querySelectorAll<HTMLElement>("[data-anim='eje-entity']"))
        : [];
      const entityDots = railEl
        ? Array.from(railEl.querySelectorAll<HTMLElement>(".ef-entity-dot"))
        : [];
      const anchorEls = railEl
        ? Array.from(railEl.querySelectorAll<HTMLElement>("[data-anim='eje-anchor']"))
        : [];
      const anchorNumEl = railEl
        ? railEl.querySelector<HTMLElement>(".ef-anchor-num")
        : null;

      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduce) {
        gsap.set(bgSvg, { opacity: 1, scale: 1 });
        if (iconWrap) gsap.set(iconWrap, { opacity: 1, scale: 1, rotation: 0, clipPath: "inset(0 0 0 0)" });
        if (chars.length) gsap.set(chars, { opacity: 1, y: 0, rotateX: 0 });
        if (words.length) gsap.set(words, { opacity: 1, y: 0, rotateX: 0 });
        if (ents.length) gsap.set(ents, { opacity: 1, y: 0 });
        if (anchorEls.length) gsap.set(anchorEls, { opacity: 1, y: 0 });
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

      if (ents.length) {
        tl.from(ents, {
          opacity: 0, x: -16,
          duration: 0.5, stagger: 0.08,
          ease: "power3.out", force3D: true,
        }, 0.45);
      }

      if (entityDots.length) {
        tl.from(entityDots, {
          scale: 0,
          duration: 0.4, stagger: 0.08,
          ease: "back.out(3)", transformOrigin: "50% 50%",
        }, 0.5);
      }

      if (anchorEls.length) {
        tl.from(anchorEls, {
          opacity: 0, y: 16,
          duration: 0.6, stagger: 0.1,
          ease: "power3.out", force3D: true,
        }, 0.45);
      }

      if (anchorNumEl) {
        const raw = (anchorNumEl.textContent || "").trim();
        const target = parseInt(raw, 10);
        if (!isNaN(target) && String(target) === raw) {
          const counter = { v: 0 };
          tl.to(counter, {
            v: target,
            duration: 1.2,
            ease: "power2.out",
            onUpdate: () => {
              anchorNumEl.textContent = Math.round(counter.v).toString();
            },
          }, 0.6);
        }
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

      if (iconWrap) {
        switch (iconReveal) {
          case "wipe-up":
            tl.fromTo(
              iconWrap,
              { clipPath: "inset(100% 0% 0% 0%)", opacity: 0 },
              { clipPath: "inset(0% 0% 0% 0%)", opacity: 1, duration: 0.8, ease: "power3.out" },
              0.75,
            );
            break;
          case "wipe-right":
            tl.fromTo(
              iconWrap,
              { clipPath: "inset(0% 100% 0% 0%)", opacity: 0 },
              { clipPath: "inset(0% 0% 0% 0%)", opacity: 1, duration: 0.8, ease: "power3.out" },
              0.75,
            );
            break;
          case "scale-rotate":
            tl.from(iconWrap, {
              scale: 0, opacity: 0, rotation: -45,
              duration: 0.7, ease: "back.out(2)", force3D: true,
            }, 0.75);
            break;
          case "scale-fade":
          default:
            tl.from(iconWrap, {
              scale: 0.6, opacity: 0,
              duration: 0.7, ease: "back.out(1.8)", force3D: true,
            }, 0.75);
            break;
        }

        ScrollTrigger.create({
          trigger: section,
          start: "top 40%",
          once: true,
          onEnter: () => {
            gsap.to(iconWrap, {
              y: -10,
              rotation: iconReveal === "scale-rotate" ? 3 : 0,
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
  }, [iconReveal]);

  const panelA = row1Split === "2/3" ? "md:w-2/3" : "md:w-1/2";
  const panelB = row1Split === "2/3" ? "md:w-1/3" : "md:w-1/2";
  const sizesB = row1Split === "2/3" ? "(max-width: 768px) 100vw, 33vw" : "(max-width: 768px) 100vw, 50vw";

  return (
    <section
      ref={sectionRef}
      className={`ef-eje ef-eje-${ejeNum} bg-[color:var(--ef-ink)] md:h-screen md:overflow-hidden`}
    >
      <div className="flex flex-col md:h-full">

        {/* ── Row 1: hero SVG + título | imagen ── */}
        <div className="flex flex-col md:flex-row flex-none h-auto md:h-[31vh] overflow-hidden">

          <div className={`relative w-full ${panelA} h-[45vw] md:h-full overflow-hidden flex items-end pb-6 px-5 md:pb-10 md:px-14`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              ref={bgSvgRef}
              src={heroSvg}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none will-change-transform"
            />
            <h2
              className="relative z-10 text-navy font-black leading-[1.05] tracking-[-0.015em]"
              style={{ fontSize: titleSize }}
            >
              {heroTitleLines.map((line, li) => {
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

          <div ref={heroImgWrapRef} className={`relative w-full ${panelB} h-[40vw] md:h-full overflow-hidden`}>
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              fill
              sizes={heroImage.sizes ?? sizesB}
              className="object-cover will-change-transform"
            />
          </div>

        </div>

        {/* ── Row 2: índice visual (icon + entities / numericAnchor) | paragraphs ── */}
        <div className="flex flex-col md:flex-row bg-[color:var(--ef-ink)] md:flex-1 md:min-h-0">

          <aside
            ref={railRef}
            aria-label={`Índice del eje ${ejeNum}`}
            className="ef-eje-rail
                       w-full md:w-1/3 md:h-full
                       flex flex-col items-start justify-start md:justify-center
                       gap-5 md:gap-6
                       px-5 py-6 md:px-10 md:py-8
                       md:border-r md:border-[color-mix(in_srgb,var(--ef-cream-dim)_10%,transparent)]"
          >
            <div
              ref={iconWrapRef}
              className="shrink-0 will-change-transform"
              style={{ color: "var(--ef-accent)", width: "clamp(72px, 11vw, 128px)" }}
            >
              <Icon style={{ width: "100%", height: "auto", display: "block" }} />
            </div>

            {numericAnchor ? (
              <div className="flex flex-col items-start">
                <span className="ef-anchor-num" data-anim="eje-anchor">{numericAnchor.num}</span>
                <span className="ef-anchor-label" data-anim="eje-anchor">{numericAnchor.label}</span>
              </div>
            ) : entities && entities.length > 0 ? (
              <div className="flex flex-col items-start gap-2 md:gap-3">
                {entitiesLabel && (
                  <span className="ef-entities-label">{entitiesLabel}</span>
                )}
                <ul className="flex flex-col gap-2 md:gap-3 m-0 p-0 list-none">
                  {entities.map((e, i) => (
                    <li key={i} className="ef-entity" data-anim="eje-entity">
                      <span className="ef-entity-dot" aria-hidden="true" />
                      <span>{e.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </aside>

          <div className="w-full md:w-2/3 md:h-full flex items-center py-8 px-5 md:py-10 md:pr-10 md:pl-10">
            <div
              ref={textRef}
              className="text-[color:var(--ef-cream)] font-normal text-[clamp(1.1rem,1.55vw,1.375rem)] leading-relaxed tracking-normal w-full max-w-[55ch] text-left"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {children}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

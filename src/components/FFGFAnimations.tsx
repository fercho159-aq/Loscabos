"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FFGFAnimations() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      // ── IMAGE: slide in from left on scroll ──
      const imgWrap = document.querySelector<HTMLElement>('[data-anim="ffgf-image"]');
      if (imgWrap) {
        gsap.set(imgWrap, { x: "-100%", opacity: 0 });
        gsap.to(imgWrap, {
          x: "0%",
          opacity: 1,
          ease: "power3.out",
          duration: 1.2,
          scrollTrigger: {
            trigger: "#ffgf-desc-section",
            start: "top 80%",
            once: true,
          },
        });
      }

      // ── TYPEWRITER: reveal text character by character ──
      const typewriterEls = document.querySelectorAll<HTMLElement>('[data-anim="ffgf-typewriter"]');
      typewriterEls.forEach((el) => {
        const text = el.textContent || "";
        el.textContent = "";
        const chars: HTMLSpanElement[] = [];
        for (const char of text) {
          const span = document.createElement("span");
          span.textContent = char;
          span.style.visibility = "hidden";
          el.appendChild(span);
          chars.push(span);
        }

        ScrollTrigger.create({
          trigger: el,
          start: "top 95%",
          once: true,
          onEnter: () => {
            gsap.to(chars, {
              visibility: "visible",
              duration: 0,
              stagger: 0.008,
              ease: "none",
            });
          },
        });
      });

      // ── DATES: fade up ──
      const dates = document.querySelector<HTMLElement>('[data-anim="ffgf-dates"]');
      if (dates) {
        gsap.from(dates, {
          opacity: 0,
          y: 20,
          duration: 0.6,
          ease: "power3.out",
          force3D: true,
          scrollTrigger: {
            trigger: dates,
            start: "top 90%",
            once: true,
          },
        });
      }

      // ── CTA BUTTON: fade up ──
      const cta = document.querySelector<HTMLElement>('[data-anim="ffgf-cta"]');
      if (cta) {
        gsap.from(cta, {
          opacity: 0,
          y: 20,
          duration: 0.6,
          delay: 0.2,
          ease: "power3.out",
          force3D: true,
          scrollTrigger: {
            trigger: cta,
            start: "top 90%",
            once: true,
          },
        });
      }

      // ── LEGADO EYEBROW: fade up ──
      const eyebrow = document.querySelector<HTMLElement>('[data-anim="ffgf-legado-eyebrow"]');
      if (eyebrow) {
        gsap.from(eyebrow, {
          opacity: 0,
          y: 15,
          duration: 0.5,
          ease: "power3.out",
          force3D: true,
          scrollTrigger: {
            trigger: eyebrow,
            start: "top 90%",
            once: true,
          },
        });
      }

      // ── LEGADO TITLE: staggered per-character ──
      const staggerChars = gsap.utils.toArray<HTMLElement>('[data-anim="ffgf-stagger-char"]');
      if (staggerChars.length > 0) {
        gsap.set(staggerChars, {
          y: -60,
          rotateX: 90,
          opacity: 0,
          transformOrigin: "50% 0% -10px",
        });

        const titleParent = staggerChars[0].closest("h2");
        if (titleParent) {
          ScrollTrigger.create({
            trigger: titleParent,
            start: "top 90%",
            once: true,
            onEnter: () => {
              gsap.to(staggerChars, {
                y: 0,
                rotateX: 0,
                opacity: 1,
                duration: 0.5,
                stagger: 0.03,
                ease: "back.out(2.5)",
                force3D: true,
              });
            },
          });
        }
      }

      // ── LEGADO DESCRIPTION: fade up ──
      const legadoDesc = document.querySelector<HTMLElement>('[data-anim="ffgf-legado-desc"]');
      if (legadoDesc) {
        gsap.from(legadoDesc, {
          opacity: 0,
          y: 25,
          duration: 0.7,
          delay: 0.3,
          ease: "power3.out",
          force3D: true,
          scrollTrigger: {
            trigger: legadoDesc,
            start: "top 90%",
            once: true,
          },
        });
      }

      // ── LEGADO CARDS: staggered entrance from alternating directions ──
      const legadoCards = gsap.utils.toArray<HTMLElement>('[data-anim="ffgf-legado-card"]');
      legadoCards.forEach((card, i) => {
        const directions = [
          { x: "-80vw", y: 0 },
          { x: 0, y: -200 },
          { x: "80vw", y: 0 },
          { x: "-80vw", y: 100 },
          { x: 0, y: 200 },
          { x: "80vw", y: -100 },
          { x: "-80vw", y: 0 },
        ];
        const dir = directions[i % directions.length];

        gsap.set(card, {
          x: dir.x,
          y: dir.y,
          opacity: 0,
          scale: 0.7,
          rotation: (i % 2 === 0 ? -15 : 15),
        });

        ScrollTrigger.create({
          trigger: card,
          start: "top 100%",
          once: true,
          onEnter: () => {
            gsap.to(card, {
              x: 0,
              y: 0,
              opacity: 1,
              scale: 1,
              rotation: 0,
              duration: 1.2,
              delay: i * 0.08,
              ease: "power4.out",
              force3D: true,
            });
          },
        });
      });

      // ── ALIADOS TAG: fade up ──
      const aliadosTag = document.querySelector<HTMLElement>('[data-anim="ffgf-aliados-tag"]');
      if (aliadosTag) {
        gsap.from(aliadosTag, {
          opacity: 0,
          y: 15,
          duration: 0.5,
          ease: "power3.out",
          force3D: true,
          scrollTrigger: {
            trigger: aliadosTag,
            start: "top 80%",
            once: true,
          },
        });
      }

      // ── ALIADOS QUOTE: fade up ──
      const aliadosQuote = document.querySelector<HTMLElement>('[data-anim="ffgf-aliados-quote"]');
      if (aliadosQuote) {
        gsap.from(aliadosQuote, {
          opacity: 0,
          y: 25,
          duration: 0.7,
          delay: 0.15,
          ease: "power3.out",
          force3D: true,
          scrollTrigger: {
            trigger: aliadosQuote,
            start: "top 80%",
            once: true,
          },
        });
      }

      // ── ALIADOS CAROUSEL: fade in ──
      const aliadosCarousel = document.querySelector<HTMLElement>('[data-anim="ffgf-aliados"] .aliados-carousel');
      if (aliadosCarousel) {
        gsap.from(aliadosCarousel, {
          opacity: 0,
          duration: 0.6,
          delay: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: aliadosCarousel,
            start: "top 80%",
            once: true,
          },
        });
      }

      // ── ALIADOS LOGOS: float + hover ──
      const aliadoImgs = gsap.utils.toArray<HTMLElement>(".ffgf-page .aliado-slide img");
      aliadoImgs.forEach((img, i) => {
        gsap.to(img, {
          y: -8,
          duration: 2.2 + (i % 7) * 0.18,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: (i % 11) * 0.22,
          force3D: true,
        });

        const slide = img.closest<HTMLElement>(".aliado-slide");
        if (!slide) return;

        slide.addEventListener("mouseenter", () => {
          gsap.to(img, {
            scale: 1.18,
            y: -14,
            duration: 0.35,
            ease: "power3.out",
            overwrite: "auto",
            force3D: true,
          });
        });

        slide.addEventListener("mouseleave", () => {
          gsap.to(img, {
            scale: 1,
            y: -8,
            duration: 0.45,
            ease: "elastic.out(1, 0.5)",
            overwrite: "auto",
            force3D: true,
          });
        });
      });

    });

    return () => ctx.kill();
  }, []);

  return null;
}

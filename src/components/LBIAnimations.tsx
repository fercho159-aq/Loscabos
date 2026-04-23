"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LBIAnimations() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      // ── IMAGE: slide in from left on scroll ──
      const imgWrap = document.querySelector<HTMLElement>('[data-anim="lbi-image"]');
      if (imgWrap) {
        gsap.set(imgWrap, { x: "-100%", opacity: 0 });
        gsap.to(imgWrap, {
          x: "0%",
          opacity: 1,
          ease: "power3.out",
          duration: 1.2,
          scrollTrigger: {
            trigger: "#lbi-desc-section",
            start: "top 80%",
            once: true,
          },
        });
      }

      // ── TYPEWRITER: reveal text character by character ──
      const typewriterEls = document.querySelectorAll<HTMLElement>('[data-anim="lbi-typewriter"]');
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

      // ── SVG ICONS: stroke draw animation ──
      const svgIcons = document.querySelectorAll<SVGSVGElement>('[data-anim="lbi-svg-icon"]');
      svgIcons.forEach((svg, i) => {
        const paths = Array.from(svg.querySelectorAll<SVGPathElement>("path"));
        paths.forEach((path) => {
          const len = path.getTotalLength();
          gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
        });

        gsap.set(svg, { scale: 0, rotation: -180, transformOrigin: "50% 50%" });

        ScrollTrigger.create({
          trigger: svg,
          start: "top 95%",
          once: true,
          onEnter: () => {
            gsap.to(svg, {
              scale: 1,
              rotation: 0,
              duration: 0.8,
              delay: i * 0.2,
              ease: "back.out(2.5)",
              force3D: true,
            });

            gsap.to(paths, {
              strokeDashoffset: 0,
              duration: 1.2,
              delay: i * 0.2 + 0.3,
              stagger: 0.1,
              ease: "power2.inOut",
            });

            gsap.to(svg, {
              scale: 1.15,
              duration: 1.0,
              delay: i * 0.2 + 1.2,
              ease: "sine.inOut",
              yoyo: true,
              repeat: 3,
              force3D: true,
            });
          },
        });
      });

      // ── CONVOCATORIA CARDS: bg zoom loop ──
      const convCards = gsap.utils.toArray<HTMLElement>('[data-anim="lbi-conv-card"]');
      convCards.forEach((card, i) => {
        // Start zoomed in (1 bg visible)
        gsap.set(card, { backgroundSize: "100%", backgroundPosition: "center" });

        ScrollTrigger.create({
          trigger: card,
          start: "top 90%",
          once: true,
          onEnter: () => {
            // Card entrance
            gsap.from(card, {
              x: i === 0 ? "-100vw" : "100vw",
              opacity: 0,
              duration: 1.1,
              ease: "power4.out",
              force3D: true,
            });

            // Zoom loop: different timing per card
            gsap.to(card, {
              backgroundSize: "25%",
              duration: i === 0 ? 4 : 6.5,
              delay: i === 0 ? 0.8 : 1.5,
              ease: i === 0 ? "sine.inOut" : "power1.inOut",
              yoyo: true,
              repeat: -1,
              repeatDelay: i === 0 ? 0.5 : 1.2,
            });

          },
        });
      });

      // ── LIST ITEMS: staggered entrance top → bottom (intense) ──
      const listItems = gsap.utils.toArray<HTMLElement>('[data-anim="lbi-list-item"]');
      if (listItems.length > 0) {
        gsap.set(listItems, {
          y: -50,
          opacity: 0,
          rotateX: 70,
          transformOrigin: "50% 0% -20px",
        });

        ScrollTrigger.create({
          trigger: listItems[0],
          start: "top 95%",
          once: true,
          onEnter: () => {
            gsap.to(listItems, {
              opacity: 1,
              y: 0,
              rotateX: 0,
              duration: 0.7,
              stagger: 0.25,
              ease: "back.out(2.5)",
              force3D: true,
            });
          },
        });
      }

      // ── LEGADO CARDS: staggered entrance ──
      const legadoCards = gsap.utils.toArray<HTMLElement>('[data-anim="lbi-legado-card"]');
      legadoCards.forEach((card, i) => {
        const directions = [
          { x: "-80vw", y: 0 },
          { x: 0, y: -200 },
          { x: "80vw", y: 0 },
          { x: "-80vw", y: 100 },
          { x: 0, y: 200 },
          { x: "80vw", y: -100 },
          { x: "-80vw", y: 0 },
          { x: "80vw", y: 0 },
          { x: 0, y: 200 },
          { x: "-80vw", y: -100 },
          { x: "80vw", y: 100 },
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

      // ── STAGGERED CHAR ANIMATION on section titles ──
      const staggerHeadings = document.querySelectorAll<HTMLElement>("h2");
      staggerHeadings.forEach((h2) => {
        const chars = Array.from(h2.querySelectorAll<HTMLElement>('[data-anim="lbi-stagger-char"]'));
        if (chars.length === 0) return;

        gsap.set(chars, {
          y: -60,
          rotateX: 90,
          opacity: 0,
          transformOrigin: "50% 0% -10px",
        });

        ScrollTrigger.create({
          trigger: h2,
          start: "top 90%",
          once: true,
          onEnter: () => {
            gsap.to(chars, {
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
      });

      // ── COMITÉ: description slides from right ──
      const comiteDesc = document.querySelector<HTMLElement>('[data-anim="lbi-comite-desc"]');
      if (comiteDesc) {
        gsap.from(comiteDesc, {
          x: "100vw",
          opacity: 0,
          duration: 1,
          delay: 0.2,
          ease: "power4.out",
          force3D: true,
          scrollTrigger: { trigger: comiteDesc, start: "top 90%", once: true },
        });
      }

      // ── COMITÉ: cards slide in from alternating sides ──
      const comiteCards = gsap.utils.toArray<HTMLElement>('[data-anim="lbi-comite-card"]');
      comiteCards.forEach((card, i) => {
        const fromLeft = i % 2 === 0;
        gsap.from(card, {
          x: fromLeft ? "-100vw" : "100vw",
          opacity: 0,
          duration: 1.1,
          delay: i * 0.15,
          ease: "power4.out",
          force3D: true,
          scrollTrigger: { trigger: card, start: "top 95%", once: true },
        });
      });

    });

    return () => ctx.kill();
  }, []);

  return null;
}

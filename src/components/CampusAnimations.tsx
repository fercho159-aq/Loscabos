"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CampusAnimations() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // ── INTRO: eyebrow + lede fade up ── (Pattern A: set + onEnter)
      const introEls = gsap.utils.toArray<HTMLElement>(
        '[data-anim="campus-kicker"], [data-anim="campus-lede"]'
      );
      introEls.forEach((el, i) => {
        gsap.set(el, { y: 34, opacity: 0 });
        ScrollTrigger.create({
          trigger: el,
          start: "top 92%",
          once: true,
          onEnter: () => {
            gsap.to(el, {
              y: 0,
              opacity: 1,
              duration: 0.95,
              delay: i * 0.1,
              ease: "power3.out",
              force3D: true,
              overwrite: "auto",
            });
          },
        });
      });

      // ── MOMENTO: encabezado entra, el glifo del sol gira al aparecer ──
      const heads = gsap.utils.toArray<HTMLElement>('[data-anim="campus-moment-head"]');
      heads.forEach((head) => {
        const glyph = head.querySelector<SVGElement>(".campus-moment-glyph svg");
        gsap.set(head, { y: 36, opacity: 0 });
        if (glyph) gsap.set(glyph, { rotate: -28, scale: 0, transformOrigin: "50% 50%" });
        ScrollTrigger.create({
          trigger: head,
          start: "top 86%",
          once: true,
          onEnter: () => {
            gsap.to(head, {
              y: 0,
              opacity: 1,
              duration: 1,
              ease: "power4.out",
              force3D: true,
              overwrite: "auto",
            });
            if (glyph) {
              gsap.to(glyph, {
                rotate: 0,
                scale: 1,
                duration: 0.9,
                delay: 0.15,
                ease: "back.out(2.2)",
                force3D: true,
                overwrite: "auto",
              });
            }
          },
        });
      });

      // ── PLATES: rise + scale con stagger ──
      const plates = gsap.utils.toArray<HTMLElement>('[data-anim="campus-plate"]');
      plates.forEach((plate, i) => {
        gsap.set(plate, { y: 60, opacity: 0, scale: 0.965 });
        ScrollTrigger.create({
          trigger: plate,
          start: "top 92%",
          once: true,
          onEnter: () => {
            gsap.to(plate, {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.95,
              delay: (i % 2) * 0.12,
              ease: "power3.out",
              force3D: true,
              overwrite: "auto",
            });
          },
        });
      });
    });

    // Recalcula triggers tras asentarse la maquetación (font swap, imágenes async).
    // refresh() además dispara onEnter de cualquier trigger once:true ya en viewport,
    // así ningún contenido queda oculto de forma permanente.
    const refresh = () => ScrollTrigger.refresh();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(refresh);
    window.addEventListener("load", refresh);
    const refreshTimers = [
      window.setTimeout(refresh, 400),
      window.setTimeout(refresh, 1500),
    ];

    return () => {
      window.removeEventListener("load", refresh);
      refreshTimers.forEach(clearTimeout);
      ctx.kill();
    };
  }, []);

  return null;
}

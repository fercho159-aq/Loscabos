"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PersonalidadesAnimations() {
  useLayoutEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      gsap.set(
        '[data-anim="pers-eyebrow"], [data-anim="pers-lede"], [data-anim="pers-year"], [data-anim="pers-card"]',
        { y: 0, opacity: 1, scale: 1 }
      );
      return;
    }

    const ctx = gsap.context(() => {
      // ── Intro de la sección ── (Pattern A)
      const fadeEls = gsap.utils.toArray<HTMLElement>(
        '[data-anim="pers-eyebrow"], [data-anim="pers-lede"]'
      );
      fadeEls.forEach((el) => {
        gsap.set(el, { y: 30, opacity: 0 });
        ScrollTrigger.create({
          trigger: el,
          start: "top 90%",
          once: true,
          onEnter: () =>
            gsap.to(el, { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", force3D: true, overwrite: "auto" }),
        });
      });

      // ── Año de la línea de tiempo ──
      const years = gsap.utils.toArray<HTMLElement>('[data-anim="pers-year"]');
      years.forEach((el) => {
        gsap.set(el, { y: 24, opacity: 0 });
        ScrollTrigger.create({
          trigger: el,
          start: "top 85%",
          once: true,
          onEnter: () =>
            gsap.to(el, { y: 0, opacity: 1, duration: 0.8, ease: "power4.out", force3D: true, overwrite: "auto" }),
        });
      });

      // ── Tarjetas: stagger POR AÑO (el índice global dejaría el último año
      //    esperando 45 * 0.06s antes de entrar). ──
      const grids = gsap.utils.toArray<HTMLElement>(".pers-grid");
      grids.forEach((grid) => {
        const cards = gsap.utils.toArray<HTMLElement>('[data-anim="pers-card"]', grid);
        cards.forEach((el, i) => {
          gsap.set(el, { y: 40, opacity: 0, scale: 0.94 });
          ScrollTrigger.create({
            trigger: el,
            start: "top 92%",
            once: true,
            onEnter: () =>
              gsap.to(el, {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.7,
                delay: (i % 5) * 0.06,
                ease: "back.out(1.7)",
                force3D: true,
                overwrite: "auto",
              }),
          });
        });
      });
    });

    const refresh = () => ScrollTrigger.refresh();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(refresh);
    window.addEventListener("load", refresh);
    const refreshTimers = [window.setTimeout(refresh, 400), window.setTimeout(refresh, 1500)];

    return () => {
      window.removeEventListener("load", refresh);
      refreshTimers.forEach(clearTimeout);
      ctx.kill();
    };
  }, []);

  return null;
}

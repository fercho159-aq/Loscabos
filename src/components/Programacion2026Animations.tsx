"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Animaciones de /programacion-2026 (índice y detalle). Mismo patrón que
 * ComunidadAnimations: un ScrollTrigger `once` por elemento marcado con
 * `data-anim`. Se monta al final del JSX y no pinta nada.
 */
export default function Programacion2026Animations() {
  useLayoutEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      gsap.set('[data-anim="p26-head"], [data-anim="p26-card"], [data-anim="p26-person"]', {
        y: 0,
        opacity: 1,
        scale: 1,
      });
      return;
    }

    const ctx = gsap.context(() => {
      // ── ENCABEZADOS: fade-up ──
      const heads = gsap.utils.toArray<HTMLElement>('[data-anim="p26-head"]');
      heads.forEach((head) => {
        gsap.set(head, { y: 28, opacity: 0 });
        ScrollTrigger.create({
          trigger: head,
          start: "top 90%",
          once: true,
          onEnter: () =>
            gsap.to(head, {
              y: 0,
              opacity: 1,
              duration: 0.9,
              ease: "power4.out",
              force3D: true,
              overwrite: "auto",
            }),
        });
      });

      // ── TARJETAS DE EVENTO: stagger por fila de 3 ──
      const cards = gsap.utils.toArray<HTMLElement>('[data-anim="p26-card"]');
      cards.forEach((card, i) => {
        gsap.set(card, { y: 44, opacity: 0 });
        ScrollTrigger.create({
          trigger: card,
          start: "top 92%",
          once: true,
          onEnter: () =>
            gsap.to(card, {
              y: 0,
              opacity: 1,
              duration: 0.85,
              delay: (i % 3) * 0.08,
              ease: "power3.out",
              force3D: true,
              overwrite: "auto",
            }),
        });
      });

      // ── PERSONAS: rise + scale ──
      const people = gsap.utils.toArray<HTMLElement>('[data-anim="p26-person"]');
      people.forEach((person, i) => {
        gsap.set(person, { y: 36, opacity: 0, scale: 0.96 });
        ScrollTrigger.create({
          trigger: person,
          start: "top 94%",
          once: true,
          onEnter: () =>
            gsap.to(person, {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.7,
              delay: (i % 4) * 0.06,
              ease: "power3.out",
              force3D: true,
              overwrite: "auto",
            }),
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

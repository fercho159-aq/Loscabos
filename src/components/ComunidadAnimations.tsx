"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ComunidadAnimations() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // ── INTRO: lede + hashtag fade up ── (Pattern A)
      const introEls = gsap.utils.toArray<HTMLElement>(
        '[data-anim="comu-lede"], [data-anim="comu-hashtag"]'
      );
      introEls.forEach((el, i) => {
        gsap.set(el, { y: 30, opacity: 0 });
        ScrollTrigger.create({
          trigger: el,
          start: "top 92%",
          once: true,
          onEnter: () =>
            gsap.to(el, {
              y: 0,
              opacity: 1,
              duration: 0.9,
              delay: i * 0.1,
              ease: "power3.out",
              force3D: true,
              overwrite: "auto",
            }),
        });
      });

      // ── GROUP HEAD: fade-up centrado ──
      const heads = gsap.utils.toArray<HTMLElement>('[data-anim="comu-group-head"]');
      heads.forEach((head) => {
        gsap.set(head, { y: 28, opacity: 0 });
        ScrollTrigger.create({
          trigger: head,
          start: "top 88%",
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

      // ── CARDS: stagger por fila (rise + scale) ──
      const cards = gsap.utils.toArray<HTMLElement>('[data-anim="comu-card"]');
      cards.forEach((card, i) => {
        gsap.set(card, { y: 40, opacity: 0, scale: 0.94 });
        ScrollTrigger.create({
          trigger: card,
          start: "top 94%",
          once: true,
          onEnter: () =>
            gsap.to(card, {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.7,
              delay: (i % 6) * 0.06,
              ease: "back.out(1.7)",
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

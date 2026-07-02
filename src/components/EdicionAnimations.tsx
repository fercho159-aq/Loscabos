"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function EdicionAnimations() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // ── Fade-up genérico para eyebrows, ledes y títulos ── (Pattern A)
      const fadeEls = gsap.utils.toArray<HTMLElement>(
        '[data-anim="ed-eyebrow"], [data-anim="ed-lede"], [data-anim="ed-title"], [data-anim="ed-cartel25"]'
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

      // ── Disciplinas: barras que crecen con stagger ──
      const disc = gsap.utils.toArray<HTMLElement>('[data-anim="ed-disciplina"]');
      disc.forEach((el, i) => {
        gsap.set(el, { y: 24, opacity: 0 });
        ScrollTrigger.create({
          trigger: el,
          start: "top 92%",
          once: true,
          onEnter: () =>
            gsap.to(el, { y: 0, opacity: 1, duration: 0.7, delay: i * 0.1, ease: "back.out(1.7)", force3D: true, overwrite: "auto" }),
        });
      });

      // ── Marco de video: aparece con escala ──
      const video = document.querySelector<HTMLElement>('[data-anim="ed-video"]');
      if (video) {
        gsap.set(video, { y: 50, opacity: 0, scale: 0.97 });
        ScrollTrigger.create({
          trigger: video,
          start: "top 88%",
          once: true,
          onEnter: () =>
            gsap.to(video, { y: 0, opacity: 1, scale: 1, duration: 1, ease: "power3.out", force3D: true, overwrite: "auto" }),
        });
      }
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

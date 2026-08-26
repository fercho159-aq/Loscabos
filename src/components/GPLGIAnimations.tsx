"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* Animaciones de /guion-para-la-gran-industria.
   - Respeta prefers-reduced-motion (no registra nada).
   - Todo `once: true`, solo transform/opacity. */
export default function GPLGIAnimations() {
  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      // ── HERO: logo + eyebrow + facts en secuencia al cargar ──
      const heroLogo = document.querySelector<HTMLElement>('[data-anim="gplgi-hero-logo"]');
      const heroItems = gsap.utils.toArray<HTMLElement>('[data-anim="gplgi-hero-item"]');
      const heroTl = gsap.timeline({ defaults: { ease: "power3.out", force3D: true } });
      if (heroLogo) {
        heroTl.fromTo(heroLogo, { opacity: 0, y: 24, scale: 0.97 }, { opacity: 1, y: 0, scale: 1, duration: 1 });
      }
      if (heroItems.length) {
        heroTl.fromTo(heroItems, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.08 }, "-=0.5");
      }

      // ── REVEAL genérico: fade-up al entrar al viewport ──
      const reveals = gsap.utils.toArray<HTMLElement>('[data-anim="gplgi-reveal"]');
      reveals.forEach((el) => {
        gsap.set(el, { opacity: 0, y: 28 });
        ScrollTrigger.create({
          trigger: el,
          start: "top 88%",
          once: true,
          onEnter: () => {
            gsap.to(el, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", force3D: true, overwrite: "auto" });
          },
        });
      });

      // ── STAGGER por grupo: hijos [data-anim="gplgi-stagger-item"] ──
      const groups = gsap.utils.toArray<HTMLElement>('[data-anim="gplgi-stagger"]');
      groups.forEach((group) => {
        const items = group.querySelectorAll<HTMLElement>('[data-anim="gplgi-stagger-item"]');
        if (!items.length) return;
        gsap.set(items, { opacity: 0, y: 24 });
        ScrollTrigger.create({
          trigger: group,
          start: "top 85%",
          once: true,
          onEnter: () => {
            gsap.to(items, { opacity: 1, y: 0, duration: 0.6, stagger: 0.07, ease: "power3.out", force3D: true, overwrite: "auto" });
          },
        });
      });

      // ── MARCADOR amarillo: "subrayado" que se dibuja de izquierda a derecha ──
      const marks = gsap.utils.toArray<HTMLElement>('[data-anim="gplgi-mark"]');
      marks.forEach((el) => {
        gsap.set(el, { "--gplgi-mark": 0 } as gsap.TweenVars);
        ScrollTrigger.create({
          trigger: el,
          start: "top 85%",
          once: true,
          onEnter: () => {
            gsap.to(el, { "--gplgi-mark": 1, duration: 0.7, ease: "power2.inOut" } as gsap.TweenVars);
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}

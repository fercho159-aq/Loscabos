"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* Animaciones de /frequencies-of-now. Mismo esquema que FFGFAnimations:
   selectores data-anim, ScrollTrigger once:true, cleanup con ctx.kill().
   Con prefers-reduced-motion todo queda en estado final sin animar. */
export default function FoNAnimations() {
  useLayoutEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      // Helper: fade-up on enter (per element, optional stagger by index)
      const fadeUp = (selector: string, opts: { y?: number; delay?: number; start?: string; stagger?: number } = {}) => {
        const els = gsap.utils.toArray<HTMLElement>(selector);
        if (!els.length || reduce) return;
        gsap.set(els, { opacity: 0, y: opts.y ?? 24 });
        els.forEach((el, i) => {
          ScrollTrigger.create({
            trigger: el,
            start: opts.start ?? "top 90%",
            once: true,
            onEnter: () => {
              gsap.to(el, {
                opacity: 1,
                y: 0,
                duration: 0.7,
                delay: (opts.delay ?? 0) + (opts.stagger ? i * opts.stagger : 0),
                ease: "power3.out",
                force3D: true,
                overwrite: "auto",
              });
            },
          });
        });
      };

      // Helper: grid of cards, staggered as a group
      const cardsIn = (selector: string, stagger = 0.1) => {
        const els = gsap.utils.toArray<HTMLElement>(selector);
        if (!els.length || reduce) return;
        gsap.set(els, { opacity: 0, y: 28 });
        ScrollTrigger.create({
          trigger: els[0].parentElement ?? els[0],
          start: "top 85%",
          once: true,
          onEnter: () => {
            gsap.to(els, { opacity: 1, y: 0, duration: 0.65, stagger, ease: "power3.out", force3D: true });
          },
        });
      };

      // ── HERO: logo bars rise from center, then breathe like an equalizer ──
      const logoBars = gsap.utils.toArray<SVGRectElement>('.fon-hero [data-anim="fon-logo-bar"]');
      const heroText = gsap.utils.toArray<HTMLElement>('[data-anim="fon-hero-text"]');
      if (logoBars.length && !reduce) {
        gsap.set(logoBars, { scaleY: 0 });
        gsap.set(heroText, { opacity: 0, y: 18 });
        const tl = gsap.timeline({ delay: 0.35 });
        tl.to(logoBars, { scaleY: 1, duration: 0.9, ease: "back.out(1.6)", stagger: { each: 0.07, from: "center" } });
        tl.to(heroText, { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: "power3.out" }, "-=0.35");
        tl.add(() => {
          logoBars.forEach((bar, i) => {
            gsap.to(bar, {
              scaleY: 0.82 + ((i * 7) % 5) * 0.03,
              duration: 1.6 + (i % 3) * 0.4,
              ease: "sine.inOut",
              yoyo: true,
              repeat: -1,
              delay: (i % 4) * 0.2,
            });
          });
        });
      }

      // ── INTRO IMAGE: slide in from left ──
      const imgWrap = document.querySelector<HTMLElement>('[data-anim="fon-image"]');
      if (imgWrap && !reduce) {
        gsap.set(imgWrap, { x: "-100%", opacity: 0 });
        gsap.to(imgWrap, {
          x: "0%",
          opacity: 1,
          ease: "power3.out",
          duration: 1.2,
          scrollTrigger: { trigger: "#fon-intro-section", start: "top 80%", once: true },
        });
      }

      // ── TYPEWRITER (mismo mecanismo que FFGF) ──
      if (!reduce) {
        document.querySelectorAll<HTMLElement>('[data-anim="fon-typewriter"]').forEach((el) => {
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
              gsap.to(chars, { visibility: "visible", duration: 0, stagger: 0.006, ease: "none" });
            },
          });
        });
      }

      // ── SECTION TITLES: per-character stagger ──
      document.querySelectorAll<HTMLElement>('[data-anim="fon-title"]').forEach((title) => {
        const chars = title.querySelectorAll<HTMLElement>('[data-anim="fon-stagger-char"]');
        if (!chars.length || reduce) return;
        gsap.set(chars, { y: -60, rotateX: 90, opacity: 0, transformOrigin: "50% 0% -10px" });
        ScrollTrigger.create({
          trigger: title,
          start: "top 90%",
          once: true,
          onEnter: () => {
            gsap.to(chars, { y: 0, rotateX: 0, opacity: 1, duration: 0.5, stagger: 0.03, ease: "back.out(2.5)", force3D: true });
          },
        });
      });

      fadeUp('[data-anim="fon-eyebrow"]', { y: 15 });
      fadeUp('[data-anim="fon-desc"]', { delay: 0.25 });
      fadeUp('[data-anim="fon-quote"]', { y: 20, delay: 0.2 });

      // ── PULSE (misión): bars rise from center of each cluster, labels follow ──
      const pulseBars = gsap.utils.toArray<SVGRectElement>('[data-anim="fon-pulse-bar"]');
      const labels = gsap.utils.toArray<HTMLElement>('[data-anim="fon-signal-label"]');
      if (pulseBars.length && !reduce) {
        gsap.set(pulseBars, { scaleY: 0 });
        gsap.set(labels, { opacity: 0, y: 14 });
        ScrollTrigger.create({
          trigger: ".fon-signal",
          start: "top 80%",
          once: true,
          onEnter: () => {
            const tl = gsap.timeline();
            tl.to(pulseBars, { scaleY: 1, duration: 0.7, ease: "back.out(1.5)", stagger: { each: 0.03, from: "start" } });
            tl.to(labels, { opacity: 1, y: 0, duration: 0.55, stagger: 0.14, ease: "power3.out" }, "-=0.5");
          },
        });
      }

      fadeUp('[data-anim="fon-lenguaje"]', { stagger: 0.18, start: "top 88%" });

      // ── CARD GRIDS ──
      cardsIn('[data-anim="fon-timeline-item"]', 0.12);
      cardsIn('[data-anim="fon-eje"]', 0.08);
      cardsIn('[data-anim="fon-cat"]', 0.12);

      fadeUp('[data-anim="fon-cta-row"]', { y: 16, delay: 0.3 });

      // ── JURADO ROWS: alternate slide ──
      const rows = gsap.utils.toArray<HTMLElement>('[data-anim="fon-jurado-row"]');
      if (rows.length && !reduce) {
        rows.forEach((row, i) => {
          gsap.set(row, { opacity: 0, x: i % 2 === 0 ? -60 : 60 });
          ScrollTrigger.create({
            trigger: row,
            start: "top 88%",
            once: true,
            onEnter: () => {
              gsap.to(row, { opacity: 1, x: 0, duration: 0.9, ease: "power3.out", force3D: true, overwrite: "auto" });
            },
          });
        });
      }

      fadeUp('[data-anim="fon-ig"]', { y: 20, stagger: 0.12 });
    });

    return () => ctx.kill();
  }, []);

  return null;
}

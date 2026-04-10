"use client";

import { useLayoutEffect, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GSAPAnimations() {
  // ── Cursor follower ──────────────────────────────────────────────────────
  useEffect(() => {
    if (typeof window === "undefined" || window.innerWidth < 768) return;

    const dot = document.createElement("div");
    dot.id = "cursor-dot";
    Object.assign(dot.style, {
      width: "8px",
      height: "8px",
      background: "#A3CDD8",
      position: "fixed",
      top: "0",
      left: "0",
      borderRadius: "50%",
      pointerEvents: "none",
      zIndex: "9999",
      transform: "translate(-50%, -50%)",
    });
    document.body.appendChild(dot);

    const onMouseMove = (e: MouseEvent) => {
      gsap.to("#cursor-dot", {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: "power2.out",
        force3D: true,
      });
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      dot.parentNode?.removeChild(dot);
    };
  }, []);

  // ── GSAP scroll + mount animations ──────────────────────────────────────
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      // ── NAVBAR ──
      gsap.from(".site-nav", {
        opacity: 0,
        y: -20,
        duration: 0.6,
        delay: 0.1,
        ease: "power3.out",
        force3D: true,
      });

      // ── HERO (mount, no ScrollTrigger) ──

      // Hero logo wrapper — entrance
      const heroWrap = document.querySelector<HTMLElement>("#hero-logo-wrap");
      if (heroWrap) {
        gsap.from(heroWrap, {
          opacity: 0,
          y: 34,
          scale: 0.96,
          duration: 1.3,
          delay: 0.2,
          ease: "power3.out",
          force3D: true,
          transformOrigin: "center bottom",
        });
      }

      // Teal paint — scroll-driven clip-path reveal (left → right)
      const heroBlueLogo = document.querySelector<HTMLElement>("#hero-logo-blue");
      if (heroBlueLogo) {
        gsap.to(heroBlueLogo, {
          clipPath: "inset(0 0% 0 0)",
          ease: "none",
          scrollTrigger: {
            trigger: "#hero-section",
            start: "top top",
            end: "bottom top+=80",
            scrub: 2,
          },
        });
      }

      // Hero edition text
      const heroEdition = document.querySelector<HTMLElement>('[data-anim="hero-edition"]');
      if (heroEdition) {
        gsap.from(heroEdition, {
          opacity: 0,
          y: 20,
          duration: 0.8,
          delay: 0.6,
          ease: "power3.out",
          force3D: true,
        });
      }

      // Hero date
      const heroDate = document.querySelector<HTMLElement>('[data-anim="hero-date"]');
      if (heroDate) {
        gsap.from(heroDate, {
          opacity: 0,
          duration: 0.8,
          delay: 0.9,
          ease: "power3.out",
        });
      }

      // #BEYONDTHESCREEN
      const heroHashtag = document.querySelector<HTMLElement>('[data-anim="hero-hashtag"]');
      if (heroHashtag) {
        gsap.from(heroHashtag, {
          opacity: 0,
          x: -20,
          duration: 0.7,
          delay: 1.1,
          ease: "power3.out",
          force3D: true,
        });
      }

      // Hero description
      const heroDesc = document.querySelector<HTMLElement>('[data-anim="hero-desc"]');
      if (heroDesc) {
        gsap.from(heroDesc, {
          opacity: 0,
          duration: 0.6,
          delay: 1.3,
          ease: "power3.out",
        });
      }

      // ── CTA SECTION ──
      const ctaText = document.querySelector<HTMLElement>('[data-anim="cta-text"]');
      if (ctaText) {
        gsap.from(ctaText, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          ease: "power3.out",
          force3D: true,
          scrollTrigger: {
            trigger: ctaText,
            start: "top 75%",
            once: true,
          },
        });
      }

      const ctaBtn = document.querySelector<HTMLElement>('[data-anim="cta-btn"]');
      if (ctaBtn) {
        gsap.from(ctaBtn, {
          opacity: 0,
          y: 20,
          duration: 0.6,
          delay: 0.2,
          ease: "power3.out",
          force3D: true,
          scrollTrigger: {
            trigger: ctaBtn,
            start: "top 75%",
            once: true,
          },
        });
      }

      // ── IMPULSO SECTION ──
      const impulsoTag = document.querySelector<HTMLElement>('[data-anim="impulso-tag"]');
      if (impulsoTag) {
        gsap.from(impulsoTag, {
          opacity: 0,
          y: 20,
          duration: 0.6,
          ease: "power3.out",
          force3D: true,
          scrollTrigger: {
            trigger: impulsoTag,
            start: "top 75%",
            once: true,
          },
        });
      }

      const impulsoTitle = document.querySelector<HTMLElement>('[data-anim="impulso-title"]');
      if (impulsoTitle) {
        gsap.from(impulsoTitle, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          delay: 0.15,
          ease: "power3.out",
          force3D: true,
          scrollTrigger: {
            trigger: impulsoTitle,
            start: "top 75%",
            once: true,
          },
        });
      }

      const impulsoCards = gsap.utils.toArray<HTMLElement>('[data-anim="impulso-card"]');
      if (impulsoCards.length >= 1) {
        // Left card slides in from the left
        gsap.from(impulsoCards[0], {
          x: "-110vw",
          opacity: 0,
          duration: 1.1,
          ease: "power4.out",
          force3D: true,
          scrollTrigger: {
            trigger: impulsoCards[0],
            start: "top 85%",
            once: true,
          },
        });
      }
      if (impulsoCards.length >= 2) {
        // Right card slides in from the right
        gsap.from(impulsoCards[1], {
          x: "110vw",
          opacity: 0,
          duration: 1.1,
          delay: 0.1,
          ease: "power4.out",
          force3D: true,
          scrollTrigger: {
            trigger: impulsoCards[1],
            start: "top 85%",
            once: true,
          },
        });
      }

      // ── ALIADOS SECTION ──
      const aliadosTag = document.querySelector<HTMLElement>('[data-anim="aliados-tag"]');
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

      const aliadosQuote = document.querySelector<HTMLElement>('[data-anim="aliados-quote"]');
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

      const aliadosMarquee = document.querySelector<HTMLElement>('[data-anim="aliados-marquee"] .aliados-carousel');
      if (aliadosMarquee) {
        gsap.from(aliadosMarquee, {
          opacity: 0,
          duration: 0.6,
          delay: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: aliadosMarquee,
            start: "top 80%",
            once: true,
          },
        });
      }

      // ── FOOTER ──
      const footerLogoSection = document.querySelector<HTMLElement>(".footer-logo-section");
      if (footerLogoSection) {
        gsap.from(footerLogoSection, {
          opacity: 0,
          y: 20,
          duration: 0.7,
          ease: "power3.out",
          force3D: true,
          scrollTrigger: {
            trigger: footerLogoSection,
            start: "top 90%",
            once: true,
          },
        });
      }

      const footerColumns = gsap.utils.toArray<HTMLElement>(".footer-col");
      if (footerColumns.length > 0) {
        gsap.from(footerColumns, {
          opacity: 0,
          y: 20,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          force3D: true,
          scrollTrigger: {
            trigger: ".footer-columns",
            start: "top 90%",
            once: true,
          },
        });
      }

      const footerSocialBar = document.querySelector<HTMLElement>(".footer-social-bar");
      const footerBottom = document.querySelector<HTMLElement>(".footer-bottom");
      const footerTrigger = footerSocialBar ?? footerBottom;
      if (footerTrigger) {
        gsap.from([footerSocialBar, footerBottom].filter(Boolean) as HTMLElement[], {
          opacity: 0,
          duration: 0.5,
          delay: 0.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerTrigger,
            start: "top 90%",
            once: true,
          },
        });
      }

    });

    return () => ctx.revert();
  }, []);

  return null;
}

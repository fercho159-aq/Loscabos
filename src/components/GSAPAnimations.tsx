"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true });

export default function GSAPAnimations() {
  // ── Cursor follower ──────────────────────────────────────────────────────
  useEffect(() => {
    if (typeof window === "undefined" || window.innerWidth < 768) return;

    let dot: HTMLDivElement | null = null;
    let cleanup: (() => void) | null = null;

    const init = () => {
      dot = document.createElement("div");
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
      cleanup = () => {
        window.removeEventListener("mousemove", onMouseMove);
        dot?.parentNode?.removeChild(dot);
      };
    };

    type IdleWindow = Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
    };
    const w = window as IdleWindow;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    if (typeof w.requestIdleCallback === "function") {
      w.requestIdleCallback(init, { timeout: 2000 });
    } else {
      timeoutId = setTimeout(init, 800);
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      cleanup?.();
    };
  }, []);

  // ── GSAP scroll + mount animations ──────────────────────────────────────
  useEffect(() => {
    let ctx: gsap.Context | null = null;
    const w = window as unknown as { requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number; cancelIdleCallback?: (h: number) => void };
    const handle: number = w.requestIdleCallback
      ? w.requestIdleCallback(() => run(), { timeout: 500 })
      : (setTimeout(() => run(), 1) as unknown as number);
    function run() {
    ctx = gsap.context(() => {

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

        // Inlined SVG paths — random stagger reveal
        const heroPaths = heroWrap.querySelectorAll<SVGPathElement | SVGRectElement>("path, rect");
        if (heroPaths.length > 0) {
          gsap.set(heroPaths, { opacity: 0, y: 14, transformOrigin: "50% 50%" });
          gsap.to(heroPaths, {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            stagger: { each: 0.012, from: "random" },
            delay: 0.2,
          });
        }
      }

      // ── HERO EXIT on scroll (scrub — bidireccional, izq/der) ──
      // immediateRender: false evita capturar estado mientras la entrada corre

      const heroWrapExit = document.querySelector<HTMLElement>("#hero-logo-wrap");
      if (heroWrapExit) {
        gsap.to(heroWrapExit, {
          x: -260,
          opacity: 0,
          scale: 0.85,
          ease: "none",
          immediateRender: false,
          scrollTrigger: {
            trigger: "#hero-section",
            start: "25% top",
            end: "85% top",
            scrub: 1.5,
          },
        });
      }

      const heroPlayExit = document.querySelector<HTMLElement>('[data-anim="hero-play"]');
      if (heroPlayExit) {
        gsap.to(heroPlayExit, {
          x: 180,
          opacity: 0,
          rotation: 180,
          ease: "none",
          immediateRender: false,
          scrollTrigger: {
            trigger: "#hero-section",
            start: "28% top",
            end: "75% top",
            scrub: 1,
          },
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
          y: 20,
          duration: 0.8,
          delay: 0.9,
          ease: "power3.out",
          force3D: true,
        });
      }

      // #BEYONDTHESCREEN — simple fade-up
      const heroHashtag = document.querySelector<HTMLElement>('[data-anim="hero-hashtag"]');
      if (heroHashtag) {
        gsap.from(heroHashtag, {
          opacity: 0,
          y: 20,
          duration: 0.8,
          delay: 1.0,
          ease: "power3.out",
          force3D: true,
        });
      }

      // Hero description
      const heroDesc = document.querySelector<HTMLElement>('[data-anim="hero-desc"]');
      if (heroDesc) {
        gsap.from(heroDesc, {
          opacity: 0,
          y: 20,
          duration: 0.6,
          delay: 1.3,
          ease: "power3.out",
          force3D: true,
        });
      }

      // Play button — entrada + pulso continuo + hover
      const heroPlay = document.querySelector<HTMLElement>('[data-anim="hero-play"]');
      if (heroPlay) {
        // Entrada: escala desde 0 con rebote
        gsap.from(heroPlay, {
          scale: 0,
          opacity: 0,
          rotation: -45,
          duration: 0.7,
          delay: 1.5,
          ease: "back.out(2)",
          force3D: true,
        });

        // Pulso continuo después de la entrada
        gsap.to(heroPlay, {
          scale: 1.1,
          duration: 1.4,
          delay: 2.2,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          force3D: true,
        });

        // Hover
        heroPlay.addEventListener("mouseenter", () => {
          gsap.to(heroPlay, {
            scale: 1.2,
            rotation: 15,
            duration: 0.3,
            ease: "power2.out",
            overwrite: "auto",
            force3D: true,
          });
        });
        heroPlay.addEventListener("mouseleave", () => {
          gsap.to(heroPlay, {
            scale: 1,
            rotation: 0,
            duration: 0.5,
            ease: "elastic.out(1, 0.5)",
            overwrite: "auto",
            force3D: true,
          });
        });
      }

      // ── CTA SECTION ──
      const ctaText = document.querySelector<HTMLElement>('[data-anim="cta-text"]');
      if (ctaText) {
        gsap.from(ctaText, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: "power3.out",
          force3D: true,
          scrollTrigger: {
            trigger: ctaText,
            start: "top 80%",
            once: true,
          },
        });
      }

      const ctaBtn = document.querySelector<HTMLElement>('[data-anim="cta-btn"]');
      if (ctaBtn) {
        // Inyectar SVG de borde
        const svgNS = "http://www.w3.org/2000/svg";
        const svg = document.createElementNS(svgNS, "svg");
        svg.setAttribute("class", "cta-button-border-svg");
        svg.setAttribute("aria-hidden", "true");
        const rect = document.createElementNS(svgNS, "rect");
        rect.setAttribute("x", "2.5");
        rect.setAttribute("y", "2.5");
        rect.setAttribute("width", "calc(100% - 5px)");
        rect.setAttribute("rx", "0");
        svg.appendChild(rect);
        ctaBtn.prepend(svg);

        // Calcular perimeter tras render
        ScrollTrigger.create({
          trigger: ctaBtn,
          start: "top 80%",
          once: true,
          onEnter: () => {
            const w = ctaBtn.offsetWidth;
            const h = ctaBtn.offsetHeight;
            const perimeter = 2 * (w + h);
            rect.setAttribute("width", String(w - 5));
            rect.setAttribute("height", String(h - 5));
            rect.style.strokeDasharray = String(perimeter);
            rect.style.strokeDashoffset = String(perimeter);

            // Dibuja el borde y lo repite cada 3s
            const drawBorder = () => {
              rect.style.strokeDashoffset = String(perimeter);
              gsap.to(rect, {
                strokeDashoffset: 0,
                duration: 1.2,
                ease: "power2.inOut",
              });
            };

            drawBorder();
            setInterval(drawBorder, 3000);

            // Entrada botón
            gsap.from(ctaBtn, {
              opacity: 0,
              y: 20,
              duration: 0.6,
              ease: "power3.out",
              force3D: true,
            });
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
          ease: "power3.out",
          force3D: true,
          scrollTrigger: {
            trigger: impulsoTitle,
            start: "top 80%",
            once: true,
          },
        });
      }

      const impulsoCards = gsap.utils.toArray<HTMLElement>('[data-anim="impulso-card"]');
      const isMobile = window.innerWidth < 768;

      if (impulsoCards.length >= 1) {
        gsap.from(impulsoCards[0], {
          x: isMobile ? 0 : "-110vw",
          y: isMobile ? 40 : 0,
          opacity: 0,
          duration: isMobile ? 0.7 : 1.1,
          ease: isMobile ? "power3.out" : "power4.out",
          force3D: true,
          scrollTrigger: {
            trigger: impulsoCards[0],
            start: "top 90%",
            once: true,
          },
        });
      }
      if (impulsoCards.length >= 2) {
        gsap.from(impulsoCards[1], {
          x: isMobile ? 0 : "110vw",
          y: isMobile ? 40 : 0,
          opacity: 0,
          duration: isMobile ? 0.7 : 1.1,
          delay: 0.1,
          ease: isMobile ? "power3.out" : "power4.out",
          force3D: true,
          scrollTrigger: {
            trigger: impulsoCards[1],
            start: "top 90%",
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


      // ── CTA EXIT — wipe botón ──
      gsap.to('[data-anim="cta-btn"]', {
        clipPath: "inset(0 0 0 100%)",
        ease: "none",
        immediateRender: false,
        scrollTrigger: {
          trigger: "#cta-section",
          start: "15% top",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Float continuo + hover en logos aliados
      const aliadoImgs = gsap.utils.toArray<HTMLElement>(".aliado-slide img");
      aliadoImgs.forEach((img, i) => {
        // Float suave — cada logo con fase y duración distintas
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
    }

    return () => {
      if (w.cancelIdleCallback) w.cancelIdleCallback(handle);
      else clearTimeout(handle);
      ctx?.kill();
    };
  }, []);

  return null;
}

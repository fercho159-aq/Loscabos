"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useScrollReveal() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      // Fade up elements
      gsap.utils.toArray<HTMLElement>(".gsap-fade-up").forEach((el) => {
        gsap.from(el, {
          y: 60,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });

      // Fade in from left
      gsap.utils.toArray<HTMLElement>(".gsap-fade-left").forEach((el) => {
        gsap.from(el, {
          x: -80,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });

      // Fade in from right
      gsap.utils.toArray<HTMLElement>(".gsap-fade-right").forEach((el) => {
        gsap.from(el, {
          x: 80,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });

      // Scale reveal
      gsap.utils.toArray<HTMLElement>(".gsap-scale-in").forEach((el) => {
        gsap.from(el, {
          scale: 0.85,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });

      // Stagger children
      gsap.utils.toArray<HTMLElement>(".gsap-stagger-parent").forEach((parent) => {
        const children = parent.children;
        gsap.from(children, {
          y: 40,
          opacity: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: parent,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      });

      // Parallax images
      gsap.utils.toArray<HTMLElement>(".gsap-parallax").forEach((el) => {
        const speed = parseFloat(el.dataset.speed || "0.3");
        gsap.to(el, {
          yPercent: -20 * speed,
          ease: "none",
          scrollTrigger: {
            trigger: el.parentElement,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      // Horizontal reveal line
      gsap.utils.toArray<HTMLElement>(".gsap-line-reveal").forEach((el) => {
        gsap.from(el, {
          scaleX: 0,
          transformOrigin: "left center",
          duration: 1.2,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });

      // Counter / number animation
      gsap.utils.toArray<HTMLElement>(".gsap-counter").forEach((el) => {
        const target = parseInt(el.dataset.target || "0");
        gsap.from(el, {
          textContent: 0,
          duration: 2,
          ease: "power1.out",
          snap: { textContent: 1 },
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });

      // Clip path reveal
      gsap.utils.toArray<HTMLElement>(".gsap-clip-reveal").forEach((el) => {
        gsap.from(el, {
          clipPath: "inset(0 100% 0 0)",
          duration: 1.2,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      });

      // Text split reveal (word by word)
      gsap.utils.toArray<HTMLElement>(".gsap-text-reveal").forEach((el) => {
        const text = el.textContent || "";
        const words = text.split(" ");
        el.innerHTML = words
          .map((w) => `<span style="display:inline-block;overflow:hidden"><span style="display:inline-block">${w}</span></span>`)
          .join(" ");
        const innerSpans = el.querySelectorAll("span > span");
        gsap.from(innerSpans, {
          y: "100%",
          duration: 0.6,
          stagger: 0.03,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });
    }, containerRef);

    return () => ctx.kill();
  }, []);

  return containerRef;
}

export function ScrollContainer({ children }: { children: React.ReactNode }) {
  const ref = useScrollReveal();
  return <div ref={ref}>{children}</div>;
}

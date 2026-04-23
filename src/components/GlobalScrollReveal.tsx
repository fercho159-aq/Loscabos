"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GlobalScrollReveal() {
  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        // Sections fade up
        gsap.utils.toArray<HTMLElement>("section").forEach((section) => {
          gsap.from(section, {
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          });
        });

        // Headings
        gsap.utils.toArray<HTMLElement>(
          "h1, h2, h3, .section-heading, .page-hero-title"
        ).forEach((el) => {
          gsap.from(el, {
            y: 30,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          });
        });

        // Paragraphs and text blocks
        gsap.utils.toArray<HTMLElement>(
          "section p, section .section-list, section .section-dates"
        ).forEach((el) => {
          gsap.from(el, {
            y: 25,
            opacity: 0,
            duration: 0.7,
            delay: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 92%",
              toggleActions: "play none none none",
            },
          });
        });

        // Grid children stagger (flip cards, profile cards, etc.)
        gsap.utils.toArray<HTMLElement>(
          ".legado-grid, .profiles-grid, .ffgf-legado-grid, .aliados-track"
        ).forEach((parent) => {
          gsap.from(parent.children, {
            y: 50,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: parent,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          });
        });

        // Images inside grids (two-column layouts)
        gsap.utils.toArray<HTMLElement>(
          "section > div > div > div img, section > div > div > .flip-card"
        ).forEach((el) => {
          // Skip if already handled by parent stagger
          if (el.closest(".legado-grid, .profiles-grid, .ffgf-legado-grid")) return;
          gsap.from(el, {
            scale: 0.95,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          });
        });

        // CTA buttons
        gsap.utils.toArray<HTMLElement>(".cta-button").forEach((el) => {
          gsap.from(el, {
            y: 20,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 95%",
              toggleActions: "play none none none",
            },
          });
        });

        // Footer
        gsap.utils.toArray<HTMLElement>("footer, .site-footer").forEach((el) => {
          gsap.from(el, {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 95%",
              toggleActions: "play none none none",
            },
          });
        });
      });

      return () => ctx.kill();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return null;
}

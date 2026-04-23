"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  className?: string;
  style?: React.CSSProperties;
}

export default function TextureStrip({ className = "", style }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = ref.current;
    if (!host) return;
    let ctx: gsap.Context | null = null;
    let cancelled = false;

    fetch("/images/texture-pattern.svg")
      .then((r) => r.text())
      .then((svgText) => {
        if (cancelled || !host) return;
        host.innerHTML = svgText;
        const svg = host.querySelector("svg") as SVGSVGElement | null;
        if (!svg) return;

        svg.setAttribute("width", "100%");
        svg.setAttribute("height", "100%");
        svg.setAttribute("preserveAspectRatio", "xMidYMid slice");
        svg.style.display = "block";

        const pick = (rgb: string) =>
          Array.from(svg.querySelectorAll<SVGGraphicsElement>(`[style*="${rgb}"]`));

        const bigCircles = pick("rgb(237,230,220)");   // cream large circles
        const blueCircles = pick("rgb(163,205,216)");  // blue rings
        const chevrons = pick("rgb(143,167,157)");     // sage chevrons + X
        const diamonds = pick("rgb(217,122,91)");      // orange diamonds
        const rings = pick("rgb(227,169,124)");        // peach stacked rings

        gsap.set([...bigCircles, ...blueCircles, ...chevrons, ...diamonds, ...rings], {
          opacity: 0,
        });
        gsap.set(bigCircles, { scale: 0.5, transformOrigin: "50% 50%" });
        gsap.set(blueCircles, { scale: 0.5, transformOrigin: "50% 50%" });
        gsap.set(chevrons, { scale: 0.3, transformOrigin: "50% 50%" });
        gsap.set(diamonds, { scale: 0.3, transformOrigin: "50% 50%" });
        gsap.set(rings, { scale: 0.2, transformOrigin: "50% 50%" });

        ctx = gsap.context(() => {
          const st = { trigger: host, start: "top 98%", once: true };

          gsap.to([...bigCircles, ...blueCircles], {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            stagger: 0.14,
            ease: "back.out(1.8)",
            scrollTrigger: st,
          });

          gsap.to(chevrons, {
            scale: 1,
            opacity: 1,
            duration: 0.7,
            stagger: 0.06,
            ease: "back.out(1.8)",
            scrollTrigger: st,
          });

          gsap.to(diamonds, {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            stagger: 0.08,
            ease: "back.out(2)",
            scrollTrigger: st,
          });

          gsap.to(rings, {
            scale: 1,
            opacity: 1,
            duration: 0.45,
            stagger: 0.055,
            ease: "back.out(2.2)",
            scrollTrigger: st,
          });

          gsap.from(svg, {
            opacity: 0,
            y: 10,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: st,
          });
        }, host);
      })
      .catch(() => {});

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={className}
      style={{ width: "100%", height: "100%", ...style }}
    />
  );
}

"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function BrandbookHero() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    let ctx: gsap.Context | undefined;

    fetch("/images/FICCLosCabos_2026_Brandbook.svg")
      .then((r) => r.text())
      .then((svgText) => {
        host.innerHTML = svgText;
        const svg = host.querySelector<SVGSVGElement>("svg");
        if (!svg) return;
        svg.setAttribute("width", "100%");
        svg.setAttribute("height", "100%");
        svg.style.width = "100%";
        svg.style.height = "auto";
        svg.style.display = "block";

        const paths = svg.querySelectorAll<SVGPathElement | SVGRectElement>(
          "path, rect"
        );

        ctx = gsap.context(() => {
          gsap.set(paths, { opacity: 0, y: 14, transformOrigin: "50% 50%" });
          gsap.to(paths, {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            stagger: {
              each: 0.012,
              from: "random",
            },
            delay: 0.2,
          });
        }, host);
      });

    return () => {
      ctx?.kill();
    };
  }, []);

  return (
    <div
      ref={hostRef}
      id="hero-logo-wrap"
      style={{ width: 720, maxWidth: "92vw", display: "block" }}
      aria-hidden="true"
    />
  );
}

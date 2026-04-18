"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

interface Props {
  lines?: string[];
  subtitle?: string;
}

export default function HeroTitle({ lines = ["El Festival"], subtitle }: Props) {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const chars = ref.current?.querySelectorAll(".title-char");
      if (!chars?.length) return;

      gsap.from(chars, {
        y: -120,
        opacity: 0,
        duration: 1.1,
        stagger: { amount: 0.55, from: "start" },
        ease: "power4.out",
        delay: 0.5,
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <h1
      ref={ref}
      className="absolute top-[30vh] md:top-[266px] left-4 md:left-[77px] w-[calc(100%-2rem)] md:w-[700px] font-black text-cream text-[clamp(2.2rem,9vw,90px)] tracking-tight overflow-hidden leading-[1.1]"
    >
      {lines.map((line, li) => (
        <span key={li} className="block overflow-hidden">
          {line.split("").map((char, ci) => (
            <span key={ci} className="title-char inline-block">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </span>
      ))}
      {subtitle && (
        <span
          className="block mt-4 text-cream/60 text-[clamp(1rem,3vw,1.5rem)] font-normal tracking-wide"
        >
          {subtitle}
        </span>
      )}
    </h1>
  );
}

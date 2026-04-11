"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function HeroTitle() {
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
      className="absolute top-[266px] left-[77px] w-[453px] font-black text-cream text-[90px] tracking-tight overflow-hidden leading-none"
    >
      {"El Festival".split("").map((char, i) => (
        <span key={i} className="title-char inline-block">
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h1>
  );
}

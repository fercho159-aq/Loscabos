"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";

interface Props {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export default function ZoomLink({ href, className, children }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const card = ref.current?.closest<HTMLElement>('[data-anim="impulso-card"]');
    if (!card) {
      router.push(href);
      return;
    }

    const r = card.getBoundingClientRect();
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    const top    = Math.round(r.top);
    const right  = Math.round(vw - r.right);
    const bottom = Math.round(vh - r.bottom);
    const left   = Math.round(r.left);

    // Full-screen overlay, initially clipped to the card's exact rect
    const overlay = document.createElement("div");
    overlay.id = "page-tx-overlay";
    overlay.style.cssText = `
      position: fixed;
      inset: 0;
      background: #EDE6DC;
      z-index: 9998;
      pointer-events: none;
    `;
    document.body.appendChild(overlay);

    gsap.fromTo(
      overlay,
      { clipPath: `inset(${top}px ${right}px ${bottom}px ${left}px round 2px)` },
      {
        clipPath: "inset(0px 0px 0px 0px round 0px)",
        duration: 0.6,
        ease: "power3.inOut",
        onComplete: () => {
          router.push(href);
          setTimeout(() => overlay.remove(), 1200);
        },
      }
    );
  };

  return (
    <a ref={ref} href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}

"use client";

import { useEffect } from "react";
import gsap from "gsap";

const NS = "http://www.w3.org/2000/svg";
const COLORS = ["#A3CDD8", "#BDC957", "#960942", "#C47A3D", "#EDE6DC"];
const EDGE_PCT = 9;
const REPEL_RADIUS = 145;
const COUNT = 34;

function prng(seed: number): number {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

type ShapeType = "film" | "star4" | "circle" | "diamond" | "sparkle";
const SHAPES: ShapeType[] = ["film", "star4", "circle", "diamond", "sparkle"];

interface DecorDef {
  xPct: number;
  yPct: number;
  shape: ShapeType;
  color: string;
  size: number;
  rot: number;
}

const DEFS: DecorDef[] = (() => {
  const d: DecorDef[] = [];
  for (let i = 0; i < COUNT; i++) {
    const s = i * 13;
    const edge = Math.floor(prng(s) * 4);
    const a = prng(s + 1),
      b = prng(s + 2);
    let xPct: number, yPct: number;
    if (edge === 0) {
      xPct = EDGE_PCT + a * (100 - EDGE_PCT * 2);
      yPct = b * EDGE_PCT;
    } else if (edge === 1) {
      xPct = 100 - b * EDGE_PCT;
      yPct = EDGE_PCT + a * (100 - EDGE_PCT * 2);
    } else if (edge === 2) {
      xPct = EDGE_PCT + a * (100 - EDGE_PCT * 2);
      yPct = 100 - b * EDGE_PCT;
    } else {
      xPct = b * EDGE_PCT;
      yPct = EDGE_PCT + a * (100 - EDGE_PCT * 2);
    }
    d.push({
      xPct,
      yPct,
      shape: SHAPES[Math.floor(prng(s + 3) * SHAPES.length)],
      color: COLORS[Math.floor(prng(s + 4) * COLORS.length)],
      size: 14 + Math.floor(prng(s + 5) * 24),
      rot: Math.floor(prng(s + 6) * 360),
    });
  }
  return d;
})();

function buildShape(
  shape: ShapeType,
  size: number,
  color: string
): SVGGElement {
  const g = document.createElementNS(NS, "g") as SVGGElement;
  const h = size / 2;

  if (shape === "film") {
    const rect = document.createElementNS(NS, "rect") as SVGRectElement;
    rect.setAttribute("x", `${-h}`);
    rect.setAttribute("y", `${-h * 0.6}`);
    rect.setAttribute("width", `${size}`);
    rect.setAttribute("height", `${size * 0.6}`);
    rect.setAttribute("rx", "2");
    rect.setAttribute("fill", "none");
    rect.setAttribute("stroke", color);
    rect.setAttribute("stroke-width", "1.5");
    g.appendChild(rect);
    // sprocket holes
    (
      [
        [-h + 3.5, -h * 0.28],
        [-h + 3.5, h * 0.28],
        [h - 3.5, -h * 0.28],
        [h - 3.5, h * 0.28],
      ] as [number, number][]
    ).forEach(([cx, cy]) => {
      const c = document.createElementNS(NS, "circle") as SVGCircleElement;
      c.setAttribute("cx", `${cx}`);
      c.setAttribute("cy", `${cy}`);
      c.setAttribute("r", "2");
      c.setAttribute("fill", color);
      g.appendChild(c);
    });
  } else if (shape === "star4") {
    const path = document.createElementNS(NS, "path") as SVGPathElement;
    let d = "";
    for (let i = 0; i < 8; i++) {
      const a = (i * Math.PI) / 4 - Math.PI / 2;
      const r = i % 2 === 0 ? h : h * 0.38;
      d += `${i === 0 ? "M" : "L"}${(Math.cos(a) * r).toFixed(2)},${(
        Math.sin(a) * r
      ).toFixed(2)} `;
    }
    path.setAttribute("d", d + "Z");
    path.setAttribute("fill", color);
    path.setAttribute("opacity", "0.85");
    g.appendChild(path);
  } else if (shape === "circle") {
    const c1 = document.createElementNS(NS, "circle") as SVGCircleElement;
    c1.setAttribute("r", `${h}`);
    c1.setAttribute("fill", "none");
    c1.setAttribute("stroke", color);
    c1.setAttribute("stroke-width", "1.5");
    const c2 = document.createElementNS(NS, "circle") as SVGCircleElement;
    c2.setAttribute("r", `${h * 0.3}`);
    c2.setAttribute("fill", color);
    c2.setAttribute("opacity", "0.72");
    g.appendChild(c1);
    g.appendChild(c2);
  } else if (shape === "diamond") {
    const poly = document.createElementNS(NS, "polygon") as SVGPolygonElement;
    poly.setAttribute("points", `0,${-h} ${h},0 0,${h} ${-h},0`);
    poly.setAttribute("fill", "none");
    poly.setAttribute("stroke", color);
    poly.setAttribute("stroke-width", "1.5");
    g.appendChild(poly);
  } else {
    // sparkle — thin 4-arm star
    const path = document.createElementNS(NS, "path") as SVGPathElement;
    let d = "";
    for (let i = 0; i < 8; i++) {
      const a = (i * Math.PI) / 4 - Math.PI / 2;
      const r = i % 2 === 0 ? h : h * 0.1;
      d += `${i === 0 ? "M" : "L"}${(Math.cos(a) * r).toFixed(2)},${(
        Math.sin(a) * r
      ).toFixed(2)} `;
    }
    path.setAttribute("d", d + "Z");
    path.setAttribute("fill", color);
    g.appendChild(path);
  }

  return g;
}

export default function InteractiveDecorations() {
  useEffect(() => {
    if (typeof window === "undefined" || window.innerWidth < 1024) return;

    const svgEl = document.createElementNS(NS, "svg") as SVGSVGElement;
    Object.assign(svgEl.style, {
      position: "fixed",
      top: "0",
      left: "0",
      width: "100vw",
      height: "100vh",
      pointerEvents: "none",
      zIndex: "39",
      overflow: "visible",
    });
    document.body.appendChild(svgEl);

    interface Item {
      wrapper: SVGGElement;
      inner: SVGGElement;
      bx: number;
      by: number;
      pushed: boolean;
    }
    const items: Item[] = [];

    DEFS.forEach((def, i) => {
      const bx = (def.xPct / 100) * window.innerWidth;
      const by = (def.yPct / 100) * window.innerHeight;

      // wrapper: absolute position, mouse repel moves it
      const wrapper = document.createElementNS(NS, "g") as SVGGElement;
      gsap.set(wrapper, { x: bx, y: by });

      // inner: float + spin + scale animations
      const inner = document.createElementNS(NS, "g") as SVGGElement;
      const shape = buildShape(def.shape, def.size, def.color);
      gsap.set(shape, { rotation: def.rot, transformOrigin: "0 0" });

      inner.appendChild(shape);
      wrapper.appendChild(inner);
      svgEl.appendChild(wrapper);

      // Entrance — staggered pop-in
      gsap.set(inner, { opacity: 0, scale: 0 });
      gsap.to(inner, {
        opacity: 0.72,
        scale: 1,
        duration: 0.75,
        delay: 0.15 + i * 0.022,
        ease: "back.out(1.7)",
      });

      // Idle float — only animates inner.y (no conflict with wrapper.x/y)
      const amp = 4 + prng(i * 19) * 9;
      const dur = 2.0 + prng(i * 19 + 1) * 2.5;
      gsap.to(inner, {
        y: amp,
        duration: dur,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: prng(i * 19 + 2) * dur * 2,
      });

      // Idle rotation — gentle wobble
      const spinAmp = 12 + prng(i * 19 + 3) * 30;
      const spinDur = 4 + prng(i * 19 + 4) * 5;
      gsap.to(inner, {
        rotation: `+=${spinAmp}`,
        duration: spinDur,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: prng(i * 19 + 5) * spinDur,
      });

      items.push({ wrapper, inner, bx, by, pushed: false });
    });

    // ── Mouse repel ──────────────────────────────────────────────────────────
    const onMouseMove = (e: MouseEvent) => {
      const mx = e.clientX,
        my = e.clientY;
      items.forEach((item) => {
        const { wrapper, inner, bx, by } = item;
        const dx = mx - bx,
          dy = my - by;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < REPEL_RADIUS) {
          item.pushed = true;
          const force = Math.pow(1 - dist / REPEL_RADIUS, 1.5) * 42;
          const angle = Math.atan2(dy, dx);
          gsap.to(wrapper, {
            x: bx - Math.cos(angle) * force,
            y: by - Math.sin(angle) * force,
            duration: 0.22,
            ease: "power2.out",
            overwrite: true,
          });
          gsap.to(inner, {
            scale: 1.35,
            duration: 0.18,
            ease: "power2.out",
            overwrite: "auto",
          });
        } else if (item.pushed) {
          item.pushed = false;
          gsap.to(wrapper, {
            x: bx,
            y: by,
            duration: 1.5,
            ease: "elastic.out(1, 0.28)",
            overwrite: true,
          });
          gsap.to(inner, {
            scale: 1,
            duration: 0.5,
            ease: "power2.out",
            overwrite: "auto",
          });
        }
      });
    };

    // ── Touch support ────────────────────────────────────────────────────────
    const onTouchMove = (e: TouchEvent) => {
      const t = e.touches[0];
      if (t)
        onMouseMove({
          clientX: t.clientX,
          clientY: t.clientY,
        } as MouseEvent);
    };

    // ── Click burst ──────────────────────────────────────────────────────────
    const onClick = (e: MouseEvent) => {
      const cx = e.clientX,
        cy = e.clientY;
      items.forEach((item) => {
        const { wrapper, inner, bx, by } = item;
        const dx = cx - bx,
          dy = cy - by;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 320) {
          const intensity = Math.pow(1 - dist / 320, 1.8) * 65;
          const angle = Math.atan2(dy, dx);
          item.pushed = false;
          gsap.killTweensOf(wrapper);
          gsap
            .timeline()
            .to(wrapper, {
              x: bx - Math.cos(angle) * intensity,
              y: by - Math.sin(angle) * intensity,
              duration: 0.28,
              ease: "back.out(2.5)",
            })
            .to(wrapper, {
              x: bx,
              y: by,
              duration: 1.3,
              ease: "elastic.out(1.1, 0.27)",
            });
          gsap
            .timeline({ overwrite: "auto" })
            .to(inner, { scale: 1.7, duration: 0.22, ease: "back.out(2)" })
            .to(inner, { scale: 1, duration: 0.55, ease: "power2.out" });
        }
      });
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("click", onClick);
      items.forEach(({ wrapper, inner }) => {
        gsap.killTweensOf(wrapper);
        gsap.killTweensOf(inner);
      });
      svgEl.parentNode?.removeChild(svgEl);
    };
  }, []);

  return null;
}

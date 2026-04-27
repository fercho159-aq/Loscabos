"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const FilmGrain = dynamic(() => import("./FilmGrain"), { ssr: false });

function hasWebGL(): boolean {
  try {
    const c = document.createElement("canvas");
    return !!(c.getContext("webgl") || c.getContext("experimental-webgl"));
  } catch {
    return false;
  }
}

export default function FilmGrainLazy() {
  const [shouldMount, setShouldMount] = useState(false);

  useEffect(() => {
    if (
      typeof window === "undefined" ||
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ||
      !hasWebGL()
    ) {
      return;
    }

    const w = window as Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
    };
    const schedule = w.requestIdleCallback ?? ((cb: () => void) => setTimeout(cb, 1));
    const trigger = () => schedule(() => setShouldMount(true), { timeout: 2500 });

    if (document.readyState === "complete") {
      trigger();
      return;
    }
    window.addEventListener("load", trigger, { once: true });
    return () => window.removeEventListener("load", trigger);
  }, []);

  if (!shouldMount) return null;
  return <FilmGrain />;
}

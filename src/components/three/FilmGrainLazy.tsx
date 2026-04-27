"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const FilmGrain = dynamic(() => import("./FilmGrain"), { ssr: false });

export default function FilmGrainLazy() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    type IdleWindow = Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
    };
    const w = window as IdleWindow;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const trigger = () => setShow(true);

    if (typeof w.requestIdleCallback === "function") {
      w.requestIdleCallback(trigger, { timeout: 4000 });
    } else {
      timeoutId = setTimeout(trigger, 2500);
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  if (!show) return null;
  return <FilmGrain />;
}

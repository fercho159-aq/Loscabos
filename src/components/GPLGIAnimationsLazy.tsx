"use client";

import dynamic from "next/dynamic";

const GPLGIAnimations = dynamic(() => import("./GPLGIAnimations"), { ssr: false });

export default function GPLGIAnimationsLazy() {
  return <GPLGIAnimations />;
}

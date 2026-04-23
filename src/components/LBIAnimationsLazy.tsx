"use client";

import dynamic from "next/dynamic";

const LBIAnimations = dynamic(() => import("./LBIAnimations"), { ssr: false });

export default function LBIAnimationsLazy() {
  return <LBIAnimations />;
}

"use client";

import dynamic from "next/dynamic";

const FoNAnimations = dynamic(() => import("./FoNAnimations"), { ssr: false });

export default function FoNAnimationsLazy() {
  return <FoNAnimations />;
}

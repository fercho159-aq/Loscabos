"use client";

import dynamic from "next/dynamic";

const FFGFAnimations = dynamic(() => import("./FFGFAnimations"), { ssr: false });

export default function FFGFAnimationsLazy() {
  return <FFGFAnimations />;
}

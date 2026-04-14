"use client";

import dynamic from "next/dynamic";

const GSAPAnimations = dynamic(() => import("./GSAPAnimations"), { ssr: false });

export default function GSAPAnimationsLazy() {
  return <GSAPAnimations />;
}

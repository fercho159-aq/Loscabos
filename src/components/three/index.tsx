"use client";

import dynamic from "next/dynamic";

export const FilmGrain = dynamic(
  () => import("./FilmGrain"),
  { ssr: false }
);

export const GradientBlobs = dynamic(
  () => import("./GradientBlobs"),
  { ssr: false }
);

export const FloatingParticles = dynamic(
  () => import("./FloatingParticles"),
  { ssr: false }
);

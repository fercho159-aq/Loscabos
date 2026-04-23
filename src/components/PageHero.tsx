import type { ReactNode } from "react";
import HeroTitle from "./HeroTitle";
import TextureStrip from "./TextureStrip";

interface Props {
  lines: string[];
  subtitle?: string;
  hideStrip?: boolean;
  short?: boolean;
  children?: ReactNode;
}

export default function PageHero({ lines, subtitle, hideStrip, short, children }: Props) {
  return (
    <section className={`relative ${short ? "h-[70vh]" : "h-screen"} bg-[#0A1E23] overflow-hidden`}>
      <HeroTitle lines={lines} subtitle={subtitle} />
      {children && (
        <div className="absolute top-[calc(30vh+13vw+1.5rem)] md:top-[400px] left-4 md:left-[77px] z-40">
          {children}
        </div>
      )}
      {!hideStrip && (
        <div className="page-hero-strip texture-strip-overlay absolute bottom-0 md:top-[630px] md:bottom-auto left-0 right-0 z-50 pointer-events-none h-[122px]">
          <TextureStrip style={{ display: "block" }} />
        </div>
      )}
    </section>
  );
}

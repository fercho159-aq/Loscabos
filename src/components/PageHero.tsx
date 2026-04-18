import HeroTitle from "./HeroTitle";
import TextureStrip from "./TextureStrip";

interface Props {
  lines: string[];
  subtitle?: string;
}

export default function PageHero({ lines, subtitle }: Props) {
  return (
    <section className="relative h-screen bg-[#0A1E23] overflow-hidden">
      <HeroTitle lines={lines} subtitle={subtitle} />
      <div className="page-hero-strip absolute bottom-0 md:top-[630px] md:bottom-auto left-0 right-0 z-50 pointer-events-none h-[122px]">
        <TextureStrip style={{ display: "block" }} />
      </div>
    </section>
  );
}

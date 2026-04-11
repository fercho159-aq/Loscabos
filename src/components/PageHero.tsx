import HeroTitle from "./HeroTitle";
import TextureStrip from "./TextureStrip";

interface Props {
  lines: string[];
}

export default function PageHero({ lines }: Props) {
  return (
    <section className="relative h-screen bg-[#0A1E23] overflow-hidden">
      <HeroTitle lines={lines} />
      <div className="absolute top-[630px] left-0 right-0 z-50 pointer-events-none h-[122px]">
        <TextureStrip style={{ display: "block" }} />
      </div>
    </section>
  );
}

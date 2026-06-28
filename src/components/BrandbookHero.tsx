import fs from "node:fs";
import path from "node:path";

const svgPath = path.join(process.cwd(), "public/images/FICCLosCabos_2026_Brandbook.svg");
const svgRaw = fs.readFileSync(svgPath, "utf8");
const svgInline = svgRaw
  .replace(/<\?xml[^>]*>\s*/i, "")
  .replace(/<!DOCTYPE[^>]*>\s*/i, "")
  .replace(/<svg([^>]*)>/i, '<svg$1 style="width:100%;height:auto;display:block">');

export default function BrandbookHero() {
  return (
    <div
      id="hero-logo-wrap"
      style={{ width: 720, maxWidth: "92vw", display: "block" }}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: svgInline }}
    />
  );
}

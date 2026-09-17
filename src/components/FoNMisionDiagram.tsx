/* Diagrama de la misión: el "pulso de frecuencia" del brandbook (clusters de
   barras coral/lima repetidos) sobre los tres verbos Identificar / Preservar /
   Circular. Las barras entran con scroll (scaleY desde 0, ver FoNAnimations). */

const CLUSTER = [34, 84, 136, 200, 136, 84, 34];
const COLORS = ["#FF4F5E", "#C4DA6D", "#FF4F5E", "#C4DA6D", "#FF4F5E", "#C4DA6D", "#FF4F5E"];
const BAR_W = 26;
const GAP = 14;
const CLUSTERS = 5;
const STEP = BAR_W + GAP;
const W = CLUSTERS * CLUSTER.length * STEP - GAP;
const H = 200;

const NODES = [
  { label: "Identificar", sub: "las historias detrás de la música" },
  { label: "Preservar", sub: "en un archivo audiovisual vivo" },
  { label: "Circular", sub: "hacia nuevas audiencias" },
];

export default function FoNMisionDiagram() {
  const bars: { x: number; h: number; color: string }[] = [];
  for (let c = 0; c < CLUSTERS; c++) {
    CLUSTER.forEach((h, i) => {
      bars.push({ x: (c * CLUSTER.length + i) * STEP, h, color: COLORS[i] });
    });
  }
  return (
    <div className="fon-signal">
      <svg className="fon-pulse" viewBox={`0 0 ${W} ${H}`} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
        {bars.map((b, i) => (
          <rect
            key={i}
            data-anim="fon-pulse-bar"
            x={b.x}
            y={(H - b.h) / 2}
            width={BAR_W}
            height={b.h}
            rx={7}
            fill={b.color}
            style={{ transformOrigin: `${b.x + BAR_W / 2}px ${H / 2}px`, transformBox: "view-box" as never }}
          />
        ))}
      </svg>
      <div className="fon-signal-labels">
        {NODES.map((n) => (
          <div key={n.label} data-anim="fon-signal-label" className="fon-signal-label">
            <strong>{n.label}</strong>
            <span>{n.sub}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

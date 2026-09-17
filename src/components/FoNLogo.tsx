/* Logotipo Frequencies of Now (brandbook 2026): siete barras redondeadas
   coral/lima en forma de pulso + wordmark en Inter Bold uppercase.
   `variant="horizontal"` (barras a la izquierda) o `"vertical"` (apiladas).
   Las barras llevan data-anim="fon-logo-bar" para la animación de entrada. */

export const FON_BARS = [
  { h: 34, color: "#FF4F5E" },
  { h: 84, color: "#C4DA6D" },
  { h: 136, color: "#FF4F5E" },
  { h: 200, color: "#C4DA6D" },
  { h: 136, color: "#FF4F5E" },
  { h: 84, color: "#C4DA6D" },
  { h: 34, color: "#FF4F5E" },
];
const BAR_W = 34;
const GAP = 18;
const W = FON_BARS.length * BAR_W + (FON_BARS.length - 1) * GAP; // 346
const H = 200;

export function FoNBars({ className, animId = "fon-logo-bar" }: { className?: string; animId?: string }) {
  return (
    <svg className={className} viewBox={`0 0 ${W} ${H}`} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
      {FON_BARS.map((b, i) => {
        const x = i * (BAR_W + GAP);
        const y = (H - b.h) / 2;
        return (
          <rect
            key={i}
            data-anim={animId}
            x={x}
            y={y}
            width={BAR_W}
            height={b.h}
            rx={9}
            fill={b.color}
            style={{ transformOrigin: `${x + BAR_W / 2}px ${H / 2}px`, transformBox: "view-box" as never }}
          />
        );
      })}
    </svg>
  );
}

export default function FoNLogo({ variant = "horizontal", tagline }: { variant?: "horizontal" | "vertical"; tagline?: boolean }) {
  return (
    <div className={`fon-logo fon-logo--${variant}`} role="img" aria-label="Frequencies of Now">
      <FoNBars className="fon-logo-bars" />
      <div className="fon-logo-word" aria-hidden="true">
        <span>Frequencies</span>
        <span>of Now</span>
        {tagline && <small>stories behind the sound</small>}
      </div>
    </div>
  );
}

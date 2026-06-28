import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "FICC Los Cabos 2026 — Festival Internacional de Cine y Creatividad";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px 96px",
          background:
            "linear-gradient(135deg, #0A1E23 0%, #0A1E23 55%, #14323a 100%)",
          color: "#F6EDDB",
          fontFamily: "Inter, system-ui, sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 420,
            height: 420,
            borderRadius: 9999,
            background:
              "radial-gradient(circle at center, rgba(250,105,53,0.55) 0%, rgba(250,105,53,0) 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          <div
            style={{
              fontSize: 26,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#FA6935",
              fontWeight: 700,
            }}
          >
            Festival Internacional de Cine y Creatividad
          </div>
          <div
            style={{
              width: 120,
              height: 4,
              background: "#FA6935",
              marginTop: 8,
              display: "flex",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            lineHeight: 0.95,
          }}
        >
          <div
            style={{
              fontSize: 168,
              fontWeight: 900,
              letterSpacing: -4,
              color: "#F6EDDB",
              textTransform: "uppercase",
              display: "flex",
            }}
          >
            Los Cabos
          </div>
          <div
            style={{
              fontSize: 168,
              fontWeight: 900,
              letterSpacing: -4,
              color: "#FA6935",
              textTransform: "uppercase",
              display: "flex",
            }}
          >
            2026
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 32,
            fontWeight: 600,
            color: "#F6EDDB",
          }}
        >
          <div style={{ display: "flex" }}>
            9 – 13 DE DICIEMBRE · #BeyondTheScreen
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 24,
              color: "#F6EDDB",
              opacity: 0.7,
            }}
          >
            ficc.vercel.app
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}

"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float uTime;
  uniform vec3 uColor1;
  uniform vec3 uColor2;
  uniform vec3 uColor3;
  uniform float uSpeed;
  varying vec2 vUv;

  // Simplex-like noise
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                       -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
      + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
      dot(x12.zw,x12.zw)), 0.0);
    m = m*m;
    m = m*m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
    vec3 g;
    g.x = a0.x * x0.x + h.x * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  void main() {
    float t = uTime * uSpeed;
    vec2 uv = vUv;

    float n1 = snoise(uv * 1.5 + vec2(t * 0.3, t * 0.2));
    float n2 = snoise(uv * 2.0 + vec2(-t * 0.2, t * 0.4) + 50.0);
    float n3 = snoise(uv * 1.0 + vec2(t * 0.15, -t * 0.1) + 100.0);

    float blob1 = smoothstep(0.0, 0.6, n1);
    float blob2 = smoothstep(-0.1, 0.5, n2);
    float blob3 = smoothstep(0.1, 0.7, n3);

    vec3 col = uColor1;
    col = mix(col, uColor2, blob1 * 0.5);
    col = mix(col, uColor3, blob2 * 0.35);
    col = mix(col, uColor1 * 1.2, blob3 * 0.25);

    // Subtle vignette
    float vig = 1.0 - smoothstep(0.4, 1.4, length(uv - 0.5) * 1.6);
    col *= 0.85 + vig * 0.15;

    gl_FragColor = vec4(col, 1.0);
  }
`;

interface BlobPlaneProps {
  color1: string;
  color2: string;
  color3: string;
  speed?: number;
}

function BlobPlane({ color1, color2, color3, speed = 0.15 }: BlobPlaneProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColor1: { value: new THREE.Color(color1) },
      uColor2: { value: new THREE.Color(color2) },
      uColor3: { value: new THREE.Color(color3) },
      uSpeed: { value: speed },
    }),
    [color1, color2, color3, speed]
  );

  useFrame(({ clock }) => {
    uniforms.uTime.value = clock.getElapsedTime();
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        depthWrite={false}
      />
    </mesh>
  );
}

interface GradientBlobsProps {
  color1?: string;
  color2?: string;
  color3?: string;
  speed?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function GradientBlobs({
  color1 = "#081722",
  color2 = "#081722",
  color3 = "#6687C3",
  speed = 0.15,
  className = "",
  style = {},
}: GradientBlobsProps) {
  return (
    <div
      className={className}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        ...style,
      }}
    >
      <Canvas
        gl={{ alpha: false, antialias: false }}
        camera={{ position: [0, 0, 1] }}
        style={{ width: "100%", height: "100%" }}
        dpr={1}
      >
        <BlobPlane color1={color1} color2={color2} color3={color3} speed={speed} />
      </Canvas>
    </div>
  );
}

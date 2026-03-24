"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface ParticlesProps {
  count?: number;
  color?: string;
  size?: number;
  speed?: number;
}

function Particles({ count = 80, color = "#BDC957", size = 2.5, speed = 0.08 }: ParticlesProps) {
  const ref = useRef<THREE.Points>(null);

  const [positions, velocities, opacities] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count * 3);
    const opa = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 6;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 4;
      vel[i * 3] = (Math.random() - 0.5) * speed;
      vel[i * 3 + 1] = (Math.random() - 0.5) * speed * 0.6;
      vel[i * 3 + 2] = (Math.random() - 0.5) * speed * 0.3;
      opa[i] = Math.random() * 0.5 + 0.2;
    }
    return [pos, vel, opa];
  }, [count, speed]);

  const vertexShader = `
    attribute float aOpacity;
    varying float vOpacity;
    uniform float uTime;
    void main() {
      vOpacity = aOpacity;
      vec3 pos = position;
      pos.x += sin(uTime * 0.3 + position.y * 2.0) * 0.15;
      pos.y += cos(uTime * 0.2 + position.x * 1.5) * 0.1;
      vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
      gl_PointSize = ${size.toFixed(1)} * (4.0 / -mvPosition.z);
      gl_Position = projectionMatrix * mvPosition;
    }
  `;

  const fragmentShader = `
    varying float vOpacity;
    uniform vec3 uColor;
    void main() {
      float d = length(gl_PointCoord - 0.5);
      if (d > 0.5) discard;
      float alpha = smoothstep(0.5, 0.1, d) * vOpacity;
      gl_FragColor = vec4(uColor, alpha);
    }
  `;

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColor: { value: new THREE.Color(color) },
    }),
    [color]
  );

  useFrame(({ clock }) => {
    if (!ref.current) return;
    uniforms.uTime.value = clock.getElapsedTime();
    const geo = ref.current.geometry;
    const posArr = geo.attributes.position.array as Float32Array;

    for (let i = 0; i < count; i++) {
      posArr[i * 3] += velocities[i * 3] * 0.016;
      posArr[i * 3 + 1] += velocities[i * 3 + 1] * 0.016;

      // Wrap around
      if (posArr[i * 3] > 5) posArr[i * 3] = -5;
      if (posArr[i * 3] < -5) posArr[i * 3] = 5;
      if (posArr[i * 3 + 1] > 3) posArr[i * 3 + 1] = -3;
      if (posArr[i * 3 + 1] < -3) posArr[i * 3 + 1] = 3;
    }
    geo.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-aOpacity"
          args={[opacities, 1]}
        />
      </bufferGeometry>
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

interface FloatingParticlesProps {
  count?: number;
  color?: string;
  size?: number;
  speed?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function FloatingParticles({
  count = 80,
  color = "#BDC957",
  size = 2.5,
  speed = 0.08,
  className = "",
  style = {},
}: FloatingParticlesProps) {
  return (
    <div
      className={className}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 2,
        pointerEvents: "none",
        ...style,
      }}
    >
      <Canvas
        gl={{ alpha: true, antialias: false }}
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ width: "100%", height: "100%", pointerEvents: "none" }}
        dpr={1}
      >
        <Particles count={count} color={color} size={size} speed={speed} />
      </Canvas>
    </div>
  );
}

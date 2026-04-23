"use client";

import { useRef, useEffect, useCallback, type ReactNode, type CSSProperties } from "react";
import * as THREE from "three";

interface Card3DProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  maxTilt?: number;
}

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  uniform vec2  uMouse;
  uniform float uTime;
  uniform float uHover;
  varying vec2  vUv;

  void main() {
    vec2 uv    = vUv;
    vec2 mouse = uMouse;

    // Moving specular blob
    float dist = length(uv - mouse);
    float spec = smoothstep(0.55, 0.0, dist) * uHover;

    // Edge fresnel
    vec2 edge   = abs(uv - 0.5) * 2.0;
    float edge2 = max(edge.x, edge.y);
    float fres  = pow(edge2, 4.0) * 0.35 * uHover;

    // Animated shimmer lines
    float shimmer  = sin((uv.x - uv.y) * 18.0 + uTime * 1.8) * 0.025 * uHover;
    float shimmer2 = sin((uv.x + uv.y) * 22.0 - uTime * 2.3) * 0.015 * uHover;

    float alpha = spec * 0.32 + fres + shimmer + shimmer2;

    // teal (#A3CDD8) -> white for the highlight
    vec3 teal  = vec3(0.639, 0.804, 0.847);
    vec3 color = mix(teal, vec3(1.0), spec * 0.8);

    gl_FragColor = vec4(color, clamp(alpha, 0.0, 0.55));
  }
`;

export default function Card3D({
  children,
  className = "",
  style,
  maxTilt = 14,
}: Card3DProps) {
  const wrapperRef  = useRef<HTMLDivElement>(null);
  const cardRef     = useRef<HTMLDivElement>(null);
  const canvasRef   = useRef<HTMLCanvasElement>(null);

  // Live state kept in refs (no re-renders)
  const mouseRef   = useRef({ x: 0.5, y: 0.5 });
  const targetRef  = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const hoveredRef = useRef(false);
  const rafRef     = useRef<number>(0);

  const threeRef = useRef<{
    renderer: THREE.WebGLRenderer;
    scene:    THREE.Scene;
    camera:   THREE.OrthographicCamera;
    uniforms: {
      uMouse: { value: THREE.Vector2 };
      uTime:  { value: number };
      uHover: { value: number };
    };
  } | null>(null);

  // ── Bootstrap Three.js once ────────────────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene  = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
    camera.position.z = 1;

    const uniforms = {
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uTime:  { value: 0 },
      uHover: { value: 0 },
    };

    const mat  = new THREE.ShaderMaterial({ uniforms, vertexShader, fragmentShader, transparent: true, depthWrite: false });
    const geo  = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geo, mat);
    scene.add(mesh);

    threeRef.current = { renderer, scene, camera, uniforms };

    // Keep canvas sized to the card
    const syncSize = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      renderer.setSize(w, h, false);
    };
    syncSize();
    const ro = new ResizeObserver(syncSize);
    ro.observe(canvas);

    return () => {
      ro.disconnect();
      renderer.dispose();
      geo.dispose();
      mat.dispose();
      threeRef.current = null;
    };
  }, []);

  // ── Single rAF loop ────────────────────────────────────────────────────────
  useEffect(() => {
    const LERP = 0.09;

    const tick = (ms: number) => {
      const t = ms / 1000;

      // Smooth rotation
      currentRef.current.x += (targetRef.current.x - currentRef.current.x) * LERP;
      currentRef.current.y += (targetRef.current.y - currentRef.current.y) * LERP;
      const rx = currentRef.current.x;
      const ry = currentRef.current.y;

      if (cardRef.current) {
        cardRef.current.style.transform =
          `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(1.01,1.01,1.01)`;
        // Dynamic shadow shifts opposite the tilt for depth
        const sx = -ry * 1.5;
        const sy =  rx * 1.5;
        cardRef.current.style.boxShadow =
          `${sx}px ${sy}px 40px rgba(10,30,35,0.35), 0 8px 24px rgba(10,30,35,0.2)`;
      }

      // Three.js specular overlay
      const three = threeRef.current;
      if (three) {
        const { renderer, scene, camera, uniforms } = three;
        uniforms.uMouse.value.set(mouseRef.current.x, 1 - mouseRef.current.y);
        uniforms.uTime.value = t;
        const targetHover = hoveredRef.current ? 1 : 0;
        uniforms.uHover.value += (targetHover - uniforms.uHover.value) * 0.06;
        renderer.render(scene, camera);
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  // ── Mouse handlers ─────────────────────────────────────────────────────────
  const onMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = wrapperRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left)  / r.width;
      const y = (e.clientY - r.top)   / r.height;
      mouseRef.current  = { x, y };
      targetRef.current = {
        x:  (y - 0.5) * maxTilt,
        y: -(x - 0.5) * maxTilt,
      };
    },
    [maxTilt]
  );

  const onMouseEnter = useCallback(() => { hoveredRef.current = true; }, []);
  const onMouseLeave = useCallback(() => {
    hoveredRef.current    = false;
    targetRef.current     = { x: 0, y: 0 };
  }, []);

  return (
    /* Outer wrapper — owns perspective & event capture, no clipping */
    <div
      ref={wrapperRef}
      style={{ display: "inline-block" }}
      onMouseMove={onMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Card surface — receives CSS 3D transform */}
      <div
        ref={cardRef}
        className={className}
        style={{
          ...style,
          willChange: "transform",
          transformStyle: "preserve-3d",
          transition: "box-shadow 0.4s ease",
          position: "relative",
        }}
      >
        {children}

        {/* Three.js specular/shimmer overlay */}
        <canvas
          ref={canvasRef}
          style={{
            position:      "absolute",
            inset:         0,
            width:         "100%",
            height:        "100%",
            pointerEvents: "none",
            zIndex:        10,
            mixBlendMode:  "screen",
            borderRadius:  "inherit",
          }}
        />
      </div>
    </div>
  );
}

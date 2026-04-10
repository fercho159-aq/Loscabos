'use client'

import dynamic from 'next/dynamic'
import { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { useIsMobile } from '@/hooks/useIsMobile'

const PARTICLE_COUNT = 800

// Brand colors as THREE.Color
const BRAND_COLORS = [
  new THREE.Color('#006666'), // teal
  new THREE.Color('#BDC957'), // lima
  new THREE.Color('#960942'), // magenta
  new THREE.Color('#ffffff'), // white
]

function Particles({ mouseRef }: { mouseRef: React.RefObject<{ x: number; y: number }> }) {
  const meshRef = useRef<THREE.InstancedMesh>(null)
  const { size } = useThree()

  // Generate initial positions, scales and colors
  const { positions, scales, colors } = useMemo(() => {
    const positions: number[] = []
    const scales: number[] = []
    const colors: THREE.Color[] = []

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      positions.push(
        (Math.random() - 0.5) * 20,  // x
        (Math.random() - 0.5) * 12,  // y
        (Math.random() - 0.5) * 8,   // z
      )
      scales.push(0.015 + Math.random() * 0.045)
      colors.push(BRAND_COLORS[Math.floor(Math.random() * BRAND_COLORS.length)].clone())
    }
    return { positions, scales, colors }
  }, [])

  // Apply initial transforms
  useEffect(() => {
    if (!meshRef.current) return
    const dummy = new THREE.Object3D()
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      dummy.position.set(positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2])
      dummy.scale.setScalar(scales[i])
      dummy.updateMatrix()
      meshRef.current.setMatrixAt(i, dummy.matrix)
      meshRef.current.setColorAt(i, colors[i])
    }
    meshRef.current.instanceMatrix.needsUpdate = true
    if (meshRef.current.instanceColor) meshRef.current.instanceColor.needsUpdate = true
  }, [positions, scales, colors])

  const dummy = useMemo(() => new THREE.Object3D(), [])
  const speedRef = useRef(positions.map(() => 0.0003 + Math.random() * 0.0008))

  useFrame((state) => {
    if (!meshRef.current) return
    const time = state.clock.elapsedTime
    const mouse = mouseRef.current ?? { x: 0, y: 0 }
    const OFFSET = 0.02

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const speed = speedRef.current[i]
      const ox = positions[i * 3]
      const oy = positions[i * 3 + 1]
      const oz = positions[i * 3 + 2]

      // Gentle float drift
      const nx = ox + Math.sin(time * speed * 60 + i) * 0.3
      const ny = oy + Math.cos(time * speed * 45 + i * 1.3) * 0.2

      // Mouse parallax offset — depth-based
      const depth = (oz + 4) / 12 // 0..1
      const mx = mouse.x * OFFSET * (1 + depth)
      const my = mouse.y * OFFSET * (1 + depth)

      dummy.position.set(nx + mx * size.width * 0.005, ny + my * size.height * 0.005, oz)
      dummy.scale.setScalar(scales[i])
      dummy.updateMatrix()
      meshRef.current.setMatrixAt(i, dummy.matrix)
    }
    meshRef.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, PARTICLE_COUNT]} frustumCulled={false}>
      <sphereGeometry args={[1, 6, 6]} />
      <meshBasicMaterial vertexColors />
    </instancedMesh>
  )
}

function Scene() {
  const mouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 })

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: -(e.clientY / window.innerHeight - 0.5) * 2,
      }
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <>
      <color attach="background" args={['#0a0a0a']} />
      <Particles mouseRef={mouseRef} />
    </>
  )
}

function HeroCanvasInner() {
  const isMobile = useIsMobile()
  if (isMobile) return null

  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 60, near: 0.1, far: 100 }}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      gl={{ antialias: false, alpha: false }}
    >
      <Scene />
    </Canvas>
  )
}

// SSR-safe client export
const HeroCanvasClient = dynamic(() => Promise.resolve(HeroCanvasInner), { ssr: false })

export default HeroCanvasClient

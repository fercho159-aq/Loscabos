'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'

interface Logo {
  name: string
  logo: string
}

interface AliadosMarqueeProps {
  logos: Logo[]
}

export default function AliadosMarquee({ logos }: AliadosMarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const tlRef = useRef<gsap.core.Tween | null>(null)

  // Duplicate for seamless loop
  const doubled = [...logos, ...logos]

  useEffect(() => {
    if (!trackRef.current) return

    tlRef.current = gsap.to(trackRef.current, {
      x: '-50%',
      duration: 30,
      ease: 'none',
      repeat: -1,
    })

    return () => {
      tlRef.current?.kill()
    }
  }, [])

  const handleMouseEnter = () => {
    if (tlRef.current) gsap.to(tlRef.current, { timeScale: 0.3, duration: 0.4 })
  }

  const handleMouseLeave = () => {
    if (tlRef.current) gsap.to(tlRef.current, { timeScale: 1, duration: 0.4 })
  }

  return (
    <div
      style={{
        overflow: 'hidden',
        width: '100%',
        padding: '3rem 0 4rem',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={trackRef}
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '3rem',
          width: 'max-content',
          willChange: 'transform',
        }}
      >
        {doubled.map((a, i) => (
          <div
            key={`${a.name}-${i}`}
            style={{ flexShrink: 0, display: 'flex', alignItems: 'center' }}
          >
            <Image
              src={a.logo}
              alt={`Logo de ${a.name}, aliado del FICC Los Cabos`}
              width={240}
              height={80}
              style={{ height: 80, width: 'auto', objectFit: 'contain' }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

'use client'

import { useLayoutEffect } from 'react'
import gsap from 'gsap'

export default function LogoReveal() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '#hero-logo',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', delay: 0.3 }
      )
    })

    return () => ctx.kill()
  }, [])

  return null
}

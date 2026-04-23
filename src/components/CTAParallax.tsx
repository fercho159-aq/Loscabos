'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function CTAParallax() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('#cta-image', {
        yPercent: -15,
        ease: 'none',
        scrollTrigger: {
          trigger: '#cta-section',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
    })

    return () => ctx.kill()
  }, [])

  return null
}

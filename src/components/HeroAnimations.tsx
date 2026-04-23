'use client'

import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useIsMobile } from '@/hooks/useIsMobile'

gsap.registerPlugin(ScrollTrigger)

export default function HeroAnimations() {
  const isMobile = useIsMobile()

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // ── Date text: split by spaces into individual spans ──
      const dateEl = document.getElementById('hero-date-text')
      if (dateEl) {
        const words = dateEl.textContent?.split(' ') ?? []
        dateEl.innerHTML = words
          .map((w) => `<span class="hero-date-word" style="display:inline-block;overflow:hidden;vertical-align:bottom"><span class="hero-date-inner" style="display:inline-block">${w}</span></span>`)
          .join(' ')

        const inners = dateEl.querySelectorAll<HTMLElement>('.hero-date-inner')

        if (isMobile) {
          gsap.fromTo(inners, { opacity: 0 }, { opacity: 1, duration: 0.6, stagger: 0.05, delay: 0.5 })
        } else {
          gsap.fromTo(
            inners,
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              ease: 'power2.out',
              stagger: 0.05,
              delay: 0.5,
            }
          )
        }
      }

      // ── Hashtag: clip-path reveal ──
      const hashtagEl = document.getElementById('hero-hashtag-text')
      if (hashtagEl) {
        gsap.fromTo(
          hashtagEl,
          { clipPath: 'inset(0 100% 0 0)' },
          {
            clipPath: 'inset(0 0% 0 0)',
            duration: 0.8,
            ease: 'power2.inOut',
            delay: 0.3,
          }
        )
      }

      // ── Impulso cards: clip-path reveal on scroll ──
      const cards = document.querySelectorAll<HTMLElement>('.impulso-card-anim')
      if (cards.length > 0) {
        gsap.fromTo(
          cards,
          { clipPath: 'inset(0 100% 0 0)' },
          {
            clipPath: 'inset(0 0% 0 0)',
            duration: 0.8,
            ease: 'power2.inOut',
            stagger: 0.2,
            scrollTrigger: {
              trigger: cards[0],
              start: 'top 80%',
              once: true,
            },
          }
        )
      }
    })

    return () => ctx.kill()
  }, [isMobile])

  return null
}

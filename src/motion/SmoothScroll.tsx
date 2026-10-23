import Lenis from 'lenis'
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { gsap, ScrollTrigger } from './gsap'
import { prefersReducedMotion } from '@/hooks/useReducedMotion'

const LenisContext = createContext<Lenis | null>(null)

/** Lenis drives the scroll; GSAP's ticker drives Lenis. One RAF loop for everything. */
export function SmoothScroll({ children }: { children: ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null)

  useEffect(() => {
    if (prefersReducedMotion()) return
    const l = new Lenis({
      lerp: 0.085,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.4,
      anchors: { offset: -80 },
    })
    l.on('scroll', ScrollTrigger.update)
    const tick = (t: number) => l.raf(t * 1000)
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)
    setLenis(l)
    return () => {
      gsap.ticker.remove(tick)
      l.destroy()
      setLenis(null)
    }
  }, [])

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
}

export const useLenis = () => useContext(LenisContext)

/** Scroll helper that works with or without Lenis (reduced motion). */
export function scrollToTarget(lenis: Lenis | null, target: string | HTMLElement | number, immediate = false) {
  if (lenis) return lenis.scrollTo(target, { immediate, duration: 1.8, easing: (t) => 1 - Math.pow(1 - t, 4) })
  if (typeof target === 'number') return window.scrollTo({ top: target })
  const el = typeof target === 'string' ? document.querySelector(target) : target
  el?.scrollIntoView()
}

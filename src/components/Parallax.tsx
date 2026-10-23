import { useRef, type ReactNode } from 'react'
import { gsap, useGSAP } from '@/motion/gsap'
import { useReducedMotion } from '@/hooks/useReducedMotion'

/**
 * Inner-parallax frame: the frame scrolls normally while its contents drift
 * at a different rate — depth through a window rather than a sliding card.
 */
export function Parallax({
  children,
  amount = 12,
  className = '',
  scale = 1.18,
}: {
  children: ReactNode
  amount?: number
  className?: string
  scale?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  useGSAP(
    () => {
      if (reduced) return
      gsap.fromTo(
        '[data-px]',
        { yPercent: -amount, scale },
        { yPercent: amount, scale, ease: 'none', scrollTrigger: { trigger: ref.current, start: 'top bottom', end: 'bottom top', scrub: true } },
      )
    },
    { scope: ref, dependencies: [reduced] },
  )
  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <div data-px className="size-full will-change-transform">
        {children}
      </div>
    </div>
  )
}

import { useRef, type ReactNode } from 'react'
import { gsap, useGSAP } from './gsap'
import { FINE_POINTER } from '@/hooks/useMedia'

/**
 * Pulls its child toward the pointer, then lets go with a heavy, damped
 * spring — weighted like a beater lifted off a drum, never rubbery.
 */
export function Magnetic({ children, strength = 0.32, className = '' }: { children: ReactNode; strength?: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null)

  useGSAP(
    () => {
      const el = ref.current
      if (!el || !matchMedia(FINE_POINTER).matches) return
      const inner = el.firstElementChild as HTMLElement | null
      const x = gsap.quickTo(el, 'x', { duration: 0.9, ease: 'settle' })
      const y = gsap.quickTo(el, 'y', { duration: 0.9, ease: 'settle' })
      const ix = inner ? gsap.quickTo(inner, 'x', { duration: 1.1, ease: 'settle' }) : null
      const iy = inner ? gsap.quickTo(inner, 'y', { duration: 1.1, ease: 'settle' }) : null

      const move = (e: PointerEvent) => {
        const r = el.getBoundingClientRect()
        const dx = e.clientX - (r.left + r.width / 2)
        const dy = e.clientY - (r.top + r.height / 2)
        x(dx * strength)
        y(dy * strength)
        ix?.(dx * strength * 0.35)
        iy?.(dy * strength * 0.35)
      }
      const leave = () => {
        gsap.to([el, inner], { x: 0, y: 0, duration: 1.4, ease: 'elastic.out(1, 0.45)', overwrite: true })
      }
      el.addEventListener('pointermove', move)
      el.addEventListener('pointerleave', leave)
      return () => {
        el.removeEventListener('pointermove', move)
        el.removeEventListener('pointerleave', leave)
      }
    },
    { scope: ref },
  )

  return (
    <span ref={ref} className={`inline-block will-change-transform ${className}`}>
      {children}
    </span>
  )
}

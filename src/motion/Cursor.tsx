import { useEffect, useRef, useState } from 'react'
import { gsap } from './gsap'
import { FINE_POINTER } from '@/hooks/useMedia'
import { prefersReducedMotion } from '@/hooks/useReducedMotion'

/**
 * A beater-tip cursor. The dot tracks the pointer exactly; a thin ring
 * trails on a spring and opens over links. Over anything with
 * [data-cursor] a separate disc carries the word ("Explore", "Read") —
 * its own element, centred on the pointer with flexbox, so the word is
 * never scaled or pushed off-centre whatever its length.
 */
export function Cursor() {
  const dot = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)
  const bubble = useRef<HTMLDivElement>(null)
  const disc = useRef<HTMLDivElement>(null)
  const [label, setLabel] = useState('')
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    if (!matchMedia(FINE_POINTER).matches || prefersReducedMotion()) return
    setEnabled(true)
    document.documentElement.classList.add('has-cursor')
    return () => document.documentElement.classList.remove('has-cursor')
  }, [])

  useEffect(() => {
    const d = dot.current
    const r = ring.current
    const b = bubble.current
    const c = disc.current
    if (!enabled || !d || !r || !b || !c) return
    gsap.set([d, r, b], { xPercent: -50, yPercent: -50, opacity: 0 })
    gsap.set(c, { scale: 0 })
    const dx = gsap.quickSetter(d, 'x', 'px')
    const dy = gsap.quickSetter(d, 'y', 'px')
    const rx = gsap.quickTo([r, b], 'x', { duration: 0.6, ease: 'settle' })
    const ry = gsap.quickTo([r, b], 'y', { duration: 0.6, ease: 'settle' })
    let current: Element | null = null
    let labelled = false
    let visible = false

    const move = (e: PointerEvent) => {
      if (!visible) {
        visible = true
        gsap.set([d, r, b], { x: e.clientX, y: e.clientY })
        gsap.to([d, r, b], { opacity: 1, duration: 0.4 })
      }
      dx(e.clientX)
      dy(e.clientY)
      rx(e.clientX)
      ry(e.clientY)
      const target = (e.target as Element | null)?.closest('[data-cursor], a, button, [role="button"], summary') ?? null
      if (target === current) return
      current = target
      const word = target?.getAttribute('data-cursor') ?? ''
      labelled = !!word
      if (word) setLabel(word)
      // overwrite: 'auto' only kills competing scale/opacity tweens — `true`
      // would also kill the x/y followers and freeze the cursor in place.
      gsap.to(c, { scale: word ? 1 : 0, duration: word ? 0.7 : 0.35, ease: word ? 'settle' : 'release', overwrite: 'auto' })
      gsap.to(r, { scale: target && !word ? 1.8 : 1, opacity: word ? 0 : 1, duration: 0.6, ease: 'settle', overwrite: 'auto' })
      gsap.to(d, { scale: target ? 0 : 1, duration: 0.4, overwrite: 'auto' })
    }
    const down = () => {
      const el = labelled ? c : r
      const rest = labelled ? 1 : current ? 1.8 : 1
      gsap.fromTo(el, { scale: rest * 0.82 }, { scale: rest, duration: 0.6, ease: 'strike', overwrite: 'auto' })
    }
    const leave = () => {
      visible = false
      gsap.to([d, r, b], { opacity: 0, duration: 0.3 })
    }
    window.addEventListener('pointermove', move, { passive: true })
    window.addEventListener('pointerdown', down)
    document.addEventListener('pointerleave', leave)
    return () => {
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerdown', down)
      document.removeEventListener('pointerleave', leave)
    }
  }, [enabled])

  if (!enabled) return null
  return (
    <>
      <div ref={ring} aria-hidden className="pointer-events-none fixed left-0 top-0 z-[100] size-9 rounded-full border border-forest/60" />
      <div ref={bubble} aria-hidden className="pointer-events-none fixed left-0 top-0 z-[100]">
        <div
          ref={disc}
          className="flex size-[5.5rem] items-center justify-center rounded-full bg-forest text-center text-[0.85rem] font-medium leading-none tracking-[0.01em] text-paper shadow-[0_0_0_1px_rgba(255,255,255,0.18)]"
        >
          {label}
        </div>
      </div>
      <div ref={dot} aria-hidden className="pointer-events-none fixed left-0 top-0 z-[100] size-1.5 rounded-full bg-forest" />
    </>
  )
}

import { createContext, useCallback, useContext, useEffect, useRef, type ReactNode, type MouseEvent } from 'react'
import { Link, useLocation, useNavigate, type LinkProps } from 'react-router'
import { gsap } from './gsap'
import { useLenis, scrollToTarget } from './SmoothScroll'
import { prefersReducedMotion } from '@/hooks/useReducedMotion'

type Go = (to: string, label?: string) => void
const TransitionContext = createContext<Go>(() => {})

/*
 * The "breath" curtain. A clay panel rises with an arched leading edge
 * (the doorway), holds for a beat while the destination's name surfaces,
 * then lifts away, its trailing edge sagging behind like cloth.
 * The path is always "top curve + bottom curve" so every state morphs cleanly.
 */
type Edge = { t: number; tc: number; b: number; bc: number }
const shape = ({ t, tc, b, bc }: Edge) => `M0 ${t} Q50 ${tc} 100 ${t} L100 ${b} Q50 ${bc} 0 ${b} Z`

export function TransitionProvider({ children }: { children: ReactNode }) {
  const navigate = useNavigate()
  const location = useLocation()
  const lenis = useLenis()
  const root = useRef<HTMLDivElement>(null)
  const path = useRef<SVGPathElement>(null)
  const title = useRef<HTMLParagraphElement>(null)
  const busy = useRef(false)

  const go = useCallback<Go>(
    (to, label) => {
      if (busy.current || to === location.pathname) return
      if (prefersReducedMotion() || !root.current || !path.current || !title.current) {
        navigate(to)
        window.scrollTo(0, 0)
        return
      }
      busy.current = true
      lenis?.stop()
      title.current.textContent = label ?? ''
      const p = path.current
      const e: Edge = { t: 100, tc: 100, b: 100, bc: 100 }
      const draw = () => p.setAttribute('d', shape(e))
      const tl = gsap.timeline({ defaults: { ease: 'breath', onUpdate: draw } })
      tl.set(root.current, { visibility: 'visible' })
        .set(e, { t: 100, tc: 100, b: 100, bc: 100 })
        // Leading edge: the crown of the arch leads, the shoulders follow.
        .to(e, { tc: -30, duration: 0.62, ease: 'settle' })
        .to(e, { t: 0, duration: 0.7, ease: 'breath' }, 0.06)
        .to(e, { tc: 0, duration: 0.45, ease: 'settle' }, 0.5)
        .fromTo(title.current, { yPercent: 70, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.8, ease: 'settle', onUpdate: undefined }, 0.42)
        .add(() => {
          navigate(to)
          scrollToTarget(lenis, 0, true)
          window.scrollTo(0, 0)
        })
        .to(title.current, { yPercent: -60, opacity: 0, duration: 0.45, ease: 'release', onUpdate: undefined }, '+=0.3')
        // Trailing edge: the shoulders lift first, the middle sags then follows.
        .to(e, { b: 0, duration: 0.8, ease: 'breath' }, '-=0.2')
        .to(e, { bc: 0, duration: 1, ease: 'settle' }, '<0.12')
        .add(() => {
          gsap.set(root.current, { visibility: 'hidden' })
          lenis?.start()
          busy.current = false
        })
    },
    [lenis, location.pathname, navigate],
  )

  // Back / forward: no curtain, just land at the top.
  useEffect(() => {
    if (!busy.current) scrollToTarget(lenis, 0, true)
  }, [location.pathname, lenis])

  return (
    <TransitionContext.Provider value={go}>
      {children}
      <div ref={root} aria-hidden className="invisible fixed inset-0 z-[80] grid place-items-center">
        <svg className="absolute inset-0 size-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path ref={path} className="fill-forest" d={shape({ t: 100, tc: 100, b: 100, bc: 100 })} />
        </svg>
        <p ref={title} className="t-display-m relative italic text-paper" />
      </div>
    </TransitionContext.Provider>
  )
}

export const usePageTransition = () => useContext(TransitionContext)

/** A router link that travels through the curtain. */
export function TLink({ to, label, onClick, ...rest }: LinkProps & { to: string; label?: string }) {
  const go = usePageTransition()
  return (
    <Link
      to={to}
      onClick={(e: MouseEvent<HTMLAnchorElement>) => {
        onClick?.(e)
        if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return
        e.preventDefault()
        go(to, label)
      }}
      {...rest}
    />
  )
}

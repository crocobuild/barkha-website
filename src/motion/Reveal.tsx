import { useRef, type ElementType, type ReactNode, type ComponentPropsWithoutRef } from 'react'
import { gsap, SplitText, useGSAP } from './gsap'
import { useReducedMotion } from '@/hooks/useReducedMotion'

type Mode = 'lines' | 'words' | 'scrub'

type Props<T extends ElementType> = {
  as?: T
  children: ReactNode
  mode?: Mode
  /** 'view' plays on scroll into view; 'manual' waits for `play`. */
  trigger?: 'view' | 'manual'
  play?: boolean
  delay?: number
  start?: string
  className?: string
} & Omit<ComponentPropsWithoutRef<T>, 'children' | 'className'>

/**
 * Typographic reveal built on SplitText.
 *  lines — each line rises out of its own baseline mask, with a slight
 *          counter-rotation that settles flat (like paper laid down).
 *  words — words surface from a soft blur, staggered by reading order.
 *  scrub — words brighten as you scroll through them, so the reading
 *          pace *is* the animation.
 */
export function Reveal<T extends ElementType = 'div'>({
  as,
  children,
  mode = 'lines',
  trigger = 'view',
  play = true,
  delay = 0,
  start = 'top 86%',
  className = '',
  ...rest
}: Props<T>) {
  const Tag = (as ?? 'div') as ElementType
  const ref = useRef<HTMLElement>(null)
  const reduced = useReducedMotion()
  const armed = trigger === 'view' || play

  useGSAP(
    () => {
      const el = ref.current
      if (!el || reduced || !armed) return
      let split: SplitText | undefined
      document.fonts.ready.then(() => {
        if (!ref.current) return
        split = SplitText.create(el, {
          type: mode === 'lines' ? 'lines,words' : 'words',
          mask: mode === 'lines' ? 'lines' : undefined,
          linesClass: 'split-line',
          autoSplit: mode === 'lines',
          onSplit(self) {
            gsap.set(el, { visibility: 'visible' })
            const st = trigger === 'view' ? { trigger: el, start, once: true } : undefined
            if (mode === 'lines') {
              return gsap.from(self.words, {
                yPercent: 118,
                rotate: 3.5,
                transformOrigin: '0% 100%',
                duration: 1.35,
                ease: 'settle',
                stagger: { each: 0.018, from: 'start' },
                delay,
                scrollTrigger: st,
              })
            }
            if (mode === 'words') {
              return gsap.from(self.words, {
                opacity: 0,
                y: '0.35em',
                filter: 'blur(8px)',
                duration: 1.2,
                ease: 'settle',
                stagger: 0.035,
                delay,
                scrollTrigger: st,
              })
            }
            return gsap.fromTo(
              self.words,
              { opacity: 0.13 },
              {
                opacity: 1,
                ease: 'none',
                stagger: 0.1,
                scrollTrigger: { trigger: el, start: 'top 78%', end: 'bottom 45%', scrub: 0.6 },
              },
            )
          },
        })
      })
      return () => split?.revert()
    },
    { scope: ref, dependencies: [reduced, armed, mode] },
  )

  return (
    <Tag ref={ref} className={className} style={!reduced && mode !== 'scrub' ? { visibility: 'hidden' } : undefined} {...rest}>
      {children}
    </Tag>
  )
}

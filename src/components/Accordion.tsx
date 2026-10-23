import { useId, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import type { Faq } from '@/content/faq'
import { ScrollTrigger } from '@/motion/gsap'

const settle = [0.16, 1, 0.3, 1] as const

/**
 * Questions open on a weighted spring. The marker is a drum mark: a ring
 * whose cross turns a quarter and loses an arm as the answer opens.
 */
export function Accordion({ items, tone = 'light' }: { items: Faq[]; tone?: 'light' | 'dark' }) {
  const [open, setOpen] = useState<number | null>(0)
  const id = useId()
  const rule = tone === 'light' ? 'border-ink/15' : 'border-mist/15'
  return (
    <ul className={`border-b ${rule}`}>
      {items.map((f, i) => {
        const on = open === i
        return (
          <li key={f.q} className={`border-t ${rule}`}>
            <h3>
              <button
                type="button"
                id={`${id}-q${i}`}
                aria-expanded={on}
                aria-controls={`${id}-a${i}`}
                onClick={() => setOpen(on ? null : i)}
                className="group flex w-full items-center justify-between gap-6 py-7 text-left"
              >
                <span className={`t-title transition-transform duration-700 ease-[var(--ease-settle)] group-hover:translate-x-2 ${on ? '' : 'opacity-85'}`}>
                  {f.q}
                </span>
                <span
                  aria-hidden
                  className="relative grid size-11 shrink-0 place-items-center rounded-full border border-current/25 transition-colors duration-500 group-hover:border-forest"
                >
                  <span className={`absolute h-px w-3.5 bg-current transition-transform duration-700 ease-[var(--ease-settle)] ${on ? 'rotate-180' : ''}`} />
                  <span
                    className={`absolute h-3.5 w-px bg-current transition-transform duration-700 ease-[var(--ease-settle)] ${on ? 'rotate-90 scale-y-0' : ''}`}
                  />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {on && (
                <motion.div
                  id={`${id}-a${i}`}
                  role="region"
                  aria-labelledby={`${id}-q${i}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1, transition: { height: { duration: 0.8, ease: settle }, opacity: { duration: 0.6, delay: 0.15 } } }}
                  exit={{ height: 0, opacity: 0, transition: { height: { duration: 0.5, ease: [0.65, 0, 0.35, 1] }, opacity: { duration: 0.2 } } }}
                  onAnimationComplete={() => ScrollTrigger.refresh()}
                  className="overflow-hidden"
                >
                  <p className="max-w-[56ch] pb-8 pr-14 opacity-80">{f.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        )
      })}
    </ul>
  )
}

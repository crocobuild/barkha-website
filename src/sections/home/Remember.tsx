import { useRef } from 'react'
import { gsap, ScrollTrigger, useGSAP } from '@/motion/gsap'
import { onStrike } from '@/motion/clock'
import { Reveal } from '@/motion/Reveal'
import { Button } from '@/components/Button'
import { TreeBackdrop } from '@/components/TreeBackdrop'
import { site, wa, discoveryCallMessage } from '@/content/site'
import { useReducedMotion } from '@/hooks/useReducedMotion'

/**
 * Chapter VIII — Ready to Remember Who You Are?
 * The drummer, in silhouette. Rings travel outward from behind the words
 * on every strike of the site's drum — the invitation keeps time.
 */
export function Remember() {
  const root = useRef<HTMLElement>(null)
  const reduced = useReducedMotion()

  useGSAP(
    () => {
      if (reduced) return
      const rings = gsap.utils.toArray<HTMLElement>('[data-ring]')
      let n = 0
      let inView = false
      ScrollTrigger.create({ trigger: root.current, start: 'top bottom', end: 'bottom top', onToggle: (s) => (inView = s.isActive) })
      const off = onStrike(() => {
        if (!inView) return
        const r = rings[n++ % rings.length]
        gsap.fromTo(r, { scale: 0.25, opacity: 0.7 }, { scale: 2.6, opacity: 0, duration: 4.6, ease: 'settle' })
      })
      return off
    },
    { scope: root, dependencies: [reduced] },
  )

  return (
    <section ref={root} data-theme="dark" className="relative isolate overflow-hidden bg-deep py-32 text-paper lg:py-48">
      <TreeBackdrop />
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-[42%] -z-10 size-[min(90vw,46rem)] -translate-x-1/2 -translate-y-1/2">
        {[0, 1, 2].map((i) => (
          <span key={i} data-ring className="absolute inset-0 rounded-full border border-mist/40 opacity-0" />
        ))}
      </div>

      <div className="wrap text-center">
        <Reveal as="h2" className="t-display-xl mx-auto mt-10 max-w-[12ch]">
          Ready to <em>Remember</em> Who You Are?
        </Reveal>
        <Reveal as="p" mode="words" className="t-lead mx-auto mt-12 max-w-[34ch] text-mist/85">
          Here’s the thing about healing journeys — they don’t require you to be ready. They just require you to begin.
        </Reveal>
        <p className="mx-auto mt-6 max-w-[46ch] text-mist/60">
          Whether you’re curious about one session or ready for deeper work, there’s no wrong way to start.
        </p>

        <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href={wa(discoveryCallMessage)} variant="warm">
            Book a free 20-min Discovery Call
          </Button>
          <Button href={`mailto:${site.email}`} variant="ghost" tone="dark">
            Write to me
          </Button>
        </div>

        <figure className="mx-auto mt-28 max-w-2xl">
          <blockquote className="font-serif text-xl font-light italic leading-snug text-mist/80 md:text-2xl">
            ‘I see you. I’ve been you. And I’m here when you’re ready to meet yourself again.’
          </blockquote>
        </figure>
      </div>
    </section>
  )
}

import { useRef } from 'react'
import { gsap, useGSAP } from '@/motion/gsap'
import { TLink } from '@/motion/PageTransition'
import { useLenis, scrollToTarget } from '@/motion/SmoothScroll'
import { nav, site, wa } from '@/content/site'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { Bee } from './Bee'

/**
 * The closing. Her name rises letter by letter out of the bottom edge as
 * the footer arrives, like something surfacing from water.
 */
export function Footer() {
  const root = useRef<HTMLElement>(null)
  const lenis = useLenis()
  const reduced = useReducedMotion()

  useGSAP(
    () => {
      if (reduced) return
      const letters = root.current?.querySelectorAll('[data-letter]')
      if (!letters?.length) return
      gsap.from(letters, {
        yPercent: 100,
        duration: 1.6,
        ease: 'settle',
        stagger: { each: 0.045, from: 'center' },
        scrollTrigger: { trigger: root.current, start: 'top 75%', once: true },
      })
      gsap.from('[data-col]', {
        opacity: 0,
        y: 24,
        duration: 1.1,
        stagger: 0.08,
        scrollTrigger: { trigger: root.current, start: 'top 85%', once: true },
      })
    },
    { scope: root, dependencies: [reduced] },
  )

  const word = 'Barkha Punjabi'

  return (
    <footer ref={root} data-theme="dark" className="relative overflow-hidden bg-deep pt-24 text-paper lg:pt-32">
      <div className="wrap grid grid-cols-2 gap-x-6 gap-y-12 text-[1.15rem] md:grid-cols-4 lg:text-[1.25rem]">
        <div data-col>
          <p className="t-label mb-5 text-[1.05rem] text-paper/60">Visit</p>
          <ul className="space-y-2">
            {site.locations.map((l) => (
              <li key={l}>{l}</li>
            ))}
            <li className="text-paper/70">& online, anywhere</li>
          </ul>
        </div>
        <div data-col>
          <p className="t-label mb-5 text-[1.05rem] text-paper/60">Hours</p>
          <p>{site.hours.days}</p>
          <p className="text-paper/70">{site.hours.note}</p>
        </div>
        <div data-col>
          <p className="t-label mb-5 text-[1.05rem] text-paper/60">Connect</p>
          <ul className="space-y-2">
            <li>
              <a className="link-draw" href={wa()} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </li>
            <li>
              <a className="link-draw" href={`mailto:${site.email}`}>
                Email
              </a>
            </li>
            <li>
              <a className="link-draw" href={site.instagram.url} target="_blank" rel="noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a className="link-draw" href={site.medium} target="_blank" rel="noreferrer">
                Medium
              </a>
            </li>
          </ul>
        </div>
        <div data-col>
          <p className="t-label mb-5 text-[1.05rem] text-paper/60">Wander</p>
          <ul className="space-y-2">
            {nav.map((n) => (
              <li key={n.to}>
                <TLink to={n.to} label={n.label} className="link-draw">
                  {n.label}
                </TLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="wrap mt-20 flex flex-col gap-6 border-t border-paper/10 pt-8 text-paper/75 md:flex-row md:items-end md:justify-between">
        <p data-col className="max-w-md font-serif text-xl italic leading-snug text-paper/85 md:text-2xl">
          ‘Our healing space is built on respect, confidentiality, and consent.’
        </p>
        <button type="button" onClick={() => scrollToTarget(lenis, 0)} className="t-label flex items-center gap-3 self-start text-[1.05rem] md:self-auto">
          Back to the top
          <span className="grid size-11 place-items-center rounded-full border border-paper/35">↑</span>
        </button>
      </div>

      <p
        aria-label={word}
        className="mt-10 select-none whitespace-nowrap text-center font-serif font-light leading-[1] tracking-[-0.045em] text-mist"
        style={{ fontSize: 'clamp(4rem, 15.4vw, 22rem)' }}
      >
        {[...word].map((ch, i) => (
          <span key={i} aria-hidden className="-mx-[0.02em] inline-block overflow-hidden px-[0.02em] pb-[0.06em] pt-[0.08em] align-bottom">
            <span data-letter className={`inline-block ${i > 6 ? 'italic' : ''}`}>
              {ch === ' ' ? ' ' : ch}
            </span>
          </span>
        ))}
      </p>

      <div className="wrap flex flex-wrap items-center justify-between gap-4 border-t border-paper/10 py-7 text-[1rem] text-paper/65">
        <span>© {new Date().getFullYear()} Barkha Punjabi — All rights reserved.</span>
        <a href={site.instagram.url} target="_blank" rel="noreferrer" className="group flex items-center gap-2 transition-colors hover:text-firelight">
          <Bee className="size-6 transition-transform duration-700 ease-[var(--ease-settle)] group-hover:-translate-y-1 group-hover:rotate-[-8deg]" />
          <span className="hidden sm:inline">{site.instagram.handle}</span>
        </a>
      </div>
    </footer>
  )
}

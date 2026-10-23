import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router'
import { gsap, useGSAP } from '@/motion/gsap'
import { TLink } from '@/motion/PageTransition'
import { useLenis } from '@/motion/SmoothScroll'
import { Magnetic } from '@/motion/Magnetic'
import { nav, site, wa, discoveryCallMessage } from '@/content/site'
import { Medallion } from './Medallion'

/**
 * Reads the theme of whatever section sits beneath the bar
 * ([data-theme="dark"] → light text), tucks away while reading
 * downward and returns the moment you scroll back up.
 */
export function Nav() {
  const bar = useRef<HTMLElement>(null)
  const sheet = useRef<HTMLDivElement>(null)
  const [dark, setDark] = useState(true)
  const [open, setOpen] = useState(false)
  const lenis = useLenis()
  const { pathname } = useLocation()

  useEffect(() => {
    let hidden = false
    let lastY = window.scrollY
    let raf = 0
    const check = () => {
      raf = 0
      const y = window.scrollY
      const probe = document.elementsFromPoint(window.innerWidth / 2, 36).find((el) => el.closest('[data-theme]') && !bar.current?.contains(el))
      setDark(probe?.closest('[data-theme]')?.getAttribute('data-theme') === 'dark')
      const goingDown = y > lastY + 2
      const goingUp = y < lastY - 2
      if (goingDown && y > 240 && !hidden) {
        hidden = true
        gsap.to(bar.current, { yPercent: -110, duration: 0.7, ease: 'release' })
      } else if ((goingUp || y < 240) && hidden) {
        hidden = false
        gsap.to(bar.current, { yPercent: 0, duration: 0.9, ease: 'settle' })
      }
      lastY = y
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(check)
    }
    check()
    window.addEventListener('scroll', onScroll, { passive: true })
    const t = setTimeout(check, 1600) // after route transitions settle
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
      clearTimeout(t)
    }
  }, [pathname])

  useEffect(() => setOpen(false), [pathname])

  useGSAP(
    () => {
      const s = sheet.current
      if (!s) return
      if (open) {
        lenis?.stop()
        gsap
          .timeline()
          .set(s, { visibility: 'visible' })
          .fromTo(
            s,
            { clipPath: 'circle(0% at calc(100% - 2.5rem) 2.25rem)' },
            { clipPath: 'circle(150% at calc(100% - 2.5rem) 2.25rem)', duration: 1.1, ease: 'breath' },
          )
          .from(s.querySelectorAll('[data-item]'), { yPercent: 110, rotate: 4, duration: 1.1, stagger: 0.06, ease: 'settle' }, 0.3)
          .from(s.querySelectorAll('[data-fade]'), { opacity: 0, y: 12, duration: 0.8, stagger: 0.05 }, 0.6)
      } else if (s.style.visibility === 'visible') {
        lenis?.start()
        gsap.timeline().to(s, { clipPath: 'circle(0% at calc(100% - 2.5rem) 2.25rem)', duration: 0.7, ease: 'release' }).set(s, { visibility: 'hidden' })
      }
    },
    { dependencies: [open] },
  )

  const tone = dark && !open ? 'text-paper' : 'text-ink'

  return (
    <>
      <header ref={bar} className={`fixed inset-x-0 top-0 z-[60] transition-colors duration-700 ${open ? 'text-paper' : tone}`}>
        <div className="wrap flex h-[var(--nav-h)] items-center justify-between">
          <TLink to="/" label="Home" className="group flex items-baseline gap-2">
            <span className="font-serif text-[1.5rem] leading-none tracking-[-0.02em]">Barkha</span>
            <span className="font-serif text-[1.5rem] italic leading-none tracking-[-0.02em] opacity-80 transition-opacity group-hover:opacity-100">
              Punjabi
            </span>
          </TLink>

          <nav aria-label="Primary" className="hidden items-center gap-9 lg:flex">
            {nav.slice(1, 4).map((n) => {
              const active = pathname.startsWith(n.to)
              return (
                <TLink key={n.to} to={n.to} label={n.label} className="group relative flex items-baseline gap-1.5 text-[1rem]">
                  <span className={`link-draw ${active ? 'bg-[length:100%_1px]' : ''}`}>{n.label}</span>
                </TLink>
              )
            })}
          </nav>

          <div className="flex items-center gap-3">
            <span className="hidden lg:inline-block">
              <Magnetic strength={0.25}>
                <TLink
                  to="/begin"
                  label="Begin"
                  className="inline-flex h-11 items-center gap-2.5 rounded-full border border-current/25 px-5 text-[0.95rem] transition-colors duration-500 hover:border-forest hover:bg-forest hover:text-paper"
                >
                  <span className="relative flex size-2">
                    <span className="beat-ring absolute inset-0 rounded-full bg-firelight" />
                    <span className="relative size-2 rounded-full bg-firelight" />
                  </span>
                  Book a session
                </TLink>
              </Magnetic>
            </span>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="menu-sheet"
              className="relative flex h-11 items-center gap-3 rounded-full pl-4 pr-1 lg:hidden"
            >
              <span className="t-label">{open ? 'Close' : 'Menu'}</span>
              <span className="relative grid size-9 place-items-center rounded-full border border-current/30">
                <span className={`absolute h-px w-3.5 bg-current transition-transform duration-500 ${open ? 'rotate-45' : '-translate-y-[3px]'}`} />
                <span className={`absolute h-px w-3.5 bg-current transition-transform duration-500 ${open ? '-rotate-45' : 'translate-y-[3px]'}`} />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div ref={sheet} id="menu-sheet" className="invisible fixed inset-0 z-[55] flex flex-col overflow-hidden bg-deep text-paper lg:hidden" data-theme="dark">
        <div className="pointer-events-none absolute -bottom-[25vw] -right-[30vw] w-[110vw] text-mist/[0.07]">
          {open && <Medallion name="tuesday-meditations" draw="mount" speed={0.6} />}
        </div>
        <nav aria-label="Menu" className="wrap relative mt-[calc(var(--nav-h)+6vh)] flex flex-col gap-1">
          {nav.map((n) => (
            <div key={n.to} className="overflow-hidden">
              <TLink data-item to={n.to} label={n.label} className="flex items-baseline gap-4 py-1">
                <span className="t-display-l">{n.label}</span>
              </TLink>
            </div>
          ))}
        </nav>
        <div className="wrap relative mt-auto grid gap-6 pb-10 text-[1.05rem]">
          <a data-fade href={wa(discoveryCallMessage)} className="inline-flex h-14 items-center justify-center rounded-full bg-firelight text-deep">
            Book a free Discovery Call
          </a>
          <div data-fade className="flex flex-wrap justify-between gap-4 text-paper/70">
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={site.instagram.url} target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href={site.medium} target="_blank" rel="noreferrer">
              Medium
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

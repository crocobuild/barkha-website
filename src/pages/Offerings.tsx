import { useRef, useState } from 'react'
import { gsap, useGSAP } from '@/motion/gsap'
import { TLink } from '@/motion/PageTransition'
import { offerings } from '@/content/offerings'
import { Seo } from '@/components/Seo'
import { PageHeader } from '@/components/PageHeader'
import { Medallion } from '@/components/Medallion'
import { Picture } from '@/components/Picture'
import { FINE_POINTER } from '@/hooks/useMedia'

/**
 * The index of offerings. Each row carries its medallion; on hover an arch
 * of photography travels with the pointer, and changing rows wipes the
 * next image up through it like turning a page in water.
 */
export default function Offerings() {
  const root = useRef<HTMLDivElement>(null)
  const preview = useRef<HTMLDivElement>(null)
  const [hover, setHover] = useState<number | null>(null)

  useGSAP(
    () => {
      gsap.from('[data-row]', { opacity: 0, y: 50, duration: 1.2, stagger: 0.06, delay: 0.4 })
      const p = preview.current
      if (!p || !matchMedia(FINE_POINTER).matches) return
      const x = gsap.quickTo(p, 'x', { duration: 0.9, ease: 'settle' })
      const y = gsap.quickTo(p, 'y', { duration: 0.9, ease: 'settle' })
      const move = (e: PointerEvent) => {
        x(e.clientX)
        y(e.clientY)
      }
      window.addEventListener('pointermove', move, { passive: true })
      return () => window.removeEventListener('pointermove', move)
    },
    { scope: root },
  )

  return (
    <div ref={root}>
      <Seo
        title="Offerings"
        path="/offerings"
        description="Tuesday meditations, inner child and womb healing, Akashic Records, learning shamanism, energy healing, healing for pets, one-on-one sessions and coaching with shamanic healing."
      />
      <PageHeader
        label="How I can help"
        title={
          <>
            Offerings for the <em>whole</em> of you
          </>
        }
        lead="Some journeys are gifted freely, because magic should be shared, while deeper work awaits those ready to dive in."
      />

      <section data-theme="light" className="bg-paper pb-32 lg:pb-44">
        <ul className="wrap" onPointerLeave={() => setHover(null)}>
          {offerings.map((o, i) => (
            <li key={o.slug} data-row onPointerEnter={() => setHover(i)} className="border-t border-ink/15 last:border-b">
              <TLink
                to={`/offerings/${o.slug}`}
                label={o.name}
                data-cursor="Explore"
                className={`group grid grid-cols-[4.5rem_1fr] items-center gap-5 py-7 transition-opacity duration-700 md:grid-cols-[6rem_1fr_auto] md:gap-10 md:py-9 ${
                  hover !== null && hover !== i ? 'opacity-35' : ''
                }`}
              >
                <span className="block text-mist transition-transform duration-[900ms] ease-[var(--ease-settle)] group-hover:rotate-[24deg] group-hover:scale-110">
                  <Medallion name={o.medallion} draw="none" disc />
                </span>
                <span>
                  <span className="t-label block text-forest">{o.kicker}</span>
                  <span className="t-display-m mt-2 block transition-transform duration-[900ms] ease-[var(--ease-settle)] md:group-hover:translate-x-4">
                    {o.name}
                    {o.subtitle && (
                      <>
                        {o.inline ? ' ' : ': '}
                        <em>{o.subtitle}</em>
                      </>
                    )}
                  </span>
                </span>
                <span className="t-label hidden text-right text-ink/55 md:block">{o.format}</span>
              </TLink>
            </li>
          ))}
        </ul>
      </section>

      <div ref={preview} aria-hidden className="pointer-events-none fixed left-0 top-0 z-40 hidden md:block">
        <div
          className={`-ml-36 -mt-48 h-96 w-72 overflow-hidden rounded-t-full transition-[opacity,scale] duration-700 ease-[var(--ease-settle)] ${
            hover === null ? 'scale-75 opacity-0' : 'scale-100 opacity-100'
          }`}
        >
          {offerings.map((o, i) => (
            <div
              key={o.slug}
              className="absolute inset-0 transition-[clip-path] duration-[900ms] ease-[var(--ease-settle)]"
              style={{
                clipPath: hover === i ? 'inset(0% 0% 0% 0%)' : hover !== null && i < hover ? 'inset(0% 0% 100% 0%)' : 'inset(100% 0% 0% 0%)',
                zIndex: hover === i ? 2 : 1,
              }}
            >
              {o.photo ? (
                <Picture name={o.photo} alt="" sizes="18rem" priority className="size-full" />
              ) : (
                <div className="grid size-full place-items-center bg-forest p-8 text-mist">
                  <Medallion name={o.medallion} draw="none" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

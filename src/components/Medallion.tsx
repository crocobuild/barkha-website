import { useEffect, useRef, useState } from 'react'
import { gsap, useGSAP } from '@/motion/gsap'
import type { MedallionName } from '@/content/assets.gen'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const loaders = import.meta.glob<{ default: string[] }>('../content/medallions/*.ts')
const cache = new Map<string, string[]>()

function useMedallionPaths(name: MedallionName) {
  const [paths, setPaths] = useState<string[] | null>(() => cache.get(name) ?? null)
  useEffect(() => {
    if (cache.has(name)) return setPaths(cache.get(name)!)
    let live = true
    loaders[`../content/medallions/${name}.ts`]?.().then((m) => {
      cache.set(name, m.default)
      if (live) setPaths(m.default)
    })
    return () => {
      live = false
    }
  }, [name])
  return paths
}

type Props = {
  name: MedallionName
  /** 'view' draws when scrolled into view; 'mount' draws immediately; 'none' shows it finished. */
  draw?: 'view' | 'mount' | 'none'
  /** Show the taupe disc behind the line-work (her original artwork's ground). */
  disc?: boolean
  className?: string
  title?: string
  speed?: number
}

/**
 * Barkha's line-art medallions, traced to vector. They draw themselves in
 * the order a hand would: the outer ring first, then inward, each stroke
 * pulled like thread; once drawn, the true line weight inks in.
 */
export function Medallion({ name, draw = 'view', disc = false, className = '', title, speed = 1 }: Props) {
  const paths = useMedallionPaths(name)
  const ref = useRef<SVGSVGElement>(null)
  const reduced = useReducedMotion()

  useGSAP(
    () => {
      const svg = ref.current
      if (!svg || !paths || reduced || draw === 'none') return
      const strokes = svg.querySelectorAll<SVGPathElement>('[data-stroke]')
      const ink = svg.querySelector('[data-ink]')
      const ground = svg.querySelector('[data-disc]')
      const tl = gsap.timeline({
        scrollTrigger: draw === 'view' ? { trigger: svg, start: 'top 85%', once: true } : undefined,
      })
      tl.set(ink, { opacity: 0 })
      if (ground) tl.from(ground, { scale: 0.86, opacity: 0, transformOrigin: '50% 50%', duration: 1.4, ease: 'settle' }, 0)
      tl.fromTo(
        strokes,
        { drawSVG: '0% 0%', opacity: 1 },
        { drawSVG: '0% 100%', duration: 1.6 / speed, ease: 'breath', stagger: { amount: 1.5 / speed, from: 'start' } },
        0.1,
      )
        .to(ink, { opacity: 1, duration: 1.1, ease: 'settle' }, '-=0.7')
        .to(strokes, { opacity: 0, duration: 0.8 }, '<0.2')
    },
    { scope: ref, dependencies: [paths, draw, reduced, name], revertOnUpdate: true },
  )

  return (
    <svg ref={ref} viewBox="0 0 1440 1440" className={className} role={title ? 'img' : undefined} aria-label={title} aria-hidden={title ? undefined : true}>
      {disc && <circle data-disc cx="720" cy="720" r="720" className="fill-forest" />}
      {paths && (
        <>
          <g data-ink fill="currentColor" fillRule="evenodd">
            <path d={paths.join(' ')} />
          </g>
          {draw !== 'none' && !reduced && (
            <g fill="none" stroke="currentColor" strokeWidth={5} strokeLinecap="round">
              {paths.map((d, i) => (
                <path key={i} data-stroke d={d} opacity={0} />
              ))}
            </g>
          )}
        </>
      )}
    </svg>
  )
}

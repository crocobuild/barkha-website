import { offerings } from '@/content/offerings'
import { TLink } from '@/motion/PageTransition'
import { Reveal } from '@/motion/Reveal'
import { Label } from '@/components/Label'
import { Medallion } from '@/components/Medallion'

/**
 * How I Can Help — all nine offerings visible at a glance, no interaction
 * required. Each medallion draws itself as it comes into view; hovering a
 * card turns its medallion a few degrees, like a wheel nudged by hand.
 */
export function HowICanHelp() {
  return (
    <section data-theme="light" className="bg-paper py-24 lg:py-32">
      <div className="wrap">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Label className="text-forest">How I can help</Label>
            <Reveal as="h2" className="t-display-l mt-6">
              Nine ways to <em>come home</em> to yourself
            </Reveal>
          </div>
          <p className="text-ink/65 lg:col-span-4 lg:col-start-9">
            Some journeys are gifted freely, because magic should be shared, while deeper work awaits those ready to dive in.
          </p>
        </div>

        <ul className="mt-14 grid gap-3 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {offerings.map((o) => (
            <li key={o.slug}>
              <TLink
                to={`/offerings/${o.slug}`}
                label={o.name}
                data-cursor="Explore"
                className="group flex h-full flex-col rounded-[1.75rem] border border-stone/70 bg-paper p-7 transition-[background-color,border-color] duration-500 hover:border-forest/30 hover:bg-mist lg:p-8"
              >
                <div className="flex items-start justify-between">
                  <span className="w-24 text-forest transition-transform duration-[1200ms] ease-[var(--ease-settle)] group-hover:rotate-[20deg]">
                    <Medallion name={o.medallion} title={o.name} speed={1.4} />
                  </span>
                </div>
                <h3 className="t-title mt-8">
                  {o.name}
                  {o.subtitle && (
                    <>
                      {o.inline ? ' ' : <br />}
                      <em>{o.subtitle}</em>
                    </>
                  )}
                </h3>
                <p className="mt-3 text-[1.02rem] text-ink/65">{o.kicker}</p>
                <span className="mt-auto pt-8 text-[0.98rem] text-forest underline decoration-forest/30 underline-offset-4 transition-colors group-hover:decoration-forest">
                  See details
                </span>
              </TLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

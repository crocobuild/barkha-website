import { testimonials } from '@/content/testimonials'
import { Label } from '@/components/Label'

const fmt = new Intl.DateTimeFormat('en-IN', { month: 'long', year: 'numeric' })

function Stars({ n, className = '' }: { n: number; className?: string }) {
  return (
    <span role="img" aria-label={`${n} out of 5 stars`} className={`inline-flex gap-0.5 text-firelight ${className}`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} viewBox="0 0 20 20" className={`size-4 ${i < n ? '' : 'opacity-25'}`} fill="currentColor" aria-hidden>
          <path d="M10 1.6 12.6 7l5.9.6-4.4 4 1.3 5.8L10 14.5l-5.4 2.9 1.3-5.8-4.4-4L7.4 7z" />
        </svg>
      ))}
    </span>
  )
}

/**
 * What Others Say — the six reviews from her original site, in full,
 * with their faces. Masonry so each voice keeps its natural length.
 */
export function Testimonials() {
  if (testimonials.length === 0) return null
  return (
    <section data-theme="light" className="bg-mist py-24 lg:py-32">
      <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <Label className="text-forest">What others say</Label>
            <h2 className="t-display-m mt-5">In their own words</h2>
            <div className="mt-8 flex items-center gap-3">
              <Stars n={5} />
              <span className="text-ink/60">Six reviews, all five stars</span>
            </div>
            <div className="mt-8 flex -space-x-3">
              {testimonials.map((t) => (
                <img
                  key={t.name}
                  src={t.photo}
                  alt=""
                  width={44}
                  height={44}
                  loading="lazy"
                  className="size-11 rounded-full border-2 border-mist object-cover"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="gap-5 sm:columns-2 lg:col-span-8">
          {testimonials.map((t) => (
            <figure key={t.name} className="mb-5 break-inside-avoid rounded-[1.25rem] bg-paper p-7 lg:p-8">
              <Stars n={t.rating} />
              <blockquote className="mt-5 space-y-3 text-[1.02rem] leading-relaxed text-ink/80">
                {t.quote.map((para) =>
                  para === para.toUpperCase() ? (
                    <p key={para} className="font-serif text-2xl leading-tight text-forest">
                      {para.charAt(0) + para.slice(1).toLowerCase()}
                    </p>
                  ) : (
                    <p key={para}>{para}</p>
                  ),
                )}
              </blockquote>
              <figcaption className="mt-7 flex items-center gap-3 border-t border-ink/10 pt-5">
                <img src={t.photo} alt={t.name} width={48} height={48} loading="lazy" className="size-12 rounded-full object-cover" />
                <span>
                  <span className="block font-serif text-lg leading-tight">{t.name}</span>
                  <span className="t-small text-ink/50">{fmt.format(new Date(t.date))}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

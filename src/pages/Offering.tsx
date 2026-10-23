import { useParams } from 'react-router'
import { offerings, offeringTitle, waForOffering } from '@/content/offerings'
import { archetypes } from '@/content/archetypes'
import { faqs } from '@/content/faq'
import { wa } from '@/content/site'
import { Seo } from '@/components/Seo'
import { Label } from '@/components/Label'
import { Medallion } from '@/components/Medallion'
import { Parallax } from '@/components/Parallax'
import { Picture } from '@/components/Picture'
import { Button } from '@/components/Button'
import { Accordion } from '@/components/Accordion'
import { Reveal } from '@/motion/Reveal'
import { TLink } from '@/motion/PageTransition'
import NotFound from './NotFound'

export default function Offering() {
  const { slug } = useParams()
  const index = offerings.findIndex((o) => o.slug === slug)
  if (index === -1) return <NotFound />
  const o = offerings[index]
  const next = offerings[(index + 1) % offerings.length]
  const walkers = archetypes.filter((a) => o.for.includes(a.name))

  return (
    <div key={o.slug}>
      <Seo title={offeringTitle(o)} path={`/offerings/${o.slug}`} description={`${o.kicker}. ${o.body}`} />

      <header data-theme="light" className="bg-paper pb-20 pt-[calc(var(--nav-h)+10vh)] lg:pb-28">
        <div className="wrap grid items-center gap-14 lg:grid-cols-12">
          <div className="order-2 lg:order-1 lg:col-span-7">
            <Label className="text-forest">{o.format}</Label>
            <Reveal as="h1" className="t-display-l mt-8" delay={0.2}>
              {o.name}
              {o.subtitle && (
                <>
                  {o.inline ? ' ' : <br />}
                  <em>{o.subtitle}</em>
                </>
              )}
            </Reveal>
            <Reveal as="p" mode="words" delay={0.6} className="t-lead mt-10 max-w-[30ch] text-ink/80">
              {o.kicker}
            </Reveal>
          </div>
          <div className="order-1 mx-auto w-[min(70vw,24rem)] text-mist lg:order-2 lg:col-span-5 lg:w-full lg:max-w-[30rem]">
            <Medallion name={o.medallion} draw="mount" disc speed={0.8} title={o.name} />
          </div>
        </div>
      </header>

      {o.photo && (
        <section data-theme="light" className="bg-paper">
          <div className="wrap">
            <Parallax amount={6} scale={1.1} className="aspect-[4/5] rounded-[2rem] md:aspect-[16/7]">
              <Picture name={o.photo} alt="" sizes="100vw" className="size-full" />
            </Parallax>
          </div>
        </section>
      )}

      <section data-theme="light" className="bg-paper py-28 lg:py-40">
        <div className="wrap grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal as="p" mode="words" className="t-display-m">
              {o.body}
            </Reveal>
          </div>
          <dl className="grid content-start gap-10 lg:col-span-4 lg:col-start-9">
            <div>
              <dt className="t-label text-forest">Format</dt>
              <dd className="mt-3 t-title">{o.format}</dd>
            </div>
            <div>
              <dt className="t-label text-forest">Where</dt>
              <dd className="mt-3">In person in Vashi, Navi Mumbai and Bandra — or online, wherever you are.</dd>
            </div>
            {walkers.length > 0 && (
              <div>
                <dt className="t-label text-forest">Often called to it</dt>
                <dd className="mt-4 space-y-3">
                  {walkers.map((a) => (
                    <p key={a.name}>
                      <span className="font-serif text-lg italic">{a.name}</span>
                      <span className="text-ink/70"> {a.line}</span>
                    </p>
                  ))}
                </dd>
              </div>
            )}
            <div className="flex flex-col items-start gap-4 pt-2">
              <Button href={wa(waForOffering(o))}>
                Ask about this on WhatsApp
              </Button>
            </div>
          </dl>
        </div>
      </section>

      <section data-theme="dark" className="bg-deep py-28 text-paper lg:py-40">
        <div className="wrap grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Label className="text-mist/60">Before you begin</Label>
            <h2 className="t-display-m mt-6">
              A few <em>gentle</em> answers
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <Accordion items={[faqs[0], faqs[1], faqs[4], faqs[3]]} tone="dark" />
          </div>
        </div>
      </section>

      <TLink to={`/offerings/${next.slug}`} label={next.name} data-theme="light" data-cursor="Next" className="group block bg-mist">
        <div className="wrap flex items-center justify-between gap-8 py-20 lg:py-28">
          <div>
            <p className="t-label text-forest">Next offering</p>
            <p className="t-display-l mt-5 transition-transform duration-[1000ms] ease-[var(--ease-settle)] group-hover:translate-x-4">
              {next.name} {next.subtitle && <em>{next.subtitle}</em>}
            </p>
          </div>
          <span className="hidden w-40 shrink-0 text-mist transition-transform duration-[1200ms] ease-[var(--ease-settle)] group-hover:rotate-45 md:block lg:w-56">
            <Medallion name={next.medallion} draw="none" disc />
          </span>
        </div>
      </TLink>
    </div>
  )
}

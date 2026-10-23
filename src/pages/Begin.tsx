import { site, wa, discoveryCallMessage } from '@/content/site'
import { faqs } from '@/content/faq'
import { Seo } from '@/components/Seo'
import { PageHeader } from '@/components/PageHeader'
import { Label } from '@/components/Label'
import { Button } from '@/components/Button'
import { Accordion } from '@/components/Accordion'
import { Medallion } from '@/components/Medallion'
import { Reveal } from '@/motion/Reveal'
import { Magnetic } from '@/motion/Magnetic'
import type { MedallionName } from '@/content/assets.gen'

const paths: { medallion: MedallionName; title: string; body: string; cta: string; message: string }[] = [
  {
    medallion: 'one-on-one',
    title: 'Start with a Discovery Call',
    body: 'Complimentary, 20 minutes. Together, we’ll explore what’s holding you back, uncover what you deeply desire, and craft a path forward — one step at a time.',
    cta: 'Book the free call',
    message: discoveryCallMessage,
  },
  {
    medallion: 'coaching',
    title: 'Discover Your Purpose',
    body: 'Are you struggling to find your passion and purpose in life? Let me help you uncover your unique strengths and values, and create a plan to live a fulfilling and purpose-driven life.',
    cta: 'Schedule now',
    message: "Hi Barkha, I'd like to schedule a session to discover my purpose.",
  },
  {
    medallion: 'learn-shamanism',
    title: 'Learn Shamanism',
    body: 'Join the Learn Shamanism series and develop your own healing practice.',
    cta: 'Book now',
    message: "Hi Barkha, I'd like to join the Learn Shamanism series.",
  },
]

export default function Begin() {
  return (
    <>
      <Seo
        title="Begin"
        path="/begin"
        description="Book a complimentary 20-minute Discovery Call with Barkha Punjabi on WhatsApp. In person in Vashi, Navi Mumbai and Bandra, or online."
      />
      <PageHeader
        label="Transform your life with Barkha Punjabi"
        title={
          <>
            Your journey back to yourself <em>starts here.</em>
          </>
        }
        lead="Feeling stuck, overwhelmed, or unsure of your path? You’re not alone — and you don’t have to figure it out by yourself."
      />

      <section data-theme="dark" className="bg-deep pb-28 text-paper lg:pb-40">
        <div className="wrap">
          <ul className="grid gap-4 lg:grid-cols-3">
            {paths.map((p, i) => (
              <li key={p.title}>
                <a
                  href={wa(p.message)}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="Begin"
                  className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-mist/12 p-8 transition-colors duration-700 hover:border-firelight/60 lg:p-10"
                >
                  <span className="w-24 text-mist transition-transform duration-[1200ms] ease-[var(--ease-settle)] group-hover:rotate-[30deg] group-hover:scale-110">
                    <Medallion name={p.medallion} draw="view" disc speed={1.4} />
                  </span>
                  {i === 0 ? <span className="t-label mt-10 text-firelight">Complimentary, 20 minutes</span> : <span className="mt-10" />}
                  <span className="t-title mt-3">{p.title}</span>
                  <span className="mt-4 text-mist/70">{p.body}</span>
                  <span className={`mt-auto inline-flex items-center gap-2 pt-10 text-[1.02rem] ${i === 0 ? 'text-firelight' : ''}`}>
                    <span className="link-draw">{p.cta} on WhatsApp</span> ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-28 grid gap-14 lg:grid-cols-12">
            <div className="space-y-6 text-mist/80 lg:col-span-6">
              <p className="t-lead text-mist">
                I help you release limiting beliefs, reconnect with your true self, and create a vision for a life that feels authentic and joyful.
              </p>
              <p>With compassion, clarity, and care, I’ll walk alongside you as you rediscover your strength, your purpose, and your freedom to thrive.</p>
              <Reveal as="p" mode="words" className="t-lead italic text-firelight">
                ‘Your journey back to yourself starts here. Let’s begin.’
              </Reveal>
            </div>

            <div className="lg:col-span-5 lg:col-start-8">
              <div className="rounded-[2rem] bg-mist p-8 text-ink lg:p-10">
                <Label className="text-forest">Ready to begin?</Label>
                <p className="mt-5 text-ink/80">
                  The need for healing can strike at any time, so feel free to reach out. We will respond during working hours and make room for your journey.
                </p>
                <div className="mt-8">
                  <Button href={wa(discoveryCallMessage)} variant="warm">
                    Message on WhatsApp
                  </Button>
                </div>
                <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-ink/15 pt-8 text-[1.02rem]">
                  <div>
                    <dt className="t-label text-forest">Write</dt>
                    <dd className="mt-2 break-words">
                      <a className="link-draw" href={`mailto:${site.email}`}>
                        {site.email}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="t-label text-forest">Call</dt>
                    <dd className="mt-2">
                      <a className="link-draw" href={`tel:${site.phone.replace(/\s/g, '')}`}>
                        {site.phone}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="t-label text-forest">Visit</dt>
                    <dd className="mt-2">{site.locations.join(', ')}</dd>
                  </div>
                  <div>
                    <dt className="t-label text-forest">Hours</dt>
                    <dd className="mt-2">
                      {site.hours.days}
                      <br />
                      <span className="text-ink/60">{site.hours.note}</span>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section data-theme="light" className="bg-paper py-28 lg:py-40">
        <div className="wrap text-center">
          <Reveal as="p" mode="words" className="t-display-m mx-auto max-w-[24ch]">
            Sometimes the bravest thing you can do is send a message that says “I don’t know what I need, but I know I need <em>something.</em>”
          </Reveal>
          <div className="mt-12 flex justify-center">
            <Magnetic>
              <a
                href={wa("Hi Barkha. I don't know what I need, but I know I need something.")}
                target="_blank"
                rel="noreferrer"
                className="t-label link-draw inline-block py-2 text-forest"
              >
                Send exactly that ↗
              </a>
            </Magnetic>
          </div>
        </div>
      </section>

      <section data-theme="light" className="bg-paper pb-28 lg:pb-40">
        <div className="wrap grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Label className="text-forest">Questions</Label>
            <h2 className="t-display-m mt-6">
              Frequently asked <em>questions</em>
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <Accordion items={faqs} />
          </div>
        </div>
      </section>
    </>
  )
}

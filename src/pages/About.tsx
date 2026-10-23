import { Seo } from '@/components/Seo'
import { PageHeader } from '@/components/PageHeader'
import { Parallax } from '@/components/Parallax'
import { Picture } from '@/components/Picture'
import { Label } from '@/components/Label'
import { Button } from '@/components/Button'
import { Medallion } from '@/components/Medallion'
import { Reveal } from '@/motion/Reveal'
import { wa, discoveryCallMessage } from '@/content/site'

export default function About() {
  return (
    <>
      <Seo
        title="About"
        path="/about"
        description="The Wounded Healer's Path — how shamanism found Barkha Punjabi, and why she helps people come home to themselves."
      />
      <PageHeader
        label="About Barkha Punjabi"
        title={
          <>
            The Wounded <em>Healer’s</em> Path
          </>
        }
      />

      <section data-theme="light" className="bg-paper pb-28 lg:pb-44">
        <div className="wrap grid gap-16 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <Parallax amount={6} className="aspect-[4/5] rounded-t-full">
                <Picture
                  name="barkha-portrait"
                  alt="Barkha Punjabi at home, holding her dog"
                  sizes="(min-width: 64rem) 40vw, 92vw"
                  priority
                  className="size-full"
                />
              </Parallax>
              <p className="t-label mt-5 flex justify-between text-forest">
                <span>Barkha Punjabi</span>
                <span>Vashi and Bandra</span>
              </p>
            </div>
          </div>

          <article className="text-[1.1rem] leading-[1.75] text-ink/85 lg:col-span-6 lg:col-start-7 lg:pt-8">
            <p className="t-lead text-ink first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-serif first-letter:text-[4.6em] first-letter:leading-[0.8] first-letter:text-forest">
              I used to live small. Smaller than my dreams, smaller than my fears, and definitely smaller than what my heart knew was possible.
            </p>
            <p className="mt-8">For years, I was the woman who asked ‘what if?’ instead of ‘why not?’</p>
            <p className="mt-6">
              I built walls from self-doubt and painted them with other people’s expectations. Until one day, I realized I wasn’t just hiding from failure, I
              was hiding from <em className="font-serif text-[1.1em]">life</em>.
            </p>

            <Reveal as="p" mode="words" className="t-display-m my-16 text-ink">
              That’s when everything <em>changed.</em>
            </Reveal>

            <p>
              Shamanism found me (or I found it, these things work mysteriously). What started as curiosity became my medicine. The drum became my compass, the
              journeys became my teachers, and slowly, the walls I’d built became doorways.
            </p>

            <figure className="my-16 grid grid-cols-5 items-end gap-4">
              <Parallax amount={8} className="col-span-3 aspect-[3/4] rounded-t-full">
                <Picture name="drum" alt="A hide frame drum with a soft beater" sizes="30vw" className="size-full" />
              </Parallax>
              <figcaption className="col-span-2 pb-2 font-serif text-lg italic leading-snug text-forest">“The drum became my compass.”</figcaption>
            </figure>

            <p>
              I believe healing isn’t just about fixing what hurts it’s about growing, thriving, and creating a life that excites your soul every single day.
            </p>
            <p className="mt-6">
              My mission is to help you come home to yourself, to reclaim your uniqueness, connect with your inner power, and live with joy, authenticity, and
              fulfillment.
            </p>
            <p className="mt-6">I walk alongside people from all walks of life those feeling stuck, seeking clarity, or ready for change.</p>
            <p className="t-lead mt-12 text-ink">
              Together, we uncover what’s always been within you: <em>the part of you that was never broken to begin with.</em>
            </p>
          </article>
        </div>
      </section>

      <section data-theme="dark" className="relative overflow-hidden bg-deep py-32 text-paper lg:py-48">
        <div aria-hidden className="pointer-events-none absolute -right-[18vw] top-1/2 w-[62vw] max-w-[60rem] -translate-y-1/2 text-mist/[0.06]">
          <Medallion name="one-on-one" speed={0.5} />
        </div>
        <div className="wrap relative">
          <Reveal as="blockquote" mode="words" className="t-display-l max-w-[18ch]">
            “Healing isn’t about fixing what’s broken; it’s about remembering what was <em>never broken</em> to begin with.”
          </Reveal>
        </div>
      </section>

      <section data-theme="light" className="bg-paper py-28 lg:py-40">
        <div className="wrap grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Label className="text-forest">How it works</Label>
            <h2 className="t-display-m mt-6">
              My <em>approach</em>
            </h2>
          </div>
          <div className="space-y-6 text-ink/85 lg:col-span-6 lg:col-start-7">
            <p className="t-lead text-ink">
              Traditional coaching focuses on guiding you to identify steps to move forward. My unique approach goes a step further, blending practical coaching
              strategies with the power of shamanic healing.
            </p>
            <p>This dual approach enables me to:</p>
            <ul className="divide-y divide-ink/15 border-y border-ink/15">
              {[
                'Clear energetic blocks, patterns, and fears that may be holding you back.',
                'Address underlying habits and behaviors that create self-doubt or stagnation.',
                'Empower you with the tools and confidence to move forward with purpose and momentum.',
              ].map((b) => (
                <li key={b} className="flex gap-6 py-5">
                  {b}
                </li>
              ))}
            </ul>
            <p>
              This holistic and transformative process not only creates faster results but also leaves you feeling deeply empowered and aligned with your goals.
              Together, we’ll turn challenges into opportunities and chart a path to success that feels authentic and fulfilling.
            </p>
          </div>
        </div>

        <div className="wrap mt-28 grid grid-cols-12 gap-4 lg:mt-40">
          <Parallax amount={10} className="col-span-7 aspect-[4/3] rounded-[2rem]">
            <Picture name="oracle-cards" alt="Animal spirit oracle cards — bear, wolf and bison — laid on a woven cloth" sizes="60vw" className="size-full" />
          </Parallax>
          <Parallax amount={14} className="col-span-5 mt-24 aspect-[3/4] rounded-t-full">
            <Picture name="outdoor-altar" alt="An outdoor altar with sage, feathers and crystals" sizes="40vw" className="size-full" />
          </Parallax>
        </div>
      </section>

      <section data-theme="dark" className="bg-deep py-28 text-center text-paper lg:py-40">
        <div className="wrap">
          <Label className="justify-center text-mist/60">Sacred Space Policy</Label>
          <p className="t-lead mx-auto mt-8 max-w-[40ch] italic text-mist/85">
            ‘Our healing space is built on respect, confidentiality, and consent. All sessions are conducted with the highest regard for your safety and
            sovereignty.’
          </p>
          <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href={wa(discoveryCallMessage)} variant="warm">
              Book a free Discovery Call
            </Button>
            <Button to="/offerings" label="Offerings" variant="ghost" tone="dark">
              See the offerings
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

import { Reveal } from '@/motion/Reveal'
import { Label } from '@/components/Label'
import { Picture } from '@/components/Picture'
import { Parallax } from '@/components/Parallax'
import { Button } from '@/components/Button'

/** The Wounded Healer's Path — her story, all of it readable at once. */
export function HealerPath() {
  return (
    <section data-theme="light" className="bg-mist py-24 lg:py-32">
      <div className="wrap grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-6">
          <Label className="text-forest">About Barkha</Label>
          <Reveal as="h2" className="t-display-l mt-6">
            The Wounded <em>Healer’s</em> Path
          </Reveal>

          <div className="mt-10 max-w-[52ch] space-y-5 text-[1.08rem] text-ink/80">
            <p>I used to live small. Smaller than my dreams, smaller than my fears, and definitely smaller than what my heart knew was possible.</p>
            <p>For years, I was the woman who asked ‘what if?’ instead of ‘why not?’</p>
            <p>
              I built walls from self-doubt and painted them with other people’s expectations. Until one day, I realized I wasn’t just hiding from failure, I
              was hiding from <em className="font-serif text-[1.08em]">life</em>.
            </p>
            <p className="t-lead pt-2 text-ink">That’s when everything changed.</p>
            <p>
              Shamanism found me (or I found it, these things work mysteriously). What started as curiosity became my medicine. The drum became my compass, the
              journeys became my teachers, and slowly, the walls I’d built became doorways.
            </p>
          </div>

          <div className="mt-10">
            <Button to="/about" label="About" variant="ghost">
              Read my story
            </Button>
          </div>
        </div>

        <div className="lg:col-span-5 lg:col-start-8">
          <Parallax amount={5} scale={1.08} className="aspect-[4/5] rounded-t-full">
            <Picture
              name="altar"
              alt="Barkha's altar: a frame drum painted with a wolf, oracle cards, sage and crystals"
              sizes="(min-width: 64rem) 40vw, 92vw"
              className="size-full"
            />
          </Parallax>
          <p className="t-label mt-4 text-ink/50">Her altar — drum, cards, sage</p>
        </div>
      </div>

      <div className="wrap mt-24 lg:mt-32">
        <Reveal as="blockquote" mode="words" className="t-display-m mx-auto max-w-[24ch] text-center text-ink">
          “Healing isn’t about fixing what’s broken; it’s about remembering what was <em>never broken</em> to begin with.”
        </Reveal>
      </div>
    </section>
  )
}

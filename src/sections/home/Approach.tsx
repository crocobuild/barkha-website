import { Label } from '@/components/Label'
import { Button } from '@/components/Button'
import { Reveal } from '@/motion/Reveal'
import { Picture } from '@/components/Picture'

const benefits = [
  'Clear energetic blocks, patterns, and fears that may be holding you back.',
  'Address underlying habits and behaviors that create self-doubt or stagnation.',
  'Empower you with the tools and confidence to move forward with purpose and momentum.',
]

/** My Approach — the two questions, side by side. */
export function Approach() {
  return (
    <section data-theme="light" className="bg-paper py-24 lg:py-32">
      <div className="wrap">
        <Label className="text-forest">How it works</Label>
        <Reveal as="h2" className="t-display-m mt-6 max-w-[20ch]">
          My <em>approach</em>
        </Reveal>

        <div className="mt-12 grid gap-3 md:grid-cols-2 lg:grid-cols-[1fr_0.8fr_1fr]">
          <div className="rounded-[1.75rem] border border-stone/70 p-8 lg:p-10">
            <p className="t-label text-ink/50">Traditional coaching asks</p>
            <p className="t-display-m mt-4">
              What’s <em>next?</em>
            </p>
            <p className="mt-6 text-ink/70">Traditional coaching focuses on guiding you to identify steps to move forward.</p>
          </div>
          <Picture
            name="bowls"
            alt="Singing bowls and a rattle resting on soft fur"
            sizes="(min-width: 64rem) 26vw, 92vw"
            className="order-last aspect-[4/3] rounded-[1.75rem] md:col-span-2 lg:order-none lg:col-span-1 lg:aspect-auto"
          />
          <div className="rounded-[1.75rem] bg-deep p-8 text-paper lg:p-10" data-theme="dark">
            <p className="t-label text-firelight">Shamanic healing asks</p>
            <p className="t-display-m mt-4">
              What’s <em>underneath?</em>
            </p>
            <p className="mt-6 text-paper/75">
              My unique approach goes a step further, blending practical coaching strategies with the power of shamanic healing.
            </p>
          </div>
        </div>

        <ol className="mt-12 grid gap-8 md:grid-cols-3">
          {benefits.map((b) => (
            <li key={b} className="border-t border-ink/12 pt-5">
              <p className="mt-2 text-ink/75">{b}</p>
            </li>
          ))}
        </ol>

        <div className="mt-14 grid gap-8 lg:grid-cols-12 lg:items-end">
          <p className="t-lead text-ink lg:col-span-8">
            This holistic and transformative process not only creates faster results but also leaves you feeling deeply <em>empowered</em> and aligned with your
            goals.
          </p>
          <div className="lg:col-span-3 lg:col-start-10 lg:justify-self-end">
            <Button to="/journal" label="Journal" variant="ghost">
              Read the journal
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

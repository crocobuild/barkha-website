import { Reveal } from '@/motion/Reveal'
import { Label } from '@/components/Label'

/** Her welcome, in her words. */
export function Hello() {
  return (
    <section id="hello" data-theme="light" className="border-t border-stone/60 bg-paper py-24 lg:py-32">
      <div className="wrap grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Label className="text-forest">Hello</Label>
          <Reveal as="h2" className="t-display-m mt-6">
            Hello, I’m <em>Barkha Punjabi</em>
          </Reveal>
        </div>
        <div className="space-y-6 lg:col-span-7 lg:col-start-6">
          <p className="t-lead text-ink">Some journeys don’t start with answers. They start with a quiet pause.</p>
          <p className="text-[1.1rem] text-ink/75">
            Mine began when the life I was living no longer felt like it was truly <em className="font-serif text-[1.08em]">mine</em>. If you’re here, maybe
            it’s your turn to come home to yourself with love, with kindness, with joy.
          </p>
        </div>
      </div>
    </section>
  )
}

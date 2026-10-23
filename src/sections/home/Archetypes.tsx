import { archetypes } from '@/content/archetypes'
import { Label } from '@/components/Label'
import { Reveal } from '@/motion/Reveal'
import { Picture } from '@/components/Picture'
import { Parallax } from '@/components/Parallax'

/** Who Walks This Path With Me — compact: eight short portraits in a grid. */
export function Archetypes() {
  return (
    <section data-theme="light" className="bg-mist py-24 lg:py-28">
      <div className="wrap">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-6">
            <Label className="text-forest">Who walks this path</Label>
            <Reveal as="h2" className="t-display-m mt-6">
              Who walks this path <em>with me</em>
            </Reveal>
          </div>
          <p className="text-ink/65 lg:col-span-4 lg:col-start-9">
            I walk alongside people from all walks of life — those feeling stuck, seeking clarity, or ready for change.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-12">
          <Parallax amount={6} scale={1.1} className="aspect-[4/5] rounded-t-full lg:col-span-4">
            <Picture
              name="drummer"
              alt="A drummer lifting a frame drum against a bright sky"
              sizes="(min-width: 64rem) 32vw, 92vw"
              className="size-full"
              imgClassName="object-[50%_30%]"
            />
          </Parallax>
          <ul className="grid grid-cols-1 content-start gap-x-8 sm:grid-cols-2 lg:col-span-8">
            {archetypes.map((a) => (
              <li key={a.name} className="border-t border-ink/12 py-6">
                <h3 className="font-serif text-[1.35rem] leading-tight">{a.name}</h3>
                <p className="mt-2 text-[1.02rem] text-ink/65">{a.line}</p>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-12 max-w-[60ch] border-l-2 border-forest pl-5 font-serif text-lg italic text-ink/80">
          <span className="t-label mb-2 block not-italic text-forest">Sacred Space Policy</span>
          ‘Our healing space is built on respect, confidentiality, and consent. All sessions are conducted with the highest regard for your safety and
          sovereignty.’
        </p>
      </div>
    </section>
  )
}

import { Picture } from '@/components/Picture'
import type { PhotoName } from '@/content/assets.gen'

type Element = { name: string; photo: PhotoName; alt: string; caption: string; glyph: 'earth' | 'water' | 'fire' | 'air' | 'spirit' }

const elements: Element[] = [
  {
    name: 'Earth',
    glyph: 'earth',
    photo: 'outdoor-altar',
    alt: 'An altar of sage, feathers and crystals laid out in a meadow',
    caption: 'Sage, stone and feather, laid out under open sky.',
  },
  {
    name: 'Water',
    glyph: 'water',
    photo: 'abalone',
    alt: 'A hand holding an iridescent abalone shell beside a singing bowl',
    caption: 'The abalone shell, from the sea, cradles the smoke.',
  },
  {
    name: 'Fire',
    glyph: 'fire',
    photo: 'bell',
    alt: 'Smoke curling from sage bundles beside a brass bell',
    caption: 'Sage set alight, and a bell to call the room to quiet.',
  },
  {
    name: 'Air',
    glyph: 'air',
    photo: 'drummer',
    alt: 'A drummer lifting a frame drum against a bright sky',
    caption: 'The drum’s voice, carried out into open air.',
  },
  {
    name: 'Spirit',
    glyph: 'spirit',
    photo: 'oracle-cards',
    alt: 'Animal spirit oracle cards — bear, wolf and bison',
    caption: 'Bear, wolf, bison: the animal guides of a journey.',
  },
]

/** The classical alchemical signs for the four elements, and a circle for spirit. */
function Glyph({ kind }: { kind: Element['glyph'] }) {
  const up = 'M12 3 21 19H3Z'
  const down = 'M12 21 3 5h18Z'
  return (
    <svg viewBox="0 0 24 24" className="size-7" fill="none" stroke="currentColor" strokeWidth={1.2} aria-hidden>
      {kind === 'fire' && <path d={up} />}
      {kind === 'air' && (
        <>
          <path d={up} />
          <path d="M6.2 13.4h11.6" />
        </>
      )}
      {kind === 'water' && <path d={down} />}
      {kind === 'earth' && (
        <>
          <path d={down} />
          <path d="M6.2 10.6h11.6" />
        </>
      )}
      {kind === 'spirit' && (
        <>
          <circle cx="12" cy="12" r="8.5" />
          <circle cx="12" cy="12" r="1.4" fill="currentColor" />
        </>
      )}
    </svg>
  )
}

/**
 * The elements, in duet with the words around them: five equal arches of
 * her practice's tools, each with its sign, name and what it holds.
 * Even and still — the photographs do the work.
 */
export function Elements() {
  return (
    <section data-theme="dark" className="bg-deep py-20 text-paper lg:py-28">
      <div className="wrap">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="t-display-m max-w-[18ch]">Earth, water, fire, air, spirit</h2>
          <p className="max-w-[36ch] text-paper/60">The tools of her practice, and the elements each one calls in.</p>
        </div>

        <ul className="-mx-[var(--gutter)] mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-[var(--gutter)] pb-2 [scrollbar-width:none] lg:mx-0 lg:grid lg:grid-cols-5 lg:gap-5 lg:overflow-visible lg:px-0 lg:pb-0">
          {elements.map((e) => (
            <li key={e.name} className="w-[64vw] max-w-[17rem] shrink-0 snap-start lg:w-auto lg:max-w-none">
              <Picture name={e.photo} alt={e.alt} sizes="(min-width: 64rem) 18vw, 64vw" className="aspect-[3/4] rounded-t-full" />
              <div className="mt-5 flex items-center gap-3">
                <span className="text-firelight">
                  <Glyph kind={e.glyph} />
                </span>
                <h3 className="t-title">{e.name}</h3>
              </div>
              <p className="mt-2 text-[0.95rem] text-paper/65">{e.caption}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

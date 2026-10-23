import { Parallax } from './Parallax'
import { Picture } from './Picture'

/**
 * The tree at sunset, behind a canopy-dark veil. Shared by the opening
 * (hero, page headers) and the closing invitation, so the site begins and
 * ends under the same tree.
 *  centre — radial veil, for centred words
 *  side   — veil heavier on the left, where the words sit
 * Either way the bottom edge sinks into `deep`, so the next section meets
 * a clean edge rather than the middle of a photograph.
 */
export function TreeBackdrop({ veil = 'centre', priority }: { veil?: 'centre' | 'side'; priority?: boolean }) {
  return (
    <>
      <Parallax amount={10} className="absolute inset-0 -z-10 opacity-70">
        <Picture name="tree-sunset" alt="" sizes="100vw" priority={priority} className="size-full" imgClassName="object-[50%_40%]" />
      </Parallax>
      <div
        aria-hidden
        className={`absolute inset-0 -z-10 ${
          veil === 'centre'
            ? 'bg-[radial-gradient(ellipse_at_50%_45%,rgba(14,26,19,0.35),rgba(14,26,19,0.92)_75%)]'
            : 'bg-[linear-gradient(100deg,rgba(14,26,19,0.9)_0%,rgba(14,26,19,0.6)_45%,rgba(14,26,19,0.3)_100%)]'
        }`}
      />
      <div aria-hidden className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-deep" />
    </>
  )
}

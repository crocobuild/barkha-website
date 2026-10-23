import { journal } from '@/content/journal'
import { Label } from '@/components/Label'
import { Button } from '@/components/Button'
import { PostCard } from '@/components/PostCard'
import { Reveal } from '@/motion/Reveal'

/** Join the Journey — and the latest pages from her journal. */
export function JournalTeaser() {
  const posts = journal.slice(0, 3)
  return (
    <section data-theme="light" className="bg-paper py-28 lg:py-44">
      <div className="wrap">
        <div className="mx-auto max-w-5xl text-center">
          <Label className="justify-center text-forest">Join the journey</Label>
          <Reveal as="p" mode="words" className="t-display-m mt-10">
            Whether you’re here to heal, grow, or just explore what’s possible, I’m here to <em>walk alongside you.</em>
          </Reveal>
          <Reveal as="p" mode="words" className="t-lead mx-auto mt-10 max-w-[40ch] text-ink/75">
            Together, we’ll flip the script on self-doubt, uncover your potential, and craft a life that feels genuinely, unapologetically yours.
          </Reveal>
        </div>

        <div className="mt-28 flex items-end justify-between gap-6 border-t border-ink/15 pt-10 lg:mt-36">
          <div>
            <Label className="text-forest">From the journal</Label>
            <h2 className="t-title mt-4">Notes on healing, written on Medium</h2>
          </div>
          <span className="hidden md:block">
            <Button to="/journal" label="Journal" variant="ghost">
              All writing
            </Button>
          </span>
        </div>

        <div className="mt-14 grid gap-14 md:grid-cols-3 md:gap-8">
          {posts.map((p) => (
            <PostCard key={p.url} post={p} />
          ))}
        </div>
        <div className="mt-14 md:hidden">
          <Button to="/journal" label="Journal" variant="ghost">
            All writing
          </Button>
        </div>
      </div>
    </section>
  )
}

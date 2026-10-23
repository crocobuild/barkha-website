import { journal, postDate } from '@/content/journal'
import { site } from '@/content/site'
import { Seo } from '@/components/Seo'
import { PageHeader } from '@/components/PageHeader'
import { PostCard } from '@/components/PostCard'
import { Button } from '@/components/Button'

export default function Journal() {
  const [lead, ...rest] = journal
  return (
    <>
      <Seo title="Journal" path="/journal" description="Writing on healing, inner child work, sensitivity and courage by Barkha Punjabi." />
      <PageHeader
        label="Journal"
        title={
          <>
            Notes from the <em>path</em>
          </>
        }
        lead="Reflections on healing, fear, sensitivity and coming home to yourself — written as they arrive, published on Medium."
      />

      <section data-theme="light" className="bg-paper pb-32 lg:pb-44">
        <div className="wrap">
          {lead && (
            <div className="grid gap-10 border-t border-ink/15 pt-14 lg:grid-cols-12">
              <PostCard post={lead} large className="lg:col-span-6" />
              <div className="lg:col-span-5 lg:col-start-8 lg:self-end">
                <p className="t-label text-forest">Latest</p>
                <p className="t-lead mt-5 text-ink/80">{lead.excerpt}</p>
                <a href={lead.url} target="_blank" rel="noreferrer" className="link-draw mt-8 inline-block" data-cursor="Read">
                  Continue reading on Medium ↗
                </a>
              </div>
            </div>
          )}

          <ul className="mt-28 border-b border-ink/15">
            {rest.map((p, i) => (
              <li key={p.url} className="border-t border-ink/15">
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="Read"
                  className="group grid gap-2 py-8 md:grid-cols-12 md:items-baseline md:gap-6"
                >
                  <span className="font-serif text-sm italic text-forest md:col-span-1">{String(i + 2).padStart(2, '0')}</span>
                  <span className="t-title md:col-span-6">
                    <span className="link-draw">{p.title}</span>
                  </span>
                  <span className="t-label text-ink/55 md:col-span-3">{p.minutes} min read</span>
                  <span className="t-small text-ink/55 md:col-span-2 md:text-right">{postDate(p)}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-16">
            <Button href={site.medium} variant="ghost">
              Follow on Medium
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

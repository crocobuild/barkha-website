import { faqs } from '@/content/faq'
import { site } from '@/content/site'
import { Accordion } from '@/components/Accordion'
import { Label } from '@/components/Label'
import { Reveal } from '@/motion/Reveal'

/** Chapter VIII — the questions people carry in with them. */
export function Faq() {
  return (
    <section data-theme="light" className="bg-paper py-28 lg:py-44">
      <div className="wrap grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <Label className="mb-8 text-forest">Questions</Label>
            <Reveal as="h2" className="t-display-m">
              Frequently asked <em>questions</em>
            </Reveal>
            <p className="mt-8 max-w-[30ch] text-ink/70">
              Please reach us at{' '}
              <a href={`mailto:${site.email}`} className="link-draw text-ink">
                {site.email}
              </a>{' '}
              if you cannot find an answer to your question.
            </p>
          </div>
        </div>
        <div className="lg:col-span-7 lg:col-start-6">
          <Accordion items={faqs} />
        </div>
      </div>
    </section>
  )
}

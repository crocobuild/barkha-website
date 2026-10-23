import { Picture } from '@/components/Picture'
import { Button } from '@/components/Button'
import { wa, discoveryCallMessage } from '@/content/site'

/**
 * The welcome. Plain white, her real portrait, her words in a real <h1>.
 * Nothing to wait for and nothing to scroll through — the only motion is a
 * short CSS rise as the page paints, so content is never gated on JS.
 */
export function Hero() {
  return (
    <section data-theme="light" className="bg-paper pb-20 pt-[calc(var(--nav-h)+3rem)] lg:pb-28 lg:pt-[calc(var(--nav-h)+5rem)]">
      <div className="wrap grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <p className="rise t-label flex items-center gap-3 text-forest">
            <span className="size-1.5 rounded-full bg-firelight" />
            Shamanic healing and holistic coaching
          </p>
          <h1 className="rise t-display-xl mt-7 text-ink [animation-delay:80ms]">
            Empower Your <em className="text-forest">Soul</em> Journey
          </h1>
          <p className="rise t-lead mt-8 max-w-[30ch] text-ink/75 [animation-delay:160ms]">
            Transform your life with holistic coaching and healing. Your companion on the journey back to <em>you</em>.
          </p>
          <div className="rise mt-10 flex flex-wrap items-center gap-3 [animation-delay:240ms]">
            <Button href={wa(discoveryCallMessage)}>
              Book a free Discovery Call
            </Button>
            <Button to="/offerings" label="Offerings" variant="ghost">
              Explore offerings
            </Button>
          </div>
          <p className="rise t-small mt-10 text-ink/55 [animation-delay:320ms]">In person in Vashi, Navi Mumbai and Bandra, and online wherever you are.</p>
        </div>

        <div className="rise mx-auto w-full max-w-[26rem] [animation-delay:120ms] lg:col-span-5 lg:max-w-none">
          <Picture
            name="barkha-portrait"
            alt="Barkha Punjabi at home, smiling, holding her French bulldog"
            sizes="(min-width: 64rem) 38vw, 90vw"
            priority
            className="aspect-[4/5] rounded-t-full"
          />
          <p className="t-label mt-4 flex justify-between text-ink/50">
            <span>Barkha Punjabi</span>
            <span>Healer and coach</span>
          </p>
        </div>
      </div>
    </section>
  )
}

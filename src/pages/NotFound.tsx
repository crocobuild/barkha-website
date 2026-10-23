import { Seo } from '@/components/Seo'
import { Bee } from '@/components/Bee'
import { Button } from '@/components/Button'

export default function NotFound() {
  return (
    <section data-theme="dark" className="grid min-h-[100svh] place-items-center bg-deep px-[var(--gutter)] text-center text-paper">
      <Seo title="Off the path" description="This page wandered off." />
      <div>
        <Bee className="mx-auto size-16 animate-[wander_6s_var(--ease-breath)_infinite] text-firelight" />
        <h1 className="t-display-l mt-10">
          You’ve wandered <em>off the path</em>
        </h1>
        <p className="t-lead mx-auto mt-8 max-w-[30ch] text-mist/70">Every wanderer does. Let’s find our way back.</p>
        <div className="mt-12">
          <Button to="/" label="Home" variant="ghost" tone="dark">
            Return home
          </Button>
        </div>
      </div>
    </section>
  )
}

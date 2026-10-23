import type { ReactNode } from 'react'
import { Reveal } from '@/motion/Reveal'
import { Label } from './Label'
import { TreeBackdrop } from './TreeBackdrop'

/** Shared opening for inner pages, under the tree: label, a large set title, an optional lead. */
export function PageHeader({ label, title, lead, children }: { label: string; title: ReactNode; lead?: ReactNode; children?: ReactNode }) {
  return (
    <header data-theme="dark" className="relative isolate overflow-hidden bg-deep pb-20 pt-[calc(var(--nav-h)+14vh)] text-paper lg:pb-28">
      <TreeBackdrop veil="side" priority />
      <div className="wrap">
        <Label className="text-mist/70">{label}</Label>
        <Reveal as="h1" className="t-display-xl mt-8 max-w-[15ch]" delay={0.15}>
          {title}
        </Reveal>
        {lead && (
          <Reveal as="p" mode="words" delay={0.5} className="t-lead mt-10 max-w-[36ch] text-mist/85">
            {lead}
          </Reveal>
        )}
        {children}
      </div>
    </header>
  )
}

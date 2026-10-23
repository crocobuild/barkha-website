import type { ReactNode } from 'react'
import { Reveal } from '@/motion/Reveal'
import { Label } from './Label'

/** Shared opening for inner pages: label, a large set title, an optional lead. */
export function PageHeader({
  label,
  title,
  lead,
  children,
  tone = 'light',
}: {
  label: string
  title: ReactNode
  lead?: ReactNode
  children?: ReactNode
  tone?: 'light' | 'dark'
}) {
  const night = tone === 'dark'
  return (
    <header data-theme={tone} className={`${night ? 'bg-deep text-paper' : 'bg-paper text-ink'} pb-16 pt-[calc(var(--nav-h)+16vh)] lg:pb-24`}>
      <div className="wrap">
        <Label className={night ? 'text-mist/60' : 'text-forest'}>{label}</Label>
        <Reveal as="h1" className="t-display-xl mt-8 max-w-[15ch]" delay={0.15}>
          {title}
        </Reveal>
        {lead && (
          <Reveal as="p" mode="words" delay={0.5} className={`t-lead mt-10 max-w-[36ch] ${night ? 'text-mist/80' : 'text-ink/80'}`}>
            {lead}
          </Reveal>
        )}
        {children}
      </div>
    </header>
  )
}

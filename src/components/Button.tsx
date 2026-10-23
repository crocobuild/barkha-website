import type { ReactNode } from 'react'
import { Magnetic } from '@/motion/Magnetic'
import { TLink } from '@/motion/PageTransition'

type Common = {
  children: ReactNode
  variant?: 'primary' | 'ghost' | 'warm'
  tone?: 'light' | 'dark'
  className?: string
}
type Props = Common & ({ to: string; label?: string; href?: never } | { href: string; to?: never; label?: never })

const Arrow = () => (
  <svg viewBox="0 0 24 24" className="size-[1.05em]" fill="none" stroke="currentColor" strokeWidth={1.4} aria-hidden>
    <path d="M5 19 19 5M8 5h11v11" />
  </svg>
)

/**
 * Pill CTA. The label swaps on hover: the resting copy slides up and out
 * while an identical copy rises from below — the text "breathes" through
 * the pill. Wrapped in a magnetic field.
 */
export function Button({ children, variant = 'primary', tone = 'light', className = '', ...link }: Props) {
  const skin =
    variant === 'primary'
      ? 'bg-forest text-paper hover:bg-deep'
      : variant === 'warm'
        ? 'bg-firelight text-deep hover:bg-paper'
        : tone === 'light'
          ? 'border border-current/30 text-ink hover:border-current/70'
          : 'border border-paper/30 text-paper hover:border-paper/70'

  const inner = (
    <span
      className={`group relative inline-flex h-14 items-center gap-3 overflow-hidden rounded-full px-7 text-[0.95rem] font-medium tracking-[-0.005em] transition-colors duration-500 ${skin} ${className}`}
    >
      <span className="relative block overflow-hidden">
        <span className="block transition-transform duration-[900ms] ease-[var(--ease-settle)] group-hover:-translate-y-full">{children}</span>
        <span
          aria-hidden
          className="absolute inset-0 block translate-y-full transition-transform duration-[900ms] ease-[var(--ease-settle)] group-hover:translate-y-0"
        >
          {children}
        </span>
      </span>
      <span className="relative grid size-6 place-items-center overflow-hidden">
        <span className="transition-transform duration-[900ms] ease-[var(--ease-settle)] group-hover:translate-x-6 group-hover:-translate-y-6">
          <Arrow />
        </span>
        <span className="absolute -translate-x-6 translate-y-6 transition-transform duration-[900ms] ease-[var(--ease-settle)] group-hover:translate-x-0 group-hover:translate-y-0">
          <Arrow />
        </span>
      </span>
    </span>
  )

  return (
    <Magnetic strength={0.22}>
      {'to' in link && link.to ? (
        <TLink to={link.to} label={link.label} className="inline-block rounded-full">
          {inner}
        </TLink>
      ) : (
        <a
          href={link.href}
          target={link.href?.startsWith('http') ? '_blank' : undefined}
          rel="noreferrer"

          className="inline-block rounded-full"
        >
          {inner}
        </a>
      )}
    </Magnetic>
  )
}

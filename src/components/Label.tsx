import type { ReactNode } from 'react'

/** A quiet section name: small, sentence case, no ornament. */
export function Label({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <p className={`t-label ${className}`}>{children}</p>
}

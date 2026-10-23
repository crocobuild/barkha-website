/** The wanderer bee — Barkha's signature (@shamanicwandererbee). Single-weight line drawing. */
export function Bee({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 40" className={className} fill="none" stroke="currentColor" strokeWidth={1.1} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20 12c-6-9-17-6-15 1 1.6 5.4 9.6 5.6 15 1" />
      <path d="M28 12c6-9 17-6 15 1-1.6 5.4-9.6 5.6-15 1" />
      <ellipse cx="24" cy="24" rx="7" ry="10" />
      <path d="M17.6 20.5h12.8M17.2 25.5h13.6M18.6 30.2h10.8" />
      <circle cx="24" cy="11.2" r="3.2" />
      <path d="M22.6 8.4c-1-3-3-4.6-5-5M25.4 8.4c1-3 3-4.6 5-5" />
      <path d="M24 34v4" />
    </svg>
  )
}

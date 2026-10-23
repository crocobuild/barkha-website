import { useSyncExternalStore } from 'react'

const q = '(prefers-reduced-motion: reduce)'
const subscribe = (cb: () => void) => {
  const m = matchMedia(q)
  m.addEventListener('change', cb)
  return () => m.removeEventListener('change', cb)
}

export const prefersReducedMotion = () => typeof matchMedia !== 'undefined' && matchMedia(q).matches

export function useReducedMotion() {
  return useSyncExternalStore(subscribe, prefersReducedMotion, () => false)
}

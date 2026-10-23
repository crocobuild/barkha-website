import { useSyncExternalStore } from 'react'

export function useMedia(query: string) {
  return useSyncExternalStore(
    (cb) => {
      const m = matchMedia(query)
      m.addEventListener('change', cb)
      return () => m.removeEventListener('change', cb)
    },
    () => matchMedia(query).matches,
    () => false,
  )
}

export const DESKTOP = '(min-width: 64rem)'
export const FINE_POINTER = '(hover: hover) and (pointer: fine)'

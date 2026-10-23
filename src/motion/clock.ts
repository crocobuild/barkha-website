import { gsap } from './gsap'

/**
 * The drum. One beat per second is the site's master clock; every fourth
 * beat is a "strike" — the moment rings ripple and the hero skin trembles.
 */
export const BEAT = 1
export const BEATS_PER_STRIKE = 4

type Listener = (strike: number) => void
const listeners = new Set<Listener>()
let strikes = 0
let last = 0

gsap.ticker.add((time) => {
  if (time - last >= BEAT * BEATS_PER_STRIKE) {
    last = time
    strikes++
    listeners.forEach((l) => l(strikes))
  }
})

export const onStrike = (fn: Listener) => {
  listeners.add(fn)
  return () => void listeners.delete(fn)
}

/** 0 → 1 progress through the current strike cycle. */
export const strikePhase = () => Math.min(1, (gsap.ticker.time - last) / (BEAT * BEATS_PER_STRIKE))

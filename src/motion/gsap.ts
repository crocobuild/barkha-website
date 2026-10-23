import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'
import { CustomEase } from 'gsap/CustomEase'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, SplitText, DrawSVGPlugin, CustomEase, useGSAP)

/*
 * The motion vocabulary. Every tween in the site uses one of these;
 * nothing is linear, nothing is a default "power2".
 *  breath  — symmetric, unhurried: transitions, curtains, scrubbed scenes
 *  settle  — fast attack, long exhale: things arriving
 *  release — slow start, decisive end: things leaving
 *  strike  — a drum hit: overshoot then decay
 */
CustomEase.create('breath', '0.65, 0, 0.35, 1')
CustomEase.create('settle', '0.16, 1, 0.3, 1')
CustomEase.create('release', '0.7, 0, 0.84, 0')
CustomEase.create('strike', 'M0,0 C0.06,0.42 0.1,1.18 0.26,1.08 0.42,0.98 0.52,1 1,1')

gsap.defaults({ ease: 'settle', duration: 1.1 })
ScrollTrigger.config({ ignoreMobileResize: true })

/** Exits run at ~0.6× the duration of entries. */
export const EXIT = 0.6

export { gsap, ScrollTrigger, SplitText, useGSAP }

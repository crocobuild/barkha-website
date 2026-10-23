import type { MedallionName } from './assets.gen'

export type Archetype = { name: string; line: string; medallion: MedallionName }

/** "Who Walks This Path With Me" */
export const archetypes: Archetype[] = [
  { name: 'The Professional', line: "who's successful on paper but starving for soul food.", medallion: 'coaching' },
  { name: 'The Career Pauser', line: 'ready to return to work but this time, on your own terms.', medallion: 'energy-healing' },
  { name: 'The Student', line: 'navigating gap years with more questions than answers.', medallion: 'akashic-records' },
  { name: 'The Woman', line: "who's tired of playing small and ready to take up space.", medallion: 'womb-healing' },
  { name: 'The Seeker', line: "who knows there's more to life than what meets the eye.", medallion: 'learn-shamanism' },
  { name: 'The Wounded Healer', line: 'recognizing yourself in my story.', medallion: 'one-on-one' },
  { name: 'The Spiritual Curious', line: 'ready to dip their toes into ancient wisdom.', medallion: 'tuesday-meditations' },
  { name: 'The Empath', line: 'learning to manage their gifts without burning out.', medallion: 'inner-child' },
]

import type { MedallionName, PhotoName } from './assets.gen'

export type Offering = {
  slug: string
  /** Main name, set upright. */
  name: string
  /** Second half of Barkha's "Name: Subtitle" titles, set in italic. */
  subtitle?: string
  /** Subtitle continues the sentence instead of following a colon. */
  inline?: boolean
  /** One-line description of the format. */
  kicker: string
  body: string
  medallion: MedallionName
  /** Only real photographs that genuinely fit; otherwise the medallion leads. */
  photo?: PhotoName
  format: string
  /** Archetypes (by name) this work tends to call to. */
  for: string[]
}

export const offerings: Offering[] = [
  {
    slug: 'tuesday-meditations',
    name: 'Tuesday Meditations',
    subtitle: 'Your Weekly Reset',
    kicker: 'Shamanic journeys with your animal spirit guides',
    body: 'Start each week like you mean it. These intimate sessions blend ancient wisdom with Tuesday Evening possibilities. Some journeys are gifted freely (because magic should be shared), while deeper work awaits those ready to dive in.',
    medallion: 'tuesday-meditations',
    photo: 'bowls',
    format: 'Weekly · Tuesday evenings · Group',
    for: ['The Spiritual Curious', 'The Seeker', 'The Professional'],
  },
  {
    slug: 'inner-child-healing',
    name: 'Inner Child Healing',
    subtitle: 'Coming Home to You',
    kicker: 'Workshops for the part of you that remembers how to play',
    body: "Your inner child holds your creativity, your wonder, and yes, sometimes your wounds too. Together, we'll tend to both with the gentleness you deserved then and the wisdom you have now.",
    medallion: 'inner-child',
    format: 'Workshops · In-person & virtual',
    for: ['The Empath', 'The Wounded Healer', 'The Woman'],
  },
  {
    slug: 'womb-healing',
    name: 'Womb Healing Journeys',
    subtitle: 'Sacred Feminine Rising',
    kicker: 'Shamanic work for everybody who honors the feminine',
    body: "This is about reconnecting with your creative fire, your intuitive knowing, and the sacred power that flows through you. Whether you're healing old stories or awakening new possibilities, these journeys honor all of you.",
    medallion: 'womb-healing',
    format: 'Journeys · In-person & virtual',
    for: ['The Woman', 'The Empath', 'The Seeker'],
  },
  {
    slug: 'akashic-records',
    name: 'Akashic Records',
    subtitle: "Your Soul's Story",
    kicker: 'Readings and learning sessions',
    body: "Think of this as having coffee with your highest self. The Records hold your soul's wisdom: past, present, and future. I can read them with you, or teach you to access this ancient library yourself.",
    medallion: 'akashic-records',
    photo: 'oracle-cards',
    format: 'Readings · Teaching sessions',
    for: ['The Seeker', 'The Student', 'The Spiritual Curious'],
  },
  {
    slug: 'learn-shamanism',
    name: 'Learn Shamanism',
    subtitle: 'Ancient Wisdom, Modern Life',
    kicker: 'Practical teachings for everyday magic',
    body: "These aren't just techniques, they're invitations to remember your connection to something bigger. Learn to journey, work with your guides, and find your way back to the natural world that's been waiting for you.",
    medallion: 'learn-shamanism',
    photo: 'drum',
    format: 'Series · Develop your own practice',
    for: ['The Wounded Healer', 'The Seeker', 'The Spiritual Curious'],
  },
  {
    slug: 'energy-healing',
    name: 'Energy Healing Sessions',
    kicker: 'In-person and distant body work',
    body: "Your body holds stories, and sometimes those stories need updating. These sessions help release what's ready to go and invite in what wants to come. Distance is just an illusion when it comes to energy work.",
    medallion: 'energy-healing',
    format: 'One-on-one · In-person & distant',
    for: ['The Empath', 'The Professional', 'The Career Pauser'],
  },
  {
    slug: 'fur-family',
    name: 'Healing for Your',
    subtitle: 'Fur Family',
    inline: true,
    kicker: 'Energy work for your beloved pets',
    body: 'Animals are natural healers who sometimes need healing too. These gentle sessions support your furry companions through their own journeys, strengthening the bond you share.',
    medallion: 'fur-family',
    photo: 'barkha-portrait',
    format: 'Gentle sessions · In-person & distant',
    for: ['The Empath', 'The Seeker'],
  },
  {
    slug: 'one-on-one',
    name: 'One-on-One',
    subtitle: 'Sacred Space',
    kicker: 'Completely personalized healing sessions',
    body: 'This is where all the modalities dance together, tailored just for you. In these sessions, we create a container sacred enough for whatever wants to emerge and be healed.',
    medallion: 'one-on-one',
    photo: 'altar',
    format: 'Private · Tailored to you',
    for: ['The Wounded Healer', 'The Woman', 'The Professional'],
  },
  {
    slug: 'coaching-and-shamanic-healing',
    name: 'Coaching + Shamanic Healing',
    subtitle: 'The Best of Both Worlds',
    kicker: "For when you're ready to step fully into your power",
    body: "Traditional coaching asks, ‘What's next?’ Shamanic healing asks, ‘What's underneath?’ When we blend both, magic happens. Perfect for career transitions, life changes, or when you simply know you're meant for more.",
    medallion: 'coaching',
    format: 'Coaching journey · Weekly, bi-weekly or monthly',
    for: ['The Professional', 'The Career Pauser', 'The Student'],
  },
]

export const offeringTitle = (o: Offering) => (o.subtitle ? `${o.name}${o.inline ? ' ' : ': '}${o.subtitle}` : o.name)

export const waForOffering = (o: Offering) => `Hi Barkha, I'd love to know more about ${offeringTitle(o)}.`

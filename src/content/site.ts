export const site = {
  name: 'Barkha Punjabi',
  role: 'Shamanic Healer & Holistic Coach',
  email: 'connect@barkhapunjabi.com',
  phone: '+91 86574 27827',
  whatsapp: '918657427827',
  instagram: { url: 'https://www.instagram.com/shamanicwandererbee/', handle: '@shamanicwandererbee' },
  medium: 'https://medium.com/@barkhampunjabi',
  locations: ['Vashi', 'Navi Mumbai', 'Bandra'],
  hours: { days: 'Tuesdays — Saturdays', note: 'By appointment only' },
} as const

/** WhatsApp deep link with an optional pre-filled message. */
export const wa = (text?: string) => `https://wa.me/${site.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`

export const discoveryCallMessage = "Hi Barkha, I found you through your website and I'd love to book a complimentary 20-minute Discovery Call."

export const nav = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/offerings', label: 'Offerings' },
  { to: '/journal', label: 'Journal' },
  { to: '/begin', label: 'Begin' },
] as const

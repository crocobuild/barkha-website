import { Helmet } from 'react-helmet-async'

const BASE = 'https://barkhapunjabi.com'

export function Seo({ title, description, path = '/', image }: { title?: string; description: string; path?: string; image?: string }) {
  const full = title ? `${title} — Barkha Punjabi` : 'Barkha Punjabi — Shamanic Healing & Holistic Coaching'
  return (
    <Helmet>
      <title>{full}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={BASE + path} />
      <meta property="og:title" content={full} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={BASE + path} />
      {image && <meta property="og:image" content={BASE + image} />}
    </Helmet>
  )
}

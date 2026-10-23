/**
 * Pulls Barkha's Medium RSS feed at build time into a static JSON file,
 * so the Journal page never depends on a third-party API at runtime.
 * Run: npm run journal  (keeps the previous file if the fetch fails)
 */
import { mkdir, writeFile } from 'node:fs/promises'
import sharp from 'sharp'
import path from 'node:path'

const FEED = 'https://medium.com/feed/@barkhampunjabi'
const OUT = path.resolve(import.meta.dirname, '../src/content/journal.gen.json')
const IMG = path.resolve(import.meta.dirname, '../public/img/journal')

/** Self-host each cover so the Journal never depends on Medium's CDN. */
async function localCover(src: string | null, id: string) {
  if (!src) return null
  try {
    const res = await fetch(src.replace('/max/1200/', '/v2/resize:fit:1200/'))
    if (!res.ok) return null
    const buf = Buffer.from(await res.arrayBuffer())
    await sharp(buf).resize({ width: 900, withoutEnlargement: true }).webp({ quality: 72 }).toFile(path.join(IMG, `${id}.webp`))
    return `/img/journal/${id}.webp`
  } catch {
    return null
  }
}

const cdata = (s = '') => s.replace(/^<!\[CDATA\[|\]\]>$/g, '').trim()
const pick = (xml: string, tag: string) => cdata(xml.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`))?.[1])
const decode = (s: string) =>
  s
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&rsquo;|&lsquo;/g, '’')
    .replace(/&nbsp;/g, ' ')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')

async function main() {
  const res = await fetch(FEED)
  if (!res.ok) throw new Error(`Feed responded ${res.status}`)
  const xml = await res.text()
  await mkdir(IMG, { recursive: true })
  const raw = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].map(([, it]) => {
    const html = pick(it, 'content:encoded')
    const img = html.match(/<img[^>]+src="([^"]+)"/)?.[1]?.replace('/max/1024/', '/max/1200/') ?? null
    const paragraphs = [...html.matchAll(/<p>([\s\S]*?)<\/p>/g)].map((m) => decode(m[1].replace(/<[^>]+>/g, '')).trim())
    const excerpt = paragraphs.find((p) => p.length > 80) ?? paragraphs[0] ?? ''
    const words = html
      .replace(/<[^>]+>/g, ' ')
      .split(/\s+/)
      .filter(Boolean).length
    return {
      title: decode(pick(it, 'title')),
      url: pick(it, 'link').split('?')[0],
      date: new Date(pick(it, 'pubDate')).toISOString(),
      tags: [...it.matchAll(/<category>([\s\S]*?)<\/category>/g)].map((m) => cdata(m[1])),
      image: img,
      excerpt: excerpt.length > 240 ? excerpt.slice(0, excerpt.lastIndexOf(' ', 236)) + '…' : excerpt,
      minutes: Math.max(1, Math.round(words / 230)),
    }
  })
  const items = await Promise.all(raw.map(async (p) => ({ ...p, image: await localCover(p.image, p.url.split('-').pop() ?? p.title) })))
  await writeFile(OUT, JSON.stringify(items, null, 2) + '\n')
  console.log(`journal: ${items.length} posts`)
}

main().catch((e) => {
  console.warn('journal: fetch failed, keeping existing file —', e.message)
})

# Barkha Punjabi — website

Shamanic healing & holistic coaching. React 19 + TypeScript + Vite, GSAP (ScrollTrigger, SplitText, DrawSVG), Lenis, Motion.

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # refreshes the Medium journal, type-checks, builds to dist/
```

## Editing words

All copy lives in `src/content/`:

| File | What |
| --- | --- |
| `site.ts` | email, phone, WhatsApp number, Instagram, Medium, locations, hours, the Discovery Call message |
| `offerings.ts` | the nine offerings (name, italic subtitle, one-liner, body, format, medallion, photo) |
| `archetypes.ts` | "Who walks this path with me" |
| `faq.ts` | questions and answers |
| `testimonials.ts` | the six client reviews carried over verbatim from the old site (photos in `public/img/reviews/`) |

The Journal pulls her Medium feed at build time (`npm run journal`) — no API at runtime.

## Images

Originals live in `assets-src/` (medallions are `med-*.jpg`). After adding or replacing one, run `npm run assets`: it writes responsive AVIF/WebP to `public/img/` and re-traces the medallions to vector so they can draw themselves.

## Motion system

- `src/motion/gsap.ts` — the four eases every animation uses: `breath`, `settle`, `release`, `strike`.
- `src/motion/clock.ts` — the drum: one beat a second, a strike every four. The closing section's rings travel on it.
- No intro, no pinned or scroll-jacked sections: every section is readable as soon as it's on screen. The hero is plain HTML with a CSS-only fade.
- Everything respects `prefers-reduced-motion`.

## Palette

White first (`paper`), `ink` for text, `forest` (#1F3A2B) for meaning and primary actions, `firelight` (#D29B45) as a single warm spark, `deep` canopy green for the few dark sections, `lichen` for fine detail. Tokens live in `src/styles/index.css`.

## Hosting

Static build. `vercel.json` (Vercel) and `public/_redirects` (Netlify) route deep links like `/offerings/womb-healing` to the app.

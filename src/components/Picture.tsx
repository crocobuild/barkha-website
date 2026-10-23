import type { CSSProperties } from 'react'
import { photos, type PhotoName } from '@/content/assets.gen'

type Props = {
  name: PhotoName
  alt: string
  sizes?: string
  className?: string
  imgClassName?: string
  priority?: boolean
  style?: CSSProperties
  imgStyle?: CSSProperties
}

/**
 * Responsive AVIF/WebP picture. The tiny blurred thumbnail sits behind it as
 * a background, so there is never an empty box — and the image itself never
 * waits on JavaScript to become visible.
 */
export function Picture({ name, alt, sizes = '100vw', className = '', imgClassName = '', priority, style, imgStyle }: Props) {
  const p = photos[name]
  const set = (ext: string) => p.widths.map((w) => `/img/${name}-${w}.${ext} ${w}w`).join(', ')

  return (
    <picture className={`relative block overflow-hidden bg-cover bg-center ${className}`} style={{ backgroundImage: `url(${p.blur})`, ...style }}>
      <source type="image/avif" srcSet={set('avif')} sizes={sizes} />
      <source type="image/webp" srcSet={set('webp')} sizes={sizes} />
      <img
        src={photoSrc(name, 960)}
        alt={alt}
        width={p.w}
        height={p.h}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : undefined}
        decoding={priority ? 'sync' : 'async'}
        className={`size-full object-cover ${imgClassName}`}
        style={imgStyle}
      />
    </picture>
  )
}

export const photoSrc = (name: PhotoName, minWidth = 1440) => {
  const p = photos[name]
  return `/img/${name}-${p.widths.find((w) => w >= minWidth) ?? p.widths.at(-1)}.webp`
}

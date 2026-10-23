import type { Post } from '@/content/journal'
import { postDate, postTag } from '@/content/journal'

/** A journal entry. The image lifts inside its arch; the title underlines itself. */
export function PostCard({ post, large = false, className = '' }: { post: Post; large?: boolean; className?: string }) {
  return (
    <a href={post.url} target="_blank" rel="noreferrer" data-cursor="Read" className={`group block ${className}`}>
      <div className={`overflow-hidden rounded-[1.25rem] bg-mist ${large ? 'aspect-[4/3]' : 'aspect-[3/2]'}`}>
        {post.image && (
          <img
            src={post.image}
            alt=""
            loading="lazy"
            decoding="async"
            className="size-full scale-[1.02] object-cover transition-[transform,filter] duration-[1400ms] ease-[var(--ease-settle)] group-hover:scale-[1.04]"
          />
        )}
      </div>
      <p className="t-label mt-6 flex gap-3 text-forest">
        <span>{postTag(post)}</span>
        <span className="opacity-70">{post.minutes} min</span>
      </p>
      <h3 className={`mt-3 ${large ? 't-display-m' : 't-title'}`}>
        <span className="link-draw">{post.title}</span>
      </h3>
      {large && <p className="mt-5 max-w-[52ch] text-ink/75">{post.excerpt}</p>}
      <p className="t-small mt-3 text-ink/50">{postDate(post)}</p>
    </a>
  )
}

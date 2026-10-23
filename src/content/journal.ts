import posts from './journal.gen.json'

export type Post = (typeof posts)[number]

export const journal: Post[] = posts

const fmt = new Intl.DateTimeFormat('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
export const postDate = (p: Post) => fmt.format(new Date(p.date))
export const postTag = (p: Post) => p.tags[0]?.replace(/-/g, ' ') ?? 'reflections'

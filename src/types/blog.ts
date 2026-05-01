/** Blog post metadata from MDX frontmatter */
export interface PostMeta {
  title: string
  description: string
  date: string          // ISO 8601: "2024-03-15"
  tags: string[]
  published: boolean
  coverImage?: string
  readingTime?: number  // in minutes
}

/** Full post with content */
export interface Post extends PostMeta {
  slug: string
  content: string
}

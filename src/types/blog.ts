export interface Author {
  name: string
  title?: string
  avatar: string
}

export interface Post {
  title: string
  summary?: string
  coverImage: string
  href: string
  author: Author
  publishedAt?: Date
}

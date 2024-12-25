import { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'

export interface Author {
  id: string
  handle: string
  nickname: string
  avatar?: string
  blocks?: BlockObjectResponse[]
  title?: string
}

export interface Post {
  id: string
  cover?: string | null
  authors: Author[]
  title: string
  summary?: string | null
  slug: string
  path: string
  tags: string[]
  status: string
  publishedTime: string
  blocks: BlockObjectResponse[]
}

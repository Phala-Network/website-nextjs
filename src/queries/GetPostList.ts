import { type Post } from '../types/blog'
export { type Post } from '../types/blog'

export interface GetPostList {
  readonly cursor?: string;
  readonly pageSize?: number;
  readonly author?: string
  readonly includeTags?: string[];
  readonly excludeTags?: string[];
  readonly sortReversed?: boolean;
}

export async function getPostList(params: GetPostList): Promise<Post[]> {
  return await fetch(`${process.env.NOTION_BACKEND_PREFIX}/site/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  })
    .then((response) => response.json())
    .then((data) => (data?.posts ?? []) as Post[])
}

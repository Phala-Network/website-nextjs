import { type Post } from '../types/blog'

export interface GetPostList {
  readonly cursor?: string;
  readonly pageSize?: number;
  readonly author?: string
  readonly includeTags?: string[];
  readonly excludeTags?: string[];
  readonly sortReversed?: boolean;
}

export async function getPostList(params: GetPostList): Promise<Post[]> {
  return await fetch('http://127.0.0.1:3001/site/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  })
    .then((response) => response.json())
    .then((data) => (data?.posts ?? []) as Post[])
}

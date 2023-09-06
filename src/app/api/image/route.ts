import * as R from 'ramda'

import { notion } from '@/lib/notion-client'

export const revalidate = 300

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  let url = searchParams.get('url')
  const block_id = searchParams.get('block_id')
  const block_type = searchParams.get('block_type') || 'image'
  const page_id = searchParams.get('page_id')
  if (!url || (!block_id && !page_id)) {
    return new Response('Invalid parameters', {
      status: 422,
    })
  }
  let response = await fetch(url, {
    method: 'HEAD',
  })
  if (response.status !== 200) {
    if (page_id) {
      const page = await notion.pages.retrieve({ page_id })
      url = R.pathOr('', ['cover', 'file', 'url'], page)
    } else if (block_id) {
      const block = await notion.blocks.retrieve({ block_id })
      url = R.pathOr('', [block_type, 'file', 'url'], block)
    }
  }

  return new Response(JSON.stringify({ url }), {
    status: 200,
  })
}

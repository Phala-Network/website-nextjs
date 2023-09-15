import * as R from 'ramda'

import { notion, isMediumUrl } from '@/lib/notion-client'

export const revalidate = 300

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  let url = searchParams.get('url')
  const width = searchParams.get('width')
  const height = searchParams.get('height')
  const resizing_type = searchParams.get('resizing_type') || 'fill'
  const block_id = searchParams.get('block_id')
  const block_type = searchParams.get('block_type') || 'image'
  const page_id = searchParams.get('page_id')
  if (!url || (!block_id && !page_id)) {
    return new Response('Invalid parameters', {
      status: 422,
    })
  }
  if (!isMediumUrl) {
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
  }
  if (process.env.IMGPROXY_URL) {
    let resize = ''
    if (width && height) {
      resize = `/resize:${resizing_type}:${width}:${height}:0`
    }
    url = `${process.env.IMGPROXY_URL}${resize}/plain/${url}`
  }
  return new Response(JSON.stringify({ url }), {
    status: 200,
  })
}

import { NextResponse } from 'next/server'
import * as R from 'ramda'

import { env } from '@/env'
import { notion } from '@/lib/notion-client'

export const revalidate = 300

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  let url = searchParams.get('url') || ''
  const width = searchParams.get('width')
  const height = searchParams.get('height')
  const resizing_type = searchParams.get('resizing_type') || 'fill'
  const block_id = searchParams.get('block_id')
  const page_id = searchParams.get('page_id')
  const path = searchParams.get('path')
  if (page_id) {
    const page = await notion.pages.retrieve({ page_id })
    if (path) {
      url = R.pathOr('', JSON.parse(path), page)
    } else {
      url = R.pathOr('', ['cover', 'file', 'url'], page)
    }
  } else if (block_id) {
    const block = await notion.blocks.retrieve({ block_id })
    url = R.pathOr('', ['image', 'file', 'url'], block)
  }
  if (env.IMGPROXY_URL) {
    let resize = ''
    if (width && height) {
      resize = `/resize:${resizing_type}:${width}:${height}:0`
    }
    url = `${env.IMGPROXY_URL}${resize}/plain/${url}`
  }
  return NextResponse.redirect(url)
}

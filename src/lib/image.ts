import type { ImageBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'

import type { ParsedListPage, ParsedPage } from '@/lib/notion-client'

interface ProxyImageOptions {
  width: number
  height: number
}

function removeMediumFormat(url: string): string {
  const regex = /^https?:\/\/[\w.-]+\.medium\.com(?:\/v2)?(.*?)\/([^/]+)$/
  const match = url.match(regex)
  if (match && match.length === 3) {
    const formatPart = match[1]
    const baseUrl = url.replace(formatPart, '')
    return baseUrl
  }
  return url
}

export function buildProxyImageUrl(
  source: ParsedListPage | ParsedPage | ImageBlockObjectResponse,
  options?: ProxyImageOptions,
) {
  const params: Record<string, string> = {}
  if (options?.width) {
    params.width = `${options.width}`
  }
  if (options?.height) {
    params.height = `${options.height}`
  }
  if ('cover' in source && source.cover) {
    if (source.cover.type === 'external') {
      params.url = removeMediumFormat(source.cover.external.url)
    } else {
      params.page_id = source.id
    }
  }
  if ('image' in source && source.image) {
    if (source.image.type === 'external') {
      params.url = removeMediumFormat(source.image.external.url)
    } else {
      params.block_id = source.id
    }
  }
  // const query = new URLSearchParams(params)
  // return `/api/image?${query.toString()}`
  // return `https://img0.phala.world/notion/f:jpeg/plain/https://img0.phala.world/files/${source.id}.jpg`
  return `https://img0.phala.world/files/${source.id}.jpg`
}

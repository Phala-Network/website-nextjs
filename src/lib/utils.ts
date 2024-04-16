import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { type ImageBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'

import {
  removeMediumFormat,
  type ParsedPage,
  type ParsedListPage,
} from '@/lib/notion-client'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

interface ProxyImageOptions {
  width: number
  height: number
}

export function buildProxyImageUrl(source: ParsedListPage | ParsedPage | ImageBlockObjectResponse, options?: ProxyImageOptions) {
  const params: Record<string, string> = {}
  if (options && options.width) {
    params.width = `${options.width}`
  }
  if (options && options.height) {
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
  const query = new URLSearchParams(params)
  // return `/api/image?${query.toString()}`
  return `https://img0.phala.world/notion/f:jpeg/plain/https://img0.phala.world/files/${source.id}.jpg`
}

export function generateSlug(title: string): string {
  const sanitizedTitle = title.toLowerCase().replace(/[^\w\d\s]+/g, '')
  const slug = sanitizedTitle.replace(/\s+/g, '-')
  return slug
}

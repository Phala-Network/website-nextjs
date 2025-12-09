import type { ImageBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'

import { env } from '@/env'
import type { ParsedListPage, ParsedPage } from '@/lib/notion-client'
import { coverRemap } from './post-client'

/**
 * Image URL mode:
 * - 'direct': Direct S3 URLs (requires pre-synced images)
 * - 'proxy': On-demand proxy URLs (auto-caches to S3)
 *
 * Set via NEXT_PUBLIC_IMAGE_MODE env var, defaults to 'proxy'
 */
const IMAGE_MODE =
  (process.env.NEXT_PUBLIC_IMAGE_MODE as 'direct' | 'proxy') || 'proxy'

/**
 * Build a cover image URL
 *
 * In 'proxy' mode: /api/image/notion/covers/{pageId}.jpg
 * In 'direct' mode: {S3_PUBLIC_URL}/covers/{pageId}.jpg
 */
export function buildCoverUrl(pageId: string): string {
  // Remove dashes and apply remap if needed
  let id = pageId.replace(/-/g, '')
  id = coverRemap[id] || id

  if (IMAGE_MODE === 'proxy') {
    return `/api/image/notion/covers/${id}.jpg`
  }

  const baseUrl = env.NEXT_PUBLIC_S3_PUBLIC_URL
  return `${baseUrl}/covers/${id}.jpg`
}

/**
 * Build a file/block image URL
 *
 * In 'proxy' mode: /api/image/notion/files/{blockId}.{ext}
 * In 'direct' mode: {S3_PUBLIC_URL}/files/{blockId}.{ext}
 */
export function buildFileUrl(blockId: string, extension = 'jpg'): string {
  const id = blockId.replace(/-/g, '')

  if (IMAGE_MODE === 'proxy') {
    return `/api/image/notion/files/${id}.${extension}`
  }

  const baseUrl = env.NEXT_PUBLIC_S3_PUBLIC_URL
  return `${baseUrl}/files/${id}.${extension}`
}

/**
 * Build a video URL
 *
 * In 'proxy' mode: /api/image/notion/files/{blockId}.mp4
 * In 'direct' mode: {S3_PUBLIC_URL}/files/{blockId}.mp4
 */
export function buildVideoUrl(blockId: string, extension = 'mp4'): string {
  const id = blockId.replace(/-/g, '')

  if (IMAGE_MODE === 'proxy') {
    return `/api/image/notion/files/${id}.${extension}`
  }

  const baseUrl = env.NEXT_PUBLIC_S3_PUBLIC_URL
  return `${baseUrl}/files/${id}.${extension}`
}

interface ProxyImageOptions {
  width?: number
  height?: number
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

/**
 * Build proxy image URL for Notion images
 * This is used for images within article content
 */
export function buildProxyImageUrl(
  source: ParsedListPage | ParsedPage | ImageBlockObjectResponse,
  _options?: ProxyImageOptions,
): string {
  // For cover images
  if ('cover' in source && source.cover) {
    if (source.cover.type === 'external') {
      // External covers - use the URL directly
      return removeMediumFormat(source.cover.external.url)
    }
    // File covers - use S3 URL
    return buildFileUrl(source.id)
  }

  // For image blocks
  if ('image' in source && source.image) {
    if (source.image.type === 'external') {
      // External images - use the URL directly
      return removeMediumFormat(source.image.external.url)
    }
    // File images - use S3 URL
    return buildFileUrl(source.id)
  }

  // Fallback to S3 files URL
  return buildFileUrl(source.id)
}

/**
 * Converts Next.js getImageProps srcSet to CSS image-set() format
 * for use with background-image property
 */
export function getBackgroundImage(srcSet = '') {
  const imageSet = srcSet
    .split(', ')
    .map((str) => {
      const [url, dpi] = str.split(' ')
      return `url("${url}") ${dpi}`
    })
    .join(', ')
  return `image-set(${imageSet})`
}

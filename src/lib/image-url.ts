import type { ImageBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'

import { env } from '@/env'
import type { ParsedListPage, ParsedPage } from '@/lib/notion-client'

/**
 * Build a cover image URL
 * Returns: /api/media/covers/{pageId}-{timestamp}.jpg
 *
 * The timestamp is part of the filename to ensure:
 * 1. Different versions of covers have different S3 keys
 * 2. Same version can use S3 cache normally
 * 3. No need to delete old files (they become orphaned but harmless)
 */
export function buildCoverUrl(pageId: string, lastEditedTime?: string): string {
  // Remove dashes and apply remap if needed
  const id = pageId.replace(/-/g, '')

  if (lastEditedTime) {
    // Include timestamp in filename for versioning
    const t = new Date(lastEditedTime).getTime()
    return `/api/media/covers/${id}-${t}.jpg`
  }
  return `/api/media/covers/${id}.jpg`
}

/**
 * Build a file/block image URL
 * Returns: /api/media/files/{blockId}.{ext}
 */
function buildFileUrl(blockId: string, extension = 'jpg'): string {
  const id = blockId.replace(/-/g, '')
  return `/api/media/files/${id}.${extension}`
}

/**
 * Build a video URL
 * Returns: /api/media/files/{blockId}.mp4
 */
export function buildVideoUrl(blockId: string, extension = 'mp4'): string {
  const id = blockId.replace(/-/g, '')
  return `/api/media/files/${id}.${extension}`
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
 * Build an optimized image URL using Next.js Image Optimization
 * Use this for metadata (openGraph, twitter) and structured data where <Image> component can't be used
 * @param imageUrl - The original image URL (relative or absolute)
 * @param width - The desired width (default: 1200)
 * @param quality - The image quality (default: 75)
 */
export function buildOptimizedImageUrl(
  imageUrl: string,
  width = 1200,
  quality = 75,
): string {
  const baseUrl = `https://${env.VERCEL_PROJECT_PRODUCTION_URL}`
  return `${baseUrl}/_next/image?url=${encodeURIComponent(imageUrl)}&w=${width}&q=${quality}`
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

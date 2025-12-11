'use client'

import Image, { type ImageProps } from 'next/image'
import { useCallback, useState } from 'react'

import { env } from '@/env'

const S3_PUBLIC_URL = env.NEXT_PUBLIC_S3_PUBLIC_URL

/**
 * Convert /api/media/* URL to S3 CDN URL
 * /api/media/covers/xxx.jpg -> https://assets.phala.com/website/covers/xxx.jpg
 * /api/media/files/xxx.jpg -> https://assets.phala.com/website/files/xxx.jpg
 */
function toS3Url(src: string): string | null {
  if (!S3_PUBLIC_URL) return null

  const match = src.match(/^\/api\/media\/(covers|files)\/(.+)$/)
  if (!match) return null

  const [, type, filename] = match
  return `${S3_PUBLIC_URL}/${type}/${filename}`
}

/**
 * Check if a URL is an /api/media/* URL
 */
function isApiMediaUrl(src: string): boolean {
  return src.startsWith('/api/media/')
}

export interface CdnImageProps extends Omit<ImageProps, 'src'> {
  src: string
}

/**
 * CDN-optimized Image component with S3 fallback
 *
 * For /api/media/* URLs:
 * 1. First tries to load from S3 CDN (faster, no serverless function)
 * 2. Falls back to /api/media/* if S3 fails (handles cache miss)
 *
 * For other URLs, behaves like regular next/image
 */
export function CdnImage({ src, onError, ...props }: CdnImageProps) {
  const s3Url = isApiMediaUrl(src) ? toS3Url(src) : null
  const [currentSrc, setCurrentSrc] = useState(s3Url || src)
  const [hasError, setHasError] = useState(false)

  const handleError = useCallback(
    (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
      // If S3 URL failed and we have a fallback, try the original API URL
      if (s3Url && currentSrc === s3Url && !hasError) {
        setCurrentSrc(src)
        setHasError(true)
        return
      }

      // Otherwise, call the original onError handler
      onError?.(e)
    },
    [s3Url, currentSrc, src, hasError, onError],
  )

  return <Image {...props} src={currentSrc} onError={handleError} />
}

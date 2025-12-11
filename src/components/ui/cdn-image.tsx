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
export function toS3Url(src: string): string | null {
  if (!S3_PUBLIC_URL) return null

  const match = src.match(/^\/api\/media\/(covers|files)\/(.+)$/)
  if (!match) return null

  const [, type, filename] = match
  return `${S3_PUBLIC_URL}/${type}/${filename}`
}

/**
 * Check if a URL is an /api/media/* URL
 */
export function isApiMediaUrl(src: string): boolean {
  return src.startsWith('/api/media/')
}

/**
 * Hook for CDN URL with fallback
 * Returns [currentSrc, handleError] where handleError should be called on load failure
 */
export function useCdnUrl(src: string): [string, () => void] {
  const s3Url = isApiMediaUrl(src) ? toS3Url(src) : null
  const [currentSrc, setCurrentSrc] = useState(s3Url || src)
  const [hasError, setHasError] = useState(false)

  const handleError = useCallback(() => {
    // If S3 URL failed and we have a fallback, try the original API URL
    if (s3Url && currentSrc === s3Url && !hasError) {
      setCurrentSrc(src)
      setHasError(true)
    }
  }, [s3Url, currentSrc, src, hasError])

  return [currentSrc, handleError]
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
  const [currentSrc, handleCdnError] = useCdnUrl(src)

  const handleError = useCallback(
    (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
      handleCdnError()
      onError?.(e)
    },
    [handleCdnError, onError],
  )

  return <Image {...props} src={currentSrc} onError={handleError} />
}

export interface CdnVideoProps
  extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string
}

/**
 * CDN-optimized Video component with S3 fallback
 *
 * For /api/media/* URLs:
 * 1. First tries to load from S3 CDN (faster, no serverless function)
 * 2. Falls back to /api/media/* if S3 fails (handles cache miss)
 *
 * For other URLs, behaves like regular video element
 */
export function CdnVideo({ src, onError, ...props }: CdnVideoProps) {
  const [currentSrc, handleCdnError] = useCdnUrl(src)

  const handleError = useCallback(
    (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
      handleCdnError()
      onError?.(e)
    },
    [handleCdnError, onError],
  )

  return <video {...props} src={currentSrc} onError={handleError} />
}

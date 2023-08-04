import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function removeFormatFromCoverUrl(coverUrl: string): string {
  const regex = /^https:\/\/[\w.-]+\.medium\.com(?:\/v2)?(.*?)\/([^\/]+)$/
  const match = coverUrl.match(regex)
  if (match && match.length === 3) {
    const formatPart = match[1]
    const baseUrl = coverUrl.replace(formatPart, '')
    return baseUrl
  }
  return coverUrl
}


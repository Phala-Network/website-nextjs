'use client'

import Link from 'next/link'
import { FiExternalLink } from 'react-icons/fi'

import { cn } from '@/lib/utils'

interface PartnerCardProps {
  title: string
  url: string
  description: string
  src: string
  post?: string
  tags: string[]
  isLarge?: boolean
}

export default function PartnerCard({
  title,
  url,
  description,
  src,
  tags,
  post,
  isLarge = false,
}: PartnerCardProps) {
  const cardHeight = isLarge ? 'h-96' : 'h-80'
  const logoSize = isLarge ? 'h-28 w-28' : 'h-20 w-20'

  // Helper to check if link is external
  const isExternal = (href: string) => href.startsWith('http')

  // The main link (title) - use post if available, otherwise url
  const mainHref = post || url
  const isMainExternal = isExternal(mainHref)

  return (
    <div
      className={cn(
        'bg-card hover:bg-primary/80 border-card group flex flex-col items-start justify-between rounded-md border p-4 transition-all duration-300 hover:text-foreground md:p-6',
        cardHeight,
      )}
    >
      {/* Category tag */}
      <div className="border-border rounded-md border px-3 py-1 text-xs font-medium transition-colors duration-300 group-hover:border-black md:px-4 md:py-2 md:text-sm">
        {tags[0] || 'Partner'}
      </div>

      {/* Logo */}
      <div className="mx-auto mb-4 flex-1 flex items-center justify-center">
        <img
          src={src}
          alt={title}
          className={cn(
            'object-contain transition-all duration-300',
            'opacity-75 saturate-0 group-hover:opacity-100 group-hover:saturate-100',
            'contrast-125 brightness-75 group-hover:contrast-100 group-hover:brightness-100',
            logoSize,
          )}
        />
      </div>

      {/* Content */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Link
            href={mainHref}
            {...(isMainExternal && {
              target: '_blank',
              rel: 'noopener noreferrer',
            })}
            className={cn(
              'font-normal transition-colors duration-300 hover:underline',
              isLarge ? 'text-xl lg:text-3xl' : 'text-lg lg:text-2xl',
            )}
          >
            {title}
          </Link>
          <Link
            href={url}
            {...(isExternal(url) && {
              target: '_blank',
              rel: 'noopener noreferrer',
            })}
          >
            <FiExternalLink className="h-4 w-4 text-gray-400 group-hover:text-black" />
          </Link>
        </div>

        {description && (
          <p className="text-sm text-muted-foreground group-hover:text-gray-700 line-clamp-3">
            {description}
          </p>
        )}

        {/* Additional tags */}
        {tags.length > 1 && (
          <div className="flex flex-wrap gap-1 mt-2">
            {tags.slice(1, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded group-hover:bg-gray-200 group-hover:text-gray-800"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

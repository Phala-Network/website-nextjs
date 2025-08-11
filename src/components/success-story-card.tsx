'use client'

import Link, { type LinkProps } from 'next/link'
import type React from 'react'
import { FaArrowRight } from 'react-icons/fa6'

import type { SuccessStory } from '@/data/success-stories-data'
import { cn } from '@/lib/utils'

export interface SuccessStoryCardProps
  extends Omit<LinkProps, 'href'>,
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  story: SuccessStory
  className?: string
}

export const SuccessStoryCard = ({
  story,
  className,
  ...props
}: SuccessStoryCardProps) => (
  <Link
    href={`/success-stories/${story.slug}`}
    className={cn(
      'block',
      story.bgColor,
      story.isDark && 'dark',
      'text-foreground relative overflow-hidden rounded-xl aspect-400/560 bg-cover bg-muted bg-left-bottom p-6 flex flex-col',
      className,
    )}
    style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url('${story.bgImage}')`,
    }}
    {...props}
  >
    <div className="flex items-start mb-auto">
      <div className="font-semibold text-xl md:text-2xl whitespace-pre-line flex-1">
        {story.category}
      </div>
      <div className="bg-white/80 rounded-full p-3 flex items-center justify-center shrink-0">
        <FaArrowRight className="w-4 h-4 text-black" />
      </div>
    </div>

    <div className="flex flex-col gap-4 mb-6">
      <div className="font-medium">{story.title}</div>
      <div className="text-sm line-clamp-3">{story.description}</div>
    </div>

    <div className="flex flex-col gap-1 mb-4">
      {story.stats.map((stat, index) => (
        <div
          key={`${story.id}-stat-${index}`}
          className="text-sm text-muted-foreground"
        >
          {stat}
        </div>
      ))}
    </div>
  </Link>
)

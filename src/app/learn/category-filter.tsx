'use client'

import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface CategoryFilterProps {
  tags: string[]
}

export default function CategoryFilter({ tags }: CategoryFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  // Priority categories to show first
  const priorityCategories = [
    'All',
    'Getting Started',
    'Tutorials',
    'Security',
    'AI',
    'Developers',
  ]

  // Combine priority categories with other tags
  const allCategories = [
    ...priorityCategories,
    ...tags.filter((tag) => !priorityCategories.includes(tag)).slice(0, 8),
  ]

  return (
    <div className="mb-12">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">
        Browse by Topic
      </h2>
      <div className="flex flex-wrap gap-2">
        {allCategories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setSelectedCategory(category)}
            className={cn(
              'transition-all duration-200',
              selectedCategory === category
                ? ''
                : 'hover:scale-105'
            )}
          >
            <Badge
              variant={selectedCategory === category ? 'default' : 'outline'}
              className={cn(
                'cursor-pointer px-4 py-2 text-sm font-medium',
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-accent'
              )}
            >
              {category}
            </Badge>
          </button>
        ))}
      </div>
    </div>
  )
}

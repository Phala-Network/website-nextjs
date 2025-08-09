'use client'

import { useState } from 'react'

import { cn } from '@/lib/utils'

interface PartnerTagFilterProps {
  allTags: string[]
  selectedTags: string[]
  onTagToggle: (tag: string) => void
  onClearAll: () => void
  filteredCount: number
  totalCount: number
}

export default function PartnerTagFilter({
  allTags,
  selectedTags,
  onTagToggle,
  onClearAll,
  filteredCount,
  totalCount,
}: PartnerTagFilterProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  // Show priority tags and most common ones first
  const priorityTags = ['AI', 'Partner', 'Builder', 'Blockchain', 'DeFi']
  const otherTags = allTags.filter((tag) => !priorityTags.includes(tag))
  const displayTags = isExpanded
    ? allTags
    : priorityTags.filter((tag) => allTags.includes(tag))

  return (
    <div className="flex flex-col gap-4 mb-8 text-center">
      <div className="flex items-center justify-center gap-4">
        <h3 className="text-lg font-semibold text-black-800">Filter by Tags</h3>
        {selectedTags.length > 0 && (
          <button
            onClick={onClearAll}
            className="text-sm text-gray-600 hover:text-gray-800 underline"
          >
            Clear all ({selectedTags.length})
          </button>
        )}
      </div>

      <div className="flex flex-wrap gap-2 justify-center">
        {displayTags.map((tag) => (
          <button
            key={tag}
            onClick={() => onTagToggle(tag)}
            className={cn(
              'px-3 py-1 text-xs rounded-sm border transition-all',
              selectedTags.includes(tag)
                ? 'bg-primary-500 text-white border-primary-500'
                : 'bg-white text-black-800 border-gray-300 hover:border-primary-500 hover:bg-primary-50',
            )}
          >
            {tag}
          </button>
        ))}

        {!isExpanded && otherTags.some((tag) => allTags.includes(tag)) && (
          <button
            onClick={() => setIsExpanded(true)}
            className={cn(
              'px-3 py-1 text-xs rounded-sm border',
              'bg-gray-100 text-gray-700 border-gray-300 hover:border-gray-400',
            )}
          >
            + More tags (
            {otherTags.filter((tag) => allTags.includes(tag)).length})
          </button>
        )}

        {isExpanded && (
          <button
            onClick={() => setIsExpanded(false)}
            className={cn(
              'px-3 py-1 text-xs rounded-sm border',
              'bg-gray-100 text-gray-700 border-gray-300 hover:border-gray-400',
            )}
          >
            Show less
          </button>
        )}
      </div>

      <div className="text-sm text-gray-600 text-center">
        {selectedTags.length > 0 ? (
          <>
            Showing {filteredCount} of {totalCount} partners
          </>
        ) : (
          <>Showing all {totalCount} partners</>
        )}
      </div>
    </div>
  )
}

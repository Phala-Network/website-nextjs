'use client'
import React, { useState } from 'react'
import TagLink from '@/components/TagLink'
import { cn } from '@/lib/utils'

interface Props {
  tags: string[]
  priorityTags: string[]
}

export default function TagSearch({ tags, priorityTags }: Props) {
  const [isExpanded, setIsExpanded] = useState(false)
  
  // Filter priority tags to only include ones that exist in the tags array
  const availablePriorityTags = priorityTags.filter(tag => tags.includes(tag))
  
  // Show priority tags by default, all tags when expanded
  const displayTags = isExpanded ? tags : availablePriorityTags
  
  // Only show expand button if there are more tags than priority tags
  const hasMoreTags = tags.length > availablePriorityTags.length

  return (
    <div className="flex flex-col items-center mt-12 w-full">
      <div className="flex flex-wrap gap-3 justify-center">
        {displayTags.map((tag, i) => (
          <div key={`${i}`}>
            <TagLink href={`/tags/${encodeURIComponent(tag)}`}>
              {tag}
            </TagLink>
          </div>
        ))}
      </div>
      
      {hasMoreTags && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={cn(
            "mt-4 px-4 py-2 text-sm font-medium rounded-lg transition-colors",
            "bg-white border border-gray-300 text-gray-700",
            "hover:bg-gray-50"
          )}
        >
          {isExpanded ? 'Show Less' : `Show All (${tags.length})`}
        </button>
      )}
    </div>
  )
}
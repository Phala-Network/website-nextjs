'use client'
import React, { useState } from 'react'
import TagLink from '@/components/TagLink'
import { Button } from '@/components/ui/button'
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
    <div className="flex flex-col items-center mt-8 w-full">
      <div className="flex flex-wrap gap-4 justify-center max-w-4xl">
        {displayTags.map((tag, i) => (
          <div key={`${i}`}>
            <TagLink href={`/tags/${encodeURIComponent(tag)}`}>
              {tag}
            </TagLink>
          </div>
        ))}
      </div>
      
      {hasMoreTags && (
        <Button
          variant="outline"
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-6"
        >
          {isExpanded ? 'Show Less' : `Show All (${tags.length})`}
        </Button>
      )}
    </div>
  )
}
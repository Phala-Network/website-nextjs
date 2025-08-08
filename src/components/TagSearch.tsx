import React, { useState } from 'react'
import { cn } from '@/lib/utils'
import TagLink from '@/components/TagLink'

interface TagSearchProps {
  tags: string[]
  priorityTags: string[]
}

export default function TagSearch({ tags, priorityTags }: TagSearchProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [isExpanded, setIsExpanded] = useState(false)
  
  const otherTags = tags.filter(tag => !priorityTags.includes(tag))
  const filteredTags = otherTags.filter(tag => 
    tag.toLowerCase().includes(searchTerm.toLowerCase())
  )
  
  return (
    <div className="flex flex-wrap gap-3 mt-12 w-full">
      {/* Priority tags - always visible */}
      {priorityTags.map((tag, i) => (
        <div key={`priority-${i}`}>
          <TagLink href={`/tags/${encodeURIComponent(tag)}`}>
            {tag}
          </TagLink>
        </div>
      ))}
      
      {/* Search button/input for other tags */}
      {otherTags.length > 0 && (
        <>
          {!isExpanded ? (
            <button
              onClick={() => setIsExpanded(true)}
              className={cn(
                "text-xs text-black-800 bg-gray-200 rounded-sm px-3 py-1",
                "transition-all hover:bg-gray-300",
                "border border-gray-300"
              )}
            >
              + More tags ({otherTags.length})
            </button>
          ) : (
            <div className="w-full flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Search tags..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={cn(
                    "px-3 py-1 text-xs rounded-sm border border-gray-300",
                    "focus:outline-none focus:ring-2 focus:ring-green-500"
                  )}
                />
                <button
                  onClick={() => {
                    setIsExpanded(false)
                    setSearchTerm('')
                  }}
                  className={cn(
                    "text-xs text-black-800 bg-gray-200 rounded-sm px-3 py-1",
                    "transition-all hover:bg-gray-300"
                  )}
                >
                  Close
                </button>
              </div>
              <div className="flex flex-wrap gap-3">
                {filteredTags.slice(0, 10).map((tag, i) => (
                  <div key={`filtered-${i}`}>
                    <TagLink href={`/tags/${encodeURIComponent(tag)}`}>
                      {tag}
                    </TagLink>
                  </div>
                ))}
                {filteredTags.length === 0 && searchTerm && (
                  <span className="text-sm text-gray-500">No tags found</span>
                )}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}
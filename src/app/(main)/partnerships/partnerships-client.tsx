'use client'

import { useMemo, useState } from 'react'

import PartnerTagFilter from './partner-tag-filter'
import type { PartnerItem } from './partners-data'
import PartnersGrid from './partners-grid'

interface PartnershipsClientProps {
  partnersData: PartnerItem[]
}

export default function PartnershipsClient({
  partnersData,
}: PartnershipsClientProps) {
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  // Get all unique tags from items
  const allTags = useMemo(() => {
    const tagSet = new Set<string>()
    partnersData.forEach((item) => {
      item.tags.forEach((tag) => tagSet.add(tag))
    })
    return Array.from(tagSet).sort()
  }, [partnersData])

  // Filter items based on selected tags
  const filteredItems = useMemo(() => {
    if (selectedTags.length === 0) return partnersData
    return partnersData.filter((item) =>
      selectedTags.some((selectedTag) => item.tags.includes(selectedTag)),
    )
  }, [selectedTags, partnersData])

  const handleTagToggle = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    )
  }

  const handleClearAll = () => {
    setSelectedTags([])
  }

  return (
    <>
      {/* Tag Filter - Centered */}
      <div className="mb-8 md:mb-14 lg:mb-16">
        <PartnerTagFilter
          allTags={allTags}
          selectedTags={selectedTags}
          onTagToggle={handleTagToggle}
          onClearAll={handleClearAll}
          filteredCount={filteredItems.length}
          totalCount={partnersData.length}
        />
      </div>

      <PartnersGrid filteredItems={filteredItems} />
    </>
  )
}

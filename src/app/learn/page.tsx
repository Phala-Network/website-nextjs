import type { Metadata } from 'next'

import { env } from '@/env'
import { queryDatabase } from '@/lib/notion-client'
import type { ParsedListPage } from '@/lib/notion-client'
import HeroBlog14 from './sections/hero-blog14'
import WhatIsBlog1 from './sections/what-is-blog1'
import TagsSkills2 from './sections/tags-skills2'
import HowToBlog1 from './sections/how-to-blog1'
import ComparisonsBlog24 from './sections/comparisons-blog24'
import UseCasesSection from './sections/use-cases'
import AdvancedSection from './sections/advanced'

// Skip build-time generation, render on first request and cache
export const dynamic = 'force-dynamic'
export const revalidate = 7200

async function getLearnData() {
  // Get all published articles
  const { pages } = await queryDatabase({
    database_id: env.NOTION_LEARN_DATABASE_ID,
    filter: {
      and: [
        {
          property: 'Status',
          status: { equals: 'Published' },
        },
        {
          property: 'Tags',
          multi_select: { does_not_contain: 'Changelog' },
        },
        {
          property: 'Tags',
          multi_select: { does_not_contain: 'not-listed' },
        },
      ],
    },
    sorts: [
      { property: 'Published Time', direction: 'descending' },
    ],
  })

  // Categorize articles by tags
  const whatIsArticles: ParsedListPage[] = []
  const howToArticles: ParsedListPage[] = []
  const useCasesArticles: ParsedListPage[] = []
  const comparisonsArticles: ParsedListPage[] = []
  const advancedArticles: ParsedListPage[] = []
  const highlightArticles: ParsedListPage[] = []

  // Count articles by tag
  const tagCounts: Record<string, number> = {}

  for (const page of pages) {
    // Count tags
    for (const tag of page.tags) {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1
    }

    const tags = page.tags as string[]

    // Check for highlight/pinned first
    if (tags.some(tag => ['Pinned', 'Weekly report', 'Monthly report'].includes(tag))) {
      highlightArticles.push(page)
    }

    // Categorize by primary tag
    if (tags.includes('what is')) {
      whatIsArticles.push(page)
    }
    if (tags.includes('How to') || tags.includes('Tips & Guide')) {
      howToArticles.push(page)
    }
    if (tags.includes('Usecases')) {
      useCasesArticles.push(page)
    }
    if (tags.includes('VS')) {
      comparisonsArticles.push(page)
    }
    if (tags.includes('Advanced') || tags.includes('Advance')) {
      advancedArticles.push(page)
    }
  }

  // Create tags array for Skills2 component
  const topTags = Object.entries(tagCounts)
    .filter(([tag]) => !['Changelog', 'not-listed', 'Pinned', 'Weekly report', 'Monthly report'].includes(tag))
    .sort((a, b) => b[1] - a[1])
    .slice(0, 12) // Top 12 tags
    .map(([name, count]) => ({
      name,
      count,
      category: getCategoryForTag(name),
    }))

  return {
    featuredArticle: highlightArticles[0] || pages[0],
    popularArticles: pages.slice(1, 4), // Next 3 articles for popular section
    whatIsArticles,
    howToArticles,
    useCasesArticles,
    comparisonsArticles,
    advancedArticles,
    topTags,
    allArticles: pages,
  }
}

function getCategoryForTag(tag: string): string {
  const categoryMap: Record<string, string> = {
    'Basic': 'fundamentals',
    'what is': 'concepts',
    'How to': 'practical guides',
    'Tips & Guide': 'best practices',
    'Usecases': 'applications',
    'VS': 'comparisons',
    'Advanced': 'in-depth',
    'Advance': 'expert level',
  }
  return categoryMap[tag] || 'topic'
}

export const metadata: Metadata = {
  title: 'Learn Confidential Computing - Phala Network',
  description:
    'Master confidential computing from basics to advanced. Learn what TEE is, how to build secure AI, explore real-world use cases, and dive into advanced topics.',
}

export default async function LearnPage() {
  const data = await getLearnData()

  return (
    <div className="min-h-screen">
      {/* 1. Blog14-style Hero with Featured + Popular */}
      <HeroBlog14
        featuredArticle={data.featuredArticle}
        popularArticles={data.popularArticles}
      />

      {/* 2. Blog1-style What Is Section */}
      <WhatIsBlog1 articles={data.whatIsArticles} />

      {/* 3. Skills2-style Tags Showcase */}
      <TagsSkills2 tags={data.topTags} />

      {/* 4. Blog1-style How To Section */}
      <HowToBlog1 articles={data.howToArticles} />

      {/* 5. Blog24-style Comparisons */}
      <ComparisonsBlog24 articles={data.comparisonsArticles} />

      {/* 6. Use Cases */}
      <UseCasesSection articles={data.useCasesArticles} />

      {/* 7. Advanced Topics */}
      <AdvancedSection articles={data.advancedArticles} />
    </div>
  )
}

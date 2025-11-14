import type { Metadata } from 'next'

import { env } from '@/env'
import { queryDatabase } from '@/lib/notion-client'
import type { ParsedListPage } from '@/lib/notion-client'
import LearnHero from './sections/hero'
import WhatIsSection from './sections/what-is'
import HowToSection from './sections/how-to'
import UseCasesSection from './sections/use-cases'
import ComparisonsSection from './sections/comparisons'
import AdvancedSection from './sections/advanced'

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

  for (const page of pages) {
    // Check for highlight/pinned first
    if (page.tags.some(tag => ['Pinned', 'Weekly report', 'Monthly report'].includes(tag))) {
      highlightArticles.push(page)
    }

    // Categorize by primary tag
    if (page.tags.includes('what is')) {
      whatIsArticles.push(page)
    }
    if (page.tags.includes('How to') || page.tags.includes('Tips & Guide')) {
      howToArticles.push(page)
    }
    if (page.tags.includes('Usecases')) {
      useCasesArticles.push(page)
    }
    if (page.tags.includes('VS')) {
      comparisonsArticles.push(page)
    }
    if (page.tags.includes('Advanced') || page.tags.includes('Advance')) {
      advancedArticles.push(page)
    }
  }

  return {
    highlightArticle: highlightArticles[0] || pages[0],
    whatIsArticles,
    howToArticles,
    useCasesArticles,
    comparisonsArticles,
    advancedArticles,
    allArticles: pages,
  }
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
      <LearnHero featuredArticle={data.highlightArticle} />

      <WhatIsSection articles={data.whatIsArticles} />

      <HowToSection articles={data.howToArticles} />

      <UseCasesSection articles={data.useCasesArticles} />

      <ComparisonsSection articles={data.comparisonsArticles} />

      <AdvancedSection articles={data.advancedArticles} />
    </div>
  )
}

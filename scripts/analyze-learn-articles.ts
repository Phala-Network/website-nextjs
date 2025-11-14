#!/usr/bin/env tsx

import { queryDatabase } from '../src/lib/notion-client'

async function analyzeArticles() {
  const result = await queryDatabase({
    database_id: '2a10317e04a181c0842bee5ad94caf0b',
    filter: {
      property: 'Status',
      status: { equals: 'Published' }
    },
    sorts: [{ property: 'Published Time', direction: 'descending' }]
  })

  console.log(`\nTotal Published Articles: ${result.pages.length}\n`)
  console.log('Articles by Tag:\n')

  const articlesByTag: Record<string, typeof result.pages> = {}

  for (const page of result.pages) {
    for (const tag of page.tags) {
      if (!articlesByTag[tag]) {
        articlesByTag[tag] = []
      }
      articlesByTag[tag].push(page)
    }
  }

  // Sort tags by article count
  const sortedTags = Object.entries(articlesByTag).sort((a, b) => b[1].length - a[1].length)

  for (const [tag, articles] of sortedTags) {
    console.log(`${tag} (${articles.length} articles):`)
    for (const article of articles) {
      console.log(`  - ${article.title}`)
    }
    console.log()
  }
}

analyzeArticles().catch(console.error)

#!/usr/bin/env bun

import { isFullPage } from '@notionhq/client'
import * as R from 'ramda'

import { env } from '@/env'
import { notion, queryDatabase } from '@/lib/notion-client'
import { generateSlug } from '@/lib/post'

const BATCH_SIZE = 10

interface PublishResult {
  total: number
  successful: number
  failed: number
  skipped: number
  errors: Array<{ id: string; title: string; error: string }>
}

async function fetchAllLearnArticles() {
  console.log('Fetching all learn articles from Notion...\n')

  const { pages } = await queryDatabase({
    database_id: env.NOTION_LEARN_DATABASE_ID,
    sorts: [
      {
        property: 'Last Edited Time',
        direction: 'descending',
      },
    ],
  })

  console.log(`Found ${pages.length} articles\n`)
  return pages
}

async function publishArticle(
  pageId: string,
): Promise<{ success: boolean; error?: string; skipped?: boolean }> {
  try {
    const page = await notion.pages.retrieve({ page_id: pageId })

    if (!isFullPage(page)) {
      return { success: false, error: 'Not a full page' }
    }

    // Get current properties
    let slug = R.map(
      R.prop('plain_text'),
      R.pathOr([], ['Custom URL', 'rich_text'], page.properties),
    )
      .join(' ')
      .split('?')[0]

    const title = R.map(
      R.prop('plain_text'),
      R.pathOr([], ['Title', 'title'], page.properties),
    ).join(' ')

    const status: string = R.pathOr(
      'Drafting',
      ['Status', 'status', 'name'],
      page.properties,
    )

    // Skip if already published with custom URL
    if (status === 'Published' && slug) {
      return { success: true, skipped: true }
    }

    // biome-ignore lint/suspicious/noExplicitAny: any
    const properties: Record<string, any> = {}

    // Set status to Published if not already
    if (status !== 'Published') {
      properties['Status'] = {
        status: { name: 'Published' },
      }
      properties['Published Time'] = {
        date: { start: new Date().toISOString() },
      }
    }

    // Generate and set Custom URL if missing
    if (!slug) {
      const normalizedSlug = generateSlug(title)
      slug = `/${normalizedSlug}`
      properties['Custom URL'] = {
        rich_text: [{ text: { content: slug } }],
      }
    } else {
      // Normalize existing slug
      const normalizedSlug = slug.replace(/^\//, '')
      const validSlug = generateSlug(normalizedSlug)
      if (slug !== `/${validSlug}`) {
        slug = `/${validSlug}`
        properties['Custom URL'] = {
          rich_text: [{ text: { content: slug } }],
        }
      }
    }

    // Update page if there are properties to update
    if (Object.keys(properties).length > 0) {
      await notion.pages.update({
        page_id: page.id,
        properties,
      })
    }

    return { success: true, skipped: status === 'Published' && !!slug }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}

async function batchPublish() {
  const result: PublishResult = {
    total: 0,
    successful: 0,
    failed: 0,
    skipped: 0,
    errors: [],
  }

  try {
    const pages = await fetchAllLearnArticles()
    result.total = pages.length

    console.log('Starting batch publish...\n')

    // Process in batches
    for (let i = 0; i < pages.length; i += BATCH_SIZE) {
      const batch = pages.slice(i, i + BATCH_SIZE)
      const batchNum = Math.floor(i / BATCH_SIZE) + 1
      const totalBatches = Math.ceil(pages.length / BATCH_SIZE)

      console.log(`Processing batch ${batchNum}/${totalBatches}...`)

      const results = await Promise.allSettled(
        batch.map(async (page) => {
          const publishResult = await publishArticle(page.id)

          if (publishResult.skipped) {
            console.log(`  ○ ${page.title} (already published)`)
          } else if (publishResult.success) {
            console.log(`  ✓ ${page.title}`)
          } else {
            console.log(`  ✗ ${page.title}`)
          }

          return { ...publishResult, page }
        }),
      )

      // Count results
      for (const result_item of results) {
        if (result_item.status === 'fulfilled') {
          if (result_item.value.skipped) {
            result.skipped++
          } else if (result_item.value.success) {
            result.successful++
          } else {
            result.failed++
            result.errors.push({
              id: result_item.value.page.id,
              title: result_item.value.page.title,
              error: result_item.value.error || 'Unknown error',
            })
          }
        } else {
          result.failed++
        }
      }

      // Small delay between batches
      if (i + BATCH_SIZE < pages.length) {
        await new Promise((resolve) => setTimeout(resolve, 500))
      }
    }
  } catch (error) {
    console.error('\nError during batch publish:', error)
    process.exit(1)
  }

  // Print summary
  console.log('\n' + '='.repeat(50))
  console.log('Batch Publish Summary')
  console.log('='.repeat(50))
  console.log(`Total articles:      ${result.total}`)
  console.log(`Published:           ${result.successful}`)
  console.log(`Already published:   ${result.skipped}`)
  console.log(`Failed:              ${result.failed}`)

  if (result.errors.length > 0) {
    console.log('\nFailed articles:')
    for (const error of result.errors) {
      console.log(`  ✗ ${error.title}`)
      console.log(`    ID: ${error.id}`)
      console.log(`    Error: ${error.error}`)
    }
  }

  if (result.failed > 0) {
    process.exit(1)
  }
}

console.log('Learn Articles Batch Publisher')
console.log('='.repeat(50))
console.log(`Batch size: ${BATCH_SIZE}`)
console.log('='.repeat(50) + '\n')

batchPublish().catch((error) => {
  console.error('Unhandled error:', error)
  process.exit(1)
})

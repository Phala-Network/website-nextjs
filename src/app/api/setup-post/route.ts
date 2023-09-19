import OpenAI from 'openai'
import type { ChatCompletionMessageParam } from 'openai/resources/chat'
import { isFullPage, collectPaginatedAPI } from '@notionhq/client'

import { notion, n2m } from '@/lib/notion-client'
import attempt from '@/lib/attempt-promise'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
})

function generateSlug(title: string): string {
  const sanitizedTitle = title.toLowerCase().replace(/[^\w\d\s]+/g, '')
  const slug = sanitizedTitle.replace(/\s+/g, '-')
  return slug
}

const SUMMARY_PROMPT = 'Summarise the content in 150 to 200 words. Do not generate a summary in list format. Only provide the generated summary as the response, do not start your responses with an introductory sentence.'

export async function POST(req: Request) {
  const json = await req.json()
  const { title } = json
  const database = await notion.databases.query({
    database_id: process.env.NOTION_POSTS_DATABASE_ID!,
    filter: {
      property: 'title',
      rich_text: {
        contains: title,
      },
    },
  })
  const page = await notion.pages.retrieve({ page_id: database.results[0].id })
  if (!isFullPage(page)) {
    throw new Error('Page is not a full page.')
  }
  const properties: Record<string, any> = {
    'Custom URL': {
      rich_text: [{
        text: { content: `/${generateSlug(title)}` }
      }]
    }
  }
  if (process.env.OPENAI_API_KEY) {
    const blocks = await collectPaginatedAPI(notion.blocks.children.list, {
      block_id: page.id,
    })
    const markdown = n2m.toMarkdownString((await n2m.blocksToMarkdown(blocks))).parent
    const messages: ChatCompletionMessageParam[] = [
      { role: 'system', content: SUMMARY_PROMPT },
      { role: 'user', content: markdown },
    ]
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages,
    })
    properties['Summary'] = {
      rich_text: [{
        text: { content: completion.choices[0].message.content }
      }]
    }
  }
  const [, res] = await attempt(notion.pages.update({
    page_id: page.id,
    properties,
  }))
  return new Response(JSON.stringify({
    succeed: !!res,
  }), {
    status: 200,
  })
}

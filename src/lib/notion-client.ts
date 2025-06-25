import {
  Client,
  collectPaginatedAPI,
  isFullPage,
  isFullBlock,
} from '@notionhq/client'
import { NotionToMarkdown } from 'notion-to-md'
import {
  PageObjectResponse,
  BlockObjectResponse,
  QueryDatabaseParameters,
} from '@notionhq/client/build/src/api-endpoints'
import * as R from 'ramda'

export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

export const n2m = new NotionToMarkdown({
  notionClient: notion,
  config:{
    parseChildPages: false
  }
})

export interface ParsedPage {
  id: string
  cover: PageObjectResponse['cover'],
  title: string
  slug: string
  tags: string[]
  blocks: ParsedBlock[]
  publishedTime: string
  status: 'Published' | 'Hidden' | 'Drafting' | 'Raw Idea'
  markdown: string
}

export interface ParsedListPage {
  id: string
  cover: PageObjectResponse['cover'],
  title: string
  slug: string
  tags: string[]
  publishedTime: string
  publishedDate: string
  createdTime: string
}

export type ParsedBlock = BlockObjectResponse & {
  children?: ParsedBlock[]
}

export function removeMediumFormat(url: string): string {
  const regex = /^https?:\/\/[\w.-]+\.medium\.com(?:\/v2)?(.*?)\/([^\/]+)$/
  const match = url.match(regex)
  if (match && match.length === 3) {
    const formatPart = match[1]
    const baseUrl = url.replace(formatPart, '')
    return baseUrl
  }
  return url
}

export function isMediumUrl(url: string): boolean {
  const regex = /^https?:\/\/[\w.-]+\.medium\.com/
  return regex.test(url)
}

export async function getParsedPage(
  page_id: string
): Promise<ParsedPage | null> {
  const page = await notion.pages.retrieve({ page_id })
  if (!isFullPage(page)) {
    console.warn('Page is not a full page.')
    return null
  }
  const blocks = await collectPaginatedAPI(notion.blocks.children.list, {
    block_id: page_id,
  })
  const fullBlocks: BlockObjectResponse[] = blocks.filter(isFullBlock)
  const parsedBlocks = await Promise.all(fullBlocks.map(parsePageBlock))
  const title = R.pipe(
    R.pathOr([], ['Title', 'title']),
    R.map(R.prop('plain_text')),
    R.join('')
  )(page.properties)
  const slug = R.pipe(
    R.pathOr([], ['Custom URL', 'rich_text']),
    R.map(R.prop('plain_text')),
    R.join(' ')
  )(page.properties).split('?')[0]
  const tags = R.map(
    R.prop('name'),
    R.pathOr([], ['Tags', 'multi_select'], page.properties)
  )
  const publishedTime = R.pathOr('', ['Published Time', 'date', 'start'], page.properties)
  const status = R.pathOr('Drafting', ['Status', 'status', 'name'], page.properties)
  const markdown = n2m.toMarkdownString((await n2m.blocksToMarkdown(blocks))).parent
  return {
    id: page.id,
    cover: page.cover,
    title,
    slug,
    tags: R.without(['Pinned', 'Changelog'], tags),
    status,
    blocks: parsedBlocks,
    publishedTime,
    markdown,
  }
}

async function parsePageBlock(
  block: BlockObjectResponse
): Promise<ParsedBlock> {
  const commonFields = {
    id: block.id,
    type: block.type,
  }
  switch (block.type) {
    case 'column':
    case 'breadcrumb':
    case 'column_list':
    case 'link_to_page':
    case 'divider':
    case 'table_of_contents':
    case 'unsupported':
      return {
        ...commonFields,
      } as BlockObjectResponse

    case 'equation':
    case 'link_preview':
    case 'table_row':
    case 'code':
    case 'child_database':
    case 'bookmark':
    case 'embed':
    case 'file':
    case 'image':
    case 'pdf':
    case 'video':
    case 'audio':
      return {
        ...commonFields,
        [block.type]: block[block.type as never],
      } as BlockObjectResponse
    case 'table':
    case 'bulleted_list_item':
    case 'callout':
    case 'heading_1':
    case 'heading_2':
    case 'heading_3':
    case 'numbered_list_item':
    case 'paragraph':
    case 'quote':
    case 'template':
    case 'to_do':
    case 'toggle':
    case 'synced_block':
    case 'child_page':
      return withPotentialChildren(block, commonFields as BlockObjectResponse)

    default:
      ;((block: never) => {
        console.warn(
          { type: (block as { type: string }).type },
          'Unknown block type.'
        )
      })(block as never)
      return {
        ...commonFields,
      } as BlockObjectResponse
  }
}

async function withPotentialChildren(
  block: BlockObjectResponse,
  commonFields: BlockObjectResponse
): Promise<ParsedBlock> {
  if (!block.has_children) {
    return {
      ...commonFields,
      [block.type]: block[block.type as never],
    }
  }
  const parsedChildren: ParsedBlock[] = []
  for await (const child of iteratePaginatedWithRetries(
    notion.blocks.children.list,
    {
      block_id: block.id,
    }
  )) {
    if (isFullBlock(child)) {
      parsedChildren.push(await parsePageBlock(child))
    }
  }
  return {
    ...commonFields,
    [block.type]: block[block.type as never],
    children: parsedChildren,
  }
}

function isParsedPage(page: ParsedPage | null): page is ParsedPage {
  return page !== null
}

export async function getParsedPagesByProperties({
  database_id,
  properties,
}: {
  database_id: string
  properties: Record<string, any>
}): Promise<ParsedPage[]> {
  const response = await fetch(`${process.env.NOTION_BACKEND_PREFIX}/blog/pages-by-properties`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      database_id,
      properties,
    }),
  })

  if (!response.ok) {
    throw new Error(`Failed to get pages by properties: ${response.status} ${response.statusText}`)
  }

  const { pages } = await response.json()
  return pages
}

export async function clearPagesByPropertiesCache(properties: Record<string, any>): Promise<void> {
  const response = await fetch(`${process.env.NOTION_BACKEND_PREFIX}/blog/cache/clear-pages-by-properties`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      database_id: process.env.NOTION_POSTS_DATABASE_ID,
      properties,
    }),
  })

  if (!response.ok) {
    throw new Error(`Failed to clear pages by properties cache: ${response.status} ${response.statusText}`)
  }
}

export async function clearQueryDatabaseCache(): Promise<void> {
  const response = await fetch(`${process.env.NOTION_BACKEND_PREFIX}/blog/cache/clear-query-database`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      database_id: process.env.NOTION_POSTS_DATABASE_ID,
    }),
  })

  if (!response.ok) {
    throw new Error(`Failed to clear query database cache: ${response.status} ${response.statusText}`)
  }
}

interface IPaginatedList<T> {
  object: 'list'
  results: T[]
  next_cursor: string | null
  has_more: boolean
}

async function* iteratePaginatedWithRetries<
  Args extends {
    start_cursor?: string
  },
  Item
>(
  listFn: (args: Args) => Promise<IPaginatedList<Item>>,
  firstPageArgs: Args,
  options: { retries: number; timeout: number } = {
    retries: 5,
    timeout: 500,
  }
): AsyncIterableIterator<Item> {
  let nextCursor: string | null | undefined = firstPageArgs.start_cursor
  let resultPageIdx = 0
  do {
    let tries = 0
    let response: IPaginatedList<Item> | null = null
    while (tries < options.retries) {
      try {
        response = await listFn({
          ...firstPageArgs,
          start_cursor: nextCursor,
        })
        break
      } catch (error) {
        console.error(
          { error },
          'Error while iterating on Notion paginated API.'
        )
        tries += 1
        if (tries >= options.retries) {
          throw error
        }
        const sleepTime = options.timeout ** tries
        console.info(`Retrying after a delay of ${sleepTime} ms.`)
        await new Promise((resolve) => setTimeout(resolve, sleepTime))
        continue
      }
    }

    if (!response) {
      throw new Error('Unreachable.')
    }

    yield* response.results
    nextCursor = response.next_cursor
    resultPageIdx += 1
  } while (nextCursor)
}

export async function queryDatabase(args: QueryDatabaseParameters) {
  const response = await fetch(`${process.env.NOTION_BACKEND_PREFIX}/blog/query-database`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(args),
  })

  if (!response.ok) {
    throw new Error(`Failed to query database: ${response.status} ${response.statusText}`)
  }

  const { next_cursor, pages } = await response.json()

  return {
    next_cursor,
    pages,
  }
}

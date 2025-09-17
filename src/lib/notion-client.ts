import {
  Client,
  collectPaginatedAPI,
  isFullBlock,
  isFullPage,
} from '@notionhq/client'
import type {
  BlockObjectResponse,
  PageObjectResponse,
  QueryDatabaseParameters,
} from '@notionhq/client/build/src/api-endpoints'
import { format } from 'date-fns'
import { NotionToMarkdown } from 'notion-to-md'
import * as R from 'ramda'

import { env } from '@/env'

export const notion = env.NOTION_TOKEN ? new Client({
  auth: env.NOTION_TOKEN,
}) : null

const n2m = notion ? new NotionToMarkdown({
  notionClient: notion,
  config: {
    parseChildPages: false,
  },
}) : null

export interface ParsedPage {
  id: string
  cover: PageObjectResponse['cover']
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
  cover: PageObjectResponse['cover']
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

export function isMediumUrl(url: string): boolean {
  const regex = /^https?:\/\/[\w.-]+\.medium\.com/
  return regex.test(url)
}

export async function getParsedPage(
  page_id: string,
): Promise<ParsedPage | null> {
  if (!notion) return null
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
    R.join(''),
  )(page.properties)
  const slug = R.pipe(
    R.pathOr([], ['Custom URL', 'rich_text']),
    R.map(R.prop('plain_text')),
    R.join(' '),
  )(page.properties).split('?')[0]
  const tags = R.map(
    R.prop('name'),
    R.pathOr([], ['Tags', 'multi_select'], page.properties),
  )
  const publishedTime = R.pathOr(
    '',
    ['Published Time', 'date', 'start'],
    page.properties,
  )
  const status = R.pathOr(
    'Drafting',
    ['Status', 'status', 'name'],
    page.properties,
  )
  const markdown = n2m ? n2m.toMarkdownString(
    await n2m.blocksToMarkdown(blocks),
  ).parent : ''
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
  block: BlockObjectResponse,
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
          'Unknown block type.',
        )
      })(block as never)
      return {
        ...commonFields,
      } as BlockObjectResponse
  }
}

async function withPotentialChildren(
  block: BlockObjectResponse,
  commonFields: BlockObjectResponse,
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
    },
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
  if (!notion) return []
  const database = await notion.databases.query({
    database_id,
    filter: {
      and: Object.entries(properties).map(([key, value]) => {
        if (typeof value === 'object') {
          return Object.assign(
            {
              property: key,
            },
            value,
          )
        }
        return {
          property: key,
          rich_text: {
            equals: value,
          },
        }
      }),
    },
  })
  const pages = (
    await Promise.all(
      database.results.map((result) => getParsedPage(result.id)),
    )
  ).filter(isParsedPage)
  return pages
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
  Item,
>(
  listFn: (args: Args) => Promise<IPaginatedList<Item>>,
  firstPageArgs: Args,
  options: { retries: number; timeout: number } = {
    retries: 5,
    timeout: 500,
  },
): AsyncIterableIterator<Item> {
  let nextCursor: string | null | undefined = firstPageArgs.start_cursor
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
          'Error while iterating on Notion paginated API.',
        )
        tries += 1
        if (tries >= options.retries) {
          throw error
        }
        const sleepTime = options.timeout ** tries
        console.info(`Retrying after a delay of ${sleepTime} ms.`)
        await new Promise((resolve) => setTimeout(resolve, sleepTime))
      }
    }

    if (!response) {
      throw new Error('Unreachable.')
    }

    yield* response.results
    nextCursor = response.next_cursor
  } while (nextCursor)
}

export async function queryDatabase(args: QueryDatabaseParameters) {
  if (!notion) return { next_cursor: null, pages: [] }
  const database = await notion.databases.query(args)
  const { results = [], next_cursor } = database
  const pages = []
  for (const page of results) {
    // @ts-expect-error missing from Notion package
    const { id, properties, cover } = page
    const title = R.pipe(
      R.pathOr([], ['Title', 'title']),
      R.map(R.prop('plain_text')),
      R.join(''),
    )(properties).replace('&nbsp;', ' ')
    const slug = R.pipe(
      R.pathOr([], ['Custom URL', 'rich_text']),
      R.map(R.prop('plain_text')),
      R.join(' '),
    )(properties).split('?')[0]
    const tags = R.map(
      R.prop('name'),
      R.pathOr([], ['Tags', 'multi_select'], properties),
    )
    const publishedTime = R.pathOr(
      '',
      ['Published Time', 'date', 'start'],
      properties,
    )
    const publishedDate =
      publishedTime && format(new Date(publishedTime), 'yyyy-MM-dd')
    const createdTime = R.pathOr(
      '',
      ['Created Time', 'created_time'],
      properties,
    )
    pages.push({
      id,
      cover,
      title,
      slug,
      tags: R.without(['Pinned', 'Changelog'], tags),
      publishedTime,
      publishedDate,
      createdTime,
    })
  }
  return {
    next_cursor,
    pages,
  }
}

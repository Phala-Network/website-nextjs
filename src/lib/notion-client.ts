import {
  Client,
  collectPaginatedAPI,
  isFullPage,
  isFullBlock,
} from '@notionhq/client'
import {
  PageObjectResponse,
  BlockObjectResponse,
} from '@notionhq/client/build/src/api-endpoints'

export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

type PageObjectProperties = PageObjectResponse['properties']
type PropertyKeys = keyof PageObjectProperties
type PropertyTypes = PageObjectProperties[PropertyKeys]['type']

export interface ParsedPage {
  id: string
  coverUrl: string
  title: string
  properties: ParsedProperty[]
  blocks: ParsedBlock[]
}

export type ParsedBlock = BlockObjectResponse & {
  children?: ParsedBlock[]
}

export type ParsedProperty = {
  key: string
  id: string
  type: PropertyTypes
  text: string | null
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
  const properties = Object.entries(page.properties).map(([key, value]) => ({
    key,
    id: value.id,
    type: value.type,
    text: parsePropertyText(value),
  }))
  const titleProperty = properties.find((p) => p.type === 'title')?.text
  const coverUrl = page.cover
    ? 'external' in page.cover
      ? page.cover.external.url
      : page.cover.file.url
    : ''
  return {
    id: page.id,
    coverUrl,
    title: titleProperty || '',
    properties,
    blocks: parsedBlocks,
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

function parsePropertyText(
  property: PageObjectProperties[PropertyKeys]
): string | null {
  switch (property.type) {
    case 'number':
      return property.number?.toString() || null
    case 'url':
      return property.url || null
    case 'select':
      return property.select?.name || null
    case 'multi_select':
      return property.multi_select.length > 0
        ? property.multi_select.map((select) => select.name).join(', ')
        : null
    case 'status':
      return property.status?.name || null
    case 'date':
      if (property.date?.start && property.date?.end) {
        return `${property.date.start} - ${property.date.end}`
      }
      return property.date?.start || null
    case 'email':
      return property.email || null
    case 'phone_number':
      return property.phone_number || null
    case 'checkbox':
      return property.checkbox ? 'Yes' : 'No'
    case 'files':
      return property.files.length > 0
        ? property.files
            .map((f) => ({
              name: f.name,
              url: 'external' in f ? f.external.url : f.file.url,
            }))
            .map(({ name, url }) => `[${name}](${url})`)
            .join(', ')
        : null
    case 'created_by':
      return 'name' in property.created_by ? property.created_by?.name : null
    case 'created_time':
      return property.created_time
    case 'last_edited_by':
      return 'name' in property.last_edited_by
        ? property.last_edited_by?.name
        : null
    case 'last_edited_time':
      return property.last_edited_time
    case 'title':
      return property.title.map((t) => t.plain_text).join(' ')
    case 'rich_text':
      return property.rich_text.map((t) => t.plain_text).join(' ')
    case 'people':
      return property.people.length > 0
        ? property.people.map((p) => ('name' in p ? p.name : p.id)).join(', ')
        : null
    case 'relation':
    case 'rollup':
    case 'formula':
    // @ts-expect-error missing from Notion package
    case 'verification':
      return null
    default:
      ;((property: never) => {
        console.warn(
          { property_type: (property as { type: string }).type },
          'Unknown property type.'
        )
      })(property as never)
      return null
  }
}

export async function getParsedPageByProtertyText({
  database_id,
  property,
  property_text,
}: {
  database_id: string
  property: string
  property_text: string
}): Promise<ParsedPage | null> {
  const database = await notion.databases.query({
    database_id,
    filter: {
      property,
      rich_text: {
        contains: property_text,
      },
    },
  })
  if (database.results.length === 0) {
    return null
  }
  const page = await getParsedPage(database.results[0].id)
  return page
}

interface IPaginatedList<T> {
  object: 'list'
  results: T[]
  next_cursor: string | null
  has_more: boolean
}

export async function* iteratePaginatedWithRetries<
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

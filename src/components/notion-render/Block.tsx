'use client'
import { atom, useAtomValue } from 'jotai'
import type React from 'react'
import { createElement, useMemo } from 'react'

import type { ParsedBlock } from '@/lib/notion-client'
import type { BlockAtom } from './atoms'
import BulletedListItem from './BulletedListItem'
import Callout from './Callout'
import Code from './Code'
import Column from './Column'
import ColumnList from './ColumnList'
import Divider from './Divider'
import Heading from './Heading'
import Image from './Image'
import NumberedListItem from './NumberedListItem'
import Paragraph from './Paragraph'
import Quote from './Quote'
import Table from './Table'
import Todo from './Todo'
import Toggle from './Toggle'
import Video from './Video'

const RegistriedBlockRenderers = {
  heading_1: Heading,
  heading_2: Heading,
  heading_3: Heading,
  paragraph: Paragraph,
  image: Image,
  video: Video,
  bulleted_list_item: BulletedListItem,
  numbered_list_item: NumberedListItem,
  code: Code,
  callout: Callout,
  column_list: ColumnList,
  column: Column,
  quote: Quote,
  divider: Divider,
  to_do: Todo,
  toggle: Toggle,
  table: Table,
}

const MissedBlockRenderer = ({ theAtom }: { theAtom: BlockAtom }) => {
  const block = useAtomValue(theAtom)
  return <div>Block {block.type} not supported</div>
}

const Block = ({ theAtom }: { theAtom: BlockAtom }) => {
  const block = useAtomValue(theAtom)
  const renderer =
    RegistriedBlockRenderers[block.type as never] || MissedBlockRenderer
  let children: React.ReactNode[] | undefined
  if (block.children) {
    children = renderBlocks(block.children)
  }
  return createElement(renderer, { theAtom }, children)
}

export const renderBlock = (block: ParsedBlock) => {
  const blockAtom = useMemo(() => atom(block), [block])
  return <Block key={block.id} theAtom={blockAtom} />
}

const groupConsecutiveListItems = (blocks: ParsedBlock[]) => {
  const grouped: (
    | ParsedBlock
    | {
        type: 'list_group'
        listType: 'bulleted' | 'numbered'
        items: ParsedBlock[]
        id: string
      }
  )[] = []
  let i = 0

  while (i < blocks.length) {
    const block = blocks[i]

    if (
      block.type === 'bulleted_list_item' ||
      block.type === 'numbered_list_item'
    ) {
      const listType =
        block.type === 'bulleted_list_item' ? 'bulleted' : 'numbered'
      const items: ParsedBlock[] = []

      while (i < blocks.length && blocks[i].type === block.type) {
        items.push(blocks[i])
        i++
      }

      grouped.push({
        type: 'list_group',
        listType,
        items,
        id: `list-group-${items[0].id}`,
      })
    } else {
      grouped.push(block)
      i++
    }
  }

  return grouped
}

export const renderBlocks = (blocks: ParsedBlock[]) => {
  const blocksWithListNumbers = useMemo(() => {
    const processBlocks = (items: ParsedBlock[]) => {
      let currentNumber = 1

      return items.map((block) => {
        const newBlock = { ...block }

        if (newBlock.children && newBlock.children.length > 0) {
          newBlock.children = processBlocks(newBlock.children)
        }

        if (newBlock.type === 'numbered_list_item') {
          ;(
            newBlock.numbered_list_item as unknown as {
              listNumber: number
            }
          ).listNumber = currentNumber++
        } else {
          currentNumber = 1
        }

        return newBlock
      })
    }

    return processBlocks(blocks)
  }, [blocks])

  const groupedBlocks = useMemo(
    () => groupConsecutiveListItems(blocksWithListNumbers),
    [blocksWithListNumbers],
  )

  return groupedBlocks.map((item) => {
    if ('type' in item && item.type === 'list_group') {
      const ListContainer = item.listType === 'bulleted' ? 'ul' : 'ol'
      const className =
        item.listType === 'bulleted'
          ? 'notion_bulleted_list_container'
          : 'notion_numbered_list_container'

      return (
        <ListContainer key={item.id} className={className}>
          {item.items.map(renderBlock)}
        </ListContainer>
      )
    }

    return renderBlock(item as ParsedBlock)
  })
}

export default Block

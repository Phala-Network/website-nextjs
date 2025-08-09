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

  return blocksWithListNumbers.map(renderBlock)
}

export default Block

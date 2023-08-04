import { atom, type Atom } from 'jotai'

import { ParsedBlock } from '@/lib/notion-client'

export type BlockAtom = Atom<ParsedBlock>

export const blocksAtom = atom<ParsedBlock[]>([])

export const atomWithBlocks = (block: ParsedBlock) => {
  const blockAtom = atom(block)
  return atom((get) => {
    const blocks = get(blocksAtom)
    const theBlock = get(blockAtom)
    if (theBlock.type === 'numbered_list_item') {
      const itemPosition = blocks.findIndex(
        (blocksBlock) => theBlock.id === blocksBlock.id
      )
      let listNumber = 0
      for (let i = itemPosition; i >= 0; i--) {
        let blocksBlock = blocks[i]
        if (blocksBlock.type === 'numbered_list_item') {
          listNumber++
        } else {
          break
        }
      }
      return {
        ...theBlock,
        numbered_list_item: {
          ...theBlock.numbered_list_item,
          listNumber,
        },
      }
    }
    return theBlock
  })
}

import { atom, type Atom } from 'jotai'

import { ParsedBlock } from '@/lib/notion-client'

export type BlockAtom = Atom<ParsedBlock>

export const blocksAtom = atom<ParsedBlock[]>([])

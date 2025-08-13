import { type Atom, atom } from 'jotai'

import type { ParsedBlock } from '@/lib/notion-client'

export type BlockAtom = Atom<ParsedBlock>

export const blocksAtom = atom<ParsedBlock[]>([])

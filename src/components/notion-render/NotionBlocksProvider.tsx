'use client'

import React from 'react'
import { useHydrateAtoms } from 'jotai/utils'
import { blocksAtom } from './atoms'
import type { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'

interface Props {
  blocks: BlockObjectResponse[]
  children: React.ReactNode
}

export default function NotionBlocksProvider({ blocks, children }: Props) {
  useHydrateAtoms([[blocksAtom, blocks]])
  return <>{children}</>
}
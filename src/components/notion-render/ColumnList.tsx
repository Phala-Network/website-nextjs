import React from 'react'
import { useAtomValue } from 'jotai'
import { ColumnListBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'

import { BlockAtom } from './atoms'

const ColumnList = ({
  theAtom,
  children,
}: {
  theAtom: BlockAtom
  children: React.ReactNode
}) => {
  const block = useAtomValue(theAtom) as ColumnListBlockObjectResponse
  return <div className={`notion_${block.type}`}>{children}</div>
}

export default ColumnList

import React from 'react'
import { useAtomValue } from 'jotai'
import { ColumnBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'

import { BlockAtom } from './atoms'

const Column = ({
  theAtom,
  children,
}: {
  theAtom: BlockAtom
  children: React.ReactNode
}) => {
  const block = useAtomValue(theAtom) as ColumnBlockObjectResponse
  return <div className="notion_column">{children}</div>
}

export default Column

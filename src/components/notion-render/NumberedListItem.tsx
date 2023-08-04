import React from 'react'
import { useAtomValue } from 'jotai'
import { NumberedListItemBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'

import { BlockAtom } from './atoms'
import RichText from './RichText'

const NumberedListItem = ({
  theAtom,
  children,
}: {
  theAtom: BlockAtom
  children: React.ReactNode
}) => {
  const block = useAtomValue(theAtom) as NumberedListItemBlockObjectResponse & {
    listNumber: number
  }
  return (
    <ol start={block.listNumber} className="notion_numbered_list_container">
      <li className={`notion_${block.type}`}>
        <RichText rich_text={block.numbered_list_item.rich_text} />
      </li>
      {children}
    </ol>
  )
}

export default NumberedListItem

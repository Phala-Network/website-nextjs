import React from 'react'
import { useAtomValue } from 'jotai'
import { BulletedListItemBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'

import { BlockAtom } from './atoms'
import RichText from './RichText'

const BulletedListItem = ({
  theAtom,
  children,
}: {
  theAtom: BlockAtom
  children: React.ReactNode
}) => {
  const block = useAtomValue(theAtom) as BulletedListItemBlockObjectResponse
  return (
    <ul className="notion_bulleted_list_container">
      <li className={`notion_${block.type}`}>
        <RichText rich_text={block.bulleted_list_item.rich_text} />
      </li>
      {children}
    </ul>
  )
}

export default BulletedListItem

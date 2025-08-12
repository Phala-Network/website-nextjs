import type { BulletedListItemBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import { useAtomValue } from 'jotai'
import type React from 'react'

import type { BlockAtom } from './atoms'
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
    <li className="notion_bulleted_list_item">
      <RichText rich_text={block.bulleted_list_item.rich_text} />
      {children}
    </li>
  )
}

export default BulletedListItem

import type { BulletedListItemBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'

import type { ParsedBlock } from '@/lib/notion-client'
import RichText from './RichText'

const BulletedListItem = ({
  block,
  children,
}: {
  block: ParsedBlock
  children: React.ReactNode
}) => {
  const bulletedListItem = block as BulletedListItemBlockObjectResponse
  return (
    <li className="notion_bulleted_list_item">
      <RichText rich_text={bulletedListItem.bulleted_list_item.rich_text} />
      {children}
    </li>
  )
}

export default BulletedListItem

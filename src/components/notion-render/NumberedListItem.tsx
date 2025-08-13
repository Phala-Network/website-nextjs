import type { NumberedListItemBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'

import type { ParsedBlock } from '@/lib/notion-client'
import RichText from './RichText'

const NumberedListItem = ({
  block,
  children,
}: {
  block: ParsedBlock
  children: React.ReactNode
}) => {
  const numberedListItem = block as NumberedListItemBlockObjectResponse & {
    numbered_list_item: {
      listNumber: number
    }
  }
  return (
    <li className="notion_numbered_list_item">
      <RichText rich_text={numberedListItem.numbered_list_item.rich_text} />
      {children}
    </li>
  )
}

export default NumberedListItem

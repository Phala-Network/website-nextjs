import type { ToggleBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'

import type { ParsedBlock } from '@/lib/notion-client'
import RichText from './RichText'

const Toggle = ({
  block,
  children,
}: {
  block: ParsedBlock
  children: React.ReactNode
}) => {
  const toggleBlock = block as ToggleBlockObjectResponse
  return (
    <details className="notion_toggle_container">
      <summary>
        <RichText rich_text={toggleBlock.toggle.rich_text} />
      </summary>
      <div className="pl-4">{children}</div>
    </details>
  )
}

export default Toggle

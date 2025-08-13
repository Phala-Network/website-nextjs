import type { CalloutBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'

import type { ParsedBlock } from '@/lib/notion-client'
import RichText from './RichText'

const Callout = ({
  block,
  children,
}: {
  block: ParsedBlock
  children: React.ReactNode
}) => {
  const calloutBlock = block as CalloutBlockObjectResponse
  return (
    <div className="notion_callout">
      <div className="notion_callout_emoji text-xl mt-0.5">
        {calloutBlock.callout.icon?.type === 'emoji'
          ? calloutBlock.callout.icon.emoji
          : ''}
      </div>
      <div className="notion_callout_text">
        <RichText rich_text={calloutBlock.callout.rich_text} />
      </div>
      {children}
    </div>
  )
}

export default Callout

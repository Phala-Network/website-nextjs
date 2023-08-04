import React from 'react'
import { useAtomValue } from 'jotai'
import { CalloutBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'

import { BlockAtom } from './atoms'
import RichText from './RichText'

const Callout = ({
  theAtom,
  children,
}: {
  theAtom: BlockAtom
  children: React.ReactNode
}) => {
  const block = useAtomValue(theAtom) as CalloutBlockObjectResponse
  return (
    <div className={`notion_${block.type}`}>
      <div className="notion_callout_emoji">
        {block.callout.icon?.type === 'emoji' ? block.callout.icon.emoji : ''}
      </div>
      <div className="notion_callout_text">
        <RichText rich_text={block.callout.rich_text} />
      </div>
      {children}
    </div>
  )
}

export default Callout

import { useAtomValue } from 'jotai'
import { CodeBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'

import { BlockAtom } from './atoms'
import RichText from './RichText'

const Code = ({ theAtom }: { theAtom: BlockAtom }) => {
  const block = useAtomValue(theAtom) as CodeBlockObjectResponse
  return (
    <div className="notion_code">
      <pre>
        <code>{block.code.rich_text[0].plain_text}</code>
      </pre>
      {block.code.caption && (
        <span className="notion_caption">
          <RichText rich_text={block.code.caption} />
        </span>
      )}
    </div>
  )
}

export default Code

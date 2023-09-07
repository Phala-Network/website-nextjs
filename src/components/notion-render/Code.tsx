import { useAtomValue } from 'jotai'
import { CodeBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'

import { BlockAtom } from './atoms'
import RichText from './RichText'

const Code = ({ theAtom }: { theAtom: BlockAtom }) => {
  const block = useAtomValue(theAtom) as CodeBlockObjectResponse
  return (
    <div className="notion_code">
      <pre className="max-w-full overflow-y-scroll p-4 bg-[#f7f6f3] text-sm">
        {block.code.rich_text[0].plain_text}
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

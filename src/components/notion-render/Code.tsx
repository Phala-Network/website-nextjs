import { useAtomValue } from 'jotai'
import { CodeBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { github } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

import { BlockAtom } from './atoms'
import RichText from './RichText'

const Code = ({ theAtom }: { theAtom: BlockAtom }) => {
  const block = useAtomValue(theAtom) as CodeBlockObjectResponse
  return (
    <div className="notion_code">
      <SyntaxHighlighter
        language={block.code.language}
        className="text-xs"
        customStyle={{ padding: '1em' }}
        style={github}
      >
        {block.code.rich_text[0].plain_text}
      </SyntaxHighlighter>
      {block.code.caption && (
        <span className="notion_caption">
          <RichText rich_text={block.code.caption} />
        </span>
      )}
    </div>
  )
}

export default Code

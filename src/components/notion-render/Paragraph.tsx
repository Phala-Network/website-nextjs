import type { ParagraphBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'

import type { ParsedBlock } from '@/lib/notion-client'
import RichText from './RichText'

const Paragraph = ({ block }: { block: ParsedBlock }) => {
  const paragraphBlock = block as ParagraphBlockObjectResponse
  return (
    <p className="whitespace-pre-wrap break-words notion_paragraph">
      <RichText rich_text={paragraphBlock.paragraph.rich_text} />
    </p>
  )
}

export default Paragraph

import { useAtomValue } from 'jotai'
import { ParagraphBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'

import { BlockAtom } from './atoms'
import RichText from './RichText'

const Paragraph = ({ theAtom }: { theAtom: BlockAtom }) => {
  const block = useAtomValue(theAtom) as ParagraphBlockObjectResponse
  return (
    <p className="notion_paragraph">
      <RichText rich_text={block.paragraph.rich_text} />
    </p>
  )
}

export default Paragraph

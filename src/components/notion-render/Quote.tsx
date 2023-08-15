import { useAtomValue } from 'jotai'
import { QuoteBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'

import { BlockAtom } from './atoms'
import RichText from './RichText'

const Quote = ({
  theAtom,
  children,
}: {
  theAtom: BlockAtom
  children: React.ReactNode
}) => {
  const block = useAtomValue(theAtom) as QuoteBlockObjectResponse
  return (
    <blockquote className="notion_quote">
      <RichText rich_text={block.quote.rich_text} />
      {children}
    </blockquote>
  )
}

export default Quote

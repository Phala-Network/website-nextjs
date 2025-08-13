import type { QuoteBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'

import type { ParsedBlock } from '@/lib/notion-client'
import RichText from './RichText'

const Quote = ({
  block,
  children,
}: {
  block: ParsedBlock
  children: React.ReactNode
}) => {
  const quoteBlock = block as QuoteBlockObjectResponse
  return (
    <blockquote className="notion_quote">
      <RichText rich_text={quoteBlock.quote.rich_text} />
      {children}
    </blockquote>
  )
}

export default Quote

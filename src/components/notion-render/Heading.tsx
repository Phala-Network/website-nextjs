import React from 'react'
import { useAtomValue } from 'jotai'
import { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints'

import { BlockAtom } from './atoms'
import RichText from './RichText'

function generateId(richText: RichTextItemResponse[]): string {
  const text = richText.map(item => item.plain_text).join('')
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

const Heading = ({
  theAtom,
  children,
}: {
  theAtom: BlockAtom
  children: React.ReactNode
}) => {
  const block = useAtomValue(theAtom)
  const value = block[block.type as never] as {
    is_toggleable: boolean
    rich_text: RichTextItemResponse[]
  }
  const headingId = generateId(value.rich_text)
  if (value.is_toggleable) {
    return (
      <details className={`notion_${block.type}`}>
        <summary>
          <RichText rich_text={value.rich_text} />
        </summary>
        {children}
      </details>
    )
  }
  switch (block.type) {
    case 'heading_1':
      return (
        <h1 id={headingId} className="whitespace-pre-wrap break-normal notion_heading_1">
          <RichText rich_text={value.rich_text} />
        </h1>
      )
    case 'heading_2':
      return (
        <h2 id={headingId} className="whitespace-pre-wrap break-normal notion_heading_2">
          <RichText rich_text={value.rich_text} />
        </h2>
      )
    case 'heading_3':
      return (
        <h3 id={headingId} className="whitespace-pre-wrap break-normal notion_heading_3">
          <RichText rich_text={value.rich_text} />
        </h3>
      )
    default:
      return (
        <h4 id={headingId} className={`whitespace-pre-wrap break-normal notion_${block.type}`}>
          <RichText rich_text={value.rich_text} />
        </h4>
      )
  }
}

export default Heading

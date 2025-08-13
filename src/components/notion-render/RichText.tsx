import type { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints'
import React from 'react'

const RichText = ({ rich_text }: { rich_text: RichTextItemResponse[] }) => {
  return (
    <>
      {rich_text.map((rich_text_item, index) => {
        if (!rich_text_item) return null
        const { bold, italic, strikethrough, underline, code } =
          rich_text_item.annotations
        const color = rich_text_item.annotations.color.includes('background')
          ? { backgroundColor: rich_text_item.annotations.color.split('_')[0] }
          : { color: rich_text_item.annotations.color }
        let text = <span style={color}>{rich_text_item.plain_text}</span>
        if (bold) {
          text = <strong>{text}</strong>
        }
        if (italic) {
          text = <em>{text}</em>
        }
        if (strikethrough) {
          text = <del>{text}</del>
        }
        if (underline) {
          text = <u>{text}</u>
        }
        if (code) {
          text = (
            <code className="whitespace-pre-wrap break-normal notion_inline_code">
              {text}
            </code>
          )
        }
        if (rich_text_item.href) {
          text = (
            <a
              href={rich_text_item.href}
              target="_blank"
              rel="noreferrer"
              className="notion_link"
            >
              {text}
            </a>
          )
        }
        return (
          <React.Fragment key={index + rich_text_item.plain_text}>
            {text}
          </React.Fragment>
        )
      })}
    </>
  )
}

export default RichText

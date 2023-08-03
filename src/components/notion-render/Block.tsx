import { ParsedBlock } from '@/lib/notion-client'
import RichText from './RichText'
import Table from './Table'

const Block = ({
  block,
  blocks,
}: {
  block: ParsedBlock
  blocks: ParsedBlock[]
}) => {
  let children: React.ReactNode[] | undefined
  if (block.children) {
    children = block.children.map((child) => (
      <Block key={child.id} block={child} blocks={blocks} />
    ))
  }
  switch (block.type) {
    case 'heading_1':
      // @ts-expect-error Notion types are incorrect
      if (block.heading_1.is_toggleable) {
        return (
          <details className={`notion_${block.type}`}>
            <summary>
              <RichText rich_text={block.heading_1.rich_text} />
            </summary>
            {children}
          </details>
        )
      }
      return (
        <h1 className={`notion_${block.type}`}>
          <RichText rich_text={block.heading_1.rich_text} />
        </h1>
      )
    case 'heading_2':
      // @ts-expect-error Notion types are incorrect
      if (block.heading_2.is_toggleable) {
        return (
          <>
            <details className={`notion_${block.type}`}>
              <summary>
                <RichText rich_text={block.heading_2.rich_text} />
              </summary>
              {children}
            </details>
          </>
        )
      }
      return (
        <h2 className={`notion_${block.type}`}>
          <RichText rich_text={block.heading_2.rich_text} />
        </h2>
      )
    case 'heading_3':
      // @ts-expect-error Notion types are incorrect
      if (block.heading_3.is_toggleable) {
        return (
          <>
            <details className={`notion_${block.type}`}>
              <summary>
                <RichText rich_text={block.heading_3.rich_text} />
              </summary>
              {children}
            </details>
          </>
        )
      }
      return (
        <h3 className={`notion_${block.type}`}>
          <RichText rich_text={block.heading_3.rich_text} />
        </h3>
      )
    case 'paragraph':
      return (
        <p className={`notion_${block.type}`}>
          <RichText rich_text={block.paragraph.rich_text} />
        </p>
      )
    case 'image':
      const imageUrl: string =
        block.image.type == 'external'
          ? block.image.external.url
          : block.image.file.url
      return (
        <div className="notion_image_container">
          <figure>
            <img src={imageUrl} alt="" />
            <figcaption className="notion_caption">
              {block.image.caption && (
                <RichText rich_text={block.image.caption} />
              )}
            </figcaption>
          </figure>
        </div>
      )
    case 'video':
      const videoUrl: string =
        block.video.type == 'external'
          ? block.video.external.url
          : block.video.file.url
      if (videoUrl) {
        return (
          <div className="notion_video_container">
            <video controls src={videoUrl} className={`notion_video`} />
            <span className="notion_caption">
              {block.video.caption && (
                <RichText rich_text={block.video.caption} />
              )}
            </span>
          </div>
        )
      } else {
        return <div>Video URL not found</div>
      }

    case 'bulleted_list_item':
      return (
        <ul className="notion_bulleted_list_container">
          <li className={`notion_${block.type}`}>
            <RichText rich_text={block.bulleted_list_item.rich_text} />
          </li>
          {children}
        </ul>
      )
    case 'numbered_list_item':
      const itemPosition = blocks.findIndex(
        (blocksBlock) => block.id === blocksBlock.id
      )
      let listNumber = 0
      for (let i = itemPosition; i >= 0; i--) {
        let blocksBlock = blocks[i]
        if (blocksBlock.type === 'numbered_list_item') {
          listNumber++
        } else {
          break
        }
      }
      return (
        <ol start={listNumber} className="notion_numbered_list_container">
          <li className={`notion_${block.type}`}>
            <RichText rich_text={block.numbered_list_item.rich_text} />
          </li>
          {children}
        </ol>
      )
    case 'code':
      return (
        <div className={`notion_${block.type}`}>
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
    case 'callout':
      return (
        <div className={`notion_${block.type}`}>
          <div className="notion_callout_emoji">
            {block.callout.icon?.type === 'emoji'
              ? block.callout.icon.emoji
              : ''}
          </div>
          <div className="notion_callout_text">
            <RichText rich_text={block.callout.rich_text} />
          </div>
          {children}
        </div>
      )
    case 'column_list':
      return <div className={`notion_${block.type}`}>{children}</div>
    case 'column':
      return <div className={`notion_${block.type}`}>{children}</div>
    case 'quote':
      return (
        <blockquote className={`notion_${block.type}`}>
          <RichText rich_text={block.quote.rich_text} />
          {children}
        </blockquote>
      )
    case 'divider':
      return <hr className="notion_divider" />
    case 'to_do':
      return (
        <div className={`notion_${block.type}_container`}>
          <input
            type="checkbox"
            checked={block.to_do.checked}
            readOnly
            className={`notion_${block.type}`}
          />
          <RichText rich_text={block.to_do.rich_text} />
          {children}
        </div>
      )
    case 'toggle':
      return (
        <details className={`notion_${block.type}_container`}>
          <summary>
            <RichText rich_text={block.toggle.rich_text} />
          </summary>
          {children}
        </details>
      )
    case 'table':
      return <Table block={block} />

    default:
      return <div>Block {block.type} not supported</div>
  }
}

export default Block

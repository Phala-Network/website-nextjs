import type { ImageBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'

import { buildProxyImageUrl } from '@/lib/image'
import type { ParsedBlock } from '@/lib/notion-client'
import RichText from './RichText'

const Image = ({ block }: { block: ParsedBlock }) => {
  const imageBlock = block as ImageBlockObjectResponse
  const imageUrl = buildProxyImageUrl(imageBlock)
  const caption = imageBlock.image.caption?.[0]?.plain_text ?? ''
  return (
    <div className="notion_image_container">
      <figure>
        {/** biome-ignore lint/performance/noImgElement: dynamic image */}
        <img className="m-auto" src={imageUrl} alt={caption} />
        {caption && (
          <figcaption className="notion_caption">
            <RichText rich_text={imageBlock.image.caption} />
          </figcaption>
        )}
      </figure>
    </div>
  )
}

export default Image

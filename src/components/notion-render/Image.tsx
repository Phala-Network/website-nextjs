import type { ImageBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import { useAtomValue } from 'jotai'

import { buildProxyImageUrl } from '@/lib/image'
import type { BlockAtom } from './atoms'
import RichText from './RichText'

const Image = ({ theAtom }: { theAtom: BlockAtom }) => {
  const block = useAtomValue(theAtom) as ImageBlockObjectResponse
  const imageUrl = buildProxyImageUrl(block)
  const caption = block.image.caption?.[0]?.plain_text ?? ''
  return (
    <div className="notion_image_container">
      <figure>
        <img className="m-auto" src={imageUrl} alt={caption} />
        {caption && (
          <figcaption className="notion_caption">
            <RichText rich_text={block.image.caption} />
          </figcaption>
        )}
      </figure>
    </div>
  )
}

export default Image

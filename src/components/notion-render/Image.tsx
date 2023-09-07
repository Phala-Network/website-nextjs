import { useAtomValue } from 'jotai'
import { type ImageBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'

import { BlockAtom } from './atoms'
import RichText from './RichText'
import { useProxyBlockImage } from '@/hooks/useProxyImage'

const Image = ({ theAtom }: { theAtom: BlockAtom }) => {
  const block = useAtomValue(theAtom) as ImageBlockObjectResponse
  const imageUrl = useProxyBlockImage(block)
  return (
    <div className="notion_image_container">
      <figure>
        <img
          src={imageUrl}
          alt={
            block.image.caption && block.image.caption.length > 0
              ? block.image.caption[0].plain_text
              : ''
          }
        />
        <figcaption className="notion_caption">
          {block.image.caption && <RichText rich_text={block.image.caption} />}
        </figcaption>
      </figure>
    </div>
  )
}

export default Image

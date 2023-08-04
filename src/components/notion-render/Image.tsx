import { useAtomValue } from 'jotai'
import { ImageBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'

import { BlockAtom } from './atoms'
import RichText from './RichText'

const Image = ({ theAtom }: { theAtom: BlockAtom }) => {
  const block = useAtomValue(theAtom) as ImageBlockObjectResponse
  const imageUrl: string =
    block.image.type == 'external'
      ? block.image.external.url
      : block.image.file.url
  return (
    <div className="notion_image_container">
      <figure>
        <img src={imageUrl} alt="" />
        <figcaption className="notion_caption">
          {block.image.caption && <RichText rich_text={block.image.caption} />}
        </figcaption>
      </figure>
    </div>
  )
}

export default Image

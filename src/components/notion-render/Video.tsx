import { useAtomValue } from 'jotai'
import { VideoBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'

import { BlockAtom } from './atoms'
import RichText from './RichText'

const Video = ({ theAtom }: { theAtom: BlockAtom }) => {
  const block = useAtomValue(theAtom) as VideoBlockObjectResponse
  const videoUrl: string =
    block.video.type == 'external'
      ? block.video.external.url
      : block.video.file.url
  return (
    <div className="notion_video_container">
      <video controls src={videoUrl} className={`notion_video`} />
      <span className="notion_caption">
        {block.video.caption && <RichText rich_text={block.video.caption} />}
      </span>
    </div>
  )
}

export default Video

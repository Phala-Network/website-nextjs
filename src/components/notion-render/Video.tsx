import { useAtomValue } from 'jotai'
import { VideoBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'

import { BlockAtom } from './atoms'
import RichText from './RichText'

const YoutubeEmbed = ({ embedId }: { embedId?: string })  => (
  <iframe
    className="w-full aspect-[853/480]"
    src={`https://www.youtube.com/embed/${embedId}`}
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />
)

const Video = ({ theAtom }: { theAtom: BlockAtom }) => {
  const block = useAtomValue(theAtom) as VideoBlockObjectResponse
  const videoUrl: string =
    block.video.type == 'external'
      ? block.video.external.url
      : block.video.file.url
  return (
    <div className="notion_video_container">
      {
        videoUrl.indexOf('youtube.com') > -1 ? (
          <video controls src={videoUrl} className={`notion_video`} />
        ) : (
          <YoutubeEmbed embedId={videoUrl.split('/').filter(segment => segment !== '').pop()} />
        )
      }
      <span className="notion_caption">
        {block.video.caption && <RichText rich_text={block.video.caption} />}
      </span>
    </div>
  )
}

export default Video

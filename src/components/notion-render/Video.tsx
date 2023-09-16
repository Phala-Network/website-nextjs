import { useMemo } from 'react'
import { useAtomValue } from 'jotai'
import { VideoBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

import { BlockAtom } from './atoms'
import RichText from './RichText'

const Video = ({ theAtom }: { theAtom: BlockAtom }) => {
  const block = useAtomValue(theAtom) as VideoBlockObjectResponse
  const [provider, id] = useMemo(() => {
    const videoUrl: string =
      block.video.type == 'external'
        ? block.video.external.url
        : block.video.file.url
    if (videoUrl.indexOf('youtube.com') === -1) {
      return [null, videoUrl]
    } else {
      const url = new URL(videoUrl)
      if (url.searchParams.has('v')) {
        return ['youtube', url.searchParams.get('v') as string]
      } else {
        return ['youtube', url.pathname.split('/').filter(segment => segment !== '').pop() as string]
      }
    }
  }, [block])
  return (
    <div className="notion_video_container">
      {provider === 'youtube' ? (<LiteYouTubeEmbed id={id} title="" />) : null}
      {provider === null ? (<video controls src={id} className={`notion_video`} />) : null}
      <span className="notion_caption">
        {block.video.caption && <RichText rich_text={block.video.caption} />}
      </span>
    </div>
  )
}

export default Video

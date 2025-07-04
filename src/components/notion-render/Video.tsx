import { useMemo } from 'react'
import { useAtomValue } from 'jotai'
import { VideoBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

import { BlockAtom } from './atoms'
import RichText from './RichText'

const Video = ({ theAtom }: { theAtom: BlockAtom }) => {
  const block = useAtomValue(theAtom) as VideoBlockObjectResponse
  // TODO Added test cases for it.
  const [provider, id] = useMemo(() => {
    const videoUrl: string =
      block.video.type == 'external'
        ? block.video.external.url
        : `https://img0.phala.world/files/${block.id}.mp4`
    const url = new URL(videoUrl)
    if (videoUrl.indexOf('youtube.com') !== -1 && url.searchParams.has('v')) {
      return ['youtube', url.searchParams.get('v') as string]
    } else if (videoUrl.indexOf('youtu.be') !== -1) {
      return ['youtube', url.pathname.replace('/', '')]
    } else if (videoUrl.indexOf('loom.com') !== -1) {
      return ['loom', videoUrl.replace('/share/', '/embed/')]
    } else {
      return [null, videoUrl]
    }
  }, [block])
  return (
    <div className="notion_video_container">
      {provider === 'youtube' ? (
        <LiteYouTubeEmbed
          id={id}
          title=""
          poster="sddefault"
        />
      ) : null}
      {provider === null ? (<video controls src={id} className={`notion_video`} />) : null}
      {
        provider === 'loom' ? (
          <iframe
            className="w-full aspect-video"
            src={id}
            allowFullScreen
          />
        ) : null
      }
      <span className="notion_caption">
        {block.video.caption && <RichText rich_text={block.video.caption} />}
      </span>
    </div>
  )
}

export default Video

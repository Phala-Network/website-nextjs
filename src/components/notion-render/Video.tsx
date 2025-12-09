import type { VideoBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import { useMemo } from 'react'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

import { buildVideoUrl } from '@/lib/image-url'
import type { ParsedBlock } from '@/lib/notion-client'
import RichText from './RichText'

const Video = ({ block }: { block: ParsedBlock }) => {
  const videoBlock = block as VideoBlockObjectResponse
  const [provider, id] = useMemo(() => {
    // For internal videos (file type), use our media proxy
    if (videoBlock.video.type === 'file') {
      return [null, buildVideoUrl(videoBlock.id)]
    }

    // External video URL
    const videoUrl = videoBlock.video.external.url

    // Parse external URLs for provider detection
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
  }, [videoBlock])
  return (
    <div className="notion_video_container">
      {provider === 'youtube' ? <LiteYouTubeEmbed id={id} title="" /> : null}
      {provider === null ? (
        // biome-ignore lint/a11y/useMediaCaption: captions not available from Notion
        <video controls src={id} className="notion_video" />
      ) : null}
      {provider === 'loom' ? (
        <iframe
          className="w-full aspect-video"
          src={id}
          title="Loom video"
          allowFullScreen
        />
      ) : null}
      <span className="notion_caption">
        {videoBlock.video.caption && (
          <RichText rich_text={videoBlock.video.caption} />
        )}
      </span>
    </div>
  )
}

export default Video

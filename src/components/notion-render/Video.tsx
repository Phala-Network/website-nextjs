import type { VideoBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import { useMemo } from 'react'

import type { ParsedBlock } from '@/lib/notion-client'
import RichText from './RichText'

const Video = ({ block }: { block: ParsedBlock }) => {
  const videoBlock = block as VideoBlockObjectResponse
  // TODO Added test cases for it.
  const [provider, id] = useMemo(() => {
    const videoUrl: string =
      videoBlock.video.type === 'external'
        ? videoBlock.video.external.url
        : `https://img0.phala.world/files/${videoBlock.id}.mp4`
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
      {provider === 'youtube' ? (
        <div className="aspect-video bg-gray-100 flex items-center justify-center rounded-lg">
          <p className="text-gray-600">YouTube Video: {id}</p>
        </div>
      ) : null}
      {provider === null ? (
        <video controls src={id} className={`notion_video`} />
      ) : null}
      {provider === 'loom' ? (
        <iframe className="w-full aspect-video" src={id} allowFullScreen />
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

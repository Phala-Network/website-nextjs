'use client';

import LiteYouTubeEmbed, { type LiteYouTube } from 'react-lite-youtube-embed'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

export function YouTubeVideo(props: LiteYouTube) {
  return (
    <LiteYouTubeEmbed {...props} />
  )
}

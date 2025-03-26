'use client';

import LiteYouTubeEmbed, { type LiteYouTubeProps } from 'react-lite-youtube-embed'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

export function YouTubeVideo(props: LiteYouTubeProps) {
  return (
    <LiteYouTubeEmbed {...props} />
  )
}

'use client';

import { useState, useRef } from 'react'
import { Button } from 'react-aria-components'
import { IoIosPlayCircle } from 'react-icons/io'
import { cn } from '@/lib/utils'

export function Video({ blockId, className }: { blockId: string, className?: string }) {
  const ref = useRef<HTMLVideoElement>(null)
  const [showOverlay, toggleOverlay] = useState(true)
  return (
    <div className={cn('relative', className)}>
      <video
        ref={ref}
        controls={!showOverlay}
        controlsList="nodownload"
        disablePictureInPicture
        disableRemotePlayback
        preload="auto"
        onEnded={() => {
          toggleOverlay(true)
          console.log('video ended')
        }}
      >
        <source src={cn(`https://img0.phala.world/files/${blockId}.mp4`)} type="video/mp4" />
      </video>
      <Button
        className={cn(
          "absolute inset-0 flex items-center justify-center bg-black-900/75",
          "transition duration-100 ease-in-out",
          showOverlay ? "opacity-100" : "opacity-0 untangle -z-10",
        )}
        onPress={() => {
          if (ref.current) {
            ref.current.play()
            toggleOverlay(false)
          }
        }}
      >
        <IoIosPlayCircle className="text-9xl text-white" />
      </Button>
    </div>
  )
}

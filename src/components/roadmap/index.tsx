'use client'

import { useRef, useLayoutEffect, useState } from 'react'
import panzoom from 'panzoom'

import { cn } from '@/lib/utils'
import DotBackground from '@/components/DotBackground'
import RoadmapSvg from './svg'
import './style.css'

export const Roadmap = () => {
  const ref = useRef<any>(null)
  const panzoomRef = useRef<any>(null)
  const [isFullscreen, setFullscreen] = useState(false)

  useLayoutEffect(() => {
    panzoomRef.current = panzoom(ref.current, {
      minZoom: 1,
      maxZoom: 5,
      bounds: true,
      boundsPadding: .25,
      zoomDoubleClickSpeed: 1,
      beforeMouseDown: function() {
        return false
      },
    })

    const handler = () => {
      setFullscreen(!!document.fullscreenElement)
    }

    document.addEventListener('fullscreenchange', handler)

    return () => {
      panzoomRef.current.dispose()
      document.removeEventListener('fullscreenchange', handler)
    }
  }, [])

  const handleZoomin = () => {
    panzoomRef.current.zoomTo(
      ref.current.offsetWidth / 2,
      ref.current.offsetHeight / 2,
      1 + 0.5,
    )
  }

  const handleZoomout = () => {
    panzoomRef.current.zoomTo(
      ref.current.offsetWidth / 2,
      ref.current.offsetHeight / 2,
      1 - 0.5,
    )
  }

  const handleFullscreen = () => {
    // @ts-ignore
    if (document.fullscreenElement === null || document.webkitIsFullScreen === false) {
      // @ts-ignore
      document.documentElement.requestFullscreen ? document.documentElement.requestFullscreen() : document.documentElement.webkitRequestFullscreen ? document.documentElement.webkitRequestFullscreen() : document.documentElement.mozRequestFullScreen ? document.documentElement.mozRequestFullScreen() : document.documentElement.msRequestFullscreen && document.documentElement.msRequestFullscreen()
    } else {
      // @ts-ignore
      document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.mozCancelFullScreen && document.mozCancelFullScreen()
    }
  }

  return (
    <div className="relative pb-24">
      <DotBackground dotColor="#E2E8F0" bgColor="#F7FAFC" />
      <main className={cn("safe-viewport", "grid grid-cols-1 xl:grid-cols-20 3xl:grid-cols-24", "overflow-hidden")}>
        <article className={cn("cols-span-1 xl:col-start-2 xl:col-span-18 3xl:col-start-6 3xl:col-span-14 pt-28")} ref={ref}>
          <RoadmapSvg />
        </article>
      </main>
      <div className="roadmap-tools pt-24">
        <div className="roadmap-tools-group">
          <button
            className="roadmap-tool roadmap-tool-zoomin"
            onClick={handleZoomin}
          >
            <svg viewBox="0 0 12 12">
              <line x1="0" y1="6" x2="12" y2="6"></line>
              <line x1="6" y1="0" x2="6" y2="12"></line>
            </svg>
          </button>
          <button
            className="roadmap-tool roadmap-tool-zoomout"
            onClick={handleZoomout}
          >
            <svg viewBox="0 0 12 12">
              <line x1="0" y1="6" x2="12" y2="6"></line>
            </svg>
          </button>
        </div>
        <div className="roadmap-tools-group">
          <button
            className={cn("roadmap-tool roadmap-tool-fullscreen", isFullscreen ? 'active' : '')}
            onClick={handleFullscreen}
          >
            <svg viewBox="0 0 14 14">
              <polyline points="1,5.2 1,1 5.2,1"></polyline>
              <polyline points="8.8,1 13,1 13,5.2"></polyline>
              <polyline points="13,8.8 13,13 8.8,13"></polyline> <polyline points="5.2,13 1,13 1,8.8"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Roadmap

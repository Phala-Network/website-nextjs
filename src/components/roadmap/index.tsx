'use client'

import { useRef, useLayoutEffect, useState } from 'react'
import panzoom from 'panzoom'

import { cn } from '@/lib/utils'
import DotBackground from '@/components/DotBackground'
import RoadmapSvg from './svg'
import './style.css'

const Roadmap = () => {
  const ref = useRef<any>(null)
  const panzoomRef = useRef<any>(null)
  const [isFullscreen, setFullscreen] = useState(false)

  useLayoutEffect(() => {
    panzoomRef.current = panzoom(ref.current, {
      minZoom: 1,
      maxZoom: 3,
      initialX: 0,
      initialY: 0,
      zoomDoubleClickSpeed: 1,
      beforeMouseDown: function () {
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
      1 + 0.5
    )
  }

  const handleZoomout = () => {
    panzoomRef.current.zoomTo(
      ref.current.offsetWidth / 2,
      ref.current.offsetHeight / 2,
      1 - 0.5
    )
  }

  const handleFullscreen = () => {
    // @ts-ignore
    if (
      document.fullscreenElement === null ||
      // @ts-ignore
      document.webkitIsFullScreen === false
    ) {
      // @ts-ignore
      document.documentElement.requestFullscreen
        ? document.documentElement.requestFullscreen()
      // @ts-ignore
        : document.documentElement.webkitRequestFullscreen
      // @ts-ignore
        ? document.documentElement.webkitRequestFullscreen()
      // @ts-ignore
        : document.documentElement.mozRequestFullScreen
      // @ts-ignore
        ? document.documentElement.mozRequestFullScreen()
      // @ts-ignore
        : document.documentElement.msRequestFullscreen &&
      // @ts-ignore
          document.documentElement.msRequestFullscreen()
    } else {
      // @ts-ignore
      document.exitFullscreen
        ? document.exitFullscreen()
      // @ts-ignore
        : document.webkitExitFullscreen
      // @ts-ignore
        ? document.webkitExitFullscreen()
      // @ts-ignore
        : document.mozCancelFullScreen && document.mozCancelFullScreen()
    }
  }

  return (
    <div className="relative">
      <DotBackground dotColor="#E2E8F0" bgColor="#F7FAFC" />
      <div className="w-screen h-screen overflow-hidden">
        <div className="roadmap-canvas flex w-screen h-screen" ref={ref}>
          <RoadmapSvg />
        </div>
      </div>
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
            className={cn(
              'roadmap-tool roadmap-tool-fullscreen',
              isFullscreen ? 'active' : ''
            )}
            onClick={handleFullscreen}
          >
            <svg viewBox="0 0 14 14">
              <polyline points="1,5.2 1,1 5.2,1"></polyline>
              <polyline points="8.8,1 13,1 13,5.2"></polyline>
              <polyline points="13,8.8 13,13 8.8,13"></polyline>{' '}
              <polyline points="5.2,13 1,13 1,8.8"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Roadmap

'use client';
import { type HTMLProps, useRef, useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { getSvgPath } from 'figma-squircle'

export default function Squircle({ height, cornerRadius = 32, cornerSmoothing = 0.6, fill = '#fff', style }: {
  height: number,
  cornerSmoothing?: number
  cornerRadius?: number
  fill?: string
  style?: HTMLProps<HTMLDivElement>["style"]
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [dots, setDots] = useState('')
  useEffect(() => {
    if (ref.current) {
      const resize = () => {
        if (ref.current) {
          const { width } = ref.current.getBoundingClientRect()
          setDots(getSvgPath({
            width: width,
            height,
            cornerRadius,
            cornerSmoothing,
          }))
        }
      }
      resize()
      window.addEventListener('resize', resize, false)
      return () => {
        window.removeEventListener('resize', resize)
      }
    }
  }, [ref, height, cornerRadius, cornerSmoothing])
  return (
    <div ref={ref} className={cn("absolute -z-10 left-0 right-0 top-0 bottom-0 w-full h-full")}>
      <svg className={cn("w-full h-full")} style={style}>
        <path d={dots} fill={fill} />
      </svg>
    </div>
  )
}

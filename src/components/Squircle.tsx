'use client';
import { type ComponentType, type HTMLProps, type ReactNode, createElement, useRef, useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { getSvgPath } from 'figma-squircle'

export interface SquircleProps {
  cornerSmoothing?: number
  cornerRadius?: number
  fill?: string
  shadow?: string | string[]
  updateDelay?: number
  as?: string | ComponentType
  children?: ReactNode
}

export default function Squircle({
  cornerRadius = 32,
  cornerSmoothing = 0.6,
  fill = '#fff',
  shadow,
  updateDelay,
  as,
  children,
  ...props
}: SquircleProps & HTMLProps<HTMLElement>) {
  const ref = useRef<HTMLDivElement>(null)
  const [dots, setDots] = useState('')

  useEffect(() => {
    if (ref.current && ref.current.parentNode) {
      const resize = async () => {
        if (ref.current) {
          if (updateDelay) {
            await new Promise(resolve => setTimeout(resolve, updateDelay))
          }
          const boundingClientRect = ref.current.getBoundingClientRect()
          const { width, height } = boundingClientRect
          if (width === 0 || height === 0) {
            setDots('')
          } else {
            setDots(getSvgPath({
              width,
              height,
              cornerRadius,
              cornerSmoothing,
            }))
          }
        }
      }

      const parentNode = ref.current.parentNode as HTMLElement
      const computedStyle = getComputedStyle(parentNode)
      if (computedStyle.position === 'static') {
        parentNode.style.position = 'relative'
        parentNode.style.zIndex = '0'
      }

      resize()

      window.addEventListener('resize', resize, false)

      const mutationObserver = new MutationObserver(resize)
      const intersectionObserver = new IntersectionObserver(resize)

      mutationObserver.observe(
        ref.current.parentNode as HTMLElement,
        { attributes: true, childList: true, subtree: true }
      )
      intersectionObserver.observe(ref.current.parentNode as HTMLElement)

      return () => {
        window.removeEventListener('resize', resize)
        mutationObserver.disconnect()
        if (ref.current?.parentNode) {
          intersectionObserver.unobserve(ref.current?.parentNode as HTMLElement)
        }
      }
    }
  }, [ref, cornerRadius, cornerSmoothing, setDots, updateDelay])

  let svgStyle: Record<string, string> = {}
  if (dots && shadow) {
    if (typeof shadow === 'string') {
      shadow = [shadow]
    }
    svgStyle.filter = shadow.map(i => `drop-shadow(${i})`).join(' ')
  }

  // if (!props.style) {
  //   props.style = { position: 'relative', zIndex: 0 }
  // }

  return createElement(
    as ? as : 'div',
    props,
    [
      <div
        key='squircle'
        ref={ref}
        className={cn("absolute -z-10 left-0 right-0 top-0 bottom-0 w-full h-full untanglable")}
        style={{
          backgroundColor: fill,
          borderRadius: cornerRadius * 1.05,
        }}
      >
        {dots ? (
          <svg className={cn("w-full h-full")} style={svgStyle}>
            <path d={dots} fill={fill} />
          </svg>
        ) : null}
      </div>
      ,
      children
    ]
  )
}

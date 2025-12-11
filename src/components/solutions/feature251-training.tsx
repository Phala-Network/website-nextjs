'use client'

import { motion } from 'motion/react'
import type React from 'react'
import { type RefObject, useEffect, useId, useRef, useState } from 'react'

import { Globe } from '@/components/magicui/globe'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { cn } from '@/lib/utils'

const Feature251Training = () => {
  const containerRef1 = useRef<HTMLDivElement>(null)
  const containerRef2 = useRef<HTMLDivElement>(null)
  const div1Ref = useRef<HTMLDivElement>(null)
  const div2Ref = useRef<HTMLDivElement>(null)
  const div3Ref = useRef<HTMLDivElement>(null)
  const div4Ref = useRef<HTMLDivElement>(null)
  const div5Ref = useRef<HTMLDivElement>(null)
  const div6Ref = useRef<HTMLDivElement>(null)
  const div7Ref = useRef<HTMLDivElement>(null)
  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-5">
          {/* 1st Card  */}
          <Card className="w-166 relative h-96 rounded-3xl border">
            <CardHeader>
              <h3 className="text-2xl font-semibold tracking-tight">
                Secure Data Loading
              </h3>
              <p className="text-muted-foreground/70 mt-2">
                Load training datasets directly from private sources inside
                TEEs. Your sensitive data never leaves the secure enclave during
                the entire training pipeline.
              </p>
            </CardHeader>
            <CardContent ref={containerRef1} className="relative ml-5">
              <IconCard
                ref={div1Ref as React.RefObject<HTMLDivElement>}
                src="https://api.iconify.design/mdi:database-lock.svg?color=%232563eb"
                className="mb-3"
              />
              <IconCard
                ref={div2Ref as React.RefObject<HTMLDivElement>}
                src="https://api.iconify.design/mdi:shield-check.svg?color=%2316a34a"
                className="translate-x-32"
              />
              <IconCard
                ref={div3Ref as React.RefObject<HTMLDivElement>}
                src="https://api.iconify.design/mdi:file-document-lock.svg?color=%23dc2626"
                className="mt-3"
              />
              <IconCard
                ref={div5Ref as React.RefObject<HTMLDivElement>}
                src="https://api.iconify.design/mdi:server-security.svg?color=%237c3aed"
                className="absolute right-12 top-1/2 -translate-y-1/2"
              />
              <div
                ref={div4Ref as React.RefObject<HTMLDivElement>}
                className="z-99 bg-muted absolute left-1/2 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border"
              />
              <AnimatedBeam
                duration={3}
                containerRef={containerRef1}
                fromRef={div1Ref}
                curvature={40}
                toRef={div4Ref}
              />
              <AnimatedBeam
                duration={3}
                containerRef={containerRef1}
                fromRef={div2Ref}
                toRef={div4Ref}
              />
              <AnimatedBeam
                duration={3}
                containerRef={containerRef1}
                fromRef={div3Ref}
                curvature={-40}
                toRef={div4Ref}
              />
              <AnimatedBeam
                duration={3}
                containerRef={containerRef1}
                fromRef={div4Ref}
                toRef={div5Ref}
              />
            </CardContent>
          </Card>

          {/* 2nd Card */}
          <Card className="md:w-83 h-96 w-full rounded-3xl border">
            <CardHeader>
              <h3 className="text-2xl font-semibold tracking-tight">
                Encrypted Gradient Flow
              </h3>
              <p className="text-muted-foreground/70">
                Training gradients stay encrypted end-to-end. Hardware
                attestation proves your model updates never leaked.
              </p>
            </CardHeader>
            <CardContent
              ref={containerRef2}
              className="relative flex h-full flex-col items-center justify-between"
            >
              <IconCard
                ref={div6Ref as React.RefObject<HTMLDivElement>}
                src="https://api.iconify.design/mdi:brain.svg?color=%23ea580c"
                className="mb-3"
              />

              <IconCard
                ref={div7Ref as React.RefObject<HTMLDivElement>}
                src="https://api.iconify.design/mdi:lock.svg?color=%237c3aed"
                className="mt-3"
              />

              <AnimatedBeam
                duration={3}
                containerRef={containerRef2}
                fromRef={div6Ref as React.RefObject<HTMLDivElement>}
                direction="vertical"
                curvature={40}
                toRef={div7Ref as React.RefObject<HTMLDivElement>}
              />
            </CardContent>
          </Card>

          {/* 3rd card */}
          <Card className="relative flex h-96 w-full flex-col rounded-3xl border md:w-[330px]">
            <CardContent>
              <img
                src="https://api.iconify.design/mdi:certificate.svg?color=%2316a34a"
                className="mt-5 size-32"
                alt=""
              />
            </CardContent>
            <CardHeader className="mt-auto">
              <h3 className="text-2xl font-semibold tracking-tight">
                Verifiable Attestation Reports
              </h3>
              <p className="text-muted-foreground/70">
                Every training run generates cryptographic proof that your data
                remained confidential throughout the process.
              </p>
            </CardHeader>
          </Card>
          {/* 4th card */}
          <Card className="w-166 h-96 overflow-hidden rounded-3xl border">
            <CardHeader>
              <h3 className="text-2xl font-semibold tracking-tight">
                Global TEE Infrastructure
              </h3>
              <p className="text-muted-foreground/70">
                Train on distributed TEE clusters worldwide. Scale your
                confidential training workloads across secure data centers with
                hardware-level isolation.
              </p>
            </CardHeader>

            <CardContent className="relative">
              <Globe className="-top-4" />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export { Feature251Training }

const IconCard = ({
  src,
  className,
  ref,
}: {
  src: string
  className?: string
  ref: React.RefObject<HTMLDivElement>
}) => {
  return (
    <div
      ref={ref}
      className={cn(
        'bg-muted relative z-10 flex size-14 items-center justify-center rounded-xl',
        className,
      )}
    >
      <img src={src} alt="Icon" className="size-5" />
      <HandleIcon className="absolute -top-3 left-1/2 size-6 -translate-x-1/2" />
      <HandleIcon className="absolute -bottom-3 left-1/2 size-6 -translate-x-1/2" />
      <HandleIcon className="absolute -left-3 top-1/2 size-6 -translate-y-1/2 rotate-90" />
      <HandleIcon className="absolute -right-3 top-1/2 size-6 -translate-y-1/2 rotate-90" />
    </div>
  )
}

const HandleIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      width="14"
      height="5"
      viewBox="0 0 14 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="0.543457"
        y1="0.972656"
        x2="0.543457"
        y2="4.625"
        stroke="black"
        strokeOpacity="0.2"
      />
      <line
        x1="4.54346"
        y1="0.972656"
        x2="4.54346"
        y2="4.625"
        stroke="black"
        strokeOpacity="0.2"
      />
      <line
        x1="8.54346"
        y1="0.972656"
        x2="8.54346"
        y2="4.625"
        stroke="black"
        strokeOpacity="0.2"
      />
      <line
        x1="12.5435"
        y1="0.972656"
        x2="12.5435"
        y2="4.625"
        stroke="black"
        strokeOpacity="0.2"
      />
    </svg>
  )
}

// Below is the modified component from Magic UI
// Original source: https://magicui.design/docs/components/animated-beam
// Modified to follow our coding standards and design system
// We respect copyright and attribution to the original creators

interface AnimatedBeamProps {
  className?: string
  containerRef: RefObject<HTMLElement | null> // Container ref
  fromRef: RefObject<HTMLElement | null>
  toRef: RefObject<HTMLElement | null>
  curvature?: number
  reverse?: boolean
  pathColor?: string
  pathWidth?: number
  pathOpacity?: number
  gradientStartColor?: string
  gradientStopColor?: string
  delay?: number
  duration?: number
  startXOffset?: number
  startYOffset?: number
  endXOffset?: number
  endYOffset?: number
  direction?: 'horizontal' | 'vertical'
}

const AnimatedBeam: React.FC<AnimatedBeamProps> = ({
  className,
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  reverse = false, // Include the reverse prop
  duration = Math.random() * 3 + 4,
  delay = 0,
  pathColor = 'gray',
  pathWidth = 2,
  pathOpacity = 0.2,
  gradientStartColor = '#ffaa40',
  gradientStopColor = '#9c40ff',
  startXOffset = 0,
  startYOffset = 0,
  endXOffset = 0,
  endYOffset = 0,
  direction = 'horizontal',
}) => {
  const id = useId()
  const [pathD, setPathD] = useState('')
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 })

  // Calculate the gradient coordinates based on the reverse prop
  const gradientCoordinates =
    direction === 'vertical'
      ? reverse
        ? {
            x1: ['0%', '0%'],
            x2: ['0%', '0%'],
            y1: ['90%', '-10%'],
            y2: ['100%', '0%'],
          }
        : {
            x1: ['0%', '0%'],
            x2: ['0%', '0%'],
            y1: ['10%', '110%'],
            y2: ['0%', '100%'],
          }
      : reverse
        ? {
            // Horizontal (existing logic)
            x1: ['90%', '-10%'],
            x2: ['100%', '0%'],
            y1: ['0%', '0%'],
            y2: ['0%', '0%'],
          }
        : {
            x1: ['10%', '110%'],
            x2: ['0%', '100%'],
            y1: ['0%', '0%'],
            y2: ['0%', '0%'],
          }

  useEffect(() => {
    const updatePath = () => {
      if (containerRef.current && fromRef.current && toRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect()
        const rectA = fromRef.current.getBoundingClientRect()
        const rectB = toRef.current.getBoundingClientRect()

        const svgWidth = containerRect.width
        const svgHeight = containerRect.height
        setSvgDimensions({ width: svgWidth, height: svgHeight })

        const startX =
          rectA.left - containerRect.left + rectA.width / 2 + startXOffset
        const startY =
          rectA.top - containerRect.top + rectA.height / 2 + startYOffset
        const endX =
          rectB.left - containerRect.left + rectB.width / 2 + endXOffset
        const endY =
          rectB.top - containerRect.top + rectB.height / 2 + endYOffset

        const controlY = startY - curvature
        const d = `M ${startX},${startY} Q ${
          (startX + endX) / 2
        },${controlY} ${endX},${endY}`
        setPathD(d)
      }
    }

    // Initialize ResizeObserver
    const resizeObserver = new ResizeObserver((entries) => {
      // For all entries, recalculate the path
      for (const entry of entries) {
        updatePath()
      }
    })

    // Observe the container element
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current)
    }

    // Call the updatePath initially to set the initial path
    updatePath()

    // Clean up the observer on component unmount
    return () => {
      resizeObserver.disconnect()
    }
  }, [
    containerRef,
    fromRef,
    toRef,
    curvature,
    startXOffset,
    startYOffset,
    endXOffset,
    endYOffset,
  ])

  return (
    <svg
      fill="none"
      width={svgDimensions.width}
      height={svgDimensions.height}
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        'pointer-events-none absolute left-0 top-0 transform-gpu stroke-2',
        className,
      )}
      viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}
    >
      <path
        d={pathD}
        stroke={pathColor}
        strokeWidth={pathWidth}
        strokeOpacity={pathOpacity}
        strokeLinecap="round"
      />
      <path
        d={pathD}
        strokeWidth={pathWidth}
        stroke={`url(#${id})`}
        strokeOpacity="1"
        strokeLinecap="round"
      />
      <defs>
        <motion.linearGradient
          className="transform-gpu"
          id={id}
          gradientUnits={'userSpaceOnUse'}
          initial={{
            x1: '0%',
            x2: '0%',
            y1: '0%',
            y2: '0%',
          }}
          animate={{
            x1: gradientCoordinates.x1,
            x2: gradientCoordinates.x2,
            y1: gradientCoordinates.y1,
            y2: gradientCoordinates.y2,
          }}
          transition={{
            delay,
            duration,
            ease: [0.16, 1, 0.3, 1],
            repeat: Infinity,
            repeatDelay: 0,
          }}
        >
          <stop stopColor={gradientStartColor} stopOpacity="0"></stop>
          <stop stopColor={gradientStartColor}></stop>
          <stop offset="32.5%" stopColor={gradientStopColor}></stop>
          <stop
            offset="100%"
            stopColor={gradientStopColor}
            stopOpacity="0"
          ></stop>
        </motion.linearGradient>
      </defs>
    </svg>
  )
}

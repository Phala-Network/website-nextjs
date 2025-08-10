'use client'
import type React from 'react'
import { useCallback, useRef, useState } from 'react'

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'

type Flow = {
  title: string
  className: string
  time: number
}

const flows: Flow[] = [
  {
    title: 'SaaS + AI',
    className: 'data-[state=active]:bg-[#C0E735]',
    time: 0,
  },
  {
    title: 'Financial + AI',
    className: 'data-[state=active]:bg-[#98DCFF]',
    time: 12,
  },
  {
    title: 'Data + Model',
    className: 'data-[state=active]:bg-[#AFBEFE]',
    time: 27,
  },
]

type DataItem = {
  id: number
  title: string
  description: string
}

const DATA: DataItem[] = [
  {
    id: 1,
    title: 'Trust AI',
    description: 'Users gain confidence in AI systems with verifiable security',
  },
  {
    id: 2,
    title: 'Unlock Use Cases',
    description: 'Enable sensitive data processing previously impossible',
  },
  {
    id: 3,
    title: 'Win the Market',
    description: 'Trust drives adoption, revenue, and competitive advantage',
  },
]

type StepItemProps = {
  step: DataItem
  isLast: boolean
}

const StepItem = ({ step, isLast }: StepItemProps) => {
  return (
    <div className="flex gap-4">
      <div className="relative">
        <div
          className={`bg-primary/40 bg-gradient-to-b absolute h-full w-1 -translate-x-1/2 translate-y-11 left-1/2 ${
            isLast ? 'from-primary/40 to-background' : ''
          }`}
        />
        <div className="bg-background relative grid size-11 place-content-center rounded-full border-4">
          <p className="text-lg font-bold font-heading">{step.id}</p>
        </div>
      </div>
      <div className="mt-2">
        <p className="text-lg font-semibold font-heading">{step.title}</p>
        <p className="text-muted-foreground mt-2">{step.description}</p>
      </div>
    </div>
  )
}

export default function TrustSteps() {
  const [flowTitle, setFlowTitle] = useState<string>(flows[0].title)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleTimeUpdate = useCallback(
    (event: React.SyntheticEvent<HTMLVideoElement>) => {
      const video = event.currentTarget
      const currentTime = video.currentTime

      for (let i = flows.length - 1; i >= 0; i--) {
        if (currentTime >= flows[i].time) {
          if (flows[i].title !== flowTitle) {
            setFlowTitle(flows[i].title)
          }
          break
        }
      }
    },
    [flowTitle],
  )

  const handleTabChange = useCallback((value: string) => {
    if (videoRef.current && videoRef.current.readyState >= 2) {
      const targetFlow = flows.find((flow) => flow.title === value)
      if (targetFlow) {
        try {
          videoRef.current.currentTime = targetFlow.time
        } catch {
          // ignore
        }
      }
    }
  }, [])

  return (
    <div className="w-full py-24 max-w-6xl mx-auto">
      <section className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-16 lg:gap-8">
          <div className="max-sm:px-4">
            <h2 className="font-bold text-2xl md:text-3xl">
              When Your Users Trust AI
            </h2>
            <p className="mt-4 text-muted-foreground text-lg md:text-xl font-medium">
              Trust creates a powerful cycle that drives business growth and
              market leadership.
            </p>
            <div className="space-y-6 lg:space-y-10 mt-6 lg:mt-10">
              {DATA.map((step, index) => (
                <StepItem
                  key={step.id}
                  step={step}
                  isLast={index === DATA.length - 1}
                />
              ))}
            </div>
          </div>

          <Tabs
            defaultValue={flows[0].title}
            className="w-full"
            value={flowTitle}
            onValueChange={handleTabChange}
          >
            <TabsList className="w-full">
              {flows.map((flow) => (
                <TabsTrigger
                  key={flow.title}
                  value={flow.title}
                  className={cn('flex-1 transition-all', flow.className)}
                >
                  {flow.title}
                </TabsTrigger>
              ))}
            </TabsList>
            <div className="rounded-lg overflow-hidden aspect-[1174/1080] bg-card shadow-lg">
              <video
                ref={videoRef}
                className="block w-full h-full"
                autoPlay
                muted
                playsInline
                preload="auto"
                loop
                onTimeUpdate={handleTimeUpdate}
              >
                <source src="/home/flow.mp4" type="video/mp4" />
              </video>
            </div>
          </Tabs>
        </div>
      </section>
    </div>
  )
}

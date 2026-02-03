'use client'
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
    className: 'data-[state=active]:bg-primary',
    time: 0,
  },
  {
    title: 'Financial + AI',
    className: 'data-[state=active]:bg-phala-blue-300',
    time: 13,
  },
  {
    title: 'Data + Model',
    className: 'data-[state=active]:bg-phala-purple-300',
    time: 30,
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
    <div className="py-24">
      <section className="container">
        {/* Header - full width */}
        <div className="px-4 sm:px-8 lg:px-16">
          <h2 className="font-display font-semibold text-2xl leading-none md:text-3xl xl:text-4xl">
            When Your Users Trust AI
          </h2>
          <p className="mt-4 text-muted-foreground font-display text-lg leading-7 md:text-xl font-medium">
            Trust creates a powerful cycle that drives business growth and
            market leadership.
          </p>
        </div>

        {/* Horizontal step cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 px-4 sm:px-8 lg:px-16">
          {DATA.map((step) => (
            <div
              key={step.id}
              className="rounded-lg border border-border bg-card p-6 xl:p-8"
            >
              <p className="font-display text-4xl xl:text-5xl font-bold leading-none text-foreground/80">
                {step.id}
              </p>
              <p className="mt-4 text-lg leading-7 font-semibold font-display xl:text-xl">
                {step.title}
              </p>
              <p className="text-muted-foreground text-base leading-6 xl:text-lg xl:leading-7 mt-2">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Video + Tabs below */}
        <div className="mt-8 px-4 sm:px-8 lg:px-16">
          <div className="rounded-lg overflow-hidden aspect-[1174/1080] bg-card">
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
          <Tabs
            defaultValue={flows[0].title}
            className="w-full mt-2"
            value={flowTitle}
            onValueChange={handleTabChange}
          >
            <TabsList className="w-full xl:h-10">
              {flows.map((flow) => (
                <TabsTrigger
                  key={flow.title}
                  value={flow.title}
                  className={cn(
                    'flex-1 transition xl:text-base data-[state=active]:text-foreground text-muted-foreground',
                    flow.className,
                  )}
                >
                  {flow.title}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </section>
    </div>
  )
}

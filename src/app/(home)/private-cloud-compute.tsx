'use client'
import Lottie from 'lottie-react'
import { ChevronRight, Globe, Shield, Zap } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'
import animationData from './deploy-animation.json'

const tabsData = [
  {
    id: 'easy',
    label: 'Easy',
    description: 'Build in minutes, ship fast',
    icon: Zap,
    color: '#C0E735',
  },
  {
    id: 'open',
    label: 'Open',
    description: 'Open source and transparent',
    icon: Globe,
    color: '#98DCFF',
  },
  {
    id: 'private',
    label: 'Private',
    description: 'Privacy-first architecture',
    icon: Shield,
    color: '#AFBEFE',
  },
]

export default function PrivateCloudCompute() {
  return (
    <div className="w-full max-w-5xl mx-auto py-24">
      <section className="container">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4">
          <h2 className="text-center text-3xl font-bold text-balance lg:text-4xl">
            Private Cloud Compute
          </h2>
          <p className="text-center text-muted-foreground text-lg md:text-xl font-medium">
            All-in-one confidential compute platform for AI workloads.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-12 mx-auto rounded-3xl bg-primary/70 p-2 shadow gap-2 bg-radial-[at_top_center] from-white/60 to-transparent">
          {/* Left Column - Demo Card */}

          <Card className="relative rounded-2xl pt-8 pb-0 overflow-hidden">
            <CardContent className="flex h-full w-full items-center justify-center p-0">
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <div className="size-3.5 rounded-full bg-red-400" />
                <div className="size-3.5 rounded-full bg-yellow-400" />
                <div className="size-3.5 rounded-full bg-green-400" />
              </div>
              {/* Browser Window Content */}
              <div className="aspect-video">
                <Lottie animationData={animationData} loop={true} />
              </div>
            </CardContent>
          </Card>

          {/* Right Column - Info Card */}
          <div className="flex flex-col items-start p-6 lg:p-10">
            <h3 className="font-semibold text-xl md:text-2xl">
              Confidential VM
            </h3>

            <p className="text-muted-foreground text-lg font-medium mt-2">
              Starting at $50.37/month
            </p>

            <p className="text-muted-foreground mt-4">
              Deploy arbitrary containerized app to TEE in minutes. No steep
              learning curve. No hardware maintenance costs. Just focus on
              delivery.
            </p>

            <Button variant="outline" asChild className="mt-8 lg:mt-auto">
              <a
                href="https://cloud.phala.network/features/confidential-vm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more
                <ChevronRight className="ml-1 h-4" />
              </a>
            </Button>
          </div>
        </div>

        {/* New Tabs Section */}
        <div className="mt-6">
          <Tabs defaultValue="easy" className="gap-6">
            <TabsList className="flex h-auto w-full flex-col gap-6 bg-background md:flex-row">
              {tabsData.map((tab) => {
                const IconComponent = tab.icon
                return (
                  <TabsTrigger
                    key={tab.id}
                    value={tab.id}
                    className={cn(
                      'flex w-full flex-col items-start justify-start gap-1 rounded-md border p-4 text-left whitespace-normal bg-muted shadow',
                      `data-[state=active]:border-${tab.color}`,
                    )}
                  >
                    <div className="flex items-center gap-2 lg:gap-4">
                      <span
                        className="flex size-8 items-center justify-center rounded-full lg:size-10"
                        style={{ backgroundColor: tab.color }}
                      >
                        <IconComponent className="size-4 text-white" />
                      </span>
                      <h3 className="text-lg font-semibold md:text-2xl lg:text-xl">
                        {tab.label}
                      </h3>
                    </div>
                    <p className="font-normal text-muted-foreground md:block">
                      {tab.description}
                    </p>
                  </TabsTrigger>
                )
              })}
            </TabsList>
            <TabsContent value="easy">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="aspect-video rounded-md object-cover">
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                    alt=""
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="open">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg"
                alt=""
                className="aspect-video rounded-md object-cover"
              />
            </TabsContent>
            <TabsContent value="private">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg"
                alt=""
                className="aspect-video rounded-md object-cover"
              />
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}

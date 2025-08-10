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
    bg: 'bg-[#C0E735]',
    activeBg: 'data-[state=active]:bg-[#C0E735]',
  },
  {
    id: 'open',
    label: 'Open',
    description: 'Open source and transparent',
    icon: Globe,
    bg: 'bg-[#98DCFF]',
    activeBg: 'data-[state=active]:bg-[#98DCFF]',
  },
  {
    id: 'private',
    label: 'Private',
    description: 'Privacy-first architecture',
    icon: Shield,
    bg: 'bg-[#AFBEFE]',
    activeBg: 'data-[state=active]:bg-[#AFBEFE]',
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
            <TabsList className="flex h-auto w-full shadow">
              {tabsData.map((tab) => {
                const IconComponent = tab.icon
                return (
                  <TabsTrigger
                    key={tab.id}
                    value={tab.id}
                    className={cn(
                      'flex w-full gap-1 rounded-md p-2 md:p-4 text-left group transition cursor-pointer',
                      'hover:border border-none',
                      tab.activeBg,
                      'bg-radial-[at_top_center] from-white/60 to-transparent',
                    )}
                  >
                    <div className="flex items-center gap-2 lg:gap-4">
                      <span
                        className={cn(
                          'flex size-8 items-center justify-center rounded-full lg:size-10 group-data-[state=active]:bg-muted/70 shrink-0 transition',
                          tab.bg,
                        )}
                      >
                        <IconComponent className="size-4 text-white group-data-[state=active]:text-foreground transition" />
                      </span>
                      <div>
                        <h3 className="md:text-lg font-semibold">
                          {tab.label}
                        </h3>
                        <p className="font-normal text-muted-foreground max-lg:hidden">
                          {tab.description}
                        </p>
                      </div>
                    </div>
                  </TabsTrigger>
                )
              })}
            </TabsList>
            <TabsContent value="easy">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="aspect-476/400 rounded-lg shadow md:col-span-2 bg-muted"></div>
                <div className="aspect-226/400 rounded-lg shadow bg-muted"></div>
                <div className="aspect-226/400 rounded-lg shadow bg-muted"></div>
              </div>
            </TabsContent>
            <TabsContent value="open">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="aspect-630/520 rounded-lg shadow md:col-span-2 bg-muted"></div>
                <div className="aspect-305/520 rounded-lg shadow bg-muted"></div>
                <div className="aspect-305/520 rounded-lg shadow bg-muted"></div>
              </div>
            </TabsContent>
            <TabsContent value="private">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="aspect-630/520 rounded-lg shadow md:col-span-2 bg-muted"></div>
                <div className="aspect-305/520 rounded-lg shadow bg-muted"></div>
                <div className="aspect-305/520 rounded-lg shadow bg-muted"></div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}

'use client'
import Lottie from 'lottie-react'
import { ChevronRight } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import animationData from './deploy-animation.json'

const imgFrame3 = 'https://placehold.co/400'
const imgFrame4 = 'https://placehold.co/400'
const imgFrame5 = 'https://placehold.co/400'
const imgImage339 = 'https://placehold.co/400'

interface Tab {
  id: string
  label: string
}

const tabs = [
  { id: 'easy', label: 'Easy', description: 'Build in Minutes, Not Months' },
  { id: 'open', label: 'Open', description: 'Open Source and Transparent' },
  {
    id: 'private',
    label: 'Private',
    description: 'Privacy-First Architecture',
  },
]

interface TabSwitchProps {
  tabs: Tab[]
  defaultActiveTab?: string
  onTabChange?: (activeTabId: string) => void
  className?: string
}

export function TabSwitch({
  tabs,
  defaultActiveTab,
  onTabChange,
  className = '',
}: TabSwitchProps) {
  const [activeTab, setActiveTab] = useState(
    defaultActiveTab || tabs[0]?.id || '',
  )

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId)
    onTabChange?.(tabId)
  }

  return (
    <div className={cn(`flex gap-6 justify-center`, className)}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id
        return (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className="flex flex-col items-center px-2 py-3 transition-colors"
          >
            <span
              className={`text-xl text-[#1e2119] ${
                isActive ? 'font-semibold' : 'font-medium'
              }`}
            >
              {tab.label}
            </span>
            {isActive && <div className="h-1 bg-[#bae730] w-full mt-1"></div>}
          </button>
        )
      })}
    </div>
  )
}

export default function PrivateCloudCompute() {
  const [activeTab, setActiveTab] = useState<string>('easy')

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="container">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4">
          <h2 className="text-center text-3xl font-bold text-balance lg:text-4xl">
            Private Cloud Compute
          </h2>
          <p className="text-center text-muted-foreground text-lg font-medium">
            All-in-one confidential compute platform for AI workloads.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-12 max-w-5xl mx-auto rounded-3xl border bg-muted p-2 shadow">
          {/* Left Column - Demo Card */}

          <Card className="relative rounded-2xl border pt-8 pb-0 overflow-hidden">
            <CardContent className="flex h-full w-full items-center justify-center p-0">
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <div className="size-3.5 rounded-full bg-red-500" />
                <div className="size-3.5 rounded-full bg-yellow-500" />
                <div className="size-3.5 rounded-full bg-green-500" />
              </div>
              {/* Browser Window Content */}
              <div className="aspect-video">
                <Lottie animationData={animationData} loop={true} />
              </div>
            </CardContent>
          </Card>

          {/* Right Column - Info Card */}
          <div className="flex flex-col items-start p-8 lg:p-12">
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

        {/* Easy Build Section */}
        <div className="mb-4 grid grid-cols-1 lg:grid-cols-[350px_1fr] items-center gap-4 lg:gap-8">
          {/* Tab Switch Component */}
          <TabSwitch
            tabs={tabs}
            defaultActiveTab="easy"
            onTabChange={setActiveTab}
          />

          {/* Tab Navigation */}
          <div className="bg-[#c4f144] rounded-sm px-4 sm:px-8 lg:px-12 py-3 sm:py-6 lg:py-10 flex items-center gap-4 sm:gap-8 lg:gap-12 font-medium sm:text-xl lg:text-2xl">
            <h3 className="text-[#1e2119]">
              {tabs.find((tab) => tab.id === activeTab)?.label}
            </h3>
            <div className="h-8 border-l border-[#1e2119] shrink-0"></div>
            <p className="text-[#61645b]">
              {tabs.find((tab) => tab.id === activeTab)?.description}
            </p>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: Write Code */}
          <div className="bg-background relative rounded-sm p-6 md:p-10 sm:col-span-2 h-[520px] overflow-hidden">
            <div className="flex items-start max-sm:flex-col max-sm:items-end sm:justify-between gap-4 sm:gap-8 mb-6">
              <h4 className="font-semibold text-xl text-[#1a1a1a]">
                Write code, dockerize, <br />
                and deploy it as trustless TEE apps
              </h4>
              <img src="/home/docker.svg" alt="" className="w-[140px]" />
            </div>

            <div className="bg-[#B1DC37] rounded-md absolute left-[24px] md:left-[40px] right-[24px] md:right-[40px] top-[50%] border-[#C4F144B2] border-[12px] h-[300px] flex flex-col">
              <div className="flex gap-2 p-3">
                <div className="w-3 h-3 bg-[#eee] rounded-full"></div>
                <div className="w-3 h-3 bg-[#eee] rounded-full"></div>
                <div className="w-3 h-3 bg-[#eee] rounded-full"></div>
              </div>
              <div className="flex items-center justify-center flex-1">
                <p className="font-medium text-white text-lg -mt-12">
                  # Deploy the webshell Dstack example
                  <br />
                  phala cvms create
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Hardware Maintenance */}
          <div className="bg-background rounded-sm p-6 md:p-10 h-[350px] sm:h-[520px] relative">
            <h4 className="font-semibold text-xl text-[#1a1a1a] mb-6">
              We deal with the pain of hardware maintenance
            </h4>

            <div className="space-y-3 absolute top-[40%] sm:top-[50%] left-[24px] md:left-[40px]">
              <div className="flex gap-3">
                <div className="w-16 h-16 bg-background rounded-full border flex items-center justify-center shrink-0">
                  <img src={imgFrame3} alt="" className="w-10 h-10" />
                </div>
                <div className="w-16 h-16 bg-background rounded-full border flex items-center justify-center shrink-0">
                  <img src={imgFrame4} alt="" className="w-10 h-10" />
                </div>
                <div className="w-16 h-16 bg-background rounded-full border flex items-center justify-center shrink-0">
                  <img src={imgFrame5} alt="" className="w-10 h-10" />
                </div>
              </div>
              <p className="text-muted-foreground text-base font-normal">
                Major cloud providers have their own TEE
              </p>
            </div>
          </div>

          {/* Card 3: Deploy Production */}
          <div className="bg-background rounded-sm p-6 md:p-10 border-2 border-[#c4f144] relative overflow-hidden h-[350px] sm:h-[520px]">
            <h4 className="font-semibold text-xl text-[#1a1a1a]">
              Deploy production-grade TEE workloads in minutes
            </h4>

            <div className="bg-background absolute left-[24px] md:left-[40px] top-[40%] sm:top-[50%] bottom-[-10%] w-[120%] rounded-md border-[#C4F144B2] border-[12px] overflow-hidden">
              <div className="flex gap-2 p-3">
                <div className="w-3 h-3 bg-[#eee] rounded-full"></div>
                <div className="w-3 h-3 bg-[#eee] rounded-full"></div>
                <div className="w-3 h-3 bg-[#eee] rounded-full"></div>
              </div>

              <img
                src={imgImage339}
                alt="Production Interface"
                className="w-full block"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

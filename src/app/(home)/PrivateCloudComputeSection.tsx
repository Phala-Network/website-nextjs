'use client'
import { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa6'

import { cn } from '@/lib/utils'

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

export default function PrivateCloudComputeSection() {
  const [activeTab, setActiveTab] = useState<string>('easy')

  return (
    <div className="w-full py-4 sm:py-8 lg:py-16 px-2 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="mx-auto text-center text-3xl md:text-4xl lg:text-5xl font-semibold mb-8 lg:mb-12">
          Private Cloud Compute
        </h2>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_500px] gap-4 sm:gap-8 mb-8 lg:mb-12">
          {/* Left Column - Demo Card */}
          <div className="rounded-sm lg:h-[420px] relative overflow-hidden bg-gradient-to-t from-[#7ca328e0] to-[#b9e730d1]">
            {/* Demo Content */}
            <div className="relative w-full h-full pt-4 px-4 sm:pt-8 sm:px-8 flex justify-center">
              <div className="rounded-t-lg pt-3 px-3 bg-background/50 w-full max-w-[530px] aspect-[530/400]">
                <div className="bg-background rounded-t w-full h-full">
                  <div className="px-6 py-4 border-b">
                    <p className="font-semibold text-[#1e2119]">Phala Cloud</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right Column - Info Card */}
          <div className="bg-background rounded-sm p-6 md:p-10 w-full h-[280px] lg:h-[420px] flex flex-col">
            <h3 className="font-semibold text-2xl md:text-3xl text-[#1e2119]">
              Phala Cloud
            </h3>
            <p className="text-[#61645b] mt-4 font-blog">
              All-in-one confidential compute platform for AI workloads
            </p>

            <p className="text-[#61645b] mt-4 font-blog">
              Starting at $50.37/month
            </p>

            <a
              href="https://cloud.phala.network"
              className="text-gray-800 font-semibold flex items-center gap-2 hover:underline mt-auto"
            >
              Start building <FaArrowRight className="w-4 h-4" />
            </a>
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
              <img src="/next/docker.svg" alt="" className="w-[140px]" />
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
              <p className="text-[#61645b] text-base font-normal">
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

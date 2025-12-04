'use client'

import { Building, GitCommit, Globe, Users } from 'lucide-react'
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts'

import { Button } from '@/components/ui/button'
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'

const bgPattern = {
  backgroundImage:
    'linear-gradient(135deg, var(--muted) 25%, transparent 25.5%, transparent 50%, var(--muted) 50.5%, var(--muted) 75%, transparent 75.5%, transparent)',
  backgroundSize: '10px 10px',
}

const HeroCommits = () => {
  // Sample commit data representing 6 years of building
  const chartData = [
    {
      year: '2018',
      commits: 1200,
      label:
        'Inspired by using TEE to scale blockchain, founding team assembles',
    },
    {
      year: '2019',
      commits: 2400,
      label: 'Raised only $1M seed to kick off Phala Network vision',
    },
    {
      year: '2020',
      commits: 3600,
      label: 'Launched Phala Network as decentralized TEE cloud',
    },
    {
      year: '2021',
      commits: 4800,
      label: 'Built the biggest decentralized SGX Network',
    },
    {
      year: '2022',
      commits: 5200,
      label: 'Launched Phat Contracts for smart contract capabilities',
    },
    {
      year: '2023',
      commits: 6100,
      label: 'Developed Docker-based TEE services',
    },
    {
      year: '2024',
      commits: 7200,
      label: 'Pioneered GPU TEE for AI workloads',
    },
  ]

  const chartConfig = {
    commits: {
      label: 'Commits',
      color: 'hsl(var(--primary))',
    },
  } satisfies ChartConfig

  return (
    <section className="relative grid w-full overflow-hidden py-12 md:py-24 lg:py-32">
      <div className="container relative z-10 h-full grid-cols-1 items-center justify-center gap-6 md:gap-8 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="font-display text-muted-foreground flex items-center justify-center gap-2 md:gap-3 text-xs md:text-sm font-medium leading-5 tracking-tight mb-3 md:mb-4">
            <span className="inline-block size-2 rounded-full bg-green-500 animate-pulse" />
            <span className="uppercase">Building in Public Since 2018</span>
          </div>
          <h1 className="font-display mt-3 md:mt-4 max-w-4xl text-2xl md:text-4xl lg:text-6xl font-bold leading-tight tracking-tight">
            6 Years of Commitment to{' '}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Confidential Computing
            </span>
          </h1>
          <p className="font-display text-muted-foreground mt-4 md:mt-6 max-w-2xl text-sm md:text-lg leading-7 px-4">
            Over 30,000+ commits from our global team of 25+ engineers, building
            the future of privacy-preserving computation from our offices in San
            Francisco and Singapore.
          </p>
        </div>

        {/* Stats Bar - Mobile optimized */}
        <div className="mt-8 md:mt-12 relative flex flex-wrap items-center justify-center gap-4 md:gap-8 border-y h-12 md:h-20">
          <div className="flex items-center gap-2 md:gap-3">
            <GitCommit className="h-4 w-4 md:h-5 md:w-5 text-primary" />
            <div>
              <div className="font-display text-lg md:text-2xl font-bold leading-none">30K+</div>
              <div className="font-display text-xs md:text-sm leading-5 text-muted-foreground">
                Commits
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 md:gap-3">
            <Users className="h-4 w-4 md:h-5 md:w-5 text-primary" />
            <div>
              <div className="font-display text-lg md:text-2xl font-bold leading-none">25+</div>
              <div className="font-display text-xs md:text-sm leading-5 text-muted-foreground">
                Team
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 md:gap-3">
            <Building className="h-4 w-4 md:h-5 md:w-5 text-primary" />
            <div>
              <div className="text-lg md:text-2xl font-bold">2</div>
              <div className="text-xs md:text-sm text-muted-foreground">
                Offices
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 md:gap-3">
            <Globe className="h-4 w-4 md:h-5 md:w-5 text-primary" />
            <div>
              <div className="text-lg md:text-2xl font-bold">SF & SG</div>
              <div className="text-xs md:text-sm text-muted-foreground hidden sm:block">
                San Francisco & Singapore
              </div>
              <div className="text-xs md:text-sm text-muted-foreground sm:hidden">
                Global
              </div>
            </div>
          </div>
          <BgPattern />
        </div>

        {/* Commit Chart - Mobile optimized */}
        <div className="h-fit w-full rounded-xl md:rounded-2xl bg-card p-3 md:p-6 lg:h-[400px]">
          <div className="mb-3 md:mb-4">
            <h3 className="font-display text-base md:text-lg font-semibold leading-tight">
              Commit History
            </h3>
            <p className="font-display text-xs md:text-sm leading-5 text-muted-foreground">
              Consistent development over 6 years
            </p>
          </div>
          <ChartContainer
            config={chartConfig}
            className="h-[250px] md:h-[300px] w-full"
          >
            <BarChart
              accessibilityLayer
              data={chartData}
              margin={{
                left: 8,
                right: 8,
                top: 8,
                bottom: 8,
              }}
            >
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <XAxis
                dataKey="year"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tick={{ fontSize: 12 }}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => `${value / 1000}k`}
                tick={{ fontSize: 12 }}
                width={40}
              />
              <ChartTooltip
                content={
                  <ChartTooltipContent
                    className="w-[180px] md:w-[200px] text-xs md:text-sm"
                    nameKey="commits"
                    labelFormatter={(value, payload) => {
                      if (payload && payload[0]) {
                        const data = payload[0].payload
                        return `${value} - ${data.label}`
                      }
                      return value
                    }}
                  />
                }
              />
              <Bar
                dataKey="commits"
                fill="var(--secondary)"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ChartContainer>
        </div>

        {/* Action Buttons - Mobile optimized */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mt-6 md:mt-8">
          <Button size="lg" className="font-medium w-full sm:w-auto min-w-[200px]" asChild>
            <a
              href="https://github.com/Phala-Network"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitCommit className="mr-2 h-4 w-4" />
              View GitHub
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="font-medium w-full sm:w-auto min-w-[200px]"
            asChild
          >
            <a href="#team">
              <Users className="mr-2 h-4 w-4" />
              Meet the Team
            </a>
          </Button>
        </div>

        <div className="relative h-12 md:h-20 border mt-6 md:mt-8">
          <BgPattern sideLines={false} />
        </div>
      </div>
    </section>
  )
}

export { HeroCommits }

const BgPattern = ({ sideLines = true }: { sideLines?: boolean }) => {
  return (
    <>
      {/* bg pattern left */}
      <div
        className="absolute left-0 top-1/2 z-20 size-20 -translate-x-full -translate-y-1/2 border border-r-0 hidden lg:block"
        style={bgPattern}
      >
        <span className="bg-foreground absolute -right-1 -top-1 z-20 size-2" />
        <span className="bg-foreground absolute -bottom-1 -right-1 z-20 size-2" />
        <span className="bg-foreground absolute -bottom-1 -left-1 z-20 size-2" />
        <span className="bg-foreground absolute -left-1 -top-1 z-20 size-2" />
      </div>

      {/* bg pattern right */}
      <div
        className="absolute right-0 top-1/2 z-20 size-20 -translate-y-1/2 translate-x-full border border-l-0 hidden lg:block"
        style={bgPattern}
      >
        <span className="bg-foreground absolute -right-1 -top-1 z-20 size-2" />
        <span className="bg-foreground absolute -bottom-1 -right-1 z-20 size-2" />
        <span className="bg-foreground absolute -bottom-1 -left-1 z-20 size-2" />
        <span className="bg-foreground absolute -left-1 -top-1 z-20 size-2" />
      </div>

      {/* bg Lines left */}
      {sideLines && (
        <div className="absolute left-0 z-10 h-[200vh] w-px border-l" />
      )}
      {sideLines && (
        <div className="absolute -left-20 z-10 h-[200vh] w-px border-l hidden lg:block" />
      )}

      {/* bg Lines right */}
      {sideLines && (
        <div className="absolute right-0 z-10 h-[200vh] w-px border-l" />
      )}
      {sideLines && (
        <div className="absolute -right-20 z-10 h-[200vh] w-px border-l hidden lg:block" />
      )}
    </>
  )
}

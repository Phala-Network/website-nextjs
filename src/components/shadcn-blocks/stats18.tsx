"use client";

import React from "react";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface StatItem {
  title: string;
  description: string;
}

const statsData: StatItem[] = [
  {
    title: "<5%",
    description: "TEE Overhead",
  },
  {
    title: "4.8 TB/s",
    description: "H200 Memory Bandwidth",
  },
  {
    title: "2x Faster",
    description: "H200 vs H100",
  },
];

const Stats18 = () => {
  return (
    <section className="overflow-hidden py-32 bg-muted/30">
      <div className="container flex w-full flex-col items-center justify-center px-4">
        <p className="bg-muted mb-4 rounded-full px-2 py-1 text-xs uppercase">
          REAL-WORLD PERFORMANCE
        </p>
        <h2 className="relative py-2 text-center font-sans text-4xl font-semibold tracking-tighter lg:text-5xl">
          Hardware Security Without Compromise
        </h2>
        <p className="text-muted-foreground mx-auto max-w-xl px-5 text-center text-sm lg:text-base">
          Full-Stack TEE protection delivers near-native performance. Benchmarked with SP1 zkVM generating ZK proofs in GPU TEE environment.
        </p>

        <div className="my-10 h-[40vh] w-full max-w-xl">
          <ChartRadarDots />
        </div>
        <div className="flex w-full max-w-2xl items-center justify-between">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="w-25 flex flex-col items-center justify-center gap-2 text-center"
            >
              <h2 className="text-3xl font-semibold tracking-tighter md:text-5xl">
                {stat.title}
              </h2>
              <p className="text-muted-foreground text-sm">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 273 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

const ChartRadarDots = () => {
  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square max-h-[350px]"
    >
      <RadarChart data={chartData}>
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <PolarAngleAxis dataKey="month" />
        <PolarGrid />
        <Radar
          dataKey="desktop"
          fill="var(--color-desktop)"
          fillOpacity={0.6}
          dot={{
            r: 4,
            fillOpacity: 1,
          }}
        />
      </RadarChart>
    </ChartContainer>
  );
};

export { Stats18 };

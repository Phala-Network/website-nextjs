"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const HeroCommits = () => {
  const [hoveredYear, setHoveredYear] = useState<number | null>(null);

  const commitData = [
    { year: 2018, commits: 1200, description: "Founded Phala Network and began exploring TEE technology foundations" },
    { year: 2019, commits: 2800, description: "Core protocol development and initial TEE scaling research" },
    { year: 2020, commits: 4200, description: "Founding team expansion and $1M seed funding secured" },
    { year: 2021, commits: 6800, description: "Phala Network mainnet launch and SGX network infrastructure" },
    { year: 2022, commits: 8900, description: "Phat Contracts introduction for off-chain computation capabilities" },
    { year: 2023, commits: 7400, description: "Docker TEE container development and enterprise integrations" },
    { year: 2024, commits: 6200, description: "GPU TEE advancement for AI workloads and Safe AGI research" },
    { year: 2025, commits: 1800, description: "Continued innovation in confidential computing and AI safety" }
  ];

  const totalCommits = commitData.reduce((sum, data) => sum + data.commits, 0);
  const maxCommits = Math.max(...commitData.map(d => d.commits));

  return (
    <section className="py-20 bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            6+ Years Building in Public
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Commit History
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            From pioneering TEE technology to building the world's largest confidential computing cloud.
            Every commit tells the story of our journey toward a privacy-first future.
          </p>
          <div className="text-center mb-8">
            <span className="text-3xl font-bold text-primary">{totalCommits.toLocaleString()}+</span>
            <span className="text-muted-foreground ml-2">total commits</span>
          </div>
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-8">
            <div className="grid grid-cols-8 gap-4 h-64">
              {commitData.map((data, index) => (
                <div
                  key={data.year}
                  className="flex flex-col justify-end items-center relative group cursor-pointer"
                  onMouseEnter={() => setHoveredYear(data.year)}
                  onMouseLeave={() => setHoveredYear(null)}
                >
                  {/* Tooltip */}
                  {hoveredYear === data.year && (
                    <div className="absolute bottom-full mb-4 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="bg-popover border rounded-lg p-3 shadow-lg max-w-xs">
                        <div className="text-sm font-semibold mb-1">{data.year}</div>
                        <div className="text-xs text-muted-foreground mb-2">
                          {data.commits.toLocaleString()} commits
                        </div>
                        <div className="text-xs leading-relaxed">
                          {data.description}
                        </div>
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-popover"></div>
                      </div>
                    </div>
                  )}

                  {/* Bar */}
                  <div
                    className="w-8 bg-gradient-to-t from-primary to-primary/60 rounded-t-sm transition-all duration-300 hover:from-primary hover:to-primary/80"
                    style={{
                      height: `${(data.commits / maxCommits) * 180}px`,
                      minHeight: '20px'
                    }}
                  />

                  {/* Year label */}
                  <div className="text-xs font-medium mt-2 text-center">
                    {data.year}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export { HeroCommits };
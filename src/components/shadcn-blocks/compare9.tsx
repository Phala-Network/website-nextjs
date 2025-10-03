"use client";

import { CheckCircle, Minus, XCircle } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { cn } from "@/lib/utils";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Compare9 = () => {
  const [hoveredModel, setHoveredModel] = useState<string | null>(null);

  const comparisonData = [
    {
      metric: "Context Window",
      gpt4: { value: "128K tokens", status: "worst" },
      claude: { value: "200K tokens", status: "neutral" },
      gemini: { value: "2M tokens", status: "best" },
    },
    {
      metric: "Response Speed",
      gpt4: { value: "1.2 sec", status: "best" },
      claude: { value: "1.8 sec", status: "neutral" },
      gemini: { value: "2.2 sec", status: "worst" },
    },
    {
      metric: "Code Generation",
      gpt4: { value: "94%", status: "neutral" },
      claude: { value: "95%", status: "best" },
      gemini: { value: "88%", status: "worst" },
    },
    {
      metric: "Reasoning Score",
      gpt4: { value: "91/100", status: "neutral" },
      claude: { value: "92/100", status: "best" },
      gemini: { value: "86/100", status: "worst" },
    },
    {
      metric: "Input Tokens",
      gpt4: { value: "$3.50/1M", status: "worst" },
      claude: { value: "$3.00/1M", status: "neutral" },
      gemini: { value: "$1.25/1M", status: "best" },
    },
    {
      metric: "Output Tokens",
      gpt4: { value: "$14.00/1M", status: "neutral" },
      claude: { value: "$15.00/1M", status: "worst" },
      gemini: { value: "$5.00/1M", status: "best" },
    },
    {
      metric: "Rate Limit",
      gpt4: { value: "50K RPM", status: "neutral" },
      claude: { value: "40K RPM", status: "worst" },
      gemini: { value: "60K RPM", status: "best" },
    },
    {
      metric: "Free Tier",
      gpt4: { value: "Very Limited", status: "worst" },
      claude: { value: "Limited", status: "neutral" },
      gemini: { value: "Generous", status: "best" },
    },
  ];

  return (
    <section className="py-32">
      <div className="container mx-auto">
        <div className="relative overflow-hidden p-8">
          <div className="border-border/50 bg-background/50 relative overflow-hidden border backdrop-blur-sm">
            <Table>
              <TableHeader>
                <TableRow className="border-border/50">
                  <TableHead className="text-foreground font-semibold">
                    Metric
                  </TableHead>
                  <TableHead className="text-foreground text-center font-semibold">
                    <div className="flex items-center justify-center gap-2">
                      <Image
                        src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/openai-icon.svg"
                        alt="OpenAI"
                        width={16}
                        height={16}
                        className="h-4 w-4"
                      />
                      GPT-4o
                    </div>
                  </TableHead>
                  <TableHead className="text-foreground text-center font-semibold">
                    <div className="flex items-center justify-center gap-2">
                      <Image
                        src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/claude-icon.svg"
                        alt="Claude"
                        width={16}
                        height={16}
                        className="h-4 w-4"
                      />
                      Claude 3.5
                    </div>
                  </TableHead>
                  <TableHead className="text-foreground text-center font-semibold">
                    <div className="flex items-center justify-center gap-2">
                      <Image
                        src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/gemini-icon.svg"
                        alt="Gemini"
                        width={16}
                        height={16}
                        className="h-4 w-4"
                      />
                      Gemini Pro 1.5
                    </div>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparisonData.map((row, index) => (
                  <TableRow
                    key={index}
                    className="border-border/30 hover:bg-muted/30 transition-colors"
                  >
                    <TableCell className="text-foreground py-4 font-medium">
                      {row.metric}
                    </TableCell>
                    <TableCell
                      className={cn(
                        "cursor-pointer py-4 text-center font-medium transition-all duration-300",
                        row.gpt4.status === "best"
                          ? "bg-green-50 text-green-600 dark:bg-green-950/20"
                          : row.gpt4.status === "worst"
                            ? "bg-red-50 text-red-600 dark:bg-red-950/20"
                            : "text-foreground bg-muted/50",
                        hoveredModel === "gpt4" &&
                          "bg-red-50/80 dark:bg-red-950/30",
                      )}
                      onMouseEnter={() => setHoveredModel("gpt4")}
                      onMouseLeave={() => setHoveredModel(null)}
                    >
                      <div className="flex items-center justify-center gap-2">
                        {row.gpt4.status === "best" && (
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        )}
                        {row.gpt4.status === "worst" && (
                          <XCircle className="h-4 w-4 text-red-600" />
                        )}
                        {row.gpt4.status === "neutral" && (
                          <Minus className="text-muted-foreground h-4 w-4" />
                        )}
                        <span>{row.gpt4.value}</span>
                      </div>
                    </TableCell>
                    <TableCell
                      className={cn(
                        "cursor-pointer py-4 text-center font-medium transition-all duration-300",
                        row.claude.status === "best"
                          ? "bg-green-50 text-green-600 dark:bg-green-950/20"
                          : row.claude.status === "worst"
                            ? "bg-red-50 text-red-600 dark:bg-red-950/20"
                            : "text-foreground bg-muted/50",
                        hoveredModel === "claude" &&
                          "bg-blue-50/80 dark:bg-blue-950/30",
                      )}
                      onMouseEnter={() => setHoveredModel("claude")}
                      onMouseLeave={() => setHoveredModel(null)}
                    >
                      <div className="flex items-center justify-center gap-2">
                        {row.claude.status === "best" && (
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        )}
                        {row.claude.status === "worst" && (
                          <XCircle className="h-4 w-4 text-red-600" />
                        )}
                        {row.claude.status === "neutral" && (
                          <Minus className="text-muted-foreground h-4 w-4" />
                        )}
                        <span>{row.claude.value}</span>
                      </div>
                    </TableCell>
                    <TableCell
                      className={cn(
                        "cursor-pointer py-4 text-center font-medium transition-all duration-300",
                        row.gemini.status === "best"
                          ? "bg-green-50 text-green-600 dark:bg-green-950/20"
                          : row.gemini.status === "worst"
                            ? "bg-red-50 text-red-600 dark:bg-red-950/20"
                            : "text-foreground bg-muted/50",
                        hoveredModel === "gemini" &&
                          "bg-green-50/80 dark:bg-green-950/30",
                      )}
                      onMouseEnter={() => setHoveredModel("gemini")}
                      onMouseLeave={() => setHoveredModel(null)}
                    >
                      <div className="flex items-center justify-center gap-2">
                        {row.gemini.status === "best" && (
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        )}
                        {row.gemini.status === "worst" && (
                          <XCircle className="h-4 w-4 text-red-600" />
                        )}
                        {row.gemini.status === "neutral" && (
                          <Minus className="text-muted-foreground h-4 w-4" />
                        )}
                        <span>{row.gemini.value}</span>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Technical Analysis Section */}
          <div className="border-border/50 bg-muted/20 relative mt-8 border p-6">
            <div className="relative">
              <h4 className="text-foreground mb-4 font-mono text-sm font-semibold uppercase tracking-wider">
                Technical Analysis
              </h4>
              <div className="text-muted-foreground space-y-3 font-mono text-xs">
                <div className="grid gap-2 md:grid-cols-3">
                  <div
                    className={cn(
                      "border-border/30 bg-background/50 rounded border p-3 transition-all duration-300",
                      hoveredModel === "gpt4" &&
                        "bg-red-50/20 shadow-lg ring-2 ring-red-500/50 dark:bg-red-950/10",
                    )}
                  >
                    <div className="text-foreground mb-1 font-medium">
                      GPT-4o
                    </div>
                    <div className="space-y-1">
                      <div>• Response latency: 1.2s (best)</div>
                      <div>• Code accuracy: 94% (neutral)</div>
                      <div>• Reasoning score: 91/100 (neutral)</div>
                      <div>• Input cost: $3.50/1M tokens (worst)</div>
                      <div>• Rate limit: 50K RPM (neutral)</div>
                    </div>
                  </div>
                  <div
                    className={cn(
                      "border-border/30 bg-background/50 rounded border p-3 transition-all duration-300",
                      hoveredModel === "claude" &&
                        "bg-blue-50/20 shadow-lg ring-2 ring-blue-500/50 dark:bg-blue-950/10",
                    )}
                  >
                    <div className="text-foreground mb-1 font-medium">
                      Claude 3.5
                    </div>
                    <div className="space-y-1">
                      <div>• Response latency: 1.8s (neutral)</div>
                      <div>• Code accuracy: 95% (best)</div>
                      <div>• Reasoning score: 92/100 (best)</div>
                      <div>• Input cost: $3.00/1M tokens (neutral)</div>
                      <div>• Rate limit: 40K RPM (worst)</div>
                    </div>
                  </div>
                  <div
                    className={cn(
                      "border-border/30 bg-background/50 rounded border p-3 transition-all duration-300",
                      hoveredModel === "gemini" &&
                        "bg-green-50/20 shadow-lg ring-2 ring-green-500/50 dark:bg-green-950/10",
                    )}
                  >
                    <div className="text-foreground mb-1 font-medium">
                      Gemini Pro 1.5
                    </div>
                    <div className="space-y-1">
                      <div>• Context window: 2M tokens (best)</div>
                      <div>• Input cost: $1.25/1M tokens (best)</div>
                      <div>• Output cost: $5.00/1M tokens (best)</div>
                      <div>• Rate limit: 60K RPM (best)</div>
                      <div>• Free tier: Generous (best)</div>
                    </div>
                  </div>
                </div>
                <div className="border-border/30 bg-background/50 mt-4 rounded border p-3">
                  <div className="text-foreground mb-2 font-medium">
                    Performance Summary
                  </div>
                  <div className="space-y-1">
                    <div>
                      • GPT-4o: Fastest response times with strong code
                      generation
                    </div>
                    <div>
                      • Claude 3.5: Excellent reasoning capabilities and
                      balanced performance
                    </div>
                    <div>
                      • Gemini Pro 1.5: Best value proposition with competitive
                      pricing
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Compare9 };

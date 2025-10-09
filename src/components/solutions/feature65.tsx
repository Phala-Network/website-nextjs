"use client";

import clsx from "clsx";
import {
  ChevronDown,
  ChevronUp,
  GanttChartSquareIcon,
  SwatchBook,
} from "lucide-react";
import { GitBranch, Sparkles } from "lucide-react";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";

interface Integration {
  title: string;
  description: string;
  icon: string;
  color: string;
  tags: string[];
}

interface Feature65Props {
  integrations?: Integration[];
}

const defaultIntegrations: Integration[] = [
  {
    title: "Hardware Security",
    description:
      "CPU-level memory encryption with Intel TDX and AMD SEV keeps your computations invisible to infrastructure operators.",
    icon: "swatchbook",
    color: "bg-red-400",
    tags: [
      "Features",
      "Intel TDX Support",
      "AMD SEV Support",
      "Memory Encryption",
      "Sealed Storage",
    ],
  },
  {
    title: "Remote Attestation",
    description:
      "Cryptographic proofs verify your code runs in genuine TEE hardware before you send any sensitive data.",
    icon: "gitbranch",
    color: "bg-blue-400",
    tags: [
      "Features",
      "Hardware Proofs",
      "Code Verification",
      "Tamper Detection",
      "Zero-Trust Architecture",
    ],
  },
  {
    title: "Developer Experience",
    description:
      "Deploy with familiar tools and workflows—Docker containers, REST APIs, and standard SDKs work out of the box.",
    icon: "sparkles",
    color: "bg-yellow-400",
    tags: [
      "Features",
      "Docker Support",
      "REST APIs",
      "SDKs Included",
      "Quick Deployment",
    ],
  },
  {
    title: "Enterprise Ready",
    description:
      "SOC 2 Type II compliance, audit trails, and 24/7 support for production workloads at any scale.",
    icon: "ganttchart",
    color: "bg-green-400",
    tags: [
      "Features",
      "SOC 2 Type II",
      "Audit Trails",
      "24/7 Support",
      "Enterprise SLA",
    ],
  },
];

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "swatchbook":
      return <SwatchBook className="h-8 w-8" />;
    case "gitbranch":
      return <GitBranch className="h-8 w-8" />;
    case "sparkles":
      return <Sparkles className="h-8 w-8" />;
    case "ganttchart":
      return <GanttChartSquareIcon className="h-8 w-8" />;
    default:
      return <SwatchBook className="h-8 w-8" />;
  }
};

const Feature65 = ({ integrations = defaultIntegrations }: Feature65Props) => {
  const [activeTabId, setActiveTabId] = useState<number | null>(null);

  return (
    <section className="py-32">
      <div className="container">
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-4">
          {integrations.map((item, index) => (
            <div
              key={index}
              className="flex h-full flex-col justify-between gap-2"
            >
              <div className="bg-muted-foreground/5 flex items-center justify-between rounded-xl p-6">
                <div className="flex items-center gap-3">
                  <div className={clsx("h-16 w-3 rounded-md", item.color)} />
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </div>
                <div className="flex items-center gap-6">
                  {getIcon(item.icon)}
                  <div
                    className="bg-background flex h-12 w-12 items-center justify-center rounded-lg lg:hidden"
                    onClick={() =>
                      setActiveTabId(activeTabId === index ? null : index)
                    }
                  >
                    {activeTabId === index ? (
                      <ChevronUp className="h-8" />
                    ) : (
                      <ChevronDown className="h-8" />
                    )}
                  </div>
                </div>
              </div>
              <div
                className={` ${activeTabId === index ? "flex" : "hidden"} bg-muted-foreground/5 h-full flex-col items-start justify-between gap-64 rounded-xl p-6 transition-all duration-300 lg:flex`}
              >
                <div className="text-muted-foreground/90 text-xl font-medium">
                  {item.description}
                </div>
                <div className="flex flex-col items-start gap-4">
                  {item.tags.map((tag, index) => (
                    <Badge
                      variant="outline"
                      className={`${index == 0 ? "bg-muted/5" : "bg-background"} rounded-2xl border-0 px-4 py-3 text-base font-medium`}
                      key={tag}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature65 };

import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  ChartBarIcon,
  ChartNetwork,
  CheckCircle2,
  Clock,
  Cpu,
  DollarSign,
  LocateFixed,
  Server,
  Settings,
  UserIcon,
  Zap,
} from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

interface CardData {
  icon: React.ElementType;
  title: string;
  description: string;
  href: string;
  metrics: {
    value: string;
    label: string;
    trend: number;
    secondaryMetric?: {
      value: string;
      label: string;
    };
  };
  status: {
    label: "Active" | "In Progress" | "Optimizing";
    color: "text-green-500" | "text-yellow-500" | "text-blue-500";
    icon: LucideIcon;
    lastUpdated: string;
  };
  performance: {
    cpu: string;
    memory: string;
    latency: string;
  };
  deployment: {
    version: string;
    environment: "production" | "staging" | "development";
    region: string;
  };
}

const CARDS: CardData[] = [
  {
    icon: DollarSign,
    title: "Revenue Optimization",
    description:
      "AI-powered revenue optimization engine with real-time market analysis and dynamic pricing strategies.",
    href: "#revenue",
    metrics: {
      value: "99.9%",
      label: "Accuracy Rate",
      trend: 12.5,
      secondaryMetric: {
        value: "2.3ms",
        label: "Avg. Response Time",
      },
    },
    status: {
      label: "Active",
      color: "text-green-500",
      icon: CheckCircle2,
      lastUpdated: "2024-03-21T15:30:00Z",
    },
    performance: {
      cpu: "45%",
      memory: "2.8GB",
      latency: "120ms",
    },
    deployment: {
      version: "v2.3.4",
      environment: "production",
      region: "us-west-2",
    },
  },
  {
    icon: ChartBarIcon,
    title: "Performance Analytics",
    description:
      "Advanced analytics platform processing over 1M events per second with distributed computing.",
    href: "#analytics",
    metrics: {
      value: "1.2ms",
      label: "Response Time",
      trend: -8.3,
      secondaryMetric: {
        value: "850k",
        label: "Req/sec",
      },
    },
    status: {
      label: "Optimizing",
      color: "text-blue-500",
      icon: Zap,
      lastUpdated: "2024-03-21T15:28:00Z",
    },
    performance: {
      cpu: "78%",
      memory: "12.4GB",
      latency: "1.2ms",
    },
    deployment: {
      version: "v3.1.0",
      environment: "production",
      region: "eu-west-1",
    },
  },
  {
    icon: Settings,
    title: "System Architecture",
    description:
      "Cloud-native infrastructure with auto-scaling capabilities and multi-region deployment.",
    href: "#architecture",
    metrics: {
      value: "99.99%",
      label: "Uptime",
      trend: 2.1,
      secondaryMetric: {
        value: "12",
        label: "Active Regions",
      },
    },
    status: {
      label: "Active",
      color: "text-green-500",
      icon: CheckCircle2,
      lastUpdated: "2024-03-21T15:25:00Z",
    },
    performance: {
      cpu: "65%",
      memory: "32GB",
      latency: "85ms",
    },
    deployment: {
      version: "v2.8.1",
      environment: "production",
      region: "global",
    },
  },
  {
    icon: UserIcon,
    title: "User Authentication",
    description:
      "Zero-trust security model with biometric authentication and behavioral analysis.",
    href: "#security",
    metrics: {
      value: "0.001%",
      label: "False Positive Rate",
      trend: -15.7,
      secondaryMetric: {
        value: "50ms",
        label: "Auth Time",
      },
    },
    status: {
      label: "In Progress",
      color: "text-yellow-500",
      icon: Clock,
      lastUpdated: "2024-03-21T15:15:00Z",
    },
    performance: {
      cpu: "35%",
      memory: "4.2GB",
      latency: "50ms",
    },
    deployment: {
      version: "v1.9.3",
      environment: "staging",
      region: "us-east-1",
    },
  },
  {
    icon: ChartNetwork,
    title: "Network Intelligence",
    description:
      "Self-healing network infrastructure with predictive maintenance and anomaly detection.",
    href: "#network",
    metrics: {
      value: "500TB",
      label: "Daily Processing",
      trend: 25.4,
      secondaryMetric: {
        value: "99.999%",
        label: "Availability",
      },
    },
    status: {
      label: "Active",
      color: "text-green-500",
      icon: CheckCircle2,
      lastUpdated: "2024-03-21T15:29:00Z",
    },
    performance: {
      cpu: "82%",
      memory: "128GB",
      latency: "5ms",
    },
    deployment: {
      version: "v4.2.0",
      environment: "production",
      region: "multi-region",
    },
  },
  {
    icon: LocateFixed,
    title: "Location Services",
    description:
      "High-precision geolocation services with indoor mapping and spatial analytics.",
    href: "#location",
    metrics: {
      value: "±0.5m",
      label: "Accuracy",
      trend: 5.8,
      secondaryMetric: {
        value: "10M",
        label: "Daily Users",
      },
    },
    status: {
      label: "Optimizing",
      color: "text-blue-500",
      icon: Zap,
      lastUpdated: "2024-03-21T15:20:00Z",
    },
    performance: {
      cpu: "55%",
      memory: "16GB",
      latency: "150ms",
    },
    deployment: {
      version: "v2.4.5",
      environment: "production",
      region: "global",
    },
  },
];

const Feature237 = () => {
  return (
    <section className="bg-background py-32">
      <div className="container">
        <h1 className="mb-10 text-center text-3xl font-bold tracking-tighter text-foreground lg:text-6xl">
          System Capabilities
        </h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {CARDS.map((card, index) => (
            <a key={index} href={card.href} className="group block h-full">
              <div className="flex h-full flex-col rounded-xl border bg-card p-6 transition-all duration-200 hover:border-primary hover:shadow-lg">
                <div className="flex h-full flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl text-foreground transition-colors duration-200 group-hover:text-primary">
                          {card.title}
                        </h3>
                        <div className="flex items-center space-x-2">
                          <card.status.icon
                            className={cn("h-4 w-4", card.status.color)}
                          />
                          <span
                            className={cn(
                              "font-mono text-sm",
                              card.status.color,
                            )}
                          >
                            {card.status.label}
                          </span>
                          <span className="font-mono text-xs text-muted-foreground">
                            [
                            {new Date(
                              card.status.lastUpdated,
                            ).toLocaleTimeString()}
                            ]
                          </span>
                        </div>
                      </div>
                      <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary" />
                    </div>

                    <p className="mt-4 text-muted-foreground">
                      {card.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="font-mono text-xl font-bold">
                          {card.metrics.value}
                        </div>
                        <div className="font-mono text-sm text-muted-foreground">
                          {card.metrics.label}
                        </div>
                        <div
                          className={cn(
                            "font-mono text-sm",
                            card.metrics.trend > 0
                              ? "text-green-500"
                              : "text-red-500",
                          )}
                        >
                          {card.metrics.trend > 0 ? "+" : ""}
                          {card.metrics.trend}%
                        </div>
                      </div>
                      {card.metrics.secondaryMetric && (
                        <div>
                          <div className="font-mono text-xl font-bold">
                            {card.metrics.secondaryMetric.value}
                          </div>
                          <div className="font-mono text-sm text-muted-foreground">
                            {card.metrics.secondaryMetric.label}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="grid grid-cols-3 gap-2 border-t pt-4">
                      <div className="flex items-center space-x-2">
                        <Cpu className="h-4 w-4 text-muted-foreground" />
                        <span className="font-mono text-xs">
                          {card.performance.cpu}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Server className="h-4 w-4 text-muted-foreground" />
                        <span className="font-mono text-xs">
                          {card.performance.memory}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Zap className="h-4 w-4 text-muted-foreground" />
                        <span className="font-mono text-xs">
                          {card.performance.latency}
                        </span>
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <div className="flex items-center space-x-2 font-mono text-xs text-muted-foreground">
                        <span>{card.deployment.version}</span>
                        <span>•</span>
                        <span className="uppercase">
                          {card.deployment.environment}
                        </span>
                        <span>•</span>
                        <span>{card.deployment.region}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature237 };

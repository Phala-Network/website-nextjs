import {
  ArrowRight,
  ChartLine,
  Check,
  Cloud,
  CloudCog,
  Play,
  Share2,
  Sparkles,
  Video,
} from "lucide-react";

import { Marquee } from "@/components/magicui/marquee";
import { Button } from "@/components/ui/button";

const integrations = [
  {
    name: "Storage",
    description: "Store your videos in your favorite storage solution.",
    icon: Cloud,
  },
  {
    name: "AI",
    description: "Use AI to generate videos, images, and more.",
    icon: Sparkles,
  },
  {
    name: "Video Editing",
    description: "Edit your videos with your favorite video editing software.",
    icon: Video,
  },
  {
    name: "Video Hosting",
    description: "Host your videos on your favorite video hosting solution.",
    icon: CloudCog,
  },
  {
    name: "Social Media",
    description: "Share your videos on your favorite social media platforms.",
    icon: Share2,
  },
  {
    name: "Analytics",
    description:
      "Track video performance with your favorite analytics solution.",
    icon: ChartLine,
  },
];

const Hero40 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex flex-col gap-6">
            <h1 className="text-6xl font-bold">
              Fine-Tune Models Without Exposing Data
            </h1>
            <p className="text-muted-foreground text-lg">
              Customize LLMs on proprietary datasets with hardware-enforced confidentiality.
              Training data and model weights stay encrypted in Intel TDX/AMD SEV enclaves.
            </p>
            <div className="flex gap-4">
              <Button variant="outline" size="lg" asChild>
                <a href="https://docs.phala.network">
                  <span>View Docs</span>
                  <Play />
                </a>
              </Button>
              <Button size="lg" asChild>
                <a href="https://cloud.phala.network">
                  <span>Deploy on Phala</span>
                  <ArrowRight />
                </a>
              </Button>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <Check className="size-4 text-green-500" />
                <p className="text-muted-foreground text-sm">
                  <span className="font-bold">Intel TDX</span> & AMD SEV support
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Check className="size-4 text-green-500" />
                <p className="text-muted-foreground text-sm">
                  <span className="font-bold">Zero-knowledge</span> guarantees
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Check className="size-4 text-green-500" />
                <p className="text-muted-foreground text-sm">
                  <span className="font-bold">24/7</span> technical support
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
              alt="placeholder"
              className="border-border aspect-video w-full rounded-lg border object-cover"
            />
            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
              <Marquee className="[--duration:30s]">
                {integrations.map((integration) => (
                  <div
                    key={integration.name}
                    className="border-border dark:bg-muted flex max-w-72 gap-2 rounded-lg border p-4"
                  >
                    <integration.icon className="mt-0.5 size-4 shrink-0" />
                    <div className="flex flex-col gap-2">
                      <p className="text-sm">{integration.name}</p>
                      <p className="text-muted-foreground text-sm">
                        {integration.description}
                      </p>
                    </div>
                  </div>
                ))}
              </Marquee>
              <Marquee reverse className="[--duration:30s]">
                {integrations.map((integration) => (
                  <div
                    key={integration.name}
                    className="border-border dark:bg-muted flex max-w-72 gap-2 rounded-lg border p-4"
                  >
                    <integration.icon className="mt-0.5 size-4 shrink-0" />
                    <div className="flex flex-col gap-2">
                      <p className="text-sm">{integration.name}</p>
                      <p className="text-muted-foreground text-sm">
                        {integration.description}
                      </p>
                    </div>
                  </div>
                ))}
              </Marquee>
              <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
              <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero40 };

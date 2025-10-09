import { HelpCircleIcon } from "lucide-react";
import React from "react";

import { cn } from "@/lib/utils";

import { GlowingEffect } from "@/components/aceternity/glowing-effect";

interface FeatureData {
  desc: string;
  img: string;
  title: string;
  badgeTitle?: string;
  gridClass?: string;
}

interface Feature284Props {
  features?: FeatureData[];
}

const defaultFeatures: FeatureData[] = [
  {
    desc: "Train proprietary LLMs on confidential datasets without exposing raw data to cloud providers.",
    img: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img1.jpeg",
    title: "Confidential AI Training",
    badgeTitle: "USE CASE",
    gridClass: "md:col-span-1",
  },
  {
    desc: "Deploy inference APIs for healthcare, finance, or legal AI where model weights and user prompts must remain encrypted end-to-end.",
    img: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img7.jpeg",
    title: "Private Inference",
    badgeTitle: "USE CASE",
    gridClass: "lg:col-span-2",
  },
  {
    desc: "Run federated analytics on multi-party datasets—each party keeps data local while TEEs combine insights securely.",
    img: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img11.jpeg",
    title: "Federated Learning",
    badgeTitle: "USE CASE",
    gridClass: "md:col-span-1 lg:row-span-2  ",
  },
  {
    desc: "Enable secure multi-party computation for joint data analysis without revealing individual contributions.",
    img: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img2.jpeg",
    title: "Data Clean Rooms",
    badgeTitle: "USE CASE",
    gridClass: "lg:col-span-2",
  },
  {
    desc: "Process regulated data (GDPR, HIPAA) in the cloud while maintaining compliance and zero-trust security.",
    img: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img4.jpeg",
    title: "Regulatory Compliance",
    badgeTitle: "USE CASE",
    gridClass: "md:col-span-1",
  },
];

const Feature284 = ({ features = defaultFeatures }: Feature284Props) => {
  return (
    <section className="h-full overflow-hidden py-32">
      <div className="container flex h-full w-full items-center justify-center">
        <div className="grid w-full max-w-6xl grid-cols-1 grid-rows-2 gap-4 md:grid-cols-2 lg:h-[800px] lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className={cn(
                "relative flex flex-col gap-2 rounded-3xl border p-4",
                feature.gridClass,
              )}
            >
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <div className="flex w-full items-center justify-between">
                <p className="text-muted-foreground">{feature.badgeTitle}</p>
                <HelpCircleIcon className="text-muted-foreground size-4" />
              </div>
              <div
                className={cn(
                  "bg-muted w-full flex-1 overflow-hidden rounded-3xl",
                )}
              >
                <img
                  src={feature.img}
                  alt={feature.title}
                  className="pointer-events-none h-full w-full object-cover"
                />
              </div>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature284 };

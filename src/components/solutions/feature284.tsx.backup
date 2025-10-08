import { HelpCircleIcon } from "lucide-react";
import React from "react";

import { cn } from "@/lib/utils";

import { GlowingEffect } from "@/components/aceternity/glowing-effect";

const featureData = [
  {
    desc: "Lorem ipsum dolor sit amet consec adipisicing elit. Quisquam, quos.",
    img: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img1.jpeg",
    title: "Quality",
    badgeTitle: "#1 Block",
    gridClass: "md:col-span-1",
  },
  {
    desc: "Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet consec adipisicing elit.",
    img: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img7.jpeg",
    title: "Innovation",
    badgeTitle: "#2 Block",
    gridClass: "lg:col-span-2",
  },
  {
    desc: "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris.",
    img: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img11.jpeg",
    title: "Performance",
    badgeTitle: "#3 Block",
    gridClass: "md:col-span-1 lg:row-span-2  ",
  },
  {
    desc: "Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet consec adipisicing elit.",
    img: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img2.jpeg",
    title: "Innovation",
    badgeTitle: "#2 Block",
    gridClass: "lg:col-span-2",
  },
  {
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
    img: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img4.jpeg",
    title: "Reliability",
    badgeTitle: "#4 Block",
    gridClass: "md:col-span-1",
  },
];

const Feature284 = () => {
  return (
    <section className="h-full overflow-hidden py-32">
      <div className="container flex h-full w-full items-center justify-center">
        <div className="grid w-full max-w-6xl grid-cols-1 grid-rows-2 gap-4 md:grid-cols-2 lg:h-[800px] lg:grid-cols-4">
          {featureData.map((feature, index) => (
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

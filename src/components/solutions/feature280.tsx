import { BadgeCheck } from "lucide-react";
import React from "react";

import { cn } from "@/lib/utils";

import { CardStack } from "@/components/aceternity/card-stack";

const Feature280 = () => {
  const features = [
    "Instant Implementation",
    "One-Time Payment",
    "Developer Friendly",
    "Fully Responsive",
    "Production Ready",
    "Premium Support",
    "Regular Updates",
    "Customizable Design",
    "Performance Optimized",
    "Accessibility Compliant",
    "Cross-Browser ",
    "Documentation Included",
  ];

  return (
    <section className="h-full w-screen overflow-hidden py-32">
      <div className="container flex w-full max-w-6xl flex-col items-center justify-between lg:flex-row">
        <div className="gap-15 relative flex h-full flex-col items-center justify-center text-center lg:items-start lg:text-left">
          <h1 className="w-full max-w-md text-5xl font-medium font-semibold tracking-tighter lg:text-6xl">
            What our Users say Proudly
          </h1>

          <div className="flex w-full max-w-lg items-center gap-4 px-5">
            <span className="bg-muted-foreground/20 h-px w-full" />
            <p className="text-muted-foreground/50 text-sm">FEATURES</p>
            <span className="bg-muted-foreground/20 h-px w-full" />
          </div>
          <ul className="grid grid-cols-2 gap-3">
            {features.map((feature) => (
              <li key={feature} className="flex gap-2 lg:items-center">
                <BadgeCheck className="text-muted-foreground/80 size-4" />
                <p className="text-muted-foreground/80 tracking-tight">
                  {feature}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-24 flex items-center justify-center lg:mt-0">
          <CardStack items={CARDS} />
        </div>
      </div>
    </section>
  );
};

export { Feature280 };

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "bg-emerald-100 px-1 py-0.5 font-bold text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500",
        className,
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Sarah Chen",
    designation: "Product Manager",
    content: (
      <p>
        The implementation was incredibly smooth.{" "}
        <Highlight>We deployed in under 2 hours</Highlight> and the team loves
        how intuitive the interface is. The responsive design works perfectly
        across all devices.
      </p>
    ),
  },
  {
    id: 1,
    name: "Marcus Rodriguez",
    designation: "Frontend Developer",
    content: (
      <p>
        As a developer, I appreciate the clean code structure.{" "}
        <Highlight>Easy to customize</Highlight> and the documentation is
        comprehensive. The performance optimizations are noticeable in
        production.
      </p>
    ),
  },
  {
    id: 2,
    name: "Emily Watson",
    designation: "UX Designer",
    content: (
      <p>
        The accessibility features are outstanding.{" "}
        <Highlight>WCAG compliant out of the box</Highlight> and the design
        system is consistent. Our users with disabilities have given us
        excellent feedback.
      </p>
    ),
  },
];

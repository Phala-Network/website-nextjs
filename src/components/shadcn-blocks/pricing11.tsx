"use client";

import { Check, ChevronDown, Info, X } from "lucide-react";
import { Fragment, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const plans = [
  {
    title: "Free",
    price: { monthly: "$9", annually: "$9" },
    href: "#",
    recommended: false,
  },
  {
    title: "Basic",
    price: { monthly: "$50", annually: "$45" },
    href: "#",
    recommended: false,
  },
  {
    title: "Team",
    price: { monthly: "$100", annually: "$90" },
    href: "#",
    recommended: true,
  },
  {
    title: "Enterprise",
    price: { monthly: "$200", annually: "$160" },
    href: "#",
    recommended: false,
  },
];

const featureMatrix = [
  {
    title: "Overview",
    features: [
      {
        title: "Always included reature",
        inclusions: [
          {
            plan: "Free",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
          {
            plan: "Basic",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
          {
            plan: "Teams",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
          {
            plan: "Enterprise",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
        ],
      },
      {
        title: "Number of products",
        info: "Help text",
        inclusions: [
          { plan: "Free", content: "1" },
          { plan: "Basic", content: "1" },
          { plan: "Teams", content: "3" },
          { plan: "Enterprise", content: "5" },
        ],
      },
      {
        title: "Number of transactions",
        info: "Help text",
        inclusions: [
          { plan: "Free", content: "30 monthly" },
          { plan: "Basic", content: "Unlimited" },
          { plan: "Teams", content: "Unlimited" },
          { plan: "Enterprise", content: "Unlimited" },
        ],
      },
    ],
  },
  {
    title: "Other features",
    features: [
      {
        title: "Basic feature",
        inclusions: [
          {
            plan: "Free",
            content: <Check className="size-4 lg:size-5" />,
          },
          {
            plan: "Basic",
            content: <Check className="size-4 lg:size-5" />,
          },
          {
            plan: "Teams",
            content: <Check className="size-4 lg:size-5" />,
          },
          {
            plan: "Enterprise",
            content: <Check className="size-4 lg:size-5" />,
          },
        ],
      },
      {
        title: "Enterprise feature",
        info: "Hello",
        inclusions: [
          {
            plan: "Free",
            content: <X className="size-4 text-muted-foreground lg:size-5" />,
          },
          {
            plan: "Basic",
            content: <X className="size-4 text-muted-foreground lg:size-5" />,
          },
          {
            plan: "Teams",
            content: <X className="size-4 text-muted-foreground lg:size-5" />,
          },
          {
            plan: "Enterprise",
            content: <Check className="size-5" />,
          },
        ],
      },
      {
        title: "Optional feature",
        info: "Hello",
        inclusions: [
          {
            plan: "Free",
            content: <X className="size-4 text-muted-foreground lg:size-5" />,
          },
          {
            plan: "Basic",
            content: <X className="size-4 text-muted-foreground lg:size-5" />,
          },
          {
            plan: "Teams",
            content: <Badge>Add-on</Badge>,
          },
          {
            plan: "Enterprise",
            content: <Badge>Add-on</Badge>,
          },
        ],
      },
    ],
  },
];

const Pricing11 = () => {
  const [billing, setBilling] = useState<"monthly" | "annually">("monthly");
  return (
    <TooltipProvider delayDuration={150}>
      <section className="py-32">
        <div className="container mb-8 lg:mb-0">
          <div className="grid grid-cols-2 gap-y-12 md:gap-y-16">
            <div className="col-span-2 flex flex-col lg:col-span-1">
              <h1 className="my-6 text-3xl font-bold text-pretty md:text-4xl xl:text-5xl">
                Pricing Plans
              </h1>
              <p className="text-muted-foreground lg:text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="sticky top-16 bg-background">
            <div className="mb-8 hidden pt-8 lg:block">
              <div className="grid items-end gap-6 border-b border-border pb-8 lg:grid-cols-6">
                <div className="col-span-2">
                  <div className="flex h-full flex-col justify-end">
                    <span className="mb-2 text-xs font-medium text-muted-foreground">
                      Billing
                    </span>
                    <Tabs
                      value={billing}
                      onValueChange={setBilling as (value: string) => void}
                    >
                      <TabsList>
                        <TabsTrigger value="monthly">Monthly</TabsTrigger>
                        <TabsTrigger value="annually">Annually</TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </div>
                </div>
                {plans.map((plan) => (
                  <div
                    key={plan.title}
                    className="rounded-lg border border-border p-3 2xl:p-4"
                  >
                    <h3 className="mb-1 text-xl font-medium sm:text-2xl">
                      {plan.title}
                    </h3>
                    <p className="mb-4 text-sm font-medium text-muted-foreground">
                      {plan.price[billing]}
                      <span className="hidden 2xl:inline"> / monthly</span>
                    </p>
                    <Button
                      variant={plan.recommended ? "default" : "outline"}
                      className="w-full"
                    >
                      <span className="2xl:hidden">Register</span>
                      <span className="hidden 2xl:inline">
                        Get started for free
                      </span>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-8 lg:space-y-14">
            {featureMatrix.map((category) => (
              <div key={category.title}>
                <h3 className="mb-6 text-lg font-medium lg:mb-3">
                  {category.title}
                </h3>
                <div className="space-y-4 lg:space-y-0">
                  {category.features.map((feature) => (
                    <Fragment key={feature.title}>
                      <dl className="hidden grid-cols-6 gap-6 border-b border-border lg:grid">
                        <dt className="col-span-2 justify-between py-4 pb-4">
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <h4 className="group flex min-h-6 items-center gap-x-1 font-medium">
                                {feature.title}{" "}
                                {feature.info && (
                                  <Info className="ml-2 size-4 cursor-pointer text-muted-foreground group-hover:text-accent-foreground" />
                                )}
                              </h4>
                            </TooltipTrigger>
                            {feature.info && (
                              <TooltipContent>{feature.info}</TooltipContent>
                            )}
                          </Tooltip>
                        </dt>
                        {feature.inclusions.map((inclusion) => (
                          <dd
                            key={inclusion.plan}
                            className="hidden py-4 text-sm text-muted-foreground lg:block"
                          >
                            {inclusion.content}
                          </dd>
                        ))}
                      </dl>
                      <Collapsible
                        className="group lg:hidden"
                        defaultOpen={false}
                      >
                        <dl
                          key={feature.title}
                          className="border-b border-border"
                        >
                          <CollapsibleTrigger className="w-full">
                            <dt className="flex items-center justify-between pb-4">
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <h4 className="group flex items-center gap-x-1 text-sm font-medium md:text-base">
                                    {feature.title}
                                    {feature.info && (
                                      <Info className="ml-2 size-4 cursor-pointer text-muted-foreground group-hover:text-accent-foreground" />
                                    )}
                                  </h4>
                                </TooltipTrigger>
                                {feature.info && (
                                  <TooltipContent>
                                    {feature.info}
                                  </TooltipContent>
                                )}
                              </Tooltip>

                              <ChevronDown className='size-5 transition-transform group-data-[state="open"]:rotate-180' />
                            </dt>
                          </CollapsibleTrigger>
                          <CollapsibleContent>
                            {feature.inclusions.map((inclusion) => (
                              <dd
                                key={inclusion.plan}
                                className="flex items-center border-b border-border py-3 text-xs text-muted-foreground last:border-b-0 md:py-3.5"
                              >
                                <div className="w-1/2 md:w-1/4">
                                  {inclusion.plan}
                                </div>
                                {inclusion.content}
                              </dd>
                            ))}
                          </CollapsibleContent>
                        </dl>
                      </Collapsible>
                    </Fragment>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 hidden text-xs text-muted-foreground md:block">
            * Caveats and other conditions
          </p>
        </div>
      </section>
    </TooltipProvider>
  );
};

export { Pricing11 };

"use client";

import {
  AppWindow,
  ArrowLeft,
  ArrowRight,
  ArrowRightLeft,
  Book,
  Building,
  Building2,
  Calculator,
  Calendar,
  CheckCircle2,
  Clock,
  Code,
  Computer,
  DollarSign,
  File,
  Flag,
  Gavel,
  Globe,
  Globe2,
  Lightbulb,
  Lock,
  Menu,
  Mic,
  Newspaper,
  Phone,
  PieChart,
  Play,
  PlayCircle,
  Puzzle,
  Pyramid,
  Rocket,
  Scale,
  Search,
  ShieldCheck,
  Speech,
  Table,
  UserPlus,
  UserRound,
  Users,
  X,
} from "lucide-react";
import { Fragment, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const solutions = [
  {
    id: "solution-1",
    title: "Team Management",
    description: "Streamline team collaboration and project workflows.",
    href: "#",
    subpages: [
      {
        id: "subpage-1",
        title: "Task Management",
        href: "#",
        icon: File,
      },
      {
        id: "subpage-2",
        title: "Team Planning",
        href: "#",
        icon: Building,
      },
      {
        id: "subpage-3",
        title: "Resource Allocation",
        href: "#",
        icon: Search,
      },
      {
        id: "subpage-4",
        title: "Time Tracking",
        href: "#",
        icon: File,
      },
      {
        id: "subpage-5",
        title: "Team Analytics",
        href: "#",
        icon: UserPlus,
      },
    ],
  },
  {
    id: "solution-2",
    title: "Project Management",
    description: "Plan, track, and deliver projects with confidence.",
    href: "#",
    subpages: [
      {
        id: "subpage-6",
        title: "Project Templates",
        href: "#",
        icon: CheckCircle2,
      },
      {
        id: "subpage-7",
        title: "Timeline Views",
        href: "#",
        icon: UserRound,
      },
      {
        id: "subpage-8",
        title: "Risk Management",
        href: "#",
        icon: ShieldCheck,
      },
      {
        id: "subpage-9",
        title: "Budget Tracking",
        href: "#",
        icon: Scale,
      },
      {
        id: "subpage-10",
        title: "Global Teams",
        href: "#",
        icon: Globe,
      },
    ],
  },
  {
    id: "solution-3",
    title: "Workflow Automation",
    description: "Automate repetitive tasks and focus on what matters.",
    href: "#",
    subpages: [
      {
        id: "subpage-11",
        title: "Custom Workflows",
        href: "#",
        icon: Globe2,
      },
      {
        id: "subpage-12",
        title: "Process Templates",
        href: "#",
        icon: Clock,
      },
      {
        id: "subpage-13",
        title: "Business Rules",
        href: "#",
        icon: DollarSign,
      },
      {
        id: "subpage-14",
        title: "Integrations",
        href: "#",
        icon: Phone,
      },
      {
        id: "subpage-15",
        title: "API Access",
        href: "#",
        icon: Speech,
      },
    ],
  },
  {
    id: "solution-4",
    title: "Enterprise Solutions",
    description: "Scale your organization with enterprise-grade features.",
    href: "#",
    subpages: [
      {
        id: "subpage-16",
        title: "Advanced Analytics",
        href: "#",
        icon: PieChart,
      },
      {
        id: "subpage-17",
        title: "Security Controls",
        href: "#",
        icon: Calculator,
      },
      {
        id: "subpage-18",
        title: "Custom Reporting",
        href: "#",
        icon: Table,
      },
    ],
  },
];

const solutionTechnologies = [
  {
    id: "technology-1",
    title: "Integration Platform",
    href: "#",
    icon: Puzzle,
  },
  {
    id: "technology-2",
    title: "Enterprise Security",
    href: "#",
    icon: Lock,
  },
  {
    id: "technology-3",
    title: "Developer API",
    href: "#",
    icon: Code,
  },
];

const productCategories = [
  {
    title: "Core Products",
    products: [
      {
        id: "product-1",
        title: "Task Management",
        description: "Organize and track work efficiently.",
        href: "#",
        image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg",
      },
      {
        id: "product-2",
        title: "Team Calendar",
        description: "Coordinate schedules and deadlines.",
        href: "#",
        image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-2.svg",
      },
      {
        id: "product-3",
        title: "Workflows",
        description: "Automate your business processes.",
        href: "#",
        image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-3.svg",
      },
    ],
  },
  {
    title: "Advanced Features",
    products: [
      {
        id: "product-4",
        title: "Portfolio Management",
        description: "Track and optimize project portfolios at scale.",
        href: "#",
        image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-4.svg",
      },
      {
        id: "product-5",
        title: "Resource Planning",
        description: "Optimize team workload and capacity.",
        href: "#",
        image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-5.svg",
      },
    ],
  },
];

const globalCategories = [
  {
    title: "Enterprise Solutions",
    features: [
      {
        id: "feature-1",
        title: "Digital Transformation",
        description: "Transform how your organization works with our platform.",
        href: "#",
        icon: Rocket,
      },
      {
        id: "feature-2",
        title: "Change Management",
        description: "Expert guidance for organizational change and adoption.",
        href: "#",
        icon: Building2,
      },
      {
        id: "feature-3",
        title: "Global Deployment",
        description: "Roll out and scale across global teams seamlessly.",
        href: "#",
        icon: Globe2,
      },
    ],
  },
  {
    title: "Business Solutions",
    features: [
      {
        id: "feature-4",
        title: "Customer Success",
        description: "Dedicated support for your business needs.",
        href: "#",
        icon: Phone,
      },
      {
        id: "feature-5",
        title: "Compliance",
        description: "Meet industry standards and regulations.",
        href: "#",
        icon: Gavel,
      },
      {
        id: "feature-6",
        title: "ROI Calculator",
        description: "Measure the impact on your business.",
        href: "#",
        icon: DollarSign,
      },
      {
        id: "feature-7",
        title: "IT Solutions",
        description: "Enterprise-grade security and administration tools.",
        href: "#",
        icon: Computer,
      },
      {
        id: "feature-8",
        title: "Strategic Planning",
        description: "Align teams and track company objectives.",
        href: "#",
        icon: Flag,
      },
    ],
  },
];

const regions = [
  {
    title: "Asia-Pacific",
    locations: [
      {
        title: "China",
        href: "#",
        icon: "🇨🇳",
      },
      {
        title: "India",
        href: "#",
        icon: "🇮🇳",
      },
      {
        title: "Japan",
        href: "#",
        icon: "🇯🇵",
      },
      {
        title: "Thailand",
        href: "#",
        icon: "🇹🇭",
      },
    ],
  },
  {
    title: "Europe",
    locations: [
      {
        title: "Italy",
        href: "#",
        icon: "🇮🇹",
      },
      {
        title: "Germany",
        href: "#",
        icon: "🇩🇪",
      },
      {
        title: "Poland",
        href: "#",
        icon: "🇵🇱",
      },
      {
        title: "United Kingdom",
        href: "#",
        icon: "🇬🇧",
      },
    ],
  },
  {
    title: "Americas",
    locations: [
      {
        title: "Brazil",
        href: "#",
        icon: "🇧🇷",
      },
      {
        title: "Canada",
        href: "#",
        icon: "🇨🇦",
      },
      {
        title: "Mexico",
        href: "#",
        icon: "🇲🇽",
      },
      {
        title: "United States",
        href: "#",
        icon: "🇺🇸",
      },
    ],
  },
  {
    title: "Middle East/Africa",
    locations: [
      {
        title: "Egypt",
        href: "#",
        icon: "🇸🇦",
      },
      {
        title: "Nigeria",
        href: "#",
        icon: "🇳🇬",
      },
      {
        title: "Türkiye",
        href: "#",
        icon: "🇹🇷",
      },
      {
        title: "United Arab Emirates",
        href: "#",
        icon: "🇦🇪",
      },
    ],
  },
];

const resources = [
  {
    id: "resource-1",
    title: "Events & Webinars",
    description: "Learn from industry experts.",
    href: "#",
    icon: Calendar,
  },
  {
    id: "resource-2",
    title: "Podcasts",
    description: "Insights on productivity and leadership.",
    href: "#",
    icon: Mic,
  },
  {
    id: "resource-3",
    title: "Blog",
    description: "Latest updates and best practices.",
    href: "#",
    icon: Newspaper,
  },
  {
    id: "resource-4",
    title: "Video Tutorials",
    description: "Get started with guided videos.",
    href: "#",
    icon: PlayCircle,
  },
  {
    id: "resource-5",
    title: "Knowledge Base",
    description: "Detailed guides and documentation.",
    href: "#",
    icon: Book,
  },
  {
    id: "resource-6",
    title: "Success Stories",
    description: "See how others achieve more.",
    href: "#",
    icon: Lightbulb,
  },
];

const topicGroups = [
  {
    title: "Learning Resources",
    topics: [
      {
        id: "topic-1",
        title: "Getting Started Guide",
        href: "#",
        icon: Globe,
      },
      {
        id: "topic-2",
        title: "Product Updates",
        href: "#",
        icon: Rocket,
      },
      {
        id: "topic-3",
        title: "Best Practices",
        href: "#",
        icon: Pyramid,
      },
      {
        id: "topic-4",
        title: "Integrations",
        href: "#",
        icon: ArrowRightLeft,
      },
      {
        id: "topic-5",
        title: "API Documentation",
        href: "#",
        icon: AppWindow,
      },
    ],
  },
  {
    title: "Community",
    topics: [
      {
        id: "topic-6",
        title: "Community Forum",
        href: "#",
        icon: Play,
      },
    ],
  },
];

const SolutionsMenu = () => (
  <div className="grid gap-8 sm:grid-cols-2">
    <a
      href="#"
      className="bg-primary text-primary-foreground group relative flex h-full flex-row overflow-hidden rounded-lg px-0 pt-8 lg:rounded-xl lg:px-6"
    >
      <div className="relative flex w-full flex-col space-y-12 text-left md:space-y-8 lg:w-full lg:flex-row lg:justify-between lg:space-x-6 lg:space-y-0 xl:space-x-8">
        <div className="relative flex flex-col px-6 lg:mb-6 lg:px-0">
          <span className="mb-6 text-xs font-medium uppercase tracking-wider md:mb-8">
            Transform Your Workflow
          </span>
          <div className="mt-auto flex items-center space-x-1 text-xs">
            Discover Our Platform
            <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
          </div>
          <p className="text-primary-foreground/85 mt-2 text-xs">
            Streamline collaboration, automate workflows, and boost productivity
            across your organization.
          </p>
        </div>
        <div className="aspect-2/1 relative overflow-clip rounded-t pl-6 lg:max-w-64 lg:pl-0 xl:max-w-96">
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
            alt="placeholder"
            className="aspect-2/1 h-full w-full translate-y-px object-cover object-center"
          />
        </div>
      </div>
    </a>

    <div className="order-last mt-3 sm:order-none sm:mt-0 sm:py-2 md:p-6">
      <div className="mb-4 text-left leading-none md:col-span-2 lg:col-span-4 lg:mb-6">
        <strong className="text-muted-foreground text-left text-xs font-medium uppercase tracking-wider">
          Developer Platform
        </strong>
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        {solutionTechnologies.map((technology) => (
          <NavigationMenuLink
            key={technology.id}
            href="#"
            className="group flex flex-row items-center gap-4"
          >
            <technology.icon className="size-4" />
            <div className="flex-1 text-sm font-medium">{technology.title}</div>
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 lg:hidden" />
          </NavigationMenuLink>
        ))}
      </div>
    </div>
    <div className="col-span-full grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
      {solutions.map((solution) => (
        <div key={solution.id} className="border-border rounded-md border p-5">
          <div className="border-border border-b pb-4">
            <a href={solution.href} className="group flex flex-col text-left">
              <div className="flex items-center">
                <strong className="text-sm font-medium">
                  {solution.title}
                </strong>
                <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
              </div>
              <p className="text-muted-foreground mt-1 text-xs">
                {solution.description}
              </p>
            </a>
          </div>
          <menu className="mt-6 grid gap-y-4">
            {solution.subpages.map((subpage) => (
              <NavigationMenuLink
                key={subpage.id}
                href={subpage.href}
                className="text-foreground/85 hover:text-foreground group flex flex-row items-center space-x-4 text-left lg:space-x-4 lg:border-0"
              >
                <subpage.icon className="size-4" />
                <div className="flex-1 text-sm font-medium">
                  {subpage.title}
                </div>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 lg:hidden" />
              </NavigationMenuLink>
            ))}
          </menu>
        </div>
      ))}
    </div>
  </div>
);

const ProductsMenu = () => (
  <div className="grid gap-y-12 lg:flex lg:space-x-8">
    <div className="w-full shrink-0 lg:max-w-[18rem]">
      <a
        href="#"
        className="text-primary-foreground group relative flex h-full flex-row overflow-hidden rounded-lg px-0 lg:rounded-xl"
      >
        <div className="relative z-10 flex w-full flex-col text-left">
          <div className="aspect-2/1 relative flex max-h-[11rem] w-full flex-1 justify-center">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg"
              alt="placeholder"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="bg-primary relative z-20 flex flex-col rounded-b-xl p-6">
            <div className="flex items-center space-x-1 text-xs">
              Enterprise Solutions
              <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
            </div>
            <p className="text-primary-foreground/70 mt-2 text-xs">
              Scale your business with enterprise-grade features and support.
            </p>
          </div>
        </div>
      </a>
    </div>
    <div className="grid w-full gap-y-12 lg:gap-y-6">
      {productCategories.map((category) => (
        <div key={category.title} className="grid gap-y-2 lg:gap-y-6">
          <div className="border-border text-left lg:border-b lg:pb-3">
            <strong className="text-muted-foreground text-left text-xs font-medium uppercase tracking-wider">
              {category.title}
            </strong>
          </div>
          <menu className="grid md:grid-cols-3 md:gap-x-5 lg:gap-y-7">
            {category.products.map((product) => (
              <NavigationMenuLink
                key={product.id}
                href="#"
                className="border-border group flex flex-row items-center space-x-6 border-b py-5 text-left sm:py-7 lg:space-x-4 lg:border-0 lg:py-2"
              >
                <div className="relative flex aspect-square w-6 shrink-0 items-center justify-center overflow-clip rounded md:size-9 md:p-2">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="dark:invert"
                  />
                </div>
                <div className="flex-1">
                  <div className="text-foreground/85 group-hover:text-foreground text-sm font-medium">
                    {product.title}
                  </div>
                  <p className="text-muted-foreground group-hover:text-foreground mt-1 text-xs">
                    {product.description}
                  </p>
                </div>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 lg:hidden" />
              </NavigationMenuLink>
            ))}
          </menu>
        </div>
      ))}
    </div>
  </div>
);

const GlobalGuidanceMenu = () => (
  <div>
    <div className="space-y-6 lg:flex lg:space-x-8 lg:space-y-0">
      <div className="w-full shrink-0 lg:max-w-[18rem]">
        <a
          href="#"
          className="text-primary-foreground group relative flex h-full flex-row overflow-hidden rounded-lg p-0 lg:rounded-xl"
        >
          <div className="relative z-10 flex w-full flex-col-reverse text-left lg:flex-col">
            <div className="aspect-4/3 relative flex max-h-[18rem] w-full flex-1 justify-center">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg"
                alt="placeholder"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="bg-primary relative z-20 flex flex-col rounded-b-xl p-6">
              <div className="flex items-center space-x-1 text-xs">
                Enterprise Solutions
                <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
              </div>
              <p className="text-primary-foreground/85 mt-2 text-xs">
                Scale your business with enterprise-grade features and support.
              </p>
            </div>
          </div>
        </a>
      </div>
      <div className="grid w-full gap-y-12 lg:gap-y-6">
        {globalCategories.map((category) => (
          <div key={category.title} className="grid gap-y-2 lg:gap-y-6">
            <div className="border-border text-left lg:border-b lg:pb-3">
              <strong className="text-muted-foreground text-left text-xs font-medium uppercase tracking-wider">
                {category.title}
              </strong>
            </div>
            <menu className="grid md:grid-cols-3 md:gap-x-6 lg:gap-y-6">
              {category.features.map((feature) => (
                <NavigationMenuLink
                  key={feature.id}
                  href="#"
                  className="border-border group flex flex-row items-center space-x-4 border-b py-5 text-left sm:py-7 lg:border-0 lg:py-0"
                >
                  <div className="flex aspect-square size-9 shrink-0 items-center justify-center">
                    <feature.icon className="size-5" />
                  </div>
                  <div className="flex-1">
                    <div className="text-foreground/85 group-hover:text-foreground text-sm font-medium">
                      {feature.title}
                    </div>
                    <p className="text-muted-foreground group-hover:text-foreground mt-1 text-xs">
                      {feature.description}
                    </p>
                  </div>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 lg:hidden" />
                </NavigationMenuLink>
              ))}
            </menu>
          </div>
        ))}
      </div>
    </div>
    <div className="mt-8">
      <div className="border-border mb-6 pb-1 text-left lg:border-b">
        <strong className="text-muted-foreground text-left text-xs font-medium uppercase tracking-wider">
          Popular Locations
        </strong>
      </div>
      <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
        {regions.map((region) => (
          <div
            key={region.title}
            className="border-border space-y-6 rounded-md border p-6 lg:border-0 lg:p-0"
          >
            <div className="text-muted-foreground text-left text-xs">
              {region.title}
            </div>
            <menu className="border-border grid gap-y-3 border-t pt-6 lg:border-0 lg:pt-0">
              {region.locations.map((location) => (
                <NavigationMenuLink
                  key={location.title}
                  href={location.href}
                  className="text-foreground/85 hover:text-foreground group flex flex-row items-center space-x-4 text-left lg:space-x-4 lg:border-0 lg:py-0"
                >
                  <div className="flex size-4 items-center justify-center">
                    {location.icon}
                  </div>
                  <div className="flex-1 text-sm font-medium">
                    {location.title}
                  </div>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 lg:hidden" />
                </NavigationMenuLink>
              ))}
            </menu>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const PartnersMenu = () => (
  <div className="grid gap-y-6 md:grid-cols-2 md:gap-x-6 lg:grid-cols-4">
    <div className="md:col-span-2">
      <a
        href="#"
        className="bg-primary text-primary-foreground group relative flex h-full flex-row overflow-hidden rounded-lg p-0 lg:rounded-xl"
      >
        <div className="relative z-10 flex w-full flex-col-reverse text-left">
          <div className="relative z-20 flex flex-col px-6 pb-[14rem] pt-6 md:pb-6 md:pt-40">
            <div className="mt-auto flex items-center space-x-1 text-xs font-medium">
              Partner Program
              <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
            </div>
            <p className="mt-2 text-xs">
              Join our partner network and grow your business with our leading
              productivity platform.
            </p>
          </div>
          <div className="bg-accent absolute inset-0 top-[32%] invert md:top-0">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
              alt="placeholder"
              className="object-fit object-top-right h-full w-full opacity-100 md:h-2/3 md:object-top"
            />
          </div>
        </div>
      </a>
    </div>
    <div className="md:col-span-1">
      <a
        href="#"
        className="bg-accent text-accent-foreground group relative flex h-full flex-row overflow-hidden rounded-lg p-0 lg:rounded-xl"
      >
        <div className="relative z-10 flex w-full flex-col-reverse text-left">
          <div className="relative z-20 flex flex-col px-6 pb-[14rem] pt-6 md:pb-6 md:pt-40">
            <div className="mt-auto flex items-center space-x-1 text-xs font-medium">
              Solution Partners
              <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
            </div>
            <p className="text-muted-foreground mt-2 text-xs">
              Build and deliver solutions that help customers achieve more.
            </p>
          </div>
          <div className="absolute inset-0 top-[32%] md:top-0">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg"
              alt="placeholder"
              className="object-fit object-top-right h-full w-full md:h-2/3 md:object-top"
            />
          </div>
        </div>
      </a>
    </div>
    <div className="grid gap-4 md:col-span-1">
      <NavigationMenuLink
        href="#"
        className="border-border group flex w-full flex-row items-center rounded-lg border lg:rounded-xl"
      >
        <div className="flex items-start p-6 text-left">
          <Users className="size-8" />
          <div className="ml-4">
            <div className="text-foreground/85 hover:text-foreground mb-1 mt-auto text-sm font-bold">
              Implementation Partners
            </div>
            <p className="text-muted-foreground group-hover:text-foreground text-xs">
              Velit incididunt duis id consequat elit.
            </p>
          </div>
        </div>
      </NavigationMenuLink>
      <NavigationMenuLink
        href="#"
        className="border-border group flex w-full flex-row items-center rounded-lg border lg:rounded-xl"
      >
        <div className="flex items-start p-6 text-left">
          <Computer className="size-8" />
          <div className="ml-4">
            <div className="text-foreground/85 hover:text-foreground mb-1 mt-auto text-sm font-bold">
              Technology Partners
            </div>
            <p className="text-muted-foreground group-hover:text-foreground text-xs">
              Consequat nulla ex culpa aliquip ad.
            </p>
          </div>
        </div>
      </NavigationMenuLink>
    </div>
  </div>
);

const ResourcesMenu = () => (
  <div className="grid gap-y-12 md:grid-cols-2 md:gap-x-6 lg:grid-cols-4 lg:gap-6">
    <div className="col-span-1">
      <a
        href="#"
        className="bg-primary text-primary-foreground group relative flex h-full flex-row overflow-hidden rounded-lg p-0 lg:rounded-xl"
      >
        <div className="relative z-10 flex w-full flex-col-reverse text-left">
          <div className="relative z-20 flex flex-col px-6 pb-[14rem] pt-6 md:pb-6 md:pt-40">
            <div className="mt-auto flex items-center space-x-1 text-xs">
              Resource Center
              <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
            </div>
            <p className="mt-2 text-xs">
              Access guides, tutorials, and best practices to maximize your
              success.
            </p>
          </div>
          <div className="absolute inset-0">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg"
              alt="placeholder"
              className="h-full w-full object-cover object-center invert"
            />
          </div>
          <div className="absolute inset-x-0 top-0 z-10 h-[60%] bg-[linear-gradient(hsl(var(--color-primary))_50%,transparent)] md:bottom-[-10%] md:top-auto md:h-[50%] md:bg-[linear-gradient(transparent,hsl(var(--color-primary))_50%)]"></div>
        </div>
      </a>
    </div>
    <div className="lg:col-span-2 lg:flex lg:flex-col">
      <div>
        <div className="border-border mb-4 pb-3 text-left md:mb-6 lg:border-b">
          <strong className="text-muted-foreground text-left text-xs font-medium uppercase tracking-wider">
            Featured Resources
          </strong>
        </div>
      </div>
      <menu className="grid gap-y-4 lg:h-full lg:grid-cols-2 lg:gap-6">
        {resources.map((resource) => (
          <NavigationMenuLink
            key={resource.id}
            href={resource.href}
            className="border-border bg-accent lg:bg-background group flex flex-row items-center space-x-4 rounded-md px-6 py-5 text-left md:space-x-5 lg:border lg:p-5"
          >
            <resource.icon className="size-6 sm:size-7" />
            <div className="ml-4 flex-1">
              <div className="text-foreground/85 group-hover:text-foreground text-sm font-medium">
                {resource.title}
              </div>
              <p className="text-muted-foreground group-hover:text-foreground mt-1 text-xs">
                {resource.description}
              </p>
            </div>
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 lg:hidden" />
          </NavigationMenuLink>
        ))}
      </menu>
    </div>
    <div className="col-span-1 md:col-span-2 lg:col-span-1">
      {topicGroups.map((group) => (
        <Fragment key={group.title}>
          <div className="border-border mb-4 pb-3 text-left md:col-span-2 md:mb-7 lg:border-b">
            <strong className="text-muted-foreground text-left text-xs font-medium uppercase tracking-wider">
              Learning & Support
            </strong>
          </div>
          <menu className="mb-7 grid md:grid-cols-2 md:gap-x-6 lg:grid-cols-1 lg:gap-x-0">
            {group.topics.map((topic) => (
              <NavigationMenuLink
                key={topic.id}
                href={topic.href}
                className="border-border group flex flex-row items-center space-x-6 border-b py-5 text-left sm:py-8 lg:space-x-4 lg:border-0 lg:py-0"
              >
                <div className="flex aspect-square size-9 shrink-0 items-center justify-center">
                  <topic.icon className="size-5" />
                </div>
                <div className="text-foreground/85 group-hover:text-foreground flex-1 text-xs font-medium md:text-sm">
                  {topic.title}
                </div>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 lg:hidden" />
              </NavigationMenuLink>
            ))}
          </menu>
        </Fragment>
      ))}
    </div>
  </div>
);

const navigationMenuItems = [
  {
    key: "solutions",
    label: "Solutions",
    component: SolutionsMenu,
  },
  {
    key: "products",
    label: "Products",
    component: ProductsMenu,
  },
  {
    key: "global",
    label: "Company",
    component: GlobalGuidanceMenu,
  },
  {
    key: "partners",
    label: "Partners",
    component: PartnersMenu,
  },
  {
    key: "resources",
    label: "Resources",
    component: ResourcesMenu,
  },
] as const;

const Navbar4 = () => {
  const [open, setOpen] = useState(false);
  const [submenu, setSubmenu] = useState<
    "solutions" | "products" | "global" | "partners" | "resources" | null
  >(null);

  return (
    <section className="bg-background inset-x-0 top-0 z-20">
      <div className="container">
        <NavigationMenu className="min-w-full [&>div:last-child]:left-auto">
          <div className="flex w-full justify-between gap-2 py-4">
            <a
              href="https://www.shadcnblocks.com"
              className="flex items-center gap-2"
            >
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg"
                className="max-h-8 dark:invert"
                alt="Shadcn UI Navbar"
              />
              <span className="text-lg font-semibold tracking-tighter">
                Shadcnblocks.com
              </span>
            </a>
            <div className="flex items-center gap-2 xl:gap-8">
              <NavigationMenuList className="hidden gap-0 lg:flex">
                {navigationMenuItems.map((item) => (
                  <NavigationMenuItem key={item.key}>
                    <NavigationMenuTrigger className="text-xs xl:text-sm">
                      {item.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="min-w-[calc(100vw-4rem)] p-12 2xl:min-w-[calc(1400px-4rem)]">
                      <item.component />
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </div>
            <div className="flex items-center gap-2">
              <Button className="hidden md:block">Login</Button>
              <Button
                variant="outline"
                size="icon"
                aria-label="Main Menu"
                className="lg:hidden"
                onClick={() => {
                  if (open) {
                    setOpen(false);
                    setSubmenu(null);
                  } else {
                    setOpen(true);
                  }
                }}
              >
                {!open && <Menu className="size-4" />}
                {open && <X className="size-4" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {open && (
            <div className="border-border bg-background container fixed inset-0 top-[72px] flex h-[calc(100vh-72px)] w-full flex-col overflow-auto border-t lg:hidden">
              {submenu && (
                <div className="mt-3">
                  <Button
                    variant="link"
                    onClick={() => setSubmenu(null)}
                    className="relative -left-4"
                  >
                    <ArrowLeft className="size-4 text-xs" />
                    Go back
                  </Button>
                </div>
              )}
              {submenu === null && (
                <div>
                  {navigationMenuItems.map((item) => (
                    <button
                      key={item.key}
                      type="button"
                      className="border-border flex w-full items-center border-b py-6 text-left"
                      onClick={() => setSubmenu(item.key)}
                    >
                      <span className="flex-1 text-sm font-medium">
                        {item.label}
                      </span>
                      <span className="shrink-0">
                        <ArrowRight className="size-4" />
                      </span>
                    </button>
                  ))}
                </div>
              )}
              {navigationMenuItems.map(
                (item) =>
                  submenu === item.key && (
                    <div key={item.key}>
                      <h2 className="pb-6 pt-4 text-lg font-medium">
                        {item.label}
                      </h2>
                      <item.component />
                    </div>
                  ),
              )}
              {/* Mobile menu footer */}
              <div className="mx-[2rem] mt-auto flex flex-col items-center gap-8 py-24">
                <Button>Login</Button>
              </div>
            </div>
          )}
        </NavigationMenu>
      </div>
    </section>
  );
};

export { Navbar4 };

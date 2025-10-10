"use client";

import {
  ArrowRight,
  Bot,
  Brain,
  Briefcase,
  Coins,
  Cpu,
  Database,
  GitCompare,
  Gpu,
  Layers,
  Lightbulb,
  Menu,
  Network,
  PackageOpen,
  Server,
  Sparkles,
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

// Products Menu
const productCategories = [
  {
    title: "Core Products",
    products: [
      {
        id: "product-1",
        title: "Confidential VM",
        description: "Secure virtual machines with hardware-level privacy",
        href: "/confidential-vm",
        icon: Server,
      },
      {
        id: "product-2",
        title: "Confidential AI Models",
        description: "AI models with end-to-end privacy guarantees",
        href: "/confidential-ai-models",
        icon: Brain,
      },
      {
        id: "product-3",
        title: "GPU TEE",
        description: "Most Powerful AI GPUs. Most Secure Platform.",
        href: "/gpu-tee",
        icon: Gpu,
      },
    ],
  },
  {
    title: "Infrastructure",
    products: [
      {
        id: "product-4",
        title: "Open Source dStack",
        description: "Decentralized compute infrastructure",
        href: "/dstack",
        icon: PackageOpen,
      },
      {
        id: "product-5",
        title: "Trust Center",
        description: "Security, compliance, and transparency",
        href: "https://trust.phala.com/",
        icon: Server,
      },
    ],
  },
];

const gpuModels = [
  {
    title: "NVIDIA H200",
    description: "Flagship AI GPU with 141GB HBM3e memory",
    href: "/gpu-tee/h200",
  },
  {
    title: "NVIDIA H100",
    description: "Enterprise standard with proven performance",
    href: "/gpu-tee/h100",
  },
  {
    title: "NVIDIA B200",
    description: "Next-gen Blackwell with 15x faster inference",
    href: "/gpu-tee/b200",
  },
];

const comparisons = [
  {
    title: "Phala vs AWS Nitro",
    description: "Open-source alternative to AWS Nitro Enclaves",
    href: "/compare/phala-vs-aws-nitro",
  },
  {
    title: "Phala vs GCP",
    description: "Decentralized alternative to Google Cloud",
    href: "/compare/phala-vs-gcp",
  },
  {
    title: "Phala vs Tinfoil",
    description: "Infrastructure control vs managed confidential AI",
    href: "/compare/phala-vs-tinfoil",
  },
];

const ProductsMenu = () => (
  <div className="grid gap-y-12 lg:flex lg:space-x-8">
    <div className="w-full shrink-0 lg:max-w-[18rem]">
      <a
        href="/gpu-tee"
        className="group relative flex h-full flex-row overflow-hidden rounded-lg px-0 lg:rounded-xl bg-primary text-primary-foreground"
      >
        <div className="relative z-10 flex w-full flex-col text-left">
          <div className="aspect-2/1 relative flex max-h-[11rem] w-full flex-1 justify-center bg-primary/20">
            <div className="flex items-center justify-center p-8">
              <Gpu className="h-20 w-20" />
            </div>
          </div>
          <div className="relative z-20 flex flex-col rounded-b-xl p-6 bg-primary">
            <div className="flex items-center space-x-1 text-xs">
              GPU TEE Platform
              <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
            </div>
            <p className="text-primary-foreground/70 mt-2 text-xs">
              Most powerful AI GPUs with hardware-enforced confidentiality
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
          <menu className="grid md:grid-cols-2 md:gap-x-5 lg:gap-y-7">
            {category.products.map((product) => (
              <NavigationMenuLink
                key={product.id}
                href={product.href}
                className="border-border group flex flex-row items-center space-x-6 border-b py-5 text-left sm:py-7 lg:space-x-4 lg:border-0 lg:py-2"
              >
                <div className="relative flex aspect-square w-9 shrink-0 items-center justify-center overflow-clip rounded">
                  <product.icon className="size-6" />
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

      {/* GPU Models Section */}
      <div className="grid gap-y-2 lg:gap-y-6">
        <div className="border-border text-left lg:border-b lg:pb-3">
          <strong className="text-muted-foreground text-left text-xs font-medium uppercase tracking-wider">
            GPU Models
          </strong>
        </div>
        <menu className="grid md:grid-cols-3 md:gap-x-5 lg:gap-y-7">
          {gpuModels.map((model) => (
            <NavigationMenuLink
              key={model.title}
              href={model.href}
              className="border-border group flex flex-row items-center space-x-4 border-b py-5 text-left sm:py-7 lg:border-0 lg:py-2"
            >
              <div className="flex-1">
                <div className="text-foreground/85 group-hover:text-foreground text-sm font-medium">
                  {model.title}
                </div>
                <p className="text-muted-foreground group-hover:text-foreground mt-1 text-xs">
                  {model.description}
                </p>
              </div>
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 lg:hidden" />
            </NavigationMenuLink>
          ))}
        </menu>
      </div>

      {/* Comparisons Section */}
      <div className="grid gap-y-2 lg:gap-y-6">
        <div className="border-border text-left lg:border-b lg:pb-3">
          <strong className="text-muted-foreground text-left text-xs font-medium uppercase tracking-wider">
            Compare
          </strong>
        </div>
        <menu className="grid md:grid-cols-3 md:gap-x-5 lg:gap-y-7">
          {comparisons.map((comparison) => (
            <NavigationMenuLink
              key={comparison.title}
              href={comparison.href}
              className="border-border group flex flex-row items-center space-x-4 border-b py-5 text-left sm:py-7 lg:border-0 lg:py-2"
            >
              <div className="flex-1">
                <div className="text-foreground/85 group-hover:text-foreground text-sm font-medium">
                  {comparison.title}
                </div>
                <p className="text-muted-foreground group-hover:text-foreground mt-1 text-xs">
                  {comparison.description}
                </p>
              </div>
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 lg:hidden" />
            </NavigationMenuLink>
          ))}
        </menu>
      </div>
    </div>
  </div>
);

// Solutions Menu
const solutionCategories = [
  {
    title: "AI Solutions",
    features: [
      {
        id: "solution-1",
        title: "Private AI Data",
        description: "Compute-to-data on sensitive datasets",
        href: "/solutions/private-ai-data",
        icon: Database,
      },
      {
        id: "solution-2",
        title: "Private AI Inference",
        description: "Confidential LLM serving with zero-logging",
        href: "/solutions/private-ai-inference",
        icon: Cpu,
      },
      {
        id: "solution-3",
        title: "Fine-Tuned Models",
        description: "Private model customization",
        href: "/solutions/fine-tuned-models",
        icon: Sparkles,
      },
      {
        id: "solution-4",
        title: "Confidential Training",
        description: "Large-scale model training with encrypted gradients",
        href: "/solutions/confidential-training",
        icon: Layers,
      },
      {
        id: "solution-5",
        title: "AI Agents",
        description: "Verifiable agent execution",
        href: "/solutions/ai-agents",
        icon: Bot,
      },
    ],
  },
  {
    title: "Use Cases",
    features: [
      {
        id: "solution-6",
        title: "Financial AI",
        description: "Confidential AI for financial services",
        href: "/success-stories/financial-services",
        icon: Briefcase,
      },
      {
        id: "solution-7",
        title: "Legal AI",
        description: "Privacy-preserving AI for law firms",
        href: "/posts/confidential-ai-for-law-firms",
        icon: Briefcase,
      },
      {
        id: "solution-8",
        title: "Healthcare AI",
        description: "Secure AI for healthcare research",
        href: "/success-stories/healthcare-research",
        icon: Briefcase,
      },
      {
        id: "solution-9",
        title: "AI SaaS",
        description: "Confidential AI platform solutions",
        href: "/success-stories/ai-saas-platform",
        icon: Briefcase,
      },
      {
        id: "solution-10",
        title: "Decentralized AI",
        description: "Privacy-first decentralized AI",
        href: "/success-stories/decentralized-ai",
        icon: Briefcase,
      },
    ],
  },
  {
    title: "Resources",
    features: [
      {
        id: "solution-11",
        title: "Success Stories",
        description: "Real-world implementations",
        href: "/success-stories",
        icon: Lightbulb,
      },
      {
        id: "solution-12",
        title: "Apps on Phala",
        description: "Explore applications built on Phala",
        href: "https://cloud.phala.network/explorer",
        icon: PackageOpen,
      },
    ],
  },
];

const SolutionsMenu = () => (
  <div>
    <div className="space-y-6 lg:flex lg:space-x-8 lg:space-y-0">
      <div className="w-full shrink-0 lg:max-w-[18rem]">
        <a
          href="/solutions/private-ai-data"
          className="group relative flex h-full flex-row overflow-hidden rounded-lg p-0 lg:rounded-xl bg-primary text-primary-foreground"
        >
          <div className="relative z-10 flex w-full flex-col-reverse text-left lg:flex-col">
            <div className="aspect-4/3 relative flex max-h-[18rem] w-full flex-1 justify-center bg-primary/20">
              <div className="flex items-center justify-center p-8">
                <Database className="h-20 w-20" />
              </div>
            </div>
            <div className="relative z-20 flex flex-col rounded-b-xl p-6 bg-primary">
              <div className="flex items-center space-x-1 text-xs">
                AI Solutions
                <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
              </div>
              <p className="text-primary-foreground/85 mt-2 text-xs">
                Privacy-preserving AI for sensitive data and compute workloads
              </p>
            </div>
          </div>
        </a>
      </div>
      <div className="grid w-full gap-y-12 lg:gap-y-6">
        {solutionCategories.map((category) => (
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
                  href={feature.href}
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
  </div>
);

// Developers Menu
const developerResources = [
  {
    id: "resource-1",
    title: "Documentation",
    description: "Complete guides and API references",
    href: "https://docs.phala.com/?utm_source=phala.network&utm_medium=site-nav",
  },
  {
    id: "resource-2",
    title: "Guides",
    description: "Step-by-step tutorials and best practices",
    href: "/tags/Developers",
  },
  {
    id: "resource-3",
    title: "Templates",
    description: "Ready-to-use project templates",
    href: "https://cloud.phala.network/templates",
  },
  {
    id: "resource-4",
    title: "Service Status",
    description: "Real-time monitoring and uptime",
    href: "https://status.phala.network/",
  },
  {
    id: "resource-5",
    title: "Startup Program",
    description: "Free credits and support for startups",
    href: "/startup-program",
  },
];

const DevelopersMenu = () => (
  <div className="grid gap-y-12 md:grid-cols-2 md:gap-x-6 lg:grid-cols-4 lg:gap-6">
    <div className="col-span-1">
      <a
        href="https://docs.phala.com/?utm_source=phala.network&utm_medium=site-nav"
        className="group relative flex h-full flex-row overflow-hidden rounded-lg p-0 lg:rounded-xl bg-primary text-primary-foreground"
      >
        <div className="relative z-10 flex w-full flex-col-reverse text-left">
          <div className="relative z-20 flex flex-col px-6 pb-[14rem] pt-6 md:pb-6 md:pt-40">
            <div className="mt-auto flex items-center space-x-1 text-xs">
              Developer Platform
              <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
            </div>
            <p className="mt-2 text-xs text-primary-foreground/70">
              Build confidential AI applications with our comprehensive toolkit
            </p>
          </div>
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <svg className="h-32 w-32" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
        </div>
      </a>
    </div>
    <div className="lg:col-span-3 lg:flex lg:flex-col">
      <div>
        <div className="border-border mb-4 pb-3 text-left md:mb-6 lg:border-b">
          <strong className="text-muted-foreground text-left text-xs font-medium uppercase tracking-wider">
            Developer Resources
          </strong>
        </div>
      </div>
      <menu className="grid gap-y-4 lg:h-full lg:grid-cols-3 lg:gap-6">
        {developerResources.map((resource) => (
          <NavigationMenuLink
            key={resource.id}
            href={resource.href}
            className="border-border bg-accent lg:bg-background group flex flex-row items-center space-x-4 rounded-md px-6 py-5 text-left md:space-x-5 lg:border lg:p-5"
          >
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
  </div>
);

// Network Menu
const networkItems = [
  {
    id: "network-1",
    title: "About Phala Network",
    description: "Learn about our privacy-first technology",
    href: "https://docs.phala.com/overview/phala-network?utm_source=phala.network&utm_medium=site-nav",
    icon: Network,
  },
  {
    id: "network-2",
    title: "PHA Token",
    description: "Native token for ecosystem and governance",
    href: "https://docs.phala.com/overview/pha-token/introduction",
    icon: Coins,
  },
  {
    id: "network-3",
    title: "Wallet & Staking",
    description: "Manage tokens and stake across networks",
    href: "https://app.phala.network/?utm_source=phala.network&utm_medium=site-nav",
    icon: Coins,
  },
  {
    id: "network-4",
    title: "Governance",
    description: "Participate in network decisions",
    href: "https://phala.subsquare.io/?utm_source=phala.network&utm_medium=site-nav",
    icon: Network,
  },
  {
    id: "network-5",
    title: "Explorer",
    description: "Browse blockchain transactions",
    href: "https://phala.subscan.io/",
    icon: Network,
  },
  {
    id: "network-6",
    title: "Compute Provider",
    description: "Join as a provider and earn rewards",
    href: "https://docs.phala.com/network/compute-providers/basic-info/introduction",
    icon: Cpu,
  },
];

const NetworkMenu = () => (
  <div className="grid gap-y-6 md:grid-cols-2 md:gap-x-6 lg:grid-cols-3">
    {networkItems.map((item) => (
      <NavigationMenuLink
        key={item.id}
        href={item.href}
        className="border-border group flex w-full flex-row items-center rounded-lg border lg:rounded-xl p-6"
      >
        <div className="flex items-start text-left">
          <item.icon className="size-8 mr-4" />
          <div>
            <div className="text-foreground/85 hover:text-foreground mb-1 mt-auto text-sm font-bold">
              {item.title}
            </div>
            <p className="text-muted-foreground group-hover:text-foreground text-xs">
              {item.description}
            </p>
          </div>
        </div>
      </NavigationMenuLink>
    ))}
  </div>
);

// Resources Menu
const resourceCategories = [
  {
    title: "Community & Learning",
    items: [
      {
        id: "res-1",
        title: "Blog",
        description: "Latest updates and insights",
        href: "/blog",
      },
      {
        id: "res-2",
        title: "Ecosystem",
        description: "Partner projects and integrations",
        href: "/partnerships",
      },
      {
        id: "res-3",
        title: "Ambassador Program",
        description: "Join our global community",
        href: "https://github.com/Phala-Network/growth-program",
      },
      {
        id: "res-4",
        title: "Changelog",
        description: "Product updates and releases",
        href: "https://docs.phala.com/phala-cloud/changelog",
      },
      {
        id: "res-5",
        title: "Media Kit",
        description: "Logos, assets, and guidelines",
        href: "https://drive.google.com/drive/folders/1u60uDV8CnZBBhySZMJfiMQ0XgdJXkVhq",
      },
      {
        id: "res-6",
        title: "Career",
        description: "Join the Phala team",
        href: "https://wellfound.com/company/phala-network",
      },
    ],
  },
  {
    title: "Phala Network",
    items: [
      {
        id: "network-1",
        title: "About Phala Network",
        description: "Learn about our privacy-first technology",
        href: "https://docs.phala.com/overview/phala-network?utm_source=phala.network&utm_medium=site-nav",
      },
      {
        id: "network-2",
        title: "PHA Token",
        description: "Native token for ecosystem and governance",
        href: "https://docs.phala.com/overview/pha-token/introduction",
      },
      {
        id: "network-3",
        title: "Wallet & Staking",
        description: "Manage tokens and stake across networks",
        href: "https://app.phala.network/?utm_source=phala.network&utm_medium=site-nav",
      },
      {
        id: "network-4",
        title: "Governance",
        description: "Participate in network decisions",
        href: "https://phala.subsquare.io/?utm_source=phala.network&utm_medium=site-nav",
      },
      {
        id: "network-5",
        title: "Explorer",
        description: "Browse blockchain transactions",
        href: "https://phala.subscan.io/",
      },
      {
        id: "network-6",
        title: "Compute Provider",
        description: "Join as a provider and earn rewards",
        href: "https://docs.phala.com/network/compute-providers/basic-info/introduction",
      },
    ],
  },
];

const ResourcesMenu = () => (
  <div>
    {resourceCategories.map((category) => (
      <div key={category.title} className="mb-12 last:mb-0">
        <div className="border-border mb-6 pb-3 text-left lg:border-b">
          <strong className="text-muted-foreground text-left text-xs font-medium uppercase tracking-wider">
            {category.title}
          </strong>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {category.items.map((item) => (
            <NavigationMenuLink
              key={item.id}
              href={item.href}
              className="border-border group flex flex-row items-center space-x-4 rounded-md border p-4 text-left lg:border lg:p-5"
            >
              <div className="flex-1">
                <div className="text-foreground/85 group-hover:text-foreground text-sm font-medium">
                  {item.title}
                </div>
                <p className="text-muted-foreground group-hover:text-foreground mt-1 text-xs">
                  {item.description}
                </p>
              </div>
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 lg:hidden" />
            </NavigationMenuLink>
          ))}
        </div>
      </div>
    ))}
  </div>
);

const navigationMenuItems = [
  {
    key: "products",
    label: "Products",
    component: ProductsMenu,
  },
  {
    key: "solutions",
    label: "Solutions",
    component: SolutionsMenu,
  },
  {
    key: "developers",
    label: "Developers",
    component: DevelopersMenu,
  },
  {
    key: "resources",
    label: "Resources",
    component: ResourcesMenu,
  },
] as const;

const PhalaNavbar = () => {
  const [open, setOpen] = useState(false);
  const [submenu, setSubmenu] = useState<
    "products" | "solutions" | "developers" | "resources" | null
  >(null);

  return (
    <section className="bg-background inset-x-0 top-0 z-50 fixed">
      <div className="container">
        <NavigationMenu className="min-w-full [&>div:last-child]:left-auto">
          <div className="flex w-full justify-between gap-2 py-4">
            <a
              href="/"
              className="flex items-center gap-2"
            >
              <img
                src="/home/logo.svg"
                className="max-h-8"
                alt="Phala Network"
              />
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
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/pricing"
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-xs xl:text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                  >
                    Pricing
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/about"
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-xs xl:text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                  >
                    About Us
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </div>
            <div className="flex items-center gap-2">
              <Button asChild className="hidden md:block">
                <a href="https://cloud.phala.network/dashboard?utm_source=phala.network&utm_medium=site-nav">
                  Dashboard
                </a>
              </Button>
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
                    <ArrowRight className="size-4 text-xs rotate-180" />
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
                  <a
                    href="/pricing"
                    className="border-border flex w-full items-center border-b py-6 text-left"
                  >
                    <span className="flex-1 text-sm font-medium">Pricing</span>
                  </a>
                  <a
                    href="/about"
                    className="border-border flex w-full items-center border-b py-6 text-left"
                  >
                    <span className="flex-1 text-sm font-medium">About Us</span>
                  </a>
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
                <Button asChild>
                  <a href="https://cloud.phala.network/dashboard?utm_source=phala.network&utm_medium=site-nav">
                    Dashboard
                  </a>
                </Button>
              </div>
            </div>
          )}
        </NavigationMenu>
      </div>
    </section>
  );
};

export { PhalaNavbar };

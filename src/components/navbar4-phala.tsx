'use client'

import {
  ArrowLeft,
  ArrowRight,
  Award,
  Book,
  BookOpen,
  Bot,
  Brain,
  Briefcase,
  ChartBar,
  Cpu,
  Database,
  ExternalLink,
  FileCode,
  GitBranch,
  Globe,
  Gpu,
  Layers,
  Lock,
  Menu,
  Newspaper,
  Package,
  Rocket,
  Server,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Wallet,
  X,
  Zap,
} from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'

// Products Menu Data
const coreProducts = [
  {
    id: 'product-1',
    title: 'Confidential VM',
    description: 'Secure virtual machines with hardware-level encryption.',
    href: '/confidential-vm',
    icon: Server,
  },
  {
    id: 'product-2',
    title: 'Confidential AI Models',
    description: 'Run AI models with complete privacy and security.',
    href: '/confidential-ai-models',
    icon: Brain,
  },
  {
    id: 'product-3',
    title: 'GPU TEE',
    description: 'Hardware-enforced confidential computing on GPUs.',
    href: '/gpu-tee',
    icon: Gpu,
  },
]

const zeroTrustSDK = [
  {
    id: 'product-4',
    title: 'dStack',
    description: 'Decentralized infrastructure for secure computing.',
    href: '/dstack',
    icon: Layers,
  },
]

const trustCenter = {
  id: 'product-5',
  title: 'Trust Center',
  description: 'SOC 2, HIPAA compliance & security controls.',
  href: '/trust',
  icon: ShieldCheck,
}

const nvidiaProducts = [
  {
    id: 'gpu-1',
    title: 'H100',
    description: 'NVIDIA H100 with confidential computing.',
    href: '/gpu-tee/h100',
    icon: Gpu,
  },
  {
    id: 'gpu-2',
    title: 'H200',
    description: 'NVIDIA H200 with confidential computing.',
    href: '/gpu-tee/h200',
    icon: Gpu,
  },
  {
    id: 'gpu-3',
    title: 'B200',
    description: 'NVIDIA B200 with confidential computing.',
    href: '/gpu-tee/b200',
    icon: Gpu,
  },
]

const comparisons = [
  {
    id: 'compare-1',
    title: 'vs AWS Nitro',
    description: 'Compare Phala with AWS Nitro Enclaves.',
    href: '/compare/phala-vs-aws-nitro',
    icon: ChartBar,
  },
  {
    id: 'compare-2',
    title: 'vs GCP',
    description: 'Compare Phala with Google Cloud Platform.',
    href: '/compare/phala-vs-gcp',
    icon: ChartBar,
  },
  {
    id: 'compare-3',
    title: 'vs Tinfoil',
    description: 'Compare Phala with Tinfoil.',
    href: '/compare/phala-vs-tinfoil',
    icon: ChartBar,
  },
]

// Solutions Menu Data
const solutionCategories = [
  {
    title: 'AI Solutions',
    solutions: [
      {
        id: 'solution-1',
        title: 'Private AI Data',
        description: 'Keep your AI data private and secure.',
        href: '/solutions/private-ai-data',
        icon: Lock,
      },
      {
        id: 'solution-2',
        title: 'Private AI Inference',
        description: 'Run AI inference with complete privacy.',
        href: '/solutions/private-ai-inference',
        icon: Brain,
      },
      {
        id: 'solution-3',
        title: 'Fine-Tuned Models',
        description: 'Train and deploy custom AI models securely.',
        href: '/solutions/fine-tuned-models',
        icon: Sparkles,
      },
      {
        id: 'solution-4',
        title: 'Confidential Training',
        description: 'Train AI models with confidential data.',
        href: '/solutions/confidential-training',
        icon: Database,
      },
      {
        id: 'solution-5',
        title: 'AI Agents',
        description: 'Build intelligent agents with privacy guarantees.',
        href: '/solutions/ai-agents',
        icon: Bot,
      },
      {
        id: 'solution-6',
        title: 'AI Wallet Copilot',
        description: 'Intelligent wallet assistance with privacy.',
        href: 'https://f8606a4be438bbc89cc8d5cce2105490bf1622dc-3000.dstack-pha-prod7.phala.network',
        icon: Wallet,
      },
    ],
  },
  {
    title: 'Use Cases',
    solutions: [
      {
        id: 'usecase-1',
        title: 'Financial AI',
        description: 'Confidential AI for financial services.',
        href: '/success-stories/financial-services',
        icon: ChartBar,
      },
      {
        id: 'usecase-2',
        title: 'Legal AI',
        description: 'Privacy-preserving AI for legal workflows.',
        href: '/success-stories/legal',
        icon: Briefcase,
      },
      {
        id: 'usecase-3',
        title: 'Healthcare AI',
        description: 'Secure AI for healthcare applications.',
        href: '/success-stories/healthcare-research',
        icon: ShieldCheck,
      },
      {
        id: 'usecase-4',
        title: 'AI SaaS',
        description: 'Build privacy-first AI SaaS products.',
        href: '/success-stories/ai-saas-platform',
        icon: Zap,
      },
      {
        id: 'usecase-5',
        title: 'Decentralized AI',
        description: 'Decentralized AI infrastructure.',
        href: '/success-stories/decentralized-ai',
        icon: Globe,
      },
    ],
  },
]

// Developers Menu Data
const developers = [
  {
    id: 'dev-1',
    title: 'Documentation',
    description: 'Complete guides and API references.',
    href: 'https://docs.phala.com/',
    icon: Book,
  },
  {
    id: 'dev-2',
    title: 'Learn',
    description: 'Educational resources and tutorials.',
    href: '/learn',
    icon: BookOpen,
  },
  {
    id: 'dev-3',
    title: 'Guides',
    description: 'Step-by-step tutorials for developers.',
    href: '/tags/Developers',
    icon: FileCode,
  },
  {
    id: 'dev-4',
    title: 'Templates',
    description: 'Start quickly with ready-made templates.',
    href: 'https://cloud.phala.com/templates',
    icon: FileCode,
  },
  {
    id: 'dev-5',
    title: 'Service Status',
    description: 'Check real-time service availability.',
    href: 'https://status.phala.network/',
    icon: ChartBar,
  },
  {
    id: 'dev-6',
    title: 'Startup Program',
    description: 'Get support for your startup.',
    href: '/startup-program',
    icon: Rocket,
  },
]

// Resources Menu Data
const resourcesCommunity = [
  {
    id: 'resource-1',
    title: 'Blog',
    description: 'Latest updates and insights from Phala.',
    href: '/blog',
    icon: Newspaper,
  },
  {
    id: 'resource-2',
    title: 'Compliance',
    description: 'SOC 2, HIPAA compliance & security controls.',
    href: '/trust',
    icon: ShieldCheck,
  },
  {
    id: 'resource-3',
    title: 'Ecosystem/Partnerships',
    description: 'Explore our partner network.',
    href: '/partnerships',
    icon: Users,
  },
  {
    id: 'resource-4',
    title: 'Ambassador Program',
    description: 'Join our global community.',
    href: 'https://github.com/Phala-Network/growth-program',
    icon: Award,
  },
  {
    id: 'resource-5',
    title: 'Changelog',
    description: 'Track product updates and releases.',
    href: '/changelog',
    icon: GitBranch,
  },
  {
    id: 'resource-6',
    title: 'Media Kit',
    description: 'Brand assets and press resources.',
    href: 'https://drive.google.com/drive/folders/1u60uDV8CnZBBhySZMJfiMQ0XgdJXkVhq',
    icon: Package,
  },
  {
    id: 'resource-7',
    title: 'Career',
    description: 'Join the Phala team.',
    href: 'https://wellfound.com/company/phala-network',
    icon: Briefcase,
  },
]

const resourcesNetwork = [
  {
    id: 'network-1',
    title: 'About Phala Network',
    description: 'Learn about our mission and vision.',
    href: 'https://docs.phala.com/network',
    icon: Globe,
  },
  {
    id: 'network-2',
    title: 'Wallet, Stake, Bridge',
    description: 'Manage your PHA tokens.',
    href: 'https://app.phala.network/',
    icon: Wallet,
  },
  {
    id: 'network-3',
    title: 'Provide Secure GPU',
    description: 'Become a compute provider.',
    href: 'https://docs.phala.com/network/compute-providers/run-GPU-on-phala/gpu-deployment-guide',
    icon: Gpu,
  },
  {
    id: 'network-4',
    title: 'Secured by Blockchain',
    description: 'Explore the network explorer.',
    href: 'https://explorer.phala.network/',
    icon: Globe,
  },
]

// Helper function to check if link is external
const isExternalLink = (href: string) => href.startsWith('http')

// Products Menu Component
const ProductsMenu = () => (
  <div className="grid gap-y-12 lg:gap-y-6">
    {/* Row 1: Core Products */}
    <div className="grid gap-y-2 lg:gap-y-6">
      <div className="border-border text-left lg:border-b lg:pb-3">
        <strong className="text-muted-foreground text-left text-xs font-medium uppercase tracking-wider">
          Core Products
        </strong>
      </div>
      <menu className="grid md:grid-cols-3 md:gap-x-5 lg:gap-y-7">
        {coreProducts.map((product) => (
          <div key={product.id}>
            <NavigationMenuLink
              href={product.href}
              {...(isExternalLink(product.href) && {
                target: '_blank',
                rel: 'noopener noreferrer',
              })}
              className="border-border group flex flex-row items-center space-x-6 border-b py-5 text-left sm:py-7 lg:space-x-4 lg:border-0 lg:py-2"
            >
              <div className="relative flex aspect-square w-6 shrink-0 items-center justify-center overflow-clip rounded md:size-9">
                <product.icon className="size-5" />
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
          </div>
        ))}
      </menu>
    </div>

    {/* Row 2: Zero Trust SDK + Trust Center */}
    <div className="grid gap-y-2 lg:gap-y-6">
      <div className="border-border text-left lg:border-b lg:pb-3">
        <strong className="text-muted-foreground text-left text-xs font-medium uppercase tracking-wider">
          Zero Trust SDK
        </strong>
      </div>
      <menu className="grid md:grid-cols-2 md:gap-x-5 lg:gap-y-7">
        {zeroTrustSDK.map((product) => (
          <div key={product.id}>
            <NavigationMenuLink
              href={product.href}
              {...(isExternalLink(product.href) && {
                target: '_blank',
                rel: 'noopener noreferrer',
              })}
              className="border-border group flex flex-row items-center space-x-6 border-b py-5 text-left sm:py-7 lg:space-x-4 lg:border-0 lg:py-2"
            >
              <div className="relative flex aspect-square w-6 shrink-0 items-center justify-center overflow-clip rounded md:size-9">
                <product.icon className="size-5" />
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
          </div>
        ))}
        <div key={trustCenter.id}>
          <NavigationMenuLink
            href={trustCenter.href}
            {...(isExternalLink(trustCenter.href) && {
              target: '_blank',
              rel: 'noopener noreferrer',
            })}
            className="border-border group flex flex-row items-center space-x-6 border-b py-5 text-left sm:py-7 lg:space-x-4 lg:border-0 lg:py-2"
          >
            <div className="relative flex aspect-square w-6 shrink-0 items-center justify-center overflow-clip rounded md:size-9">
              <trustCenter.icon className="size-5" />
            </div>
            <div className="flex-1">
              <div className="text-foreground/85 group-hover:text-foreground text-sm font-medium flex items-center gap-1.5">
                {trustCenter.title}
                {isExternalLink(trustCenter.href) && <ExternalLink className="size-3 opacity-50" />}
              </div>
              <p className="text-muted-foreground group-hover:text-foreground mt-1 text-xs">
                {trustCenter.description}
              </p>
            </div>
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 lg:hidden" />
          </NavigationMenuLink>
        </div>
      </menu>
    </div>

    {/* Row 3: Nvidia Confidential Compute (Left) + Comparisons (Right) */}
    <div className="grid gap-y-6 md:grid-cols-2 md:gap-x-8">
      {/* Left: Nvidia Confidential Compute */}
      <div className="grid gap-y-2 lg:gap-y-6">
        <div className="border-border text-left lg:border-b lg:pb-3">
          <strong className="text-muted-foreground text-left text-xs font-medium uppercase tracking-wider">
            Nvidia Confidential Compute
          </strong>
        </div>
        <menu className="grid gap-y-4 lg:gap-y-7">
          {nvidiaProducts.map((product) => (
            <div key={product.id}>
              <NavigationMenuLink
                href={product.href}
                {...(isExternalLink(product.href) && {
                  target: '_blank',
                  rel: 'noopener noreferrer',
                })}
                className="border-border group flex flex-row items-center space-x-6 border-b py-5 text-left sm:py-7 lg:space-x-4 lg:border-0 lg:py-2"
              >
                <div className="relative flex aspect-square w-6 shrink-0 items-center justify-center overflow-clip rounded md:size-9">
                  <product.icon className="size-5" />
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
            </div>
          ))}
        </menu>
      </div>

      {/* Right: Comparisons */}
      <div className="grid gap-y-2 lg:gap-y-6">
        <div className="border-border text-left lg:border-b lg:pb-3">
          <strong className="text-muted-foreground text-left text-xs font-medium uppercase tracking-wider">
            Comparisons
          </strong>
        </div>
        <menu className="grid gap-y-4 lg:gap-y-7">
          {comparisons.map((comparison) => (
            <div key={comparison.id}>
              <NavigationMenuLink
                href={comparison.href}
                {...(isExternalLink(comparison.href) && {
                  target: '_blank',
                  rel: 'noopener noreferrer',
                })}
                className="border-border group flex flex-row items-center space-x-6 border-b py-5 text-left sm:py-7 lg:space-x-4 lg:border-0 lg:py-2"
              >
                <div className="relative flex aspect-square w-6 shrink-0 items-center justify-center overflow-clip rounded md:size-9">
                  <comparison.icon className="size-5" />
                </div>
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
            </div>
          ))}
        </menu>
      </div>
    </div>
  </div>
)

// Solutions Menu Component
const SolutionsMenu = () => (
  <div className="grid gap-y-12 lg:gap-y-6">
    {solutionCategories.map((category) => (
      <div key={category.title} className="grid gap-y-2 lg:gap-y-6">
        <div className="border-border text-left lg:border-b lg:pb-3">
          <strong className="text-muted-foreground text-left text-xs font-medium uppercase tracking-wider">
            {category.title}
          </strong>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {category.solutions.map((solution) => (
            <NavigationMenuLink
              key={solution.id}
              href={solution.href}
              {...(isExternalLink(solution.href) && {
                target: '_blank',
                rel: 'noopener noreferrer',
              })}
              className="border-border bg-accent lg:bg-background group flex flex-row items-center space-x-4 rounded-md px-6 py-5 text-left lg:border lg:p-5"
            >
              <solution.icon className="size-6" />
              <div className="flex-1">
                <div className="text-foreground/85 group-hover:text-foreground text-sm font-medium flex items-center gap-1.5">
                  {solution.title}
                  {isExternalLink(solution.href) && <ExternalLink className="size-3 opacity-50" />}
                </div>
                <p className="text-muted-foreground group-hover:text-foreground mt-1 text-xs">
                  {solution.description}
                </p>
              </div>
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 lg:hidden" />
            </NavigationMenuLink>
          ))}
        </div>
      </div>
    ))}
  </div>
)

// Developers Menu Component
const DevelopersMenu = () => (
  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    {developers.map((item) => (
      <NavigationMenuLink
        key={item.id}
        href={item.href}
        {...(isExternalLink(item.href) && {
          target: '_blank',
          rel: 'noopener noreferrer',
        })}
        className="border-border bg-accent lg:bg-background group flex flex-row items-center space-x-4 rounded-md px-6 py-5 text-left md:space-x-5 lg:border lg:p-5"
      >
        <item.icon className="size-6 sm:size-7" />
        <div className="ml-4 flex-1">
          <div className="text-foreground/85 group-hover:text-foreground text-sm font-medium flex items-center gap-1.5">
            {item.title}
            {isExternalLink(item.href) && <ExternalLink className="size-3 opacity-50" />}
          </div>
          <p className="text-muted-foreground group-hover:text-foreground mt-1 text-xs">
            {item.description}
          </p>
        </div>
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 lg:hidden" />
      </NavigationMenuLink>
    ))}
  </div>
)

// Resources Menu Component
const ResourcesMenu = () => (
  <div>
    <div className="mb-8">
      <div className="border-border mb-6 pb-3 text-left lg:border-b">
        <strong className="text-muted-foreground text-left text-xs font-medium uppercase tracking-wider">
          Community
        </strong>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {resourcesCommunity.map((resource) => (
          <NavigationMenuLink
            key={resource.id}
            href={resource.href}
            {...(isExternalLink(resource.href) && {
              target: '_blank',
              rel: 'noopener noreferrer',
            })}
            className="border-border bg-accent lg:bg-background group flex flex-row items-center space-x-4 rounded-md px-6 py-5 text-left lg:border lg:p-5"
          >
            <resource.icon className="size-6" />
            <div className="flex-1">
              <div className="text-foreground/85 group-hover:text-foreground text-sm font-medium flex items-center gap-1.5">
                {resource.title}
                {isExternalLink(resource.href) && <ExternalLink className="size-3 opacity-50" />}
              </div>
              <p className="text-muted-foreground group-hover:text-foreground mt-1 text-xs">
                {resource.description}
              </p>
            </div>
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 lg:hidden" />
          </NavigationMenuLink>
        ))}
      </div>
    </div>
    <div>
      <div className="border-border mb-6 pb-3 text-left lg:border-b">
        <strong className="text-muted-foreground text-left text-xs font-medium uppercase tracking-wider">
          Network
        </strong>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {resourcesNetwork.map((resource) => (
          <NavigationMenuLink
            key={resource.id}
            href={resource.href}
            {...(isExternalLink(resource.href) && {
              target: '_blank',
              rel: 'noopener noreferrer',
            })}
            className="border-border bg-accent lg:bg-background group flex flex-row items-center space-x-4 rounded-md px-6 py-5 text-left lg:border lg:p-5"
          >
            <resource.icon className="size-6" />
            <div className="flex-1">
              <div className="text-foreground/85 group-hover:text-foreground text-sm font-medium flex items-center gap-1.5">
                {resource.title}
                {isExternalLink(resource.href) && <ExternalLink className="size-3 opacity-50" />}
              </div>
              <p className="text-muted-foreground group-hover:text-foreground mt-1 text-xs">
                {resource.description}
              </p>
            </div>
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 lg:hidden" />
          </NavigationMenuLink>
        ))}
      </div>
    </div>
  </div>
)

const navigationMenuItems = [
  {
    key: 'products',
    label: 'Products',
    component: ProductsMenu,
  },
  {
    key: 'solutions',
    label: 'Solutions',
    component: SolutionsMenu,
  },
  {
    key: 'developers',
    label: 'Developers',
    component: DevelopersMenu,
  },
  {
    key: 'resources',
    label: 'Resources',
    component: ResourcesMenu,
  },
] as const

const PhalaNavbar4 = () => {
  const [open, setOpen] = useState(false)
  const [submenu, setSubmenu] = useState<
    'products' | 'solutions' | 'developers' | 'resources' | null
  >(null)

  return (
    <section className="bg-background fixed inset-x-0 top-0 z-50">
      {/* SEO-friendly hidden static navigation */}
      <nav className="sr-only" aria-label="Main navigation">
        <ul>
          <li>
            <a href="/">Products</a>
            <ul>
              {coreProducts.map((item) => (
                <li key={item.id}>
                  <a href={item.href}>{item.title}</a>
                </li>
              ))}
              {zeroTrustSDK.map((item) => (
                <li key={item.id}>
                  <a href={item.href}>{item.title}</a>
                </li>
              ))}
              <li>
                <a href={trustCenter.href}>{trustCenter.title}</a>
              </li>
              {nvidiaProducts.map((item) => (
                <li key={item.id}>
                  <a href={item.href}>{item.title}</a>
                </li>
              ))}
              {comparisons.map((item) => (
                <li key={item.id}>
                  <a href={item.href}>{item.title}</a>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <a href="/">Solutions</a>
            <ul>
              {solutionCategories.flatMap((category) =>
                category.solutions.map((item) => (
                  <li key={item.id}>
                    <a href={item.href}>{item.title}</a>
                  </li>
                ))
              )}
            </ul>
          </li>
          <li>
            <a href="/">Developers</a>
            <ul>
              {developers.map((item) => (
                <li key={item.id}>
                  <a href={item.href}>{item.title}</a>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <a href="/">Resources</a>
            <ul>
              {resourcesCommunity.map((item) => (
                <li key={item.id}>
                  <a href={item.href}>{item.title}</a>
                </li>
              ))}
              {resourcesNetwork.map((item) => (
                <li key={item.id}>
                  <a href={item.href}>{item.title}</a>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <a href="/pricing">Pricing</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="https://cloud.phala.com/login">Sign in</a>
          </li>
          <li>
            <a href="https://cloud.phala.com/register">Sign up</a>
          </li>
        </ul>
      </nav>

      <div className="container">
        <NavigationMenu className="min-w-full [&>div:last-child]:left-auto">
          <div className="flex w-full justify-between gap-2 py-4">
            <a href="/" className="flex items-center gap-2">
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
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-xs font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 xl:text-sm"
                  >
                    Pricing
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/about"
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-xs font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 xl:text-sm"
                  >
                    About Us
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" className="hidden md:block" asChild>
                <a href="/contact">Contact</a>
              </Button>
              <Button variant="ghost" className="hidden md:block" asChild>
                <a href="https://cloud.phala.com/login">Sign in</a>
              </Button>
              <Button className="hidden md:block" asChild>
                <a href="https://cloud.phala.com/register">Sign up</a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                aria-label="Main Menu"
                className="lg:hidden"
                onClick={() => {
                  if (open) {
                    setOpen(false)
                    setSubmenu(null)
                  } else {
                    setOpen(true)
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
            <div className="border-border bg-background container fixed inset-0 top-[72px] z-40 flex h-[calc(100vh-72px)] w-full flex-col overflow-auto border-t lg:hidden">
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
                  <a
                    href="/contact"
                    className="border-border flex w-full items-center border-b py-6 text-left"
                  >
                    <span className="flex-1 text-sm font-medium">Contact</span>
                  </a>
                  <a
                    href="https://cloud.phala.com/login"
                    className="border-border flex w-full items-center border-b py-6 text-left"
                  >
                    <span className="flex-1 text-sm font-medium">Sign in</span>
                  </a>
                  <a
                    href="https://cloud.phala.com/register"
                    className="border-border flex w-full items-center border-b py-6 text-left"
                  >
                    <span className="flex-1 text-sm font-medium">Sign up</span>
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
                  <a href="https://cloud.phala.com">Dashboard</a>
                </Button>
              </div>
            </div>
          )}
        </NavigationMenu>
      </div>
    </section>
  )
}

export { PhalaNavbar4 }

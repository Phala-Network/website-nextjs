'use client'

import {
  ArrowRight,
  Bot,
  Code2,
  Cpu,
  Database,
  Layers,
  Lock,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'

import { NavigationMenuLink } from '@/components/ui/navigation-menu'

// Solutions configuration for Phala
const solutions = [
  {
    id: 'private-ai-data',
    title: 'Private AI Data',
    description: 'Compute-to-data on sensitive datasets with TEE isolation.',
    href: '/solutions/private-ai-data',
    icon: Database,
    subpages: [
      {
        id: 'data-marketplace',
        title: 'Data Marketplace',
        href: '/solutions/private-ai-data#marketplace',
        icon: Database,
      },
      {
        id: 'sensitive-analytics',
        title: 'Sensitive Analytics',
        href: '/solutions/private-ai-data#analytics',
        icon: Layers,
      },
      {
        id: 'private-rag',
        title: 'Private RAG',
        href: '/solutions/private-ai-data#rag',
        icon: Code2,
      },
    ],
  },
  {
    id: 'private-ai-inference',
    title: 'Private AI Inference',
    description: 'Confidential LLM serving with zero-logging guarantees.',
    href: '/solutions/private-ai-inference',
    icon: Cpu,
    subpages: [
      {
        id: 'healthcare',
        title: 'Healthcare',
        href: '/solutions/private-ai-inference#healthcare',
        icon: ShieldCheck,
      },
      {
        id: 'legal',
        title: 'Legal',
        href: '/solutions/private-ai-inference#legal',
        icon: Lock,
      },
      {
        id: 'enterprise',
        title: 'Enterprise',
        href: '/solutions/private-ai-inference#enterprise',
        icon: Layers,
      },
    ],
  },
  {
    id: 'fine-tuned',
    title: 'Fine-Tuned Models',
    description: 'Private model customization on proprietary data.',
    href: '/solutions/fine-tuned',
    icon: Sparkles,
    subpages: [
      {
        id: 'ai-saas',
        title: 'AI SaaS',
        href: '/solutions/fine-tuned#saas',
        icon: Layers,
      },
      {
        id: 'ai-sdr',
        title: 'AI SDR',
        href: '/solutions/fine-tuned#sdr',
        icon: Bot,
      },
      {
        id: 'ai-support',
        title: 'AI Support',
        href: '/solutions/fine-tuned#support',
        icon: ShieldCheck,
      },
    ],
  },
  {
    id: 'training',
    title: 'Confidential Training',
    description: 'Large-scale model training with encrypted gradients.',
    href: '/solutions/training',
    icon: Layers,
    subpages: [
      {
        id: 'foundation-models',
        title: 'Foundation Models',
        href: '/solutions/training#foundation',
        icon: Layers,
      },
      {
        id: 'consortium',
        title: 'Consortium Learning',
        href: '/solutions/training#consortium',
        icon: Database,
      },
      {
        id: 'multimodal',
        title: 'Multimodal Training',
        href: '/solutions/training#multimodal',
        icon: Sparkles,
      },
    ],
  },
  {
    id: 'ai-agent',
    title: 'AI Agents',
    description: 'Verifiable agent execution with on-chain attestation.',
    href: '/solutions/ai-agent',
    icon: Bot,
    subpages: [
      {
        id: 'autonomous',
        title: 'Autonomous Agents',
        href: '/solutions/ai-agent#autonomous',
        icon: Bot,
      },
      {
        id: 'financial',
        title: 'Financial Agents',
        href: '/solutions/ai-agent#financial',
        icon: Lock,
      },
      {
        id: 'personal',
        title: 'Personal Agents',
        href: '/solutions/ai-agent#personal',
        icon: ShieldCheck,
      },
      {
        id: 'erc8004',
        title: 'ERC-8004 Verifiable',
        href: '/solutions/ai-agent#erc8004',
        icon: Code2,
      },
    ],
  },
]

const solutionTechnologies = [
  {
    id: 'tee-platform',
    title: 'TEE Platform',
    href: '/gpu-tee',
    icon: Lock,
  },
  {
    id: 'attestation',
    title: 'Remote Attestation',
    href: '/solutions/private-ai-data#attestation',
    icon: ShieldCheck,
  },
  {
    id: 'developer-sdk',
    title: 'Developer SDK',
    href: 'https://docs.phala.network',
    icon: Code2,
  },
]

export const SolutionsMenu = () => (
  <div className="grid gap-8 sm:grid-cols-2">
    <a
      href="/solutions/private-ai-data"
      className="bg-primary text-primary-foreground group relative flex h-full flex-row overflow-hidden rounded-lg px-0 pt-8 lg:rounded-xl lg:px-6"
    >
      <div className="relative flex w-full flex-col space-y-12 text-left md:space-y-8 lg:w-full lg:flex-row lg:justify-between lg:space-x-6 lg:space-y-0 xl:space-x-8">
        <div className="relative flex flex-col px-6 lg:mb-6 lg:px-0">
          <span className="mb-6 text-xs font-medium uppercase tracking-wider md:mb-8">
            Confidential AI Solutions
          </span>
          <div className="mt-auto flex items-center space-x-1 text-xs">
            Explore Our Platform
            <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
          </div>
          <p className="text-primary-foreground/85 mt-2 text-xs">
            Zero-trust computing for data, inference, training, and agents with
            hardware-backed verification.
          </p>
        </div>
        <div className="aspect-2/1 relative overflow-clip rounded-t pl-6 lg:max-w-64 lg:pl-0 xl:max-w-96">
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
            alt="Phala Solutions"
            className="aspect-2/1 h-full w-full translate-y-px object-cover object-center"
          />
        </div>
      </div>
    </a>

    <div className="order-last mt-3 sm:order-none sm:mt-0 sm:py-2 md:p-6">
      <div className="mb-4 text-left leading-none md:col-span-2 lg:col-span-4 lg:mb-6">
        <strong className="text-muted-foreground text-left text-xs font-medium uppercase tracking-wider">
          Platform Technologies
        </strong>
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        {solutionTechnologies.map((technology) => (
          <NavigationMenuLink
            key={technology.id}
            href={technology.href}
            className="group flex flex-row items-center gap-4"
          >
            <technology.icon className="size-4" />
            <div className="flex-1 text-sm font-medium">{technology.title}</div>
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 lg:hidden" />
          </NavigationMenuLink>
        ))}
      </div>
    </div>

    <div className="col-span-full grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">
      {solutions.map((solution) => (
        <div key={solution.id} className="border-border rounded-md border p-5">
          <div className="border-border border-b pb-4">
            <a href={solution.href} className="group flex flex-col text-left">
              <div className="mb-2 flex items-center gap-2">
                <solution.icon className="size-5 text-primary" />
              </div>
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
)

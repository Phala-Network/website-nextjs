'use client'
import {
  ArrowUpRight,
  BarChart,
  Building,
  Building2,
  ChevronLeft,
  ChevronRight,
  Cloud,
  Cpu,
  GraduationCap,
  Lock,
  Menu,
  X,
} from 'lucide-react'
import { useMotionValueEvent, useScroll } from 'motion/react'
import { useState } from 'react'

import { Logo, LogoImageDesktop, LogoImageMobile } from '@/components/logo'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'

// Current site navigation data
const solutions = [
  {
    title: 'Case Studies',
    description: 'Real-world implementations and success stories',
    href: '/case-studies',
    icon: Building2,
  },
  {
    title: 'Apps Built on Phala Cloud',
    description: 'Applications powered by our infrastructure',
    href: '/apps',
    icon: Cloud,
  },
  {
    title: 'Blog',
    description: 'Latest insights and updates',
    href: '/blog',
    icon: BarChart,
  },
]

const useCases = [
  {
    title: 'Confidential AI',
    href: '/confidential-ai',
    icon: Cpu,
  },
  {
    title: 'Why TEE',
    href: '/why-tee',
    icon: Lock,
  },
  {
    title: 'Pricing',
    href: '/pricing',
    icon: Building,
  },
  {
    title: 'About',
    href: '/about',
    icon: GraduationCap,
  },
]

const documentationLinks = [
  {
    title: 'Docs',
    href: 'https://docs.phala.network',
  },
  {
    title: 'Guides',
    href: '/guides',
  },
  {
    title: 'SDK',
    href: '/sdk',
  },
  {
    title: 'Templates',
    href: '/templates',
  },
  {
    title: 'CLI / API',
    href: '/cli-api',
  },
]

const resources = [
  {
    title: 'About',
    description: 'Learn about Phala Network',
    href: '/about',
  },
  {
    title: 'Wallet',
    description: 'Manage your PHA tokens and assets',
    href: '/wallet',
  },
  {
    title: 'Mining',
    description: 'Participate in network mining',
    href: '/mining',
  },
  {
    title: 'PHA Token',
    description: 'PHA is the native token of the Phala blockchain',
    href: 'https://docs.phala.network/tech-specs/pha-token?utm_source=phala.network&utm_medium=site-nav',
  },
  {
    title: 'Compute to Earn',
    description: 'Provide hardware to the network and earn rewards!',
    href: 'https://docs.phala.network/compute-providers/basic-info?utm_source=phala.network&utm_medium=site-nav',
  },
  {
    title: 'Stake',
    description: 'Help secure the network and earn yield by staking your PHA',
    href: 'https://app.phala.network/?utm_source=phala.network&utm_medium=site-nav',
  },
  {
    title: 'Govern',
    description:
      'Take an active part in deciding the future direction of off-chain compute',
    href: 'https://phala.subsquare.io/?utm_source=phala.network&utm_medium=site-nav',
  },
  {
    title: 'Bridge',
    description: 'Bring tokens to and from the Phala Blockchain with SubBridge',
    href: 'https://subbridge.io/?utm_source=phala.network&utm_medium=site-nav',
  },
  {
    title: 'Learn',
    description: 'Explore the architecture and power of Phala Network',
    href: 'https://docs.phala.network/?utm_source=phala.network&utm_medium=site-nav',
  },
]

// Main Navigation Component
function SiteNav() {
  const { scrollY } = useScroll()
  const [hasScrolled, setHasScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [submenu, setSubmenu] = useState<
    'platform' | 'usecases' | 'developers' | 'resources' | null
  >(null)

  useMotionValueEvent(scrollY, 'change', (latest: number) => {
    if (latest > 20) {
      setHasScrolled(true)
    } else {
      setHasScrolled(false)
    }
  })

  return (
    <div
      className={cn(
        'w-screen fixed top-0 left-0 transition-[background-color] duration-100',
        hasScrolled && 'bg-white/80 backdrop-blur-sm',
      )}
    >
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 md:px-12">
        <section>
          <NavigationMenu className="min-w-full">
            <div className="flex w-full items-center gap-12 py-4">
              {/* Logo */}
              <div>
                {(!open || !submenu) && (
                  <>
                    <Logo url="/">
                      <LogoImageDesktop src="/home/logo.svg" alt="Phala" />
                      <LogoImageMobile src="/home/logo.svg" alt="Phala" />
                    </Logo>
                  </>
                )}
                {open && submenu && (
                  <Button variant="ghost" onClick={() => setSubmenu(null)}>
                    <ChevronLeft className="mr-2 size-4" />
                    Back
                  </Button>
                )}
              </div>

              <NavigationMenuList className="hidden lg:flex">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent">
                    Solutions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="min-w-[calc(100vw-4rem)] p-8 lg:p-12 2xl:min-w-[calc(1400px-4rem)]">
                    <div className="flex items-start justify-between gap-8 lg:gap-x-12">
                      <NavigationMenuLink
                        href="/solutions"
                        className="group w-1/3 max-w-[398px] p-0 hover:bg-transparent"
                      >
                        <div className="border-input bg-background overflow-clip rounded-lg border">
                          <div>
                            <img
                              src="/home/cta-bg.png"
                              alt="Solutions overview"
                              className="h-[190px] w-[398px] object-cover object-center"
                            />
                          </div>
                          <div className="p-5 xl:p-8">
                            <div className="mb-2 text-base">
                              Solutions Overview
                            </div>
                            <div className="text-muted-foreground text-sm font-normal">
                              Discover how Phala Network powers confidential
                              computing solutions.
                            </div>
                          </div>
                        </div>
                      </NavigationMenuLink>
                      <div className="max-w-[760px] flex-1">
                        <div className="text-muted-foreground mb-6 text-xs uppercase tracking-widest">
                          Solutions
                        </div>
                        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
                          {solutions.map((solution, index) => (
                            <NavigationMenuLink
                              key={index}
                              href={solution.href}
                              className="group block p-4"
                            >
                              <div className="mb-5 group-hover:opacity-60">
                                <solution.icon
                                  className="size-5 text-black"
                                  strokeWidth={1.5}
                                />
                              </div>
                              <div className="mb-1 text-base">
                                {solution.title}
                              </div>
                              <div className="text-muted-foreground text-sm font-normal">
                                {solution.description}
                              </div>
                            </NavigationMenuLink>
                          ))}
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent">
                    Products
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="min-w-[calc(100vw-4rem)] p-8 lg:p-12 2xl:min-w-[calc(1400px-4rem)]">
                    <div className="flex justify-between gap-8 lg:gap-x-[52px]">
                      <div className="w-1/2 max-w-[510px]">
                        <div className="text-muted-foreground mb-6 text-xs uppercase tracking-widest">
                          Products
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                          {useCases.map((useCase, index) => (
                            <NavigationMenuLink
                              key={index}
                              href={useCase.href}
                              className="group flex flex-row items-center gap-5"
                            >
                              <div className="group-hover:opacity-60">
                                <useCase.icon
                                  className="size-4 text-black"
                                  strokeWidth={1}
                                />
                              </div>
                              <div className="text-base">{useCase.title}</div>
                            </NavigationMenuLink>
                          ))}
                        </div>
                      </div>
                      <NavigationMenuLink
                        href="/confidential-ai"
                        className="group max-w-[604px] flex-1 p-0 hover:bg-transparent"
                      >
                        <div className="border-input bg-background flex h-full rounded-lg border p-0 hover:bg-transparent">
                          <div className="w-2/5 max-w-[310px] shrink-0 overflow-clip rounded-bl-lg rounded-tl-lg">
                            <img
                              src="/illustrations/ai-agents/hero-bg-ai-agents.jpg"
                              alt="Confidential AI"
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div className="flex flex-col p-5 xl:p-8">
                            <div className="text-muted-foreground mb-8 text-xs uppercase tracking-widest">
                              Featured Product
                            </div>
                            <div className="mt-auto">
                              <div className="mb-4 text-xl">
                                Confidential AI
                              </div>
                              <div className="text-muted-foreground text-sm font-normal">
                                Build AI applications with privacy guarantees
                                using trusted execution environments.
                              </div>
                            </div>
                          </div>
                        </div>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent">
                    Developers
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="min-w-[calc(100vw-4rem)] p-8 lg:p-12 2xl:min-w-[calc(1400px-4rem)]">
                    <div className="flex justify-between gap-8 lg:gap-x-12">
                      <div className="w-1/3 max-w-[404px]">
                        <div className="text-muted-foreground mb-4 text-xs uppercase tracking-widest">
                          Documentation
                        </div>
                        <div className="text-muted-foreground mb-6 text-sm font-normal">
                          Everything you need to build on Phala Network
                        </div>
                        <div className="-ml-2.5 space-y-2.5">
                          {documentationLinks.map(
                            (documentationLink, index) => (
                              <NavigationMenuLink
                                key={index}
                                href={documentationLink.href}
                                className="focus:text-accent-foreground group flex flex-row items-center gap-2.5 rounded-md p-2.5"
                              >
                                <ArrowUpRight className="size-4" />
                                <div className="text-base">
                                  {documentationLink.title}
                                </div>
                              </NavigationMenuLink>
                            ),
                          )}
                        </div>
                      </div>
                      <div className="max-w-[716px] flex-1 space-y-6">
                        <NavigationMenuLink
                          href="https://docs.phala.network"
                          className="border-input bg-background flex flex-row items-center overflow-clip rounded-lg border p-0 hover:bg-transparent"
                        >
                          <div className="flex-1 p-5 xl:p-8">
                            <div className="mb-2 text-base">
                              Developer Documentation
                            </div>
                            <div className="text-muted-foreground text-sm font-normal">
                              Complete guides, API references, and tutorials to
                              get you started building on Phala Network.
                            </div>
                          </div>
                          <div className="h-[154px] max-w-[264px] shrink-0">
                            <img
                              src="/icons/docs.png"
                              alt="Documentation"
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                        </NavigationMenuLink>
                        <NavigationMenuLink
                          href="/sdk"
                          className="border-input bg-background flex flex-row items-center overflow-clip rounded-lg border p-0 hover:bg-transparent"
                        >
                          <div className="flex-1 p-5 xl:p-8">
                            <div className="mb-2 text-base">SDK & Tools</div>
                            <div className="text-muted-foreground text-sm font-normal">
                              Software development kits and tools to accelerate
                              your development on Phala Network.
                            </div>
                          </div>
                          <div className="h-[154px] max-w-[264px] shrink-0">
                            <img
                              src="/icons/hero-compute.png"
                              alt="SDK"
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                        </NavigationMenuLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent">
                    Network
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="min-w-[calc(100vw-4rem)] p-8 lg:p-12 2xl:min-w-[calc(1400px-4rem)]">
                    <div className="flex gap-8 lg:gap-12">
                      <div className="flex flex-1 flex-col">
                        <div className="text-muted-foreground mb-6 text-xs uppercase tracking-widest">
                          Network
                        </div>
                        <div className="grid flex-1 grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                          {resources.map((resource, index) => (
                            <NavigationMenuLink
                              key={index}
                              href={resource.href}
                              className="border-input bg-background hover:bg-accent hover:text-accent-foreground flex h-full flex-col overflow-clip rounded-lg border p-5 xl:p-8"
                            >
                              <div className="mt-auto">
                                <div className="mb-2 text-base">
                                  {resource.title}
                                </div>
                                <div className="text-muted-foreground text-sm font-normal">
                                  {resource.description}
                                </div>
                              </div>
                            </NavigationMenuLink>
                          ))}
                        </div>
                      </div>
                      <div className="w-1/3 max-w-[404px]">
                        <div className="text-muted-foreground mb-6 text-xs uppercase tracking-widest">
                          Community
                        </div>
                        <NavigationMenuLink
                          href="/community"
                          className="border-input bg-background mb-6 flex flex-row overflow-clip rounded-lg border p-0 hover:bg-transparent"
                        >
                          <div className="flex-1 p-5 xl:p-8">
                            <div className="mb-2 text-base">
                              Join the Community
                            </div>
                            <div className="text-muted-foreground text-sm font-normal">
                              Connect with developers, validators, and
                              enthusiasts in the Phala Network ecosystem.
                            </div>
                          </div>
                          <div className="w-1/3 max-w-[130px] shrink-0">
                            <img
                              src="/icons/community.png"
                              alt="Community"
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                        </NavigationMenuLink>
                        <NavigationMenuLink
                          href="/contact"
                          className="bg-secondary/30 hover:bg-secondary/80 focus:bg-secondary/80 flex flex-row items-center gap-3 rounded-lg p-3"
                        >
                          <Badge variant="secondary">NEW</Badge>
                          <span className="text-secondary-foreground text-ellipsis text-sm">
                            Get in touch with our team
                          </span>
                        </NavigationMenuLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
              <div className="hidden items-center gap-2 lg:flex ml-auto">
                <Button variant="ghost">Contact</Button>
                <Button variant="ghost">Sign in</Button>
                <Button>Sign up</Button>
              </div>
              <div className="flex items-center gap-4 lg:hidden ml-auto">
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Main Menu"
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

            {/* Mobile Menu (Root) */}
            {open && (
              <div className="border-border bg-background fixed inset-0 top-[72px] flex h-[calc(100vh-72px)] w-full flex-col overflow-scroll border-t lg:hidden">
                <div>
                  <button
                    type="button"
                    className="border-border flex w-full items-center border-b px-8 py-7 text-left"
                    onClick={() => setSubmenu('platform')}
                  >
                    <span className="flex-1">Solutions</span>
                    <span className="shrink-0">
                      <ChevronRight className="size-4" />
                    </span>
                  </button>
                  <button
                    type="button"
                    className="border-border flex w-full items-center border-b px-8 py-7 text-left"
                    onClick={() => setSubmenu('usecases')}
                  >
                    <span className="flex-1">Products</span>
                    <span className="shrink-0">
                      <ChevronRight className="size-4" />
                    </span>
                  </button>
                  <button
                    type="button"
                    className="border-border flex w-full items-center border-b px-8 py-7 text-left"
                    onClick={() => setSubmenu('developers')}
                  >
                    <span className="flex-1">Developers</span>
                    <span className="shrink-0">
                      <ChevronRight className="size-4" />
                    </span>
                  </button>
                  <button
                    type="button"
                    className="border-border flex w-full items-center border-b px-8 py-7 text-left"
                    onClick={() => setSubmenu('resources')}
                  >
                    <span className="flex-1">Network</span>
                    <span className="shrink-0">
                      <ChevronRight className="size-4" />
                    </span>
                  </button>
                </div>
                <div className="mx-[2rem] mt-auto flex flex-col gap-4 py-12">
                  <Button variant="outline" className="relative" size="lg">
                    Contact
                  </Button>
                  <Button variant="outline" className="relative" size="lg">
                    Sign in
                  </Button>
                  <Button className="relative" size="lg">
                    Sign up
                  </Button>
                </div>
              </div>
            )}
            {/* Mobile Menu > Solutions */}
            {open && submenu === 'platform' && (
              <div className="border-border bg-background fixed inset-0 top-[72px] flex h-[calc(100vh-72px)] w-full flex-col overflow-scroll border-t lg:hidden">
                <a href="/solutions" className="block space-y-6 px-8 py-8">
                  <div className="w-full overflow-clip rounded-lg">
                    <img
                      src="/home/cta-bg.png"
                      alt="Solutions overview"
                      className="aspect-2/1 h-full w-full object-cover object-center"
                    />
                  </div>
                  <div>
                    <div className="mb-2 text-base">Solutions Overview</div>
                    <div className="text-muted-foreground text-sm font-normal">
                      Discover how Phala Network powers confidential computing
                      solutions.
                    </div>
                  </div>
                </a>
                <div className="text-muted-foreground px-8 py-3.5 text-xs uppercase tracking-widest">
                  Solutions
                </div>
                <div className="border-border border-t pb-16">
                  {solutions.map((solution, index) => (
                    <a
                      key={index}
                      href={solution.href}
                      className="border-border hover:bg-accent group flex w-full items-start gap-x-4 border-b px-8 py-7 text-left"
                    >
                      <div className="shrink-0">
                        <solution.icon className="size-6" />
                      </div>
                      <div>
                        <div className="mb-1.5 text-base">{solution.title}</div>
                        <div className="text-muted-foreground text-sm font-normal">
                          {solution.description}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}
            {/* Mobile Menu > Products */}
            {open && submenu === 'usecases' && (
              <div className="bg-background fixed inset-0 top-[72px] flex h-[calc(100vh-72px)] w-full flex-col overflow-scroll lg:hidden">
                <div className="text-muted-foreground px-8 py-3.5 text-xs uppercase tracking-widest">
                  Products
                </div>
                <div>
                  {useCases.map((useCase, index) => (
                    <a
                      key={index}
                      href={useCase.href}
                      className="border-border hover:bg-accent group flex w-full items-start gap-x-4 border-t px-8 py-7 text-left"
                    >
                      <div className="shrink-0">
                        <useCase.icon className="size-6" />
                      </div>
                      <div className="text-base">{useCase.title}</div>
                    </a>
                  ))}
                </div>
                <div className="bg-secondary/30 px-8 pb-16 pt-8">
                  <div className="text-muted-foreground mb-7 text-xs uppercase tracking-widest">
                    Featured Product
                  </div>
                  <a href="/confidential-ai" className="block space-y-6">
                    <div className="overflow-clip rounded-lg">
                      <img
                        src="/illustrations/ai-agents/hero-bg-ai-agents.jpg"
                        alt="Confidential AI"
                        className="aspect-2/1 h-full w-full object-cover object-center"
                      />
                    </div>
                    <div>
                      <div className="mb-1.5 text-base">Confidential AI</div>
                      <div className="text-muted-foreground text-sm font-normal">
                        Build AI applications with privacy guarantees using
                        trusted execution environments.
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            )}
            {/* Mobile Menu > Developers */}
            {open && submenu === 'developers' && (
              <div className="border-border bg-background fixed inset-0 top-[72px] flex h-[calc(100vh-72px)] w-full flex-col overflow-scroll border-t lg:hidden">
                <a
                  href="https://docs.phala.network"
                  className="block space-y-6 px-8 py-8"
                >
                  <div className="w-full overflow-clip rounded-lg">
                    <img
                      src="/icons/docs.png"
                      alt="Developer Documentation"
                      className="aspect-2/1 h-full w-full object-cover object-center"
                    />
                  </div>
                  <div>
                    <div className="mb-2 text-base">
                      Developer Documentation
                    </div>
                    <div className="text-muted-foreground text-sm font-normal">
                      Complete guides, API references, and tutorials to get you
                      started building on Phala Network.
                    </div>
                  </div>
                </a>
                <a
                  href="/sdk"
                  className="border-border block space-y-6 border-t px-8 py-8"
                >
                  <div className="w-full overflow-clip rounded-lg">
                    <img
                      src="/icons/hero-compute.png"
                      alt="SDK & Tools"
                      className="aspect-2/1 h-full w-full object-cover object-center"
                    />
                  </div>
                  <div>
                    <div className="mb-2 text-base">SDK & Tools</div>
                    <div className="text-muted-foreground text-sm font-normal">
                      Software development kits and tools to accelerate your
                      development on Phala Network.
                    </div>
                  </div>
                </a>
                <div className="text-muted-foreground px-8 py-3.5 text-xs uppercase tracking-widest">
                  Documentation
                </div>
                <div className="-mx-2.5 space-y-2.5 px-8 pb-16">
                  {documentationLinks.map((documentationLink, index) => (
                    <NavigationMenuLink
                      key={index}
                      href={documentationLink.href}
                      className="py-[18px]focus:text-accent-foreground group flex flex-row items-center gap-2.5 rounded-md px-2.5"
                    >
                      <div className="flex size-5 items-center justify-center rounded">
                        <ArrowUpRight className="size-3" />
                      </div>
                      <div className="text-sm">{documentationLink.title}</div>
                    </NavigationMenuLink>
                  ))}
                </div>
              </div>
            )}
            {/* Mobile Menu > Network */}
            {open && submenu === 'resources' && (
              <div className="bg-background fixed inset-0 top-[72px] flex h-[calc(100vh-72px)] w-full flex-col overflow-scroll lg:hidden">
                <div className="text-muted-foreground px-8 py-3.5 text-xs uppercase tracking-widest">
                  Network
                </div>
                <div>
                  {resources.map((resource, index) => (
                    <a
                      key={index}
                      href={resource.href}
                      className="border-border hover:bg-accent group flex w-full items-start gap-x-4 border-t px-8 py-7 text-left"
                    >
                      <div>
                        <div className="mb-1.5 text-base">{resource.title}</div>
                        <div className="text-muted-foreground text-sm font-normal">
                          {resource.description}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
                <div className="px-8 pb-16 pt-8">
                  <div className="text-muted-foreground mb-7 text-xs uppercase tracking-widest">
                    Community
                  </div>
                  <a href="/community" className="block space-y-6">
                    <div className="overflow-clip rounded-lg">
                      <img
                        src="/icons/community.png"
                        alt="Community"
                        className="aspect-2/1 h-full w-full object-cover object-center"
                      />
                    </div>
                    <div>
                      <div className="mb-1.5 text-base">Join the Community</div>
                      <div className="text-muted-foreground text-sm font-normal">
                        Connect with developers, validators, and enthusiasts in
                        the Phala Network ecosystem.
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            )}
          </NavigationMenu>
        </section>
      </div>
    </div>
  )
}

export default SiteNav

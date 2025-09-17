'use client'

import {
  BarChart3,
  Book,
  BookOpen,
  Brain,
  Coins,
  Cpu,
  GitCompare,
  Gpu,
  GraduationCap,
  Lightbulb,
  Menu,
  Network,
  PackageOpen,
  Play,
  Rocket,
  Search,
  Server,
  SquareArrowOutUpRight,
  Vote,
  Wallet,
} from 'lucide-react'
import { useMotionValueEvent, useScroll } from 'motion/react'
import Link from 'next/link'
import { useState } from 'react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

interface MenuItem {
  title: string
  url: string
  description?: string
  icon?: React.ReactNode
  items?: MenuItem[]
}

const menu = [
  {
    title: 'Products',
    url: '#',
    items: [
      {
        title: 'Confidential VM',
        description:
          'Secure virtual machines with hardware-level privacy protection',
        icon: <Server className="size-5 shrink-0" />,
        url: '/confidential-vm',
      },
      {
        title: 'Confidential AI Models',
        description: 'AI models with end-to-end privacy guarantees',
        icon: <Brain className="size-5 shrink-0" />,
        url: '/confidential-ai-models',
      },
      {
        title: 'GPU TEE',
        description: 'GPU-based confidential computing',
        icon: <Gpu className="size-5 shrink-0" />,
        url: '/confidential-ai',
      },
      {
        title: 'Open Source, dstack',
        description:
          'Open source, decentralized compute infrastructure for secure cloud computing',
        icon: <PackageOpen className="size-5 shrink-0" />,
        url: '/dstack',
      },
    ],
  },
  {
    title: 'Solutions',
    url: '#',
    items: [
      {
        title: 'Success Stories',
        description: 'Real-world implementations of privacy-first solutions',
        icon: <Lightbulb className="size-5 shrink-0" />,
        url: '/success-stories',
      },
      {
        title: 'Apps Built on Phala',
        description:
          'Innovative applications powered by confidential computing',
        icon: <Rocket className="size-5 shrink-0" />,
        url: 'https://cloud.phala.network/explorer',
      },
      {
        title: 'Blog',
        description: 'Latest insights and updates from the Phala ecosystem',
        icon: <BookOpen className="size-5 shrink-0" />,
        url: '/blog',
      },
      {
        title: 'Compare',
        description:
          'See how Phala compares to other confidential computing solutions',
        icon: <GitCompare className="size-5 shrink-0" />,
        url: '/compare',
        items: [
          {
            title: 'Phala vs AWS Nitro',
            description: 'Open-source alternative to AWS Nitro Enclaves',
            url: '/compare/phala-vs-aws-nitro',
          },
          {
            title: 'Phala vs GCP Confidential VMs',
            description:
              'Decentralized alternative to Google Cloud confidential computing',
            url: '/compare/phala-vs-gcp',
          },
          {
            title: 'Phala vs Tinfoil',
            description: 'Infrastructure control vs managed confidential AI',
            url: '/compare/phala-vs-tinfoil',
          },
        ],
      },
    ],
  },
  {
    title: 'Developers',
    url: '#',
    items: [
      {
        title: 'Documentation',
        description: 'Complete guides and API references for developers',
        icon: <Book className="size-5 shrink-0" />,
        url: 'https://docs.phala.com/?utm_source=phala.network&utm_medium=site-nav',
      },
      {
        title: 'Guides',
        description: 'Step-by-step tutorials and best practices',
        icon: <GraduationCap className="size-5 shrink-0" />,
        url: '/tags/Phala Cloud Guides',
      },
      {
        title: 'Templates',
        description: 'Ready-to-use project templates and boilerplates',
        icon: <Play className="size-5 shrink-0" />,
        url: 'https://cloud.phala.network/templates',
      },
      {
        title: 'Service Status',
        description: 'Real-time monitoring of services and uptime',
        icon: <BarChart3 className="size-5 shrink-0" />,
        url: 'https://status.phala.network/',
      },
      {
        title: 'Startup Program',
        description: 'Free credits and support for your startup',
        icon: <Rocket className="size-5 shrink-0" />,
        url: '/startup-program',
      },
    ],
  },
  {
    title: 'Network',
    url: '#',
    items: [
      {
        title: 'About Phala Network',
        description: 'Learn about our mission and privacy-first technology',
        icon: <Network className="size-5 shrink-0" />,
        url: 'https://docs.phala.com/overview/phala-network?utm_source=phala.network&utm_medium=site-nav',
      },
      {
        title: 'PHA Token',
        description: 'Native token for ecosystem, staking, and governance',
        icon: <Coins className="size-5 shrink-0" />,
        url: 'https://docs.phala.com/overview/pha-token/introduction',
      },
      {
        title: 'Wallet, Stake, Bridge',
        description: 'Manage tokens, stake, and bridge across networks',
        icon: <Wallet className="size-5 shrink-0" />,
        url: 'https://app.phala.network/?utm_source=phala.network&utm_medium=site-nav',
      },
      {
        title: 'Governance',
        description: 'Participate in network decisions and proposals',
        icon: <Vote className="size-5 shrink-0" />,
        url: 'https://phala.subsquare.io/?utm_source=phala.network&utm_medium=site-nav',
      },
      {
        title: 'Explorer',
        description: 'Browse blockchain transactions and network activity',
        icon: <Search className="size-5 shrink-0" />,
        url: 'https://phala.subscan.io/',
      },
      {
        title: 'Compute Provider',
        description: 'Join as a provider and earn rewards',
        icon: <Cpu className="size-5 shrink-0" />,
        url: 'https://docs.phala.com/network/compute-providers/basic-info/introduction',
      },
    ],
  },
  {
    title: 'Pricing',
    url: '/pricing',
  },
  {
    title: 'About Us',
    url: '/about',
  },
]

const Navbar = () => {
  const { scrollY } = useScroll()
  const [hasScrolled, setHasScrolled] = useState(false)

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
        'w-screen fixed top-0 left-0 transition z-50',
        hasScrolled && 'bg-background/75 backdrop-blur-sm',
      )}
    >
      <div className="max-w-(--breakpoint-2xl) mx-auto px-4 sm:px-6">
        <section>
          {/* Desktop Menu */}
          <nav className="hidden justify-between lg:flex h-20">
            <div className="flex items-center gap-6 h-full">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2">
                {/** biome-ignore lint/performance/noImgElement: svg */}
                <img src="/home/logo.svg" className="h-10" alt="" />
              </Link>
              <div className="flex items-center">
                <NavigationMenu viewport={false}>
                  <NavigationMenuList>
                    {menu.map((item) => renderMenuItem(item))}
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
            </div>
            <div className="flex gap-2 items-center h-full">
              <Button size="lg" asChild variant="ghost">
                <Link href="/contact">Contact</Link>
              </Button>
              <Button size="lg" asChild variant="ghost">
                <a href="https://cloud.phala.network/login">Sign in</a>
              </Button>
              <Button size="lg" asChild>
                <a href="https://cloud.phala.network/register">Sign up</a>
              </Button>
            </div>
          </nav>

          {/* Mobile Menu */}
          <div className="block lg:hidden">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2 shrink-0">
                {/** biome-ignore lint/performance/noImgElement: svg */}
                <img src="/home/logo.svg" className="h-8" alt="" />
              </Link>
              <div className="flex gap-1 items-center">
                <Button asChild variant="ghost">
                  <Link href="/contact">Contact</Link>
                </Button>
                <Button asChild variant="ghost" className="max-sm:hidden">
                  <a href="https://cloud.phala.network/login">Sign in</a>
                </Button>
                <Button asChild>
                  <a href="https://cloud.phala.network/register">Sign up</a>
                </Button>

                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Menu className="size-4" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent className="overflow-y-auto">
                    <SheetHeader>
                      <SheetTitle>
                        <Link href="/" className="flex items-center gap-2">
                          {/** biome-ignore lint/performance/noImgElement: svg */}
                          <img src="/home/logo.svg" className="h-8" alt="" />
                        </Link>
                      </SheetTitle>
                    </SheetHeader>
                    <div className="flex flex-col gap-6 p-4">
                      <Accordion
                        type="single"
                        collapsible
                        className="flex w-full flex-col gap-4"
                      >
                        {menu.map((item) => renderMobileMenuItem(item))}
                      </Accordion>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger
          className="bg-transparent!"
          onClick={(e) => {
            if (
              'pointerType' in e.nativeEvent &&
              e.nativeEvent.pointerType !== 'touch'
            ) {
              e.preventDefault()
            }
          }}
        >
          {item.title}
        </NavigationMenuTrigger>
        <NavigationMenuContent className="bg-popover text-popover-foreground shadow-none!">
          <ul className="w-80">
            {item.items.map((subItem) => (
              <NavigationMenuLink key={subItem.title} asChild>
                <SubMenuLink item={subItem} />
              </NavigationMenuLink>
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    )
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        href={item.url}
        className="bg-transparent! hover:text-accent-foreground group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors"
        target={isExternalLink(item.url) ? '_blank' : undefined}
        rel={isExternalLink(item.url) ? 'noopener noreferrer' : undefined}
      >
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  )
}

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline font-sans">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <MobileSubMenuLink key={subItem.title} item={subItem} />
          ))}
        </AccordionContent>
      </AccordionItem>
    )
  }

  return (
    <Link
      key={item.title}
      href={item.url}
      className="text-md font-semibold flex items-center gap-2"
      target={isExternalLink(item.url) ? '_blank' : undefined}
      rel={isExternalLink(item.url) ? 'noopener noreferrer' : undefined}
    >
      {item.title}
      {isExternalLink(item.url) && (
        <SquareArrowOutUpRight className="size-3 text-muted-foreground" />
      )}
    </Link>
  )
}

// Helper function to check if a URL is external
const isExternalLink = (url: string): boolean => {
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return true
  }
  return false
}

const MobileSubMenuLink = ({ item }: { item: MenuItem }) => {
  const isExternal = isExternalLink(item.url)

  if (item.items) {
    return (
      <div className="space-y-2">
        <div className="flex select-none flex-row gap-4 rounded-md p-2">
          <div className="text-foreground">{item.icon}</div>
          <div className="flex-1">
            <div className="text-sm font-semibold">
              <Link href={item.url} className="hover:text-accent-foreground">
                {item.title}
              </Link>
            </div>
            {item.description && (
              <p className="text-muted-foreground text-sm leading-snug">
                {item.description}
              </p>
            )}
          </div>
        </div>
        <div className="ml-9 space-y-1">
          {item.items.map((subItem) => (
            <Link
              key={subItem.title}
              href={subItem.url}
              className="block text-sm text-muted-foreground hover:text-foreground p-2 rounded hover:bg-muted/50"
            >
              {subItem.title}
            </Link>
          ))}
        </div>
      </div>
    )
  }

  return (
    <Link
      className="hover:bg-muted hover:text-accent-foreground flex select-none flex-row gap-4 rounded-md p-2 leading-none no-underline outline-none transition-colors"
      href={item.url}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
    >
      <div className="text-foreground">{item.icon}</div>
      <div className="flex-1">
        <div className="text-sm font-semibold flex items-center gap-2">
          {item.title}
          {isExternal && (
            <SquareArrowOutUpRight className="size-3 text-muted-foreground" />
          )}
        </div>
        {item.description && (
          <p className="text-muted-foreground text-sm leading-snug">
            {item.description}
          </p>
        )}
      </div>
    </Link>
  )
}

const SubMenuLink = ({ item }: { item: MenuItem }) => {
  const isExternal = isExternalLink(item.url)

  if (item.items) {
    return (
      <div className="flex select-none flex-col rounded-md p-3 leading-none no-underline outline-none">
        <div className="flex flex-row gap-4">
          <div className="text-foreground">{item.icon}</div>
          <div className="flex-1">
            <div className="text-sm font-semibold flex items-center gap-2">
              <Link href={item.url} className="hover:text-accent-foreground">
                {item.title}
              </Link>
            </div>
            {item.description && (
              <p className="text-muted-foreground text-sm leading-snug">
                {item.description}
              </p>
            )}
          </div>
        </div>
        <div className="ml-9 mt-2 space-y-1">
          {item.items.map((subItem) => (
            <Link
              key={subItem.title}
              href={subItem.url}
              className="block text-sm text-muted-foreground hover:text-foreground p-1 rounded hover:bg-muted/50"
            >
              {subItem.title}
            </Link>
          ))}
        </div>
      </div>
    )
  }

  return (
    <Link
      className="hover:bg-muted hover:text-accent-foreground flex select-none flex-row gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors"
      href={item.url}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
    >
      <div className="text-foreground">{item.icon}</div>
      <div className="flex-1">
        <div className="text-sm font-semibold flex items-center gap-2">
          {item.title}
          {isExternal && (
            <SquareArrowOutUpRight className="size-3 text-muted-foreground" />
          )}
        </div>
        {item.description && (
          <p className="text-muted-foreground text-sm leading-snug">
            {item.description}
          </p>
        )}
      </div>
    </Link>
  )
}

export default Navbar

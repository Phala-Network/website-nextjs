'use client'

import {
  Book,
  BookOpen,
  Brain,
  Building2,
  Cloud,
  Code,
  File,
  Menu,
  Shield,
  SquareArrowOutUpRight,
  Sunset,
  Trees,
  Zap,
} from 'lucide-react'
import { useMotionValueEvent, useScroll } from 'motion/react'
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

interface Navbar1Props {
  logo?: {
    url: string
    src: string
    alt: string
    title: string
  }
  menu?: MenuItem[]
  auth?: {
    login: {
      title: string
      url: string
    }
    signup: {
      title: string
      url: string
    }
  }
}

const Navbar1 = ({
  logo = {
    url: '/',
    src: '/home/logo.svg',
    alt: 'Phala',
    title: 'Phala',
  },
  menu = [
    {
      title: 'Products',
      url: '#',
      items: [
        {
          title: 'Confidential VM',
          description: 'Trusted execution environments for secure computing',
          icon: <Shield className="size-5 shrink-0" />,
          url: '/confidential-vm',
        },
        {
          title: 'Confidential AI (Models)',
          description: 'AI models with privacy guarantees',
          icon: <Brain className="size-5 shrink-0" />,
          url: '/confidential-ai',
        },
        {
          title: 'DStack',
          description: 'Decentralized compute infrastructure',
          icon: <Cloud className="size-5 shrink-0" />,
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
          description: 'Real-world implementations and success stories',
          icon: <Building2 className="size-5 shrink-0" />,
          url: '/success-stories',
        },
        {
          title: 'Apps Built on Phala',
          description: 'Applications powered by our infrastructure',
          icon: <Code className="size-5 shrink-0" />,
          url: 'https://cloud.phala.network/explorer',
        },
        {
          title: 'Blog',
          description: 'Latest insights and updates',
          icon: <BookOpen className="size-5 shrink-0" />,
          url: '/blog',
        },
      ],
    },
    {
      title: 'Developers',
      url: '#',
      items: [
        {
          title: 'Documentation',
          description: 'Complete guides and API references',
          icon: <Book className="size-5 shrink-0" />,
          url: 'https://docs.phala.network/?utm_source=phala.network&utm_medium=site-nav',
        },
        {
          title: 'Guides',
          description: 'Step-by-step tutorials and guides',
          icon: <Zap className="size-5 shrink-0" />,
          url: '/guides',
        },
        {
          title: 'Templates',
          description: 'Ready-to-use project templates',
          icon: <Code className="size-5 shrink-0" />,
          url: 'https://cloud.phala.network/templates',
        },
        {
          title: 'Service Status',
          description: 'Check service status and uptime',
          icon: <Trees className="size-5 shrink-0" />,
          url: 'https://status.phala.network/',
        },
        {
          title: 'Startup Program',
          description: 'Get free credits for your startup',
          icon: <File className="size-5 shrink-0" />,
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
          description: 'Learn about our mission and technology',
          icon: <Building2 className="size-5 shrink-0" />,
          url: 'https://docs.phala.network/overview/phala-network?utm_source=phala.network&utm_medium=site-nav',
        },
        {
          title: 'PHA Token',
          description: 'Native token of the Phala blockchain',
          icon: <Zap className="size-5 shrink-0" />,
          url: 'https://docs.phala.network/overview/pha-token/introduction',
        },
        {
          title: 'Wallet, Stake, Bridge',
          description: 'Manage your PHA tokens and assets',
          icon: <Cloud className="size-5 shrink-0" />,
          url: 'https://app.phala.network/?utm_source=phala.network&utm_medium=site-nav',
        },
        {
          title: 'Governance',
          description: 'Participate in network decisions',
          icon: <Sunset className="size-5 shrink-0" />,
          url: 'https://phala.subsquare.io/?utm_source=phala.network&utm_medium=site-nav',
        },
        {
          title: 'Explorer',
          description: 'View blockchain transactions and data',
          icon: <BookOpen className="size-5 shrink-0" />,
          url: 'https://phala.subscan.io/',
        },
        {
          title: 'Compute Provider',
          description: 'Learn about becoming a compute provider',
          icon: <Code className="size-5 shrink-0" />,
          url: 'https://docs.phala.network/network/compute-providers/basic-info/introduction',
        },
      ],
    },
    {
      title: 'Pricing',
      url: '/pricing',
    },
  ],
  auth = {
    login: { title: 'Sign in', url: '#' },
    signup: { title: 'Contact', url: '/contact' },
  },
}: Navbar1Props) => {
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
        'w-screen fixed top-0 left-0 transition',
        hasScrolled && 'bg-background/75 backdrop-blur-sm',
      )}
    >
      <div className="container">
        <section>
          {/* Desktop Menu */}
          <nav className="hidden justify-between lg:flex h-16">
            <div className="flex items-center gap-6">
              {/* Logo */}
              <a href={logo.url} className="flex items-center gap-2">
                {/** biome-ignore lint/performance/noImgElement: svg */}
                <img src={logo.src} className="h-8" alt={logo.alt} />
              </a>
              <div className="flex items-center">
                <NavigationMenu viewport={false}>
                  <NavigationMenuList>
                    {menu.map((item) => renderMenuItem(item))}
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <Button asChild variant="outline" size="sm">
                <a href={auth.login.url}>{auth.login.title}</a>
              </Button>
              <Button asChild size="sm">
                <a href={auth.signup.url}>{auth.signup.title}</a>
              </Button>
            </div>
          </nav>

          {/* Mobile Menu */}
          <div className="block lg:hidden">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <a href={logo.url} className="flex items-center gap-2">
                {/** biome-ignore lint/performance/noImgElement: svg */}
                <img src={logo.src} className="h-8" alt={logo.alt} />
              </a>
              <div className="flex gap-2 items-center">
                <Button asChild variant="outline" size="sm">
                  <a href={auth.login.url}>{auth.login.title}</a>
                </Button>
                <Button asChild size="sm">
                  <a href={auth.signup.url}>{auth.signup.title}</a>
                </Button>
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="icon">
                      <Menu className="size-4" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent className="overflow-y-auto">
                    <SheetHeader>
                      <SheetTitle>
                        <a href={logo.url} className="flex items-center gap-2">
                          <img
                            src={logo.src}
                            className="max-h-8 dark:invert"
                            alt={logo.alt}
                          />
                        </a>
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

                      <div className="flex flex-col gap-3">
                        <Button asChild variant="outline">
                          <a href={auth.login.url}>{auth.login.title}</a>
                        </Button>
                        <Button asChild>
                          <a href={auth.signup.url}>{auth.signup.title}</a>
                        </Button>
                      </div>
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
        <NavigationMenuTrigger className="bg-transparent">
          {item.title}
        </NavigationMenuTrigger>
        <NavigationMenuContent className="bg-popover text-popover-foreground">
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
        className="hover:bg-muted hover:text-accent-foreground group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors"
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
        <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} />
          ))}
        </AccordionContent>
      </AccordionItem>
    )
  }

  return (
    <a
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
    </a>
  )
}

// Helper function to check if a URL is external
const isExternalLink = (url: string): boolean => {
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return true
  }
  return false
}

const SubMenuLink = ({ item }: { item: MenuItem }) => {
  const isExternal = isExternalLink(item.url)

  return (
    <a
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
    </a>
  )
}

export default Navbar1

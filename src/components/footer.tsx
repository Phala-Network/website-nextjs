'use client'

import type React from 'react'
import {
  FaDiscord,
  FaRss,
  FaTelegram,
  FaXTwitter,
  FaYoutube,
} from 'react-icons/fa6'

import { Logo, LogoImageDesktop, LogoImageMobile } from '@/components/logo'
import { useSubscribe } from '@/hooks/useSubscribe'

const navigation = [
  {
    title: 'Product',
    links: [
      { name: 'Models', href: '/models' },
      {
        name: 'GPU TEE Inference',
        href: 'https://cloud.phala.network/features/gpu-tee',
      },
      {
        name: 'MCP Hosting',
        href: 'https://cloud.phala.network/features/mcp-hosting',
      },
      { name: 'Eliza Builder', href: 'https://cloud.phala.network/eliza' },
    ],
  },
  {
    title: 'Developers',
    links: [
      {
        name: 'Docs',
        href: 'https://docs.phala.network/?utm_source=phala.network&utm_medium=site-nav',
      },
      {
        name: 'CLI',
        href: 'https://docs.phala.network/phala-cloud/phala-cloud-cli/overview',
      },
      // TODO: add SDK page
      // { name: 'SDK', href: '/dstack' },
      { name: 'GitHub', href: 'https://github.com/Phala-Network/' },
      {
        name: 'Community',
        href: 'https://github.com/Phala-Network/phala-cloud-community/?utm_source=phala.network&utm_medium=site-nav',
      },
      {
        name: 'Builders Program',
        href: 'https://docs.phala.network/network/references/archived-projects',
      },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Ecosystem', href: '/partnerships' },
      { name: 'Blog', href: '/blog' },
      {
        name: 'Ambassador Program',
        href: 'https://github.com/Phala-Network/growth-program',
      },
      { name: 'Changelog', href: '/changelog' },
      {
        name: 'Media Kit',
        href: 'https://drive.google.com/drive/folders/1u60uDV8CnZBBhySZMJfiMQ0XgdJXkVhq',
      },
      { name: 'Career', href: 'https://wellfound.com/company/phala-network' },
    ],
  },
  {
    title: 'Network',
    links: [
      { name: 'Phala App', href: 'https://app.phala.network/' },
      {
        name: 'Compute Provider',
        href: 'https://docs.phala.network/network/compute-providers/basic-info/introduction',
      },
      {
        name: 'Dune Statistics',
        href: 'https://dune.com/phala_network/phala-analytics?utm_source=phala.network&utm_medium=site-nav',
      },
      { name: 'Explorer', href: 'https://phala.subscan.io/' },
    ],
  },
]

const socialLinks = [
  { name: 'Twitter', icon: FaXTwitter, href: 'https://x.com/PhalaNetwork' },
  {
    name: 'Discord',
    icon: FaDiscord,
    href: 'https://discord.com/invite/phala-network',
  },
  { name: 'Telegram', icon: FaTelegram, href: 'https://t.me/phalanetwork' },
  {
    name: 'YouTube',
    icon: FaYoutube,
    href: 'https://www.youtube.com/@PhalaNetwork',
  },
  { name: 'RSS', icon: FaRss, href: '/rss.xml' },
]

const SiteFooter: React.FC = () => {
  const { onSubmit, isLoading, message, error, isSucceed, isError, dismiss } =
    useSubscribe()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const email = formData.get('email') as string
    onSubmit(email)
  }

  const handleInputChange = () => {
    if (isSucceed || isError) {
      dismiss()
    }
  }

  return (
    <section className="py-12 sm:py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-6">
        {/* Logo and newsletter section */}
        <div className="mb-10 flex flex-col items-start justify-between gap-10 border-b pb-10 sm:mb-16 sm:pb-12 lg:flex-row">
          <div className="w-full max-w-full md:max-w-2xs lg:max-w-sm">
            <Logo url="/" className="mb-6">
              <LogoImageDesktop src="/home/logo.svg" alt="Phala" />
              <LogoImageMobile src="/home/logo.svg" alt="Phala" />
            </Logo>

            <p className="mb-8 text-base text-muted-foreground">
              Build AI People Can Trust.
            </p>

            <p className="mb-2 font-medium">Subscribe to our newsletter</p>

            {/* Newsletter subscription */}
            <form onSubmit={handleSubmit} className="w-full max-w-md">
              <div className="flex w-full gap-3">
                <input
                  type="email"
                  name="email"
                  id="newsletter-email"
                  autoComplete="email"
                  placeholder="Your email"
                  disabled={isLoading}
                  onChange={handleInputChange}
                  className="flex h-10 flex-1 rounded-md border border-input bg-background px-4 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 text-sm"
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary py-2 font-medium whitespace-nowrap text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 px-4 text-sm"
                >
                  {isLoading ? 'Subscribing...' : 'Subscribe'}
                </button>
              </div>

              {/* Success message */}
              {isSucceed && (
                <div className="mt-2 text-sm text-green-600 dark:text-green-400">
                  {message}
                </div>
              )}

              {/* Error message */}
              {isError && (
                <div className="mt-2 text-sm text-red-600 dark:text-red-400">
                  {error}
                </div>
              )}
            </form>
          </div>

          {/* Navigation Section */}
          <div className="w-full border-t pt-8 lg:border-t-0 lg:pt-0">
            <nav className="grid w-full gap-x-12 gap-y-8 grid-cols-2 md:w-auto md:grid-cols-4">
              {navigation.map((section) => (
                <div key={section.title} className="min-w-[140px]">
                  <h2 className="mb-4 font-semibold">{section.title}</h2>
                  <ul className="space-y-0.5 text-sm">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="inline-block py-1 text-muted-foreground transition-colors duration-200 hover:text-foreground active:text-primary"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="order-1 mb-6 flex w-full items-center justify-center gap-6 md:justify-start md:order-2 md:mb-0 md:w-auto">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                aria-label={`Visit our ${link.name} page`}
                className="rounded-full p-3 text-muted-foreground transition-all duration-200 hover:bg-accent hover:text-foreground active:bg-accent/70"
                rel="noopener noreferrer"
                target="_blank"
              >
                <link.icon className="h-6 w-6 sm:h-5 sm:w-5" />
              </a>
            ))}
          </div>

          {/* Copyright - Below on mobile, left on desktop */}
          <p className="order-2 text-center text-sm text-muted-foreground sm:text-left md:order-1">
            © {new Date().getFullYear()} Phala. All rights reserved.{' '}
            <a
              href="https://cloud.phala.network/privacy"
              className="text-foreground underline underline-offset-4 transition-colors hover:text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy
            </a>
            {' • '}
            <a
              href="https://cloud.phala.network/terms"
              className="text-foreground underline underline-offset-4 transition-colors hover:text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default SiteFooter

'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { startTransition, useActionState, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import {
  FaDiscord,
  FaLinkedin,
  FaRss,
  FaTelegram,
  FaXTwitter,
  FaYoutube,
} from 'react-icons/fa6'

import { Logo, LogoImageDesktop, LogoImageMobile } from '@/components/logo'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { subscribe } from '@/lib/actions/subscribe'
import {
  type SubscribeFormData,
  type SubscribeState,
  subscribeSchema,
} from '@/lib/subscribe'

const navigation = [
  {
    title: 'Products',
    links: [
      { name: 'Confidential AI Models', href: '/confidential-ai-models' },
      { name: 'GPU TEE', href: '/gpu-tee' },
      { name: 'H100 GPU', href: '/gpu-tee/h100' },
      { name: 'H200 GPU', href: '/gpu-tee/h200' },
      { name: 'B200 GPU', href: '/gpu-tee/b200' },
      { name: 'Confidential VM', href: '/confidential-vm' },
      { name: 'dStack SDK', href: '/dstack' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { name: 'Private AI Data', href: '/solutions/private-ai-data' },
      { name: 'Private AI Inference', href: '/solutions/private-ai-inference' },
      { name: 'Fine-Tuned Models', href: '/solutions/fine-tuned-models' },
      { name: 'Confidential Training', href: '/solutions/confidential-training' },
      { name: 'AI Agents', href: '/solutions/ai-agents' },
    ],
  },
  {
    title: 'Use Cases',
    links: [
      { name: 'Success Stories', href: '/success-stories' },
      { name: 'Financial Services', href: '/success-stories/financial-services' },
      { name: 'Healthcare', href: '/success-stories/healthcare-research' },
      { name: 'AI SaaS', href: '/success-stories/ai-saas-platform' },
      { name: 'Decentralized AI', href: '/success-stories/decentralized-ai' },
    ],
  },
  {
    title: 'Compare',
    links: [
      { name: 'vs AWS Nitro', href: '/compare/phala-vs-aws-nitro' },
      { name: 'vs Google Cloud', href: '/compare/phala-vs-gcp' },
      { name: 'vs Tinfoil', href: '/compare/phala-vs-tinfoil' },
    ],
  },
  {
    title: 'Developers',
    links: [
      {
        name: 'Documentation',
        href: 'https://docs.phala.com/?utm_source=phala.network&utm_medium=site-nav',
      },
      {
        name: 'CLI',
        href: 'https://docs.phala.com/phala-cloud/phala-cloud-cli/overview',
      },
      { name: 'GitHub', href: 'https://github.com/Phala-Network/' },
      {
        name: 'Community',
        href: 'https://github.com/Phala-Network/phala-cloud-community/?utm_source=phala.network&utm_medium=site-nav',
      },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About', href: '/about' },
      { name: 'Partnerships', href: '/partnerships' },
      { name: 'Blog', href: '/blog' },
      { name: 'Careers', href: 'https://wellfound.com/company/phala-network' },
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
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/company/phala-network',
  },
  { name: 'RSS', icon: FaRss, href: '/rss.xml' },
]

const SiteFooter: React.FC = () => {
  const initialState: SubscribeState = { message: '', isError: false }
  const [state, formAction, isPending] = useActionState(subscribe, initialState)
  const [showMessages, setShowMessages] = useState(true)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubscribeFormData>({
    resolver: zodResolver(subscribeSchema),
  })

  useEffect(() => {
    if (state.message) {
      setShowMessages(true)
    }
  }, [state.message])

  const resetState = () => {
    setShowMessages(false)
  }

  const onSubmit = async (data: SubscribeFormData) => {
    const formData = new FormData()
    formData.append('email', data.email)
    startTransition(() => {
      formAction(formData)
    })
  }

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-muted">
      <div className="max-w-(--breakpoint-2xl) mx-auto px-4 sm:px-6">
        {/* Logo and newsletter section */}
        <div className="mb-10 flex flex-col items-start justify-between gap-10 border-b pb-10 sm:mb-16 sm:pb-12 lg:flex-row">
          <div className="w-full max-w-sm flex flex-col items-start">
            <Logo url="/" className="mb-6">
              <LogoImageDesktop src="/home/logo.svg" alt="Phala" />
              <LogoImageMobile src="/home/logo.svg" alt="Phala" />
            </Logo>

            <p className="mb-8 text-base text-muted-foreground">
              Build AI People Can Trust.
            </p>

            <p className="mb-2 font-medium">Subscribe to our newsletter</p>

            {/* Newsletter subscription */}
            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
              <div className="flex w-full gap-3">
                <Input
                  type="email"
                  autoComplete="email"
                  placeholder="Your email"
                  disabled={isPending}
                  {...register('email', {
                    onChange: resetState,
                  })}
                />
                <Button type="submit" disabled={isPending} className="w-24">
                  {isPending ? (
                    <AiOutlineLoading3Quarters className="h-4 w-4 animate-spin" />
                  ) : (
                    'Subscribe'
                  )}
                </Button>
              </div>

              {/* Validation error */}
              {errors.email && (
                <div className="mt-2 text-sm text-red-600 dark:text-red-400">
                  {errors.email.message}
                </div>
              )}

              {/* Success message */}
              {state.message && !state.isError && showMessages && (
                <div className="mt-2 text-sm text-green-600 dark:text-green-400">
                  {state.message}
                </div>
              )}

              {/* Server error message */}
              {state.message && state.isError && showMessages && (
                <div className="mt-2 text-sm text-red-600 dark:text-red-400">
                  {state.message}
                </div>
              )}
            </form>
          </div>

          {/* Navigation Section */}
          <div className="w-full border-t pt-8 lg:border-t-0 lg:pt-0">
            <nav className="grid w-full gap-x-8 lg:gap-x-12 gap-y-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
              {navigation.map((section) => (
                <div key={section.title} className="min-w-[140px]">
                  <h2 className="mb-4 font-semibold font-sans">
                    {section.title}
                  </h2>
                  <ul className="space-y-0.5 text-sm">
                    {section.links.map((link) => {
                      const isExternal = link.href.startsWith('http')
                      return (
                        <li key={link.name}>
                          {isExternal ? (
                            <a
                              href={link.href}
                              className="inline-block py-1 text-muted-foreground transition-colors duration-200 hover:text-foreground active:text-primary"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {link.name}
                            </a>
                          ) : (
                            <Link
                              href={link.href}
                              className="inline-block py-1 text-muted-foreground transition-colors duration-200 hover:text-foreground active:text-primary"
                            >
                              {link.name}
                            </Link>
                          )}
                        </li>
                      )
                    })}
                  </ul>
                </div>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="order-1 flex items-center justify-center gap-2 md:gap-4 lg:gap-6 md:justify-start sm:order-2 shrink-0">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                aria-label={`Visit our ${link.name} page`}
                className="rounded-full p-3 text-muted-foreground transition duration-200 hover:bg-accent hover:text-foreground active:bg-accent/70"
                rel="noopener noreferrer"
                target="_blank"
              >
                <link.icon className="size-6" />
              </a>
            ))}
          </div>

          {/* Copyright and Status - Below on mobile, left on desktop */}
          <div className="order-2 sm:order-1">
            <div className="h-8 w-50 flex items-center justify-center">
              <iframe
                title="Phala Status"
                className="scheme-light"
                src="https://status.phala.network/badge?theme=light"
                loading="lazy"
                width="190"
                height="30"
              />
            </div>
          </div>
        </div>

        <p
          suppressHydrationWarning
          className="mt-8 sm:mt-12 max-sm:text-center sm:pl-3 text-sm"
        >
          © {new Date().getFullYear()} Phala. All rights reserved.{' '}
          <Link
            href="/privacy"
            className="text-foreground underline underline-offset-4 transition-colors"
          >
            Privacy
          </Link>
          {' • '}
          <Link
            href="/terms"
            className="text-foreground underline underline-offset-4 transition-colors"
          >
            Terms
          </Link>
        </p>
      </div>
    </section>
  )
}

export default SiteFooter

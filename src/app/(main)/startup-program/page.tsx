'use client'
import Cal from '@calcom/embed-react'
import { getImageProps } from 'next/image'

import { getBackgroundImage } from '@/lib/image'
import { cn } from '@/lib/utils'
import {
  OpenStartupProgramDialogButton,
  StartupProgramDialog,
} from './startup-program-dialog'
import { Testimonial } from './testimonial'

export default function StartupProgramPage() {
  const {
    props: { srcSet },
  } = getImageProps({
    alt: '',
    width: 897,
    height: 863,
    src: '/home/cta-bg.png',
  })
  const backgroundImage = getBackgroundImage(srcSet)
  return (
    <div className="w-full min-h-screen">
      <div className="w-full bg-background">
        <section className="w-full max-w-6xl mx-auto -mt-16 pt-24 relative">
          <div className="absolute right-0 top-0 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] bg-primary/10 rounded-full blur-3xl" />
          <div className="container relative py-12 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Left Side: Content */}
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-6 sm:mb-8">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-xs sm:text-sm font-medium text-foreground">
                    Now Accepting Applications
                  </span>
                </div>

                <h1 className="font-bold text-3xl/tight md:text-4xl/tight mb-4 sm:mb-6 max-w-lg">
                  Phala Startup Program
                </h1>
                <h2 className="font-semibold text-xl md:text-2xl mb-6 sm:mb-8 max-w-md">
                  Build the Future of{' '}
                  <span className="text-primary">Confidential AI</span>
                </h2>

                {/* Key Benefits */}
                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-primary rounded-full flex items-center justify-center select-none pointer-events-none">
                      <span className="text-xs font-bold text-primary-foreground">
                        ✓
                      </span>
                    </div>
                    <span className="text-base sm:text-lg text-foreground font-medium">
                      Up to $1,000 in cloud credits
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-primary rounded-full flex items-center justify-center select-none pointer-events-none">
                      <span className="text-xs font-bold text-primary-foreground">
                        ✓
                      </span>
                    </div>
                    <span className="text-base sm:text-lg text-foreground font-medium">
                      Direct access to Phala engineering team
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-primary rounded-full flex items-center justify-center select-none pointer-events-none">
                      <span className="text-xs font-bold text-primary-foreground">
                        ✓
                      </span>
                    </div>
                    <span className="text-base sm:text-lg text-foreground font-medium">
                      Investor introductions & demo day
                    </span>
                  </div>
                </div>

                {/* Social Proof */}
                <div className="flex items-center gap-3 sm:gap-6 md:gap-8 text-sm text-muted-foreground mb-6 sm:mb-8">
                  <div className="flex items-center gap-1 sm:gap-2">
                    <span className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">
                      50+
                    </span>
                    <span>Startups</span>
                  </div>
                  <div className="w-px h-6 sm:h-8 bg-border hidden sm:block" />
                  <div className="flex items-center gap-1 sm:gap-2">
                    <span className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">
                      $5M+
                    </span>
                    <span>Credits</span>
                  </div>
                  <div className="w-px h-6 sm:h-8 bg-border hidden sm:block" />
                  <div className="flex items-center gap-1 sm:gap-2">
                    <span className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">
                      85%
                    </span>
                    <span>Success</span>
                  </div>
                </div>

                <p className="text-base sm:text-lg text-muted-foreground mb-6">
                  Book a 15-minute call to discuss your startup and how Phala
                  can accelerate your growth →
                </p>
              </div>

              {/* Right Side: Booking Form */}
              <div className="bg-card rounded-2xl border shadow p-6 sm:p-8">
                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-2">
                    Book Your Strategy Call
                  </h3>
                  <p className="text-muted-foreground">
                    Get a decision within 48 hours
                  </p>
                </div>
                <div className="min-h-120">
                  <Cal
                    namespace="startup-program"
                    calLink="forms/dc97b836-34d1-41e2-8ea0-457722092796"
                    config={{ theme: 'light', layout: 'month_view' }}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="w-full max-w-6xl mx-auto">
        <section className="container pt-16 pb-20">
          <div className="text-center mb-16">
            <h2 className="mb-3 text-2xl font-bold md:mb-4 sm:text-4xl lg:mb-6">
              Recent Success Stories
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Join the startups already building the future with Phala
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-muted shadow p-6 rounded-2xl flex flex-col gap-4 justify-between">
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  Apillon
                </h3>
                <p className="text-sm text-muted-foreground">
                  Web3 Development Platform
                </p>
                <Testimonial>
                  Phala's TEE infrastructure enables us to provide secure,
                  decentralized cloud services. The startup program accelerated
                  our development timeline significantly.
                </Testimonial>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold text-foreground">
                  Enterprise Ready
                </div>
                <a
                  href="https://apillon.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  apillon.io →
                </a>
              </div>
            </div>

            <div className="bg-muted shadow p-6 rounded-2xl flex flex-col gap-4 justify-between">
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  Blormmy
                </h3>
                <p className="text-sm text-muted-foreground">
                  AI-Powered Platform
                </p>
                <Testimonial>
                  The confidential computing capabilities from Phala allowed us
                  to build privacy-first AI solutions that our enterprise
                  clients demanded.
                </Testimonial>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold text-foreground">
                  Privacy-First AI
                </div>
                <a
                  href="https://blormmy.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  blormmy.com →
                </a>
              </div>
            </div>

            <div className="bg-muted shadow p-6 rounded-2xl flex flex-col gap-4 justify-between">
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  Kosher Capital
                </h3>
                <p className="text-sm text-muted-foreground">
                  Financial Technology
                </p>
                <Testimonial>
                  Phala's secure infrastructure was crucial for handling
                  sensitive financial data. The technical support helped us
                  achieve regulatory compliance faster.
                </Testimonial>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold text-foreground">
                  Compliant FinTech
                </div>
                <a
                  href="https://koshercapital.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  koshercapital.net →
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="w-full max-w-6xl mx-auto">
        <section className="container pt-20 pb-16 text-center">
          <h2 className="text-2xl font-bold mb-12 sm:text-3xl">Perfect for</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card border p-6 rounded-2xl">
              <div className="w-12 h-12 bg-muted rounded-xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🏥</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                Healthcare AI
              </h3>
              <p className="text-sm text-muted-foreground">
                Patient data, medical imaging, drug discovery
              </p>
            </div>
            <div className="bg-card border p-6 rounded-2xl">
              <div className="w-12 h-12 bg-muted rounded-xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">FinTech AI</h3>
              <p className="text-sm text-muted-foreground">
                Risk assessment, fraud detection, compliance
              </p>
            </div>
            <div className="bg-card border p-6 rounded-2xl">
              <div className="w-12 h-12 bg-muted rounded-xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                Enterprise AI
              </h3>
              <p className="text-sm text-muted-foreground">
                Private LLMs, secure analytics, data processing
              </p>
            </div>
            <div className="bg-card border p-6 rounded-2xl">
              <div className="w-12 h-12 bg-muted rounded-xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🌐</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Web3 AI</h3>
              <p className="text-sm text-muted-foreground">
                Autonomous agents, on-chain AI, DeFi
              </p>
            </div>
          </div>
          <p className="text-base sm:text-lg text-muted-foreground mt-8 max-w-2xl mx-auto">
            Early-stage startups (pre-seed to Series A) with strong technical
            teams building privacy-preserving AI solutions.
          </p>
        </section>
      </div>

      <div className="w-full max-w-6xl mx-auto">
        <section className="container pt-16 pb-20">
          <h2 className="text-2xl font-bold mb-12 sm:text-3xl text-center">
            Simple 3-Step Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className="flex flex-col gap-3 sm:gap-4">
              <div className="flex md:flex-col items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-primary rounded-xl md:rounded-2xl md:mx-auto md:mb-4 flex items-center justify-center shrink-0">
                  <span className="text-lg sm:text-xl md:text-2xl font-bold text-primary-foreground">
                    1
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground md:text-center md:mb-2">
                  Book a Call
                </h3>
              </div>
              <p className="text-muted-foreground md:text-center">
                15-minute strategy call to discuss your startup
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:gap-4">
              <div className="flex md:flex-col items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-primary rounded-xl md:rounded-2xl md:mx-auto md:mb-4 flex items-center justify-center shrink-0">
                  <span className="text-lg sm:text-xl md:text-2xl font-bold text-primary-foreground">
                    2
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground md:text-center md:mb-2">
                  Technical Review
                </h3>
              </div>
              <p className="text-muted-foreground md:text-center">
                We evaluate your use case and technical needs
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:gap-4">
              <div className="flex md:flex-col items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-primary rounded-xl md:rounded-2xl md:mx-auto md:mb-4 flex items-center justify-center shrink-0">
                  <span className="text-lg sm:text-xl md:text-2xl font-bold text-primary-foreground">
                    3
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground md:text-center md:mb-2">
                  Get Credits
                </h3>
              </div>
              <p className="text-muted-foreground md:text-center">
                Access your credits and start building
              </p>
            </div>
          </div>
          <div className="bg-primary/10 border border-primary rounded-2xl p-4 sm:p-6 text-center">
            <p className="text-base sm:text-lg font-bold text-foreground">
              ⚡ Fast Track: Decision within 48 hours
            </p>
          </div>
        </section>
      </div>

      <div className="w-full max-w-6xl mx-auto">
        <section className="container pt-20 pb-16">
          <h2 className="text-2xl font-bold mb-12 sm:text-3xl text-center">
            Quick Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-muted/50 p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Do you take equity?
              </h3>
              <p className="text-muted-foreground">
                No equity taken. This is pure support to help you succeed.
              </p>
            </div>

            <div className="bg-muted/50 p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                International startups?
              </h3>
              <p className="text-muted-foreground">
                Yes! We welcome applications from startups worldwide.
              </p>
            </div>

            <div className="bg-muted/50 p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Need TEE experience?
              </h3>
              <p className="text-muted-foreground">
                No prior experience needed. We provide full technical support.
              </p>
            </div>

            <div className="bg-muted/50 p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Selection rate?
              </h3>
              <p className="text-muted-foreground">
                ~20% acceptance rate. Quality over current traction.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="w-full max-w-6xl mx-auto">
        <section className="container pt-16 pb-24">
          <div
            className={cn(
              'overflow-hidden rounded-lg relative bg-muted shadow',
              'bg-[length:300px_auto] sm:bg-[length:400px_auto] md:bg-[length:auto_440px] bg-right-top bg-no-repeat',
              'before:absolute',
              'max-md:before:left-0 max-md:before:top-[170px] max-md:before:w-full max-md:before:h-[240px]',
              'md:before:top-0 md:before:right-[290px] md:before:h-full md:before:w-[240px]',
              'before:bg-gradient-to-t before:from-muted max-md:before:via-muted/80 before:to-transparent md:before:bg-gradient-to-r',
            )}
            style={{ backgroundImage }}
          >
            <div className="relative w-full max-md:mt-[200px]">
              <div className="w-full p-8 lg:px-16 lg:h-80 flex flex-col">
                <h3 className="mb-3 text-2xl font-bold md:mb-4 sm:text-4xl lg:mb-6">
                  Still Have Questions?
                </h3>
                <p className="mb-8 text-muted-foreground lg:text-lg">
                  Book a quick call to discuss your startup and see if we're a
                  good fit.
                </p>
                <div className="flex gap-3 items-center mt-auto">
                  <OpenStartupProgramDialogButton
                    size="lg"
                    className="cursor-pointer"
                  >
                    Book Strategy Call
                  </OpenStartupProgramDialogButton>
                </div>
                <p className="text-muted-foreground text-sm mt-4">
                  Questions?{' '}
                  <a
                    href="mailto:startups@phala.network"
                    className="underline font-semibold hover:text-foreground transition-colors"
                  >
                    startups@phala.network
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <StartupProgramDialog />
    </div>
  )
}

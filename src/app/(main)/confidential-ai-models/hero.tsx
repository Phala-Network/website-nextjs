'use client'
import Lottie from 'lottie-react'

import { Button } from '@/components/ui/button'

import chatAnimationData from './chat-animation.json'

const Hero = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.5fr] items-center">
          <div className="flex flex-col gap-6 lg:gap-10 lg:pl-8">
            <h1 className="font-display font-semibold text-foreground text-3xl leading-none sm:text-5xl md:text-6xl">
              Confidential <br className="hidden lg:block" /> AI Models
            </h1>
            <p className="font-display text-muted-foreground text-lg leading-7">
              Others claim privacy. We prove it. Access frontier AI models on
              cloud, with proof that your data is protected end-to-end.
            </p>
            <div className="flex gap-4">
              <Button
                size="lg"
                className="shrink-0 w-full lg:h-12 lg:text-base sm:w-40"
              >
                <a
                  href="https://chat.redpill.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Private Chat
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="max-sm:px-6 w-full sm:w-40 lg:h-12 lg:text-base lg:w-40"
              >
                <a
                  href="https://docs.phala.com/phala-cloud/confidential-ai/overview"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Developer Docs
                </a>
              </Button>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-full rounded-3xl overflow-hidden">
              <Lottie animationData={chatAnimationData} loop={true} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

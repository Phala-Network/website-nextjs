import Image from 'next/image'

import { Button } from '@/components/ui/button'

const Hero = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
          <div className="flex flex-col gap-6 lg:gap-10">
            <h1 className="text-5xl/tight lg:text-6xl/tight font-semibold">
              Confidential <br className="hidden lg:block" /> AI Models
            </h1>
            <p className="text-muted-foreground text-lg">
              Others claim privacy. We prove it. Access frontier AI models on
              cloud, with proof that your data is protected end-to-end.
            </p>
            <div className="flex gap-4">
              <Button size="lg" asChild>
                <a
                  href="https://redpill.ai/chat"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Private Chat
                </a>
              </Button>

              <Button variant="outline" size="lg" asChild>
                <a
                  href="https://docs.phala.network/phala-cloud/confidential-ai/overview"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Developer Docs
                </a>
              </Button>
            </div>
          </div>

          <a
            href="https://redpill.ai/chat"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              width={624}
              height={429}
              src="/confidential-ai-models/chat.png"
              className="border-border w-full rounded-lg border"
              alt="Confidential AI Models"
            />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero

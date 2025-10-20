import Image from 'next/image'
import { FaGithub, FaStar } from 'react-icons/fa'

import { Button } from '@/components/ui/button'

interface Hero24Props {
  starCount: number
}

const Hero24 = ({ starCount }: Hero24Props) => {
  return (
    <section className="py-24 max-w-6xl mx-auto">
      <div className="container">
        <div className="flex flex-col items-center text-center">
          <Image
            src="/dstack/logo.svg"
            alt="dstack Logo"
            className="mx-auto mb-7 h-16 md:h-24 md:mb-7"
            width={410}
            height={106}
          />
          <h1 className="mt-4 font-display text-4xl font-semibold leading-none text-balance lg:text-6xl lg:leading-none">
            Open-Source<br />Confidential Compute
          </h1>
          <p className="mt-8 font-display text-muted-foreground max-w-3xl mx-auto text-xl leading-7 font-medium">
            Deploy secure applications with hardware-guaranteed privacy using
            TEE technology. Built for confidential AI, private cloud compute,
            and secure data processing.
          </p>
          <div className="mt-8 flex gap-8 justify-center flex-col">
            <Button
              className="mt-4 border-black/50 border-2 shadow-primary/50 shadow-md"
              variant="outline"
              size="lg"
              asChild
            >
              <a
                href="https://github.com/Dstack-TEE/dstack"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <FaGithub className="size-5" />
                <span>Dstack-TEE/dstack</span>
                {starCount > 0 && (
                  <div className="flex items-center gap-2 ml-1 border-l border-black/40 pl-2">
                    <FaStar className="size-4 text-yellow-400" />
                    <span className="text-sm text-muted-foreground font-medium">
                      {new Intl.NumberFormat('en-US').format(starCount)}
                    </span>
                  </div>
                )}
              </a>
            </Button>
            <Button
              variant="link"
              className="text-foreground underline"
              size="lg"
              asChild
            >
              <a
                href="https://cloud.phala.network/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Don't own a TEE yet?
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Hero24 }

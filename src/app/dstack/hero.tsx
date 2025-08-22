import Image from 'next/image'
import { FaGithub, FaStar } from 'react-icons/fa'

import { Button } from '@/components/ui/button'

interface Hero24Props {
  starCount: number
}

const Hero24 = ({ starCount }: Hero24Props) => {
  return (
    <section className="py-20 max-w-6xl mx-auto">
      <div className="container">
        <div className="flex flex-col items-center text-center">
          <Image
            src="/dstack/logo.svg"
            alt="dstack Logo"
            className="mx-auto mb-5 h-16 md:mb-6"
            width={410}
            height={106}
          />
          {/* <Badge variant="outline" className="mb-3">
            Linux Foundation Project
          </Badge> */}
          <h1 className="mt-12 text-4xl font-semibold text-balance lg:text-5xl">
            Open-Source Confidential Computing
          </h1>
          <p className="mt-8 text-muted-foreground max-w-3xl mx-auto text-xl font-medium">
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

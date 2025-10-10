'use client'

import { ArrowRight } from 'lucide-react'

import { Globe } from '@/components/magicui/globe'
import { Meteors } from '@/components/magicui/meteors'
import { Button } from '@/components/ui/button'

const Hero216 = () => {
  return (
    <section className="py-32">
      <div className="container flex flex-col items-center justify-center gap-4 overflow-hidden">
        <p className="text-muted-foreground">Confidential Training</p>
        <h1 className="max-w-3xl text-center font-calSans text-6xl md:text-7xl">
          Train Large-Scale Models in TEEs
        </h1>

        <Meteors number={30} />

        <Button
          variant="secondary"
          className="group text-md mt-10 flex w-fit items-center justify-center gap-2 rounded-full px-4 py-1 tracking-tight"
          asChild
        >
          <a href="https://phala.com/contact">
            Contact Us
            <ArrowRight className="size-4 -rotate-45 transition-all ease-out group-hover:ml-3 group-hover:rotate-0" />
          </a>
        </Button>
        <div className="relative h-115 w-full overflow-y-clip">
          <Globe className="translate-y-40 scale-175" />
        </div>
      </div>
    </section>
  )
}

export { Hero216 }

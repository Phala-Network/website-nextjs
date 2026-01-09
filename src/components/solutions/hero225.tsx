'use client'

import { ArrowRight } from 'lucide-react'

import { OrbitingCircles } from '@/components/magicui/orbiting-circles'
import { Button } from '@/components/ui/button'

const Hero225 = () => {
  const circle1Images = [
    'https://api.iconify.design/simple-icons:openai.svg',
    'https://api.iconify.design/simple-icons:anthropic.svg',
  ]

  const circle2Images = [
    'https://api.iconify.design/simple-icons:meta.svg', // Meta for Llama
    'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/google-icon.svg',
  ]

  const circle3Images = [
    'https://api.iconify.design/simple-icons:huggingface.svg',
    'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/notion-icon.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  ]

  const circle4Images = [
    'https://api.iconify.design/simple-icons:openai.svg',
    'https://api.iconify.design/simple-icons:anthropic.svg',
    'https://api.iconify.design/simple-icons:meta.svg',
    'https://api.iconify.design/simple-icons:huggingface.svg',
  ]

  return (
    <section className="py-32">
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-lg text-muted-foreground">Private AI Inference</p>
          <h1 className="font-display font-semibold text-foreground text-3xl leading-none sm:text-5xl md:text-6xl max-w-5xl text-center">
            Serve LLMs without exposing prompts or weights
          </h1>
        </div>
        <div className="relative h-112 overflow-hidden">
          <div className="relative flex h-[1200px] w-full flex-col items-center justify-center overflow-hidden">
            <OrbitingCircles iconSize={40} radius={310} speed={2}>
              {circle1Images.map((src, index) => (
                <div key={index} className="size-12">
                  <img src={src} className="size-full object-contain" alt="" />
                </div>
              ))}
            </OrbitingCircles>
            <OrbitingCircles iconSize={40} radius={390} reverse speed={2}>
              {circle2Images.map((src, index) => (
                <div key={index} className="size-12">
                  <img src={src} className="size-full object-contain" alt="" />
                </div>
              ))}
            </OrbitingCircles>
            <OrbitingCircles iconSize={40} radius={470} speed={2}>
              {circle3Images.map((src, index) => (
                <div key={index} className="size-12">
                  <img src={src} className="size-full object-contain" alt="" />
                </div>
              ))}
            </OrbitingCircles>
            <OrbitingCircles iconSize={40} radius={550} reverse speed={1}>
              {circle4Images.map((src, index) => (
                <div key={index} className="size-12">
                  <img src={src} className="size-full object-contain" alt="" />
                </div>
              ))}
            </OrbitingCircles>
          </div>
          <div className="absolute bottom-0 h-24 w-full bg-gradient-to-t from-background to-transparent" />
          <Button
            variant="secondary"
            className="group text-md absolute bottom-0 left-1/2 mx-auto mt-24 flex w-fit -translate-x-1/2 items-center justify-center gap-2 rounded-full px-4 py-1 tracking-tight"
            asChild
          >
            <a href="https://cloud.phala.com" target="_blank" rel="noopener noreferrer">
              <span>Deploy on Phala</span>
              <ArrowRight className="size-4 -rotate-45 transition-all ease-out group-hover:ml-3 group-hover:rotate-0" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

export { Hero225 }

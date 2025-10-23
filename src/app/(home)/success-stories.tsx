'use client'

import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'

import { SuccessStoryCard } from '@/components/success-story-card'
import { Button } from '@/components/ui/button'
import type { CarouselApi } from '@/components/ui/carousel'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import { successStories } from '@/data/success-stories-data'

export default function SuccessStoriesSection() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>()
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    if (!carouselApi) {
      return
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev())
      setCanScrollNext(carouselApi.canScrollNext())
      setCurrentSlide(carouselApi.selectedScrollSnap())
    }
    updateSelection()
    carouselApi.on('select', updateSelection)
    return () => {
      carouselApi.off('select', updateSelection)
    }
  }, [carouselApi])

  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="mb-8 flex items-end justify-between md:mb-14 lg:mb-16">
          <div className="flex flex-col gap-4 max-xl:max-w-4xl">
            <h2 className="font-display text-3xl leading-none font-semibold md:text-4xl">
              Real-World Success Stories
            </h2>
            <p className="text-muted-foreground font-display font-medium text-lg leading-7 md:text-xl text-balance">
              Discover how leading companies are leveraging Phala's confidential
              AI to build exceptional digital experiences, while maintaining
              complete data privacy and regulatory compliance.
            </p>
          </div>
          <div className="hidden shrink-0 gap-2 md:flex xl:hidden min-w-24 md:justify-end">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollPrev()
              }}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollNext()
              }}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* XL+ Grid Layout */}
      <div className="hidden xl:block w-full">
        <div className="grid grid-cols-4 gap-5 container">
          {successStories.map((story) => (
            <SuccessStoryCard
              key={story.id}
              story={story}
            />
          ))}
        </div>
      </div>

      {/* Mobile/Tablet Carousel */}
      <div className="w-full xl:hidden">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              '(max-width: 768px)': {
                dragFree: true,
              },
            },
          }}
        >
          <CarouselContent className="ml-0 mr-4">
            {successStories.map((story) => (
              <CarouselItem key={story.id} className="max-w-[309px]">
                <SuccessStoryCard
                  story={story}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="mt-8 flex justify-center gap-2">
          {successStories.map((story, index) => (
            <button
              key={story.id}
              type="button"
              className={`h-2 w-2 rounded-full transition-colors ${
                currentSlide === index ? 'bg-primary' : 'bg-primary/20'
              }`}
              onClick={() => carouselApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

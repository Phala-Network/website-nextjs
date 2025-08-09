'use client'

import { ArrowLeft, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FaArrowRight } from 'react-icons/fa6'

import { Button } from '@/components/ui/button'
import type { CarouselApi } from '@/components/ui/carousel'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import { cn } from '@/lib/utils'

const story1 = '/next/story-1.png'
const story2 = '/next/story-2.png'
const story3 = '/next/story-3.png'
const story4 = '/next/story-4.png'

interface SuccessStory {
  id: string
  category: string
  title: string
  quote: string
  stats: string[]
  bgColor: string
  bgImage: string
  href: string
  isDark?: boolean
}

const successStories: SuccessStory[] = [
  {
    id: '1',
    category: 'Financial\nServices',
    title: 'Major Investment Bank',
    quote:
      '"Phala enabled us to process sensitive trading data with AI while maintaining complete regulatory compliance. We\'ve reduced compliance costs by 40% while improving model accuracy."',
    stats: ['• Risk Management AI', '• $2B+ Assets Under Management'],
    bgColor: 'bg-[#f3f3f3]',
    bgImage: story1,
    href: '/blog/financial-services-case-study',
  },
  {
    id: '2',
    category: 'Healthcare\nResearch',
    title: 'Research Consortium',
    quote:
      '"Multi-party collaboration on patient data without privacy compromise. Accelerated drug discovery by 60% while maintaining HIPAA compliance."',
    stats: ['• 5 Hospital Network', '• 100K+ Patient Records'],
    bgColor: 'bg-[#a7518d]',
    bgImage: story2,
    href: '/blog/healthcare-research-case-study',
    isDark: true,
  },
  {
    id: '3',
    category: 'AI SaaS\nPlatform',
    title: 'Enterprise Software Company',
    quote:
      '"Phala\'s confidential AI helped us land Fortune 500 clients who required verifiable data protection. Increased enterprise sales by 300%."',
    stats: ['• B2B AI Platform', '• 50+ Enterprise Clients'],
    bgColor: 'bg-[#5159a1]',
    bgImage: story3,
    href: '/blog/ai-saas-platform-case-study',
    isDark: true,
  },
  {
    id: '4',
    category: 'Decentralized\nAI',
    title: 'DeFi Protocol',
    quote:
      '"Built autonomous trading agents with verifiable execution. Users trust our AI because they can verify every decision on-chain."',
    stats: ['• Autonomous Agents', '• $50M+ TVL'],
    bgColor: 'bg-[#3e3e3e]',
    bgImage: story4,
    href: '/blog/defi-protocol-case-study',
  },
]

interface SuccessStoryCardProps {
  story: SuccessStory
}

const SuccessStoryCard = ({ story }: SuccessStoryCardProps) => (
  <Link
    href={story.href}
    className="block"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div
      className={cn(
        story.bgColor,
        story.isDark && 'dark',
        'text-foreground relative overflow-hidden rounded-xl aspect-400/560 bg-cover bg-muted bg-left-bottom p-6 flex flex-col',
      )}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url('${story.bgImage}')`,
      }}
    >
      {/* Category */}
      <div className="flex items-start mb-auto">
        <div className="font-semibold text-xl md:text-2xl whitespace-pre-line flex-1">
          {story.category}
        </div>
        <div className="bg-white/80 rounded-full p-3 flex items-center justify-center shrink-0">
          <FaArrowRight className="w-4 h-4 text-black" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col gap-4 mb-6">
        <div className="font-medium">{story.title}</div>
        <div className="text-sm line-clamp-3">{story.quote}</div>
      </div>

      {/* Stats */}
      <div className="flex flex-col gap-1 mb-4">
        {story.stats.map((stat, index) => (
          <div
            key={`${story.id}-stat-${index}`}
            className="text-sm text-muted-foreground"
          >
            {stat}
          </div>
        ))}
      </div>
    </div>
  </Link>
)

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
    <section className="py-24 w-full max-w-(--breakpoint-xl) mx-auto">
      <div className="container">
        <div className="mb-8 flex items-end justify-between md:mb-14 lg:mb-16">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-bold md:text-4xl">
              Real-World Success Stories
            </h2>
            <p className="text-muted-foreground font-medium text-lg xl:max-w-3xl">
              Discover how leading companies are leveraging Phala's confidential
              AI to build exceptional digital experiences while maintaining
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
            <SuccessStoryCard key={story.id} story={story} />
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
                <SuccessStoryCard story={story} />
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

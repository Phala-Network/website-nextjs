'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

import { Particles } from '@/components/magicui/particles'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface Hero219Props {
  eyebrow?: string
  headline: string
  subheadline?: string
  primaryCTA?: { text: string; url: string }
  secondaryCTA?: { text: string; url: string }
  features?: string[]
  partnerLogos?: string[][] // Array of logo columns for marquee
}

const Hero219 = ({
  eyebrow,
  headline,
  subheadline,
  primaryCTA,
  secondaryCTA,
  features,
  partnerLogos,
}: Hero219Props) => {
  // Split headline into parts for animation - animate the last 2-3 words
  const words = headline.split(' ')
  const staticPart = words.slice(0, -2).join(' ')
  const animatedWords = words.slice(-2)

  // Default partner logos if none provided
  const defaultLogos = [
    [
      'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/nextjs-icon.svg',
    ],
    [
      'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/react-icon.svg',
      'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/vue-icon.svg',
    ],
    [
      'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/typescript-icon.svg',
      'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/tailwind-icon.svg',
      'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/astro-icon.svg',
    ],
    [
      'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/remix-icon.svg',
      'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/vite-icon.svg',
    ],
    [
      'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/github-icon.svg',
      'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/laravel-icon.svg',
      'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/gatsby-icon.svg',
    ],
    [
      'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/vite-icon.svg',
      'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/sketch-icon.svg',
    ],
    [
      'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/notion-icon.svg',
    ],
  ]

  const logos = partnerLogos || defaultLogos
  const showLogos = logos && logos.length > 0

  return (
    <section className="relative py-32">
      <div className="container flex flex-col items-center justify-center gap-4 overflow-hidden">
        {eyebrow && <p className="text-muted-foreground z-20">{eyebrow}</p>}
        <h1 className="realtive z-15 max-w-3xl text-center text-6xl font-medium tracking-tighter md:text-7xl">
          {staticPart}{' '}
          <span
            className="overflow-hidden"
            style={{
              transformStyle: 'preserve-3d',
              perspective: '600px',
            }}
          >
            {animatedWords.map((word, i) => (
              <motion.span
                className="relative inline-block px-[6px] leading-[none]"
                key={i}
                initial={{
                  opacity: 0,
                  y: '70%',
                  rotateX: '-28deg',
                }}
                animate={{
                  opacity: 1,
                  y: '0%',
                  rotateX: '0deg',
                }}
                transition={{
                  delay: i * 0.08 + 0.1,
                  duration: 0.8,
                  ease: [0.215, 0.61, 0.355, 1],
                }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </h1>
        {subheadline && (
          <p className="max-w-2xl text-center text-lg text-muted-foreground z-20">
            {subheadline}
          </p>
        )}
        {(primaryCTA || secondaryCTA) && (
          <div className="mt-6 flex gap-4 z-20">
            {primaryCTA && (
              <Button asChild size="lg">
                <a href={primaryCTA.url}>{primaryCTA.text}</a>
              </Button>
            )}
            {secondaryCTA && (
              <Button asChild variant="outline" size="lg">
                <a href={secondaryCTA.url}>{secondaryCTA.text}</a>
              </Button>
            )}
          </div>
        )}
        {features && features.length > 0 && (
          <div className="mt-6 flex gap-6 text-sm text-muted-foreground z-20">
            {features.map((feature, i) => (
              <div key={i} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                {feature}
              </div>
            ))}
          </div>
        )}

        <Particles
          className="absolute inset-0 z-0"
          quantity={500}
          ease={80}
          color="#000000"
          refresh
        />

        {/* Partner Logos Marquee */}
        {showLogos && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 1 }}
            className="relative z-20 mt-10 flex items-center justify-center gap-4"
          >
            {logos.map((columnLogos, colIndex) => (
              <SkiperUiMarquee
                key={colIndex}
                showCard={columnLogos.length}
                reverse={colIndex % 2 === 0}
                className=""
                src={columnLogos}
              />
            ))}
          </motion.div>
        )}

        <div className="h-92 bg-background absolute bottom-20 left-0 right-0 w-full blur-xl" />
      </div>
    </section>
  )
}

export { Hero219 }

// Marquee component
function Marquee({
  className,
  reverse,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: any) {
  return (
    <div
      {...props}
      className={cn(
        'group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)]',
        {
          'flex-row': !vertical,
          'flex-col': vertical,
        },
        className,
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn(
              'flex shrink-0 justify-around ![animation-duration:12s] [animation-play-state:running] [gap:var(--gap)] group-hover:[animation-play-state:paused]',
              {
                'animate-marquee flex-row': !vertical,
                'animate-marquee-vertical flex-col': vertical,
                '[animation-direction:reverse]': reverse,
              },
            )}
          >
            {children}
          </div>
        ))}
    </div>
  )
}

interface SkiperUiMarqueeProps {
  showCard: number
  reverse?: boolean
  className?: string
  src: string[]
}

export function SkiperUiMarquee({
  showCard,
  reverse = false,
  className,
  src,
}: SkiperUiMarqueeProps) {
  return (
    <div
      className={cn('relative overflow-hidden', className)}
      style={{
        height: showCard * 113,
      }}
    >
      <Marquee reverse={reverse} vertical={true}>
        {src.map((item, idx) => (
          <Card key={idx} src={item} />
        ))}
      </Marquee>
      <div className="from-background absolute top-0 z-10 h-8 w-full bg-gradient-to-b to-transparent" />
      <div className="from-background absolute bottom-0 z-10 h-8 w-full bg-gradient-to-t to-transparent" />
    </div>
  )
}

function Card({ src }: { src?: string }) {
  return (
    <div
      className={cn(
        'border-muted relative flex size-24 items-center justify-center overflow-hidden rounded-3xl border p-4',
        'from-muted/50 to-background bg-gradient-to-b',
        'dark:bg-transparent dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]',
      )}
    >
      <img
        src={
          src ||
          'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/notion-icon.svg'
        }
        alt="Partner logo"
        className="size-8 object-contain"
      />
    </div>
  )
}

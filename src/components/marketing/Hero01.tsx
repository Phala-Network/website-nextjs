import { useMemo } from 'react'

import { cn } from '@/lib/utils'
import type { GenericComponent } from '../../types/components'

export interface HeroSectionProps extends GenericComponent {
  label?: string
  heroImage?: string
  title: string
  subTitle: string
  theme?: 'light' | 'dark'
  headingClass?: string
}

interface Colors {
  heading: string
  subTitle: string
}

const DEFAULT_HERO_IMAGE = '/illustrations/hero-bg-default.jpg'

export function HeroSection({
  label,
  heroImage,
  title,
  subTitle,
  className,
  children,
  theme,
  headingClass,
}: HeroSectionProps) {
  const colors: Colors = useMemo(() => {
    if (theme === 'dark') {
      return {
        heading: 'text-white',
        subTitle: 'text-white',
      }
    }
    return {
      heading: 'text-black-800',
      subTitle: 'text-black-600',
    }
  }, [theme])
  return (
    <section className={cn('grid grid-cols-1', className)}>
      <div
        className={cn(
          'row-start-1 col-span-full',
          'relative px-6 pt-14 lg:px-8 z-10',
        )}
      >
        <div
          className={cn(
            'mx-auto max-w-4xl',
            'pt-24 pb-32 sm:pt-32 sm:pb-48 lg:pb-56 lg:pt-44',
            headingClass,
          )}
        >
          <div className="text-center flex flex-col gap-4">
            {label ? (
              <div className="mb-4">
                <span
                  className={cn(
                    'rounded-full border border-phalaPurple-500 px-3 py-2',
                    'uppercase text-xs font-medium text-phalaPurple-500',
                  )}
                >
                  {label}
                </span>
              </div>
            ) : null}
            <h1
              className={cn(
                'text-[32px] lg:text-[48px] font-black',
                colors.heading,
              )}
            >
              {title}
            </h1>
            <p className={cn('text-[16px] leading-8', colors.subTitle)}>
              {subTitle}
            </p>
          </div>
          <div className="mt-10 flex flex-col lg:flex-row items-center justify-center gap-6">
            {children}
          </div>
        </div>
      </div>

      {/* backdrop background image. */}
      <div
        className={cn(
          'row-start-1 col-span-full',
          'p-0 xl:p-10 3xl:p-0',
          'untanglable',
        )}
      >
        <div
          className={cn(
            'relative overflow-hidden rounded w-full invisible xl:visible',
          )}
          style={{ maxHeight: 'calc(100cqh - 5rem)', aspectRatio: '16/9' }}
        >
          <img
            src={heroImage || DEFAULT_HERO_IMAGE}
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full z-[-1] untanglable overflow-hidden visible xl:invisible">
        <img
          className="object-cover h-full min-w-full"
          src={heroImage || DEFAULT_HERO_IMAGE}
          alt=""
        />
      </div>
    </section>
  )
}

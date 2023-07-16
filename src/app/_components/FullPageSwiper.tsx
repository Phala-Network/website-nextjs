'use client';

import React, { useState, useEffect, useMemo, type ReactNode } from 'react'
import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react'
import { FreeMode, Mousewheel } from 'swiper/modules'
import { useAtom, useAtomValue, useSetAtom } from 'jotai'
import { useScroll, useMotionValueEvent } from 'framer-motion'

import { cn } from '@/lib/utils'
import { navVisibleAtom } from '@/components/SiteNav'
import { featuresAtom, activeFeatureAtom, showFixedFeaturePageAtom } from './FeaturePage'

type TypeSwiperClass = SwiperClass & {
  slidesGrid?: number[]
}

export function FullPageSwiper({ children }: { children: ReactNode  }) {
  const [freeMode, setFreeMode] = useState(false)
  const [swiper, setSwiper] = useState<TypeSwiperClass>()
  const [swiperEnabled, setSwiperEnabled] = useState(true)
  const [currentFeature, setCurrentFeature] = useAtom(activeFeatureAtom)
  const [showFixedFeaturePage, setShowFixedFeaturePage] = useAtom(showFixedFeaturePageAtom)
  const features = useAtomValue(featuresAtom)
  const freeModeIndex = useMemo(() => features.length + 2, [features])
  const setNavVisible = useSetAtom(navVisibleAtom)

  const updateSwiperEnabled = (swiper: TypeSwiperClass) => {
    if (swiper.width < 1280) {
      swiper.disable()
      setSwiperEnabled(false)
    } else {
      swiper.enable()
      setSwiperEnabled(true)
    }
  }

  const { scrollY } = useScroll()
  const [lastScrollY, setLastScrollY] = useState(0)
  useMotionValueEvent(scrollY, 'change', (latest: number) => {
    if (swiperEnabled) {
      return
    }
    if (latest > 0 && latest > lastScrollY && latest - lastScrollY > 10) {
      setNavVisible(false)
    } else if (latest < lastScrollY && lastScrollY - latest > 10) {
      setNavVisible(true)
    }
    setLastScrollY(latest)
  })

  useEffect(() => {
    if (freeModeIndex !== undefined && !freeMode && swiper && swiper.activeIndex === freeModeIndex) {
      swiper.slideTo(freeModeIndex - 1)
    }
  }, [freeMode, swiper])

  useEffect(() => {
    if (swiper && swiper.activeIndex > 0 && swiper.activeIndex !== currentFeature + 1) {
      swiper.slideTo(currentFeature + 1)
    }
  }, [currentFeature, swiper])

  return (
    <Swiper
      className={cn(
        "w-full",
        swiperEnabled ? 'h-full' : 'h-auto touch-auto'
      )}
      mousewheel
      speed={500}
      direction="vertical"
      slidesPerView="auto"
      onSwiper={(swiper: TypeSwiperClass) => {
        setSwiper(swiper)
        updateSwiperEnabled(swiper)
      }}
      freeMode={{
        enabled: freeMode,
      }}
      modules={[FreeMode, Mousewheel]}
      onSlideChangeTransitionEnd={(swiper: TypeSwiperClass) => {
        setShowFixedFeaturePage(false)
        if (swiper.activeIndex < freeModeIndex) {
          setCurrentFeature(swiper.activeIndex - 1)
        } else if (swiper.activeIndex === freeModeIndex) {
          setFreeMode(true)
        }
      }}
      onSlideChangeTransitionStart={(swiper: TypeSwiperClass) => {
        if (swiper.previousIndex === 0 && swiper.activeIndex === 1) {
          return
        }
        if (swiper.previousIndex === freeModeIndex && swiper.activeIndex === freeModeIndex - 1) {
          return
        }
        if (swiper.activeIndex >= 1 && swiper.activeIndex < freeModeIndex && !showFixedFeaturePage) {
          setShowFixedFeaturePage(true)
        }
      }}
      onSetTranslate={(swiper: TypeSwiperClass) => {
        if (swiper.translate > -swiper.slidesGrid![freeModeIndex] && freeMode) {
          setFreeMode(false)
        }
      }}
      onResize={updateSwiperEnabled}
    >
      {React.Children.map(children, (child: ReactNode) => (
        <SwiperSlide className="min-h-screen h-auto">{child}</SwiperSlide>
      ))}
    </Swiper>
  )
}

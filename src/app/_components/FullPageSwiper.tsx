'use client';

import React, { useState, useEffect, type ReactNode } from 'react'
import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react'
import { FreeMode, Scrollbar, Mousewheel } from 'swiper/modules'
import { useAtom, useAtomValue } from 'jotai'

import { featuresAtom, activeFeatureAtom, showFixedFeaturePageAtom } from './FeaturePage'

type TypeSwiperClass = SwiperClass & {
  slidesGrid?: number[]
}

export function FullPageSwiper({ children }: { children: ReactNode  }) {
  const [freeMode, setFreeMode] = useState(false)
  const [freeModeIndex, setFreeModeIndex] = useState(1)
  const [swiper, setSwiper] = useState<TypeSwiperClass>()
  const [currentFeature, setCurrentFeature] = useAtom(activeFeatureAtom)
  const [showFixedFeaturePage, setShowFixedFeaturePage] = useAtom(showFixedFeaturePageAtom)
  const features = useAtomValue(featuresAtom)

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
      scrollbar={{
        enabled: freeMode,
      }}
      mousewheel
      className="w-full h-full"
      speed={500}
      direction="vertical"
      slidesPerView="auto"
      onSwiper={(swiper: TypeSwiperClass) => {
        setSwiper(swiper)
        setFreeModeIndex(swiper.width < 1280 ? 1 : features.length + 2)
      }}
      freeMode={{
        enabled: freeMode,
      }}
      modules={[FreeMode, Scrollbar, Mousewheel]}
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
      onSetTranslate={(swiper: TypeSwiperClass, translate) => {
        if (translate > -swiper.slidesGrid![freeModeIndex] && freeMode) {
          setFreeMode(false)
        }
      }}
      onResize={(swiper: TypeSwiperClass) => {
        const newIndex = swiper.width < 1280 ? 1 : features.length + 2
        setFreeModeIndex(newIndex)
        setFreeMode(swiper.activeIndex >= newIndex)
      }}
    >
      {React.Children.map(children, (child: ReactNode) => (
        <SwiperSlide className="h-auto">{child}</SwiperSlide>
      ))}
    </Swiper>
  )
}

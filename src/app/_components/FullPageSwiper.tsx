'use client';

import React, { useState, useEffect, type ReactNode } from 'react'
import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react'
import { FreeMode, Scrollbar, Mousewheel } from 'swiper/modules'
import { useSetAtom, useAtom } from 'jotai'

import { activeFeatureAtom, showFixedFeaturePageAtom } from './FeaturePage'

type TypeSwiperClass = SwiperClass & {
  slidesGrid?: number[]
}

export function FullPageSwiper({ freeModeIndex, children }: { freeModeIndex: number, children: ReactNode  }) {
  const [freeMode, setFreeMode] = useState(false)
  const [swiper, setSwiper] = useState<TypeSwiperClass>()
  const [currentFeature, setCurrentFeature] = useAtom(activeFeatureAtom)
  const setShowFixedFeaturePage = useSetAtom(showFixedFeaturePageAtom)

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
      onSwiper={setSwiper}
      freeMode={{
        enabled: freeMode,
      }}
      modules={[FreeMode, Scrollbar, Mousewheel]}
      onSlideChangeTransitionEnd={(swiper: TypeSwiperClass) => {
        if (swiper.activeIndex < freeModeIndex) {
          setCurrentFeature(swiper.activeIndex - 1)
      }
      }}
      onSetTranslate={(swiper: TypeSwiperClass, translate) => {
        if (freeModeIndex !== undefined && translate > -swiper.slidesGrid![freeModeIndex] && freeMode) {
          setFreeMode(false)
        }
      }}
      onBeforeTransitionStart={(swiper: TypeSwiperClass) => {
        if (swiper.previousIndex === 0 && swiper.activeIndex === 1) {
          return
        }
        if (swiper.previousIndex === freeModeIndex && swiper.activeIndex === freeModeIndex - 1) {
          return
        }
        if (swiper.activeIndex >= 1 && swiper.activeIndex < freeModeIndex) {
          setShowFixedFeaturePage(true)
        }
      }}
      onTransitionEnd={(swiper) => {
        if (freeModeIndex !== undefined && freeModeIndex === swiper.activeIndex) {
          setFreeMode(true)
        }
        setShowFixedFeaturePage(false)
      }}
    >
      {React.Children.map(children, (child: ReactNode) => (
        <SwiperSlide className="h-auto">{child}</SwiperSlide>
      ))}
    </Swiper>
  )
}

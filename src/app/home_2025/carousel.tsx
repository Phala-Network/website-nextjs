'use client'

import React, { useState, ReactNode, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const renderImage = (slide: React.ReactElement) => {
  return React.cloneElement(slide, { renderMode: 'image' });
};

const renderContent = (slide: React.ReactElement) => {
  return React.cloneElement(slide, { renderMode: 'content' });
};

interface CarouselProps {
  children: ReactNode;
}

export function Carousel({ children }: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = useMemo(() => React.Children.toArray(children), [children]);

  const handleSlideChange = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  return (
    <div className="grid grid-cols-2 gap-10">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="relative rounded-[2rem] rounded-bl-[5.75rem] overflow-hidden"
        >
          {renderImage(slides[currentSlide] as React.ReactElement)}
        </motion.div>
      </AnimatePresence>

      <div className="flex flex-col justify-between">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {renderContent(slides[currentSlide] as React.ReactElement)}
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center space-x-3 mt-8">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`h-6 rounded-full ${
                currentSlide === index ? 'w-20 bg-phalaGreen border border-phalaGreen-600/30' : 'w-6 bg-gray-100/40 border border-black-100'
              }`}
              layout
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 500,
                damping: 30
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

interface SlideProps {
  title: string;
  image: string;
  children: ReactNode;
  renderMode?: 'image' | 'content';
}

export function CarouselSlide({ title, image, children, renderMode }: SlideProps) {
  if (renderMode === 'image') {
    return (
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />
    );
  }

  if (renderMode === 'content') {
    return (
      <div className="space-y-2">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        {children}
      </div>
    );
  }

  return null;
}
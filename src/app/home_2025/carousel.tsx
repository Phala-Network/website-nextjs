'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Slide {
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

const slides: Slide[] = [
  {
    title: "TEE/acc (Get TEE-Pilled)",
    subtitle: "Affordable & Accessible",
    description: "Developers can easily upgrade Web2 applications to Web3 standards. By leveraging TEE as a hybrid infrastructure, developers choose the proof type that fits their use case, optimizing cost and efficiency.",
    image: "/home/main-landing-2025/img-feature-1.png"
  },
  {
    title: "Slide 2",
    subtitle: "Subtitle 2",
    description: "Description for slide 2",
    image: "/home/main-landing-2025/img-feature-1.png"
  },
  {
    title: "Slide 3",
    subtitle: "Subtitle 3",
    description: "Description for slide 3",
    image: "/home/main-landing-2025/img-feature-1.png"
  }
];

export function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideVariants = {
    enter: { opacity: 0, x: 100 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 }
  };

  return (
    <div className="grid grid-cols-2 gap-10">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl overflow-hidden"
        >
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="flex flex-col justify-between space-y-6 py-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">{slides[currentSlide].title}</h2>
            <h3 className="text-xl font-semibold mb-4">{slides[currentSlide].subtitle}</h3>
            <p className="text-gray-600">{slides[currentSlide].description}</p>
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center space-x-3 mt-8">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentSlide(index)}
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
};
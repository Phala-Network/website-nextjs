'use client'

import React, { useEffect, useRef, useState, ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiArrowLeft } from 'react-icons/fi'

interface SolutionCardProps {
  title: string;
  image: string;
  children: ReactNode;
}

export function SolutionCard({ title, image, children }: SolutionCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col gap-6 mb-16"
    >
      <div className="rounded-[2rem] rounded-bl-[5.75rem] rounded-tr-[5.75rem] overflow-hidden">
        <img src={image} alt={title} className="w-full h-64 object-cover" />
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        {children}
      </div>
    </motion.div>
  );
}

interface SolutionsProps {
  children: ReactNode;
}

export function Solutions({ children }: SolutionsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const slides = React.Children.toArray(children);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !stickyRef.current) return;

      const containerTop = containerRef.current.getBoundingClientRect().top;
      const containerBottom = containerRef.current.getBoundingClientRect().bottom;
      const stickyHeight = stickyRef.current.offsetHeight;

      setIsSticky(
        containerTop <= 0 && 
        containerBottom >= (stickyHeight + 32)
      );

      const cards = containerRef.current.querySelectorAll('.solution-card');
      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          setActiveIndex(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="grid grid-cols-2">
      <div>
        <div 
          ref={stickyRef}
          className={`transition-all duration-200 ${
            isSticky ? "sticky top-8" : ""
          }`}
        >
          <h1 className="text-4xl font-bold mb-4">The Solution</h1>
          <div className="flex gap-2 ml-1">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`w-5 h-5 rounded-full transition-colors duration-300 ${
                  index === activeIndex ? "bg-black" : "bg-gray-200"
                }`}
              />
            ))}
          </div>
          <button className="flex items-center gap-2 mb-8 text-gray-600 hover:text-gray-900 mt-16">
            <span className="text-18 p-1.5 rounded-full bg-black text-white"><FiArrowLeft /></span>
            <span className="text-18 font-medium">Phala Docs</span>
          </button>
        </div>
      </div>
      <div>
        {slides.map((slide, index) => (
          <div key={index} className="solution-card">
            {slide}
          </div>
        ))}
      </div>
    </div>
  );
}
'use client'

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiArrowLeft } from 'react-icons/fi'

interface SolutionCardProps {
  title: string;
  description: string[];
  image: string;
  buttons: { text: string; primary?: boolean }[];
}

const SolutionCard: React.FC<SolutionCardProps> = ({ title, description, image, buttons }) => {
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
      <div className="rounded-3xl overflow-hidden">
        <img src={image} alt={title} className="w-full h-64 object-cover" />
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <ul className="space-y-2.5 list-disc list-inside">
          {description.map((desc, index) => (
            <li key={index}>
              {desc}
            </li>
          ))}
        </ul>
        <div className="flex gap-4 mt-6">
          {buttons.map((button, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                button.primary
                  ? 'btn btn-blk min-w-36'
                  : 'btn btn-text text-gray-700'
              }`}
            >
              {button.text}
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const solutions = [
  {
    title: "Build in Minutes, Not Months",
    description: [
      "Write code, dockerize, and deploy as TEE applications.",
      "Rely on built-in security best practices.",
      "Fully open source—no vendor lock-in.",
    ],
    image: "/home/main-landing-2025/img-solution-1.png",
    buttons: [
      { text: "Dstack", primary: true },
      { text: "Open Surce TEE SDK" },
    ],
  },
  {
    title: "Deploy and Operate with Confidence",
    description: [
      "We deal with the pain of hardware maintenance. So you don't have to.",
      "Get access to CPU and GPU TEEs in one click. Intel TDX, AMD SEV, and nVIDIA H100/H200 available.",
      "With 5 years experience, we know how to deliver the best security.",
    ],
    image: "/home/main-landing-2025/img-solution-2.png",
    buttons: [
      { text: "Phala Cloud", primary: true },
      { text: "A Secure, AI-Ready Platform" },
    ],
  },
  {
    title: "Easily Verify and Prove",
    description: [
      "On-chain attestation and audit trails for off-chain computations.",
      "RA Explorer and Phala L2 Explorer tools simplify trustless verification.",
    ],
    image: "/home/main-landing-2025/img-solution-3.png",
    buttons: [{ text: "TEE as a Service", primary: true }],
  },
];


export function Solutions() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

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
            {solutions.map((_, index) => (
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
        {solutions.map((solution, index) => (
          <div key={index} className="solution-card">
            <SolutionCard {...solution} />
          </div>
        ))}
      </div>
    </div>
  );
};
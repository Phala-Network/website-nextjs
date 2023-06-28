'use client';

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { cn } from '@/lib/utils'

const words = [
  ['Capability', '#8544F6', '9ch'],
  ['Performance', '#F64DDB', '11.9ch'],
  ['HTTP', '#FF3975', '3.8ch'],
  ['Automation', '#FF9533', '10.5ch'],
  ['Compute', '#75D100', '7.5ch'],
  ['Potential', '#1D77FF', '8.5ch'],
  ['Interoperability', '#00D3A1', '14.7ch'],
]

export function Advantages() {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) => index < words.length - 1 ? index + 1 : 0)
    }, 2000)
    return () => clearInterval(interval)
  }, [setIndex])
  return (
    <AnimatePresence mode="sync">
      <span className={cn("advantages", "ml-[0.5ch] relative h-8")} style={{ width: words[index][2] }}>
        {words.map(([word, color], i) => (
          <motion.span
            className={cn("absolute left-0")}
            key={word}
            initial={{ opacity: 0, y: -20, textShadow: 'rgba(255, 255, 255, 0)' }}
            animate={{ opacity: i === index ? 1 : 0, y: i === index ? 0 : 20, color }}
            exit={{ opacity: 0, y: -20, color: 'rgba(255, 255, 255, 0)' }}
          >
            {word}
          </motion.span>
        ))}
      <span className="absolute top-0" style={{ right: `-1ch` }}>.</span>
      </span>
    </AnimatePresence>
  )
}

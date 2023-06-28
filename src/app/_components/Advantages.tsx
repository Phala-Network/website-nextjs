'use client';

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { cn } from '@/lib/utils'

const words = [
  ['Capability', '#8544F6'],
  ['Performance', '#ED67D7'],
  ['HTTP', '#F24E7F'],
  ['Automation', '#FFA14A'],
  ['Compute', '#86F000'],
  ['Potential', '#448BF6'],
  ['Interoperability', '#00E9B1'],
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
      <span className={cn("advantages", "ml-[0.5ch] relative h-8 font-mono")} style={{ width: words[index][0].length + 'ch' }}>
        {words.map(([word, color], i) => (
          <motion.span
            className={cn("absolute left-0")}
            key={word}
            style={{
              textShadow: `10px 0px 3px ${color}, 16px 3px 9px ${color}, 2px 0px 6px ${color}, -12px 0px 12px ${color}`,
            }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: i === index ? 1 : 0, y: i === index ? 0.5 : 20 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {word}
          </motion.span>
        ))}
      <span className="absolute top-0" style={{ right: `-1ch` }}>.</span>
      </span>
    </AnimatePresence>
  )
}

'use client';

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { wrap } from 'popmotion'
import Image from 'next/image'
import { GrPrevious, GrNext } from 'react-icons/gr'
import { RxDot, RxDotFilled } from 'react-icons/rx'

import { cn } from '@/lib/utils'

const images = [
  '/home/how-it-works-01.jpg',
  '/home/how-it-works-02.jpg',
  '/home/how-it-works-03.jpg',
]

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity
}

export const HowItWorksCarousel = () => {
  const [[page, direction], setPage] = useState([0, 0])

  const imageIndex = wrap(0, images.length, page)

  const paginate = (newDirection: number) => {
    const next = page + newDirection
    if (next < 0) {
      setPage([images.length - 1, newDirection])
    } else if (next >= images.length) {
      setPage([0, newDirection])
    } else {
      setPage([next, newDirection])
    }
  }

  return (
    <div className={cn("flex flex-row rounded-3xl aspect-[1360/760] bg-gray-200 w-full overflow-hidden relative")}>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          className={cn("aspect-[1360/760] bg-gray-200 w-full absolute")}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        >
          <Image
            src={images[imageIndex]}
            fill
            alt=""
          />
        </motion.div>
      </AnimatePresence>
      <button
        className={cn(
          "absolute top-[50%] right-8 bg-white text-brand z-10 btn-animated opacity-40 hover:bg-whiteAlpha-700 hover:opacity-100",
          "w-10 h-10 rounded-full flex justify-center items-center -mt-10"
        )}
        onClick={() => paginate(1)}
      >
        <GrNext className={cn("h-4 w-4")} />
      </button>
      <button
        className={cn(
          "absolute top-[50%] left-8 bg-white text-brand z-10 btn-animated opacity-40 hover:bg-whiteAlpha-700 hover:opacity-100",
          "w-10 h-10 rounded-full flex justify-center items-center -mt-10"
        )}
        onClick={() => paginate(-1)}
      >
        <GrPrevious className={cn("h-4 w-4")} />
      </button>
      <div className={cn(
        "absolute bottom-0 w-full flex flex-row justify-center items-center space-x-2 pb-4 z-10"
      )}>
        {images.map((_, i) => (
          <button
            key={i}
            className={cn(
              "w-10 h-10 rounded-full flex justify-center items-center transition-all",
              "hover:bg-whiteAlpha-700"
            )}
            onClick={() => setPage(p => [i, p[0] < i ? 1 : -1])}
          >
            {i === page ? (
              <RxDotFilled className={cn("h-10 w-10 text-secondary")} />
            ) : (
              <RxDot className={cn("h-10 w-10 text-secondary")} />
            )}
          </button>
        ))}
      </div>
    </div>
  )
}

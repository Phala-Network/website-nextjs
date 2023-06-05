'use client';

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { wrap } from 'popmotion'
import { GrPrevious, GrNext } from 'react-icons/gr'

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
    <div className="rounded-3xl overflow-hidden">
      <div className={cn("flex flex-row aspect-[1360/760] bg-gray-200 w-full relative")}>
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
            <img
              src={images[imageIndex]}
              className="w-full h-full"
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
      </div>
      <div className={("bg-blackAlpha-800 px-20 py-10")}>
        <h3 className="text-3xl text-white uppercase mb-5">
          {page === 0 ? (<span>Correctness</span>) : null}
          {page === 1 ? (<span>Replicated</span>) : null}
          {page === 2 ? (<span>Confidentiality</span>) : null}
        </h3>
        <div className="text-whiteAlpha-700 min-h-[7ch]">
          {page === 0 ? (
            <p>Phat Contracts are deployed to the blockchain and assigned to the off-chain workers, running inside Secure Enclaves. Anyone can check the signed transactions and Secure Enclave remote attestation to verify that the executed code is the one published on the blockchain.</p>
          ) : null}
          {page === 1 ? (
            <p>Phat Contracts are deployed to one or more workers, grouped as a Cluster. The contracts in the same cluster are replicated to further guarantee the availability. Thanks to the redundancy by the Cluster design, the developer can further validate the states across the workers to add another layer of security.</p>
          ) : null}
          {page === 2 ? (
            <>
              <p>Phala Network implemented end-to-end encryption during the full Phat Contract lifecycle. Secure Enclave acts as a two-way sandbox that encrypts input, output, and internet access, protecting the secrets in the enclave against software and hardware level attack.</p>
              <p>Gatekeepers is introduced as a key management node to ensure the availability and the confidentiality of the secrets, powered by MPC.</p>
            </>
          ) : null}
        </div>
        <ul className="mt-10 flex flex-row gap-2.5">
          <li>
            <button
              className={cn(
                "btn btn-lg rounded-lg text-left w-52",
                page === 0 ? "btn-primary font-medium" : "btn-secondary text-blackAlpha-500"
              )}
              onClick={() => setPage(p => [0, p[0] < 0 ? 1 : -1])}
            >
              Correctness
            </button>
          </li>
          <li>
            <button
              className={cn(
                "btn btn-lg rounded-lg text-left w-52",
                page === 1 ? "btn-primary font-medium" : "btn-secondary text-blackAlpha-500"
              )}
              onClick={() => setPage(p => [1, p[0] < 1 ? 1 : -1])}
            >
              Replicated
            </button>
          </li>
          <li>
            <button
              className={cn(
                "btn btn-lg rounded-lg text-left w-52",
                page === 2 ? "btn-primary font-medium" : "btn-secondary text-blackAlpha-500"
              )}
              onClick={() => setPage(p => [2, p[0] < 2 ? 1 : -1])}
            >
              Confidentiality
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}

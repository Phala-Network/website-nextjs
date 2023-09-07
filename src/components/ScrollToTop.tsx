import React, { useState, useEffect } from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai'
import { motion } from 'framer-motion'

type Props = React.ComponentPropsWithoutRef<'button'> & {
  top?: number
  smooth?: boolean
}

function scrollToTop(smooth: boolean = false) {
  if (smooth) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  } else {
    document.documentElement.scrollTop = 0
  }
}

const ScrollToTop = ({
  top = 20,
  smooth = true,
}) => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(document.documentElement.scrollTop >= top)
    }
    onScroll()
    document.addEventListener("scroll", onScroll)
    return () => document.removeEventListener("scroll", onScroll)
  }, [top])

  return (
    <>
      <motion.button
        className="fixed z-10 w-12 h-12 bg-white drop-shadow rounded-2xl right-8 bottom-8 flex items-center justify-center"
        onClick={() => scrollToTop(smooth)}
        aria-label="Scroll to top"
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
        initial="hidden"
        animate={visible ? 'visible' : 'hidden'}
      >
        <AiOutlineArrowUp size={16} color="#000" />
      </motion.button>
    </>
  )
}

export default ScrollToTop

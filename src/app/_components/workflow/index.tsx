'use client'
import { useState, useEffect } from 'react'
import { useAnimate, useInView } from 'framer-motion'

import { cn } from '@/lib/utils'
import DotBackground from '@/components/DotBackground'
import Worker from './svgs/worker'
import WorkerPhat from './svgs/worker_phat'
import WorkerFile from './svgs/worker_file'
import Flow1Lines from './svgs/flow1_lines'
import Flow1Checks from './svgs/flow1_checks'
import PhalaBlockchain from './svgs/phala_blockchain'
import User from './svgs/user'
import Blockchain from './svgs/blockchain'
import Developer from './svgs/developer'
import Gatekeeper from './svgs/gatekeeper'
import Flow2Lines from './svgs/flow2_lines'
import Flow2Checks from './svgs/flow2_checks'
import Flow3Lines from './svgs/flow3_lines'
import Flow3Checks from './svgs/flow3_checks'
import Web2RectBig from './svgs/web2_rect_big'
import BlockchainRectBig from './svgs/blockchain_rect_big'
import Web2Rect from './svgs/web2_rect'
import BlockchainRect from './svgs/blockchain_rect'

const flow1to2 = [
  ['.flow1-checks', { opacity: 0 }, { duration: 0.3, ease: 'easeOut' }],
  ['.flow1-lines', { opacity: 0 }, { duration: 0.3, ease: 'easeOut' }],
  ['.flow-workers', { x: '17.02%' }, { duration: 0.6, ease: 'easeOut' }],
  ['.flow-workers', { y: '21.5%' }, { at: 1.2, duration: 0.3, ease: 'easeOut' }],
  ['.flow-phala-blockchain', { x: '17.02%' }, { at: 0.6, duration: 0.6, ease: 'easeOut' }],
  ['.flow-phala-blockchain', { y: '21.5%' }, { at: 1.2, duration: 0.3, ease: 'easeOut' }],
  ['.flow2-lines', { opacity: 1 }, { duration: 0.3, ease: 'easeOut' }],
  ['.flow2-checks', { opacity: 1 }, { at: 1.8, duration: 0.3, ease: 'easeOut' }],
  ['.flow-right-user', { opacity: 0, y: '4.12%' }, { at: 0.2, duration: 0.3, ease: 'easeOut' }],
  ['.flow-right-blockchain', { opacity: 0, y: '4.12%' }, { at: 0.2, duration: 0.3, ease: 'easeOut' }],
  ['.flow-right-developer', { opacity: 0, y: '4.12%' }, { at: 0.2, duration: 0.3, ease: 'easeOut' }],
] as any

const flow2to1 = [
  ['.flow2-checks', { opacity: 0 }, { duration: 0.3, ease: 'easeOut' }],
  ['.flow2-lines', { opacity: 0 }, { duration: 0.3, ease: 'easeOut' }],
  ['.flow-workers', { y: 0 }, { duration: 0.3, ease: 'easeOut' }],
  ['.flow-workers', { x: 0 }, { duration: 0.6, ease: 'easeOut' }],
  ['.flow-phala-blockchain', { y: 0 }, { at: 0.6, duration: 0.3, ease: 'easeOut' }],
  ['.flow-phala-blockchain', { x: 0 }, { at: 0.9, duration: 0.6, ease: 'easeOut' }],
  ['.flow1-lines', { opacity: 1 }, { at: 1.5, duration: 0.3, ease: 'easeOut' }],
  ['.flow1-checks', { opacity: 1 }, { at: 1.8, duration: 0.3, ease: 'easeOut' }],
  ['.flow-right-user', { opacity: 1, y: 0 }, { at: 0.6, duration: 0.3, ease: 'easeOut' }],
  ['.flow-right-blockchain', { opacity: 1, y: 0 }, { at: 0.6, duration: 0.3, ease: 'easeOut' }],
  ['.flow-right-developer', { opacity: 1, y: 0 }, { at: 0.6, duration: 0.3, ease: 'easeOut' }],
] as any

const flow2to3 = [
  ['.flow2-checks', { opacity: 0 }, { duration: 0.3, ease: 'easeOut' }],
  ['.flow2-lines', { opacity: 0 }, { at: 0, duration: 0.3, ease: 'easeOut' }],
  ['.flow-workers', { y: '70%' }, { at: 0, duration: 0.6, ease: 'easeOut' }],
  ['.worker1', { scale: 0.8, x: '27%', opacity: 0.1 }, { at: 0, duration: 0.6, ease: 'easeOut' }],
  ['.worker3', { scale: 0.8, x: '-27%', opacity: 0.1 }, { at: 0, duration: 0.6, ease: 'easeOut' }],
  ['.worker-phat', { opacity: 0 }, { at: 0, duration: 0.6, ease: 'easeOut' }],
  ['.worker-file', { opacity: 1 }, { at: 0, duration: 0.6, ease: 'easeOut' }],
  ['.flow-phala-blockchain', { scale: 0.8, y: '30%' }, { at: 0, duration: 0.6, ease: 'easeOut' }],
  ['.flow3-lines', { opacity: 1 }, { at: 0.3, duration: 0.3, ease: 'easeOut' }],
  ['.flow3-checks', { opacity: 1 }, { at: 0.6, duration: 0.3, ease: 'easeOut' }],
  ['.flow3-top', { opacity: 1 }, { at: 0, duration: 0.6, ease: 'easeOut' }],
  ['.flow3-left', { opacity: 1, y: '-2.87%' }, { at: 0, duration: 0.6, ease: 'easeOut' }],
  ['.flow-right-user', { opacity: 1, y: '-12%', x: '2%' }, { at: 0, duration: 0.6, ease: 'easeOut' }],
  ['.flow-right-web2-rect', { opacity: 1, y: '-4.12%' }, { at: 0, duration: 0.6, ease: 'easeOut' }],
  ['.flow-right-blockchain-rect', { opacity: 1, y: '-4.12%' }, { at: 0, duration: 0.6, ease: 'easeOut' }],
] as any

const flow3to2 = [
  ['.flow3-checks', { opacity: 0 }, { duration: 0.3, ease: 'easeOut' }],
  ['.flow3-lines', { opacity: 0 }, { at: 0, duration: 0.3, ease: 'easeOut' }],
  ['.flow3-top', { opacity: 0 }, { at: 0, duration: 0.3, ease: 'easeOut' }],
  ['.flow3-left', { opacity: 0, y: 0 }, { at: 0, duration: 0.6, ease: 'easeOut' }],
  ['.flow-workers', { y: '21.5%' }, { at: 0, duration: 0.6, ease: 'easeOut' }],
  ['.flow-phala-blockchain', { scale: 1, y: '21.5%' }, { at: 0, duration: 0.6, ease: 'easeOut' }],
  ['.worker1', { scale: 1, opacity: 1, x: 0 }, { at: 0, duration: 0.6, ease: 'easeOut' }],
  ['.worker3', { scale: 1, opacity: 1, x: 0 }, { at: 0, duration: 0.6, ease: 'easeOut' }],
  ['.worker-phat', { opacity: 1 }, { at: 0, duration: 0.6, ease: 'easeOut' }],
  ['.worker-file', { opacity: 0 }, { at: 0, duration: 0.6, ease: 'easeOut' }],
  ['.flow2-lines', { opacity: 1 }, { duration: 0.3, ease: 'easeOut' }],
  ['.flow2-checks', { opacity: 1 }, { duration: 0.3, ease: 'easeOut' }],
  ['.flow-right-user', { opacity: 0, y: '4.12%', x: 0 }, { at: 0, duration: 0.6, ease: 'easeOut' }],
  ['.flow-right-web2-rect', { opacity: 0, y: 0 }, { at: 0, duration: 0.6, ease: 'easeOut' }],
  ['.flow-right-blockchain-rect', { opacity: 0, y: 0 }, { at: 0, duration: 0.6, ease: 'easeOut' }],
] as any

const flow1to3 = [
  ['.flow1-checks', { opacity: 0 }, { duration: 0.3, ease: 'easeOut' }],
  ['.flow1-lines', { opacity: 0 }, { duration: 0.3, ease: 'easeOut' }],
  ['.flow-workers', { x: '17.02%' }, { duration: 0.6, ease: 'easeOut' }],
  ['.flow-workers', { y: '21.5%' }, { at: 1.2, duration: 0.3, ease: 'easeOut' }],
  ['.flow-workers', { y: '70%' }, { at: 1.5, duration: 0.6, ease: 'easeOut' }],
  ['.worker1', { scale: 0.8, x: '27%', opacity: 0.1 }, { at: 1.5, duration: 0.6, ease: 'easeOut' }],
  ['.worker3', { scale: 0.8, x: '-27%', opacity: 0.1 }, { at: 1.5, duration: 0.6, ease: 'easeOut' }],
  ['.worker-phat', { opacity: 0 }, { at: 1.5, duration: 0.6, ease: 'easeOut' }],
  ['.worker-file', { opacity: 1 }, { at: 1.5, duration: 0.6, ease: 'easeOut' }],
  ['.flow-phala-blockchain', { x: '17.02%' }, { at: 0.6, duration: 0.6, ease: 'easeOut' }],
  ['.flow-phala-blockchain', { y: '21.5%' }, { at: 1.2, duration: 0.3, ease: 'easeOut' }],
  ['.flow-phala-blockchain', { scale: 0.8, y: '30%' }, { at: 1.5, duration: 0.6, ease: 'easeOut' }],
  ['.flow-right-user', { x: '2%' }, { at: 0.2, duration: 0.6, ease: 'easeOut' }],
  ['.flow-right-blockchain', { opacity: 0, y: '4.12%' }, { at: 0.2, duration: 0.3, ease: 'easeOut' }],
  ['.flow-right-developer', { opacity: 0, y: '4.12%' }, { at: 0.2, duration: 0.3, ease: 'easeOut' }],
  ['.flow3-top', { opacity: 1 }, { at: 1.5, duration: 0.6, ease: 'easeOut' }],
  ['.flow3-left', { opacity: 1, y: '-2.87%' }, { at: 1.5, duration: 0.6, ease: 'easeOut' }],
  ['.flow-right-user', { y: '-12%' }, { at: 1.5, duration: 0.6, ease: 'easeOut' }],
  ['.flow-right-web2-rect', { opacity: 1, y: '-4.12%' }, { at: 1.5, duration: 0.6, ease: 'easeOut' }],
  ['.flow-right-blockchain-rect', { opacity: 1, y: '-4.12%' }, { at: 1.5, duration: 0.6, ease: 'easeOut' }],
  ['.flow3-lines', { opacity: 1 }, { at: 2.1, duration: 0.3, ease: 'easeOut' }],
  ['.flow3-checks', { opacity: 1 }, { at: 2.4, duration: 0.3, ease: 'easeOut' }],
] as any

const flow3to1 = [
  ['.flow3-checks', { opacity: 0 }, { duration: 0.3, ease: 'easeOut' }],
  ['.flow3-lines', { opacity: 0 }, { at: 0, duration: 0.3, ease: 'easeOut' }],
  ['.flow3-top', { opacity: 0 }, { at: 0, duration: 0.3, ease: 'easeOut' }],
  ['.flow3-left', { opacity: 0, y: 0 }, { at: 0, duration: 0.6, ease: 'easeOut' }],
  ['.flow-workers', { y: '21.5%' }, { at: 0, duration: 0.6, ease: 'easeOut' }],
  ['.flow-phala-blockchain', { scale: 1, y: '21.5%' }, { at: 0, duration: 0.6, ease: 'easeOut' }],
  ['.worker1', { scale: 1, opacity: 1, x: 0 }, { at: 0, duration: 0.6, ease: 'easeOut' }],
  ['.worker3', { scale: 1, opacity: 1, x: 0 }, { at: 0, duration: 0.6, ease: 'easeOut' }],
  ['.worker-phat', { opacity: 1 }, { at: 0, duration: 0.6, ease: 'easeOut' }],
  ['.worker-file', { opacity: 0 }, { at: 0, duration: 0.6, ease: 'easeOut' }],
  ['.flow-right-web2-rect', { opacity: 0, y: 0 }, { at: 0, duration: 0.6, ease: 'easeOut' }],
  ['.flow-right-blockchain-rect', { opacity: 0, y: 0 }, { at: 0, duration: 0.6, ease: 'easeOut' }],
  ['.flow-workers', { y: 0 }, { duration: 0.3, ease: 'easeOut' }],
  ['.flow-workers', { x: 0 }, { duration: 0.6, ease: 'easeOut' }],
  ['.flow-phala-blockchain', { y: 0 }, { at: 0.6, duration: 0.3, ease: 'easeOut' }],
  ['.flow-phala-blockchain', { x: 0 }, { at: 0.9, duration: 0.6, ease: 'easeOut' }],
  ['.flow1-lines', { opacity: 1 }, { at: 1.5, duration: 0.3, ease: 'easeOut' }],
  ['.flow1-checks', { opacity: 1 }, { at: 1.8, duration: 0.3, ease: 'easeOut' }],
  ['.flow-right-user', { y: 0 }, { at: 0, duration: 0.6, ease: 'easeOut' }],
  ['.flow-right-user', { x: 0 }, { at: 1.5, duration: 0.6, ease: 'easeOut' }],
  ['.flow-right-blockchain', { opacity: 1, y: 0 }, { at: 0.6, duration: 0.3, ease: 'easeOut' }],
  ['.flow-right-developer', { opacity: 1, y: 0 }, { at: 0.6, duration: 0.3, ease: 'easeOut' }],
] as any

const WorkFlow = ({ animation, inViewAnimation }: { animation?: string, inViewAnimation?: string }) => {
  const [scope, animate] = useAnimate()
  const isInView = useInView(scope, { once: true })
  const runAnimation = (_animation?: string) => {
    if (_animation === 'flow1to2') {
      animate(flow1to2)
    } else if (_animation === 'flow2to1') {
      animate(flow2to1)
    } else if (_animation === 'flow2to3') {
      animate(flow2to3)
    } else if (_animation === 'flow3to2') {
      animate(flow3to2)
    } else if (_animation === 'flow1to3') {
      animate(flow1to3)
    } else if (_animation === 'flow3to1') {
      animate(flow3to1)
    }
  }
  useEffect(() => {
    runAnimation(animation)
  }, [animation])

  useEffect(() => {
    if (inViewAnimation && isInView) {
      runAnimation(inViewAnimation)
    }
  }, [isInView])

  return (
    <div
      ref={scope}
      className="w-full aspect-[1316/763] rounded-[24px] xl:rounded-[32px] relative overflow-hidden"
    >
      <DotBackground dotColor="#323233" bgColor="#171717" />
      <Flow1Lines
        className={cn(
          "flow1-lines",
          "absolute left-[20%] top-[9.83%]",
          "w-[63.75%]"
        )}
      />
      <Flow1Checks
        className={cn(
          "flow1-checks",
          "absolute left-[20%] top-[9.83%]",
          "w-[63.75%]"
        )}
      />
      <Flow2Lines
        className={cn(
          "flow2-lines opacity-0",
          "absolute left-[28.42%] top-[13.5%]",
          "w-[48.63%]"
        )}
      />
      <Flow2Checks
        className={cn(
          "flow2-checks opacity-0",
          "absolute left-[28.42%] top-[13.5%]",
          "w-[48.63%]"
        )}
      />
      <Flow3Lines
        className={cn(
          "flow3-lines opacity-0",
          "absolute left-[21.73%] top-[14.29%]",
          "w-[57.29%]"
        )}
      />
      <Flow3Checks
        className={cn(
          "flow3-checks opacity-0",
          "absolute left-[21.73%] top-[14.29%]",
          "w-[57.29%]"
        )}
      />
      <div
        className={cn(
          "flow-workers",
          "absolute left-[12.31%] top-[18%]",
          "flex w-[56.23%]"
        )}
      >
        <div className="worker1 w-[27.03%] h-full relative">
          <Worker />
          <WorkerPhat className="worker-phat w-[32%] absolute left-1/2 top-[48%] -translate-x-1/2" />
          <WorkerFile className="worker-file opacity-0 w-[32%] absolute left-1/2 top-[48%] -translate-x-1/2" />
        </div>
        <div className="worker2 w-[27.03%] h-full relative ml-[9.46%]">
          <Worker />
          <WorkerPhat className="worker-phat w-[32%] absolute left-1/2 top-[48%] -translate-x-1/2" />
          <WorkerFile className="worker-file opacity-0 w-[32%] absolute left-1/2 top-[48%] -translate-x-1/2" />
        </div>
        <div className="worker3 w-[27.03%] h-full relative ml-[9.46%]">
          <Worker />
          <WorkerPhat className="worker-phat w-[32%] absolute left-1/2 top-[48%] -translate-x-1/2" />
          <WorkerFile className="worker-file opacity-0 w-[32%] absolute left-1/2 top-[48%] -translate-x-1/2" />
        </div>
      </div>
      <PhalaBlockchain
        className={cn(
          "flow-phala-blockchain",
          "absolute left-[12.31%] top-[54.13%]",
          "w-[56.23%]"
        )}
      />
      <User
        className={cn(
          "flow-right-user",
          "absolute left-[78.27%] top-[17.69%]",
          "w-[10.64%]"
        )}
      />
      <Blockchain
        className={cn(
          "flow-right-blockchain",
          "absolute left-[78.27%] top-[40.37%]",
          "w-[10.64%]"
        )}
      />
      <Developer
        className={cn(
          "flow-right-developer",
          "absolute left-[78.27%] top-[63.05%]",
          "w-[10.64%]"
        )}
      />
      <Web2Rect
        className={cn(
          "flow-right-web2-rect opacity-0",
          "absolute left-[78.27%] top-[43%]",
          "w-[10.64%]"
        )}
      />
      <BlockchainRect
        className={cn(
          "flow-right-blockchain-rect opacity-0",
          "absolute left-[78.27%] top-[67%]",
          "w-[10.64%]"
        )}
      />
      <div
        className={cn(
          "flow3-top opacity-0",
          "absolute left-[27.51%] top-[11%]",
          "flex w-[44.98%]"
        )}
      >
        <Gatekeeper />
        <Gatekeeper className="ml-[19.59%]" />
        <Gatekeeper className="ml-[19.59%]" />
      </div>
      <div
        className={cn(
          "flow3-left opacity-0",
          "absolute left-[10%] top-[14.02%]",
          "flex flex-col w-[12.31%]"
        )}
      >
        <Web2RectBig />
        <BlockchainRectBig className="mt-[10.64%]"/>
      </div>
    </div>
  )
}

export default WorkFlow

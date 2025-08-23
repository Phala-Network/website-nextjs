'use client'
import { AnimatePresence, motion } from 'motion/react'
import Image from 'next/image'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { Button } from '@/components/ui/button'

// --- Utility helpers ---
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))
const hex32 = () =>
  Array.from({ length: 32 }, () =>
    Math.floor(Math.random() * 16).toString(16),
  ).join('')

// Scramble text into hex progressively for the "seal" effect
function useSealAnimation(on: boolean, src: string) {
  const [out, setOut] = useState(src)
  useEffect(() => {
    if (!on) return setOut(src)
    let i = 0
    const id = setInterval(() => {
      i += 1
      const chunk = (hex32() + hex32()).slice(
        0,
        Math.max(8, Math.min(src.length + 24, i * 8)),
      )
      setOut(chunk)
      if (i > Math.ceil((src.length + 24) / 8)) clearInterval(id)
    }, 40)
    return () => clearInterval(id)
  }, [on, src])
  return out
}

// --- UI elements ---
const Avatar = ({ who }: { who: 'user' | 'ai' }) => (
  <div className="shrink-0 w-8 h-8 rounded-full grid place-items-center border border-gray-300 bg-white">
    {who === 'user' ? (
      <svg
        viewBox="0 0 24 24"
        width="18"
        height="18"
        className="text-gray-600"
        aria-label="User avatar"
      >
        <circle cx="12" cy="8.5" r="3.5" fill="currentColor" opacity=".35" />
        <path
          d="M4 20c0-3.314 3.134-6 7-6h2c3.866 0 7 2.686 7 6"
          fill="currentColor"
          opacity=".35"
        />
        <circle cx="12" cy="8.5" r="2.2" fill="currentColor" />
      </svg>
    ) : (
      <svg
        viewBox="0 0 24 24"
        width="18"
        height="18"
        className="text-gray-700"
        aria-label="AI avatar"
      >
        <rect
          x="5"
          y="6"
          width="14"
          height="12"
          rx="3"
          fill="currentColor"
          opacity=".2"
        />
        <circle cx="9" cy="12" r="1.5" fill="currentColor" />
        <circle cx="15" cy="12" r="1.5" fill="currentColor" />
        <path
          d="M8 16c1.2-1 6.8-1 8 0"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    )}
  </div>
)

// Chat bubble with avatars and directional slide-in; AI aligns right
const ChatBubble = ({
  who,
  children,
  dim = false,
}: {
  who: 'user' | 'ai'
  children: React.ReactNode
  dim?: boolean
}) => (
  <div
    className={`w-full flex ${who === 'user' ? 'justify-start' : 'justify-end'}`}
  >
    <div
      className={`flex items-end gap-2 ${who === 'user' ? 'flex-row' : 'flex-row-reverse'}`}
    >
      <Avatar who={who} />
      <motion.div
        layout="position"
        initial={{ opacity: 0, y: 8, x: who === 'user' ? -16 : 16 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        exit={{ opacity: 0, y: -8, x: who === 'user' ? -16 : 16 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className={`max-w-[280px] sm:max-w-[480px] lg:max-w-[640px] rounded-2xl px-3 sm:px-5 py-3 sm:py-4 border tracking-tight leading-relaxed text-sm sm:text-base lg:text-lg ${
          // darker light bubble
          `text-gray-900 ${dim ? 'opacity-60' : ''}`
        }`}
      >
        {children}
      </motion.div>
    </div>
  </div>
)

const LockBadge = ({ label = 'End‑to‑end encrypted' }) => (
  <div className="flex items-center gap-2 text-xs font-medium tracking-wide text-gray-600">
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="opacity-90 text-primary-500"
    >
      <path d="M6 10V8a6 6 0 1 1 12 0v2" strokeWidth="2" />
      <rect x="4" y="10" width="16" height="10" rx="2" strokeWidth="2" />
      <circle cx="12" cy="15" r="2" strokeWidth="2" />
    </svg>
    {label}
  </div>
)

const Typewriter = ({
  text,
  cursor = true,
}: {
  text: string
  cursor?: boolean
}) => (
  <span className="font-sans text-sm text-gray-800">
    {text}
    {cursor && (
      <span className="inline-block w-2 h-4 ml-0.5 animate-pulse align-baseline rounded-sm bg-primary-500" />
    )}
  </span>
)

const Spinner = () => (
  <svg className="animate-spin h-4 w-4 text-primary-500" viewBox="0 0 24 24">
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
    ></path>
  </svg>
)

const ProofBar = ({
  visible,
  session,
}: {
  visible: boolean
  session: string
}) => (
  <AnimatePresence>
    {visible && (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 12 }}
        transition={{ duration: 0.4 }}
        className="mt-3 sm:mt-5 rounded-xl border border-gray-200 bg-gray-50 backdrop-blur p-3 sm:p-4 text-xs text-gray-700 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0"
      >
        <div className="flex items-center gap-2">
          <LockBadge label="TEE attestation: verified" />
          <span className="text-gray-500">Session</span>
          <code className="px-2 py-1 rounded bg-white border border-gray-200 font-mono text-xs">
            {session}
          </code>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            View proof
          </Button>
          <Button variant="outline" size="sm">
            Copy quote
          </Button>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
)

const ConfidentialAI = () => {
  const [step, setStep] = useState<
    'idle' | 'typing' | 'aiThinking' | 'answer' | 'encrypting' | 'done'
  >('idle')
  const [typed, setTyped] = useState('')
  const userLine = 'How do I migrate my app to private, zero‑trust AI?'
  const aiLine =
    "Here's a secure plan: route prompts via an E2E channel, run models inside Phala's TEE, attest before exec, disable logs & storage."

  const playing = useRef(false)
  const sessionId = useMemo(() => hex32().slice(0, 12), [])

  const sealedUser = useSealAnimation(step === 'done', userLine)
  const sealedAI = useSealAnimation(step === 'done', aiLine)

  const run = useCallback(async () => {
    if (playing.current) return
    playing.current = true
    setStep('idle')
    setTyped('')
    setStep('typing')
    for (let i = 0; i < userLine.length; i++) {
      setTyped((t) => t + userLine[i])
      await sleep(22 + Math.random() * 28)
    }
    await sleep(200)
    setStep('aiThinking')
    await sleep(900)
    setStep('answer')
    await sleep(1600)
    setStep('encrypting')
    await sleep(900)
    setStep('done')
    playing.current = false
  }, [])

  useEffect(() => {
    run()
  }, [run])

  return (
    <div className="w-full h-120 rounded-3xl border border-gray-200 bg-white backdrop-blur-xl overflow-hidden flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-3 sm:px-5 py-3 sm:py-4 border-b border-gray-200 bg-gray-50">
        <div className="flex items-center gap-2 sm:gap-3">
          <Image
            src="/confidential-ai-models/phala.svg"
            alt="Phala Logo"
            width={20}
            height={20}
            className="sm:w-6 sm:h-6"
          />
          <div className="min-w-0">
            <div className="font-semibold leading-tight text-gray-800 text-sm sm:text-base">
              Phala Confidential AI
            </div>
            <div className="text-xs sm:text-sm text-gray-500">
              No storage · No logs · End‑to‑end encryption
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {step === 'done' && (
            <Button variant="outline" size="sm" onClick={run}>
              Replay
            </Button>
          )}
        </div>
      </div>

      {/* Conversation only */}
      <div className="p-3 sm:p-6 lg:p-8 space-y-3 sm:space-y-4 bg-gradient-to-b from-gray-50 to-transparent flex-1 flex flex-col">
        <div className="flex-1 space-y-3 sm:space-y-4">
          <AnimatePresence initial={false}>
            <ChatBubble who="user" dim={step !== 'typing' && step !== 'idle'}>
              <div className="font-medium text-gray-700 mb-1 text-sm">You</div>
              {step === 'done' ? (
                <code className="font-mono text-primary-600 text-sm break-words">
                  {sealedUser}
                </code>
              ) : (
                <Typewriter text={typed} cursor={step === 'typing'} />
              )}
              {step === 'encrypting' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-2"
                >
                  <LockBadge label="Sealing conversation…" />
                </motion.div>
              )}
            </ChatBubble>

            {step === 'aiThinking' && (
              <ChatBubble who="ai">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Spinner />
                  <span>Requesting trusted compute…</span>
                </div>
              </ChatBubble>
            )}

            {step !== 'idle' && step !== 'typing' && step !== 'aiThinking' && (
              <ChatBubble who="ai" dim={step !== 'answer'}>
                <div className="font-medium text-gray-700 mb-1 text-sm">AI</div>
                {step === 'done' ? (
                  <code className="font-mono text-primary-600 text-sm break-words">
                    {sealedAI}
                  </code>
                ) : (
                  <p className="text-gray-800/90 text-sm">{aiLine}</p>
                )}
              </ChatBubble>
            )}
          </AnimatePresence>
        </div>

        <ProofBar visible={step === 'done'} session={sessionId} />
      </div>
    </div>
  )
}

const Hero = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.5fr] items-center">
          <div className="flex flex-col gap-6 lg:gap-10 lg:pl-8">
            <h1 className="text-3xl/snug sm:text-5xl/snug md:text-6xl/snug font-semibold">
              Confidential <br className="hidden lg:block" /> AI Models
            </h1>
            <p className="text-muted-foreground text-lg">
              Others claim privacy. We prove it. Access frontier AI models on
              cloud, with proof that your data is protected end-to-end.
            </p>
            <div className="flex gap-4">
              <Button
                size="lg"
                className="shrink-0 w-full lg:h-12 lg:text-base sm:w-40"
              >
                <a
                  href="https://redpill.ai/chat"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Private Chat
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="max-sm:px-6 w-full sm:w-40 lg:h-12 lg:text-base lg:w-40"
              >
                <a
                  href="https://docs.phala.network/phala-cloud/confidential-ai/overview"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Developer Docs
                </a>
              </Button>
            </div>
          </div>

          <div className="flex justify-center">
            <ConfidentialAI />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

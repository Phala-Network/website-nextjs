'use client'
import { Bot, Loader2, Lock, Send, User } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import Image from 'next/image'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

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
      const chunk = Array.from({ length: Math.min(src.length, 64) }, () =>
        Math.floor(Math.random() * 16).toString(16),
      ).join('')
      setOut(chunk)
      if (i > Math.ceil((src.length + 24) / 8)) clearInterval(id)
    }, 40)
    return () => clearInterval(id)
  }, [on, src])
  return out
}

// --- UI elements ---
const Avatar = ({ who }: { who: 'user' | 'ai' }) => (
  <div className="shrink-0 size-10 rounded-full grid place-items-center border">
    {who === 'user' ? <User size={16} /> : <Bot size={16} />}
  </div>
)

// Chat bubble with avatars and directional slide-in; AI aligns left, user aligns right
const ChatBubble = ({
  who,
  children,
  dim = false,
}: {
  who: 'user' | 'ai'
  children: React.ReactNode
  dim?: boolean
}) => (
  <motion.div
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -8 }}
    className={`flex items-end gap-2 ${who === 'ai' ? 'flex-row' : 'flex-row-reverse'}`}
  >
    <Avatar who={who} />
    <div
      className={`w-[calc(100%-10rem)] rounded-2xl px-3 sm:px-5 py-3 sm:py-4 border text-sm sm:text-base lg:text-lg ${
        // darker light bubble
        `text-foreground ${dim ? 'opacity-60' : ''}`
      }`}
    >
      {children}
    </div>
    <div className="w-20"></div>
  </motion.div>
)

const LockBadge = ({ label }: { label: string }) => (
  <div className="flex items-center gap-2 text-xs font-medium tracking-wide text-muted-foreground">
    <Lock className="size-4 text-primary-500" />
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
  <span className="text-sm">
    {text}
    {cursor && (
      <span className="inline-block w-1 h-4 ml-0.5 animate-pulse align-baseline rounded-sm bg-primary-500" />
    )}
  </span>
)

const Spinner = () => <Loader2 className="size-4 animate-spin" />

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
        className="rounded-md border bg-muted p-3 sm:p-4 text-xs text-muted-foreground flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0"
      >
        <div className="flex items-center gap-2">
          <LockBadge label="TEE attestation: verified" />
          <span className="text-muted-foreground">Session</span>
          <code className="px-2 py-1 rounded bg-background border font-mono text-xs">
            {session}
          </code>
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
  const [chatMessage, setChatMessage] = useState('')
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
    await sleep(1200)
    setStep('answer')
    await sleep(1600)
    setStep('encrypting')
    await sleep(1200)
    setStep('done')
    playing.current = false
  }, [])

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (chatMessage.trim()) {
      const encodedMessage = encodeURIComponent(chatMessage.trim())
      window.open(
        `https://chat.redpill.ai/?message=${encodedMessage}`,
        '_blank',
        'noopener,noreferrer',
      )
    }
  }

  useEffect(() => {
    run()
  }, [run])

  return (
    <div className="w-full h-140 rounded-3xl border border-border bg-background backdrop-blur-xl overflow-hidden flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-3 sm:px-5 py-3 sm:py-4 border-b border-border bg-muted">
        <div className="flex items-center gap-2 sm:gap-3">
          <Image
            src="/confidential-ai-models/phala.svg"
            alt="Phala Logo"
            width={20}
            height={20}
            className="sm:w-6 sm:h-6"
          />
          <div className="min-w-0">
            <div className="font-semibold leading-tight text-foreground text-sm sm:text-base">
              Phala Confidential AI
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground">
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
      <div className="p-3 sm:p-6 lg:p-8 space-y-3 sm:space-y-4 flex-1 flex flex-col">
        <div className="flex-1 space-y-3 sm:space-y-4">
          <AnimatePresence initial={false}>
            {step !== 'idle' && (
              <ChatBubble key="user-message" who="user" dim={step !== 'typing'}>
                <div className="flex items-center gap-2 mb-2">
                  <div className="font-medium text-sm">You</div>
                  {step === 'encrypting' && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                      <LockBadge label="Sealing conversation…" />
                    </motion.div>
                  )}
                </div>
                {step === 'done' ? (
                  <code className="font-mono text-primary-600 text-sm break-all">
                    {sealedUser}
                  </code>
                ) : (
                  <Typewriter text={typed} cursor={step === 'typing'} />
                )}
              </ChatBubble>
            )}

            {step === 'aiThinking' && (
              <ChatBubble key="ai-thinking" who="ai">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Spinner />
                  <span>Requesting trusted compute…</span>
                </div>
              </ChatBubble>
            )}

            {step !== 'idle' && step !== 'typing' && step !== 'aiThinking' && (
              <ChatBubble key="ai-response" who="ai" dim={step !== 'answer'}>
                <div className="flex items-center gap-2 mb-2">
                  <div className="font-medium text-sm">
                    Confidential AI Model
                  </div>
                  {step === 'encrypting' && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <LockBadge label="Sealing conversation…" />
                    </motion.div>
                  )}
                </div>
                {step === 'done' ? (
                  <code className="font-mono text-primary-600 text-sm break-all">
                    {sealedAI}
                  </code>
                ) : (
                  <p className="text-sm">{aiLine}</p>
                )}
              </ChatBubble>
            )}
          </AnimatePresence>
        </div>

        <ProofBar visible={step === 'done'} session={sessionId} />
        {/* Chat Input */}
        <div className="">
          <form onSubmit={handleChatSubmit} className="relative">
            <Input
              type="text"
              placeholder="Start a private chat..."
              value={chatMessage}
              onChange={(e) => setChatMessage(e.target.value)}
              className="w-full h-10 text-sm pr-12"
            />
            <Button
              type="submit"
              size="sm"
              className="absolute right-1 top-1 h-8 w-8 p-0"
              disabled={!chatMessage.trim()}
            >
              <Send className="w-4 h-4" />
            </Button>
          </form>
        </div>
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
            <h1 className="font-display text-3xl/snug sm:text-5xl/snug md:text-6xl/snug font-semibold leading-none">
              Confidential <br className="hidden lg:block" /> AI Models
            </h1>
            <p className="font-display text-muted-foreground text-lg leading-7">
              Others claim privacy. We prove it. Access frontier AI models on
              cloud, with proof that your data is protected end-to-end.
            </p>
            <div className="flex gap-4">
              <Button
                size="lg"
                className="shrink-0 w-full lg:h-12 lg:text-base sm:w-40"
              >
                <a
                  href="https://chat.redpill.ai/"
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
                  href="https://docs.phala.com/phala-cloud/confidential-ai/overview"
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

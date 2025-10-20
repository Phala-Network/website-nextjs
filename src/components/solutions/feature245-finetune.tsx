'use client'

import { motion } from 'motion/react'
import React from 'react'

import { Card, CardContent } from '@/components/ui/card'

const handwrittenTextClasses = `flex gap-3 font-caveat text-xs md:text-xl tracking-tight`

const Feature245Finetune = () => {
  const leftFeatures = [
    'TEE Verified & Unsealed',
    'QLoRA 2× Faster',
    'Auto Safety Checks',
    'Encrypted Export',
  ]

  const rightFeatures = [
    'Base Model Loaded',
    'Dataset Streamed Privately',
    'Optional DPO/GRPO',
    'OpenAI Endpoint Ready',
  ]

  return (
    <section className="bg-background">
      <div className="relative container flex flex-col items-center overflow-hidden py-32">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <h1 className="text-5xl font-semibold tracking-tighter text-foreground md:text-7xl">
              How It Works
            </h1>
            <img
              src="https://github.com/unslothai/unsloth/raw/main/images/unsloth%20logo%20white%20text.png"
              alt="Unsloth"
              className="h-12 md:h-16 dark:block hidden"
            />
            <img
              src="https://github.com/unslothai/unsloth/raw/main/images/unsloth%20logo%20black%20text.png"
              alt="Unsloth"
              className="h-12 md:h-16 dark:hidden block"
            />
          </div>
          <p className="my-4 tracking-tighter text-muted-foreground/60 md:text-xl">
            End-to-end confidential fine-tuning with hardware attestation and
            encrypted artifacts.
          </p>
        </div>
        <div className="relative z-10 mx-auto mt-12 min-h-full max-w-3xl md:w-1/2">
          {/* Left features */}
          <div className="absolute -left-52 z-10 hidden h-full flex-col items-end justify-between md:flex lg:-left-62">
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={leftFeatures[i]}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  ease: [0.33, 1, 0.68, 1],
                  duration: 0.7,
                  delay: 0.7 + i * 0.18,
                }}
                className={handwrittenTextClasses}
              >
                {leftFeatures[i]}{' '}
                {React.createElement([Line1, Line2, Line3, Line4][i], {
                  className: `mt-4 w-10 md:w-16`,
                })}
              </motion.div>
            ))}
          </div>
          {/* Right features */}
          <div className="absolute -right-58 z-10 hidden h-full flex-col justify-between md:flex lg:-right-64">
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={rightFeatures[i]}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  ease: [0.33, 1, 0.68, 1],
                  duration: 0.7,
                  delay: 0.7 + i * 0.18,
                }}
                className={handwrittenTextClasses}
              >
                {React.createElement([Line1, Line2, Line3, Line4][i], {
                  className: `mt-4 w-10 scale-x-[-1] md:w-16`,
                })}{' '}
                {rightFeatures[i]}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 100, y: 0 }}
            transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.8 }}
            className="relative z-0"
          >
            <Card className="group w-full rounded-4xl border border-border bg-background p-2 shadow-none lg:p-3">
              <CardContent className="w-full rounded-3xl border-2 border-background bg-muted p-4 md:p-6">
                <div className="flex flex-col gap-3 text-xs md:text-sm">
                  {/* Top Row: Attestation */}
                  <div className="flex gap-2 justify-center items-start">
                    <div className="flex flex-col items-center w-full max-w-md">
                      <div className="rounded-lg border-2 border-emerald-500 bg-emerald-50 dark:bg-emerald-950 px-3 py-2 text-center w-full">
                        <div className="text-base mb-1">🔐</div>
                        <div className="font-semibold text-emerald-700 dark:text-emerald-300 text-sm">
                          Remote Attestation
                        </div>
                        <div className="text-[10px] text-muted-foreground mt-0.5">
                          TEE Verified & Keys Unsealed
                        </div>
                      </div>
                      <ArrowDown />
                    </div>
                  </div>

                  {/* Second Row: Base Model + Dataset */}
                  <div className="flex gap-2 justify-center items-start">
                    <div className="flex flex-col items-center flex-1">
                      <div className="rounded-lg border-2 border-blue-400 bg-blue-50 dark:bg-blue-950 px-2 py-2 text-center w-full">
                        <div className="text-base mb-1">📦</div>
                        <div className="font-semibold text-blue-700 dark:text-blue-300 text-xs">
                          Load Base Model
                        </div>
                        <div className="text-[10px] text-muted-foreground mt-0.5">
                          Llama / Mistral / Qwen
                        </div>
                      </div>
                      <ArrowDownRight />
                    </div>
                    <div className="flex flex-col items-center flex-1">
                      <div className="rounded-lg border-2 border-emerald-500 bg-emerald-50 dark:bg-emerald-950 px-2 py-2 text-center w-full">
                        <div className="text-base mb-1">🗂️</div>
                        <div className="font-semibold text-emerald-700 dark:text-emerald-300 text-xs">
                          Encrypted Dataset
                        </div>
                        <div className="text-[10px] text-muted-foreground mt-0.5">
                          streamed privately
                        </div>
                      </div>
                      <ArrowDownLeft />
                    </div>
                  </div>

                  {/* Training Loop */}
                  <div className="rounded-xl border-2 border-orange-400 bg-orange-50 dark:bg-orange-950/30 p-3">
                    <div className="text-center font-semibold text-orange-700 dark:text-orange-300 mb-2 flex items-center justify-center gap-2 text-sm">
                      <span>🔥</span>
                      Fine-Tuning Loop
                      <img
                        src="https://github.com/unslothai/unsloth/raw/main/images/unsloth%20logo%20white%20text.png"
                        alt="Unsloth"
                        className="h-4 dark:block hidden"
                      />
                      <img
                        src="https://github.com/unslothai/unsloth/raw/main/images/unsloth%20logo%20black%20text.png"
                        alt="Unsloth"
                        className="h-4 dark:hidden block"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="rounded border border-orange-300 bg-orange-100 dark:bg-orange-900/50 px-2 py-1.5 text-center">
                        <div className="font-medium text-orange-800 dark:text-orange-200 text-xs">
                          Apply QLoRA
                        </div>
                      </div>
                      <ArrowDown />
                      <div className="rounded border border-orange-300 bg-orange-100 dark:bg-orange-900/50 px-2 py-1.5 text-center">
                        <div className="font-medium text-orange-800 dark:text-orange-200 text-xs">
                          Train with Unsloth
                        </div>
                        <div className="text-[10px] text-muted-foreground">
                          2× Faster · 70% Less VRAM
                        </div>
                      </div>
                      <ArrowDown />
                      <div className="rounded border border-orange-300 bg-orange-100 dark:bg-orange-900/50 px-2 py-1.5 text-center">
                        <div className="font-medium text-orange-800 dark:text-orange-200 text-xs">
                          Optional DPO/GRPO
                        </div>
                      </div>
                      <ArrowDown />
                      <div className="rounded border border-orange-300 bg-orange-100 dark:bg-orange-900/50 px-2 py-1.5 text-center">
                        <div className="font-medium text-orange-800 dark:text-orange-200 text-xs">
                          Safety Checks
                        </div>
                        <div className="text-[10px] text-muted-foreground">
                          PII, Toxicity, Bias
                        </div>
                      </div>
                    </div>
                  </div>

                  <ArrowDown />

                  {/* Export */}
                  <div className="flex flex-col items-center">
                    <div className="rounded-lg border-2 border-purple-400 bg-purple-50 dark:bg-purple-950 px-3 py-2 text-center w-full">
                      <div className="text-base mb-1">🧾</div>
                      <div className="font-semibold text-purple-700 dark:text-purple-300 text-sm">
                        Export Encrypted LoRA
                      </div>
                      <div className="text-[10px] text-muted-foreground mt-0.5">
                        + Attestation Report
                      </div>
                    </div>
                    <ArrowDown />
                  </div>

                  {/* Deploy */}
                  <div className="flex flex-col items-center">
                    <div className="rounded-lg border-2 border-purple-400 bg-purple-50 dark:bg-purple-950 px-3 py-2 text-center w-full">
                      <div className="text-base mb-1">🚀</div>
                      <div className="font-semibold text-purple-700 dark:text-purple-300 text-sm">
                        Deploy on Phala TEE
                      </div>
                      <div className="text-[10px] text-muted-foreground mt-0.5">
                        OpenAI / HF endpoint
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export { Feature245Finetune }

// Arrow components
const ArrowDown = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="my-1">
    <path
      d="M12 5V19M12 19L19 12M12 19L5 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const ArrowDownRight = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className="my-1 ml-auto mr-4"
  >
    <path
      d="M7 7L17 17M17 17V7M17 17H7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const ArrowDownLeft = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className="my-1 mr-auto ml-4"
  >
    <path
      d="M17 7L7 17M7 17V7M7 17H17"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const Line1 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="61"
    {...props}
    height="26"
    viewBox="0 0 61 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.9646 1.91797C17.3747 7.75772 32.6529 11.57 48.5386 15.7286C49.4358 15.9635 58.8632 18.2083 58.5163 17.679C55.5766 13.1937 48.1816 12.4253 45.0204 8.60143C41.6482 4.52239 53.6346 15.2056 58.7437 16.5867C60.5905 17.0859 54.584 17.7874 53.7729 17.9579C48.9299 18.9758 45.2528 21.6554 41.1771 24.3266"
      stroke="#1C1C1C"
      strokeWidth="2.46548"
      strokeLinecap="round"
    />
  </svg>
)
const Line2 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="74"
    height="32"
    viewBox="0 0 74 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M49.8383 29.7093C56.0593 26.3815 62.2923 22.5754 68.9255 20.0624C69.9895 19.6593 71.3535 19.2757 72.2604 18.5417C73.5246 17.5184 64.9285 11.3625 63.8012 10.4351C62.8289 9.63523 51.4736 -1.49746 51.3055 1.71016C51.2106 3.52199 50.914 11.4552 48.9691 11.3533C42.6504 11.0222 9.82535 6.12723 3.49897 5.79571C1.55368 5.69377 1.32727 12.2958 1.22636 14.2215C1.14589 15.7572 0.522713 17.2364 2.41951 17.3358C6.59008 17.5543 37.3937 21.733 41.5643 21.9516C42.201 21.9849 51.105 21.6355 51.1608 22.5901C51.2617 24.32 49.404 28.8174 48.589 30.2542"
      stroke="#1C1C1C"
      strokeWidth="1.90473"
      strokeLinecap="round"
    />
  </svg>
)
const Line3 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="63"
    height="32"
    viewBox="0 0 63 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.4458 14.4424C4.99614 10.5607 8.34323 6.53007 13.0964 4.11905C14.5444 3.38458 19.3389 0.639317 21.0232 1.57508C25.6159 4.12659 18.5671 16.2199 17.5207 19.0879C14.8301 26.4621 15.6961 32.2209 25.0788 29.9273C35.1999 27.4533 47.485 21.5318 55.7907 15.1429C57.9879 13.4527 63.8769 11.1241 58.3715 11.1241C56.3948 11.1241 48.074 10.9476 54.5003 11.7509C55.0729 11.8225 61.5422 11.6344 61.5422 11.9353C61.5422 12.6635 58.6285 15.4157 58.1872 16.3964C57.4223 18.0961 56.5281 19.1618 56.5281 21.0788"
      stroke="#1C1C1C"
      strokeWidth="2.24706"
      strokeLinecap="round"
    />
  </svg>
)
const Line4 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width="82"
    height="45"
    viewBox="0 0 82 45"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.07928 1.78438C14.4865 20.4361 33.245 54.8532 60.3785 38.9569C67.0254 35.0628 69.6429 28.8775 72.9705 22.292C73.1143 22.0075 75.3857 14.886 74.4369 15.319C71.8963 16.4786 56.8203 23.0816 66.5539 18.7069C67.5836 18.244 74.045 13.9211 75.102 14.4551C77.9817 15.9102 79.704 30.0755 80.7698 33.3184"
      stroke="#1C1C1C"
      strokeWidth="2.40332"
      strokeLinecap="round"
    />
  </svg>
)

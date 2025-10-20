'use client'

import Image from 'next/image'

import { ScrollableTabsList } from '@/components/shadcnblocks/scrollable-tabslist'
import { ScrollBar } from '@/components/ui/scroll-area'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const PhalaMissionValues = () => {
  return (
    <section className="py-10 md:py-20">
      <div className="container px-4 md:px-6">
        <Tabs
          defaultValue="mission"
          className="rounded-2xl md:rounded-4xl border-border grid grid-cols-1 gap-6 md:gap-8 border p-3 md:p-4 lg:grid-cols-2 lg:p-8 xl:gap-20"
        >
          <div className="flex flex-col-reverse justify-between gap-6 md:gap-8 lg:flex-col">
            <div>
              <TabsContent
                value="mission"
                className="animate-in fade-in flex flex-col gap-4 md:gap-6 duration-300"
              >
                <span className="font-display text-muted-foreground text-xs leading-5 uppercase">
                  Our Mission
                </span>
                <div className="flex flex-col gap-3 md:gap-4">
                  <h2 className="font-display text-2xl md:text-3xl font-medium leading-tight">
                    Building the Future of Confidential Computing
                  </h2>
                  <p className="font-display text-sm md:text-base leading-7 text-muted-foreground">
                    Phala Network is building the world's largest confidential
                    computing cloud, enabling developers to build privacy-first
                    applications at scale. Founded in 2018, we've grown from a
                    small team of blockchain enthusiasts to a global network of
                    contributors pushing the boundaries of what's possible with
                    TEE technology and decentralized infrastructure.
                  </p>
                </div>
              </TabsContent>
              <TabsContent
                value="privacy"
                className="animate-in fade-in flex flex-col gap-4 md:gap-6 duration-300"
              >
                <span className="font-display text-muted-foreground text-xs leading-5 uppercase">
                  Privacy First
                </span>
                <div className="flex flex-col gap-3 md:gap-4">
                  <h2 className="font-display text-2xl md:text-3xl font-medium leading-tight">
                    Privacy. Security. Trust.
                  </h2>
                  <p className="font-display text-sm md:text-base leading-7 text-muted-foreground">
                    Building the infrastructure for confidential computing where
                    sensitive data remains encrypted even during processing.
                    We're creating a world where privacy isn't a luxury, but a
                    fundamental right built into the architecture.
                  </p>
                </div>
              </TabsContent>
              <TabsContent
                value="innovation"
                className="animate-in fade-in flex flex-col gap-4 md:gap-6 duration-300"
              >
                <span className="font-display text-muted-foreground text-xs leading-5 uppercase">
                  Innovation
                </span>
                <div className="flex flex-col gap-3 md:gap-4">
                  <h2 className="font-display text-2xl md:text-3xl font-medium leading-tight">
                    Open Source. Decentralized. Future.
                  </h2>
                  <p className="font-display text-sm md:text-base leading-7 text-muted-foreground">
                    Contributing to the decentralized ecosystem and pushing the
                    boundaries of TEE and blockchain technology. Our commitment
                    to open source drives innovation and enables developers
                    worldwide to build the next generation of privacy-preserving
                    applications.
                  </p>
                </div>
              </TabsContent>
            </div>
            <ScrollableTabsList>
              <TabsList className="mx-auto h-10 md:h-12 rounded-full p-1.5 md:p-2 lg:mx-0">
                <TabsTrigger
                  value="mission"
                  className="h-full rounded-full px-3 md:px-4 py-1.5 md:py-2 text-sm md:text-base"
                >
                  Mission
                </TabsTrigger>
                <TabsTrigger
                  value="privacy"
                  className="h-full rounded-full px-3 md:px-4 py-1.5 md:py-2 text-sm md:text-base"
                >
                  Privacy
                </TabsTrigger>
                <TabsTrigger
                  value="innovation"
                  className="h-full rounded-full px-3 md:px-4 py-1.5 md:py-2 text-sm md:text-base"
                >
                  Innovation
                </TabsTrigger>
              </TabsList>
              <ScrollBar orientation="horizontal" className="h-2" />
            </ScrollableTabsList>
          </div>
          <div>
            <TabsContent
              value="mission"
              className="animate-in fade-in duration-300"
            >
              <div className="relative">
                {/* Polaroid stack for Mission - Mobile optimized */}
                <div className="relative h-[300px] md:h-[440px] w-full rounded-2xl md:rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 lg:h-[540px] flex items-center justify-center overflow-hidden md:overflow-visible">
                  {/* Background Polaroid - smaller and less offset on mobile */}
                  <div className="absolute w-40 h-48 sm:w-48 sm:h-56 md:w-72 md:h-84 bg-white rounded-lg shadow-xl transform rotate-3 md:rotate-6 -translate-x-8 sm:-translate-x-12 md:-translate-x-32 translate-y-3 sm:translate-y-4 md:translate-y-12 z-0">
                    <div className="p-2 md:p-3 h-full">
                      <Image
                        src="/team/mission-photos/IMG_1691.jpg"
                        alt="Team Photo"
                        width={280}
                        height={260}
                        className="w-full h-32 sm:h-40 md:h-64 object-cover rounded"
                        unoptimized
                      />
                      <p className="text-center mt-1 md:mt-2 text-xs md:text-sm text-gray-600 font-handwriting hidden sm:block">
                        Building together
                      </p>
                    </div>
                  </div>

                  {/* Foreground Polaroid - smaller and less offset on mobile */}
                  <div className="relative w-40 h-48 sm:w-48 sm:h-56 md:w-72 md:h-84 bg-white rounded-lg shadow-2xl transform -rotate-2 md:-rotate-3 translate-x-8 sm:translate-x-12 md:translate-x-32 -translate-y-3 sm:-translate-y-4 md:-translate-y-12 z-20">
                    <div className="p-2 md:p-3 h-full">
                      <Image
                        src="/team/mission-photos/20220414_110438.jpg"
                        alt="Team Photo"
                        width={280}
                        height={260}
                        className="w-full h-32 sm:h-40 md:h-64 object-cover rounded"
                        unoptimized
                      />
                      <p className="text-center mt-1 md:mt-2 text-xs md:text-sm text-gray-600 font-handwriting hidden sm:block">
                        Phala Network
                      </p>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-6 bg-gradient-to-t from-black/60 to-transparent rounded-b-2xl md:rounded-b-3xl">
                  <div className="flex justify-between items-end text-white">
                    <div className="flex flex-col gap-0.5 md:gap-1.5">
                      <p className="font-display text-2xl md:text-4xl font-medium leading-none lg:text-5xl">
                        6+
                      </p>
                      <p className="font-display text-xs md:text-base font-medium leading-5">
                        years building
                      </p>
                    </div>
                    <div className="flex flex-col gap-0.5 md:gap-1.5 text-right">
                      <p className="text-2xl md:text-4xl font-medium lg:text-5xl">
                        30K+
                      </p>
                      <p className="text-xs md:text-base font-medium">
                        commits
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent
              value="privacy"
              className="animate-in fade-in duration-300"
            >
              <div className="relative">
                {/* Polaroid stack for Privacy - Mobile optimized */}
                <div className="relative h-[300px] md:h-[440px] w-full rounded-2xl md:rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 lg:h-[540px] flex items-center justify-center overflow-hidden md:overflow-visible">
                  {/* Background Polaroid */}
                  <div className="absolute w-40 h-48 sm:w-48 sm:h-56 md:w-72 md:h-84 bg-white rounded-lg shadow-xl transform rotate-3 md:rotate-5 -translate-x-7 sm:-translate-x-10 md:-translate-x-28 translate-y-2 sm:translate-y-3 md:translate-y-8 z-0">
                    <div className="p-2 md:p-3 h-full">
                      <Image
                        src="/team/mission-photos/IMG_7446.jpg"
                        alt="Team Privacy"
                        width={280}
                        height={260}
                        className="w-full h-32 sm:h-40 md:h-64 object-cover rounded"
                        unoptimized
                      />
                      <p className="text-center mt-1 md:mt-2 text-xs md:text-sm text-gray-600 font-handwriting hidden sm:block">
                        Secure by design
                      </p>
                    </div>
                  </div>

                  {/* Foreground Polaroid */}
                  <div className="relative w-40 h-48 sm:w-48 sm:h-56 md:w-72 md:h-84 bg-white rounded-lg shadow-2xl transform -rotate-2 md:-rotate-4 translate-x-7 sm:translate-x-10 md:translate-x-28 -translate-y-2 sm:-translate-y-3 md:-translate-y-8 z-20">
                    <div className="p-2 md:p-3 h-full">
                      <Image
                        src="/team/mission-photos/IMG_7490.jpg"
                        alt="Team Privacy"
                        width={280}
                        height={260}
                        className="w-full h-32 sm:h-40 md:h-64 object-cover rounded"
                        unoptimized
                      />
                      <p className="text-center mt-1 md:mt-2 text-xs md:text-sm text-gray-600 font-handwriting hidden sm:block">
                        Privacy first
                      </p>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-6 bg-gradient-to-t from-black/60 to-transparent rounded-b-2xl md:rounded-b-3xl">
                  <div className="flex justify-between items-end text-white">
                    <div className="flex flex-col gap-0.5 md:gap-1.5">
                      <p className="text-2xl md:text-4xl font-medium lg:text-5xl">
                        TEE
                      </p>
                      <p className="text-xs md:text-base font-medium">
                        Trusted Execution
                      </p>
                    </div>
                    <div className="flex flex-col gap-0.5 md:gap-1.5 text-right">
                      <p className="text-2xl md:text-4xl font-medium lg:text-5xl">
                        100%
                      </p>
                      <p className="text-xs md:text-base font-medium">
                        confidential
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent
              value="innovation"
              className="animate-in fade-in duration-300"
            >
              <div className="relative">
                {/* Polaroid stack for Innovation - Mobile optimized */}
                <div className="relative h-[300px] md:h-[440px] w-full rounded-2xl md:rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 lg:h-[540px] flex items-center justify-center overflow-hidden md:overflow-visible">
                  {/* Background Polaroid */}
                  <div className="absolute w-40 h-48 sm:w-48 sm:h-56 md:w-72 md:h-84 bg-white rounded-lg shadow-xl transform rotate-2 md:rotate-3 -translate-x-8 sm:-translate-x-10 md:-translate-x-30 translate-y-3 sm:translate-y-4 md:translate-y-10 z-0">
                    <div className="p-2 md:p-3 h-full">
                      <Image
                        src="/team/mission-photos/IMG_9884.jpg"
                        alt="Team Innovation"
                        width={280}
                        height={260}
                        className="w-full h-32 sm:h-40 md:h-64 object-cover rounded"
                        unoptimized
                      />
                      <p className="text-center mt-1 md:mt-2 text-xs md:text-sm text-gray-600 font-handwriting hidden sm:block">
                        Innovation hub
                      </p>
                    </div>
                  </div>

                  {/* Foreground Polaroid */}
                  <div className="relative w-40 h-48 sm:w-48 sm:h-56 md:w-72 md:h-84 bg-white rounded-lg shadow-2xl transform -rotate-1 md:-rotate-2 translate-x-8 sm:translate-x-10 md:translate-x-30 -translate-y-3 sm:-translate-y-4 md:-translate-y-10 z-20">
                    <div className="p-2 md:p-3 h-full">
                      <Image
                        src="/team/mission-photos/IMG_4083.jpg"
                        alt="Team Innovation"
                        width={280}
                        height={260}
                        className="w-full h-32 sm:h-40 md:h-64 object-cover rounded"
                        unoptimized
                      />
                      <p className="text-center mt-1 md:mt-2 text-xs md:text-sm text-gray-600 font-handwriting hidden sm:block">
                        Open source
                      </p>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-6 bg-gradient-to-t from-black/60 to-transparent rounded-b-2xl md:rounded-b-3xl">
                  <div className="flex justify-between items-end text-white">
                    <div className="flex flex-col gap-0.5 md:gap-1.5">
                      <p className="text-2xl md:text-4xl font-medium lg:text-5xl">
                        25+
                      </p>
                      <p className="text-xs md:text-base font-medium">
                        team members
                      </p>
                    </div>
                    <div className="flex flex-col gap-0.5 md:gap-1.5 text-right">
                      <p className="text-2xl md:text-4xl font-medium lg:text-5xl">
                        OSS
                      </p>
                      <p className="text-xs md:text-base font-medium">
                        open source
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  )
}

export { PhalaMissionValues }

"use client";

import { ScrollableTabsList } from "@/components/shadcnblocks/scrollable-tabslist";
import { ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

const PhalaMissionValues = () => {
  return (
    <section className="py-20">
      <div className="container">
        <Tabs
          defaultValue="mission"
          className="rounded-4xl border-border grid grid-cols-1 gap-8 border p-4 lg:grid-cols-2 lg:p-8 xl:gap-20"
        >
          <div className="flex flex-col-reverse justify-between gap-8 lg:flex-col">
            <div>
              <TabsContent
                value="mission"
                className="animate-in fade-in flex flex-col gap-6 duration-300"
              >
                <span className="text-muted-foreground text-xs uppercase">
                  Our Mission
                </span>
                <div className="flex flex-col gap-4">
                  <h2 className="text-3xl font-medium">
                    Building the Future of Confidential Computing
                  </h2>
                  <p className="text-muted-foreground">
                    Phala Network is building the world's largest confidential computing cloud,
                    enabling developers to build privacy-first applications at scale.
                    Founded in 2018, we've grown from a small team of blockchain enthusiasts to a
                    global network of contributors pushing the boundaries of what's possible with
                    TEE technology and decentralized infrastructure.
                  </p>
                </div>
              </TabsContent>
              <TabsContent
                value="privacy"
                className="animate-in fade-in flex flex-col gap-6 duration-300"
              >
                <span className="text-muted-foreground text-xs uppercase">
                  Privacy First
                </span>
                <div className="flex flex-col gap-4">
                  <h2 className="text-3xl font-medium">
                    Privacy. Security. Trust.
                  </h2>
                  <p className="text-muted-foreground">
                    Building the infrastructure for confidential computing where sensitive data
                    remains encrypted even during processing. We're creating a world where
                    privacy isn't a luxury, but a fundamental right built into the architecture.
                  </p>
                </div>
              </TabsContent>
              <TabsContent
                value="innovation"
                className="animate-in fade-in flex flex-col gap-6 duration-300"
              >
                <span className="text-muted-foreground text-xs uppercase">
                  Innovation
                </span>
                <div className="flex flex-col gap-4">
                  <h2 className="text-3xl font-medium">
                    Open Source. Decentralized. Future.
                  </h2>
                  <p className="text-muted-foreground">
                    Contributing to the decentralized ecosystem and pushing the boundaries of
                    TEE and blockchain technology. Our commitment to open source drives
                    innovation and enables developers worldwide to build the next generation
                    of privacy-preserving applications.
                  </p>
                </div>
              </TabsContent>
            </div>
            <ScrollableTabsList>
              <TabsList className="mx-auto h-12 rounded-full p-2 lg:mx-0">
                <TabsTrigger
                  value="mission"
                  className="h-full rounded-full px-4 py-2"
                >
                  Mission
                </TabsTrigger>
                <TabsTrigger
                  value="privacy"
                  className="h-full rounded-full px-4 py-2"
                >
                  Privacy First
                </TabsTrigger>
                <TabsTrigger
                  value="innovation"
                  className="h-full rounded-full px-4 py-2"
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
                {/* Polaroid stack for Mission */}
                <div className="relative h-[440px] w-full rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 lg:h-[540px] flex items-center justify-center overflow-visible">
                  {/* Background Polaroid - positioned to the left and back */}
                  <div className="absolute w-72 h-84 bg-white rounded-lg shadow-xl transform rotate-6 -translate-x-32 translate-y-12 z-0">
                    <div className="p-3 h-full">
                      <Image
                        src="/mission/IMG_1691.jpg"
                        alt="Team Photo"
                        width={280}
                        height={260}
                        className="w-full h-64 object-cover rounded"
                        unoptimized
                      />
                      <p className="text-center mt-2 text-sm text-gray-600 font-handwriting">Building together</p>
                    </div>
                  </div>

                  {/* Foreground Polaroid - positioned to the right and front */}
                  <div className="relative w-72 h-84 bg-white rounded-lg shadow-2xl transform -rotate-3 translate-x-32 -translate-y-12 z-20">
                    <div className="p-3 h-full">
                      <Image
                        src="/mission/20220414_110438.jpg"
                        alt="Team Photo"
                        width={280}
                        height={260}
                        className="w-full h-64 object-cover rounded"
                        unoptimized
                      />
                      <p className="text-center mt-2 text-sm text-gray-600 font-handwriting">Phala Network</p>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent rounded-b-3xl">
                  <div className="flex justify-between items-end text-white">
                    <div className="flex flex-col gap-1.5">
                      <p className="text-4xl font-medium lg:text-5xl">6+</p>
                      <p className="font-medium">years building in public</p>
                    </div>
                    <div className="flex flex-col gap-1.5 text-right">
                      <p className="text-4xl font-medium lg:text-5xl">30K+</p>
                      <p className="font-medium">commits from our global team</p>
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
                {/* Polaroid stack for Privacy */}
                <div className="relative h-[440px] w-full rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 lg:h-[540px] flex items-center justify-center overflow-visible">
                  {/* Background Polaroid - positioned to the left and back */}
                  <div className="absolute w-72 h-84 bg-white rounded-lg shadow-xl transform rotate-5 -translate-x-28 translate-y-8 z-0">
                    <div className="p-3 h-full">
                      <Image
                        src="/mission/IMG_7446.jpg"
                        alt="Team Privacy"
                        width={280}
                        height={260}
                        className="w-full h-64 object-cover rounded"
                        unoptimized
                      />
                      <p className="text-center mt-2 text-sm text-gray-600 font-handwriting">Secure by design</p>
                    </div>
                  </div>

                  {/* Foreground Polaroid - positioned to the right and front */}
                  <div className="relative w-72 h-84 bg-white rounded-lg shadow-2xl transform -rotate-4 translate-x-28 -translate-y-8 z-20">
                    <div className="p-3 h-full">
                      <Image
                        src="/mission/IMG_7490.jpg"
                        alt="Team Privacy"
                        width={280}
                        height={260}
                        className="w-full h-64 object-cover rounded"
                        unoptimized
                      />
                      <p className="text-center mt-2 text-sm text-gray-600 font-handwriting">Privacy first</p>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent rounded-b-3xl">
                  <div className="flex justify-between items-end text-white">
                    <div className="flex flex-col gap-1.5">
                      <p className="text-4xl font-medium lg:text-5xl">TEE</p>
                      <p className="font-medium">Trusted Execution Environment</p>
                    </div>
                    <div className="flex flex-col gap-1.5 text-right">
                      <p className="text-4xl font-medium lg:text-5xl">100%</p>
                      <p className="font-medium">confidential computing focus</p>
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
                {/* Polaroid stack for Innovation */}
                <div className="relative h-[440px] w-full rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 lg:h-[540px] flex items-center justify-center overflow-visible">
                  {/* Background Polaroid - positioned to the left and back */}
                  <div className="absolute w-72 h-84 bg-white rounded-lg shadow-xl transform rotate-3 -translate-x-30 translate-y-10 z-0">
                    <div className="p-3 h-full">
                      <Image
                        src="/mission/IMG_9884.jpg"
                        alt="Team Innovation"
                        width={280}
                        height={260}
                        className="w-full h-64 object-cover rounded"
                        unoptimized
                      />
                      <p className="text-center mt-2 text-sm text-gray-600 font-handwriting">Innovation hub</p>
                    </div>
                  </div>

                  {/* Foreground Polaroid - positioned to the right and front */}
                  <div className="relative w-72 h-84 bg-white rounded-lg shadow-2xl transform -rotate-2 translate-x-30 -translate-y-10 z-20">
                    <div className="p-3 h-full">
                      <Image
                        src="/mission/IMG_4083.jpg"
                        alt="Team Innovation"
                        width={280}
                        height={260}
                        className="w-full h-64 object-cover rounded"
                        unoptimized
                      />
                      <p className="text-center mt-2 text-sm text-gray-600 font-handwriting">Open source</p>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent rounded-b-3xl">
                  <div className="flex justify-between items-end text-white">
                    <div className="flex flex-col gap-1.5">
                      <p className="text-4xl font-medium lg:text-5xl">25+</p>
                      <p className="font-medium">global team members</p>
                    </div>
                    <div className="flex flex-col gap-1.5 text-right">
                      <p className="text-4xl font-medium lg:text-5xl">OSS</p>
                      <p className="font-medium">open source commitment</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export { PhalaMissionValues };
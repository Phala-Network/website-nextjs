"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Globe, Shield } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

type MaskType = "type-1" | "type-2" | "type-3" | "type-4";

const GpuTeeHero = () => {
  const images = [
    {
      src: "/banner-vision.png",
      alt: "GPU TEE Confidential Computing",
      name: "GPU TEE Platform",
    },
    {
      src: "/banner-Intel.png",
      alt: "Intel TDX Technology",
      name: "Intel TDX",
    },
    {
      src: "/banner-Nvidia.png",
      alt: "NVIDIA Confidential Computing",
      name: "NVIDIA GPU",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3500);

    return () => clearTimeout(timer);
  }, [currentIndex, images.length]);

  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-primary">
            <Shield className="size-4" />
            <span className="text-sm font-medium">Full-Stack TEE Protection</span>
          </div>

          <h1 className="text-5xl font-bold tracking-tight lg:text-7xl">
            Run Powerful AI GPUs,
            <br />
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              With Security
            </span>
          </h1>

          <p className="max-w-2xl text-lg text-muted-foreground lg:text-xl">
            Run NVIDIA H200/H100 workloads with complete hardware protection. The only cloud combining Intel TDX + NVIDIA Confidential Computing for end-to-end security.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="https://cloud.phala.network/dashboard/gpu-tee">Deploy GPU TEE Now</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#pricing">View Pricing</Link>
            </Button>
          </div>
        </div>

        <div className="relative mt-16">
          <div className="relative z-10 mx-auto my-7 flex w-fit cursor-pointer items-center justify-center gap-6 rounded-full bg-muted px-8 py-4 md:my-0 lg:translate-y-12 lg:gap-8 lg:px-12 lg:py-5">
            <Globe className="size-8 text-primary lg:size-10" />
            <div className="h-8 w-px bg-border lg:h-10" />
            <img src="/Intel_logo.svg" alt="Intel" className="h-8 lg:h-10" />
            <div className="h-8 w-px bg-border lg:h-10" />
            <img src="/nvidia.png" alt="NVIDIA" className="h-8 lg:h-10" />
          </div>

          <MaskedDiv maskType="type-3">
            <AnimatePresence mode="popLayout">
              <motion.img
                key={currentIndex}
                className="h-full w-full object-cover"
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 1.5 }}
              />
            </AnimatePresence>
          </MaskedDiv>

          <div className="absolute bottom-22 -left-8 hidden h-40 w-36 items-center justify-center overflow-hidden rounded-4xl border border-primary/20 bg-background/50 backdrop-blur-sm lg:flex xl:bottom-28 xl:h-48 2xl:-left-32 2xl:h-56 2xl:w-48 2xl:rounded-[4rem]">
            <AnimatePresence mode="popLayout">
              <motion.img
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5 }}
                src={images[(currentIndex + 1) % images.length].src}
                alt={images[(currentIndex + 1) % images.length].alt}
                className="h-full w-full object-cover"
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export { GpuTeeHero };

interface SvgPath {
  path: string;
  height: number;
  width: number;
}

interface MaskedDivProps {
  children: React.ReactElement<HTMLImageElement | HTMLVideoElement>;
  maskType?: MaskType;
  className?: string;
  backgroundColor?: string;
  size?: number;
}

const svgPaths: Record<MaskType, SvgPath> = {
  "type-1": {
    path: "M0.928955 40.9769C0.928955 18.9149 18.7917 1.01844 40.8536 0.976903L289.97 0.507853C308.413 0.473128 323.521 15.1483 324.022 33.5845L324.886 65.4007C325.955 104.745 358.022 136.159 397.38 136.417L432.98 136.65C447.818 136.748 459.797 148.799 459.803 163.637L459.982 550.982C459.992 573.08 442.08 591 419.982 591H40.9289C18.8376 591 0.928955 573.091 0.928955 551V40.9769Z",
    height: 591,
    width: 460,
  },
  "type-2": {
    path: "M0.811768 77.2118C0.811768 60.4225 14.4222 46.8121 31.2115 46.8121H180.95C192.496 46.8121 201.855 37.4527 201.855 25.9073V25.9073C201.855 11.9565 213.164 0.647217 227.115 0.647217H529.273C548.014 0.647217 563.206 15.8395 563.206 34.5802V34.5802C563.206 50.0897 575.779 62.6626 591.289 62.6626H820.388C837.177 62.6626 850.787 76.273 850.787 93.0623V350.953C850.787 367.742 837.177 381.353 820.388 381.353H366.165C349.852 381.353 336.627 368.128 336.627 351.814V351.814C336.627 335.501 323.402 322.276 307.089 322.276H31.2114C14.4222 322.276 0.811768 308.666 0.811768 291.876V77.2118Z",
    height: 381,
    width: 850,
  },
  "type-3": {
    path: "M0.680664 112.659C0.680664 50.805 50.823 0.662672 112.677 0.662672H413.07C456.315 0.662672 497.495 19.1588 526.221 51.4846V51.4846C554.948 83.8104 596.128 102.307 639.373 102.307H711.793C752.427 102.307 790.787 83.5522 815.744 51.4846V51.4846C840.7 19.417 879.06 0.662644 919.695 0.662597L1225.01 0.66224C1286.86 0.662168 1337.01 50.8046 1337.01 112.658V652.815C1337.01 714.668 1286.86 764.811 1225.01 764.811L670 764.811H335.34H278.376C217.423 764.811 168.01 715.399 168.01 654.446V626.747C168.01 580.208 130.283 542.48 83.7437 542.48V542.48C37.8692 542.48 0.680664 505.292 0.680664 459.417V382.737V112.659Z",
    height: 889,
    width: 1340,
  },
  "type-4": {
    path: "M0.811768 34.5451C0.811768 15.7441 16.053 0.502808 34.8541 0.502808H816.745C835.546 0.502808 850.787 15.7441 850.787 34.5452V242.977C850.787 261.778 835.546 277.019 816.745 277.019H638.293H550.537C527.035 277.019 504.789 266.407 490.001 248.141L486.211 243.46C453.263 202.765 390.688 204.378 359.881 246.717V246.717C346.027 265.756 323.901 277.019 300.355 277.019H213.306H34.8541C16.0531 277.019 0.811768 261.778 0.811768 242.977V34.5451Z",
    height: 278,
    width: 851,
  },
};

const MaskedDiv: React.FC<MaskedDivProps> = ({
  children,
  maskType = "type-1",
  className = "",
  backgroundColor = "transparent",
  size = 1,
}) => {
  const selectedMask = svgPaths[maskType];

  const svgString = `data:image/svg+xml,%3Csvg width='${selectedMask.width}' height='${selectedMask.height}' viewBox='0 0 ${selectedMask.width} ${selectedMask.height}' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fillRule='evenodd' clipRule='evenodd' d='${selectedMask.path}' fill='%23D9D9D9'/%3E%3C/svg%3E%0A`;

  const containerStyle: React.CSSProperties = {
    aspectRatio: `${selectedMask.width}/${selectedMask.height}`,
    backgroundColor,
    maskImage: `url("${svgString}")`,
    WebkitMaskImage: `url("${svgString}")`,
    maskRepeat: "no-repeat",
    WebkitMaskRepeat: "no-repeat",
    maskSize: "contain",
    WebkitMaskSize: "contain",
    width: `${size * 100}%`,
    maxWidth: "100%",
    margin: "0 auto",
  };

  return (
    <section className={`relative ${className}`} style={containerStyle}>
      {React.cloneElement(children, {
        className: `w-full h-full object-cover transition-all duration-300 ${
          children.props.className || ""
        }`,
      })}
    </section>
  );
};

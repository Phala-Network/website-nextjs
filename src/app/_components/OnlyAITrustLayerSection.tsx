import React from "react";

const imgEllipse1 = "http://localhost:3845/assets/a9bab2531e6db79f3b90c562c5bcfa21790efa53.png";
const imgEllipse2 = "http://localhost:3845/assets/94b0a89d9d4f4db6a139c21ee3974f7d1ef87242.png";
const imgEllipse22 = "http://localhost:3845/assets/32666f063f8f9aaddff21082a587bfb4f597718f.svg";
const imgGroup = "http://localhost:3845/assets/9350dba0a1a7957da67ebe13aefab53d381f5053.svg";
const imgGroup1 = "http://localhost:3845/assets/c37f2c482c390c436dade54300dc3cbcab0c1917.svg";
const imgFrame = "http://localhost:3845/assets/4c5a655e8f124c01bb08649227d5f622682046ee.svg";
const imgFrame1 = "http://localhost:3845/assets/2aaff35c0fc27f5446d1a0a31bd402e68ec9e2af.svg";
const imgFrame2 = "http://localhost:3845/assets/8270c125b1785e2086622b7e4494849892e36de4.svg";
const imgImage339 = "http://localhost:3845/assets/5045da53fab3577aa583ac31db1c55f854bbb843.png";
const imgEllipse23 = "http://localhost:3845/assets/b793a9fee1c16c2db458cf65176efc4a4bdcfaa4.svg";

const OnlyAITrustLayerSection: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center py-16 gap-8">
      {/* Title */}
      <h2 className="font-semibold text-[#1e2119] text-[48px] text-center tracking-[-1.056px] mb-8">The Only AI Trust Layer</h2>
      <div className="flex flex-row gap-8 w-full max-w-[1392px]">
        {/* Tabs */}
        <div className="bg-white h-44 rounded-2xl flex flex-row items-center justify-center w-[448px]">
          <div className="flex flex-row gap-6 items-center w-full justify-center">
            <div className="flex flex-row gap-2 items-center px-2 py-3">
              <span className="font-semibold text-[#1e2119] text-[24px] text-left tracking-[-0.456px]">Easy</span>
            </div>
            <div className="flex flex-row gap-2 items-center px-2 py-3">
              <span className="font-medium text-[#1e2119] text-[24px] text-left tracking-[-0.456px]">Open</span>
            </div>
            <div className="flex flex-row gap-2 items-center px-2 py-3">
              <span className="font-medium text-[#1e2119] text-[24px] text-left tracking-[-0.456px]">Private</span>
            </div>
          </div>
        </div>
        {/* Easy Build Card */}
        <div className="bg-[#c4f144] h-44 rounded-bl-[16px] rounded-br-[80px] rounded-tl-[16px] rounded-tr-[16px] flex flex-row items-center w-[920px] relative overflow-hidden">
          <div className="absolute flex h-[1099.376px] items-center justify-center left-[236px] top-[-177.995px] w-[1099.376px] pointer-events-none select-none">
            <div className="flex-none rotate-[293.139deg]">
              <div className="opacity-60 relative size-[837.615px]">
                <div className="absolute inset-[-23.877%]">
                  <img alt="ellipse" className="block max-w-none size-full" src={imgEllipse1} />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-12 items-center left-12 top-1/2 translate-y-[-50%] w-[717px] z-10">
            <span className="font-medium text-[#1e2119] text-[40px] text-left tracking-[-0.88px]">Easy</span>
            <div className="bg-[#1e2119] h-full rounded-full w-0.5" />
            <span className="font-normal text-[#61645b] text-[32px] text-left tracking-[-0.64px]">Build in Minutes, Not Months</span>
          </div>
        </div>
      </div>
      {/* Cards Row */}
      <div className="flex flex-row gap-8 w-full max-w-[1392px] mt-8">
        {/* Left Card */}
        <div className="bg-white h-[520px] rounded-2xl border border-[#cdfa50] border-solid flex flex-col justify-between w-[684px] p-8">
          <div className="font-semibold text-[#1e2119] text-[20px] text-left tracking-[-0.34px] w-[365px] mb-4">
            Write code, dockerize, and deploy it as trustless TEE apps.
          </div>
          <div className="bg-[#0d0d0d] flex flex-row gap-2.5 h-10 items-center justify-center px-6 py-[11px] rounded-full w-[120px] mb-4">
            <span className="font-semibold text-white text-[14px] text-center tracking-[-0.084px]">Try Now</span>
          </div>
          <div className="bg-[#c4f144] h-[321.36px] w-full rounded-2xl flex flex-col justify-center items-center relative overflow-hidden">
            <div className="absolute flex h-[678.571px] items-center justify-center left-[139px] top-[-108px] w-[678.571px] pointer-events-none select-none">
              <div className="flex-none rotate-[293.139deg]">
                <div className="opacity-60 relative size-[517px]">
                  <div className="absolute inset-[-38.685%]">
                    <img alt="ellipse" className="block max-w-none size-full" src={imgEllipse2} />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white h-[304px] rounded-2xl flex flex-col justify-center items-center w-[604px] relative z-10">
              <div className="font-medium text-[#0d0d0d] text-[24px] text-left tracking-[-0.264px] w-[402px] mb-4">
                # Deploy the webshell Dstack example phala cvms create
              </div>
              <div className="flex flex-row gap-2 absolute left-3 top-3">
                <img alt="dot" className="block max-w-none size-4" src={imgEllipse22} />
                <img alt="dot" className="block max-w-none size-4" src={imgEllipse22} />
                <img alt="dot" className="block max-w-none size-4" src={imgEllipse22} />
              </div>
            </div>
          </div>
        </div>
        {/* Middle Card */}
        <div className="bg-white h-[520px] rounded-2xl border border-[#cdfa50] border-solid flex flex-col justify-between w-[329px] p-8">
          <div className="font-semibold text-[#1e2119] text-[20px] text-left tracking-[-0.34px] w-[226px] mb-4">
            We deal with the pain of hardware maintenance
          </div>
          <div className="flex flex-row gap-4 items-center mb-4">
            <div className="rounded-full border border-[#d8dad4] size-16 flex items-center justify-center">
              <img alt="frame" className="block max-w-none size-10" src={imgFrame} />
            </div>
            <div className="rounded-full border border-[#d8dad4] size-16 flex items-center justify-center">
              <img alt="frame" className="block max-w-none size-10" src={imgFrame1} />
            </div>
            <div className="rounded-full border border-[#d8dad4] size-16 flex items-center justify-center">
              <img alt="frame" className="block max-w-none size-10" src={imgFrame2} />
            </div>
          </div>
          <div className="font-medium text-[#61645b] text-[14px] text-left tracking-[-0.154px] w-full">
            have their own TEE
          </div>
          <div className="bg-[#0d0d0d] flex flex-row gap-2.5 h-10 items-center justify-center px-6 py-[11px] rounded-full w-[120px] mt-4">
            <span className="font-semibold text-white text-[14px] text-center tracking-[-0.084px]">See Hardware</span>
          </div>
        </div>
        {/* Right Card */}
        <div className="bg-white h-[520px] rounded-2xl border border-[#cdfa50] border-solid flex flex-col justify-between w-[330px] p-8">
          <div className="font-semibold text-[#1e2119] text-[20px] text-left tracking-[-0.34px] w-[226px] mb-4">
            Deploy production-grade TEE workloads in minutes.
          </div>
          <div className="bg-white h-[382px] rounded-2xl flex flex-col justify-center items-center w-[604px] relative overflow-hidden mb-4">
            <div className="flex flex-row gap-2 absolute left-4 top-4">
              <img alt="dot" className="block max-w-none size-2" src={imgEllipse23} />
              <img alt="dot" className="block max-w-none size-2" src={imgEllipse23} />
              <img alt="dot" className="block max-w-none size-2" src={imgEllipse23} />
            </div>
            <div className="bg-no-repeat h-[373px] w-[472px]" style={{ backgroundImage: `url('${imgImage339}')` }} />
          </div>
          <div className="bg-[#0d0d0d] flex flex-row gap-2.5 h-10 items-center justify-center px-6 py-[11px] rounded-full w-[120px] mt-4">
            <span className="font-semibold text-white text-[14px] text-center tracking-[-0.084px]">Browse Templates</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnlyAITrustLayerSection; 
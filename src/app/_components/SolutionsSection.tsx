import React from "react";

const imgEllipse1 = "http://localhost:3845/assets/a9bab2531e6db79f3b90c562c5bcfa21790efa53.png";
const imgVector = "http://localhost:3845/assets/6ca4d186c906d212aa08a1d1854ffc9e430b14fc.svg";
const imgFrame3 = "http://localhost:3845/assets/ea668913d179f8aacbd5e322833632916f8d23e0.svg";

const SolutionsSection: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center py-16 gap-8">
      <div className="flex flex-row items-center justify-between w-full max-w-[1392px] px-6">
        <span className="font-semibold text-[#1e2119] text-5xl text-left text-nowrap tracking-[-1.056px]">Solutions</span>
        <div className="bg-[#c4f144] flex flex-row gap-2.5 h-12 items-center justify-center px-6 py-[11px] rounded-full w-60">
          <span className="font-semibold text-[#1e2119] text-sm text-center tracking-[-0.084px]">View All Products</span>
        </div>
      </div>
      {/* Main Card Row */}
      <div className="flex flex-row gap-6 h-[367px] items-center justify-center w-full max-w-[1392px]">
        {/* Left Card */}
        <div className="bg-[#c4f144] h-full overflow-clip rounded-bl-[16px] rounded-br-[80px] rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-[448px] relative flex items-center justify-center">
          <div className="absolute flex h-[1099.376px] items-center justify-center left-[-35px] top-[-145px] w-[1099.376px] pointer-events-none select-none">
            <div className="flex-none rotate-[293.139deg]">
              <div className="opacity-60 relative size-[837.615px]">
                <div className="absolute inset-[-23.877%]">
                  <img alt="ellipse" className="block max-w-none size-full" src={imgEllipse1} />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full">
            <img alt="vector" className="block max-w-none" src={imgVector} />
            <span className="font-medium text-white text-3xl text-left text-nowrap tracking-[-0.544px] mt-4">Cloud platform</span>
          </div>
        </div>
        {/* Main Card */}
        <div className="bg-white grow h-full min-h-px min-w-px overflow-clip rounded-2xl shrink-0 relative flex flex-col justify-between">
          <div className="flex flex-col gap-4 items-start px-12 pt-12">
            <span className="font-semibold text-[#1e2119] text-3xl tracking-[-0.64px]">Phala Cloud</span>
            <span className="font-normal text-[#61645b] text-base text-nowrap tracking-[-0.176px]">All-in-one confidential compute platform for AI workloads</span>
          </div>
          <div className="bg-[#c4f144] flex flex-row items-center justify-between mx-auto my-8 p-2 rounded-full w-[840px]">
            <div className="flex flex-row gap-3.5 items-center px-4 text-[#1a1a1a] text-xl text-left tracking-[-0.34px]">
              <span className="font-medium">Starting at</span>
              <span className="font-bold">$50.37/month</span>
            </div>
            <div className="bg-[#0d0d0d] flex flex-row gap-2.5 h-10 items-center justify-center px-6 py-[11px] rounded-full">
              <span className="font-semibold text-white text-sm text-center tracking-[-0.084px]">Start Building</span>
            </div>
          </div>
        </div>
      </div>
      {/* Model Cards Row */}
      <div className="flex flex-row gap-6 h-[366px] items-center justify-center w-full max-w-[1392px]">
        {/* Model Card */}
        <div className="bg-white grow h-full min-h-px min-w-px overflow-clip rounded-2xl shrink-0 relative flex flex-col justify-between">
          <div className="flex flex-col h-[270px] items-start justify-between px-12 pt-12">
            <span className="font-semibold text-[#1a1a1a] text-3xl text-nowrap tracking-[-0.64px]">Confidential <br />AI Models</span>
            <span className="font-normal text-[#61645b] text-base tracking-[-0.176px] w-60">Pre-configured secure AI models ready to deploy</span>
            <div className="bg-[#0d0d0d] flex flex-row gap-2.5 h-10 items-center justify-center px-6 py-[11px] rounded-full mt-4">
              <span className="font-semibold text-white text-sm text-center tracking-[-0.084px]">Browse Models</span>
            </div>
          </div>
        </div>
        {/* Model List Card */}
        <div className="bg-[#8dd7ff] h-full overflow-clip rounded-2xl shrink-0 w-[1038px] relative flex items-center">
          <div className="flex flex-row gap-4 items-center pl-8 pt-8">
            {["Llama-3.1-8B", "GPT-4o-mini", "GPT-4o-mini", "Custmon Model"].map((model, i) => (
              <div key={model + i} className="bg-white h-[302px] overflow-clip rounded-lg w-60 relative flex flex-col justify-between">
                <span className="font-semibold left-6 text-[#1e2119] text-2xl text-left top-[163px] tracking-[-0.456px] mt-8">{model}</span>
                <div className="flex flex-col gap-2 items-start left-6 top-[232px] text-[#1e2119] text-base text-left tracking-[-0.176px] ml-6 mt-2">
                  <span className="font-normal">Price</span>
                  <span className="font-bold">{model === "Custmon Model" ? "Quote" : "$50.37/month"}</span>
                </div>
                <div className="bg-white left-6 rounded-full size-16 top-6 border border-[#d8dad4] border-solid flex items-center justify-center ml-6 mt-6">
                  <img alt="model-icon" className="block max-w-none size-10 mx-auto" src={imgFrame3} />
                </div>
                <div className="flex h-12 items-center justify-center mt-2 ml-auto mr-6">
                  <div className="flex-none rotate-[270deg]">
                    <div className="bg-[#f0f1ee] flex flex-row gap-2 items-center p-3 rounded-full">
                      <span className="block w-6 h-6 bg-gray-300 rounded-full" />
                    </div>
                  </div>
                </div>
                <div className="bg-[#10a37f] h-1 left-6 rounded-full top-[200px] w-6 ml-6 mt-2" />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Dstack Card Row */}
      <div className="flex flex-row gap-6 h-[367px] items-center justify-center w-full max-w-[1392px]">
        {/* Dstack Card */}
        <div className="bg-[#aabbff] h-full overflow-clip rounded-bl-[16px] rounded-br-[16px] rounded-tl-[80px] rounded-tr-[16px] shrink-0 w-[566px] relative flex items-center justify-center">
          <div className="flex flex-col items-center justify-center w-full">
            <img alt="logo" className="block max-w-none size-[47px]" src={imgFrame3} />
            <span className="font-semibold text-white text-3xl text-left text-nowrap tracking-[-0.544px] mt-4">Free & Open Source</span>
          </div>
        </div>
        {/* Dstack Main Card */}
        <div className="bg-white grow h-full min-h-px min-w-px overflow-clip rounded-2xl shrink-0 relative flex flex-col justify-between">
          <div className="flex flex-col h-[270px] items-start justify-between px-12 pt-12">
            <span className="font-semibold text-[#1a1a1a] text-3xl text-left tracking-[-0.64px]">Dstack</span>
            <span className="font-normal text-[#61645b] text-base text-left text-nowrap tracking-[-0.176px]">Open-source TEE orchestration framework</span>
            <div className="bg-[#0d0d0d] flex flex-row gap-2.5 h-10 items-center justify-center px-6 py-[11px] rounded-full mt-4">
              <span className="font-semibold text-white text-sm text-center tracking-[-0.084px]">Download Framework</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection; 
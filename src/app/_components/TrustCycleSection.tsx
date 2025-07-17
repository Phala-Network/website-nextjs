import React from "react";

const imgEllipse2 = "http://localhost:3845/assets/94b0a89d9d4f4db6a139c21ee3974f7d1ef87242.png";
const imgEllipse3 = "http://localhost:3845/assets/576445fc77073ffb4eacf09d3b0abd3051d7dcb7.png";
const imgEllipse4 = "http://localhost:3845/assets/1991e06f73de6490d51236e76309ba7d9f4f1cf4.png";
const imgVector132 = "http://localhost:3845/assets/db63b2b93c4bf83635f25754bf86764f40ca086e.svg";
const imgVector133 = "http://localhost:3845/assets/fcc08b0f60191cdeea842e930b044eca5ec3bba9.svg";
const imgFrame3 = "http://localhost:3845/assets/ea668913d179f8aacbd5e322833632916f8d23e0.svg";
const imgFrame7 = "http://localhost:3845/assets/1151d343d0f95828823ebfa5450bdc6442adf6cc.svg";
const imgFrame47630 = "http://localhost:3845/assets/485f9c591a8875e05b3e15783b7d25bc6586575d.svg";
const imgFrame47632 = "http://localhost:3845/assets/c409aca5e61ab15d1ce37fbb9bceab3551326ad3.svg";

const TrustCycleSection: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center py-16 gap-8">
      {/* Top Card */}
      <div className="bg-white h-44 rounded-bl-[16px] rounded-br-[80px] rounded-tl-[16px] rounded-tr-[16px] w-full max-w-[920px] flex flex-col justify-center px-12 mb-8">
        <span className="font-bold text-[#1e2119] text-[32px] mb-2">When Your Users Trust AI</span>
        <span className="font-normal text-[#61645b] text-[18px]">Trust creates a powerful cycle that drives business growth and market leadership</span>
      </div>
      {/* Trust Cycle Cards */}
      <div className="flex flex-row gap-8 w-full max-w-[1394px] items-start">
        {/* Left Card */}
        <div className="bg-[#cdfa50] rounded-2xl w-[448px] flex flex-col items-center py-12 relative overflow-hidden">
          <div className="opacity-60 absolute left-[-126px] top-[39px] size-[517px] pointer-events-none select-none">
            <img alt="ellipse" className="block max-w-none size-full" src={imgEllipse2} />
          </div>
          <span className="font-medium text-white text-[128px] text-left text-nowrap tracking-[-5.12px]">1</span>
          <span className="font-semibold text-white text-[24px] text-left tracking-[-0.456px] w-[283px] mt-4">Trust AI</span>
          <span className="font-normal text-white text-[16px] text-left tracking-[-0.176px] w-[283px] mt-2">Users gain confidence in AI systems with verifiable security</span>
          <div className="w-full flex justify-center mt-4">
            <img alt="vector" className="block max-w-none" src={imgVector132} />
          </div>
        </div>
        {/* Middle Card */}
        <div className="bg-[#8dd7ff] rounded-2xl w-[448px] flex flex-col items-center py-12 relative overflow-hidden">
          <div className="opacity-60 absolute left-[-297px] top-0 size-[955px] pointer-events-none select-none">
            <img alt="ellipse" className="block max-w-none size-full" src={imgEllipse3} />
          </div>
          <span className="font-medium text-white text-[128px] text-left text-nowrap tracking-[-5.12px]">2</span>
          <span className="font-semibold text-white text-[24px] tracking-[-0.456px] mt-4">Unlock Use Cases</span>
          <span className="font-normal text-white text-[16px] mt-2">Enable sensitive data processing previously impossible</span>
          <div className="w-full flex justify-center mt-4">
            <img alt="vector" className="block max-w-none" src={imgVector132} />
          </div>
        </div>
        {/* Right Card */}
        <div className="flex flex-col gap-8 w-[498px]">
          <div className="bg-[#aabbff] rounded-2xl h-[504px] flex flex-col items-center py-12 relative overflow-hidden">
            <div className="opacity-60 absolute left-[-384px] top-[-73px] size-[768px] pointer-events-none select-none">
              <img alt="ellipse" className="block max-w-none size-full" src={imgEllipse4} />
            </div>
            <span className="font-medium text-white text-[128px] text-left text-nowrap tracking-[-5.12px]">3</span>
            <span className="font-semibold text-white text-[24px] mt-4">Win the Market</span>
            <span className="font-normal text-white text-[16px] mt-2">Trust drives adoption, revenue, and competitive advantage</span>
            <div className="w-full flex justify-center mt-4">
              <img alt="vector" className="block max-w-none" src={imgVector133} />
            </div>
          </div>
          <div className="bg-white rounded-2xl h-28 flex flex-row items-center px-8">
            <span className="font-semibold text-[#1e2119] text-[24px] text-left tracking-[-0.456px]">Reinforces Trust</span>
            <img alt="icon" className="ml-auto size-12" src={imgFrame7} />
          </div>
        </div>
      </div>
      {/* Connectors */}
      <div className="flex flex-row gap-8 w-full max-w-[1394px] items-center mt-8">
        <img alt="connector" className="size-16" src={imgFrame47630} />
        <img alt="connector" className="size-16" src={imgFrame47630} />
        <img alt="connector" className="size-16" src={imgFrame47632} />
      </div>
    </section>
  );
};

export default TrustCycleSection; 
import React from "react";

const imgVector132 = "http://localhost:3845/assets/db63b2b93c4bf83635f25754bf86764f40ca086e.svg";
const imgVector133 = "http://localhost:3845/assets/fcc08b0f60191cdeea842e930b044eca5ec3bba9.svg";
const imgFrame7 = "http://localhost:3845/assets/1151d343d0f95828823ebfa5450bdc6442adf6cc.svg";
const imgFrame47630 = "http://localhost:3845/assets/485f9c591a8875e05b3e15783b7d25bc6586575d.svg";
const imgFrame47632 = "http://localhost:3845/assets/c409aca5e61ab15d1ce37fbb9bceab3551326ad3.svg";

const TrustCycleSection: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center py-16 gap-8">
      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-8 w-full max-w-[1394px]">
        {/* Top Card - spans 2 columns */}
        <div className="bg-white rounded-bl-[16px] rounded-br-[80px] rounded-tl-[16px] rounded-tr-[16px] md:col-span-2 md:col-start-1 md:row-start-1 flex flex-col justify-center px-12 py-8">
          <span className="font-bold text-[#1e2119] text-3xl mb-2">When Your Users Trust AI</span>
          <span className="font-normal text-[#61645b] text-lg">Trust creates a powerful cycle that drives business growth and market leadership</span>
        </div>
        
        {/* Right Card - spans 2 rows */}
        <div className="bg-[#aabbff] rounded-2xl md:row-span-2 md:col-start-3 md:row-start-1 flex flex-col items-center py-12 relative overflow-hidden">
          <span className="font-medium text-white text-[128px] text-left text-nowrap tracking-[-5.12px]">3</span>
          <span className="font-semibold text-white text-2xl mt-4">Win the Market</span>
          <span className="font-normal text-white text-base mt-2">Trust drives adoption, revenue, and competitive advantage</span>
          <div className="w-full flex justify-center mt-4">
            <img alt="vector" className="block max-w-none" src={imgVector133} />
          </div>
        </div>
        
        {/* Left Card - spans 2 rows */}
        <div className="bg-[#cdfa50] rounded-2xl md:row-span-2 md:col-start-1 md:row-start-2 flex flex-col items-center py-12 relative overflow-hidden">
          <span className="font-medium text-white text-[128px] text-left text-nowrap tracking-[-5.12px]">1</span>
          <span className="font-semibold text-white text-2xl text-left tracking-[-0.456px] w-[283px] mt-4">Trust AI</span>
          <span className="font-normal text-white text-base text-left tracking-[-0.176px] w-[283px] mt-2">Users gain confidence in AI systems with verifiable security</span>
          <div className="w-full flex justify-center mt-4">
            <img alt="vector" className="block max-w-none" src={imgVector132} />
          </div>
        </div>
        
        {/* Middle Card */}
        <div className="bg-[#8dd7ff] rounded-2xl md:row-span-2 md:col-start-2 md:row-start-2 flex flex-col items-center py-12 relative overflow-hidden">
          <span className="font-medium text-white text-[128px] text-left text-nowrap tracking-[-5.12px]">2</span>
          <span className="font-semibold text-white text-2xl tracking-[-0.456px] mt-4">Unlock Use Cases</span>
          <span className="font-normal text-white text-base mt-2">Enable sensitive data processing previously impossible</span>
          <div className="w-full flex justify-center mt-4">
            <img alt="vector" className="block max-w-none" src={imgVector132} />
          </div>
        </div>
        
        {/* Bottom Card */}
        <div className="bg-white rounded-2xl md:col-start-3 md:row-start-3 flex flex-row items-center px-8 py-6">
          <span className="font-semibold text-[#1e2119] text-2xl text-left tracking-[-0.456px]">Reinforces Trust</span>
          <img alt="icon" className="ml-auto size-12" src={imgFrame7} />
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
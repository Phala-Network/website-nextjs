import React from "react";

const imgEllipse5 = "http://localhost:3845/assets/8b36b8c134cd919da90dccda21a033c769034f20.png";
const imgEllipse7 = "http://localhost:3845/assets/32b0a40a10be6affa4a2c9379493f0bc4478d838.png";
const imgEllipse8 = "http://localhost:3845/assets/0ae51ade7903622bc833f6a58f307b5417989b28.png";
const imgEllipse9 = "http://localhost:3845/assets/3c82831cda2f29fa8ddfafa97a27a5ae729412bd.png";
const imgFrame4 = "http://localhost:3845/assets/bf6be6f1fe8ed9de0d8d2888186f114df735bab9.svg";
const imgFrame5 = "http://localhost:3845/assets/9ae6014c81aecca67e6a6dd8e6d421d5db2483b3.svg";
const imgFrame6 = "http://localhost:3845/assets/c62c764f348e268b14c3deb4648a99dad0d71935.svg";

const IndustryTrustSection: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center py-16 gap-8">
      <h2 className="font-semibold text-[#1e2119] text-5xl text-left tracking-[-1.056px] mb-8">AI Trust Across Industries</h2>
      <div className="flex flex-row gap-6 items-center justify-center w-full max-w-[1392px]">
        {/* Financial Services */}
        <div className="bg-[#2093d0] h-[394px] overflow-clip rounded-2xl w-[330px] flex flex-col relative">
          <div className="flex-1 flex flex-col justify-between p-8">
            <span className="font-semibold text-white text-2xl text-left tracking-[-0.456px]">Financial Services</span>
            <span className="font-normal text-white text-sm text-left tracking-[-0.154px] mt-4">Run risk models on sensitive financial data with verifiable security. Prove data isolation to auditors.</span>
            <div className="flex flex-row gap-3 items-start mt-4">
              {[imgFrame4, imgFrame5, imgFrame6, imgFrame6].map((src, i) => (
                <div key={i} className="bg-white rounded-full size-[51.2px] flex items-center justify-center">
                  <img alt="icon" className="block max-w-none size-8" src={src} />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Data Collaboration */}
        <div className="bg-[#435ec9] h-[394px] overflow-clip rounded-2xl w-[330px] flex flex-col relative">
          <div className="flex-1 flex flex-col justify-between p-8">
            <span className="font-semibold text-white text-2xl text-left tracking-[-0.456px]">Data Collaboration</span>
            <span className="font-normal text-white text-sm text-left tracking-[-0.154px] mt-4">Enable secure multi-party AI training without exposing sensitive datasets. Perfect for research consortiums.</span>
            <div className="flex flex-row gap-3 items-start mt-4">
              {[imgFrame4, imgFrame5, imgFrame6, imgFrame6].map((src, i) => (
                <div key={i} className="bg-white rounded-full size-[51.2px] flex items-center justify-center">
                  <img alt="icon" className="block max-w-none size-8" src={src} />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* AI SaaS */}
        <div className="bg-[#33d36e] h-[394px] overflow-clip rounded-2xl w-[330px] flex flex-col relative">
          <div className="flex-1 flex flex-col justify-between p-8">
            <span className="font-semibold text-white text-2xl text-left tracking-[-0.456px]">AI SaaS</span>
            <span className="font-normal text-white text-sm text-left tracking-[-0.154px] mt-4">Build AI features your enterprise customoers can trust. Provide verifiable security guarantees.</span>
            <div className="flex flex-row gap-3 items-start mt-4">
              {[imgFrame4, imgFrame5, imgFrame6, imgFrame6].map((src, i) => (
                <div key={i} className="bg-white rounded-full size-[51.2px] flex items-center justify-center">
                  <img alt="icon" className="block max-w-none size-8" src={src} />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Web3 */}
        <div className="bg-[#6cbd36] h-[394px] overflow-clip rounded-2xl w-[330px] flex flex-col relative">
          <div className="flex-1 flex flex-col justify-between p-8">
            <span className="font-semibold text-white text-2xl text-left tracking-[-0.456px]">Web3</span>
            <span className="font-normal text-white text-sm text-left tracking-[-0.154px] mt-4">Power decentralized AI with trustless infrastructure. Enable autonomous agents with verifiable execution.</span>
            <div className="flex flex-row gap-3 items-start mt-4">
              {[imgFrame4, imgFrame5, imgFrame6, imgFrame6].map((src, i) => (
                <div key={i} className="bg-white rounded-full size-[51.2px] flex items-center justify-center">
                  <img alt="icon" className="block max-w-none size-8" src={src} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-end w-full max-w-[1392px] mt-8">
        <div className="bg-[#c4f144] flex flex-row gap-2.5 h-12 items-center justify-center px-6 py-[11px] rounded-full w-60">
          <span className="font-semibold text-[#1e2119] text-sm text-center tracking-[-0.084px]">Discover All Use Cases</span>
        </div>
      </div>
    </section>
  );
};

export default IndustryTrustSection; 
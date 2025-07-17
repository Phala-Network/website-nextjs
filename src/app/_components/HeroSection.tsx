import React from "react";

// Image constants (should be imported or defined at the top level in a real project)
const imgImage347 = "http://localhost:3845/assets/efd8a36288b1143a7ec5d26b6ec32b04a18812f3.png";
const imgEllipse6 = "http://localhost:3845/assets/1239103f7f3ce6ef1ea9f07e5ef757a5f6d392d3.svg";
const img = "http://localhost:3845/assets/c759d0d951edeaf704995b79022082aae8396be1.svg";
const img1 = "http://localhost:3845/assets/6aa40e85bda913f324baa16fe94021da6e7073d9.svg";

const HeroSection: React.FC = () => {
  return (
    <section className="w-full flex justify-center py-16 relative overflow-hidden">
      <div className="bg-[#f0f1ee] h-[800px] w-[1392px] overflow-clip rounded-bl-[16px] rounded-br-[96px] rounded-tl-[16px] rounded-tr-[16px] flex flex-col items-center relative">
        <div
          className="absolute bg-center bg-cover bg-no-repeat h-[1012px] left-[-86px] top-0 w-[1564px] z-0"
          style={{ backgroundImage: `url('${imgImage347}')` }}
        />
        <div className="relative z-10 flex flex-col gap-8 items-center justify-center pt-32">
          {/* Badge */}
          <div className="bg-[rgba(255,255,255,0.48)] flex flex-row gap-2 items-center justify-center p-2 relative rounded-full shrink-0">
            <div className="absolute border-white border-[0.5px] border-solid inset-0 pointer-events-none rounded-full" />
            <div className="relative shrink-0 size-4">
              <img alt="Safe AGI" className="block max-w-none size-full" src={imgEllipse6} />
            </div>
            <div className="flex flex-col font-medium justify-center leading-none relative shrink-0 text-white text-[14px] text-left tracking-[-0.084px] w-[67px]">
              <p className="block leading-[1.2]">Safe AGI</p>
            </div>
          </div>
          {/* Headline */}
          <div className="flex flex-row gap-4 items-center justify-center w-full">
            <div className="figma-font-montserrat figma-bold figma-headline-40" style={{color: 'var(--figma-light)'}}>
              <p className="block leading-[1.2] whitespace-pre">BUILD AI</p>
            </div>
            <div className="bg-[rgba(0,0,0,0.48)] flex flex-row gap-2 items-center justify-center px-4 py-1.5 rounded-xl">
              <div className="figma-font-montserrat figma-bold figma-headline-40" style={{color: 'var(--figma-light)'}}>
                <p className="block leading-[1.2] whitespace-pre">PEOPLE CAN TRUST</p>
              </div>
            </div>
          </div>
          <div className="figma-font-montserrat figma-semibold figma-headline-32" style={{color: 'var(--figma-light)'}}>
            <p className="block leading-[1.2] whitespace-pre">Deploy today, trust AI instantly.</p>
          </div>
        </div>
        {/* Buttons */}
        <div className="relative z-10 flex flex-row gap-4 items-center justify-center mt-12">
          <div className="bg-[#c4f144] flex flex-row gap-2.5 h-12 items-center justify-center px-6 py-[11px] rounded-full w-40">
            <div className="figma-font-montserrat figma-semibold figma-headline-14" style={{color: 'var(--figma-dark)'}}>
              <p className="block leading-[1.2] whitespace-pre">Get Start</p>
            </div>
          </div>
          <div className="bg-white flex flex-row gap-2.5 h-12 items-center justify-center px-6 py-[11px] rounded-full w-40">
            <div className="figma-font-montserrat figma-semibold figma-headline-14" style={{color: 'var(--figma-dark)'}}>
              <p className="block leading-[1.2] whitespace-pre">Request Demo</p>
            </div>
          </div>
        </div>
        {/* Arrow Down */}
        <div className="relative z-10 flex flex-row gap-2 items-center justify-center mt-16">
          <div className="relative shrink-0 size-6">
            <div className="absolute bottom-[16.667%] left-[45.833%] right-[45.833%] top-[16.667%]">
              <img alt="Arrow Down" className="block max-w-none size-full" src={img} />
            </div>
            <div className="absolute bottom-[16.667%] left-[16.667%] right-[16.667%] top-[45.833%]">
              <img alt="Arrow Down" className="block max-w-none size-full" src={img1} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 
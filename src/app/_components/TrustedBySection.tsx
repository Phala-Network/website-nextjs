import React from "react";

const imgFrame47674 = "http://localhost:3845/assets/2fac352039001923d5472266889e225eb9605a8e.svg";
const imgFrame47684 = "http://localhost:3845/assets/d495de81c6dd87aff730e520c484dc86ddfb958c.svg";
const imgFrame47685 = "http://localhost:3845/assets/eb2abef241a36c7c3f815c6499fb17526521d5ad.svg";
const imgFrame47686 = "http://localhost:3845/assets/a28ee8398f274cbf85962bb6926caee8327b2bb6.svg";
const imgFrame47687 = "http://localhost:3845/assets/d3be44daed5143f498775f9321cd5e81519145cc.svg";
const imgFrame47688 = "http://localhost:3845/assets/66a434a5e3d65bb2961676ffb46df9f1930c5609.svg";
const imgFrame47689 = "http://localhost:3845/assets/41b332b6707af76794eb7628d18021c13495ef9b.svg";
const imgFrame47690 = "http://localhost:3845/assets/c3a5ef78811829091d55252868df9a208234cb7e.svg";
const imgFrame47691 = "http://localhost:3845/assets/e840a06749ae50cd85e2172a21e2607b62c41bf9.svg";
const imgFrame47692 = "http://localhost:3845/assets/18f6cb874bf709c7cd9789f8d99bc0727129bbb2.svg";

const TrustedBySection: React.FC = () => {
  return (
    <section className="w-full flex flex-col gap-16 items-center justify-start py-16">
      <div className="flex flex-col gap-6 items-center w-[854px]">
        <div className="flex flex-row gap-4 items-center text-[48px] text-left tracking-[-1.056px] w-full">
          <span className="font-semibold text-[#1e2119]">Trusted By More Than</span>
          <span className="font-bold text-[#bae730]">50,000</span>
          <span className="font-semibold text-[#1e2119]">Users</span>
        </div>
        <div className="font-medium text-[#61645b] text-[18px] text-center tracking-[-0.306px] w-full">
          Trusted by industry leaders and developers worldwide
        </div>
      </div>
      <div className="flex flex-row gap-9 items-center w-full justify-center">
        {[imgFrame47674, imgFrame47684, imgFrame47685, imgFrame47686, imgFrame47687, imgFrame47688, imgFrame47689, imgFrame47690, imgFrame47691, imgFrame47692].map((src, i) => (
          <img key={i} alt={`logo-${i}`} className="size-[104px]" src={src} />
        ))}
      </div>
      <div className="flex flex-row gap-4 items-center">
        <div className="bg-[#c4f144] flex flex-row gap-2.5 h-12 items-center justify-center px-6 py-[11px] rounded-full w-60">
          <span className="font-semibold text-[#1e2119] text-[14px] text-center tracking-[-0.084px]">Explore All TEE Apps</span>
        </div>
        <div className="bg-[#1e2119] flex flex-row gap-2.5 h-12 items-center justify-center px-6 py-[11px] rounded-full w-60">
          <span className="font-semibold text-white text-[14px] text-center tracking-[-0.084px]">Explore Cases</span>
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection; 
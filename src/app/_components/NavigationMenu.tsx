import React from "react";

const imgGroup6 = "http://localhost:3845/assets/916dd16a6ae162a0538265fe3a5139204586a9c7.svg";
const imgVector1 = "http://localhost:3845/assets/8f368ac24f4e3baf0bdef3a3f92fccf331bdb554.svg";
const imgIcon = "http://localhost:3845/assets/3a471c132c1750971c4af8f0474182c08178e1ba.svg";
const imgIcon1 = "http://localhost:3845/assets/4d4435b09e6734fce34500da95aea36c2bde4d57.svg";
const imgIcon2 = "http://localhost:3845/assets/8a70ffd05a5b798133bb049c857a2e16a4eb209c.svg";

const navItems = [
  "AI Solutions",
  "Developers",
  "Security",
  "Network",
  "Enterprise",
];

const NavigationMenu: React.FC = () => {
  return (
    <nav className="w-full max-w-[1440px] flex flex-row items-center justify-between px-12 py-6 sticky top-0 bg-transparent z-20">
      <div className="h-12 relative shrink-0 w-[137.867px]">
        <img alt="Logo" className="block max-w-none size-full" src={imgGroup6} />
      </div>
      <div className="flex flex-row gap-9 items-center justify-end">
        {navItems.map((item) => (
          <div key={item} className="flex flex-row gap-1.5 items-center">
            <div className="flex flex-col font-normal justify-center leading-none text-white text-sm text-center tracking-[-0.084px]">
              <p className="block leading-[1.2] whitespace-pre">{item}</p>
            </div>
            <div className="h-1 w-2 relative">
              <div className="absolute bottom-[-17.678%] left-[-6.25%] right-[-6.25%] top-[-12.5%]">
                <img alt="Dropdown" className="block max-w-none size-full" src={imgVector1} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-row gap-3 items-center">
        <img alt="icon" className="block max-w-none size-8" src={imgIcon} />
        <img alt="icon" className="block max-w-none size-8" src={imgIcon1} />
        <img alt="icon" className="block max-w-none size-8" src={imgIcon2} />
      </div>
    </nav>
  );
};

export default NavigationMenu; 
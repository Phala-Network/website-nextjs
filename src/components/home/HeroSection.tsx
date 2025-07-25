import React from 'react';

const img1 = "/35503d92787ce72572e1635553e0387a404073fc.png";
const imgEllipse1 = "/6cf77313e324c7b297c1f0b4aa19d44095758a29.svg";
const imgEllipse2 = "/ccb13953b92501cd038b2feb8c58fb43277b523b.svg";

export default function HeroSection() {
  return (
    <div className="bg-white min-h-screen w-full">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h1 className="font-bold text-4xl lg:text-5xl text-gray-900 leading-tight tracking-tight">
                The New Cloud for
                <br />
                Confidential AI
              </h1>
            </div>
            
            <div className="space-y-4">
              <h2 className="font-medium text-xl lg:text-2xl text-gray-900">
                Build AI People Can Trust
              </h2>
              <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                Hardware-secured compute platform that delivers verifiable AI with
                enterprise-grade privacy. Deploy confidential AI models with TEE
                protection in minutes, not months.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-green-400 hover:bg-green-500 text-gray-900 font-semibold px-6 py-3 rounded-full transition-colors">
                Get Start
              </button>
              <button className="bg-gray-900 hover:bg-gray-800 text-white font-semibold px-6 py-3 rounded-full transition-colors">
                Request Demo
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative w-full h-[500px] lg:h-[600px]">
              <img 
                src={img1}
                alt="Confidential AI Platform"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 opacity-20">
              <img src={imgEllipse1} alt="" className="w-full h-full" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 opacity-20">
              <img src={imgEllipse2} alt="" className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
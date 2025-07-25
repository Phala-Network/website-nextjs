import React from 'react';

const img021 = "/107c23032836cc810604909b178cfa509207e475.png";
const img031 = "/740b82f84d97c88996716c3a6dd2c97cadf82c37.png";
const img041 = "/8ec16ef38a8b5b4c75cb6f4412aac82ff510fece.png";
const imgThisIsACyberpunkStyleUpscaleC1 = "/7f1f04e5eec3457654c83fea16955b6fb108624f.png";
const imgEllipse6 = "/6006a03634d20ea73e51629b27b8434abf1167c3.svg";
const imgEllipse7 = "/824f7bb421096b08da473d39138ce975053a7b34.svg";
const imgEllipse8 = "/1bba9686e3ccd91b8ccac5ecded8cb3e9c80d2d3.svg";
const imgEllipse9 = "/3f6a1555d88281dee0e6cf0da9037b2bc2b98a9a.svg";
const imgFrame2 = "/c0d184c561d40b260925c2aad6d263257ddbdfb9.svg";

export default function SuccessStoriesSection() {
  return (
    <div className="bg-white rounded-t-3xl w-full py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-semibold text-5xl lg:text-6xl text-gray-900">
            Real-World Success Stories
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Financial Services */}
          <div className="bg-gray-100 rounded-xl p-6 space-y-6 relative overflow-hidden">
            <div className="absolute inset-0 opacity-50">
              <img src={img021} alt="" className="w-full h-full object-cover" />
            </div>
            
            <div className="relative z-10 space-y-4">
              <h3 className="font-semibold text-2xl text-gray-900">
                Financial
                <br />
                Services
              </h3>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-xl text-gray-900">
                  Major Investment Bank
                </h4>
                <p className="text-gray-600">
                  "Phala enabled us to process sensitive trading data with AI while maintaining complete regulatory compliance. We've reduced compliance costs by 40% while improving model accuracy."
                </p>
              </div>
              
              <div className="space-y-2">
                <p className="text-sm text-gray-600 opacity-60">• Risk Management AI</p>
                <p className="text-sm text-gray-600 opacity-60">• $2B+ Assets Under Management</p>
              </div>
            </div>
            
            <div className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <img src={imgFrame2} alt="" className="w-6 h-6" />
            </div>
          </div>

          {/* Healthcare Research */}
          <div className="bg-purple-600 rounded-xl p-6 space-y-6 relative overflow-hidden">
            <div className="absolute inset-0 opacity-30">
              <img src={img031} alt="" className="w-full h-full object-cover" />
            </div>
            
            <div className="relative z-10 space-y-4">
              <h3 className="font-semibold text-2xl text-white">
                Healthcare
                <br />
                Research
              </h3>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-xl text-white">
                  Research Consortium
                </h4>
                <p className="text-white">
                  "Multi-party collaboration on patient data without privacy compromise. Accelerated drug discovery by 60% while maintaining HIPAA compliance."
                </p>
              </div>
              
              <div className="space-y-2">
                <p className="text-sm text-white opacity-60">• 5 Hospital Network</p>
                <p className="text-sm text-white opacity-60">• 100K+ Patient Records</p>
              </div>
            </div>
            
            <div className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <img src={imgFrame2} alt="" className="w-6 h-6" />
            </div>
          </div>

          {/* AI SaaS Platform */}
          <div className="bg-indigo-600 rounded-xl p-6 space-y-6 relative overflow-hidden">
            <div className="absolute inset-0 opacity-30">
              <img src={img041} alt="" className="w-full h-full object-cover" />
            </div>
            
            <div className="relative z-10 space-y-4">
              <h3 className="font-semibold text-2xl text-white">
                AI SaaS
                <br />
                Platform
              </h3>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-xl text-white">
                  Enterprise Software Company
                </h4>
                <p className="text-white">
                  "Phala's confidential AI helped us land Fortune 500 clients who required verifiable data protection. Increased enterprise sales by 300%."
                </p>
              </div>
              
              <div className="space-y-2">
                <p className="text-sm text-white opacity-60">• B2B AI Platform</p>
                <p className="text-sm text-white opacity-60">• 50+ Enterprise Clients</p>
              </div>
            </div>
            
            <div className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <img src={imgFrame2} alt="" className="w-6 h-6" />
            </div>
          </div>

          {/* Decentralized AI */}
          <div className="bg-gray-800 rounded-xl p-6 space-y-6 relative overflow-hidden">
            <div className="absolute inset-0 opacity-30">
              <img src={imgThisIsACyberpunkStyleUpscaleC1} alt="" className="w-full h-full object-cover" />
            </div>
            
            <div className="relative z-10 space-y-4">
              <h3 className="font-semibold text-2xl text-white">
                Decentralized
                <br />
                AI
              </h3>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-xl text-white">
                  DeFi Protocol
                </h4>
                <p className="text-white">
                  "Built autonomous trading agents with verifiable execution. Users trust our AI because they can verify every decision on-chain."
                </p>
              </div>
              
              <div className="space-y-2">
                <p className="text-sm text-white opacity-60">• Autonomous Agents</p>
                <p className="text-sm text-white opacity-60">• $50M+ TVL</p>
              </div>
            </div>
            
            <div className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <img src={imgFrame2} alt="" className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
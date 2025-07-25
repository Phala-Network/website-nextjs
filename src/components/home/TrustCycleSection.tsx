import React from 'react';

const imgVector132 = "/c2d6a52bf6e37101955f52b289559f807cb6912d.svg";
const imgFrame47622 = "/9857ee62d5d3821f84291e8fd1dcefd9a9eefc94.svg";
const imgVector133 = "/98749e47309a2c948011689a33c3b9640ba6d4bb.svg";
const imgFrame47623 = "/77e7f73ec5abc927727b5f1054cacc05a26f14a6.svg";
const imgFrame = "/25a41c431961454e254b5cad0dbb84e5e3a7bf70.svg";
const imgEllipse3 = "/248b480f08f296247681905f2c17cf44f9da7afa.svg";

export default function TrustCycleSection() {
  return (
    <div className="w-full bg-gray-50 rounded-t-3xl py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="bg-white rounded-xl p-8 mb-12 max-w-4xl mx-auto">
          <div className="space-y-4">
            <h2 className="font-bold text-3xl text-gray-900">
              When Your Users Trust AI
            </h2>
            <p className="text-lg text-gray-600">
              Trust creates a powerful cycle that drives business growth and
              market leadership
            </p>
          </div>
          <div className="flex gap-2 mt-6">
            <div className="bg-green-400 h-1.5 rounded-full w-6" />
            <div className="bg-blue-300 h-1.5 rounded-full w-6" />
            <div className="bg-indigo-200 h-1.5 rounded-full w-6" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Step 1: Trust AI */}
          <div className="bg-white rounded-xl p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-6xl font-medium text-gray-900">1</span>
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <img src={imgFrame47622} alt="" className="w-6 h-6" />
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-xl text-gray-900">Trust AI</h3>
              <p className="text-gray-600">
                Users gain confidence in AI systems with verifiable security
              </p>
            </div>
            <div className="flex justify-center">
              <img src={imgVector132} alt="" className="w-10 h-10" />
            </div>
          </div>

          {/* Step 2: Unlock Use Cases */}
          <div className="bg-white rounded-xl p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-6xl font-medium text-gray-900">2</span>
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <img src={imgFrame47622} alt="" className="w-6 h-6" />
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-xl text-gray-900">Unlock Use Cases</h3>
              <p className="text-gray-600">
                Enable sensitive data processing previously impossible
              </p>
            </div>
            <div className="bg-green-300 rounded-lg p-4">
              <p className="font-semibold text-gray-900">New possibilities unlocked</p>
            </div>
            <div className="flex justify-center">
              <img src={imgVector133} alt="" className="w-10 h-10" />
            </div>
          </div>

          {/* Step 3: Win the Market */}
          <div className="bg-white rounded-xl p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-6xl font-medium text-gray-900">3</span>
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <img src={imgFrame47622} alt="" className="w-6 h-6" />
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-xl text-gray-900">Win the Market</h3>
              <p className="text-gray-600">
                Competitive advantage through trusted AI capabilities
              </p>
            </div>
            <div className="flex justify-center">
              <img src={imgFrame} alt="" className="w-10 h-10" />
            </div>
          </div>
        </div>

        {/* Central Demo Card */}
        <div className="mt-12 bg-green-300 rounded-xl p-8 relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              See It In Action
            </h3>
            <p className="text-gray-700 mb-6">
              Experience the power of confidential AI with our interactive demo
            </p>
            <button className="bg-gray-900 text-white font-semibold px-6 py-3 rounded-full hover:bg-gray-800 transition-colors">
              Try Demo
            </button>
          </div>
          
          {/* Background decorative element */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-10">
            <img src={imgEllipse3} alt="" className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
} 
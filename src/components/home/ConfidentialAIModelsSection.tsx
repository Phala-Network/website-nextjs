import React from 'react';

const imgEllipse4 = "/0f5dce247e1e300b079e33e20100e6a8aedde214.svg";
const imgFrame1 = "/ea668913d179f8aacbd5e322833632916f8d23e0.svg";
const img = "/c759d0d951edeaf704995b79022082aae8396be1.svg";
const img2 = "/6aa40e85bda913f324baa16fe94021da6e7073d9.svg";

export default function ConfidentialAIModelsSection() {
  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Card */}
          <div className="bg-white rounded-xl p-8 space-y-8">
            <div className="space-y-4">
              <h2 className="font-semibold text-3xl text-gray-900">
                Confidential
                <br />
                AI Models
              </h2>
              <p className="text-gray-600">
                Pre-configured secure AI models ready to deploy
              </p>
            </div>
            <button className="bg-gray-900 hover:bg-gray-800 text-white font-semibold px-6 py-3 rounded-full transition-colors">
              Browse Models
            </button>
          </div>

          {/* Right Model Cards */}
          <div className="bg-blue-200 rounded-xl p-6 relative overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Model Card 1 */}
              <div className="bg-white rounded-lg p-6 space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-white rounded-full border border-gray-200 flex items-center justify-center">
                    <img src={imgFrame1} alt="" className="w-10 h-10" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-gray-900">Llama-3.1-8B</h3>
                    <div className="space-y-1">
                      <p className="text-sm text-gray-600">Price</p>
                      <p className="font-semibold text-gray-900">$50.37/month</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="bg-gray-100 rounded-full p-3">
                    <div className="w-6 h-6 relative">
                      <img src={img} alt="" className="w-full h-full" />
                      <img src={img2} alt="" className="w-full h-full absolute inset-0" />
                    </div>
                  </div>
                </div>
                <div className="bg-green-500 h-1 rounded-full w-6" />
              </div>

              {/* Model Card 2 */}
              <div className="bg-white rounded-lg p-6 space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-white rounded-full border border-gray-200 flex items-center justify-center">
                    <img src={imgFrame1} alt="" className="w-10 h-10" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-gray-900">GPT-4</h3>
                    <div className="space-y-1">
                      <p className="text-sm text-gray-600">Price</p>
                      <p className="font-semibold text-gray-900">$99.99/month</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="bg-gray-100 rounded-full p-3">
                    <div className="w-6 h-6 relative">
                      <img src={img} alt="" className="w-full h-full" />
                      <img src={img2} alt="" className="w-full h-full absolute inset-0" />
                    </div>
                  </div>
                </div>
                <div className="bg-green-500 h-1 rounded-full w-6" />
              </div>
            </div>
            
            {/* Background decorative element */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-10">
              <img src={imgEllipse4} alt="" className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
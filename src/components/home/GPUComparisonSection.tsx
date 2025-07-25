import React from 'react';

const imgNvidiaH200GpuServer1 = "/724d3964c4ded64d3d0133d6cf395023b9e40ee8.png";
const imgVs = "/4c89ce52d8ef3ac98fe9381f25e379236a575b89.svg";

export default function GPUComparisonSection() {
  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="font-semibold text-5xl lg:text-6xl text-gray-900 mb-4">
            Confidential AI
          </h2>
          <h3 className="font-semibold text-3xl lg:text-4xl text-gray-900">
            Deploy Confidential GPUs,
            <br />
            On-Demand
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Performance Comparison Card */}
          <div className="bg-white rounded-xl p-8 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-2xl text-gray-900">Performance</h3>
              <div className="bg-gray-900 rounded-full p-2">
                <img src={imgVs} alt="VS" className="w-6 h-6" />
              </div>
            </div>
            
            <div className="text-center mb-6">
              <h4 className="font-semibold text-2xl text-gray-900 mb-4">
                Privacy
                <br />
                Comparison
              </h4>
            </div>

            <div className="space-y-6">
              {/* Native GPU */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-900">Native GPU</span>
                  <span className="text-sm text-gray-600">100% Performance, 0% Privacy</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-green-400 h-2 rounded-full flex-1"></div>
                  <span className="text-sm font-semibold">100%</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-orange-400 h-2 rounded-full w-1/4"></div>
                  <span className="text-sm font-semibold">0%</span>
                </div>
              </div>

              {/* GPU TEE */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-900">GPU TEE</span>
                  <span className="text-sm text-gray-600">95% Performance, 100% Privacy</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-green-400 h-2 rounded-full w-11/12"></div>
                  <span className="text-sm font-semibold">95%</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-400 h-2 rounded-full flex-1"></div>
                  <span className="text-sm font-semibold">100%</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-gray-600">
                Phala connects you to hardware-secured GPU servers for instant,
                private AI computing. 100% confidential with only 5% performance
                trade-off.
              </p>
              <p className="text-sm text-gray-600">
                Start in seconds, run confidentially for as long as you need.
              </p>
              <button className="border border-gray-900 text-gray-900 font-semibold px-6 py-3 rounded-full hover:bg-gray-900 hover:text-white transition-colors">
                Learn More About NVIDIA Confidential Compute
              </button>
            </div>
          </div>

          {/* NVIDIA H200 GPU Card */}
          <div className="bg-white rounded-xl p-8 space-y-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-2xl text-gray-900">
                NVIDIA H200 GPU TEE
              </h3>
              <div className="space-y-2">
                <p className="text-gray-600">Price</p>
                <p className="font-semibold text-xl text-gray-900">$2.5/hour</p>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={imgNvidiaH200GpuServer1}
                alt="NVIDIA H200 GPU Server"
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
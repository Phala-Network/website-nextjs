import React from 'react';

const imgEllipse5 = "/d2794cec749214da5e924b979f6879abac4fc7a3.svg";

export default function PrivateCloudComputeSection() {
  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="font-semibold text-5xl lg:text-6xl text-gray-900">
            Private Cloud Compute
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Phala Cloud Demo */}
          <div className="bg-green-300 rounded-xl p-8 relative overflow-hidden">
            <div className="relative z-10">
              <div className="bg-white rounded-2xl p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium text-gray-900">Phala Cloud</h3>
                </div>
                <div className="border-t border-gray-300 pt-4">
                  <p className="text-gray-700">Secure cloud computing interface</p>
                </div>
              </div>
            </div>
            
            {/* Background decorative element */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-10">
              <img src={imgEllipse5} alt="" className="w-full h-full" />
            </div>
          </div>

          {/* Phala Cloud Info Card */}
          <div className="bg-white rounded-xl p-8 space-y-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-3xl text-gray-900">
                Phala Cloud
              </h3>
              <p className="text-gray-600">
                All-in-one confidential
                <br />
                compute platform for AI workloads
              </p>
            </div>
            
            <div className="bg-green-300 rounded-full p-4 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <span className="font-medium text-gray-900">Starting at</span>
                <span className="font-semibold text-xl text-gray-900">$50.37/month</span>
              </div>
              <button className="bg-gray-900 hover:bg-gray-800 text-white font-semibold px-6 py-3 rounded-full transition-colors">
                Start Building
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
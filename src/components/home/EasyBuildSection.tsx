import React from 'react';

const imgGroup = "/9350dba0a1a7957da67ebe13aefab53d381f5053.svg";
const imgGroup1 = "/c37f2c482c390c436dade54300dc3cbcab0c1917.svg";
const imgEllipse22 = "/8b656261967d4e21567efa7bd6066957ec9ae072.svg";
const imgFrame2 = "/c0d184c561d40b260925c2aad6d263257ddbdfb9.svg";
const imgFrame3 = "/4c5a655e8f124c01bb08649227d5f622682046ee.svg";
const imgFrame4 = "/2aaff35c0fc27f5446d1a0a31bd402e68ec9e2af.svg";
const imgFrame5 = "/8270c125b1785e2086622b7e4494849892e36de4.svg";
const imgEllipse23 = "/b793a9fee1c16c2db458cf65176efc4a4bdcfaa4.svg";
const imgImage339 = "/5045da53fab3577aa583ac31db1c55f854bbb843.png";

export default function EasyBuildSection() {
  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Tab Navigation */}
        <div className="bg-green-300 rounded-xl p-6 mb-8 max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <h2 className="font-medium text-3xl text-gray-900">Easy</h2>
            <div className="w-px h-8 bg-gray-900"></div>
            <h3 className="font-medium text-2xl text-gray-600">Build in Minutes, Not Months</h3>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <div className="bg-green-400 px-4 py-2 rounded-full">
            <span className="font-semibold text-gray-900">Easy</span>
          </div>
          <div className="px-4 py-2">
            <span className="font-medium text-gray-900">Open</span>
          </div>
          <div className="px-4 py-2">
            <span className="font-medium text-gray-900">Private</span>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Card 1: Write Code */}
          <div className="bg-white rounded-xl p-6 space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <img src={imgFrame2} alt="" className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-xl text-gray-900">
                Write code, dockerize, and deploy it as trustless TEE apps.
              </h3>
            </div>
            
            <div className="bg-green-300 rounded-2xl p-6 space-y-4">
              <div className="flex space-x-2">
                <div className="w-4 h-4 bg-gray-900 rounded-full"></div>
                <div className="w-4 h-4 bg-gray-900 rounded-full"></div>
                <div className="w-4 h-4 bg-gray-900 rounded-full"></div>
              </div>
              <p className="font-medium text-white text-lg">
                # Deploy the webshell Dstack example phala cvms create
              </p>
            </div>
          </div>

          {/* Card 2: Hardware Maintenance */}
          <div className="bg-white rounded-xl p-6 space-y-6">
            <h3 className="font-semibold text-xl text-gray-900">
              We deal with the pain of hardware maintenance
            </h3>
            
            <div className="space-y-4">
              <div className="flex space-x-4">
                <div className="w-16 h-16 bg-white rounded-full border border-gray-200 flex items-center justify-center">
                  <img src={imgFrame3} alt="" className="w-10 h-10" />
                </div>
                <div className="w-16 h-16 bg-white rounded-full border border-gray-200 flex items-center justify-center">
                  <img src={imgFrame4} alt="" className="w-10 h-10" />
                </div>
                <div className="w-16 h-16 bg-white rounded-full border border-gray-200 flex items-center justify-center">
                  <img src={imgFrame5} alt="" className="w-10 h-10" />
                </div>
              </div>
              <p className="text-gray-600">have their own TEE</p>
            </div>
            
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
              <img src={imgFrame2} alt="" className="w-6 h-6" />
            </div>
          </div>

          {/* Card 3: Deploy Production */}
          <div className="bg-white rounded-xl p-6 space-y-6 border-2 border-green-300">
            <h3 className="font-semibold text-xl text-gray-900">
              Deploy production-grade TEE workloads in minutes.
            </h3>
            
            <div className="bg-white rounded-2xl p-6 space-y-4">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
              </div>
              <div className="relative">
                <img 
                  src={imgImage339}
                  alt="Production Interface"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </div>
            
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
              <img src={imgFrame2} alt="" className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
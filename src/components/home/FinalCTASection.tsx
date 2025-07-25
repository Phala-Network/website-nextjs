import React from 'react';

const imgEllipse10 = "/3f6a1555d88281dee0e6cf0da9037b2bc2b98a9a.svg";

export default function FinalCTASection() {
  return (
    <div className="w-full bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-gray-900 rounded-2xl p-8 relative overflow-hidden">
          <div className="relative z-10 text-center space-y-8">
            <div className="space-y-4">
              <h2 className="font-semibold text-4xl lg:text-5xl text-white">
                Ready to Build the Future of AI?
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Join thousands of developers and enterprises who trust Phala for their confidential AI workloads.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-400 hover:bg-green-500 text-gray-900 font-semibold px-8 py-4 rounded-full transition-colors text-lg">
                Get Started Free
              </button>
              <button className="bg-white hover:bg-gray-100 text-gray-900 font-semibold px-8 py-4 rounded-full transition-colors text-lg">
                Schedule Demo
              </button>
            </div>
            
            <p className="text-gray-400 text-sm">
              No credit card required. Deploy your first model in 5 minutes.
            </p>
          </div>
          
          {/* Background decorative element */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-10">
            <img src={imgEllipse10} alt="" className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
} 
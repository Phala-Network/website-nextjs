import React from 'react';

const imgFrame6 = "/84528db2929c9a4537ae391d9742c3d6ce19eca9.svg";

export default function ProvenAtScaleSection() {
  return (
    <div className="bg-white rounded-t-3xl w-full py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-semibold text-5xl lg:text-6xl text-gray-900">
            Proven at Scale
          </h2>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Teams Building Card */}
          <div className="bg-gray-50 rounded-xl p-8 text-center space-y-4">
            <div className="text-6xl font-medium text-gray-900">500+</div>
            <h3 className="font-semibold text-2xl text-gray-900">
              Teams
              <br />
              Building
            </h3>
            <p className="text-gray-600">
              Active developers deploying confidential AI
            </p>
            <div className="bg-green-400 h-1.5 rounded-full w-12 mx-auto"></div>
          </div>

          {/* Daily Attestations Card */}
          <div className="bg-gray-50 rounded-xl p-8 text-center space-y-4">
            <div className="text-6xl font-medium text-gray-900">10K+</div>
            <h3 className="font-semibold text-2xl text-gray-900">
              Daily
              <br />
              Attestations
            </h3>
            <p className="text-gray-600">
              Real-time security
              <br />
              verifications
            </p>
            <div className="bg-blue-500 h-1.5 rounded-full w-12 mx-auto"></div>
          </div>

          {/* ARR Card */}
          <div className="bg-gray-50 rounded-xl p-8 text-center space-y-4">
            <div className="text-6xl font-medium text-gray-900">$2M+</div>
            <h3 className="font-semibold text-2xl text-gray-900">ARR</h3>
            <p className="text-gray-600">
              Annual recurring revenue
              <br />
              from enterprise
            </p>
            <div className="bg-indigo-500 h-1.5 rounded-full w-12 mx-auto"></div>
          </div>
        </div>

        {/* Enterprise Trust Section */}
        <div className="bg-green-300 rounded-xl p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-medium text-4xl text-gray-900 mb-8">
                Enterprise Trust
              </h3>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <img src={imgFrame6} alt="" className="w-6 h-6" />
                <span className="font-medium text-gray-900">SOC 2 Type II Certified</span>
              </div>
              <div className="flex items-center space-x-3">
                <img src={imgFrame6} alt="" className="w-6 h-6" />
                <span className="font-medium text-gray-900">99.9% Uptime SLA</span>
              </div>
              <div className="flex items-center space-x-3">
                <img src={imgFrame6} alt="" className="w-6 h-6" />
                <span className="font-medium text-gray-900">HIPAA Ready Infrastructure</span>
              </div>
              <div className="flex items-center space-x-3">
                <img src={imgFrame6} alt="" className="w-6 h-6" />
                <span className="font-medium text-gray-900">24/7 Enterprise Support</span>
              </div>
              <div className="flex items-center space-x-3">
                <img src={imgFrame6} alt="" className="w-6 h-6" />
                <span className="font-medium text-gray-900">GDPR Compliant Processing</span>
              </div>
              <div className="flex items-center space-x-3">
                <img src={imgFrame6} alt="" className="w-6 h-6" />
                <span className="font-medium text-gray-900">Zero Security Breaches</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
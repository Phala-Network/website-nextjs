import React from 'react';

export default function FAQSection() {
  return (
    <div className="min-h-screen rounded-t-3xl w-full bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-semibold text-5xl lg:text-6xl text-gray-900">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {/* FAQ Item 1 */}
          <div className="bg-white rounded-xl p-6">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-xl text-gray-900">
                What is confidential AI?
              </h3>
              <button className="text-gray-500 hover:text-gray-700">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <p className="text-gray-600 mt-4">
              Confidential AI ensures that sensitive data and AI models remain private and secure during processing, using hardware-based security measures.
            </p>
          </div>

          {/* FAQ Item 2 */}
          <div className="bg-white rounded-xl p-6">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-xl text-gray-900">
                How does TEE work?
              </h3>
              <button className="text-gray-500 hover:text-gray-700">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <p className="text-gray-600 mt-4">
              Trusted Execution Environment (TEE) creates isolated, secure areas in processors where sensitive computations can run without being accessible to the rest of the system.
            </p>
          </div>

          {/* FAQ Item 3 */}
          <div className="bg-white rounded-xl p-6">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-xl text-gray-900">
                Is Phala compatible with existing AI frameworks?
              </h3>
              <button className="text-gray-500 hover:text-gray-700">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <p className="text-gray-600 mt-4">
              Yes, Phala supports popular AI frameworks like TensorFlow, PyTorch, and Hugging Face, allowing you to run existing models with enhanced security.
            </p>
          </div>

          {/* FAQ Item 4 */}
          <div className="bg-white rounded-xl p-6">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-xl text-gray-900">
                What are the performance implications?
              </h3>
              <button className="text-gray-500 hover:text-gray-700">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <p className="text-gray-600 mt-4">
              Our confidential AI platform typically adds only 5-10% overhead compared to standard AI deployments, while providing enterprise-grade security.
            </p>
          </div>

          {/* FAQ Item 5 */}
          <div className="bg-white rounded-xl p-6">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-xl text-gray-900">
                How do I get started?
              </h3>
              <button className="text-gray-500 hover:text-gray-700">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <p className="text-gray-600 mt-4">
              Getting started is easy! Sign up for a free account, choose your AI model, and deploy in minutes. Our documentation provides step-by-step guides.
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <button className="bg-green-400 hover:bg-green-500 text-gray-900 font-semibold px-6 py-3 rounded-full transition-colors">
            Contact Support
          </button>
          <button className="bg-gray-900 hover:bg-gray-800 text-white font-semibold px-6 py-3 rounded-full transition-colors">
            View Documentation
          </button>
        </div>
      </div>
    </div>
  );
} 
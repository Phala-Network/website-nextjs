import { FaRegCheckCircle } from 'react-icons/fa'

const statistics = [
  {
    value: '500+',
    title: 'Teams\nBuilding',
    description: 'Active developers deploying\nconfidential AI',
    color: '#cbfa50',
  },
  {
    value: '10K+',
    title: 'Daily\nAttestations',
    description: 'Real-time security\nverifications',
    color: '#4d91e9',
  },
  {
    value: '$2M+',
    title: 'ARR\n\n',
    description: 'Annual recurring revenue\nfrom enterprise',
    color: '#646eff',
  },
]

const enterpriseFeatures = [
  'SOC 2 Type II Certified',
  '99.9% Uptime SLA',
  'HIPAA Ready Infrastructure',
  '24/7 Enterprise Support',
  'GDPR Compliant Processing',
  'Zero Security Breaches',
]

export default function ProvenAtScaleSection() {
  return (
    <section className="bg-background rounded-t-[32px] w-full pt-8 sm:pt-12 px-2 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-semibold text-3xl md:text-4xl lg:text-5xl text-[#1e2119] mb-8 sm:mb-12 max-sm:text-center">
          Proven at Scale
        </h2>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-4 md:mb-6">
          {statistics.map((stat, index) => (
            <div
              key={index}
              className="bg-[#f9f9f7] rounded-sm p-8 md:p-10 lg:h-[413px] flex flex-col"
            >
              <div className="font-semibold text-4xl lg:text-5xl text-[#1e2119] mb-6">
                {stat.value}
              </div>
              <h3 className="font-semibold text-xl text-[#1e2119] mb-4 whitespace-pre-line">
                {stat.title}
              </h3>
              <div
                className="h-1.5 rounded-full w-12 mb-6"
                style={{ backgroundColor: stat.color }}
              ></div>
              <p className="text-[#61645b] mt-auto whitespace-pre-line max-md:text-sm">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Enterprise Trust Section */}
        <div className="bg-[#c4f144] rounded-sm p-8 md:p-12 lg:p-16">
          <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-32">
            <div className="flex-shrink-0">
              <h3 className="font-medium text-3xl sm:text-4xl text-[#1e2119]">
                Enterprise Trust
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1">
              {enterpriseFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <FaRegCheckCircle className="w-6 h-6 flex-shrink-0 text-[#1e2119]" />
                  <span className="font-medium text-lg text-[#1e2119]">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { FaArrowRight } from 'react-icons/fa6'

const story1 = '/next/story-1.png'
const story2 = '/next/story-2.png'
const story3 = '/next/story-3.png'
const story4 = '/next/story-4.png'
const imgEllipse1 = '/6006a03634d20ea73e51629b27b8434abf1167c3.svg'
const imgEllipse2 = '/824f7bb421096b08da473d39138ce975053a7b34.svg'
const imgEllipse3 = '/1bba9686e3ccd91b8ccac5ecded8cb3e9c80d2d3.svg'
const imgEllipse4 = '/3f6a1555d88281dee0e6cf0da9037b2bc2b98a9a.svg'

interface SuccessStory {
  id: string
  category: string
  title: string
  quote: string
  stats: string[]
  bgColor: string
  textColor: string
  bgImage: string
  ellipseImage: string
}

const successStories: SuccessStory[] = [
  {
    id: '1',
    category: 'Financial\nServices',
    title: 'Major Investment Bank',
    quote:
      '"Phala enabled us to process sensitive trading data with AI while maintaining complete regulatory compliance. We\'ve reduced compliance costs by 40% while improving model accuracy."',
    stats: ['• Risk Management AI', '• $2B+ Assets Under Management'],
    bgColor: 'bg-[#f3f3f3]',
    textColor: 'text-[#1e2119]',
    bgImage: story1,
    ellipseImage: imgEllipse1,
  },
  {
    id: '2',
    category: 'Healthcare\nResearch',
    title: 'Research Consortium',
    quote:
      '"Multi-party collaboration on patient data without privacy compromise. Accelerated drug discovery by 60% while maintaining HIPAA compliance."',
    stats: ['• 5 Hospital Network', '• 100K+ Patient Records'],
    bgColor: 'bg-[#a7518d]',
    textColor: 'text-[#ffffff]',
    bgImage: story2,
    ellipseImage: imgEllipse2,
  },
  {
    id: '3',
    category: 'AI SaaS\nPlatform',
    title: 'Enterprise Software Company',
    quote:
      '"Phala\'s confidential AI helped us land Fortune 500 clients who required verifiable data protection. Increased enterprise sales by 300%."',
    stats: ['• B2B AI Platform', '• 50+ Enterprise Clients'],
    bgColor: 'bg-[#5159a1]',
    textColor: 'text-[#ffffff]',
    bgImage: story3,
    ellipseImage: imgEllipse3,
  },
  {
    id: '4',
    category: 'Decentralized\nAI',
    title: 'DeFi Protocol',
    quote:
      '"Built autonomous trading agents with verifiable execution. Users trust our AI because they can verify every decision on-chain."',
    stats: ['• Autonomous Agents', '• $50M+ TVL'],
    bgColor: 'bg-[#3e3e3e]',
    textColor: 'text-[#1e2119]',
    bgImage: story4,
    ellipseImage: imgEllipse4,
  },
]

const SuccessStoryCard = ({ story }: { story: SuccessStory }) => (
  <div
    className={`${story.bgColor} h-[480px] md:h-[560px] lg:h-[520px] rounded-sm overflow-hidden w-full bg-cover bg-left-bottom`}
    style={{
      backgroundImage: `url('${story.bgImage}')`,
    }}
  >
    {/* Content */}
    <div className="p-8 h-full flex flex-col">
      {/* Category */}
      <div className="flex items-start mb-auto">
        <div
          className={`font-semibold text-3xl ${story.textColor} whitespace-pre-line flex-1`}
        >
          {story.category}
        </div>
        <div className="bg-background/80 rounded-full p-3 flex items-center justify-center shrink-0">
          <FaArrowRight className="w-4 h-4 text-black" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col gap-6 mb-8">
        <div className={`font-semibold text-2xl ${story.textColor}`}>
          {story.title}
        </div>
        <div className={`font-blog ${story.textColor} max-w-[269px]`}>
          {story.quote}
        </div>
      </div>

      {/* Stats */}
      <div className="flex flex-col gap-1 mb-4">
        {story.stats.map((stat, index) => (
          <div
            key={index}
            className={`font-blog text-sm ${story.textColor} opacity-60`}
          >
            {stat}
          </div>
        ))}
      </div>
    </div>

    {/* Arrow Icon Button */}
  </div>
)

export default function RealWorldSuccessStoriesSection() {
  return (
    <section className="bg-background w-full pt-8 sm:pt-16 px-2 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="font-semibold text-3xl md:text-4xl lg:text-5xl text-[#1e2119] mb-8 sm:mb-12 max-md:text-center">
          Real-World Success Stories
        </h2>

        {/* Cards Grid - Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pb-8 sm:pb-12 lg:pb-20">
          {successStories.map((story) => (
            <SuccessStoryCard key={story.id} story={story} />
          ))}
        </div>
      </div>
    </section>
  )
}

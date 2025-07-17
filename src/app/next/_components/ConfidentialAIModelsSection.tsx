import { FaArrowRight } from 'react-icons/fa6'

const imgFrame1 = '/ea668913d179f8aacbd5e322833632916f8d23e0.svg'

interface ModelCard {
  id: string
  name: string
  logo: string
}

const modelCards: ModelCard[] = [
  {
    id: '1',
    name: 'Llama-3.1-8B',
    logo: imgFrame1,
  },
  {
    id: '2',
    name: 'GPT-4',
    logo: imgFrame1,
  },
  {
    id: '3',
    name: 'Claude-3.5',
    logo: imgFrame1,
  },
  {
    id: '4',
    name: 'Gemini Pro',
    logo: imgFrame1,
  },
]

const ModelCardComponent = ({ model }: { model: ModelCard }) => (
  <div className="bg-background h-full w-[280px] flex-shrink-0 overflow-hidden rounded-sm flex flex-col p-6 relative">
    {/* Logo/Icon */}
    <div className="bg-background rounded-full w-16 h-16 border border-[#d8dad4] flex items-center justify-center mb-6 shrink-0">
      <img alt="" className="w-10 h-10" src={model.logo} />
    </div>

    {/* Content - grows to fill available space */}
    <div className="flex-1 flex flex-col">
      <div className="flex-1" />

      {/* Title */}
      <div className="font-semibold text-[#1e2119] text-xl mb-4">
        {model.name}
      </div>
      <div className="bg-[#10a37f] h-1 rounded-full w-6" />
    </div>

    {/* Arrow Icon - Absolute positioned */}
    <div className="absolute bottom-6 right-6 bg-black-100/50 rounded-full p-3 flex items-center justify-center">
      <FaArrowRight className="w-4 h-4 text-black-600" />
    </div>
  </div>
)

export default function ConfidentialAIModelsSection() {
  return (
    <div className="w-full pt-8 sm:pt-16 px-2 sm:px-8 lg:px-12">
      <h2 className="mx-auto text-center text-3xl md:text-4xl lg:text-5xl font-semibold mb-8 sm:mb-12">
        Confidential AI
      </h2>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[325px_1fr] gap-4 sm:gap-8">
          {/* Left Card */}
          <div className="bg-background rounded-sm p-8 w-full h-[250px] md:h-[420px] flex flex-col">
            <h2 className="font-semibold text-2xl md:text-3xl text-gray-900">
              Confidential AI Models
            </h2>
            <p className="text-gray-600 mt-4">
              Pre-configured secure AI models ready to deploy
            </p>

            <button className="text-gray-800 font-semibold flex items-center gap-2 hover:underline mt-auto">
              Browse models <FaArrowRight className="w-3 h-3" />
            </button>
          </div>

          {/* Right Model Cards - Horizontal Scroll */}
          <div className="bg-gradient-to-r from-[#8BBEFF] to-[#4D91E9] relative overflow-hidden rounded-sm py-4 pl-4 md:py-6 md:pl-6 h-[250px] md:h-[420px]">
            <div
              className="flex gap-4 overflow-x-auto h-full pr-8"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {modelCards.map((model) => (
                <ModelCardComponent key={model.id} model={model} />
              ))}
            </div>

            {/* Right gradient overlay */}
            <div className="absolute right-0 top-0 bottom-0 w-4 bg-gradient-to-l from-[#4D91E9] via-[#4D91E9]/50 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  )
}

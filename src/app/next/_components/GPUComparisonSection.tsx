import { FaArrowRight } from 'react-icons/fa6'

const imgNvidiaH200GpuServer1 = '/724d3964c4ded64d3d0133d6cf395023b9e40ee8.png'

export default function GPUComparisonSection() {
  return (
    <div className="w-full pt-8 md:pt-16 px-2 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 md:mb-12 max-sm:text-center">
          Deploy Confidential GPUs, <br />
          On-Demand
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-4 sm:gap-8">
          {/* Performance Comparison Card */}
          <div className="bg-background rounded-sm">
            <div className="p-6 sm:p-10">
              <div className="font-semibold text-[#1e2119] text-2xl">
                Performance
              </div>

              <div className="border border-[#1e2119] text-[#1e2119] font-bold flex items-center justify-center w-12 h-12 rounded-full my-4 sm:my-6">
                VS
              </div>

              <div className="font-semibold text-[#1e2119] text-2xl mb-8">
                Privacy
                <br />
                Comparison
              </div>

              <div className="grid grid-cols-[100px_1fr_1fr] gap-x-2">
                {/* Native GPU */}

                <div></div>
                <div className="font-semibold text-[#1e2119] text-sm text-right">
                  100%
                </div>
                <div className="font-semibold text-[#1e2119] text-sm text-right">
                  0%
                </div>

                <div className="font-semibold text-[#1e2119] -mt-2">
                  Native GPU
                </div>
                <div className="bg-[#c4f144] h-2 rounded-full"></div>
                <div className="bg-[#f19544] w-2 h-2 rounded-full"></div>
                <div></div>

                <div className="text-sm text-[#1e2119]/60">Performance</div>
                <div className="text-sm text-[#1e2119]/60">Privacy</div>

                {/* GPU TEE */}
                <div></div>
                <div className="font-semibold text-[#1e2119] text-sm text-right">
                  95%
                </div>
                <div className="font-semibold text-[#1e2119] text-sm text-right">
                  100%
                </div>
                <div className="font-semibold text-[#1e2119] -mt-2">
                  GPU TEE
                </div>
                <div className="bg-[#c4f144] h-2 rounded-full w-[95%]"></div>
                <div className="bg-[#8abdff] h-2 rounded-full"></div>
              </div>

              <div className="mt-10">
                <p className="text-[#61645b] font-blog mb-4">
                  Phala connects you to hardware-secured GPU servers for
                  instant, private AI computing. 100% confidential with only 5%
                  performance trade-off.
                </p>

                <a className="text-[#1e2119] font-semibold flex items-center gap-2 hover:underline">
                  Learn more about NVIDIA Confidential Compute
                  <FaArrowRight className="w-3 h-3" />
                </a>
                {/* <p className="text-[#61645b] text-xs font-blog">
                  Start in seconds, run confidentially for as long as you need.
                </p> */}
              </div>
            </div>
          </div>

          {/* NVIDIA H200 GPU Card */}
          <div className="bg-background rounded-sm overflow-hidden flex flex-col">
            <div
              className="bg-center bg-cover bg-no-repeat h-[300px] sm:h-[380px] w-full"
              style={{ backgroundImage: `url('${imgNvidiaH200GpuServer1}')` }}
            />

            <div className="p-6 sm:p-10 flex flex-col flex-1">
              <div className="font-semibold text-[#1e2119] text-2xl mb-4">
                NVIDIA H200 GPU TEE
              </div>

              <a className="text-[#1e2119] font-semibold flex items-center gap-2 hover:underline mt-auto">
                Rent Confidential H200 <FaArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

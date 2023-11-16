import { cn } from '@/lib/utils'
import { ClaimDashboard } from './_components/Claim'

export default function Page() {
  const rpc = 'ws://10.0.0.120:19944'
  return (
    <>
      <link rel="prefetch" href={`/api/rpc-metadata?rpc=${rpc}`} as="document" />
      <link rel="preconnect" href={`${rpc}`} />
      <div
        className={cn(
          "safe-viewport",
          "grid gap-x-4 grid-cols-6 xl:grid-cols-20 3xl:grid-cols-24",
          "py-16 xl:py-32 px-0",
        )}
      >
          <div
            className={cn(
              "col-span-full xl:col-start-2 xl:col-span-18 3xl:col-start-4 3xl:col-span-18"
            )}
          >
            <ClaimDashboard />
          </div>
      </div>
    </>
  )
}

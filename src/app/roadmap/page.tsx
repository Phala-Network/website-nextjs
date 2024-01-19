import { type Metadata } from 'next'
import { cn } from "@/lib/utils"
import DotBackground from '@/components/DotBackground'

import './style.css'

export const metadata: Metadata = {
  title: 'Roadmap | Phala Network',
}

export default function Page() {
  return (
    <div className="relative py-24">
      <DotBackground dotColor="#E2E8F0" bgColor="#F7FAFC" />
      <main className={cn("safe-viewport", "grid grid-cols-1 xl:grid-cols-20 3xl:grid-cols-24")}>
        <article className={cn("cols-span-1 xl:col-start-2 xl:col-span-18 3xl:col-start-6 3xl:col-span-14 min-h-[60rem] pl-3 pr-2 py-4", "pageRoadmap")}>
          <iframe
            className="overflow-hidden rounded-xl"
            width="100%"
            height="100%"
            src="https://miro.com/app/live-embed/uXjVN9U3y7A=/?moveToViewport=-1220,-982,4708,5928&embedId=609118477724"
            allow="fullscreen; clipboard-read; clipboard-write"
            allowFullScreen
          />
        </article>
      </main>
    </div>
  )
}

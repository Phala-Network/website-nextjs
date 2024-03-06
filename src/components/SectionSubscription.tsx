import { cn } from '@/lib/utils'
import SubscribeForm from './marketing/SubscribeForm'

export default function SectionSubscription() {
  return (
    <section
      id="section-subscription"
      className="bg-[#262626] xl:bg-gradient-to-r from-[#262626] to-[#f3f3f3] from-50% to-50%"
    >
      <div className={cn("safe-viewport", "grid gap-4 grid-cols-1 xl:grid-cols-20 3xl:grid-cols-24")}>
        <SubscribeForm />
        <div className={cn("hidden xl:block xl:h-full xl:bg-[#f3f3f3] row-start-1 col-span-full xl:col-start-14 3xl:col-start-16 -ml-4 relative")}>
          <img src="/home/newsletter-aside.jpg" alt="" className={cn("absolute bottom-0 left-0 aspect-[1860/728]")} />
        </div>
      </div>
    </section>
  )
}

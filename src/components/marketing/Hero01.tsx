import { cn } from '@/lib/utils'
import { GenericComponent } from '../../types/components'

export interface HeroSectionProps extends GenericComponent {
  label?: string
  heroImage?: string
  title: string
  subTitle: string
}

const DEFAULT_HERO_IMAGE = "/illustrations/hero-bg-default.jpg"

export function HeroSection({ label, heroImage, title, subTitle, className, children }: HeroSectionProps) {
  return (
    <section className={cn("grid grid-cols-1", className)}>
      <div className={cn(
        "row-start-1 col-span-full",
        "relative px-6 pt-14 lg:px-8 z-10",
      )}>
        <div
          className={cn(
            "mx-auto max-w-4xl py-32 sm:py-48 lg:py-56",
          )}
        >
          <div className="text-center flex flex-col gap-4">
            {label ? (
              <div className="mb-4">
                <span
                  className={cn(
                    "rounded-full border border-phalaPurple-500 px-3 py-2",
                    "uppercase text-xs font-medium text-phalaPurple-500",
                  )}
                >
                  {label}
                </span>
              </div>
            ) : null}
            <h1 className="text-48 font-black text-black-800">
              {title}
            </h1>
            <p className="text-16 leading-8 text-black-600">
              {subTitle}
            </p>
          </div>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            {children}
          </div>
        </div>
      </div>
      {/* backdrop background image. */}
      <div
        className={cn(
          "row-start-1 col-span-full",
          "p-9 xl:p-10 3xl:p-0",
        )}
      >
        <div className="relative overflow-hidden rounded w-full" style={{maxHeight: "calc(100cqh - 5rem)", aspectRatio: "16/9"}}>
          <img src={heroImage || DEFAULT_HERO_IMAGE} alt="" className="object-cover w-full h-full" />
        </div>
      </div>
    </section>
  )
}

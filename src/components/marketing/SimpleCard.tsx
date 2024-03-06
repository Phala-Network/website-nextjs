import { GenericComponent } from '../../types/components'
import { cn } from '@/lib/utils'

export interface SimpleCardProps extends GenericComponent {
  label?: string
  title: string
}

export function SimpleCard({ label, title, className, children }: SimpleCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2.4 lg:gap-4 p-6 lg:p-8 border border-whiteAlpha-200 bg-whiteAlpha-50 rounded",
        className,
      )}
    >
      <dt>
        {label ? (
          <span className="font-bold text-black-800 bg-phalaGreen-500 py-1 px-5 rounded-xs">{label}</span>
        ) : null}
        <h4 className="text-20 lg:text-24 font-bold text-white mt-4">{title}</h4>
      </dt>
      <dd className="mt-1 flex flex-auto flex-col text-sm lg:text-base leading-7 text-gray-300">
        {children}
      </dd>
    </div>
  )
}

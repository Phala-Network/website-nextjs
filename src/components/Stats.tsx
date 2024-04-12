import { type ReactNode } from 'react'

import { cn } from '@/lib/utils'

export function Stats({ children, name, icon, className }: { children: ReactNode, icon: string, name: string, className?: string }) {
  return (
    <div className={cn(className, "flex flex-col items-center lg:items-start lg:flex-row gap-4 h-full m-auto")}>
      <div className="drop-shadow bg-white rounded-full w-12 h-12 shrink-0 flex items-center justify-center">
        <img
          className="pointer-events-none"
          src={icon}
          alt={name}
        />
      </div>
      <div className="text-center lg:text-left">
        <strong className={cn("stats-text-shadow text-md font-bold")}>{children}</strong>
        <div className={cn("stats-text-shadow text-sm font-medium -tracking-tight")}>{name}</div>
      </div>
    </div>
  )
}


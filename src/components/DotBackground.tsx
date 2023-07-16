import { cn } from '@/lib/utils'

export default function DotBackground({ dotColor, bgColor, className }: { dotColor: string, bgColor: string, className?: string }) {
  return (
    <div
      className={cn("absolute inset-0 -z-10 h-full w-full cursor-none pointer-events-none", className)}
      style={{
        backgroundColor: bgColor,
        backgroundImage: `radial-gradient(${dotColor} 2px, ${bgColor} 2px)`,
        backgroundSize: '56px 56px',
      }}
    />
  )
}


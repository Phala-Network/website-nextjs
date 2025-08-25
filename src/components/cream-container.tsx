import { cn } from '@/lib/utils'

type CreamContainerProps = {
  children: React.ReactNode
  variant?: 'top' | 'bottom'
  className?: string
}

const CreamContainer = ({
  children,
  variant = 'top',
  className,
}: CreamContainerProps) => {
  return (
    <div
      className={cn(
        'relative',
        variant === 'top' && 'bg-card rounded-b-[4rem]',
        variant === 'bottom' &&
          'from-background via-background to-cream rounded-t-2xl rounded-b-[36px] bg-linear-to-b',
        className,
      )}
    >
      {children}
    </div>
  )
}

export default CreamContainer

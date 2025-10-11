'use client'

import { ScrollArea } from '@/components/ui/scroll-area'

interface ScrollableTabsListProps {
  children: React.ReactNode
}

const ScrollableTabsList = ({ children }: ScrollableTabsListProps) => {
  return (
    <ScrollArea className="w-full whitespace-nowrap rounded-md">
      {children}
    </ScrollArea>
  )
}

export { ScrollableTabsList }

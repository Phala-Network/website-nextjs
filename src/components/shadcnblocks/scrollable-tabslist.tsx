"use client";

import * as React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ScrollableTabsListProps {
  children: React.ReactNode;
  className?: string;
}

const ScrollableTabsList = React.forwardRef<
  HTMLDivElement,
  ScrollableTabsListProps
>(({ className, children, ...props }, ref) => {
  return (
    <ScrollArea ref={ref} className={className} {...props}>
      {children}
    </ScrollArea>
  );
});

ScrollableTabsList.displayName = "ScrollableTabsList";

export { ScrollableTabsList };
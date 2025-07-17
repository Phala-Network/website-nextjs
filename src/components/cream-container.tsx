import React from 'react';

import { cn } from '@/lib/utils';

type CreamContainerProps = {
  children: React.ReactNode;
  variant?: 'top' | 'bottom';
  className?: string;
};

const CreamContainer = ({
  children,
  variant = 'top',
  className,
}: CreamContainerProps) => {
  return (
    <div
      className={cn(
        'relative mx-2.5 mt-2.5 lg:mx-4',
        variant === 'top' &&
          'from-cream via-background to-background/80 rounded-t-[36px] rounded-b-2xl bg-linear-to-b via-20%',
        variant === 'bottom' &&
          'from-background via-background to-cream rounded-t-2xl rounded-b-[36px] bg-linear-to-b',
        className,
      )}
    >
      {children}
    </div>
  );
};

export default CreamContainer;

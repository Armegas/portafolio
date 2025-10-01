import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type ContainerProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export function Container({ children, className, id }: ContainerProps) {
  return (
    <section
      id={id}
      className={cn(
        'w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24',
        className
      )}
    >
      {children}
    </section>
  );
}

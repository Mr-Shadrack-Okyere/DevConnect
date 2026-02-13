import React from 'react';
import { cn } from '../components/ui/utils';

interface TagPillProps {
  children: React.ReactNode;
  className?: string;
}

export function TagPill({ children, className }: TagPillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-lg text-xs",
        "bg-primary/10 text-primary border border-primary/20",
        "hover:bg-primary/20 transition-colors cursor-default",
        className
      )}
    >
      {children}
    </span>
  );
}

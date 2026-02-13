import React from 'react';
import { cn } from '../components/ui/utils';

interface DevCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'stat' | 'project';
  hover?: boolean;
}

export function DevCard({ children, className, variant = 'default', hover = false }: DevCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-card backdrop-blur-sm",
        "shadow-[0_10px_30px_rgba(0,0,0,0.4)]",
        hover && "transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_10px_40px_rgba(59,130,246,0.2)]",
        {
          'default': "p-6",
          'stat': "p-6 relative overflow-hidden",
          'project': "p-4",
        }[variant],
        className
      )}
    >
      {children}
    </div>
  );
}

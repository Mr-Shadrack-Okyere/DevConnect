import React from 'react';
import { cn } from '../components/ui/utils';

interface DevButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function DevButton({ 
  variant = 'primary', 
  size = 'md', 
  className, 
  children, 
  ...props 
}: DevButtonProps) {
  return (
    <button
      className={cn(
        "relative inline-flex items-center justify-center rounded-xl transition-all duration-200",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        {
          // Primary variant with glow
          'primary': "bg-primary text-primary-foreground hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:scale-[1.02]",
          // Secondary variant
          'secondary': "bg-secondary text-secondary-foreground hover:bg-secondary/80",
          // Outline variant
          'outline': "border border-primary text-primary hover:bg-primary/10",
          // Ghost variant
          'ghost': "text-foreground hover:bg-white/5",
        }[variant],
        {
          'sm': "px-4 py-2 text-sm",
          'md': "px-6 py-3 text-base",
          'lg': "px-8 py-4 text-lg",
        }[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

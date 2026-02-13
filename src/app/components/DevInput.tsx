import React from 'react';
import { cn } from '../components/ui/utils';

interface DevInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function DevInput({ label, error, className, ...props }: DevInputProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm text-foreground mb-2">
          {label}
        </label>
      )}
      <input
        className={cn(
          "w-full px-4 py-3 rounded-xl bg-input-background border border-border",
          "text-foreground placeholder:text-muted-foreground",
          "focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",
          "transition-all duration-200",
          error && "border-destructive focus:ring-destructive",
          className
        )}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-destructive">{error}</p>
      )}
    </div>
  );
}

import React from 'react';
import { cn } from '../components/ui/utils';

interface StatusBadgeProps {
  status: 'active' | 'in-review' | 'completed' | 'pending';
  className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const statusConfig = {
    'active': { label: 'Active', className: 'bg-green-500/20 text-green-400 border-green-500/30' },
    'in-review': { label: 'In Review', className: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' },
    'completed': { label: 'Completed', className: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
    'pending': { label: 'Pending', className: 'bg-gray-500/20 text-gray-400 border-gray-500/30' },
  };

  const config = statusConfig[status];

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border",
        config.className,
        className
      )}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current mr-2" />
      {config.label}
    </span>
  );
}

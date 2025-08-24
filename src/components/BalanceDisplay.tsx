import { memo } from 'react';
import { cn } from '@/lib/utils';

interface BalanceDisplayProps {
  balance: number;
  className?: string;
}

const BalanceDisplay = memo(({ balance, className }: BalanceDisplayProps) => {
  return (
    <div className={cn(
      "fixed top-4 sm:top-6 left-1/2 transform -translate-x-1/2 z-50",
      "bg-card/95 backdrop-blur-sm border border-border rounded-lg px-4 sm:px-6 py-2 sm:py-3",
      "shadow-elegant hover:shadow-glow transition-all duration-300",
      "max-w-[90vw]",
      className
    )}>
      <h2 className="text-xl sm:text-2xl font-bold text-primary font-roboto">
        ${balance.toFixed(2)}
      </h2>
    </div>
  );
});

BalanceDisplay.displayName = 'BalanceDisplay';

export default BalanceDisplay;
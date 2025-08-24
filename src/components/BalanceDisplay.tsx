import { memo } from 'react';
import { cn } from '@/lib/utils';

interface BalanceDisplayProps {
  balance: number;
  className?: string;
}

const BalanceDisplay = memo(({ balance, className }: BalanceDisplayProps) => {
  return (
    <div className={cn(
      "fixed top-6 left-1/2 transform -translate-x-1/2 z-50",
      "bg-card border border-border rounded-lg px-6 py-3",
      "shadow-elegant backdrop-blur-sm",
      className
    )}>
      <h2 className="text-2xl font-bold text-primary font-roboto">
        ${balance.toFixed(2)}
      </h2>
    </div>
  );
});

BalanceDisplay.displayName = 'BalanceDisplay';

export default BalanceDisplay;
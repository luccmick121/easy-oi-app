import { memo } from 'react';
import { cn } from '@/lib/utils';

interface BalanceDisplayProps {
  balance: number;
  className?: string;
}

const BalanceDisplay = memo(({ balance, className }: BalanceDisplayProps) => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-center items-center h-[89px] px-4" style={{ backgroundColor: '#0D2436' }}>
        <div className={cn(
          "balance-card rounded-lg px-6 py-3 max-w-[523px] w-full text-right",
          className
        )}>
          <h2 className="text-2xl font-semibold font-roboto" style={{ color: '#138D36' }}>
            ${balance.toFixed(2)}
          </h2>
        </div>
      </div>
    </div>
  );
});

BalanceDisplay.displayName = 'BalanceDisplay';

export default BalanceDisplay;
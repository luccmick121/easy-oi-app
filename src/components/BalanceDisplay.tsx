import { memo } from 'react';

interface BalanceDisplayProps {
  balance: number;
  className?: string;
}

const BalanceDisplay = memo(({ balance, className }: BalanceDisplayProps) => {
  return (
    <div className="balance-header">
      <div className={`balance-display-card zoom-in ${className || ''}`} id="saldo">
        ${balance.toFixed(2)}
      </div>
    </div>
  );
});

BalanceDisplay.displayName = 'BalanceDisplay';

export default BalanceDisplay;
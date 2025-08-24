import { memo } from 'react';
import { Button } from '@/components/ui/button';

interface FinalScreenProps {
  balance: number;
  onWatchVideo: () => void;
}

const FinalScreen = memo(({ balance, onWatchVideo }: FinalScreenProps) => {
  return (
    <div className="min-h-screen pt-[89px] flex flex-col items-center justify-center px-4 fade-in" style={{ backgroundColor: '#00122C' }}>
      <div className="w-full max-w-md rounded-xl p-8 space-y-6 fade-in" style={{ backgroundColor: '#122534' }}>
        <div className="flex justify-center slide-in">
          <img
            src="/images/verify.svg"
            alt="Verification icon"
            className="w-16 h-16"
            loading="lazy"
          />
        </div>

        <div className="text-center space-y-4">
          <h2 className="text-xl font-semibold text-white font-roboto">
            🎁 Congratulations! 🎁
          </h2>
          <p className="text-lg font-medium text-white font-roboto zoom-in">
            Your current balance: ${balance.toFixed(2)}
          </p>
          <p className="text-sm text-white font-roboto">
            To register your bank account and withdraw funds, watch a 4-minute video.
          </p>
        </div>

        <Button
          onClick={onWatchVideo}
          className="w-full py-5 px-6 text-lg font-medium text-white rounded-sm"
          style={{ backgroundColor: '#138D36' }}
        >
          WATCH THE VIDEO
        </Button>

        <footer className="text-center space-y-2 text-xs text-white font-roboto slide-in">
          <p>Privacy Policy | Terms of Use</p>
          <p>All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
});

FinalScreen.displayName = 'FinalScreen';

export default FinalScreen;
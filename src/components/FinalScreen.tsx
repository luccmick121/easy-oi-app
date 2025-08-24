import { memo } from 'react';
import { Button } from '@/components/ui/button';

interface FinalScreenProps {
  balance: number;
  onWatchVideo: () => void;
}

const FinalScreen = memo(({ balance, onWatchVideo }: FinalScreenProps) => {
  return (
    <div className="main-container">
      <div className="flex flex-col items-center justify-center px-4 min-h-screen">
        <div className="final-screen-card fade-in">
          <div className="flex justify-center slide-in mb-6">
            <img
              src="/images/verify.svg"
              alt="Verification icon"
              className="w-16 h-16"
              loading="lazy"
            />
          </div>

          <div className="text-center space-y-4 mb-6">
            <h2 className="text-white" style={{ fontSize: '19px', fontWeight: '500' }}>
              🎁 Congratulations! 🎁
            </h2>
            <p className="text-white zoom-in" id="resultadov" style={{ fontSize: '18px', fontWeight: '500' }}>
              Your current balance: $ {balance.toFixed(2)}
            </p>
            <p className="text-white" style={{ fontSize: '15px', fontWeight: '400' }}>
              To register your bank account and withdraw funds, watch a 4-minute video.
            </p>
          </div>

          <Button
            onClick={onWatchVideo}
            className="w-full py-4 px-6 text-white rounded-sm font-medium mb-6"
            style={{ 
              backgroundColor: '#138D36',
              fontSize: '18px',
              fontWeight: '500',
              border: 'none'
            }}
          >
            WATCH THE VIDEO
          </Button>

          <footer className="text-center space-y-2 text-white slide-in" style={{ fontSize: '12px', fontWeight: '400' }}>
            <p>Privacy Policy | Terms of Use</p>
            <p>All rights reserved.</p>
          </footer>
        </div>
      </div>
    </div>
  );
});

FinalScreen.displayName = 'FinalScreen';

export default FinalScreen;
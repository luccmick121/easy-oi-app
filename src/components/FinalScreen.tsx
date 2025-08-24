import { memo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface FinalScreenProps {
  balance: number;
  onWatchVideo: () => void;
}

const FinalScreen = memo(({ balance, onWatchVideo }: FinalScreenProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 fade-in">
      <div className="w-full max-w-md space-y-4 sm:space-y-6">
        <div className="flex justify-center slide-in">
          <img
            src="/images/verify.svg"
            alt="Verification icon"
            className="w-12 h-12 sm:w-16 sm:h-16 transition-transform duration-300 hover:scale-110"
            loading="lazy"
          />
        </div>

        <Card className="bg-card/95 backdrop-blur-sm border-border shadow-elegant hover:shadow-glow transition-all duration-300">
          <CardContent className="p-4 sm:p-6 text-center space-y-3 sm:space-y-4">
            <h2 className="text-lg sm:text-xl font-semibold text-foreground font-roboto">
              🎁 Congratulations! 🎁
            </h2>
            <p className="text-base sm:text-lg font-medium text-primary font-roboto zoom-in">
              Your current balance: ${balance.toFixed(2)}
            </p>
            <p className="text-sm sm:text-base text-muted-foreground font-roboto">
              To register your bank account and withdraw funds, watch a 4-minute video.
            </p>
          </CardContent>
        </Card>

        <Button
          onClick={onWatchVideo}
          variant="premium"
          size="lg"
          className={`
            w-full py-3 sm:py-4 px-4 sm:px-6 text-sm sm:text-base font-bold
            bg-gradient-primary hover:opacity-90
            text-primary-foreground
            shadow-glow hover:shadow-elegant
            transition-all duration-300 ease-out
            slide-in font-roboto
            hover:scale-105 active:scale-95
          `}
        >
          WATCH THE VIDEO
        </Button>

        <footer className="text-center space-y-1 sm:space-y-2 text-xs sm:text-sm text-muted-foreground font-roboto slide-in" style={{ animationDelay: '0.2s' }}>
          <p>Privacy Policy | Terms of Use</p>
          <p>All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
});

FinalScreen.displayName = 'FinalScreen';

export default FinalScreen;
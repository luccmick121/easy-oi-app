import { memo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface FinalScreenProps {
  balance: number;
  onWatchVideo: () => void;
}

const FinalScreen = memo(({ balance, onWatchVideo }: FinalScreenProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 fade-in">
      <div className="w-full max-w-md space-y-6">
        <div className="flex justify-center slide-in">
          <img
            src="/images/verify.svg"
            alt="Verification icon"
            className="w-16 h-16"
            loading="lazy"
          />
        </div>

        <Card className="bg-card border-border shadow-elegant">
          <CardContent className="p-6 text-center space-y-4">
            <h2 className="text-xl font-semibold text-foreground font-roboto">
              🎁 Congratulations! 🎁
            </h2>
            <p className="text-lg font-medium text-primary font-roboto zoom-in">
              Your current balance: ${balance.toFixed(2)}
            </p>
            <p className="text-muted-foreground font-roboto">
              To register your bank account and withdraw funds, watch a 4-minute video.
            </p>
          </CardContent>
        </Card>

        <Button
          onClick={onWatchVideo}
          variant="default"
          size="lg"
          className={`
            w-full py-4 px-6 text-base font-bold
            bg-gradient-primary hover:opacity-90
            text-primary-foreground
            shadow-glow hover:shadow-elegant
            transition-all duration-300 ease-out
            slide-in font-roboto
          `}
        >
          WATCH THE VIDEO
        </Button>

        <footer className="text-center space-y-2 text-xs text-muted-foreground font-roboto">
          <p>Privacy Policy | Terms of Use</p>
          <p>All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
});

FinalScreen.displayName = 'FinalScreen';

export default FinalScreen;
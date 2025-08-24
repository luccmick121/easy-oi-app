import { memo } from 'react';
import { Question } from '@/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import LoadingSpinner from './LoadingSpinner';

interface QuestionScreenProps {
  question: Question;
  onOptionSelect: (optionId: string) => void;
  disabled?: boolean;
}

const QuestionScreen = memo(({ question, onOptionSelect, disabled }: QuestionScreenProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 fade-in">
      <div className="w-full max-w-md space-y-4 sm:space-y-6">
        {question.image && (
          <div className="flex justify-center slide-in">
            <div className="relative">
              <img
                src={question.image}
                alt="Question illustration"
                className="max-w-full h-auto rounded-lg shadow-elegant transition-transform duration-300 hover:scale-105"
                loading="lazy"
                onError={(e) => {
                  // Fallback for missing images
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          </div>
        )}

        <Card className="bg-card/95 backdrop-blur-sm border-border shadow-elegant hover:shadow-glow transition-all duration-300">
          <CardContent className="p-4 sm:p-6 text-center space-y-3 sm:space-y-4">
            <h2 className="text-lg sm:text-xl font-semibold text-foreground font-roboto leading-tight">
              {question.title}
            </h2>
            {question.subtitle && (
              <p className="text-sm sm:text-base text-muted-foreground font-roboto">
                {question.subtitle}
              </p>
            )}
          </CardContent>
        </Card>

        <div className="space-y-2 sm:space-y-3">
          {question.options.map((option, index) => (
            <Button
              key={option.id}
              onClick={() => onOptionSelect(option.id)}
              disabled={disabled}
              variant="secondary"
              size="lg"
              className={`
                w-full py-3 sm:py-4 px-4 sm:px-6 text-sm sm:text-base font-medium
                bg-secondary/90 hover:bg-primary hover:text-primary-foreground
                border border-border hover:border-primary
                transition-all duration-300 ease-out
                shadow-md hover:shadow-glow
                slide-in font-roboto
                disabled:opacity-50 disabled:cursor-not-allowed
                relative overflow-hidden
              `}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {disabled && (
                <div className="absolute inset-0 loading-shimmer" />
              )}
              <span className="flex items-center justify-center gap-2 sm:gap-3 relative z-10">
                {option.icon && (
                  <span className="text-base sm:text-lg" role="img" aria-hidden="true">
                    {option.icon}
                  </span>
                )}
                {option.text && (
                  <span>{option.text}</span>
                )}
                {disabled && (
                  <LoadingSpinner size="sm" className="ml-2" />
                )}
              </span>
            </Button>
          ))}
        </div>

        {question.id === 1 && (
          <div className="text-center space-y-1 sm:space-y-2 slide-in" style={{ animationDelay: '0.3s' }}>
            <p className="text-base sm:text-lg font-semibold text-primary font-roboto">
              You have already earned $33.91!
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground font-roboto">
              Complete 5 more evaluations and make your first withdrawal!
            </p>
          </div>
        )}
      </div>
    </div>
  );
});

QuestionScreen.displayName = 'QuestionScreen';

export default QuestionScreen;
import { memo } from 'react';
import { Question } from '@/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface QuestionScreenProps {
  question: Question;
  onOptionSelect: (optionId: string) => void;
  disabled?: boolean;
}

const QuestionScreen = memo(({ question, onOptionSelect, disabled }: QuestionScreenProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 fade-in">
      <div className="w-full max-w-md space-y-6">
        {question.image && (
          <div className="flex justify-center slide-in">
            <img
              src={question.image}
              alt="Question illustration"
              className="max-w-full h-auto rounded-lg shadow-elegant"
              loading="lazy"
            />
          </div>
        )}

        <Card className="bg-card border-border shadow-elegant">
          <CardContent className="p-6 text-center space-y-4">
            <h2 className="text-xl font-semibold text-foreground font-roboto">
              {question.title}
            </h2>
            {question.subtitle && (
              <p className="text-muted-foreground font-roboto">
                {question.subtitle}
              </p>
            )}
          </CardContent>
        </Card>

        <div className="space-y-3">
          {question.options.map((option, index) => (
            <Button
              key={option.id}
              onClick={() => onOptionSelect(option.id)}
              disabled={disabled}
              variant="secondary"
              size="lg"
              className={`
                w-full py-4 px-6 text-base font-medium
                bg-secondary hover:bg-primary hover:text-primary-foreground
                border border-border hover:border-primary
                transition-all duration-300 ease-out
                shadow-md hover:shadow-glow
                slide-in font-roboto
              `}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="flex items-center justify-center gap-3">
                {option.icon && (
                  <span className="text-lg">{option.icon}</span>
                )}
                {option.text && (
                  <span>{option.text}</span>
                )}
              </span>
            </Button>
          ))}
        </div>

        {question.id === 1 && (
          <div className="text-center space-y-2 slide-in" style={{ animationDelay: '0.3s' }}>
            <p className="text-lg font-semibold text-primary font-roboto">
              You have already earned $33.91!
            </p>
            <p className="text-sm text-muted-foreground font-roboto">
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
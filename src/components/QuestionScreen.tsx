import { memo } from 'react';
import { Button } from '@/components/ui/button';
import { Question } from '@/types';

interface QuestionScreenProps {
  question: Question;
  onOptionSelect: (optionId: string) => void;
  disabled?: boolean;
}

const QuestionScreen = memo(({ question, onOptionSelect, disabled }: QuestionScreenProps) => {
  // Tela inicial de boas-vindas (primeira pergunta)
  if (question.id === 1) {
    return (
      <div className="main-container">
        <div className="flex flex-col items-center justify-center px-4 min-h-screen">
          <div className="final-screen-card fade-in">
            <div className="text-center space-y-6 mb-8">
              <h2 className="text-white" style={{ fontSize: '24px', fontWeight: '600' }}>
                🎁 Congratulations! 🎁
              </h2>
              <p className="text-white" style={{ fontSize: '19px', fontWeight: '500' }}>
                You have been selected to participate in our exclusive survey and earn real money!
              </p>
              <p className="text-white" style={{ fontSize: '15px', fontWeight: '400' }}>
                Answer a few quick questions and watch your balance grow.
              </p>
            </div>

            <Button
              onClick={() => onOptionSelect('start')}
              disabled={disabled}
              className="w-full py-4 px-6 text-white rounded-sm font-medium"
              style={{ 
                backgroundColor: '#138D36',
                fontSize: '18px',
                fontWeight: '500',
                border: 'none'
              }}
            >
              START EARNING
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Tela de pergunta
  return (
    <div className="main-container">
      <div className="flex flex-col items-center justify-center px-4 min-h-screen">
        <div className="question-card fade-in">
          {question.image && (
            <div className="flex justify-center slide-in mb-6">
              <img
                src={question.image}
                alt={question.title}
                className="rounded-lg"
                style={{ width: '331px', height: 'auto' }}
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </div>
          )}

          <div className="text-center space-y-4 mb-6">
            <h2 className="text-white" style={{ fontSize: '19px', fontWeight: '500' }}>
              {question.title}
            </h2>
            {question.subtitle && (
              <p className="text-white" style={{ fontSize: '15px', fontWeight: '400' }}>
                {question.subtitle}
              </p>
            )}
          </div>

          <div className="space-y-3">
            {question.options.map((option, index) => {
              const buttonColors = [
                '#17B651', // Verde - exato do original
                '#FDD809', // Amarelo - exato do original  
                '#D90000'  // Vermelho - exato do original
              ];
              const backgroundColor = buttonColors[index % buttonColors.length];

              return (
                <Button
                  key={option.id}
                  onClick={() => onOptionSelect(option.id)}
                  disabled={disabled}
                  className={`w-full py-4 px-6 text-white rounded-sm transition-all duration-200 ${
                    disabled ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'
                  }`}
                  style={{ 
                    backgroundColor,
                    fontSize: '18px',
                    fontWeight: '500',
                    border: 'none'
                  }}
                >
                  {option.text}
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
});

QuestionScreen.displayName = 'QuestionScreen';

export default QuestionScreen;
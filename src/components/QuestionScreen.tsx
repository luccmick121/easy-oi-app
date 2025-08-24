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
            <div className="text-center space-y-4">
              <h1 className="text-white" style={{ fontSize: '24px', fontWeight: '600' }}>
                🎁 Congratulations! 🎁
              </h1>
              <div className="balance-display-card mx-auto zoom-in" style={{ fontSize: '24px', fontWeight: '600' }}>
                $33.91
              </div>
              <p className="text-white" style={{ fontSize: '19px', fontWeight: '400' }}>
                You have been selected for <strong>YouTube's new rewards program.</strong> Enjoy!
              </p>
              <p className="text-white" style={{ fontSize: '18px', fontWeight: '400' }}>
                You have already earned <strong>$33.91!</strong>
              </p>
              <p className="text-white" style={{ fontSize: '18px', fontWeight: '400' }}>
                Complete <strong>5 more evaluations</strong> and make your first withdrawal!
              </p>
            </div>

            <Button
              onClick={() => onOptionSelect('start')}
              disabled={disabled}
              className="w-full mt-6 py-4 px-6 text-white rounded-sm font-medium atualizar-saldo"
              style={{ 
                backgroundColor: '#17B651',
                fontSize: '18px',
                fontWeight: '500',
                border: 'none'
              }}
            >
              CLICK HERE AND START!
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
                '#17B651', // Verde
                '#FDD809', // Amarelo  
                '#D90000'  // Vermelho
              ];
              const backgroundColor = buttonColors[index % buttonColors.length];

              return (
                <Button
                  key={option.id}
                  onClick={() => onOptionSelect(option.id)}
                  disabled={disabled}
                  className={`w-full py-4 px-6 text-white rounded-sm transition-all duration-200 atualizar-saldo ${
                    disabled ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'
                  }`}
                  style={{ 
                    backgroundColor,
                    fontSize: '15px',
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
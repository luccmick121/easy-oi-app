import { memo } from 'react';
import { Question } from '@/types';
import { Button } from '@/components/ui/button';

interface QuestionScreenProps {
  question: Question;
  onOptionSelect: (optionId: string) => void;
  disabled?: boolean;
}

const QuestionScreen = memo(({ question, onOptionSelect, disabled }: QuestionScreenProps) => {
  if (question.id === 1) {
    // Tela inicial
    return (
      <div className="min-h-screen pt-[89px] flex flex-col items-center justify-center px-4 fade-in" style={{ backgroundColor: '#00122C' }}>
        <div className="w-full max-w-md rounded-xl p-10 fade-in" style={{ backgroundColor: '#0D2436' }}>
          <div className="text-center space-y-6">
            <h2 className="text-xl font-semibold text-white font-roboto">
              🎁 Congratulations! 🎁
            </h2>
            <p className="text-white font-roboto">
              You have been selected for YouTube's new rewards program. Enjoy!
            </p>
            
            <div className="balance-card rounded px-5 py-4 max-w-[315px] mx-auto">
              <h3 className="text-lg font-normal" style={{ color: '#138D36' }}>
                You have already earned $33.91!
              </h3>
            </div>
            
            <p className="text-white font-roboto">
              Complete 5 more evaluations and make your first withdrawal!
            </p>
            
            <Button
              onClick={() => onOptionSelect('start')}
              disabled={disabled}
              className="w-full py-5 px-5 text-lg font-medium text-white rounded-sm"
              style={{ backgroundColor: '#138D36' }}
            >
              CLICK HERE AND START!
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Telas de perguntas
  return (
    <div className="min-h-screen pt-[89px] flex flex-col items-center justify-center px-4 fade-in" style={{ backgroundColor: '#00122C' }}>
      <div className="w-full max-w-md rounded-xl p-8 space-y-6 fade-in" style={{ backgroundColor: '#122534' }}>
        {question.image && (
          <div className="flex justify-center slide-in">
            <img
              src={question.image}
              alt="Question illustration"
              className="max-w-full h-auto rounded-lg"
              style={{ width: '331px' }}
              loading="lazy"
            />
          </div>
        )}

        <div className="text-center space-y-4">
          <h2 className="text-lg font-normal text-white font-roboto">
            {question.title}
          </h2>
          {question.subtitle && (
            <p className="text-sm font-normal text-white font-roboto">
              {question.subtitle}
            </p>
          )}
        </div>

        <div className="flex gap-4 justify-center">
          {question.options.map((option, index) => {
            let buttonStyle = {};
            if (index === 0) buttonStyle = { backgroundColor: '#17B651' };
            else if (index === 1) buttonStyle = { backgroundColor: '#FDD809' };
            else if (index === 2) buttonStyle = { backgroundColor: '#D90000' };

            return (
              <Button
                key={option.id}
                onClick={() => onOptionSelect(option.id)}
                disabled={disabled}
                className="flex-1 py-3 px-3 text-lg font-medium text-white rounded-xl max-w-[31%]"
                style={buttonStyle}
              >
                <span className="flex items-center justify-center gap-2">
                  {option.icon && (
                    <span className="text-lg">{option.icon}</span>
                  )}
                  {option.text && (
                    <span>{option.text}</span>
                  )}
                </span>
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
});

QuestionScreen.displayName = 'QuestionScreen';

export default QuestionScreen;
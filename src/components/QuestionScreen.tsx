import { memo } from 'react';
import { Button } from '@/components/ui/button';
import { Question } from '@/types';

interface QuestionScreenProps {
  question: Question;
  onOptionSelect: (optionId: string) => void;
  disabled?: boolean;
}

const QuestionScreen = memo(({ question, onOptionSelect, disabled }: QuestionScreenProps) => {
  // Debug logging
  console.log('QuestionScreen render:', { question, disabled });
  
  // Safety check
  if (!question) {
    return (
      <div className="main-container">
        <div className="flex flex-col items-center justify-center px-4 min-h-screen">
          <div className="text-white text-center">
            Error: No question data provided
          </div>
        </div>
      </div>
    );
  }

  // Special welcome screen for first question - EXACT ORIGINAL
  if (question.id === 0) {
    return (
      <div className="main-container">
        <div className="flex flex-col items-center justify-center px-2 min-h-screen">
          <div className="initial-screen-card fade-in">
            <div className="text-center space-y-4">
              <h1 className="text-white font-medium mb-4" style={{ fontSize: '19px' }}>
                🎁 Congratulations! 🎁
              </h1>
              <p className="text-white mb-4" style={{ fontSize: '15px', fontWeight: '400' }}>
                You have been selected for YouTube's new rewards program. Enjoy!
              </p>
              
              {/* Earnings highlight card - EXACT ORIGINAL */}
              <div className="earnings-card">
                You have already earned $33.91!
              </div>
              
              <p className="text-white mb-4" style={{ fontSize: '15px', fontWeight: '400' }}>
                Complete 5 more evaluations and make your first withdrawal!
              </p>
              
              <button
                onClick={() => onOptionSelect('start')}
                disabled={disabled}
                className="w-full py-4 px-6 text-white rounded-sm font-medium transition-all duration-200 hover:scale-105"
                style={{ 
                  backgroundColor: '#138D36',
                  fontSize: '18px',
                  fontWeight: '500',
                  border: 'none'
                }}
              >
                CLICK HERE AND START!
              </button>
              
              {/* Footer - como na segunda imagem */}
              <footer className="mt-6 text-center space-y-2 text-gray-400" style={{ fontSize: '12px', fontWeight: '400' }}>
                <p>Privacy Policy | Terms of Use</p>
                <p>All rights reserved.</p>
              </footer>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Tela de pergunta
  return (
    <div className="main-container">
      <div className="flex flex-col items-center justify-center px-4 min-h-screen">
        <div className="fade-in max-w-md w-full">
          {/* Card branco com o conteúdo do vídeo */}
          <div className="bg-white rounded-lg p-6 mb-6">
            {/* Título do vídeo */}
            {question.videoTitle && (
              <h3 className="text-black font-semibold text-lg mb-4 text-center leading-tight">
                {question.videoTitle}
              </h3>
            )}
            
            {/* Thumbnail do vídeo */}
            {question.image && (
              <div className="flex justify-center slide-in mb-3">
                <img
                  src={question.image}
                  alt={question.videoTitle || question.title}
                  className="rounded-lg max-w-full h-auto"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
            )}
            
            {/* Estatísticas do vídeo */}
            {(question.videoViews || question.videoDuration) && (
              <div className="flex justify-center gap-2 text-gray-500 text-sm mb-4">
                {question.videoViews && <span>{question.videoViews}</span>}
                {question.videoViews && question.videoDuration && <span>•</span>}
                {question.videoDuration && <span>{question.videoDuration}</span>}
              </div>
            )}
          </div>

          {/* Pergunta fora do card branco */}
          <div className="text-center space-y-4 mb-6">
            <h2 className="text-blue-400 font-medium" style={{ fontSize: '19px' }}>
              {question.title}
            </h2>
            {question.subtitle && (
              <p className="text-white" style={{ fontSize: '15px', fontWeight: '400' }}>
                {question.subtitle}
              </p>
            )}
          </div>

          {/* Botões com emojis */}
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
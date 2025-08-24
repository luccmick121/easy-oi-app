import { useState, useCallback, useEffect } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { questions } from '@/data/questions';
import { AppState } from '@/types';
import BalanceDisplay from './BalanceDisplay';
import QuestionScreen from './QuestionScreen';
import FinalScreen from './FinalScreen';

const INITIAL_BALANCE = 33.91;

const RewardsApp = () => {
  const [state, setState] = useState<AppState>({
    currentScreen: 0,
    balance: INITIAL_BALANCE,
    completedQuestions: []
  });

  const [isProcessing, setIsProcessing] = useState(false);

  const showBalanceToast = useCallback((increment: number) => {
    // Toast personalizado como SweetAlert2 do original
    toast.success(
      `You received: +$${increment.toFixed(2)}`,
      {
        duration: 2000,
        position: 'top-center',
        style: {
          background: '#d4edda',
          color: '#138d36',
          border: '1px solid #c3e6cb',
          borderRadius: '5px',
          fontFamily: 'Roboto',
          fontWeight: '600'
        }
      }
    );
  }, []);

  const handleOptionSelect = useCallback((optionId: string) => {
    if (isProcessing) return;
    
    setIsProcessing(true);
    const currentQuestion = questions[state.currentScreen];
    
    // Update balance if this question hasn't been completed
    if (!state.completedQuestions.includes(currentQuestion.id) && currentQuestion.balanceIncrease > 0) {
      const newBalance = state.balance + currentQuestion.balanceIncrease;
      
      setState(prev => ({
        ...prev,
        balance: newBalance,
        completedQuestions: [...prev.completedQuestions, currentQuestion.id]
      }));

      // Show toast for balance increase
      showBalanceToast(currentQuestion.balanceIncrease);
    }

    // Advance to next screen after a short delay
    setTimeout(() => {
      setState(prev => ({
        ...prev,
        currentScreen: Math.min(prev.currentScreen + 1, questions.length)
      }));
      setIsProcessing(false);
    }, state.currentScreen === 0 ? 500 : 1200);
  }, [state.currentScreen, state.balance, state.completedQuestions, isProcessing, showBalanceToast]);

  const handleWatchVideo = useCallback(() => {
    // Simular redirecionamento como no original JS
    toast.success('Redirecting to video...', {
      duration: 3000,
      position: 'top-center',
      style: {
        background: '#d4edda',
        color: '#138d36',
        border: '1px solid #c3e6cb',
        borderRadius: '5px',
        fontFamily: 'Roboto'
      }
    });
    
    // No original fazia: window.location.href = "finish2" + currentUrlParams;
    setTimeout(() => {
      // Reset para demo - no original redirecionaria
      setState({
        currentScreen: 0,
        balance: INITIAL_BALANCE,
        completedQuestions: []
      });
    }, 2000);
  }, []);

  // Show final screen
  if (state.currentScreen >= questions.length) {
    return (
      <>
        <BalanceDisplay balance={state.balance} />
        <FinalScreen 
          balance={state.balance} 
          onWatchVideo={handleWatchVideo}
        />
        <Toaster />
      </>
    );
  }

  const currentQuestion = questions[state.currentScreen];

  return (
    <>
      <BalanceDisplay 
        balance={state.balance} 
        className={state.balance !== INITIAL_BALANCE ? 'zoom-in' : ''}
      />
      <QuestionScreen
        question={currentQuestion}
        onOptionSelect={handleOptionSelect}
        disabled={isProcessing}
      />
      <Toaster />
    </>
  );
};

export default RewardsApp;
import { useState, useCallback, useEffect } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { questions } from '@/data/questions';
import { AppState } from '@/types';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import BalanceDisplay from './BalanceDisplay';
import QuestionScreen from './QuestionScreen';
import FinalScreen from './FinalScreen';

const INITIAL_BALANCE = 33.91;
const STORAGE_KEY = 'rewards-app-state';

const RewardsApp = () => {
  const [state, setState] = useLocalStorage<AppState>(STORAGE_KEY, {
    currentScreen: 0,
    balance: INITIAL_BALANCE,
    completedQuestions: []
  });

  const [isProcessing, setIsProcessing] = useState(false);

  // Reset app state on page refresh if needed
  useEffect(() => {
    const handleBeforeUnload = () => {
      // Optional: Reset state on page refresh
      // localStorage.removeItem(STORAGE_KEY);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  const showBalanceToast = useCallback((increment: number) => {
    toast.success(
      <div className="font-roboto">
        <div className="font-semibold">Balance Updated</div>
        <div className="text-sm">
          You received: <span className="text-green-500 font-medium">+${increment.toFixed(2)}</span>
        </div>
      </div>,
      {
        duration: 2000,
        position: 'top-center',
        style: {
          background: 'hsl(var(--card))',
          color: 'hsl(var(--foreground))',
          border: '1px solid hsl(var(--border))',
          borderRadius: '8px',
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

      // Show toast for balance increase (except for final screen)
      if (state.currentScreen < questions.length - 1) {
        showBalanceToast(currentQuestion.balanceIncrease);
      }
    }

    // Advance to next screen after a short delay
    setTimeout(() => {
      setState(prev => ({
        ...prev,
        currentScreen: Math.min(prev.currentScreen + 1, questions.length)
      }));
      setIsProcessing(false);
    }, state.currentScreen === 0 ? 500 : 1200);
  }, [state.currentScreen, state.balance, state.completedQuestions, isProcessing, showBalanceToast, setState]);

  const handleWatchVideo = useCallback(() => {
    // Simulate redirect to video page
    toast.success('Redirecting to video...', {
      duration: 3000,
      position: 'top-center',
      style: {
        background: 'hsl(var(--card))',
        color: 'hsl(var(--foreground))',
        border: '1px solid hsl(var(--border))',
        borderRadius: '8px',
      }
    });
    
    // In real implementation, this would redirect to finish2 page
    setTimeout(() => {
      // Reset state for demo purposes
      setState({
        currentScreen: 0,
        balance: INITIAL_BALANCE,
        completedQuestions: []
      });
      // window.location.href = '/video';
    }, 2000);
  }, [setState]);

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
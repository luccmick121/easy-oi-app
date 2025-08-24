import { useState, useCallback } from 'react';
import Swal from 'sweetalert2';
import { questions } from '@/data/questions';
import QuestionScreen from './QuestionScreen';
import FinalScreen from './FinalScreen';
import BalanceDisplay from './BalanceDisplay';

const RewardsApp = () => {
  const [currentScreen, setCurrentScreen] = useState(-1); // -1 = welcome, 0-4 = questions, 5 = final
  const [balance, setBalance] = useState(33.91);
  const [completedQuestions, setCompletedQuestions] = useState<Set<number>>(new Set());

  const showBalanceAlert = useCallback((increment: number) => {
    Swal.fire({
      title: 'Balance Updated',
      html: `<strong>You received: <span style="color: green;">+$${increment.toFixed(2)}</span></strong>`,
      icon: 'success',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      background: '#122534', /* Exact original SweetAlert background */
      color: '#FFFFFF',
      customClass: {
        popup: 'fade-in'
      }
    });
  }, []);

  const handleOptionSelect = useCallback((optionId: string) => {
    if (optionId === 'start') {
      setCurrentScreen(0); // Go to first question (index 0)
      return;
    }

    // Only process balance for actual questions (currentScreen >= 0)
    if (currentScreen >= 0) {
      const currentQuestion = questions[currentScreen];
      
      // Always add exactly 45 to balance (like original)
      const increment = 45;
      const newBalance = balance + increment;
      setBalance(newBalance);
      
      // Animate balance exactly like original
      const saldoElement = document.querySelector('#saldo') as HTMLElement;
      if (saldoElement) {
        saldoElement.classList.remove('zoom-in');
        void saldoElement.offsetWidth; // Force reflow
        saldoElement.classList.add('zoom-in');
      }

      // Show popup only if not on final question (question 5 = index 4)
      const isLastQuestion = currentScreen >= questions.length - 1;
      if (!isLastQuestion) {
        showBalanceAlert(increment);
      }

      // Mark question as completed
      const newCompleted = new Set(completedQuestions);
      newCompleted.add(currentScreen);
      setCompletedQuestions(newCompleted);

      // Move to next question or final screen
      if (currentScreen < questions.length - 1) {
        setCurrentScreen(currentScreen + 1);
      } else {
        setCurrentScreen(5); // Show final screen (index 5)
      }

      // Update result text for final screen
      const resultadovElement = document.querySelector('#resultadov');
      if (resultadovElement) {
        resultadovElement.textContent = `Your current balance: $ ${newBalance.toFixed(2)}`;
      }
    }
  }, [currentScreen, balance, completedQuestions, showBalanceAlert]);

  const handleWatchVideo = useCallback(() => {
    // Simulate video redirect with URL params like original
    const currentUrlParams = window.location.search;
    window.open(`finish2${currentUrlParams}`, '_blank');
    
    // Reset the app after a short delay
    setTimeout(() => {
      setCurrentScreen(-1); // Back to welcome screen
      setBalance(33.91);
      setCompletedQuestions(new Set());
    }, 1000);
  }, []);

  // Show question screen or final screen
  const isOnFinalScreen = currentScreen === 5;
  
  // Debug logging
  console.log('RewardsApp render:', { 
    currentScreen, 
    questionsLength: questions.length, 
    isOnFinalScreen,
    currentQuestion: questions[currentScreen] 
  });

  return (
    <>
      <BalanceDisplay balance={balance} />
      
      {isOnFinalScreen ? (
        <FinalScreen balance={balance} onWatchVideo={handleWatchVideo} />
      ) : currentScreen === -1 ? (
        <QuestionScreen
          question={{
            id: 0,
            title: "Welcome Screen",
            subtitle: "",
            image: "",
            options: [{ id: "start", text: "CLICK HERE AND START!" }],
            balanceIncrease: 0
          }}
          onOptionSelect={handleOptionSelect}
        />
      ) : (
        questions[currentScreen] ? (
          <QuestionScreen
            question={questions[currentScreen]}
            onOptionSelect={handleOptionSelect}
          />
        ) : (
          <div className="text-white text-center">
            Error: Question not found for screen {currentScreen}
          </div>
        )
      )}
    </>
  );
};

export default RewardsApp;
export interface Question {
  id: number;
  title: string;
  subtitle?: string;
  image?: string;
  options: QuestionOption[];
  balanceIncrease: number;
}

export interface QuestionOption {
  id: string;
  text?: string;
  icon?: string;
  isCorrect?: boolean;
}

export interface AppState {
  currentScreen: number;
  balance: number;
  completedQuestions: number[];
}
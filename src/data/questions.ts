import { Question } from '@/types';

export const questions: Question[] = [
  {
    id: 1,
    title: "Welcome Screen",
    subtitle: "",
    image: "",
    options: [
      { id: "start", text: "Start" }
    ],
    balanceIncrease: 0
  },
  {
    id: 2,
    title: "What is your reaction when you see this video's thumbnail?",
    subtitle: "Select an option below ⬇️",
    image: "/images/1-EUA.png",
    options: [
      { id: "like", text: "I like it" },
      { id: "love", text: "I love it" },
      { id: "dislike", text: "I don't like it" }
    ],
    balanceIncrease: 45
  },
  {
    id: 3,
    title: "Does this video's thumbnail make you want to click on it?",
    subtitle: "Select an option below ⬇️",
    image: "/images/2-step.png",
    options: [
      { id: "yes", text: "Yes" },
      { id: "maybe", text: "Maybe" },
      { id: "no", text: "No" }
    ],
    balanceIncrease: 45
  },
  {
    id: 4,
    title: "What is your reaction when you see this video's thumbnail?",
    subtitle: "Select an option below ⬇️",
    image: "/images/3-EUA.png",
    options: [
      { id: "like2", text: "I like it" },
      { id: "love2", text: "I love it" },
      { id: "dislike2", text: "I don't like it" }
    ],
    balanceIncrease: 45
  },
  {
    id: 5,
    title: "Does this video's thumbnail make you want to click on it?",
    subtitle: "Select an option below ⬇️",
    image: "/images/4-step.png",
    options: [
      { id: "yes2", text: "Yes" },
      { id: "maybe2", text: "Maybe" },
      { id: "no2", text: "No" }
    ],
    balanceIncrease: 45
  }
];
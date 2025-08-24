import { Question } from '@/types';

export const questions: Question[] = [
  {
    id: 1,
    title: "What is your reaction when you see this video's thumbnail?",
    subtitle: "Select an option below ⬇️",
    image: "/images/1-EUA.png",
    videoTitle: "How AMERICANS see BRAZIL vs How BRAZILIANS see BRAZIL",
    videoViews: "2.1M views",
    videoDuration: "8:45",
    options: [
      { id: "like", text: "😊" },
      { id: "love", text: "😍" },
      { id: "dislike", text: "😞" }
    ],
    balanceIncrease: 45
  },
  {
    id: 2,
    title: "Does this video's thumbnail make you want to click on it?",
    subtitle: "Select an option below ⬇️",
    image: "/images/2-step.png",
    videoTitle: "BRAZIL vs USA - Cultural Differences",
    videoViews: "1.5M views",
    videoDuration: "12:30",
    options: [
      { id: "yes", text: "👍" },
      { id: "maybe", text: "🤔" },
      { id: "no", text: "👎" }
    ],
    balanceIncrease: 45
  },
  {
    id: 3,
    title: "What is your reaction when you see this video's thumbnail?",
    subtitle: "Select an option below ⬇️",
    image: "/images/3-EUA.png",
    videoTitle: "10 Things That Shocked Me About BRAZIL",
    videoViews: "3.2M views",
    videoDuration: "15:20",
    options: [
      { id: "like2", text: "😊" },
      { id: "love2", text: "😍" },
      { id: "dislike2", text: "😞" }
    ],
    balanceIncrease: 45
  },
  {
    id: 4,
    title: "Does this video's thumbnail make you want to click on it?",
    subtitle: "Select an option below ⬇️",
    image: "/images/4-step.png",
    videoTitle: "Why I Left USA to Live in BRAZIL",
    videoViews: "890K views",
    videoDuration: "10:15",
    options: [
      { id: "yes2", text: "👍" },
      { id: "maybe2", text: "🤔" },
      { id: "no2", text: "👎" }
    ],
    balanceIncrease: 45
  },
  {
    id: 5,
    title: "Final question: How likely are you to recommend this survey?",
    subtitle: "Select an option below ⬇️",
    image: "",
    options: [
      { id: "very", text: "Very likely" },
      { id: "somewhat", text: "Somewhat likely" },
      { id: "not", text: "Not likely" }
    ],
    balanceIncrease: 45
  }
];
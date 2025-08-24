import { Question } from '@/types';

export const questions: Question[] = [
  {
    id: 1,
    title: "🎁 Congratulations! 🎁",
    subtitle: "You have been selected for YouTube's new rewards program. Enjoy!",
    options: [
      {
        id: "start",
        text: "CLICK HERE AND START!"
      }
    ],
    balanceIncrease: 0
  },
  {
    id: 2,
    title: "What is your reaction when you see this video's thumbnail?",
    subtitle: "Select an option below ⬇️",
    image: "/images/1-EUA.png",
    options: [
      { id: "angry1", icon: "😠" },
      { id: "angry2", icon: "😡" },
      { id: "angry3", icon: "🤬" }
    ],
    balanceIncrease: 45
  },
  {
    id: 3,
    title: "Does this video's thumbnail make you want to click?",
    subtitle: "Select an option below ⬇️",
    image: "/images/2-step.png",
    options: [
      { id: "yes", text: "YES", icon: "👍" },
      { id: "no", text: "NO", icon: "👎" }
    ],
    balanceIncrease: 45
  },
  {
    id: 4,
    title: "What makes this video interesting to you?",
    subtitle: "Select an option below ⬇️",
    image: "/images/3-EUA.png",
    options: [
      { id: "topic", text: "THE TOPIC" },
      { id: "thumbnail", text: "THE THUMBNAIL" },
      { id: "title", text: "THE TITLE" }
    ],
    balanceIncrease: 45
  },
  {
    id: 5,
    title: "Would you recommend this content to a friend?",
    subtitle: "Select an option below ⬇️",
    image: "/images/4-step.png",
    options: [
      { id: "yes", text: "YES", icon: "👍" },
      { id: "no", text: "NO", icon: "👎" }
    ],
    balanceIncrease: 45
  },
  {
    id: 6,
    title: "🎁 Congratulations! 🎁",
    subtitle: "To register your bank account and withdraw funds, watch a 4-minute video.",
    options: [
      {
        id: "watch",
        text: "WATCH THE VIDEO"
      }
    ],
    balanceIncrease: 45
  }
];
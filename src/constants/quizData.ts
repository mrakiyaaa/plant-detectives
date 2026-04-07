export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswerIndex: number;
}

export interface QuizLevel {
  id: number;
  name: string;
  difficulty: string;
  color: string;
  emoji: string;
  questions: QuizQuestion[];
}

export const quizLevels: QuizLevel[] = [
  {
    id: 1,
    name: "Level 1",
    difficulty: "Beginner",
    color: "bg-green-500",
    emoji: "🟢",
    questions: [
      {
        id: 1,
        question: "Climate change means:",
        options: [
          "Change in weather over time",
          "Only rain changes", 
          "Earth stops rotating"
        ],
        correctAnswerIndex: 0,
      },
      {
        id: 2,
        question: "The Earth is getting warmer mainly because of:",
        options: [
          "Greenhouse gases",
          "Moon movement",
          "Earth's core cooling"
        ],
        correctAnswerIndex: 0,
      },
      {
        id: 3,
        question: "Which gas is most linked to global warming?",
        options: [
          "Oxygen",
          "Carbon dioxide",
          "Helium"
        ],
        correctAnswerIndex: 1,
      },
      {
        id: 4,
        question: "True or False: Humans can affect climate change.",
        options: ["True", "False"],
        correctAnswerIndex: 0,
      },
      {
        id: 5,
        question: "Which activity produces CO₂?",
        options: [
          "Burning fuel",
          "Planting trees",
          "Drinking water"
        ],
        correctAnswerIndex: 0,
      },
      {
        id: 6,
        question: "Climate change can cause:",
        options: [
          "Stronger storms",
          "Only sunny days",
          "No changes"
        ],
        correctAnswerIndex: 0,
      },
      {
        id: 7,
        question: "True or False: Trees help reduce CO₂ in the air.",
        options: ["True", "False"],
        correctAnswerIndex: 0,
      },
      {
        id: 8,
        question: "Fossil fuels include:",
        options: [
          "Coal, oil, gas",
          "Water, air",
          "Fruits and plants"
        ],
        correctAnswerIndex: 0,
      },
    ],
  },
  {
    id: 2,
    name: "Level 2",
    difficulty: "Intermediate",
    color: "bg-yellow-500",
    emoji: "🟡",
    questions: [
      {
        id: 1,
        question: "Greenhouse gases trap:",
        options: [
          "Heat in the atmosphere",
          "Oxygen",
          "Water"
        ],
        correctAnswerIndex: 0,
      },
      {
        id: 2,
        question: "Which is a greenhouse gas?",
        options: [
          "Carbon dioxide",
          "Nitrogen only",
          "Sand particles"
        ],
        correctAnswerIndex: 0,
      },
      {
        id: 3,
        question: "Deforestation increases:",
        options: [
          "CO₂ levels",
          "Oxygen instantly",
          "Rainbows"
        ],
        correctAnswerIndex: 0,
      },
      {
        id: 4,
        question: "Using public transport helps reduce:",
        options: [
          "Pollution",
          "Gravity",
          "Earth rotation"
        ],
        correctAnswerIndex: 0,
      },
      {
        id: 5,
        question: "Climate change can lead to:",
        options: [
          "Sea level rise",
          "Only snow everywhere",
          "No weather changes"
        ],
        correctAnswerIndex: 0,
      },
      {
        id: 6,
        question: "Renewable energy includes:",
        options: [
          "Solar power",
          "Coal",
          "Diesel"
        ],
        correctAnswerIndex: 0,
      },
      {
        id: 7,
        question: "True or False: Plastic waste affects climate change indirectly.",
        options: ["True", "False"],
        correctAnswerIndex: 0,
      },
      {
        id: 8,
        question: "Cutting electricity use helps reduce:",
        options: [
          "Carbon footprint",
          "Oxygen levels",
          "Earth's size"
        ],
        correctAnswerIndex: 0,
      },
    ],
  },
  {
    id: 3,
    name: "Level 3",
    difficulty: "Hard",
    color: "bg-red-500",
    emoji: "🔴",
    questions: [
      {
        id: 1,
        question: "The enhanced greenhouse effect is caused by:",
        options: [
          "Excess greenhouse gases",
          "Earth's orbit change only",
          "Ocean color"
        ],
        correctAnswerIndex: 0,
      },
      {
        id: 2,
        question: "Which sector produces the most CO₂ globally?",
        options: [
          "Energy production",
          "Libraries",
          "Schools"
        ],
        correctAnswerIndex: 0,
      },
      {
        id: 3,
        question: "Methane is mainly produced by:",
        options: [
          "Livestock farming",
          "Rocks",
          "Wind"
        ],
        correctAnswerIndex: 0,
      },
      {
        id: 4,
        question: "Carbon sinks include:",
        options: [
          "Forests and oceans",
          "Roads",
          "Buildings"
        ],
        correctAnswerIndex: 0,
      },
      {
        id: 5,
        question: "Climate feedback loops can:",
        options: [
          "Increase warming",
          "Stop weather",
          "Freeze Earth instantly"
        ],
        correctAnswerIndex: 0,
      },
      {
        id: 6,
        question: "Which gas has the highest warming potential per molecule?",
        options: [
          "Methane",
          "Oxygen",
          "Nitrogen"
        ],
        correctAnswerIndex: 0,
      },
      {
        id: 7,
        question: "Fossil fuels are non-renewable because:",
        options: [
          "They take millions of years to form",
          "They grow fast",
          "They are artificial"
        ],
        correctAnswerIndex: 0,
      },
      {
        id: 8,
        question: "A carbon footprint measures:",
        options: [
          "Total greenhouse gas emissions",
          "Weight of Earth",
          "Number of trees only"
        ],
        correctAnswerIndex: 0,
      },
    ],
  },
];

export interface QuizResult {
  score: number;
  totalQuestions: number;
  earthState: "happy" | "okay" | "sad";
  message: string;
  emoji: string;
  passed: boolean;
}

export const getQuizResult = (score: number, totalQuestions: number = 8): QuizResult => {
  const percentage = (score / totalQuestions) * 100;
  
  if (score === totalQuestions) {
    return {
      score,
      totalQuestions,
      earthState: "happy",
      message: "Excellent! You've mastered this level 🌱 You clearly understand climate change very well. Keep going and become a climate hero!",
      emoji: "🌍💚",
      passed: true,
    };
  } else if (score >= 5) {
    return {
      score,
      totalQuestions,
      earthState: "okay", 
      message: "You did well! 🌍 You understand most ideas, but a little more practice will help you improve even more.",
      emoji: "🌍",
      passed: true,
    };
  } else {
    return {
      score,
      totalQuestions,
      earthState: "sad",
      message: "Don't worry! 🌱 Learning takes time. Try again and improve step by step — you can do it!",
      emoji: "🌍💔",
      passed: false,
    };
  }
};
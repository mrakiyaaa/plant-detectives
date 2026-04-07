export interface QuestionOption {
  text: string;
  emoji: string;
  points: number;
}

export interface Question {
  id: number;
  question: string;
  options: QuestionOption[];
}

export const calculatorQuestions: Question[] = [
  {
    id: 1,
    question: "How do you usually get to school or work?",
    options: [
      { text: "Walk or cycle", emoji: "🚶", points: 0 },
      { text: "Bus or train", emoji: "🚌", points: 1 },
      { text: "Car (shared)", emoji: "🚗", points: 2 },
      { text: "Car (alone)", emoji: "🚗", points: 3 },
    ],
  },
  {
    id: 2,
    question: "How often do you eat meat?",
    options: [
      { text: "Never (vegan)", emoji: "🌱", points: 0 },
      { text: "Rarely (vegetarian)", emoji: "🥗", points: 1 },
      { text: "A few times a week", emoji: "🍗", points: 2 },
      { text: "Every day", emoji: "🥩", points: 3 },
    ],
  },
  {
    id: 3,
    question: "How long are your showers?",
    options: [
      { text: "Under 5 minutes", emoji: "⚡", points: 0 },
      { text: "5–10 minutes", emoji: "🚿", points: 1 },
      { text: "10–15 minutes", emoji: "🛁", points: 2 },
      { text: "Over 15 minutes", emoji: "💧", points: 3 },
    ],
  },
  {
    id: 4,
    question: "How often do you fly?",
    options: [
      { text: "Never", emoji: "✈️", points: 0 },
      { text: "Once a year", emoji: "🌍", points: 1 },
      { text: "A few times a year", emoji: "✈️", points: 2 },
      { text: "Very often", emoji: "🌏", points: 3 },
    ],
  },
  {
    id: 5,
    question: "How do you heat/cool your home?",
    options: [
      { text: "Renewable energy", emoji: "☀️", points: 0 },
      { text: "Mixed/grid electricity", emoji: "💡", points: 1 },
      { text: "Gas or oil", emoji: "🔥", points: 2 },
      { text: "Multiple AC units + gas", emoji: "❄️", points: 3 },
    ],
  },
  {
    id: 6,
    question: "How much do you shop for new clothes or gadgets?",
    options: [
      { text: "Rarely, buy second-hand", emoji: "♻️", points: 0 },
      { text: "Occasionally", emoji: "🛍️", points: 1 },
      { text: "Monthly", emoji: "🏪", points: 2 },
      { text: "Very frequently", emoji: "📦", points: 3 },
    ],
  },
];

export interface ResultTier {
  minScore: number;
  maxScore: number;
  icon: string;
  title: string;
  description: string;
}

export const resultTiers: ResultTier[] = [
  {
    minScore: 0,
    maxScore: 4,
    icon: "🌿",
    title: "Eco Hero!",
    description: "Amazing! Your carbon footprint is very low. You're making planet-friendly choices — keep it up!",
  },
  {
    minScore: 5,
    maxScore: 9,
    icon: "🌱",
    title: "Green Thinker",
    description: "Good job! You're making some eco-friendly choices, but there's room to reduce your footprint a little more.",
  },
  {
    minScore: 10,
    maxScore: 14,
    icon: "🌍",
    title: "Climate Aware",
    description: "You're aware, but your habits have a moderate impact. Try swapping a few daily choices for greener ones!",
  },
  {
    minScore: 15,
    maxScore: 18,
    icon: "🔥",
    title: "High Impact",
    description: "Your footprint is quite high. Small changes — like eating less meat or walking more — can make a big difference!",
  },
];

export const getResultTier = (score: number): ResultTier => {
  return resultTiers.find(tier => score >= tier.minScore && score <= tier.maxScore) || resultTiers[0];
};

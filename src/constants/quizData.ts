export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswerIndex: number;          // single-select
  correctAnswerIndices?: number[];      // multi-select
  isMultiSelect?: boolean;
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
        options: ["Change in weather over time", "Only rain changes", "Earth stops rotating"],
        correctAnswerIndex: 0,
      },
      {
        id: 2,
        question: "The Earth is getting warmer mainly because of:",
        options: ["Greenhouse gases", "Moon movement", "Earth's core cooling"],
        correctAnswerIndex: 0,
      },
      {
        id: 3,
        question: "Which gas is most linked to global warming?",
        options: ["Oxygen", "Carbon dioxide", "Helium"],
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
        options: ["Burning fuel", "Planting trees", "Drinking water"],
        correctAnswerIndex: 0,
      },
      {
        id: 6,
        question: "Climate change can cause:",
        options: ["Stronger storms", "Only sunny days", "No changes"],
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
        options: ["Coal, oil, gas", "Water, air", "Fruits and plants"],
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
        question: "What do greenhouse gases trap?",
        options: ["Cold air", "Oxygen", "Heat in the atmosphere", "Water"],
        correctAnswerIndex: 2,
      },
      {
        id: 2,
        question: "Which action or actions help reduce climate change?",
        options: [
          "Saving electricity",
          "Using public transport",
          "Burning more coal",
          "Cutting down forests",
        ],
        correctAnswerIndex: 0,
        correctAnswerIndices: [0, 1],
        isMultiSelect: true,
      },
      {
        id: 3,
        question: "Climate change only affects temperature, not weather patterns.",
        options: ["True", "False"],
        correctAnswerIndex: 1,
      },
      {
        id: 4,
        question: "Which are the impacts of climate change?",
        options: [
          "Melting glaciers and ocean acidification",
          "Sea level rise and spread of infectious diseases",
          "Increased oxygen levels and improved air quality",
          "Heat related illnesses and respiratory problems",
        ],
        correctAnswerIndex: 0,
        correctAnswerIndices: [0, 1, 3],
        isMultiSelect: true,
      },
      {
        id: 5,
        question: "How does air conditioning affect climate change?",
        options: [
          "It reduces global warming",
          "It cleans the air completely",
          "It uses energy and increases emissions",
          "It has no effect",
        ],
        correctAnswerIndex: 2,
      },
      {
        id: 6,
        question: "Fossil fuels are non-renewable because:",
        options: [
          "They are artificial",
          "They grow fast",
          "They take millions of years to form",
          "They are made from sunlight",
        ],
        correctAnswerIndex: 2,
      },
      {
        id: 7,
        question: "Methane is a stronger greenhouse gas than carbon dioxide.",
        options: ["True", "False"],
        correctAnswerIndex: 0,
      },
      {
        id: 8,
        question: "Cutting electricity use helps reduce?",
        options: [
          "Carbon footprint",
          "Oxygen levels",
          "Greenhouse gas emissions",
          "Earth's size",
        ],
        correctAnswerIndex: 0,
        correctAnswerIndices: [0, 2],
        isMultiSelect: true,
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
        question:
          "🧠 Carbon Footprint — A large city increases its electricity demand rapidly due to rising population and industrial growth. Most of its electricity is still produced by burning coal in thermal power plants. Which of the following best explains the long-term environmental impact of this situation?",
        options: [
          "The city's carbon footprint will decrease because more electricity is being produced",
          "The city's carbon footprint will increase due to higher carbon dioxide emissions",
          "The city will have no environmental impact because electricity is essential",
          "The city will automatically shift to renewable energy sources",
        ],
        correctAnswerIndex: 1,
      },
      {
        id: 2,
        question:
          "🌡️ Advanced Climate Impact — Due to rising global temperatures, scientists observe several changes in polar regions. Which of the following are scientifically accurate consequences of Arctic ice melting?",
        options: [
          "Sea levels rise due to increased water volume in oceans",
          "Global temperatures immediately decrease due to ice loss",
          "Loss of habitat for polar animals such as polar bears",
          "Increase in Earth's reflectivity (albedo effect improves cooling)",
        ],
        correctAnswerIndex: 0,
        correctAnswerIndices: [0, 2],
        isMultiSelect: true,
      },
      {
        id: 3,
        question:
          "🌍 Carbon Footprint Reasoning — A person switches from driving a petrol car alone to using a fully occupied public bus every day. How does this change affect their individual carbon footprint and why?",
        options: [
          "It increases because buses use more fuel overall",
          "It decreases because emissions are shared among many passengers",
          "It stays the same because travel distance is unchanged",
          "It becomes zero because public transport is emission-free",
        ],
        correctAnswerIndex: 1,
      },
      {
        id: 4,
        question:
          "🔥 Greenhouse Gas Science — Which of the following correctly describe why methane is considered a more powerful greenhouse gas than carbon dioxide in the short term?",
        options: [
          "It traps more heat per molecule than carbon dioxide",
          "It has a stronger warming effect over a short period",
          "It is completely harmless to the atmosphere",
          "It absorbs no infrared radiation",
        ],
        correctAnswerIndex: 0,
        correctAnswerIndices: [0, 1],
        isMultiSelect: true,
      },
      {
        id: 5,
        question:
          "🌊 Advanced Climate Impact — Scientists predict that continued global warming will disrupt ocean currents such as the thermohaline circulation. What is the most likely consequence of this disruption?",
        options: [
          "Stable global weather patterns",
          "Changes in regional climate and extreme weather events",
          "Permanent cooling of all oceans",
          "No change in climate systems",
        ],
        correctAnswerIndex: 1,
      },
      {
        id: 6,
        question:
          "🌿 Carbon Sink Understanding — Forests are known as carbon sinks. Which of the following statements correctly explain their role in regulating climate?",
        options: [
          "They absorb carbon dioxide from the atmosphere",
          "They release large amounts of oxygen during photosynthesis",
          "They increase atmospheric carbon dioxide levels",
          "They store carbon in biomass and soil",
        ],
        correctAnswerIndex: 0,
        correctAnswerIndices: [0, 3],
        isMultiSelect: true,
      },
      {
        id: 7,
        question:
          "🌡️ Scientific Reasoning — A region experiences increased use of air conditioning due to rising temperatures. Scientists say this creates a feedback loop. What does this mean in this context?",
        options: [
          "Cooling reduces energy use over time",
          "Increased cooling demand leads to more emissions, which increases warming further",
          "Air conditioning removes greenhouse gases from the atmosphere",
          "Temperature stabilizes naturally without human impact",
        ],
        correctAnswerIndex: 1,
      },
      {
        id: 8,
        question:
          "⚡ Climate Mitigation Logic — A country wants to reduce its national carbon footprint. Which strategy or strategies would scientifically contribute to this goal?",
        options: [
          "Increasing renewable energy use like wind and solar",
          "Expanding coal-based power plants",
          "Improving energy efficiency in buildings",
          "Increasing private vehicle use",
        ],
        correctAnswerIndex: 0,
        correctAnswerIndices: [0, 2],
        isMultiSelect: true,
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

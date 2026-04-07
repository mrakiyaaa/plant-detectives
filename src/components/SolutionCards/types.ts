export interface SolutionCard {
  id: number;
  image: string;
  title: string;
  description: string;
}

export const solutionCards: SolutionCard[] = [
  {
    id: 1,
    image: '/images/energy.png',
    title: '🌞 Switch to Renewable Energy',
    description: 'Use clean energy sources like solar, wind, and hydro instead of fossil fuels. This reduces greenhouse gas emissions and slows global warming.',
  },
  {
    id: 2,
    image: '/images/transport.png',
    title: '🚶‍♀️ Choose Sustainable Transport',
    description: 'Walk, cycle, carpool, or use public transport instead of private vehicles. This helps reduce air pollution and carbon emissions.',
  },
  {
    id: 3,
    image: '/images/trees.png',
    title: '🌳 Protect and Plant Trees',
    description: 'Forests absorb carbon dioxide and help balance the climate. Prevent deforestation and participate in tree-planting activities.',
  },
  {
    id: 4,
    image: '/images/food_waste.png',
    title: '🍽️ Reduce Food Waste',
    description: 'Avoid wasting food and support sustainable agriculture. Less waste means fewer emissions from landfills and food production.',
  },
  {
    id: 5,
    image: '/images/save_energy.png',
    title: '🔌 Save Energy at Home',
    description: 'Turn off unused appliances, use energy-efficient devices, and reduce electricity consumption to lower your carbon footprint.',
  },
  {
    id: 6,
    image: '/images/recycle.png',
    title: '♻️ Reduce, Reuse, Recycle',
    description: 'Minimize waste by reusing materials and recycling properly. This reduces pollution and conserves natural resources.',
  },
  {
    id: 7,
    image: '/images/awareness.png',
    title: '📢 Spread Awareness & Take Action',
    description: 'Educate others, support climate-friendly policies, and be part of environmental movements to create larger impact.',
  },
];
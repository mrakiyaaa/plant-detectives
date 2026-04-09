export interface HumanActivity {
  id: string;
  icon: string;
  title: string;
  description: string;
  gradientFrom: string;
  gradientTo: string;
  image: string;
}

export const humanActivities: HumanActivity[] = [
  {
    id: 'fossil-fuels',
    icon: '🚗',
    title: 'Burning of Fossil Fuels',
    description: 'The burning of coal, oil, and natural gas for electricity, transport, and industry releases large amounts of carbon dioxide (CO₂). This is the largest source of greenhouse gas emissions, significantly enhancing the Greenhouse Effect and increasing global temperatures.',
    gradientFrom: 'from-red-400',
    gradientTo: 'to-orange-500',
    image: '/images/human-activities/Industrial workers at coal furnace.png',
  },
  {
    id: 'deforestation',
    icon: '🌳',
    title: 'Deforestation',
    description: 'Cutting down forests reduces the number of trees that absorb CO₂ from the atmosphere. When trees are burned or decompose, they also release stored carbon, increasing greenhouse gas concentrations and accelerating warming.',
    gradientFrom: 'from-green-400',
    gradientTo: 'to-emerald-500',
    image: '/images/human-activities/Logging operation in dense forest.png',
  },
  {
    id: 'industrial',
    icon: '🏭',
    title: 'Industrial Activities',
    description: 'Factories and manufacturing processes release greenhouse gases such as CO₂, methane (CH₄), and nitrous oxide (N₂O). Industries like cement, steel, and chemical production are particularly high emitters due to energy-intensive operations.',
    gradientFrom: 'from-gray-400',
    gradientTo: 'to-slate-500',
    image: '/images/human-activities/Children observing pollution in an industrial area.png',
  },
  {
    id: 'agriculture',
    icon: '🚜',
    title: 'Agriculture & Livestock',
    description: 'Agricultural activities release methane from livestock digestion (especially cattle) and rice cultivation. Fertilizers also release nitrous oxide, a powerful greenhouse gas that contributes significantly to global warming.',
    gradientFrom: 'from-yellow-400',
    gradientTo: 'to-amber-500',
    image: '/images/human-activities/Agricultural sources of greenhouse gases.png',
  },
  {
    id: 'transportation',
    icon: '🚛',
    title: 'Transportation Systems',
    description: 'Cars, trucks, airplanes, and ships burn fossil fuels for energy, releasing large amounts of CO₂. Rapid urbanization and increased vehicle usage have made transportation one of the fastest-growing sources of emissions.',
    gradientFrom: 'from-blue-400',
    gradientTo: 'to-indigo-500',
    image: '/images/human-activities/Sources of CO₂ emissions in motion.png',
  },
  {
    id: 'waste',
    icon: '🗑️',
    title: 'Waste Disposal',
    description: 'Organic waste in landfills decomposes without oxygen, producing methane gas. Poor waste management and open dumping increase greenhouse gas emissions and contribute to local air pollution.',
    gradientFrom: 'from-purple-400',
    gradientTo: 'to-violet-500',
    image: '/images/human-activities/Garbage dump chaos under hazy skies.png',
  },
  {
    id: 'energy-use',
    icon: '⚡',
    title: 'Excessive Energy Use',
    description: 'High demand for electricity in homes, industries, and cities — especially when generated from fossil fuels — leads to increased CO₂ emissions. Inefficient energy use and overconsumption further worsen the problem.',
    gradientFrom: 'from-cyan-400',
    gradientTo: 'to-teal-500',
    image: '/images/human-activities/Modern family life and energy use.png',
  },
  {
    id: 'urbanization',
    icon: '🏗️',
    title: 'Urbanization',
    description: 'Rapid urban development leads to land clearing, increased energy use, and production of construction materials like cement and steel, all of which emit significant greenhouse gases.',
    gradientFrom: 'from-rose-400',
    gradientTo: 'to-pink-500',
    image: '/images/human-activities/Urbanization through land, energy, and industry.png',
  },
  {
    id: 'air-conditioning',
    icon: '❄️',
    title: 'Air Conditioning',
    description: 'Air conditioning keeps us comfortable but contributes to climate change by using large amounts of electricity, often generated from fossil fuels, releasing carbon dioxide. It also uses refrigerant gases (HFCs) that can trap heat if leaked. Rising temperatures increase usage, creating a warming cycle.',
    gradientFrom: 'from-sky-400',
    gradientTo: 'to-blue-500',
    image: '/images/AC person using.png',
  },
];
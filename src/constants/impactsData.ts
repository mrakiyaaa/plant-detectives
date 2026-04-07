export interface ImpactCard {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface FactItem {
  icon: string;
  text: string;
}

export const environmentImpacts: ImpactCard[] = [
  {
    id: 'rising-temperatures',
    icon: '🌡️',
    title: 'Rising Global Temperatures',
    description: 'Climate change leads to an overall increase in Earth\'s average temperature due to the enhanced greenhouse effect. This warming affects ecosystems, alters weather patterns, and increases the frequency of heatwaves, which can stress plants, animals, and entire habitats.',
  },
  {
    id: 'melting-glaciers',
    icon: '🧊',
    title: 'Melting of Glaciers and Polar Ice',
    description: 'Higher temperatures cause glaciers and ice caps to melt rapidly. This contributes to rising sea levels and reduces freshwater availability in regions that depend on glacier-fed rivers. It also disrupts habitats of cold-region species like polar bears.',
  },
  {
    id: 'sea-level-rise',
    icon: '🌊',
    title: 'Sea Level Rise',
    description: 'As ice melts and ocean water expands due to heat, sea levels rise. This leads to coastal flooding, erosion, saltwater intrusion into freshwater systems, and the loss of coastal ecosystems such as mangroves and wetlands.',
  },
  {
    id: 'extreme-weather',
    icon: '🌪️',
    title: 'Increased Extreme Weather Events',
    description: 'Climate change intensifies natural disasters such as hurricanes, floods, droughts, and wildfires. These events occur more frequently and with greater severity, damaging ecosystems and making recovery harder.',
  },
  {
    id: 'rainfall-patterns',
    icon: '🌧️',
    title: 'Changes in Rainfall Patterns',
    description: 'Some regions experience heavier rainfall and flooding, while others face prolonged droughts. These shifts disrupt agriculture, reduce water availability, and affect natural ecosystems that depend on stable precipitation.',
  },
  {
    id: 'ocean-acidification',
    icon: '🧪',
    title: 'Ocean Acidification',
    description: 'Increased CO₂ levels are absorbed by oceans, forming carbonic acid. This lowers ocean pH and harms marine organisms like corals, shellfish, and plankton, which rely on calcium carbonate for their shells and skeletons.',
  },
  {
    id: 'biodiversity-loss',
    icon: '🦋',
    title: 'Loss of Biodiversity',
    description: 'Many species struggle to adapt to rapid environmental changes. Habitat loss, temperature shifts, and altered food availability can lead to migration, population decline, or extinction.',
  },
  {
    id: 'ecosystem-disruption',
    icon: '⚖️',
    title: 'Disruption of Ecosystems',
    description: 'Climate change alters the balance within ecosystems — changes in temperature affect breeding seasons, food chains, and species interactions, leading to ecosystem instability.',
  },
  {
    id: 'wildfires',
    icon: '🔥',
    title: 'Increased Wildfires',
    description: 'Hotter and drier conditions increase the likelihood of wildfires. These fires destroy forests, release large amounts of CO₂, and reduce air quality.',
  },
  {
    id: 'permafrost-thawing',
    icon: '🌨️',
    title: 'Thawing of Permafrost',
    description: 'In colder regions, frozen ground is thawing due to rising temperatures. This releases trapped greenhouse gases like methane and CO₂, further accelerating global warming.',
  },
];

export const healthImpacts: ImpactCard[] = [
  {
    id: 'heat-illness',
    icon: '🌡️',
    title: 'Heat-Related Illnesses',
    description: 'Rising temperatures increase cases of heat exhaustion, heatstroke, and dehydration. Vulnerable groups such as children, the elderly, and outdoor workers are especially at risk during extreme heatwaves.',
  },
  {
    id: 'infectious-diseases',
    icon: '🦟',
    title: 'Spread of Infectious Diseases',
    description: 'Warmer temperatures and changing rainfall patterns expand the habitats of disease-carrying organisms like mosquitoes, increasing transmission of Dengue Fever and Malaria, especially in tropical regions.',
  },
  {
    id: 'respiratory-problems',
    icon: '💨',
    title: 'Respiratory Problems',
    description: 'Climate change worsens air quality through increased pollution, dust, and wildfire smoke. This aggravates conditions like Asthma and other lung diseases, making breathing difficult for many people.',
  },
  {
    id: 'waterborne-diseases',
    icon: '💧',
    title: 'Water- and Food-Borne Diseases',
    description: 'Flooding and poor sanitation can contaminate drinking water, increasing diseases such as Cholera and Diarrhea. Warmer conditions also promote the growth of harmful bacteria in food.',
  },
  {
    id: 'malnutrition',
    icon: '🌾',
    title: 'Malnutrition and Food Insecurity',
    description: 'Climate change affects crop yields due to droughts, floods, and changing weather patterns. This reduces food availability and quality, leading to undernutrition, especially in developing regions.',
  },
  {
    id: 'mental-health',
    icon: '🧠',
    title: 'Mental Health Issues',
    description: 'Extreme weather events like floods and droughts cause stress, anxiety, and trauma. Displacement, loss of homes, and uncertainty about the future contribute to long-term mental health problems.',
  },
  {
    id: 'injuries-death',
    icon: '🏚️',
    title: 'Injuries and Death from Extreme Events',
    description: 'Natural disasters such as hurricanes, floods, and wildfires can cause physical injuries and loss of life. These events also disrupt healthcare services, making emergency response more difficult.',
  },
  {
    id: 'allergies',
    icon: '🌸',
    title: 'Allergies and Skin Conditions',
    description: 'Warmer temperatures and longer growing seasons increase pollen levels, worsening allergies. Heat and humidity can also lead to skin infections and irritation.',
  },
  {
    id: 'water-access',
    icon: '🚰',
    title: 'Reduced Access to Clean Water',
    description: 'Droughts and water scarcity limit access to safe drinking water, increasing the risk of dehydration and water-related diseases.',
  },
  {
    id: 'vulnerable-populations',
    icon: '👶',
    title: 'Increased Risk for Vulnerable Populations',
    description: 'Children, elderly people, and those with pre-existing conditions are more affected by climate-related health risks. Poor communities are also at higher risk due to limited access to healthcare and resources.',
  },
];

export const climateFacts: FactItem[] = [
  {
    icon: '🌡️',
    text: 'Earth\'s temperature has already increased by ~1.1°C since pre-industrial times, with CO₂ levels exceeding 420 ppm — the highest in millions of years.',
  },
  {
    icon: '🧊',
    text: 'Glaciers are losing about ~267 billion tons of ice per year, while Arctic sea ice is shrinking by ~13% per decade.',
  },
  {
    icon: '🌊',
    text: 'Global sea levels have risen by ~20–25 cm since 1900 and are currently increasing at ~3.3 mm per year.',
  },
  {
    icon: '🌪️',
    text: 'Heatwaves are now 2–3 times more frequent, and storm rainfall intensity has increased by ~10–15%.',
  },
  {
    icon: '💧',
    text: 'The atmosphere holds ~7% more water vapor per 1°C increase, leading to more intense rainfall and flooding events.',
  },
  {
    icon: '🌨️',
    text: 'Permafrost stores about 1,500 billion tons of carbon, and released methane is ~28–34 times more potent than CO₂.',
  },
];
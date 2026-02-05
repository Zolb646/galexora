export interface Planet {
  id: string;
  name: string;
  type: "planet" | "dwarf-planet" | "moon";
  radius: string;
  distance: string;
  info: string;
  moons: number;
  color: string;
  orbitRadius: number; // For SVG positioning (percentage of container)
  orbitDuration: number; // Animation duration in seconds
  size: number; // Visual size multiplier
  explored: boolean;
}

export const planets: Planet[] = [
  {
    id: "mercury",
    name: "Mercury",
    type: "planet",
    radius: "2,439.7 km",
    distance: "57.9 million km",
    info: "Mercury is the smallest planet in our solar system and closest to the Sun. Its surface is covered with craters and it has extreme temperature variations.",
    moons: 0,
    color: "#8B8B8B",
    orbitRadius: 12,
    orbitDuration: 8,
    size: 0.4,
    explored: true,
  },
  {
    id: "venus",
    name: "Venus",
    type: "planet",
    radius: "6,051.8 km",
    distance: "108.2 million km",
    info: "Venus has a thick, toxic atmosphere and is the hottest planet in our solar system. It rotates backwards compared to most planets.",
    moons: 0,
    color: "#E6C87A",
    orbitRadius: 18,
    orbitDuration: 12,
    size: 0.9,
    explored: true,
  },
  {
    id: "earth",
    name: "Earth",
    type: "planet",
    radius: "6,371 km",
    distance: "149.6 million km",
    info: "Earth is the only planet known to support life, with vast oceans and diverse ecosystems. Home base for the Galexora mission.",
    moons: 1,
    color: "#4A90D9",
    orbitRadius: 24,
    orbitDuration: 16,
    size: 1,
    explored: true,
  },
  {
    id: "mars",
    name: "Mars",
    type: "planet",
    radius: "3,389.5 km",
    distance: "227.9 million km",
    info: "Mars is known as the Red Planet due to iron oxide on its surface. Galexora established its first off-world research station here.",
    moons: 2,
    color: "#C1440E",
    orbitRadius: 32,
    orbitDuration: 20,
    size: 0.5,
    explored: true,
  },
  {
    id: "jupiter",
    name: "Jupiter",
    type: "planet",
    radius: "69,911 km",
    distance: "778.5 million km",
    info: "Jupiter is the largest planet with a strong magnetic field. Its Great Red Spot is a storm that has raged for centuries.",
    moons: 95,
    color: "#D4A574",
    orbitRadius: 44,
    orbitDuration: 40,
    size: 2.5,
    explored: true,
  },
  {
    id: "saturn",
    name: "Saturn",
    type: "planet",
    radius: "58,232 km",
    distance: "1.4 billion km",
    info: "Saturn is famous for its stunning ring system, composed of ice and rock particles. Galexora discovered new organic compounds in its rings.",
    moons: 146,
    color: "#E8D5A3",
    orbitRadius: 56,
    orbitDuration: 50,
    size: 2.2,
    explored: true,
  },
  {
    id: "uranus",
    name: "Uranus",
    type: "planet",
    radius: "25,362 km",
    distance: "2.9 billion km",
    info: "Uranus rotates on its side, likely due to a massive collision. Its atmosphere contains methane, giving it a blue-green color.",
    moons: 28,
    color: "#7FDBFF",
    orbitRadius: 68,
    orbitDuration: 65,
    size: 1.4,
    explored: false,
  },
  {
    id: "neptune",
    name: "Neptune",
    type: "planet",
    radius: "24,622 km",
    distance: "4.5 billion km",
    info: "Neptune has the strongest winds in the solar system, reaching 2,100 km/h. It's the furthest major planet from the Sun.",
    moons: 16,
    color: "#4169E1",
    orbitRadius: 80,
    orbitDuration: 80,
    size: 1.3,
    explored: false,
  },
];

export const sun = {
  id: "sun",
  name: "The Sun",
  type: "star" as const,
  radius: "696,340 km",
  info: "Our star, the center of the solar system. Galexora's quantum shields allow for unprecedented close observation.",
  color: "#FFD700",
  size: 4,
};

export interface Planet {
  id: string;
  name: string;
  group: "Rocky planet" | "Gas giant" | "Ice giant";
  radius: string;
  distance: string;
  orbitalPeriod: string;
  info: string;
  color: string;
  diagramDiameter: number;
  animationSeconds: number;
  diagramSize: number;
}

export const planetMeasurements = "https://ssd.jpl.nasa.gov/planets/phys_par.html";
export const planetDistances = "https://science.nasa.gov/solar-system/planets/planet-sizes-and-locations-in-our-solar-system/";

export const planets: Planet[] = [
  {
    id: "mercury", name: "Mercury", group: "Rocky planet",
    radius: "2,440 km", distance: "58 million km", orbitalPeriod: "88 days",
    info: "The smallest planet has a rocky, heavily cratered surface and travels around the Sun faster than any of the others.",
    color: "#a7a7a5", diagramDiameter: 16, animationSeconds: 8, diagramSize: 6,
  },
  {
    id: "venus", name: "Venus", group: "Rocky planet",
    radius: "6,052 km", distance: "108 million km", orbitalPeriod: "225 days",
    info: "A dense atmosphere rich in carbon dioxide traps heat. That greenhouse effect makes Venus the hottest planet in the solar system.",
    color: "#ddbb83", diagramDiameter: 22, animationSeconds: 12, diagramSize: 9,
  },
  {
    id: "earth", name: "Earth", group: "Rocky planet",
    radius: "6,371 km", distance: "149.7 million km", orbitalPeriod: "365 days",
    info: "Liquid oceans cover most of Earth’s surface. It is the only world where life has been confirmed.",
    color: "#78a6d9", diagramDiameter: 28, animationSeconds: 16, diagramSize: 10,
  },
  {
    id: "mars", name: "Mars", group: "Rocky planet",
    radius: "3,390 km", distance: "227.9 million km", orbitalPeriod: "687 days",
    info: "Iron minerals give Mars its reddish color. Valleys, deltas, and other geological features preserve evidence of water on its ancient surface.",
    color: "#cb785c", diagramDiameter: 36, animationSeconds: 20, diagramSize: 7,
  },
  {
    id: "jupiter", name: "Jupiter", group: "Gas giant",
    radius: "69,911 km", distance: "778 million km", orbitalPeriod: "11.86 years",
    info: "The largest planet is mostly hydrogen and helium. Its Great Red Spot is an immense storm in the atmosphere.",
    color: "#d5a383", diagramDiameter: 48, animationSeconds: 40, diagramSize: 22,
  },
  {
    id: "saturn", name: "Saturn", group: "Gas giant",
    radius: "58,232 km", distance: "1.4 billion km", orbitalPeriod: "29.45 years",
    info: "Saturn’s rings are made of countless particles of ice and rock. Some of those particles are as small as grains of dust.",
    color: "#d9c29c", diagramDiameter: 60, animationSeconds: 50, diagramSize: 20,
  },
  {
    id: "uranus", name: "Uranus", group: "Ice giant",
    radius: "25,362 km", distance: "2.9 billion km", orbitalPeriod: "84.02 years",
    info: "Uranus rotates on an axis tilted almost sideways. Methane in its atmosphere helps give the planet its blue-green appearance.",
    color: "#8ec2c3", diagramDiameter: 72, animationSeconds: 65, diagramSize: 13,
  },
  {
    id: "neptune", name: "Neptune", group: "Ice giant",
    radius: "24,622 km", distance: "4.5 billion km", orbitalPeriod: "164.79 years",
    info: "Neptune is the outermost planet. Voyager 2 flew past it in 1989 and photographed dark storms in its fast-moving atmosphere.",
    color: "#8399ce", diagramDiameter: 84, animationSeconds: 80, diagramSize: 12,
  },
];

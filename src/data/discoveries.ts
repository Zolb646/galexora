import {
  Sparkles,
  Skull,
  Atom,
  Orbit,
  Ghost,
  Gem,
  Waves,
  Zap,
} from "lucide-react";

export type DiscoveryCategory =
  | "alien-life"
  | "star"
  | "black-hole"
  | "relic"
  | "phenomenon";

export interface Discovery {
  id: string;
  title: string;
  category: DiscoveryCategory;
  description: string;
  dateDiscovered: string;
  location: string;
  significance: "minor" | "major" | "breakthrough";
  icon: typeof Sparkles;
  color: string;
}

export const discoveries: Discovery[] = [
  {
    id: "nebula-x7",
    title: "Nebula X-7",
    category: "phenomenon",
    description:
      "A rare stellar nursery producing new stars at unprecedented rates. Contains exotic matter not found elsewhere in the observable universe.",
    dateDiscovered: "2157.03.15",
    location: "Andromeda Sector",
    significance: "breakthrough",
    icon: Sparkles,
    color: "#E066FF",
  },
  {
    id: "void-walker",
    title: "The Void Walker",
    category: "black-hole",
    description:
      "A supermassive black hole exhibiting unusual energy emissions. Galexora detected signals that may be artificially generated.",
    dateDiscovered: "2154.11.28",
    location: "Sagittarius A* Vicinity",
    significance: "major",
    icon: Skull,
    color: "#1a1a2e",
  },
  {
    id: "crystal-entities",
    title: "Crystal Entities",
    category: "alien-life",
    description:
      "Silicon-based lifeforms found within asteroid fields. They communicate through light refraction patterns.",
    dateDiscovered: "2156.07.09",
    location: "Kuiper Belt",
    significance: "breakthrough",
    icon: Gem,
    color: "#00D4FF",
  },
  {
    id: "ancient-beacon",
    title: "Ancient Beacon",
    category: "relic",
    description:
      "A 3-billion-year-old artifact emitting a repeating signal across multiple dimensions. Origin unknown.",
    dateDiscovered: "2155.02.14",
    location: "Proxima Centauri System",
    significance: "breakthrough",
    icon: Zap,
    color: "#FFD700",
  },
  {
    id: "plasma-whales",
    title: "Plasma Whales",
    category: "alien-life",
    description:
      "Massive energy-based creatures that swim through stellar coronas. They appear to be feeding on solar radiation.",
    dateDiscovered: "2158.01.22",
    location: "Alpha Centauri B",
    significance: "major",
    icon: Waves,
    color: "#FF6B6B",
  },
  {
    id: "ghost-star",
    title: "Ghost Star",
    category: "star",
    description:
      "A star that appears and disappears on a 47-day cycle. Theories suggest it may be shifting between dimensions.",
    dateDiscovered: "2153.09.03",
    location: "Triangulum Galaxy",
    significance: "major",
    icon: Ghost,
    color: "#9B59B6",
  },
  {
    id: "quantum-ruins",
    title: "Quantum Ruins",
    category: "relic",
    description:
      "Structures existing in quantum superposition - simultaneously intact and destroyed. Technology far beyond current understanding.",
    dateDiscovered: "2157.12.01",
    location: "Kepler-442b",
    significance: "breakthrough",
    icon: Atom,
    color: "#3498DB",
  },
  {
    id: "singing-nebula",
    title: "Singing Nebula",
    category: "phenomenon",
    description:
      "A nebula that produces harmonic frequencies when stellar winds pass through. The 'music' follows mathematical patterns.",
    dateDiscovered: "2156.04.18",
    location: "Carina Nebula Region",
    significance: "minor",
    icon: Orbit,
    color: "#1ABC9C",
  },
];

export const categoryLabels: Record<DiscoveryCategory, string> = {
  "alien-life": "Alien Life",
  star: "Stars",
  "black-hole": "Black Holes",
  relic: "Ancient Relics",
  phenomenon: "Phenomena",
};

export const categoryColors: Record<DiscoveryCategory, string> = {
  "alien-life": "bg-green-500/20 text-green-400 border-green-500/30",
  star: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  "black-hole": "bg-purple-500/20 text-purple-400 border-purple-500/30",
  relic: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  phenomenon: "bg-blue-500/20 text-blue-400 border-blue-500/30",
};

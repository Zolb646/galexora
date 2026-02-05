export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  type: "origin" | "mission" | "discovery" | "upgrade";
}

export const timeline: TimelineEvent[] = [
  {
    year: "2089",
    title: "Project Genesis",
    description:
      "United Earth Council approves the Galexora deep space exploration program. Construction begins on the most advanced spacecraft ever conceived.",
    type: "origin",
  },
  {
    year: "2102",
    title: "First Launch",
    description:
      "Galexora launches from Earth's orbital station, beginning humanity's greatest journey into the unknown.",
    type: "mission",
  },
  {
    year: "2115",
    title: "First Contact",
    description:
      "Galexora encounters the Crystal Entities in the Kuiper Belt - humanity's first confirmed alien life discovery.",
    type: "discovery",
  },
  {
    year: "2128",
    title: "Quantum Breakthrough",
    description:
      "Installation of the Quantum Warp Drive enables faster-than-light travel, expanding Galexora's reach to other galaxies.",
    type: "upgrade",
  },
  {
    year: "2145",
    title: "A.R.I.A. Awakening",
    description:
      "The ship's AI achieves true consciousness, becoming an invaluable partner and friend to the exploration team.",
    type: "upgrade",
  },
  {
    year: "2157",
    title: "Ancient Beacon",
    description:
      "Discovery of a 3-billion-year-old artifact changes everything we know about the universe's history.",
    type: "discovery",
  },
];

export const aboutContent = {
  title: "The Galexora Mission",
  subtitle: "Charting the Unknown Since 2089",
  introduction:
    "Galexora is humanity's most ambitious deep space exploration vessel, designed to push the boundaries of known space and uncover the mysteries of the cosmos.",
  mission:
    "Our mission is to explore strange new worlds, seek out new life and civilizations, and boldly go where no one has gone before. We are not just explorers - we are ambassadors of Earth, carrying the hopes and dreams of all humanity into the infinite darkness.",
  philosophy:
    "We believe that understanding the universe is key to understanding ourselves. Every star we chart, every lifeform we encounter, every ancient mystery we unravel brings us closer to answering the fundamental questions: Where do we come from? Are we alone? What is our place in the cosmos?",
  stats: [
    { label: "Years Active", value: "37", suffix: "+" },
    { label: "Galaxies Explored", value: "12", suffix: "" },
    { label: "Discoveries", value: "2,847", suffix: "" },
    { label: "Light Years Traveled", value: "4.2M", suffix: "" },
    { label: "Species Catalogued", value: "156", suffix: "" },
    { label: "Crew Members", value: "127", suffix: "" },
  ],
};

export const typeColors: Record<TimelineEvent["type"], string> = {
  origin: "bg-cosmic-blue/20 border-cosmic-blue text-cosmic-blue",
  mission: "bg-cosmic-cyan/20 border-cosmic-cyan text-cosmic-cyan",
  discovery: "bg-cosmic-pink/20 border-cosmic-pink text-cosmic-pink",
  upgrade: "bg-cosmic-gold/20 border-cosmic-gold text-cosmic-gold",
};

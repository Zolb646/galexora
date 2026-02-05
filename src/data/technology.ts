import {
  Rocket,
  Brain,
  Radio,
  Shield,
  Cpu,
  Microscope,
  Satellite,
  Scan,
} from "lucide-react";

export type TechCategory =
  | "propulsion"
  | "ai"
  | "sensors"
  | "defense"
  | "communication";

export interface Technology {
  id: string;
  name: string;
  category: TechCategory;
  description: string;
  specs: Record<string, string>;
  status: "active" | "prototype" | "classified";
  icon: typeof Rocket;
  color: string;
}

export const technologies: Technology[] = [
  {
    id: "quantum-drive",
    name: "Quantum Warp Drive",
    category: "propulsion",
    description:
      "Enables faster-than-light travel by folding space-time. The core technology behind Galexora's ability to traverse galaxies.",
    specs: {
      "Max Speed": "5.2 light-years/day",
      "Energy Source": "Dark Matter Reactor",
      Cooldown: "4.7 hours",
      Range: "Unlimited",
    },
    status: "active",
    icon: Rocket,
    color: "#00D4FF",
  },
  {
    id: "aria-ai",
    name: "A.R.I.A. - AI Companion",
    category: "ai",
    description:
      "Advanced Reasoning and Intelligence Architecture. Galexora's sentient AI partner capable of independent thought and emotional understanding.",
    specs: {
      "Processing Power": "10^24 FLOPS",
      Consciousness: "Level 7 Sentient",
      "Learning Rate": "Adaptive Quantum",
      Personality: "Curious & Protective",
    },
    status: "active",
    icon: Brain,
    color: "#E066FF",
  },
  {
    id: "void-shield",
    name: "Void Shield Generator",
    category: "defense",
    description:
      "Creates a bubble of warped space-time that deflects projectiles and radiation. Can withstand direct stellar flare impact.",
    specs: {
      "Shield Strength": "9.8 Petajoules",
      Coverage: "360° Spherical",
      "Recharge Rate": "12 seconds",
      "Radiation Block": "99.97%",
    },
    status: "active",
    icon: Shield,
    color: "#3498DB",
  },
  {
    id: "subspace-comm",
    name: "Subspace Communicator",
    category: "communication",
    description:
      "Enables instantaneous communication across any distance by transmitting through subspace dimensions.",
    specs: {
      Latency: "0.003ms (any distance)",
      Bandwidth: "Unlimited",
      Encryption: "Quantum Entangled",
      Range: "Inter-galactic",
    },
    status: "active",
    icon: Radio,
    color: "#1ABC9C",
  },
  {
    id: "bio-scanner",
    name: "Universal Bio-Scanner",
    category: "sensors",
    description:
      "Detects and analyzes any form of life, including non-carbon-based organisms. Can identify life signs through solid matter.",
    specs: {
      Range: "50,000 km",
      "Detection Types": "All known + unknown",
      Resolution: "Molecular level",
      "Scan Speed": "Real-time",
    },
    status: "active",
    icon: Microscope,
    color: "#2ECC71",
  },
  {
    id: "neural-link",
    name: "Neural Interface",
    category: "ai",
    description:
      "Direct brain-computer connection allowing instant control of ship systems and communication with A.R.I.A.",
    specs: {
      "Response Time": "0.1ms",
      "Data Transfer": "1 TB/s",
      "Mental Strain": "Negligible",
      Compatibility: "All sentient species",
    },
    status: "active",
    icon: Cpu,
    color: "#9B59B6",
  },
  {
    id: "dimensional-probe",
    name: "Dimensional Probe",
    category: "sensors",
    description:
      "Scans parallel dimensions and alternate realities. Essential for navigating quantum anomalies.",
    specs: {
      "Dimensions Accessible": "11 confirmed",
      "Probe Range": "Local cluster",
      "Data Return": "Quantum encrypted",
      Risk: "Moderate",
    },
    status: "prototype",
    icon: Satellite,
    color: "#F39C12",
  },
  {
    id: "reality-anchor",
    name: "Reality Anchor",
    category: "defense",
    description:
      "Stabilizes local space-time to prevent involuntary dimensional shifts. Classified technology.",
    specs: {
      "Stability Field": "10 km radius",
      "Dimensional Lock": "Absolute",
      "Power Draw": "Extreme",
      Status: "[REDACTED]",
    },
    status: "classified",
    icon: Scan,
    color: "#E74C3C",
  },
];

export const categoryLabels: Record<TechCategory, string> = {
  propulsion: "Propulsion",
  ai: "AI Systems",
  sensors: "Sensors",
  defense: "Defense",
  communication: "Communication",
};

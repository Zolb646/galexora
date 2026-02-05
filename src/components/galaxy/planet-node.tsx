"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { Planet } from "@/data/planets";

interface PlanetNodeProps {
  planet: Planet;
  isSelected: boolean;
  onClick: () => void;
  animationOffset?: number;
}

export function PlanetNode({
  planet,
  isSelected,
  onClick,
  animationOffset = 0,
}: PlanetNodeProps) {
  const baseSize = 12 * planet.size;

  return (
    <motion.div
      className="absolute left-1/2 top-1/2"
      style={{
        width: `${planet.orbitRadius * 2}%`,
        height: `${planet.orbitRadius * 2}%`,
        marginLeft: `-${planet.orbitRadius}%`,
        marginTop: `-${planet.orbitRadius}%`,
      }}
      animate={{ rotate: 360 }}
      transition={{
        duration: planet.orbitDuration,
        repeat: Infinity,
        ease: "linear",
        delay: animationOffset,
      }}
    >
      {/* Planet positioned on orbit */}
      <motion.button
        onClick={onClick}
        className={cn(
          "absolute -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-300",
          "hover:scale-125 focus:outline-none focus:ring-2 focus:ring-cosmic-cyan focus:ring-offset-2 focus:ring-offset-transparent",
          isSelected && "ring-2 ring-cosmic-cyan scale-125"
        )}
        style={{
          width: baseSize,
          height: baseSize,
          backgroundColor: planet.color,
          boxShadow: isSelected
            ? `0 0 20px ${planet.color}, 0 0 40px ${planet.color}50`
            : `0 0 10px ${planet.color}50`,
          left: "100%",
          top: "50%",
        }}
        whileHover={{
          boxShadow: `0 0 30px ${planet.color}, 0 0 60px ${planet.color}50`,
        }}
        // Counter-rotate to keep planet upright
        animate={{ rotate: -360 }}
        transition={{
          duration: planet.orbitDuration,
          repeat: Infinity,
          ease: "linear",
          delay: animationOffset,
        }}
      >
        {/* Planet rings for Saturn */}
        {planet.id === "saturn" && (
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/30"
            style={{
              width: baseSize * 1.8,
              height: baseSize * 0.5,
              transform: "translate(-50%, -50%) rotate(-20deg)",
            }}
          />
        )}

        {/* Planet name tooltip */}
        <span className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap text-[10px] font-medium text-white/70 opacity-0 transition-opacity group-hover:opacity-100">
          {planet.name}
        </span>
      </motion.button>
    </motion.div>
  );
}

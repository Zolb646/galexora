"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowTextProps {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  glowColor?: "cyan" | "pink" | "blue" | "gold" | "purple";
  animate?: boolean;
  delay?: number;
}

const glowColors = {
  cyan: "text-cosmic-cyan",
  pink: "text-cosmic-pink",
  blue: "text-cosmic-blue",
  gold: "text-cosmic-gold",
  purple: "text-cosmic-purple",
};

const glowShadows = {
  cyan: "drop-shadow-[0_0_10px_oklch(0.70_0.15_200)] drop-shadow-[0_0_30px_oklch(0.70_0.15_200/0.5)]",
  pink: "drop-shadow-[0_0_10px_oklch(0.55_0.20_320)] drop-shadow-[0_0_30px_oklch(0.55_0.20_320/0.5)]",
  blue: "drop-shadow-[0_0_10px_oklch(0.50_0.20_250)] drop-shadow-[0_0_30px_oklch(0.50_0.20_250/0.5)]",
  gold: "drop-shadow-[0_0_10px_oklch(0.75_0.15_85)] drop-shadow-[0_0_30px_oklch(0.75_0.15_85/0.5)]",
  purple: "drop-shadow-[0_0_10px_oklch(0.45_0.25_300)] drop-shadow-[0_0_30px_oklch(0.45_0.25_300/0.5)]",
};

export function GlowText({
  children,
  className,
  as: Component = "span",
  glowColor = "cyan",
  animate = true,
  delay = 0,
}: GlowTextProps) {
  const MotionComponent = motion.create(Component);

  if (!animate) {
    return (
      <Component
        className={cn(
          glowColors[glowColor],
          glowShadows[glowColor],
          className
        )}
      >
        {children}
      </Component>
    );
  }

  return (
    <MotionComponent
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={cn(
        glowColors[glowColor],
        glowShadows[glowColor],
        className
      )}
    >
      {children}
    </MotionComponent>
  );
}

export function GradientText({
  children,
  className,
  as: Component = "span",
  animate = true,
  delay = 0,
}: Omit<GlowTextProps, "glowColor">) {
  const MotionComponent = motion.create(Component);

  if (!animate) {
    return (
      <Component className={cn("gradient-text", className)}>
        {children}
      </Component>
    );
  }

  return (
    <MotionComponent
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={cn("gradient-text", className)}
    >
      {children}
    </MotionComponent>
  );
}

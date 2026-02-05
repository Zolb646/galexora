"use client";

import { motion } from "framer-motion";

interface OrbitPathProps {
  radius: number; // percentage
  duration?: number;
  color?: string;
}

export function OrbitPath({
  radius,
  duration = 100,
  color = "rgba(255, 255, 255, 0.1)",
}: OrbitPathProps) {
  const size = radius * 2;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
      style={{
        width: `${size}%`,
        height: `${size}%`,
        border: `1px dashed ${color}`,
      }}
    />
  );
}

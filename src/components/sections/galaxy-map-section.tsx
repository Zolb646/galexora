"use client";

import { motion } from "framer-motion";
import { Map } from "lucide-react";
import { useIntersection } from "@/hooks/use-intersection";
import { GlowText } from "@/components/effects/glow-text";
import { SolarSystemMap } from "@/components/galaxy/solar-system-map";

export function GalaxyMapSection() {
  const { ref, isIntersecting } = useIntersection({ threshold: 0.1 });

  return (
    <section id="galaxy-map" className="relative py-24" ref={ref}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cosmic-blue/5 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-cosmic-blue/30 bg-cosmic-blue/10 px-4 py-1 text-sm text-cosmic-blue">
            <Map className="h-4 w-4" />
            Interactive Map
          </span>
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            <GlowText glowColor="blue" animate={false}>
              Solar System Explorer
            </GlowText>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/60">
            Navigate through our solar system. Click on any planet to discover
            its secrets and learn about Galexora&apos;s exploration findings.
          </p>
        </motion.div>

        {/* Solar System Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isIntersecting ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <SolarSystemMap />
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Rocket } from "lucide-react";
import { Starfield } from "@/components/effects/starfield";
import { GlowText, GradientText } from "@/components/effects/glow-text";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const handleExplore = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Starfield Background */}
      <Starfield className="z-0" />

      {/* Nebula gradient overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-cosmic-purple/10 to-cosmic-deep/50" />

      {/* Parallax floating elements */}
      <motion.div
        style={{ y: y1 }}
        className="absolute left-[10%] top-[20%] z-[2] h-32 w-32 rounded-full bg-cosmic-pink/20 blur-3xl"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute right-[15%] top-[30%] z-[2] h-48 w-48 rounded-full bg-cosmic-blue/20 blur-3xl"
      />
      <motion.div
        style={{ y: y1 }}
        className="absolute bottom-[20%] left-[20%] z-[2] h-40 w-40 rounded-full bg-cosmic-cyan/10 blur-3xl"
      />

      {/* Main content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto max-w-5xl px-6 text-center"
      >
        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-4 flex items-center justify-center gap-2"
        >
          <Rocket className="h-5 w-5 text-cosmic-cyan" />
          <span className="text-sm font-medium tracking-widest text-cosmic-cyan uppercase">
            Deep Space Exploration Vessel
          </span>
        </motion.div>

        {/* Main title */}
        <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          <GlowText
            as="span"
            glowColor="cyan"
            delay={0.4}
            className="block"
          >
            GALEXORA
          </GlowText>
        </h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-8 text-xl text-white/80 sm:text-2xl md:text-3xl"
        >
          Explore{" "}
          <GradientText as="span" animate={false} className="font-semibold">
            Beyond the Known Universe
          </GradientText>
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mx-auto mb-10 max-w-2xl text-base text-white/60 sm:text-lg"
        >
          Join humanity&apos;s most ambitious journey through the cosmos. Discover
          alien civilizations, unravel ancient mysteries, and chart the
          unexplored reaches of space.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button
            size="lg"
            onClick={handleExplore}
            className="group relative overflow-hidden bg-cosmic-cyan px-8 text-cosmic-deep hover:bg-cosmic-cyan/90"
          >
            <span className="relative z-10 flex items-center gap-2 font-semibold">
              Begin Exploration
              <Rocket className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() =>
              document
                .getElementById("galaxy-map")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="border-white/20 bg-white/5 px-8 backdrop-blur hover:bg-white/10"
          >
            View Galaxy Map
          </Button>
        </motion.div>

        {/* Stats preview */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4"
        >
          {[
            { value: "37+", label: "Years Active" },
            { value: "12", label: "Galaxies Explored" },
            { value: "2,847", label: "Discoveries" },
            { value: "156", label: "Species Found" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-2xl font-bold text-cosmic-cyan sm:text-3xl">
                {stat.value}
              </div>
              <div className="text-xs text-white/50 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={handleExplore}
        >
          <span className="text-xs text-white/40 uppercase tracking-widest">
            Scroll to explore
          </span>
          <ChevronDown className="h-6 w-6 text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}

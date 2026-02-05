"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Telescope, Calendar, MapPin } from "lucide-react";
import { useIntersection } from "@/hooks/use-intersection";
import { GlowText } from "@/components/effects/glow-text";
import {
  discoveries,
  categoryLabels,
  categoryColors,
  type DiscoveryCategory,
} from "@/data/discoveries";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const allCategories: (DiscoveryCategory | "all")[] = [
  "all",
  "alien-life",
  "star",
  "black-hole",
  "relic",
  "phenomenon",
];

export function DiscoveriesSection() {
  const { ref, isIntersecting } = useIntersection({ threshold: 0.1 });
  const [filter, setFilter] = useState<DiscoveryCategory | "all">("all");

  const filteredDiscoveries =
    filter === "all"
      ? discoveries
      : discoveries.filter((d) => d.category === filter);

  return (
    <section id="discoveries" className="relative py-24" ref={ref}>
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-cosmic-pink/30 bg-cosmic-pink/10 px-4 py-1 text-sm text-cosmic-pink">
            <Telescope className="h-4 w-4" />
            Exploration Findings
          </span>
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            <GlowText glowColor="pink" animate={false}>
              Major Discoveries
            </GlowText>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/60">
            From alien lifeforms to ancient artifacts, explore the incredible
            discoveries made during Galexora&apos;s cosmic journey.
          </p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 flex flex-wrap justify-center gap-2"
        >
          {allCategories.map((category) => (
            <Button
              key={category}
              variant="outline"
              size="sm"
              onClick={() => setFilter(category)}
              className={cn(
                "border-white/20 bg-white/5 transition-all",
                filter === category &&
                  "border-cosmic-pink bg-cosmic-pink/20 text-cosmic-pink"
              )}
            >
              {category === "all" ? "All" : categoryLabels[category]}
            </Button>
          ))}
        </motion.div>

        {/* Discoveries Grid */}
        <motion.div
          layout
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredDiscoveries.map((discovery, index) => {
              const Icon = discovery.icon;
              return (
                <motion.div
                  key={discovery.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group glass rounded-xl overflow-hidden"
                >
                  {/* Card header with icon */}
                  <div
                    className="relative h-32 flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${discovery.color}20, transparent)`,
                    }}
                  >
                    <Icon
                      className="h-16 w-16 transition-transform group-hover:scale-110"
                      style={{ color: discovery.color }}
                    />
                    {/* Significance badge */}
                    {discovery.significance === "breakthrough" && (
                      <span className="absolute top-3 right-3 rounded-full bg-cosmic-gold/20 px-2 py-0.5 text-xs font-medium text-cosmic-gold">
                        Breakthrough
                      </span>
                    )}
                  </div>

                  {/* Card content */}
                  <div className="p-5">
                    <div className="mb-2 flex items-center gap-2">
                      <span
                        className={cn(
                          "rounded-full border px-2 py-0.5 text-xs",
                          categoryColors[discovery.category]
                        )}
                      >
                        {categoryLabels[discovery.category]}
                      </span>
                    </div>

                    <h3 className="mb-2 text-lg font-semibold text-white">
                      {discovery.title}
                    </h3>

                    <p className="mb-4 text-sm text-white/60 line-clamp-3">
                      {discovery.description}
                    </p>

                    <div className="flex items-center gap-4 text-xs text-white/40">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {discovery.dateDiscovered}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {discovery.location}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

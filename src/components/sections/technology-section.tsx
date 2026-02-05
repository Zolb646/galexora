"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, ChevronRight } from "lucide-react";
import { useIntersection } from "@/hooks/use-intersection";
import { GlowText } from "@/components/effects/glow-text";
import { technologies, categoryLabels, type Technology } from "@/data/technology";
import { cn } from "@/lib/utils";

export function TechnologySection() {
  const { ref, isIntersecting } = useIntersection({ threshold: 0.1 });
  const [expandedTech, setExpandedTech] = useState<string | null>(null);

  const statusColors = {
    active: "bg-green-500/20 text-green-400 border-green-500/30",
    prototype: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    classified: "bg-red-500/20 text-red-400 border-red-500/30",
  };

  return (
    <section id="technology" className="relative py-24" ref={ref}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cosmic-purple/5 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-cosmic-gold/30 bg-cosmic-gold/10 px-4 py-1 text-sm text-cosmic-gold">
            <Cpu className="h-4 w-4" />
            Advanced Systems
          </span>
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            <GlowText glowColor="gold" animate={false}>
              Onboard Technology
            </GlowText>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/60">
            Galexora is equipped with cutting-edge technology that makes deep space
            exploration possible. Discover the systems that power our mission.
          </p>
        </motion.div>

        {/* Technology Grid */}
        <div className="grid gap-4 md:grid-cols-2">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            const isExpanded = expandedTech === tech.id;

            return (
              <motion.div
                key={tech.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={cn(
                  "glass rounded-xl overflow-hidden cursor-pointer transition-all",
                  isExpanded && "ring-1 ring-cosmic-cyan/50"
                )}
                onClick={() => setExpandedTech(isExpanded ? null : tech.id)}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className="flex h-12 w-12 items-center justify-center rounded-lg"
                        style={{ backgroundColor: `${tech.color}20` }}
                      >
                        <Icon className="h-6 w-6" style={{ color: tech.color }} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">{tech.name}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs text-white/50">
                            {categoryLabels[tech.category]}
                          </span>
                          <span
                            className={cn(
                              "rounded-full border px-2 py-0.5 text-xs capitalize",
                              statusColors[tech.status]
                            )}
                          >
                            {tech.status}
                          </span>
                        </div>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: isExpanded ? 90 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronRight className="h-5 w-5 text-white/40" />
                    </motion.div>
                  </div>

                  <p className="mt-4 text-sm text-white/60">{tech.description}</p>

                  {/* Expanded specs */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
                          {Object.entries(tech.specs).map(([key, value]) => (
                            <div key={key} className="rounded-lg bg-white/5 p-3">
                              <div className="text-xs text-white/40">{key}</div>
                              <div className="mt-1 text-sm font-medium text-white">
                                {value}
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

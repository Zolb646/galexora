"use client";

import { motion } from "framer-motion";
import { Rocket, Calendar, Sparkles, Cpu } from "lucide-react";
import { useIntersection } from "@/hooks/use-intersection";
import { GlowText } from "@/components/effects/glow-text";
import { aboutContent, timeline, typeColors } from "@/data/about";
import { cn } from "@/lib/utils";

const typeIcons = {
  origin: Rocket,
  mission: Calendar,
  discovery: Sparkles,
  upgrade: Cpu,
};

export function AboutSection() {
  const { ref, isIntersecting } = useIntersection({ threshold: 0.1 });

  return (
    <section id="about" className="relative py-24" ref={ref}>
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-cosmic-cyan/30 bg-cosmic-cyan/10 px-4 py-1 text-sm text-cosmic-cyan">
            Our Story
          </span>
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            <GlowText glowColor="cyan" animate={false}>
              {aboutContent.title}
            </GlowText>
          </h2>
          <p className="text-lg text-white/60">{aboutContent.subtitle}</p>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 glass rounded-2xl p-8 md:p-12"
        >
          <p className="mb-6 text-lg leading-relaxed text-white/80">
            {aboutContent.introduction}
          </p>
          <p className="mb-6 text-lg leading-relaxed text-white/70">
            {aboutContent.mission}
          </p>
          <p className="text-lg leading-relaxed text-white/60 italic">
            &ldquo;{aboutContent.philosophy}&rdquo;
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6"
        >
          {aboutContent.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isIntersecting ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              className="glass rounded-xl p-4 text-center"
            >
              <div className="text-2xl font-bold text-cosmic-cyan md:text-3xl">
                {stat.value}
                <span className="text-lg">{stat.suffix}</span>
              </div>
              <div className="mt-1 text-xs text-white/50 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="mb-8 text-center text-2xl font-bold text-white">
            Mission Timeline
          </h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cosmic-cyan via-cosmic-pink to-cosmic-gold md:left-1/2 md:-translate-x-1/2" />

            {/* Timeline events */}
            <div className="space-y-8">
              {timeline.map((event, index) => {
                const Icon = typeIcons[event.type];
                const isLeft = index % 2 === 0;

                return (
                  <motion.div
                    key={event.year}
                    initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                    animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    className={cn(
                      "relative pl-12 md:w-1/2 md:pl-0",
                      isLeft ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
                    )}
                  >
                    {/* Timeline dot */}
                    <div
                      className={cn(
                        "absolute left-2.5 top-2 flex h-3 w-3 items-center justify-center rounded-full bg-cosmic-cyan",
                        "md:left-auto",
                        isLeft ? "md:-right-1.5" : "md:-left-1.5"
                      )}
                    />

                    {/* Event card */}
                    <div className="glass rounded-xl p-6">
                      <div
                        className={cn(
                          "mb-2 flex items-center gap-2",
                          isLeft && "md:justify-end"
                        )}
                      >
                        <span
                          className={cn(
                            "inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs",
                            typeColors[event.type]
                          )}
                        >
                          <Icon className="h-3 w-3" />
                          {event.type}
                        </span>
                        <span className="text-sm font-bold text-cosmic-gold">
                          {event.year}
                        </span>
                      </div>
                      <h4 className="mb-2 text-lg font-semibold text-white">
                        {event.title}
                      </h4>
                      <p className="text-sm text-white/60">{event.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

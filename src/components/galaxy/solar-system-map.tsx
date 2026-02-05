"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Globe2, Moon, Info } from "lucide-react";
import { cn } from "@/lib/utils";
import { planets, sun, type Planet } from "@/data/planets";
import { OrbitPath } from "./orbit-path";
import { PlanetNode } from "./planet-node";
import { Button } from "@/components/ui/button";

export function SolarSystemMap() {
  const [selectedPlanet, setSelectedPlanet] = useState<Planet | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="relative w-full">
      {/* Controls */}
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm text-white/60">
          Click on a planet to learn more
        </p>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsPaused(!isPaused)}
          className="border-white/20 bg-white/5 text-xs"
        >
          {isPaused ? "Resume Animation" : "Pause Animation"}
        </Button>
      </div>

      {/* Solar System Container */}
      <div className="relative aspect-square w-full max-w-3xl mx-auto">
        {/* Background glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-radial from-cosmic-gold/5 via-transparent to-transparent" />

        {/* Sun at center */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: sun.size * 10,
            height: sun.size * 10,
            backgroundColor: sun.color,
            boxShadow: `0 0 60px ${sun.color}, 0 0 120px ${sun.color}50`,
          }}
          animate={{
            boxShadow: [
              `0 0 60px ${sun.color}, 0 0 120px ${sun.color}50`,
              `0 0 80px ${sun.color}, 0 0 160px ${sun.color}50`,
              `0 0 60px ${sun.color}, 0 0 120px ${sun.color}50`,
            ],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Orbit paths */}
        {planets.map((planet) => (
          <OrbitPath
            key={`orbit-${planet.id}`}
            radius={planet.orbitRadius}
            color={
              selectedPlanet?.id === planet.id
                ? "rgba(100, 200, 255, 0.3)"
                : "rgba(255, 255, 255, 0.08)"
            }
          />
        ))}

        {/* Planets */}
        <div className={cn(isPaused && "[&_*]:!animation-play-state-paused")}>
          {planets.map((planet, index) => (
            <PlanetNode
              key={planet.id}
              planet={planet}
              isSelected={selectedPlanet?.id === planet.id}
              onClick={() => setSelectedPlanet(planet)}
              animationOffset={index * 0.5}
            />
          ))}
        </div>
      </div>

      {/* Planet Detail Panel */}
      <AnimatePresence>
        {selectedPlanet && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="mt-8 glass rounded-xl p-6"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div
                  className="h-12 w-12 rounded-full"
                  style={{
                    backgroundColor: selectedPlanet.color,
                    boxShadow: `0 0 20px ${selectedPlanet.color}50`,
                  }}
                />
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {selectedPlanet.name}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-white/60">
                    <Globe2 className="h-4 w-4" />
                    <span className="capitalize">{selectedPlanet.type}</span>
                    {selectedPlanet.explored && (
                      <span className="ml-2 rounded-full bg-green-500/20 px-2 py-0.5 text-xs text-green-400">
                        Explored
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSelectedPlanet(null)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <p className="mt-4 text-white/70">{selectedPlanet.info}</p>

            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="rounded-lg bg-white/5 p-3">
                <div className="text-xs text-white/50 uppercase">Radius</div>
                <div className="mt-1 font-semibold text-white">
                  {selectedPlanet.radius}
                </div>
              </div>
              <div className="rounded-lg bg-white/5 p-3">
                <div className="text-xs text-white/50 uppercase">Distance</div>
                <div className="mt-1 font-semibold text-white">
                  {selectedPlanet.distance}
                </div>
              </div>
              <div className="rounded-lg bg-white/5 p-3">
                <div className="text-xs text-white/50 uppercase flex items-center gap-1">
                  <Moon className="h-3 w-3" /> Moons
                </div>
                <div className="mt-1 font-semibold text-white">
                  {selectedPlanet.moons}
                </div>
              </div>
              <div className="rounded-lg bg-white/5 p-3">
                <div className="text-xs text-white/50 uppercase flex items-center gap-1">
                  <Info className="h-3 w-3" /> Status
                </div>
                <div className="mt-1 font-semibold text-white">
                  {selectedPlanet.explored ? "Charted" : "Uncharted"}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

"use client";

import { useState, useSyncExternalStore } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ChevronDown, Pause, Play } from "lucide-react";
import { observations } from "@/data/observations";
import { planetDistances, planetMeasurements, planets } from "@/data/planets";
import { useIntersection } from "@/hooks/use-intersection";
import { Button } from "@/components/ui/button";
import { OrbitPath } from "./orbit-path";
import { PlanetNode } from "./planet-node";
import styles from "./explorer.module.css";

const orbits = planets.map((planet, index) => ({
  planet,
  diameter: planet.diagramDiameter,
  phase: (10 + index * 38.2) % 100,
}));
const reducedMotionQuery = "(prefers-reduced-motion: reduce)";

function subscribeToMotionPreference(onChange: () => void) {
  const media = window.matchMedia(reducedMotionQuery);
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}

export function SolarSystemMap() {
  const [selectedIndex, setSelectedIndex] = useState(() => planets.findIndex(({ id }) => id === "earth"));
  const [motionOverride, setMotionOverride] = useState<boolean | null>(null);
  const reducedMotion = useSyncExternalStore(
    subscribeToMotionPreference,
    () => window.matchMedia(reducedMotionQuery).matches,
    () => false,
  );
  const { ref, isIntersecting } = useIntersection({ triggerOnce: false });
  const playing = motionOverride ?? !reducedMotion;
  const selected = planets[selectedIndex];
  const observation = observations[selected.id];

  function stepPlanet(offset: -1 | 1) {
    setSelectedIndex((index) => (index + offset + planets.length) % planets.length);
  }

  return (
    <div className={styles.explorer}>
      <div className={styles.layout}>
        <div className={styles.directory} role="group" aria-label="Choose a planet">
          {planets.map((planet, index) => (
            <button
              type="button"
              key={planet.id}
              aria-pressed={index === selectedIndex}
              aria-controls="planet-details"
              onClick={() => setSelectedIndex(index)}
            >
              <Image
                src={observations[planet.id].src}
                alt=""
                width={32}
                height={32}
                className={styles.thumbnail}
              />
              {planet.name}
            </button>
          ))}
        </div>

        <section
          id="planet-details"
          className={styles.details}
          aria-labelledby="planet-name"
        >
          <figure className={styles.observation}>
            <a className={styles.planetImage} href={observation.source} aria-label={`Original photograph of ${selected.name}`}>
              <Image src={observation.src} alt={observation.alt} fill sizes="(max-width: 620px) 88vw, (max-width: 1344px) 44vw, 530px" />
            </a>
            <figcaption>{observation.credit}</figcaption>
          </figure>
          <div className={styles.detailCopy}>
            <div className={styles.detailHeader}><p>{selected.group}</p></div>
            <h3 id="planet-name" aria-live="polite">{selected.name}</h3>
            <p className={styles.description}>{selected.info}</p>

            <dl className={styles.stats}>
              <div><dt>Mean radius</dt><dd>{selected.radius}</dd></div>
              <div><dt>Average distance from the Sun</dt><dd>{selected.distance}</dd></div>
              <div><dt>Orbital period</dt><dd>{selected.orbitalPeriod}</dd></div>
            </dl>

            <p className={styles.measurementSources}>
              <a href={planetMeasurements}>JPL measurements</a>
              <a href={planetDistances}>NASA distances</a>
            </p>
            <div className={styles.navigation}>
              <button type="button" aria-label="Previous planet" onClick={() => stepPlanet(-1)}>
                <ArrowLeft size={17} aria-hidden="true" />
              </button>
              <span>{selectedIndex + 1} of {planets.length} from the Sun</span>
              <button type="button" aria-label="Next planet" onClick={() => stepPlanet(1)}>
                <ArrowRight size={17} aria-hidden="true" />
              </button>
            </div>
          </div>
        </section>

        <details className={styles.chart}>
          <summary>
            Orbit diagram
            <ChevronDown size={18} aria-hidden="true" />
          </summary>
          <div className={styles.toolbar}>
            <div className={styles.toolbarTitle}>
              <strong>{selected.name}</strong>
              <span className={styles.motionStatus} data-playing={playing} aria-hidden="true">
                <i /> {playing ? "In motion" : "Paused"}
              </span>
            </div>
            <Button
              type="button"
              variant="outline"
              size="sm"
              className={styles.motionButton}
              onClick={() => setMotionOverride(!playing)}
            >
              {playing ? <Pause aria-hidden="true" /> : <Play aria-hidden="true" />}
              {playing ? "Pause orbits" : "Play orbits"}
            </Button>
          </div>
          <figure>
            <div
              ref={ref}
              className={styles.map}
              role="group"
              aria-label="Orbital diagram of the solar system"
              data-running={playing && isIntersecting}
              data-motion={motionOverride === null ? "system" : "manual"}
            >
              <span aria-hidden="true" className={styles.sun} />
              {orbits.map(({ planet, diameter }) => (
                <OrbitPath key={planet.id} diameter={diameter} active={planet.id === selected.id} />
              ))}
              {orbits.map(({ planet, diameter, phase }, index) => (
                <PlanetNode
                  key={planet.id}
                  planet={planet}
                  diameter={diameter}
                  phase={phase}
                  selected={planet.id === selected.id}
                  onSelect={() => setSelectedIndex(index)}
                />
              ))}
            </div>
            <figcaption>Schematic with compressed sizes, distances, and orbital periods.</figcaption>
          </figure>
        </details>
      </div>
    </div>
  );
}

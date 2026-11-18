import type { CSSProperties } from "react";
import type { Planet } from "@/data/planets";
import styles from "./explorer.module.css";

interface PlanetNodeProps {
  planet: Planet;
  diameter: number;
  phase: number;
  selected: boolean;
  onSelect: () => void;
}

export function PlanetNode({ planet, diameter, phase, selected, onSelect }: PlanetNodeProps) {
  const style = {
    "--orbit-diameter": `${diameter}%`,
    "--orbit-period": `${planet.animationSeconds}s`,
    "--orbit-phase": `${phase}%`,
    "--planet-color": planet.color,
    "--planet-size": `${planet.diagramSize}px`,
  } as CSSProperties;

  return (
    <div className={styles.orbiter} style={style} data-active={selected}>
      <button
        type="button"
        className={styles.planetNode}
        tabIndex={-1}
        aria-label={`Select ${planet.name} on the map`}
        aria-pressed={selected}
        title={planet.name}
        onClick={onSelect}
      >
        <span aria-hidden="true" className={styles.planetDot} data-ringed={planet.id === "saturn"} />
        {selected && <span aria-hidden="true" className={styles.planetLabel}>{planet.name}</span>}
      </button>
    </div>
  );
}

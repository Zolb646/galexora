import type { CSSProperties } from "react";
import styles from "./explorer.module.css";

interface OrbitPathProps {
  diameter: number;
  active: boolean;
}

export function OrbitPath({ diameter, active }: OrbitPathProps) {
  return (
    <span
      aria-hidden="true"
      className={styles.orbitPath}
      data-active={active}
      style={{ "--orbit-diameter": `${diameter}%` } as CSSProperties}
    />
  );
}

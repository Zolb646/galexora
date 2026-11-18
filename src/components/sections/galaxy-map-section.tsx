import { SolarSystemMap } from "@/components/galaxy/solar-system-map";
import styles from "@/app/field-guide.module.css";

export function GalaxyMapSection() {
  return (
    <section id="galaxy-map" className={styles.section} aria-labelledby="solar-system-title">
      <header className={styles.sectionHeading}>
        <h2 id="solar-system-title">The eight planets</h2>
        <p>Browse planet photographs and measurements, or open the orbit diagram to see how the planets move.</p>
      </header>
      <SolarSystemMap />
    </section>
  );
}

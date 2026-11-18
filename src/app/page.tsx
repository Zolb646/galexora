import { Navbar } from "@/components/navigation/navbar";
import { HeroSection } from "@/components/sections/hero-section";
import { GalaxyMapSection } from "@/components/sections/galaxy-map-section";
import { HistorySection } from "@/components/sections/history-section";
import { ApodSection } from "@/components/sections/apod-section";
import { planetDistances, planetMeasurements } from "@/data/planets";
import { APOD_ARCHIVE } from "@/lib/apod";
import styles from "./field-guide.module.css";

export const revalidate = 1800;

export default function GalexoraPage() {
  return (
    <div className={styles.site}>
      <a className={styles.skip} href="#main-content">Skip to content</a>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <div className={styles.guide}>
          <GalaxyMapSection />
          <HistorySection />
          <ApodSection />
        </div>
      </main>
      <footer id="about" className={styles.footer}>
        <div>
          <div>
            <strong>Galexora</strong>
            <p>An independent guide to planetary science and the history of space exploration.</p>
          </div>
          <nav aria-label="Data sources">
            <a href={planetDistances}>NASA planet guide</a>
            <a href={planetMeasurements}>JPL planetary measurements</a>
            <a href={APOD_ARCHIVE}>NASA APOD archive</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

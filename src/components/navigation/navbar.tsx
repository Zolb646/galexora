import { Orbit } from "lucide-react";
import styles from "@/app/field-guide.module.css";

export function Navbar() {
  return (
    <header className={styles.siteHeader}>
      <nav className={styles.nav} aria-label="Primary">
        <a href="#top" className={styles.wordmark}><Orbit size={24} aria-hidden="true" /> Galexora</a>
        <div className={styles.navLinks}>
          <a href="#galaxy-map">Planets</a>
          <a href="#discoveries">Timeline</a>
          <a href="#apod">Daily image</a>
        </div>
      </nav>
    </header>
  );
}

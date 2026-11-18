import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { observations } from "@/data/observations";
import styles from "@/app/field-guide.module.css";

export function HeroSection() {
  const saturn = observations.saturn;

  return (
    <section id="top" className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.heroIntro}>
        <h1 id="hero-title">The solar system</h1>
        <div className={styles.heroText}>
          <p>Explore the eight planets and the spacecraft that showed us what they look like up close.</p>
          <a className={styles.heroLink} href="#galaxy-map">
            Explore the planets <ArrowDown size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
      <figure className={styles.heroObservation}>
        <div className={styles.heroPhoto}>
          <Image
            src={saturn.src}
            alt={saturn.alt}
            fill
            preload
            quality={90}
            sizes="(max-width: 1088px) 100vw, 1088px"
          />
        </div>
        <figcaption>
          <a href={saturn.source}>Saturn, photographed by Cassini <ArrowUpRight size={14} aria-hidden="true" /></a>
          <span>{saturn.credit}</span>
        </figcaption>
      </figure>
    </section>
  );
}

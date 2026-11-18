import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { milestones } from "@/data/history";
import { formatObservationDate } from "@/lib/observation-date";
import styles from "@/app/field-guide.module.css";

export function HistorySection() {
  return (
    <section id="discoveries" className={styles.section} aria-labelledby="history-title">
      <header className={styles.sectionHeading}>
        <h2 id="history-title">Exploration timeline</h2>
        <p>Six milestones, photographed by the missions that made them possible.</p>
      </header>
      <ol className={styles.timeline}>
        {milestones.map(({ date, detail, source, title, image }, index) => (
          <li key={date} className={styles.timelineRow} data-observation={date}>
            <figure>
              <a className={styles.timelineImage} href={image.source} aria-label={`Original image for ${title}`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes={index === 0 || index === milestones.length - 1
                    ? "(max-width: 760px) 92vw, (max-width: 1344px) 55vw, 750px"
                    : "(max-width: 760px) 92vw, (max-width: 1344px) 46vw, 610px"}
                />
              </a>
              <figcaption>{image.credit}</figcaption>
            </figure>
            <div className={styles.milestoneCopy}>
              <time dateTime={date}>{formatObservationDate(date)}</time>
              <h3><a href={source}>{title} <ArrowUpRight size={16} aria-hidden="true" /></a></h3>
              <p>{detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

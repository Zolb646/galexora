import { Suspense } from "react";
import { ArrowUpRight } from "lucide-react";
import { APOD_ARCHIVE, getLatestApod } from "@/lib/apod";
import { formatObservationDate } from "@/lib/observation-date";
import styles from "@/app/field-guide.module.css";

function ApodPending() {
  return <p className={styles.feedStatus} role="status">Loading the latest NASA entry…</p>;
}

async function ApodEntry() {
  const apod = await getLatestApod();
  if (!apod) {
    return (
      <div className={styles.feedStatus}>
        <p>The NASA feed is temporarily unavailable.</p>
        <a className={styles.textLink} href={APOD_ARCHIVE}>Browse the NASA archive <ArrowUpRight size={15} aria-hidden="true" /></a>
      </div>
    );
  }

  const summary = apod.explanation.length > 440
    ? `${apod.explanation.slice(0, 440).replace(/\s+\S*$/, "")}…`
    : apod.explanation;

  return (
    <article className={styles.apodEntry} data-has-image={Boolean(apod.image)}>
      {apod.image && (
        <figure className={styles.apodFigure}>
          <a href={apod.permalink} aria-label={`View ${apod.title} on NASA`}>
            {/* NASA's feed does not provide dimensions. Preserve each photograph's aspect ratio. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={apod.image} alt={apod.alt} loading="lazy" referrerPolicy="no-referrer" />
          </a>
          {apod.credit && <figcaption>{apod.credit}</figcaption>}
        </figure>
      )}
      <div className={styles.apodCopy}>
        <time dateTime={apod.date}>{formatObservationDate(apod.date)}</time>
        <h3>{apod.title}</h3>
        {summary && <p>{summary}</p>}
        {!apod.image && apod.credit && <small>{apod.credit}</small>}
        <a className={styles.textLink} href={apod.permalink}>
          {apod.kind === "video" ? "Watch on NASA" : "View on NASA"} <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}

export function ApodSection() {
  return (
    <section id="apod" className={styles.section} aria-labelledby="apod-title">
      <header className={`${styles.sectionHeading} ${styles.headingWithLink}`}>
        <div><h2 id="apod-title">Astronomy Picture of the Day</h2><p>The latest entry in NASA’s daily astronomy archive.</p></div>
        <a className={styles.textLink} href={APOD_ARCHIVE}>Browse the archive <ArrowUpRight size={16} aria-hidden="true" /></a>
      </header>
      <Suspense fallback={<ApodPending />}><ApodEntry /></Suspense>
    </section>
  );
}

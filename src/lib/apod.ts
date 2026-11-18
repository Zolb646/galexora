export const APOD_ARCHIVE = "https://science.nasa.gov/apod/apod-search/";

const FEED_URL = "https://science.nasa.gov/wp-json/wp/v2/apod-basic?per_page=4";
const imageHosts = new Set(["assets.science.nasa.gov", "images-assets.nasa.gov", "apod.nasa.gov"]);
const entities: Record<string, string> = {
  amp: "&", quot: '"', apos: "'", nbsp: " ", lt: "<", gt: ">",
  ndash: "–", mdash: "—", rsquo: "’", lsquo: "‘", rdquo: "”", ldquo: "“", hellip: "…",
};
type Apod = {
  date: string;
  title: string;
  kind: "image" | "video";
  permalink: string;
  image?: string;
  alt: string;
  explanation: string;
  credit: string;
};

function plainText(value: unknown) {
  if (typeof value !== "string") return "";
  return value
    .replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/gi, "")
    .replace(/<(?:br\b[^>]*|\/?p\b[^>]*)>/gi, " ")
    .replace(/<[^>]*>/g, "")
    .replace(/&(#\d+|#x[\da-f]+|[a-z]+);/gi, (match, entity: string) => {
      if (entity[0] !== "#") return Object.hasOwn(entities, entity) ? entities[entity] : match;
      const code = entity[1].toLowerCase() === "x" ? parseInt(entity.slice(2), 16) : Number(entity.slice(1));
      return code > 0 && code <= 0x10ffff ? String.fromCodePoint(code) : match;
    })
    .replace(/\s+/g, " ")
    .trim();
}

function nasaUrl(value: unknown, hosts: ReadonlySet<string>) {
  if (typeof value !== "string") return;
  try {
    const url = new URL(value);
    if (url.protocol === "https:" && !url.username && !url.password && !url.port && hosts.has(url.hostname)) {
      return url.href;
    }
  } catch { return undefined; }
}

const articleHosts = new Set(["science.nasa.gov", "apod.nasa.gov"]);

function entry(value: unknown): Apod | null {
  if (!value || typeof value !== "object") return null;
  const row = value as Record<string, unknown>;
  const { date } = row;
  if (typeof date !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(date)) return null;
  const time = new Date(`${date}T00:00:00Z`);
  if (!Number.isFinite(+time) || time.toISOString().slice(0, 10) !== date) return null;
  const permalink = nasaUrl(row.permalink, articleHosts) ?? nasaUrl(row.url, articleHosts);
  const title = plainText(row.title);
  if (!permalink || !title) return null;

  const kind = row.media_type === "video" || row.media_type === "iframe" ? "video" : "image";
  const image = nasaUrl(row.hdurl, imageHosts);
  const explanation = plainText(row.explanation)
    .replace(/^Explanation:\s*/i, "")
    .split(/\bTomorrow['’]s picture:/i)[0].trim();
  return {
    date, title, kind, permalink, image,
    alt: plainText(row.alt) || title,
    explanation,
    credit: plainText(row.credit) || plainText(row.copyright),
  };
}

export function latestApod(payload: unknown) {
  if (!Array.isArray(payload)) return null;
  const entries = payload.map(entry).filter((item): item is Apod => item !== null);
  return entries.sort((a, b) => b.date.localeCompare(a.date))[0] ?? null;
}

type Fetcher = (url: string, options: RequestInit & { next: { revalidate: number } }) => Promise<Response>;

export async function getLatestApod(fetcher: Fetcher = fetch) {
  try {
    const response = await fetcher(FEED_URL, {
      next: { revalidate: 1800 },
      signal: AbortSignal.timeout(6500),
      headers: { Accept: "application/json" },
    });
    return response.ok ? latestApod(await response.json()) : null;
  } catch { return null; }
}

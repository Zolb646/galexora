import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import Module from "node:module";
import { test } from "node:test";
import ts from "typescript";

const source = readFileSync(new URL("../src/lib/apod.ts", import.meta.url), "utf8");
const compiled = new Module("apod-test");
compiled._compile(ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText, "apod-test.cjs");

const { latestApod, getLatestApod } = compiled.exports;
const permalink = "https://science.nasa.gov/image-article/apod-example/";
const hdurl = "https://assets.science.nasa.gov/apod/archive.jpg?size=1280";
const image = {
  date: "2026-05-02", title: "A &amp; B", media_type: "image", permalink, url: permalink, hdurl,
  explanation: "<strong>Explanation:</strong> A <a href='https://example.com'>view</a>.<br><strong>Tomorrow’s picture:</strong> Something else",
  credit: "<a href='https://example.com'>NASA &amp; ESA</a>",
  alt: "A photograph of the night sky",
};

test("the NASA feed uses hdurl for its image and strips markup from displayed fields", () => {
  const apod = latestApod([image]);
  assert.deepEqual(apod, {
    date: "2026-05-02", title: "A & B", kind: "image", permalink, image: hdurl,
    explanation: "A view.", credit: "NASA & ESA", alt: "A photograph of the night sky",
  });
});

test("the latest valid entry may be a video with no embeddable image", () => {
  const apod = latestApod([
    image, { ...image, date: "2026-05-04", media_type: "video", hdurl: "" },
    { ...image, date: "2026-06-31" }, { ...image, date: "2026-05-07", permalink: "javascript:alert(1)", url: "" },
  ]);
  assert.equal(apod.date, "2026-05-04");
  assert.equal(apod.kind, "video");
  assert.equal(apod.image, undefined);
  assert.equal(latestApod([{ ...image, hdurl: "https://assets.science.nasa.gov.evil.test/photo.jpg" }]).image, undefined);
  assert.equal(latestApod({ entries: [] }), null);
});

test("the server reads NASA Science with revalidation and an honest unavailable state", async () => {
  const apod = await getLatestApod(async (url, options) => {
    assert.match(url, /^https:\/\/science\.nasa\.gov\/wp-json\/wp\/v2\/apod-basic\?/);
    assert.equal(options.next.revalidate, 1800);
    return Response.json([image]);
  });
  assert.equal(apod.date, image.date);
  assert.equal(await getLatestApod(async () => new Response(null, { status: 503 })), null);
  assert.equal(await getLatestApod(async () => { throw new Error("offline"); }), null);
});

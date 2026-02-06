"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Camera, ExternalLink, RefreshCw, AlertTriangle } from "lucide-react";
import { useIntersection } from "@/hooks/use-intersection";
import { GlowText } from "@/components/effects/glow-text";
import { Button } from "@/components/ui/button";

interface ApodData {
  title: string;
  explanation: string;
  url: string;
  hdurl?: string;
  date: string;
  media_type: string;
  copyright?: string;
}

export function ApodSection() {
  const { ref, isIntersecting } = useIntersection({ threshold: 0.1 });
  const [apod, setApod] = useState<ApodData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchApod = async () => {
    setLoading(true);
    setError(null);

    const apiKey = process.env.NEXT_PUBLIC_NASA_KEY || "DEMO_KEY";

    try {
      const response = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
      );

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const data: ApodData = await response.json();
      setApod(data);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to fetch NASA APOD data"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApod();
  }, []);

  return (
    <section id="apod" className="relative py-24" ref={ref}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cosmic-cyan/5 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-cosmic-gold/30 bg-cosmic-gold/10 px-4 py-1 text-sm text-cosmic-gold">
            <Camera className="h-4 w-4" />
            NASA Astronomy Picture of the Day
          </span>
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            <GlowText glowColor="gold" animate={false}>
              Daily Cosmic View
            </GlowText>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/60">
            Every day, NASA showcases a stunning image or video of our universe.
            Explore today&apos;s featured cosmic wonder.
          </p>
        </motion.div>

        {/* APOD Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {loading && (
            <div className="glass flex flex-col items-center justify-center rounded-2xl p-16">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <RefreshCw className="h-8 w-8 text-cosmic-cyan" />
              </motion.div>
              <p className="mt-4 text-white/60">
                Fetching today&apos;s cosmic image...
              </p>
            </div>
          )}

          {error && (
            <div className="glass flex flex-col items-center justify-center rounded-2xl p-12">
              <AlertTriangle className="mb-4 h-12 w-12 text-cosmic-gold" />
              <h3 className="mb-2 text-xl font-semibold text-white">
                Signal Lost
              </h3>
              <p className="mb-6 max-w-md text-center text-white/60">
                Unable to establish connection with NASA&apos;s data relay.
                This may happen with the DEMO_KEY rate limit.
              </p>
              <Button
                onClick={fetchApod}
                className="bg-cosmic-cyan text-cosmic-deep hover:bg-cosmic-cyan/90"
              >
                <RefreshCw className="mr-2 h-4 w-4" />
                Retry Connection
              </Button>
            </div>
          )}

          {apod && !loading && !error && (
            <div className="glass overflow-hidden rounded-2xl">
              {/* Image or Video */}
              <div className="relative aspect-video w-full overflow-hidden bg-black">
                {apod.media_type === "video" ? (
                  <iframe
                    src={apod.url}
                    title={apod.title}
                    className="h-full w-full"
                    allowFullScreen
                  />
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={apod.url}
                    alt={apod.title}
                    className="h-full w-full object-cover"
                  />
                )}
              </div>

              {/* Info */}
              <div className="p-6 md:p-8">
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <h3 className="text-2xl font-bold text-white">
                    {apod.title}
                  </h3>
                  <span className="rounded-full bg-cosmic-gold/20 px-3 py-1 text-xs font-medium text-cosmic-gold">
                    {apod.date}
                  </span>
                </div>

                <p className="mb-6 leading-relaxed text-white/70">
                  {apod.explanation}
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  {apod.copyright && (
                    <span className="text-sm text-white/40">
                      Credit: {apod.copyright}
                    </span>
                  )}
                  {apod.hdurl && (
                    <a
                      href={apod.hdurl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-cosmic-cyan transition-colors hover:text-cosmic-cyan/80"
                    >
                      <ExternalLink className="h-4 w-4" />
                      View HD Image
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

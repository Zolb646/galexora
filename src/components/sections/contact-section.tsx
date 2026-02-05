"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Rocket, Send, CheckCircle, Mail, User } from "lucide-react";
import { useIntersection } from "@/hooks/use-intersection";
import { GlowText } from "@/components/effects/glow-text";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function ContactSection() {
  const { ref, isIntersecting } = useIntersection({ threshold: 0.1 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-cosmic-deep via-transparent to-transparent" />

      <div className="relative mx-auto max-w-4xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-cosmic-cyan/30 bg-cosmic-cyan/10 px-4 py-1 text-sm text-cosmic-cyan">
            <Rocket className="h-4 w-4" />
            Join the Mission
          </span>
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            <GlowText glowColor="cyan" animate={false}>
              Become an Explorer
            </GlowText>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/60">
            Stay connected with the Galexora mission. Receive updates on new
            discoveries, mission milestones, and exclusive content from the
            far reaches of space.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass rounded-2xl p-8 md:p-12"
        >
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <CheckCircle className="mx-auto h-16 w-16 text-green-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">
                Welcome Aboard, Explorer!
              </h3>
              <p className="text-white/60">
                You&apos;ve been added to our mission roster. Expect your first
                transmission soon.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm text-white/70">
                    <User className="h-4 w-4" />
                    Your Name
                  </label>
                  <Input
                    type="text"
                    placeholder="Commander Shepard"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="border-white/10 bg-white/5 text-white placeholder:text-white/30"
                  />
                </div>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm text-white/70">
                    <Mail className="h-4 w-4" />
                    Your Email
                  </label>
                  <Input
                    type="email"
                    placeholder="commander@starfleet.earth"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="border-white/10 bg-white/5 text-white placeholder:text-white/30"
                  />
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className={cn(
                  "w-full bg-cosmic-cyan text-cosmic-deep hover:bg-cosmic-cyan/90",
                  isSubmitting && "opacity-70 cursor-not-allowed"
                )}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      <Rocket className="h-4 w-4" />
                    </motion.div>
                    Initiating Contact...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="h-4 w-4" />
                    Join the Mission
                  </span>
                )}
              </Button>

              <p className="text-center text-xs text-white/40">
                By joining, you agree to receive transmissions from Galexora.
                You can unsubscribe at any time.
              </p>
            </form>
          )}
        </motion.div>

        {/* Additional contact info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isIntersecting ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 grid gap-6 text-center md:grid-cols-3"
        >
          <div>
            <h4 className="font-semibold text-white mb-1">Mission Control</h4>
            <p className="text-sm text-white/50">Earth Orbital Station Alpha</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-1">Subspace Frequency</h4>
            <p className="text-sm text-white/50">47.3.2157.GALEXORA</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-1">Response Time</h4>
            <p className="text-sm text-white/50">~0.003ms (quantum relay)</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

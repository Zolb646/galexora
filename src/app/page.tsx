"use client";

import { Navbar } from "@/components/navigation/navbar";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { GalaxyMapSection } from "@/components/sections/galaxy-map-section";
import { DiscoveriesSection } from "@/components/sections/discoveries-section";
import { TechnologySection } from "@/components/sections/technology-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function GalexoraPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Galaxy Map Section */}
      <GalaxyMapSection />

      {/* Discoveries Section */}
      <DiscoveriesSection />

      {/* Technology Section */}
      <TechnologySection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="relative border-t border-white/10 py-8">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
            <div className="text-sm text-white/40">
              &copy; {new Date().getFullYear()} Galexora Mission. All rights
              reserved.
            </div>
            <div className="flex items-center gap-6 text-sm text-white/40">
              <a href="#" className="hover:text-white transition-colors">
                Mission Logs
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Privacy Protocol
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Contact HQ
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

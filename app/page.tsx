"use client";

import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ServicesGrid } from "@/components/ServicesGrid";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { DripMenuSection } from "@/components/DripMenuSection";
import { OwnerSection } from "@/components/OwnerSection";
import { ServiceAreasSection } from "@/components/ServiceAreasSection";
import { AdditionalServicesSection } from "@/components/AdditionalServicesSection";
import { BookingSection } from "@/components/BookingSection";
import { FAQSection } from "@/components/FAQSection";
import { FooterSection } from "@/components/FooterSection";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-rs-offwhite">
      <Navigation />

      <main>
        {/* 1. Full-screen cinematic hero */}
        <HeroSection />

        {/* 2. Common services — dark navy editorial list */}
        <ServicesGrid />

        {/* 3. How It Works — light sand split layout */}
        <HowItWorksSection />

        {/* 4. Drip Treatments — filtered card grid */}
        <DripMenuSection />

        {/* 5. Meet Sharlot — dark navy with portrait & italic quote */}
        <OwnerSection />

        {/* 6. Service Areas — sand bg + navy ZIP card */}
        <ServiceAreasSection />

        {/* 7. Additional Boosters */}
        <AdditionalServicesSection />

        {/* 8. Booking Wizard */}
        <BookingSection />

        {/* 9. Begin Your Path CTA — RS-style electric blue band */}
        <section className="relative bg-rs-blue overflow-hidden py-24 text-center">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_50%,white,transparent_60%)]" />
          <div className="relative z-10 mx-auto max-w-3xl px-6 space-y-6">
            <span className="label-text text-white/70 tracking-widest">Start Today</span>
            <h2 className="headline-lg text-white">
              Begin Your Path<br />
              <span className="italic-serif">to Wellness</span>
            </h2>
            <p className="text-white/70 text-base leading-relaxed max-w-xl mx-auto">
              Connect with Sharlot&apos;s certified nursing team and start your wellness journey today in a few easy steps.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-outline-white flex items-center gap-2"
              >
                Get Started <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={() => document.getElementById("services-list")?.scrollIntoView({ behavior: "smooth" })}
                className="label-text text-white/70 hover:text-white tracking-widest transition-colors cursor-pointer"
              >
                View All Treatments →
              </button>
            </div>
          </div>
        </section>

        {/* 10. FAQ */}
        <FAQSection />
      </main>

      <FooterSection />
    </div>
  );
}

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

export default function Home() {
  const scrollToBooking = () => {
    const el = document.getElementById("booking");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main>
        {/* 1. Hero banner with Rating & Search Bar */}
        <HeroSection />

        {/* 2. Common IV Therapy Services */}
        <ServicesGrid />

        {/* 3. How It Works (Pink Glove Image & 2x2 Grid) */}
        <HowItWorksSection />

        {/* 4. Mobile IV Therapy Treatments (IV Bags & Price Filters) */}
        <DripMenuSection />

        {/* 5. Meet Sharlot (About Us & Director Story) */}
        <OwnerSection />

        {/* 6. Service Areas (ZIP Code check database) */}
        <ServiceAreasSection />

        {/* 7. Additional Wellness Injections */}
        <AdditionalServicesSection />

        {/* 8. Booking Dispatch Form Wizard */}
        <BookingSection />

        {/* 9. Begin Your Path to Wellness (CTA) */}
        <section className="bg-brand-blue py-16 text-center text-white relative overflow-hidden">
          {/* Subtle background circles */}
          <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-white/5" />
          <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-96 h-96 rounded-full bg-white/5" />
          
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Begin Your Path to Wellness
            </h2>
            <p className="text-base sm:text-lg text-white/80 max-w-xl mx-auto leading-relaxed">
              Connect with certified doctors and start your wellness journey today in few steps.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={scrollToBooking}
                className="w-full sm:w-auto rounded-full bg-white hover:bg-slate-50 text-brand-blue px-8 py-3.5 text-sm font-bold shadow-md transition-colors cursor-pointer"
              >
                Get Started
              </button>
              <button
                onClick={scrollToBooking}
                className="w-full sm:w-auto rounded-full border border-white/30 hover:bg-white/10 text-white px-8 py-3.5 text-sm font-bold transition-colors cursor-pointer"
              >
                Book Treatments
              </button>
            </div>
          </div>
        </section>

        {/* 10. Frequently Asked Questions (Consultation Image & native details) */}
        <FAQSection />
      </main>

      <FooterSection />
    </div>
  );
}

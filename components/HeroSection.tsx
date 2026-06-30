"use client";
import Image from "next/image";
import { ArrowDown, Star } from "lucide-react";

export function HeroSection() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">

      {/* ── Full-bleed background image ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_nano_banana.png"
          alt="Luxury IV therapy wellness room with tropical banana leaves"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Editorial dark overlay — heavier at bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-rs-navy/70 via-rs-navy/50 to-rs-navy/80" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pt-32 pb-24 text-center text-white">

        {/* Rating badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2">
          <Star className="h-4 w-4 fill-rs-peach text-rs-peach" />
          <span className="label-text text-white tracking-widest">4.8 Stars · 1,800+ Reviews</span>
        </div>

        {/* Main headline — large editorial serif */}
        <h1 className="headline-xl max-w-4xl mx-auto">
          Medical-Grade IV Therapy,<br />
          <span className="italic-serif text-rs-peach">Delivered to Your Door.</span>
        </h1>

        {/* Sub-headline */}
        <p className="mt-6 max-w-xl text-base sm:text-lg text-white/75 leading-relaxed font-light">
          Licensed nurses bring hydration, vitamins &amp; recovery treatments to your home, hotel, or office—on your schedule. Serving greater Los Angeles.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <button onClick={() => scrollTo("booking")} className="btn-primary">
            Get Started
          </button>
          <button onClick={() => scrollTo("services-list")} className="btn-outline-white">
            View Treatments
          </button>
        </div>

        {/* Stats row */}
        <div className="mt-16 flex flex-wrap justify-center gap-12">
          {[
            { value: "1,800+", label: "5-Star Reviews" },
            { value: "30+", label: "IV Formulas" },
            { value: "Licensed", label: "Registered Nurses" },
            { value: "LA-Wide", label: "Service Coverage" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-2xl sm:text-3xl font-semibold text-white">{stat.value}</p>
              <p className="label-text text-white/60 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <button
        onClick={() => scrollTo("services")}
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/50 hover:text-white transition-colors cursor-pointer"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" />
        <span className="label-text text-[9px]">Scroll</span>
      </button>

    </section>
  );
}

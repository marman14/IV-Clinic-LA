"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, MapPin, Calendar, ClipboardList } from "lucide-react";

export function HeroSection() {
  const [symptom, setSymptom] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");

  const scrollToBooking = () => {
    const el = document.getElementById("booking");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    scrollToBooking();
    // Dispatch a custom event to prefill booking
    window.dispatchEvent(
      new CustomEvent("search-applied", {
        detail: { symptom, location, date },
      })
    );
  };

  return (
    <section className="relative overflow-hidden bg-slate-50/50 py-12 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          
          {/* Left Column: Heading Card */}
          <div className="lg:col-span-5 text-center lg:text-left space-y-6">
            
            {/* Rating badge */}
            <div className="inline-flex items-center gap-1.5 rounded-full bg-orange-50 px-3 py-1 text-xs font-bold text-orange-600 border border-orange-100/50">
              <span className="flex items-center text-orange-500">
                <Star className="h-3.5 w-3.5 fill-current" />
              </span>
              <span>4.8 Stars (1800+ reviews)</span>
            </div>

            {/* Main title */}
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-[1.1]">
              Medical-Grade IV <br className="hidden sm:inline" />
              Therapy at Home
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-500 max-w-xl leading-relaxed">
              Licensed nurses bring hydration, vitamins, and recovery treatments to your home, hotel, or office—on your schedule.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={scrollToBooking}
                className="w-full sm:w-auto rounded-full bg-brand-blue px-8 py-4 text-sm font-bold text-white shadow-md hover:bg-brand-darkblue transition-colors cursor-pointer"
              >
                Get Started
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById("services");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full sm:w-auto rounded-full border border-slate-200 bg-white px-8 py-4 text-sm font-bold text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer"
              >
                Book Treatments
              </button>
            </div>
          </div>

          {/* Right Column: Hero Image with overlapping Search Bar */}
          <div className="lg:col-span-7 relative flex flex-col items-center">
            
            {/* Main Image frame */}
            <div className="relative overflow-hidden rounded-3xl bg-white p-2 shadow-lg ring-1 ring-slate-100 w-full aspect-[4/3] max-w-xl">
              <div className="relative h-full w-full overflow-hidden rounded-2xl bg-slate-50">
                <Image
                  src="/images/hero_dripgo.png"
                  alt="DripGo mobile IV therapy administered by a registered nurse at home"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={true}
                />
              </div>
            </div>

            {/* Overlapping search widget/bar at the bottom */}
            <div className="w-full max-w-lg mt-6 lg:mt-0 lg:absolute lg:-bottom-6 lg:left-1/2 lg:-translate-x-1/2 z-10">
              <form
                onSubmit={handleApply}
                className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white p-3 rounded-2xl sm:rounded-full border border-slate-200/80 shadow-xl"
              >
                {/* Field 1: What */}
                <div className="flex items-center gap-2 px-3 py-1 flex-1 border-b sm:border-b-0 sm:border-r border-slate-100 w-full">
                  <ClipboardList className="h-5 w-5 text-slate-400 shrink-0" />
                  <div className="text-left w-full">
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">What?</label>
                    <select
                      value={symptom}
                      onChange={(e) => setSymptom(e.target.value)}
                      className="text-xs font-bold text-slate-800 focus:outline-none bg-transparent w-full cursor-pointer"
                    >
                      <option value="">Symptom or Services</option>
                      <option value="energy-boost">Energy & Focus IV</option>
                      <option value="hydration">Hydration Therapy</option>
                      <option value="immune-boost">Immunity Boost IV</option>
                      <option value="all-inclusive">All-Inclusive Drip</option>
                      <option value="hangover">Hangover Recovery</option>
                    </select>
                  </div>
                </div>

                {/* Field 2: When */}
                <div className="flex items-center gap-2 px-3 py-1 flex-1 border-b sm:border-b-0 sm:border-r border-slate-100 w-full">
                  <Calendar className="h-5 w-5 text-slate-400 shrink-0" />
                  <div className="text-left w-full font-sans">
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">When?</label>
                    <input
                      type="date"
                      value={date}
                      min={new Date().toISOString().split("T")[0]}
                      onChange={(e) => setDate(e.target.value)}
                      className="text-xs font-bold text-slate-800 focus:outline-none bg-transparent w-full cursor-pointer"
                    />
                  </div>
                </div>

                {/* Field 3: Where */}
                <div className="flex items-center gap-2 px-3 py-1 flex-1 w-full">
                  <MapPin className="h-5 w-5 text-slate-400 shrink-0" />
                  <div className="text-left w-full">
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Where?</label>
                    <input
                      type="text"
                      pattern="\d*"
                      maxLength={5}
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="Enter ZIP code"
                      className="text-xs font-bold text-slate-800 placeholder-slate-400 focus:outline-none bg-transparent w-full"
                    />
                  </div>
                </div>

                {/* Apply button */}
                <button
                  type="submit"
                  className="w-full sm:w-auto rounded-full bg-brand-blue hover:bg-brand-darkblue text-white px-6 py-3.5 text-xs font-extrabold tracking-wider uppercase transition-colors cursor-pointer"
                >
                  Apply
                </button>
              </form>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

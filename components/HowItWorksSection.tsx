"use client";

import Image from "next/image";
import { Laptop, Activity, Shield, MapPin, ArrowUpRight } from "lucide-react";

const steps = [
  {
    title: "Book Online",
    description: "Choose your IV treatment & time.",
    icon: Laptop,
  },
  {
    title: "Relax & Recover",
    description: "Quick 30-60 minute treatment.",
    icon: Activity,
  },
  {
    title: "Medical Review",
    description: "Licensed professional reviews your intake.",
    icon: Shield,
  },
  {
    title: "We Come to You",
    description: "Nurse arrives at your location.",
    icon: MapPin,
  },
];

export function HowItWorksSection() {
  const scrollToBooking = () => {
    const el = document.getElementById("booking");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="how-it-works" className="bg-slate-50/50 py-16 sm:py-24 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="text-base sm:text-lg text-slate-500 leading-relaxed">
            Our trained nurse administers your IV therapy at home, office, or any location you prefer.
          </p>
        </div>

        {/* Split Screen Grid */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          
          {/* Left Column: Custom Image */}
          <div className="relative mx-auto max-w-md lg:col-span-5 lg:mx-0 lg:max-w-none w-full">
            <div className="relative overflow-hidden rounded-3xl bg-white p-2 shadow-lg ring-1 ring-slate-200 aspect-[4/3] sm:aspect-square">
              <div className="relative h-full w-full overflow-hidden rounded-2xl bg-slate-100">
                <Image
                  src="/images/how_it_works_dripgo.png"
                  alt="Setting up IV Drip bag - DripGo"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>
          </div>

          {/* Right Column: 2x2 Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  onClick={scrollToBooking}
                  className="group relative flex flex-col rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 cursor-pointer justify-between min-h-[160px]"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-slate-400 group-hover:text-brand-blue transition-colors">
                      <ArrowUpRight className="h-5 w-5" />
                    </span>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-slate-900">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

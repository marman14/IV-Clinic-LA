"use client";

import { Activity, Heart, Brain, Sparkles } from "lucide-react";

const services = [
  {
    id: "b12-injection",
    name: "Vitamin B12 Booster",
    description: "Boost energy levels and support metabolism with our quick B12 injection.",
    price: "$49",
    icon: Heart,
  },
  {
    id: "nad-injection",
    name: "NAD+ Injection Therapy",
    description: "Support cellular health and anti-aging with NAD+ injections.",
    price: "$199",
    icon: Activity,
  },
  {
    id: "peptide-therapy",
    name: "Peptide Therapy",
    description: "Customized peptide treatments for recovery, performance, and wellness.",
    price: "$299",
    icon: Brain,
  },
  {
    id: "glutathione",
    name: "Glutathione Push",
    description: "Powerful antioxidant treatment for detoxification and skin brightening.",
    price: "$149",
    icon: Sparkles,
  },
];

export function AdditionalServicesSection() {
  const scrollToBooking = () => {
    const el = document.getElementById("booking");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12 text-center">
          <span className="rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-bold tracking-wide text-brand-blue uppercase">
            Boosters & Add-ons
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Wellness Injections & Drip Boosters
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Complement your IV drip with our targeted intramuscular injections and push formulas.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-350 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  {service.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                  {service.description}
                </p>
                <div className="mt-4 flex items-center justify-between pt-4 border-t border-slate-100">
                  <span className="text-xl font-bold text-slate-900">
                    {service.price}
                  </span>
                  <button
                    onClick={scrollToBooking}
                    className="rounded-full bg-brand-blue px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-brand-darkblue cursor-pointer"
                  >
                    Add
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={scrollToBooking}
            className="rounded-full border border-slate-300 bg-white px-8 py-3.5 text-base font-semibold text-slate-700 transition-all hover:bg-slate-50 cursor-pointer"
          >
            Customize Your Drip Bag
          </button>
        </div>
      </div>
    </section>
  );
}

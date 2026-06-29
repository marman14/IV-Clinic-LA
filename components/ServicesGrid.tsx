"use client";

import { Zap, Sun, Shield, Award, ArrowRight } from "lucide-react";

const services = [
  {
    id: "energy-boost",
    name: "Energy & Focus IV",
    description: "Fight fatigue & brain fog. Supports alertness & sustained energy throughout the day.",
    icon: Zap,
    iconColor: "text-amber-500 bg-amber-50 border-amber-100",
  },
  {
    id: "hydration",
    name: "Hydration Therapy",
    description: "Perfect for dehydration from travel, heat, or intense activity. Replenish electrolytes fast.",
    icon: Sun,
    iconColor: "text-blue-500 bg-blue-50 border-blue-100",
  },
  {
    id: "immune-boost",
    name: "Immunity Boost IV",
    description: "Vitamin C, Zinc & antioxidants. Strengthen your body's defenses & reduce the risk.",
    icon: Shield,
    iconColor: "text-emerald-500 bg-emerald-50 border-emerald-100",
  },
  {
    id: "athletic-recovery",
    name: "Athletic Recovery",
    description: "Speeds up recovery after workouts and helps maintain peak performance.",
    icon: Award,
    iconColor: "text-indigo-500 bg-indigo-50 border-indigo-100",
  },
];

export function ServicesGrid() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleServiceSelect = (id: string) => {
    scrollTo("booking");
    window.dispatchEvent(new CustomEvent("drip-selected", { detail: id }));
  };

  return (
    <section id="services" className="bg-white py-16 sm:py-24 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Common IV Therapy Services
          </h2>
          <p className="text-base sm:text-lg text-slate-500 leading-relaxed">
            Our professional IV treatments help you feel energized & fully recovered—anytime, anywhere.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                onClick={() => handleServiceSelect(service.id)}
                className="group relative flex flex-col rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${service.iconColor}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="rounded-full bg-slate-50 p-2 text-slate-400 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                    <ArrowRight className="h-4.5 w-4.5" />
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {service.name}
                </h3>
                <p className="text-sm leading-relaxed text-slate-500">
                  {service.description}
                </p>
              </div>
            );
          })}

          {/* Special Wide CTA Card */}
          <div
            onClick={() => scrollTo("services-list")}
            className="group relative flex flex-col md:col-span-2 lg:col-span-2 rounded-3xl border border-slate-200/80 bg-slate-50 p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer justify-center"
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center sm:text-left">
                <h3 className="text-lg font-extrabold text-slate-900">
                  Customize your IV therapy
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed max-w-md">
                  Upgrade and customize any IV therapy effortlessly with Sharlot. Decide and tailor your treatment with your IV nurse at your appointment.
                </p>
              </div>
              <button className="flex items-center gap-1.5 rounded-full bg-slate-100 hover:bg-brand-blue hover:text-white border border-slate-200/50 px-6 py-3 text-xs font-extrabold text-slate-700 transition-colors shadow-sm cursor-pointer whitespace-nowrap">
                View Treatments
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

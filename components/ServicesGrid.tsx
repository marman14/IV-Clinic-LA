"use client";
import { Zap, Droplets, Shield, Award, ArrowRight } from "lucide-react";

const services = [
  {
    id: "energy-boost",
    num: "01",
    name: "Energy & Focus IV",
    desc: "Fight fatigue & brain fog. Supports alertness & sustained energy throughout the day.",
    icon: Zap,
  },
  {
    id: "hydration",
    num: "02",
    name: "Hydration Therapy",
    desc: "Perfect for dehydration from travel, heat, or intense activity. Replenish electrolytes fast.",
    icon: Droplets,
  },
  {
    id: "immune-boost",
    num: "03",
    name: "Immunity Boost IV",
    desc: "Vitamin C, Zinc & antioxidants. Strengthen your body's defenses & reduce your risk of illness.",
    icon: Shield,
  },
  {
    id: "athletic-recovery",
    num: "04",
    name: "Athletic Recovery",
    desc: "Speeds up recovery after workouts and helps maintain peak performance levels.",
    icon: Award,
  },
];

export function ServicesGrid() {
  const handleSelect = (id: string) => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
    window.dispatchEvent(new CustomEvent("drip-selected", { detail: id }));
  };

  return (
    <section id="services" className="bg-rs-navy section-padding">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Header */}
        <div className="mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="space-y-4 max-w-xl">
            <span className="label-text text-rs-peach tracking-widest">Our Treatments</span>
            <h2 className="headline-lg text-white">
              Common IV Therapy<br />
              <span className="italic-serif text-rs-sand">Services</span>
            </h2>
          </div>
          <p className="text-white/60 text-sm leading-relaxed max-w-xs lg:max-w-xs lg:text-right">
            Professional IV treatments that help you feel energized &amp; fully recovered—anytime, anywhere in Los Angeles.
          </p>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-0" />

        {/* Service list */}
        {services.map((s, i) => {
          const Icon = s.icon;
          return (
            <div key={s.id}>
              <button
                onClick={() => handleSelect(s.id)}
                className="group w-full flex items-center justify-between gap-6 py-8 text-left cursor-pointer"
              >
                <div className="flex items-center gap-6 flex-1">
                  <span className="label-text text-white/25 w-8 shrink-0">{s.num}</span>
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/5 text-rs-peach group-hover:bg-rs-peach group-hover:text-rs-navy transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-medium text-white group-hover:text-rs-peach transition-colors">
                      {s.name}
                    </h3>
                    <p className="mt-1 text-sm text-white/50 leading-relaxed max-w-md hidden sm:block">
                      {s.desc}
                    </p>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 shrink-0 text-white/25 group-hover:text-rs-peach group-hover:translate-x-1 transition-all" />
              </button>
              {i < services.length - 1 && <div className="h-px bg-white/10" />}
            </div>
          );
        })}

        {/* CTA row */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 pt-10 border-t border-white/10">
          <p className="font-display text-lg italic-serif text-rs-sand text-center sm:text-left">
            Upgrade and customize any IV with Sharlot.
          </p>
          <button
            onClick={() => document.getElementById("services-list")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-outline-white"
          >
            View All Treatments
          </button>
        </div>

      </div>
    </section>
  );
}

"use client";
import Image from "next/image";
import { useState } from "react";
import { ArrowRight, Star } from "lucide-react";

const drips = [
  {
    id: "immune-boost",
    label: "STRONG IMMUNE DEFENSE",
    name: "Strong Immune Defense",
    desc: "High-Dose Vitamin C | Zinc | Glutathione | B-Complex",
    price: 154,
    popular: true,
    image: "/images/drip_immune.png",
  },
  {
    id: "hydration",
    label: "HYDRATION & ELECTROLYTES",
    name: "Enhanced Electrolytes",
    desc: "IV Saline | Sodium | Potassium | Calcium | Magnesium",
    price: 136,
    popular: false,
    image: "/images/drip_hydration.png",
  },
  {
    id: "myers-cocktail",
    label: "VITAMIN C MEGA DOSE",
    name: "High Dose Vitamin C",
    desc: "High-Dose Vitamin C | Vitamin B12 | B-Complex | Magnesium",
    price: 154,
    popular: false,
    image: "/images/drip_immune.png",
  },
  {
    id: "nad-plus",
    label: "CELLULAR REJUVENATION",
    name: "NAD+ Cell Regeneration",
    desc: "500mg NAD+ Coenzyme | Premium IV Saline",
    price: 499,
    popular: true,
    image: "/images/drip_energy.png",
  },
  {
    id: "beauty",
    label: "COLLAGEN & RADIANCE",
    name: "Beauty Glow Drip",
    desc: "Biotin | High-Dose Glutathione | Vitamin C | B-Complex",
    price: 229,
    popular: false,
    image: "/images/drip_energy.png",
  },
  {
    id: "hangover",
    label: "RAPID RECOVERY",
    name: "Hangover Recovery Drip",
    desc: "Anti-Nausea | Anti-Inflammatory | Vitamin C | B12 | Electrolytes",
    price: 249,
    popular: false,
    image: "/images/drip_hydration.png",
  },
];

export function DripMenuSection() {
  const [filter, setFilter] = useState<"all" | "high" | "low">("all");

  const filtered = drips.filter((d) => {
    if (filter === "high") return d.price >= 200;
    if (filter === "low") return d.price < 200;
    return true;
  });

  const select = (id: string) => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
    window.dispatchEvent(new CustomEvent("drip-selected", { detail: id }));
  };

  return (
    <section id="services-list" className="bg-rs-offwhite section-padding">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Header */}
        <div className="mb-14 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div className="space-y-4 max-w-xl">
            <span className="label-text text-rs-blue tracking-widest">Treatments</span>
            <h2 className="headline-lg text-rs-navy">
              Mobile IV Therapy<br />
              <span className="italic-serif text-rs-midgray">Treatments</span>
            </h2>
            <p className="text-rs-midgray text-sm leading-relaxed max-w-sm">
              30+ IV drips, including custom hydration treatments tailored to your specific needs.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex gap-1 bg-rs-sand/40 rounded-full p-1 self-start">
            {(["all", "high", "low"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all cursor-pointer ${
                  filter === f
                    ? "bg-rs-navy text-white shadow-sm"
                    : "text-rs-midgray hover:text-rs-navy"
                }`}
              >
                {f === "all" ? "All IVs" : f === "high" ? "Premium" : "Standard"}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((drip) => (
            <div
              key={drip.id}
              className="group relative flex flex-col bg-white rounded-2xl overflow-hidden border border-rs-sand/60 hover:border-rs-navy/20 hover:shadow-lg transition-all duration-300"
            >
              {drip.popular && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-1 rounded-full bg-rs-blue px-3 py-1 text-[10px] font-black text-white uppercase tracking-wider">
                    <Star className="h-3 w-3 fill-current" /> Popular
                  </span>
                </div>
              )}

              {/* Image */}
              <div className="relative w-full aspect-[4/3] bg-rs-lightsand overflow-hidden">
                <Image
                  src={drip.image}
                  alt={drip.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Info */}
              <div className="flex flex-col flex-1 p-6 gap-3">
                <span className="label-text text-rs-blue tracking-widest">{drip.label}</span>
                <h3 className="font-display text-xl font-medium text-rs-navy leading-tight">{drip.name}</h3>
                <p className="text-xs text-rs-midgray leading-relaxed flex-1">{drip.desc}</p>

                <div className="flex items-center justify-between pt-4 border-t border-rs-sand/50 mt-2">
                  <span className="font-display text-2xl font-semibold text-rs-navy">${drip.price}</span>
                  <button
                    onClick={() => select(drip.id)}
                    className="inline-flex items-center gap-1 rounded-full bg-rs-navy hover:bg-rs-blue text-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Book Now <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

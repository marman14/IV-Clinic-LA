"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";

interface DripPackage {
  id: string;
  name: string;
  tagline: string;
  price: number;
  popular: boolean;
  image: string; // Real image path
  glowColor: string; // CSS shadow class
  label: string; // Category badge
  ingredients: string;
}

const dripPackages: DripPackage[] = [
  {
    id: "immune-boost",
    name: "Strong Immune Defense",
    tagline: "High-Dose Immunity Shield",
    price: 154,
    popular: true,
    image: "/images/drip_immune.png",
    glowColor: "shadow-emerald-500/10 border-emerald-100",
    label: "STRONG IMMUNE DEFENSE",
    ingredients: "High-Dose Vitamin C | Zinc | Glutathione | B-Complex Vitamins",
  },
  {
    id: "hydration",
    name: "Enhanced Electrolytes",
    tagline: "Rehydrate & Revitalize",
    price: 136,
    popular: false,
    image: "/images/drip_hydration.png",
    glowColor: "shadow-sky-500/10 border-sky-100",
    label: "STRONG IMMUNE DEFENSE",
    ingredients: "IV Saline Fluid | Sodium | Potassium | Calcium | Magnesium",
  },
  {
    id: "myers-cocktail",
    name: "High Dose Vitamin C",
    tagline: "Classical Myers' Booster",
    price: 154,
    popular: false,
    image: "/images/drip_immune.png",
    glowColor: "shadow-orange-500/10 border-orange-100",
    label: "STRONG IMMUNE DEFENSE",
    ingredients: "High-Dose Vitamin C | Vitamin B12 | B-Complex Vitamins | Magnesium",
  },
  {
    id: "nad-plus",
    name: "NAD+ Cell Regeneration",
    tagline: "Anti-Aging & Brain Health",
    price: 499,
    popular: true,
    image: "/images/drip_energy.png",
    glowColor: "shadow-purple-500/10 border-purple-100",
    label: "CELLULAR REJUVENATION",
    ingredients: "500mg NAD+ Coenzyme | Premium IV Saline",
  },
  {
    id: "beauty",
    name: "Beauty Glow Drip",
    tagline: "Collagen & Radiance Push",
    price: 229,
    popular: false,
    image: "/images/drip_energy.png",
    glowColor: "shadow-rose-500/10 border-rose-100",
    label: "COLLAGEN & RADIANCE",
    ingredients: "Biotin | High-Dose Glutathione | Vitamin C | B-Complex",
  },
  {
    id: "hangover",
    name: "Hangover Recovery Drip",
    tagline: "Direct Nausea & Headache Relief",
    price: 249,
    popular: false,
    image: "/images/drip_hydration.png",
    glowColor: "shadow-indigo-500/10 border-indigo-100",
    label: "RAPID RECOVERY",
    ingredients: "Anti-Nausea | Anti-Inflammatory | Vitamin C | B12 | Electrolytes",
  },
];

export function DripMenuSection() {
  const [activeFilter, setActiveFilter] = useState<"all" | "high" | "low">("all");

  const selectPackage = (id: string) => {
    const el = document.getElementById("booking");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    window.dispatchEvent(new CustomEvent("drip-selected", { detail: id }));
  };

  const filteredPackages = dripPackages.filter((pkg) => {
    if (activeFilter === "high") return pkg.price >= 200;
    if (activeFilter === "low") return pkg.price < 200;
    return true;
  });

  return (
    <section id="services-list" className="bg-white py-16 sm:py-24 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12 text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Mobile IV Therapy Treatments
          </h2>
          <p className="text-base sm:text-lg text-slate-500 leading-relaxed">
            30+ IV drips, including custom IV hydration treatments that let you pick the nutrients.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="mb-16 flex justify-center border-b border-slate-100">
          <div className="flex gap-8">
            <button
              onClick={() => setActiveFilter("all")}
              className={`pb-4 text-sm font-bold transition-all border-b-2 cursor-pointer ${
                activeFilter === "all" ? "border-brand-blue text-brand-blue" : "border-transparent text-slate-500 hover:text-slate-950"
              }`}
            >
              Show All IVs
            </button>
            <button
              onClick={() => setActiveFilter("high")}
              className={`pb-4 text-sm font-bold transition-all border-b-2 cursor-pointer ${
                activeFilter === "high" ? "border-brand-blue text-brand-blue" : "border-transparent text-slate-500 hover:text-slate-950"
              }`}
            >
              Higher-Priced IVs
            </button>
            <button
              onClick={() => setActiveFilter("low")}
              className={`pb-4 text-sm font-bold transition-all border-b-2 cursor-pointer ${
                activeFilter === "low" ? "border-brand-blue text-brand-blue" : "border-transparent text-slate-500 hover:text-slate-950"
              }`}
            >
              Lower-Priced IVs
            </button>
          </div>
        </div>

        {/* Bag Grid */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className={`group flex flex-col items-center rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm hover:shadow-lg transition-all duration-300 relative ${pkg.glowColor}`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-brand-blue px-3 py-1 text-[10px] font-black text-white uppercase shadow-sm">
                    <Star className="h-3 w-3 fill-current" />
                    Popular
                  </span>
                </div>
              )}

              {/* Real fruit-infused IV bag image */}
              <div className="relative w-full aspect-[4/5] max-w-[200px] mb-6 overflow-hidden rounded-2xl bg-slate-50 group-hover:scale-[1.03] transition-transform duration-500 shadow-inner">
                <Image
                  src={pkg.image}
                  alt={pkg.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Drip Information details */}
              <div className="w-full text-center space-y-3">
                <span className="text-[10px] font-extrabold tracking-widest text-brand-blue uppercase bg-brand-blue/5 px-3 py-1 rounded-full">
                  {pkg.label}
                </span>
                
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-slate-900 leading-tight">
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    {pkg.ingredients}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-2xl font-black text-slate-950">
                    ${pkg.price}
                  </span>
                  
                  <button
                    onClick={() => selectPackage(pkg.id)}
                    className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 hover:bg-brand-blue hover:text-white px-5 py-3 text-xs font-bold text-slate-700 transition-colors shadow-sm cursor-pointer"
                  >
                    Book Now
                    <ArrowRight className="h-4 w-4" />
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

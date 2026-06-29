"use client";

import Image from "next/image";
import { ShieldCheck, Heart, Award } from "lucide-react";

export function OwnerSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-slate-50 py-16 sm:py-24">
      {/* Background Decorative Accents */}
      <div className="absolute right-0 top-0 -z-10 h-72 w-72 rounded-full bg-brand-blue/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 h-96 w-96 rounded-full bg-brand-green/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          
          {/* Left Column: Owner Portrait Mockup */}
          <div className="relative mx-auto max-w-md lg:col-span-5 lg:mx-0 lg:max-w-none">
            <div className="relative overflow-hidden rounded-2xl bg-white p-3 shadow-xl ring-1 ring-slate-200">
              <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-slate-100">
                <Image
                  src="/images/sharlot_owner.png"
                  alt="Sharlot - Owner & Director of IV Clinic LA"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="absolute bottom-6 left-6 right-6 rounded-xl bg-white/90 p-4 shadow-lg backdrop-blur-md">
                <p className="text-sm font-semibold text-slate-900">Sharlot</p>
                <p className="text-xs text-brand-blue font-bold">Founder & Director, IV Clinic LA</p>
              </div>
            </div>
          </div>

          {/* Right Column: Founder Copy */}
          <div className="lg:col-span-7">
            <div className="max-w-2xl">
              <span className="rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-bold tracking-wide text-brand-blue uppercase">
                Meet the Founder
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Redefining Wellness in Los Angeles
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                "At IV Clinic LA, our mission is simple: to make clinical-grade health and hydration accessible, safe, and convenient for every Angeleno. We bring the absolute best in IV therapy directly to your space—whether that’s your home, office, hotel room, or production set."
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Sharlot founded the clinic to combine rigorous medical oversight with a luxury wellness experience. As a hands-on director, she handpicks and trains our network of licensed Registered Nurses, ensuring the highest standards of safety, sterile administration, and clinical excellence.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Medical-Grade</h3>
                    <p className="mt-1 text-xs text-slate-600">Sterile, safe, and clinically tested formulas.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                    <Heart className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Personalized Care</h3>
                    <p className="mt-1 text-xs text-slate-600">Formulated for your specific wellness goals.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-yellow-500/10 text-yellow-600">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Highly Rated</h3>
                    <p className="mt-1 text-xs text-slate-600">Trusted by thousands of happy patients in LA.</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <button
                  onClick={() => {
                    const el = document.getElementById("booking");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="rounded-full bg-brand-blue px-8 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:bg-brand-darkblue hover:shadow-lg focus:outline-none cursor-pointer"
                >
                  Book with Our Team
                </button>
                <button
                  onClick={() => {
                    const el = document.getElementById("services");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="rounded-full border border-slate-300 bg-white px-8 py-3.5 text-sm font-bold text-slate-700 transition-colors hover:bg-slate-50 cursor-pointer"
                >
                  View IV Menu
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

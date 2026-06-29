"use client";

import { useState } from "react";
import { MapPin, Search, CheckCircle2, AlertCircle } from "lucide-react";

const serviceAreas = [
  { name: "Beverly Hills", zips: ["90210", "90211", "90212"] },
  { name: "Santa Monica", zips: ["90401", "90402", "90403", "90404", "90405"] },
  { name: "West Hollywood", zips: ["90069", "90046"] },
  { name: "Downtown LA", zips: ["90012", "90013", "90014", "90015", "90017", "90021", "90071"] },
  { name: "Pasadena", zips: ["91101", "91103", "91105", "91106", "91107"] },
  { name: "Malibu", zips: ["90265"] },
  { name: "Venice", zips: ["90291"] },
  { name: "Manhattan Beach", zips: ["90266"] },
  { name: "Studio City", zips: ["91604"] },
];

export function ServiceAreasSection() {
  const [zip, setZip] = useState("");
  const [status, setStatus] = useState<{
    type: "success" | "warning" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanZip = zip.trim();
    if (!cleanZip) return;

    const directMatch = serviceAreas.find((area) => area.zips.includes(cleanZip));
    if (directMatch) {
      setStatus({
        type: "success",
        message: `Great news! We serve ${directMatch.name} (${cleanZip}) with complimentary travel.`,
      });
      return;
    }

    if (/^(90|91|92)\d{3}$/.test(cleanZip)) {
      setStatus({
        type: "warning",
        message: `We service your area (${cleanZip})! A standard travel fee of $25 may apply depending on schedule availability.`,
      });
    } else {
      setStatus({
        type: "error",
        message: `ZIP code ${cleanZip} is outside our standard Los Angeles service area. Call us at (310) 555-0199 to request custom coverage.`,
      });
    }
  };

  return (
    <section id="service-areas" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Column: text */}
          <div className="lg:col-span-7">
            <span className="rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-bold tracking-wide text-brand-blue uppercase">
              Coverage Area
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              100% Mobile IV Therapy Across Greater Los Angeles
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              We bring clinical hydration and wellness directly to your home, office, hotel room, or event space. Our licensed RNs travel directly to you, saving you traffic and wait times.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {serviceAreas.map((area) => (
                <div
                  key={area.name}
                  className="flex items-center gap-2 rounded-xl border border-slate-100 bg-slate-50 p-3 text-sm font-semibold text-slate-700"
                >
                  <MapPin className="h-4 w-4 text-brand-blue shrink-0" />
                  <span>{area.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: zip box */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl ring-1 ring-slate-100 sm:p-8">
              <h3 className="text-xl font-bold text-slate-900">Check Your ZIP Code</h3>
              <p className="mt-2 text-sm text-slate-600">
                Enter your Los Angeles area ZIP code to instantly check coverage and travel fees.
              </p>

              <form onSubmit={handleSearch} className="mt-6 flex gap-2">
                <div className="relative flex-1">
                  <input
                    type="text"
                    pattern="\d*"
                    maxLength={5}
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                    placeholder="e.g. 90210"
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 pl-10 text-slate-900 placeholder-slate-400 focus:border-brand-blue focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                    aria-label="ZIP Code"
                  />
                  <Search className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" />
                </div>
                <button
                  type="submit"
                  className="rounded-xl bg-brand-blue px-6 py-3 font-semibold text-white shadow-md transition-all hover:bg-brand-darkblue hover:shadow-lg focus:outline-none cursor-pointer"
                >
                  Check
                </button>
              </form>

              {status.type && (
                <div
                  className={`mt-6 flex items-start gap-3 rounded-xl p-4 text-sm leading-relaxed ${
                    status.type === "success"
                      ? "bg-brand-green/10 text-emerald-800"
                      : status.type === "warning"
                      ? "bg-amber-50 text-amber-800"
                      : "bg-rose-50 text-rose-800"
                  }`}
                >
                  {status.type === "success" ? (
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-green" />
                  ) : (
                    <AlertCircle className="h-5 w-5 shrink-0 text-amber-600" />
                  )}
                  <div>{status.message}</div>
                </div>
              )}

              <div className="mt-6 border-t border-slate-100 pt-6 text-center">
                <p className="text-xs text-slate-500">
                  Don't see your neighborhood? Call us directly at{" "}
                  <a href="tel:3105550199" className="font-semibold text-brand-blue hover:underline">
                    (310) 555-0199
                  </a>
                  . We accommodate special requests whenever possible.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

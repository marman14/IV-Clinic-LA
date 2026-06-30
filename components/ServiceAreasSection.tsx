"use client";
import { useState } from "react";
import { MapPin, CheckCircle, XCircle } from "lucide-react";

const directZips = ["90210", "90401", "90405", "90046", "90069", "90048", "90036",
  "90012", "90013", "90014", "90015", "90071", "91602", "91604", "90025", "90049",
  "90272", "90077", "90067", "90230"];
const extendedZips = ["91001", "91011", "91101", "91103", "91104", "91105", "91106",
  "90045", "90260", "90266", "91302", "91304", "91307", "91311", "90803", "90804"];

const neighborhoods = [
  "Beverly Hills", "Santa Monica", "West Hollywood", "Downtown LA",
  "Pasadena", "Malibu", "Venice Beach", "Studio City",
  "Bel Air", "Pacific Palisades", "Culver City", "Silver Lake",
  "Los Feliz", "Brentwood", "Marina del Rey", "Westwood",
];

export function ServiceAreasSection() {
  const [zip, setZip] = useState("");
  const [result, setResult] = useState<"direct" | "extended" | "outside" | null>(null);

  const check = () => {
    const trimmed = zip.trim();
    if (directZips.includes(trimmed)) setResult("direct");
    else if (extendedZips.includes(trimmed)) setResult("extended");
    else setResult("outside");
  };

  return (
    <section id="service-areas" className="bg-rs-lightsand section-padding">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Header */}
        <div className="mb-14 space-y-4">
          <span className="label-text text-rs-blue tracking-widest">Coverage</span>
          <h2 className="headline-lg text-rs-navy">
            Serving Greater<br />
            <span className="italic-serif text-rs-midgray">Los Angeles</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left — Neighborhoods */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {neighborhoods.map((n) => (
                <div
                  key={n}
                  className="flex items-center gap-2 rounded-xl bg-white border border-rs-sand px-4 py-3 text-sm font-medium text-rs-navy hover:border-rs-blue hover:text-rs-blue transition-colors"
                >
                  <MapPin className="h-3.5 w-3.5 text-rs-blue shrink-0" />
                  {n}
                </div>
              ))}
            </div>
          </div>

          {/* Right — ZIP checker */}
          <div className="lg:col-span-5">
            <div className="bg-rs-navy rounded-2xl p-8 space-y-6">
              <div className="space-y-2">
                <span className="label-text text-rs-peach tracking-widest">Coverage Check</span>
                <h3 className="font-display text-2xl font-medium text-white">
                  Do We Serve<br />
                  <span className="italic-serif text-rs-sand">Your ZIP Code?</span>
                </h3>
              </div>

              <div className="flex gap-3">
                <input
                  type="text"
                  inputMode="numeric"
                  pattern="\d*"
                  maxLength={5}
                  value={zip}
                  onChange={(e) => { setZip(e.target.value); setResult(null); }}
                  placeholder="Enter ZIP code"
                  className="flex-1 rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-rs-peach"
                />
                <button
                  onClick={check}
                  disabled={zip.length < 5}
                  className="btn-primary disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Check
                </button>
              </div>

              {result === "direct" && (
                <div className="flex items-start gap-3 rounded-xl bg-emerald-500/10 border border-emerald-400/30 p-4">
                  <CheckCircle className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-bold text-emerald-300">✓ Direct Coverage!</p>
                    <p className="text-xs text-white/60 mt-1">We dispatch directly to your ZIP code. Same-day booking available.</p>
                  </div>
                </div>
              )}
              {result === "extended" && (
                <div className="flex items-start gap-3 rounded-xl bg-amber-500/10 border border-amber-400/30 p-4">
                  <CheckCircle className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-bold text-amber-300">✓ Extended Coverage</p>
                    <p className="text-xs text-white/60 mt-1">We serve your area with a small travel fee. Book to confirm availability.</p>
                  </div>
                </div>
              )}
              {result === "outside" && (
                <div className="flex items-start gap-3 rounded-xl bg-red-500/10 border border-red-400/30 p-4">
                  <XCircle className="h-5 w-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-bold text-red-300">Outside Coverage</p>
                    <p className="text-xs text-white/60 mt-1">This ZIP is outside our current coverage area. Contact us to discuss options.</p>
                  </div>
                </div>
              )}

              <div className="h-px bg-white/10" />
              <p className="text-xs text-white/40 leading-relaxed">
                Coverage currently includes Beverly Hills, Santa Monica, West Hollywood, Downtown LA, Malibu, Venice, Studio City, and surrounding areas.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

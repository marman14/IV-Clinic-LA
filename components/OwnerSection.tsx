"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function OwnerSection() {
  return (
    <section id="about" className="bg-rs-navy section-padding">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left — Large editorial image */}
          <div className="lg:col-span-5 relative">
            <div className="relative overflow-hidden rounded-2xl aspect-[3/4] shadow-2xl">
              <Image
                src="/images/sharlot_nano_banana.png"
                alt="Sharlot — Founder and Medical Director of DripGo IV Clinic LA"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              {/* Subtle warm overlay at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-rs-navy/40 to-transparent" />
            </div>
          </div>

          {/* Right — Copy */}
          <div className="lg:col-span-7 space-y-8">
            <span className="label-text text-rs-peach tracking-widest">Meet The Founder</span>

            {/* Big italic serif quote */}
            <blockquote className="font-display text-2xl sm:text-3xl lg:text-4xl italic-serif text-rs-sand leading-snug">
              &ldquo;Every person deserves hospital-grade wellness care—wherever they are.&rdquo;
            </blockquote>

            <div className="h-px bg-white/10" />

            <div className="space-y-4">
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white">
                Sharlot, RN — Founder &amp; Director
              </h2>
              <p className="text-white/60 text-sm leading-relaxed max-w-lg">
                With over a decade of clinical nursing experience and a passion for preventive wellness, Sharlot founded DripGo to make premium IV therapy accessible throughout Los Angeles. She personally leads every clinical protocol, nurse vetting process, and quality assurance program.
              </p>
              <p className="text-white/60 text-sm leading-relaxed max-w-lg">
                Sharlot holds an RN license from the California Board of Registered Nursing, is a certified IV infusion specialist, and has administered thousands of therapeutic drips to clients across Beverly Hills, Santa Monica, West Hollywood, and beyond.
              </p>
            </div>

            <button
              onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-outline-white flex items-center gap-2"
            >
              Book with Sharlot&apos;s Team <ArrowRight className="h-4 w-4" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

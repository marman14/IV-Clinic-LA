"use client";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const steps = [
  { num: "01", title: "Book Online", desc: "Choose your IV treatment & time. Our booking process takes under 2 minutes." },
  { num: "02", title: "Medical Review", desc: "A licensed professional reviews your health intake before dispatch." },
  { num: "03", title: "We Come to You", desc: "Your certified nurse arrives at your home, hotel, or office." },
  { num: "04", title: "Relax & Recover", desc: "Sit back as your 30–60 minute infusion does its work." },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-rs-lightsand section-padding">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Header */}
        <div className="mb-16 space-y-4">
          <span className="label-text text-rs-blue tracking-widest">Process</span>
          <h2 className="headline-lg text-rs-navy">
            How It <span className="italic-serif text-rs-midgray">Works</span>
          </h2>
          <p className="text-rs-midgray text-base leading-relaxed max-w-lg">
            Our trained nurse administers your IV therapy at home, office, or any location you prefer across Los Angeles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left — Steps */}
          <div className="lg:col-span-7 space-y-0">
            {steps.map((step, i) => (
              <div key={step.num}>
                <div className="flex items-start gap-6 py-7">
                  <span className="label-text text-rs-navy/25 w-8 shrink-0 mt-1">{step.num}</span>
                  <div className="flex-1">
                    <h3 className="font-display text-xl sm:text-2xl font-medium text-rs-navy mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-rs-midgray leading-relaxed">{step.desc}</p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-rs-navy/20 shrink-0 mt-1" />
                </div>
                {i < steps.length - 1 && <div className="h-px bg-rs-navy/10" />}
              </div>
            ))}

            <div className="pt-8">
              <button
                onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-primary"
              >
                Book Your Session
              </button>
            </div>
          </div>

          {/* Right — Nano banana image */}
          <div className="lg:col-span-5 relative">
            <div className="relative overflow-hidden rounded-2xl aspect-[3/4] w-full shadow-xl">
              <Image
                src="/images/how_it_works_nano_banana.png"
                alt="Nurse preparing IV drip in a tropical wellness room"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -left-6 bg-rs-navy rounded-2xl px-7 py-5 shadow-xl hidden sm:block">
              <p className="font-display text-3xl font-semibold text-white">30+</p>
              <p className="label-text text-rs-peach mt-1 tracking-widest">IV Formulas</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

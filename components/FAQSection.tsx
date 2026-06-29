"use client";

import Image from "next/image";
import { Plus } from "lucide-react";

const faqs = [
  {
    id: "safe",
    question: "Is IV therapy safe for regular use and first-time patients?",
    answer: "Yes, IV therapy is generally safe when administered by trained medical professionals. All treatments are administered by licensed, certified Registered Nurses (RNs) under strict medical protocols following a detailed health assessment.",
  },
  {
    id: "duration",
    question: "How long does a typical IV therapy session take?",
    answer: "Most IV therapy sessions take 30 to 60 minutes from start to finish. Our nurse will monitor your comfort throughout the infusion and answer any questions.",
  },
  {
    id: "avoid",
    question: "Who should avoid IV therapy before receiving treatment?",
    answer: "Patients with severe kidney disease, congestive heart failure, or certain pre-existing metabolic disorders should consult their primary physician before receiving IV therapy. Our nurses perform a health intake screening to ensure suitability.",
  },
  {
    id: "approval",
    question: "Do I need a medical approval before booking IV therapy?",
    answer: "No prior doctor's referral is required. Our clinical team led by Sharlot reviews your health questionnaire, and our medical director provides approval as part of the booking process.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="bg-white py-16 sm:py-24 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          
          {/* Left Column: Heading & Image */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Frequently Asked Question
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed max-w-md">
              Our Frequently Asked Questions are designed to address common concerns & about IV therapy.
            </p>
            <div className="relative overflow-hidden rounded-3xl bg-slate-50 border border-slate-200/50 p-2 aspect-[4/3] w-full max-w-sm">
              <div className="relative h-full w-full overflow-hidden rounded-2xl">
                <Image
                  src="/images/faq_dripgo.png"
                  alt="Doctor consulting with a patient - DripGo"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Native Mutually Exclusive Accordions */}
          <div className="lg:col-span-7 space-y-4 w-full">
            {faqs.map((faq, idx) => (
              <details
                key={faq.id}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-200 open:border-brand-blue/30 open:ring-1 open:ring-brand-blue/10"
                name="faq-accordion"
                {...(idx === 0 ? { open: true } : {})}
              >
                <summary className="flex cursor-pointer items-center justify-between px-6 py-5 text-left font-bold text-slate-900 list-none [&::-webkit-details-marker]:hidden">
                  <span className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-brand-blue transition-colors">
                    {faq.question}
                  </span>
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-50 text-slate-500 transition-transform duration-200 group-open:rotate-45 group-hover:bg-brand-blue/10 group-hover:text-brand-blue">
                    <Plus className="h-4 w-4" />
                  </span>
                </summary>
                <div className="px-6 pb-5 text-xs sm:text-sm leading-relaxed text-slate-500 border-t border-slate-100 pt-4">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

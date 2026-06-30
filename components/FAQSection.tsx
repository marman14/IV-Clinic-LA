"use client";
import { Plus } from "lucide-react";
import Image from "next/image";

const faqs = [
  {
    id: "safe",
    question: "Is IV therapy safe for regular use and first-time patients?",
    answer: "Yes. IV therapy is generally safe when administered by trained medical professionals. Every treatment at DripGo begins with a health screening reviewed by our licensed clinical team led by Sharlot.",
  },
  {
    id: "duration",
    question: "How long does a typical IV therapy session take?",
    answer: "Most sessions take 30 to 60 minutes from start to finish. Your nurse will stay with you throughout the entire infusion and monitor your comfort.",
  },
  {
    id: "avoid",
    question: "Who should avoid IV therapy before receiving treatment?",
    answer: "Patients with severe kidney disease, congestive heart failure, or certain metabolic disorders should consult their physician first. Our nurses perform a health intake screening to ensure suitability for every client.",
  },
  {
    id: "approval",
    question: "Do I need a medical approval before booking?",
    answer: "No prior referral is required. Our clinical team reviews your health questionnaire as part of the booking process, and our medical director provides approval before dispatch.",
  },
  {
    id: "where",
    question: "Where can I receive IV therapy from DripGo?",
    answer: "Anywhere in our Los Angeles coverage area — your home, hotel room, office, studio, or event venue. Just enter your address at booking and we'll confirm dispatch availability.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="bg-rs-offwhite section-padding">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left — sticky header + image */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-8">
            <div className="space-y-4">
              <span className="label-text text-rs-blue tracking-widest">FAQ</span>
              <h2 className="headline-md text-rs-navy">
                Frequently Asked<br />
                <span className="italic-serif text-rs-midgray">Questions</span>
              </h2>
              <p className="text-rs-midgray text-sm leading-relaxed">
                Common questions about IV therapy, Sharlot&apos;s team, and what to expect at your appointment.
              </p>
            </div>

            {/* Consultation image */}
            <div className="relative overflow-hidden rounded-2xl aspect-[4/3] border border-rs-sand">
              <Image
                src="/images/faq_dripgo.png"
                alt="DripGo doctor consulting with a patient"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
          </div>

          {/* Right — Accordions */}
          <div className="lg:col-span-8 space-y-3">
            {faqs.map((faq, i) => (
              <details
                key={faq.id}
                name="faq-accordion"
                className="group rounded-2xl border border-rs-sand bg-white overflow-hidden open:border-rs-navy/30"
                {...(i === 0 ? { open: true } : {})}
              >
                <summary className="flex cursor-pointer items-center justify-between px-7 py-5 list-none [&::-webkit-details-marker]:hidden">
                  <span className="font-display text-base sm:text-lg font-medium text-rs-navy group-hover:text-rs-blue transition-colors pr-6">
                    {faq.question}
                  </span>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-rs-sand text-rs-navy transition-transform duration-200 group-open:rotate-45 group-open:border-rs-navy group-open:bg-rs-navy group-open:text-white">
                    <Plus className="h-4 w-4" />
                  </span>
                </summary>
                <div className="px-7 pb-6 pt-1 text-sm text-rs-midgray leading-relaxed border-t border-rs-sand">
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

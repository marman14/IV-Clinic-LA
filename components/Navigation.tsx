"use client";

import { useState } from "react";
import { Menu, X, Droplet } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-1.5 transition-opacity hover:opacity-90"
          aria-label="DripGo home"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue text-white shadow-md">
            <Droplet className="h-6 w-6 fill-current" />
          </span>
          <span className="text-2xl font-black tracking-tight text-slate-900">
            Drip<span className="text-brand-blue">Go</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Desktop navigation">
          <button
            onClick={() => scrollTo("services")}
            className="text-sm font-semibold text-slate-600 transition-colors hover:text-brand-blue cursor-pointer"
          >
            Home
          </button>
          <button
            onClick={() => scrollTo("service-areas")}
            className="text-sm font-semibold text-slate-600 transition-colors hover:text-brand-blue cursor-pointer"
          >
            IV Therapy Areas
          </button>
          <button
            onClick={() => scrollTo("services")}
            className="text-sm font-semibold text-slate-600 transition-colors hover:text-brand-blue cursor-pointer"
          >
            Services
          </button>
          <button
            onClick={() => scrollTo("booking")}
            className="text-sm font-semibold text-slate-600 transition-colors hover:text-brand-blue cursor-pointer"
          >
            Rx Ship To you
          </button>
          <button
            onClick={() => scrollTo("about")}
            className="text-sm font-semibold text-slate-600 transition-colors hover:text-brand-blue cursor-pointer"
          >
            About Us
          </button>
          <button
            onClick={() => scrollTo("booking")}
            className="rounded-full bg-brand-blue px-7 py-3 text-sm font-bold text-white shadow-md transition-all hover:bg-brand-darkblue hover:shadow-lg cursor-pointer"
          >
            Book Now
          </button>
        </nav>

        {/* Mobile toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => scrollTo("booking")}
            className="rounded-full bg-brand-blue px-4 py-2 text-xs font-bold text-white shadow-md cursor-pointer"
          >
            Book
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-md p-2 text-slate-600 hover:bg-slate-100 cursor-pointer"
            aria-label="Toggle mobile menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-slate-100 bg-white md:hidden animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col px-4 py-3" aria-label="Mobile navigation">
            <button
              onClick={() => scrollTo("services")}
              className="py-3 text-left text-sm font-bold text-slate-700 hover:text-brand-blue cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => scrollTo("service-areas")}
              className="py-3 text-left text-sm font-bold text-slate-700 hover:text-brand-blue cursor-pointer"
            >
              IV Therapy Areas
            </button>
            <button
              onClick={() => scrollTo("services")}
              className="py-3 text-left text-sm font-bold text-slate-700 hover:text-brand-blue cursor-pointer"
            >
              Services
            </button>
            <button
              onClick={() => scrollTo("booking")}
              className="py-3 text-left text-sm font-bold text-slate-700 hover:text-brand-blue cursor-pointer"
            >
              Rx Ship To you
            </button>
            <button
              onClick={() => scrollTo("about")}
              className="py-3 text-left text-sm font-bold text-slate-700 hover:text-brand-blue cursor-pointer"
            >
              About Us
            </button>
            <button
              onClick={() => scrollTo("booking")}
              className="mt-3 rounded-full bg-brand-blue px-5 py-3 text-center text-sm font-bold text-white cursor-pointer"
            >
              Book Now
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

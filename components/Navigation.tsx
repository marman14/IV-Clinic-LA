"use client";
import { useState, useEffect } from "react";
import { Droplet, Menu, X } from "lucide-react";

const links = [
  { label: "How It Works", target: "how-it-works" },
  { label: "Treatments", target: "services-list" },
  { label: "Services", target: "services" },
];
const rightLinks = [
  { label: "Find Us", target: "service-areas" },
  { label: "About Sharlot", target: "about" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-rs-offwhite shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">

        {/* ── Left nav (desktop) ── */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Left navigation">
          {links.map((l) => (
            <button
              key={l.target}
              onClick={() => scrollTo(l.target)}
              className={`label-text tracking-widest transition-colors cursor-pointer ${
                scrolled ? "text-rs-navy hover:text-rs-blue" : "text-white hover:text-rs-peach"
              }`}
            >
              {l.label}
            </button>
          ))}
        </nav>

        {/* ── Centre logo ── */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="flex items-center gap-2 mx-auto lg:absolute lg:left-1/2 lg:-translate-x-1/2"
          aria-label="DripGo home"
        >
          <span className={`flex h-9 w-9 items-center justify-center rounded-xl ${scrolled ? "bg-rs-blue" : "bg-white/20 backdrop-blur-sm"}`}>
            <Droplet className={`h-5 w-5 fill-current ${scrolled ? "text-white" : "text-white"}`} />
          </span>
          <span className={`font-display text-xl font-semibold tracking-tight ${scrolled ? "text-rs-navy" : "text-white"}`}>
            Drip<span className={scrolled ? "text-rs-blue" : "text-rs-peach"}>Go</span>
          </span>
        </a>

        {/* ── Right nav (desktop) ── */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Right navigation">
          {rightLinks.map((l) => (
            <button
              key={l.target}
              onClick={() => scrollTo(l.target)}
              className={`label-text tracking-widest transition-colors cursor-pointer ${
                scrolled ? "text-rs-navy hover:text-rs-blue" : "text-white hover:text-rs-peach"
              }`}
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("booking")}
            className="btn-primary text-xs py-3 px-6"
          >
            Book Now
          </button>
        </nav>

        {/* ── Mobile toggle ── */}
        <button
          className={`lg:hidden ml-auto rounded-md p-2 ${scrolled ? "text-rs-navy" : "text-white"}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* ── Mobile drawer ── */}
      {open && (
        <div className="border-t border-rs-sand bg-rs-offwhite px-6 py-6 lg:hidden">
          <nav className="flex flex-col gap-4">
            {[...links, ...rightLinks].map((l) => (
              <button
                key={l.target}
                onClick={() => scrollTo(l.target)}
                className="label-text text-left text-rs-navy tracking-widest hover:text-rs-blue cursor-pointer"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("booking")}
              className="btn-primary self-start mt-2"
            >
              Book Now
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

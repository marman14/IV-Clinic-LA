import { Droplet, Phone, Mail, MapPin } from "lucide-react";

export function FooterSection() {
  return (
    <footer className="bg-rs-navy text-white/50">
      {/* Top band */}
      <div className="border-b border-white/10 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="space-y-5">
            <a href="#" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-rs-blue">
                <Droplet className="h-5 w-5 fill-white text-white" />
              </span>
              <span className="font-display text-xl font-semibold text-white tracking-tight">
                Drip<span className="text-rs-peach">Go</span>
              </span>
            </a>
            <p className="text-xs leading-relaxed max-w-xs">
              IV therapy services provided by licensed medical professionals following a health assessment. Directed by <strong className="text-white/80">Sharlot</strong>, serving Greater Los Angeles.
            </p>
            <div className="flex flex-col gap-2 text-xs">
              <div className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-rs-peach shrink-0" />
                <a href="tel:3105550199" className="hover:text-white transition-colors">(310) 555-0199</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-rs-peach shrink-0" />
                <a href="mailto:info@dripgo.la" className="hover:text-white transition-colors">info@dripgo.la</a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-rs-peach shrink-0" />
                <span>Greater Los Angeles, CA</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="label-text text-white tracking-widest">Quick Links</h3>
            <ul className="space-y-2.5 text-xs">
              {["Home", "Treatments", "How It Works", "About Sharlot", "Service Areas", "Book Now"].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="label-text text-white tracking-widest">IV Treatments</h3>
            <ul className="space-y-2.5 text-xs">
              {[
                "Immunity Boost IV", "Enhanced Electrolytes", "High Dose Vitamin C",
                "NAD+ Regeneration", "Beauty Glow Drip", "Hangover Recovery",
              ].map((s) => (
                <li key={s}>
                  <a href="#services-list" className="hover:text-white transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours + Legal */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="label-text text-white tracking-widest">Hours</h3>
              <p className="text-xs leading-relaxed">
                Monday – Sunday<br />
                <span className="text-white/80 font-semibold">8:00 AM – 10:00 PM</span>
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="label-text text-white tracking-widest">Legal</h3>
              <ul className="space-y-2.5 text-xs">
                {["Privacy Policy", "Terms & Conditions", "Cookie Settings"].map((l) => (
                  <li key={l}>
                    <a href="#" className="hover:text-white transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="py-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>&copy; {new Date().getFullYear()} DripGo IV Clinic LA. Directed by Sharlot. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

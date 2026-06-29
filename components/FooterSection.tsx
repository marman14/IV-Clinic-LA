import { Droplet, Phone, Mail, MapPin, ShieldCheck, Award } from "lucide-react";

export function FooterSection() {
  return (
    <footer className="bg-slate-950 py-16 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-5 border-b border-slate-900 pb-12">
          
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-6">
            <a
              href="#"
              className="flex items-center gap-1.5"
              aria-label="DripGo home"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-blue text-white shadow-sm">
                <Droplet className="h-5 w-5 fill-current" />
              </span>
              <span className="text-xl font-black tracking-tight text-white">
                Drip<span className="text-brand-blue">Go</span>
              </span>
            </a>
            <p className="text-xs sm:text-sm leading-relaxed max-w-sm">
              IV therapy services are provided by licensed medical professionals following a health assessment. Rejuvenating treatments directed by <strong>Sharlot</strong>.
            </p>
            
            <div className="flex items-center gap-6 text-xs pt-2">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-4.5 w-4.5 text-brand-green" />
                <span className="font-semibold text-slate-200">Certified RNs</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Award className="h-4.5 w-4.5 text-brand-blue" />
                <span className="font-semibold text-slate-200">5-Star Rated</span>
              </div>
            </div>
          </div>

          {/* Contact Info Column */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">Contact Information</h3>
            <div className="flex flex-col gap-3 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-brand-blue shrink-0" />
                <a href="tel:3105550199" className="hover:text-white transition-colors">(310) 555-0199</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-brand-blue shrink-0" />
                <a href="mailto:support@yourcompany.com" className="hover:text-white transition-colors">support@yourcompany.com</a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-brand-blue shrink-0" />
                <span className="leading-tight">Greater Los Angeles, CA</span>
              </div>
            </div>
            <div className="text-[11px] leading-tight space-y-1">
              <p className="font-bold text-slate-300">Operating Hours</p>
              <p>Monday - Sunday: 8:00 AM - 10:00 PM</p>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#services-list" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Support</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">Legal</h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-500 text-center sm:text-left leading-relaxed">
            &copy; {new Date().getFullYear()} Zymco. All rights reserved. Directed by Sharlot. IV therapy services in LA.
          </p>
          <div className="flex gap-4 text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Terms & Policies</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Cookies Settings</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

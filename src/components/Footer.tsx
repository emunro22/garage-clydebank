import Link from "next/link";
import Image from "next/image";

const services = [
  { href: "/mot", label: "MOT Testing" },
  { href: "/servicing", label: "Car Servicing" },
  { href: "/repairs", label: "Car Repairs" },
  { href: "/tyres", label: "Tyres" },
];

const locations = [
  {
    name: "Domestic Centre",
    address: "423 Glasgow Road",
    city: "Clydebank, Glasgow G81 1LW",
    phone: "0141 952 6761",
  },
  {
    name: "Commercial Centre",
    address: "6 Caledonia Street",
    city: "Clydebank, Glasgow G81 4EX",
    phone: "0141 952 4228",
  },
];

export default function Footer() {
  return (
    <footer className="bg-brand-gray-dark border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="relative w-14 h-14">
                <Image src="/logo.png" alt="The Garage Clydebank" fill className="object-contain" />
              </div>
            </Link>
            <p className="text-white/50 text-sm font-body leading-relaxed mb-4">
              Clydebank&apos;s trusted MOT centre. Honest, expert vehicle care for domestic and commercial customers.
            </p>
            <div className="flex items-center gap-1 mb-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-brand-yellow" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              ))}
            </div>
            <p className="text-white/40 text-xs font-body">4.8/5.0 · 48 reviews</p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-500 text-white tracking-wider uppercase text-sm mb-4 pb-2 border-b border-white/10">
              Our Services
            </h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-white/50 hover:text-brand-yellow text-sm font-body transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 bg-brand-red rounded-full" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div className="sm:col-span-2 lg:col-span-2">
            <h3 className="font-heading font-500 text-white tracking-wider uppercase text-sm mb-4 pb-2 border-b border-white/10">
              Our Locations
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {locations.map((loc) => (
                <div key={loc.name}>
                  <p className="font-heading text-brand-yellow text-xs tracking-wider uppercase mb-1">{loc.name}</p>
                  <p className="text-white/60 text-sm font-body">{loc.address}</p>
                  <p className="text-white/60 text-sm font-body mb-2">{loc.city}</p>
                  <a href={`tel:${loc.phone.replace(/\s/g, "")}`} className="text-white/80 hover:text-brand-yellow text-sm font-body transition-colors">
                    {loc.phone}
                  </a>
                </div>
              ))}
            </div>
            <div className="mt-6 p-3 bg-brand-black/40 border border-white/10">
              <p className="font-heading text-xs tracking-wider uppercase text-white/40 mb-2">Opening Hours</p>
              <div className="grid grid-cols-2 gap-x-4 text-sm font-body">
                <span className="text-white/60">Mon – Thu</span>
                <span className="text-white/80">8:30am – 6:00pm</span>
                <span className="text-white/60">Friday</span>
                <span className="text-white/80">8:30am – 4:00pm</span>
                <span className="text-white/60">Weekend</span>
                <span className="text-white/40">Closed</span>
              </div>
            </div>
          </div>
        </div>

        <div className="section-divider mt-10 mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/30 font-body">
          <p>© {new Date().getFullYear()} The Garage Clydebank Ltd. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white/60 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white/60 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

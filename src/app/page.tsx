"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import RegLookup from "@/components/RegLookup";
import ReviewsStrip from "@/components/ReviewsStrip";

const services = [
  {
    icon: "🔧",
    title: "MOT Testing",
    desc: "Class 4 & 7 MOTs. Fast, thorough inspections with honest advice.",
    href: "/mot",
    price: "From £45",
  },
  {
    icon: "⚙️",
    title: "Car Servicing",
    desc: "Interim, full and major services to keep your car in top condition.",
    href: "/servicing",
    price: "From £99",
  },
  {
    icon: "🔩",
    title: "Car Repairs",
    desc: "Brakes, clutch, gearbox, welding, diagnostics and more.",
    href: "/repairs",
    price: "Quote on request",
  },
  {
    icon: "🛞",
    title: "Tyres",
    desc: "Wide range of tyres for all makes and models, fitted same day.",
    href: "/tyres",
    price: "Quote on request",
  },
];

const stats = [
  { value: "25+", label: "Years Experience" },
  { value: "4.8★", label: "Customer Rating" },
  { value: "2", label: "Clydebank Locations" },
  { value: "48", label: "Verified Reviews" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      {/* ── HERO ── */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        {/* BG image with parallax */}
        <motion.div className="absolute inset-0 z-0" style={{ y: heroY }}>
          <Image
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1920&q=80"
            alt="Garage workshop"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent" />
        </motion.div>

        {/* Red accent line */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-red z-10" />

        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16"
          style={{ opacity: heroOpacity }}
        >
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-8 h-0.5 bg-brand-yellow" />
              <span className="font-heading text-brand-yellow text-xs tracking-[0.3em] uppercase">
                Clydebank&apos;s MOT Centre
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-white leading-none mb-4"
              style={{ fontSize: "clamp(3rem, 9vw, 7rem)" }}
            >
              THE GARAGE
              <span className="block text-gradient">CLYDEBANK</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-body text-white/70 text-lg leading-relaxed mb-8 max-w-lg"
            >
              Repairs, servicing & MOT centres you can trust. Honest work at fair prices — for domestic cars and commercial fleets alike.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 mb-12"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-heading font-500 tracking-wider uppercase px-8 py-4 text-sm transition-all duration-200 hover:shadow-lg hover:shadow-brand-red/30"
              >
                Book Now
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <a
                href="tel:01419526761"
                className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-brand-yellow text-white hover:text-brand-yellow font-heading font-500 tracking-wider uppercase px-8 py-4 text-sm transition-all duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.93 11a19.79 19.79 0 01-3.07-8.67A2 2 0 012.83 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.16 6.16l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
                0141 952 6761
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {stats.map((s) => (
                <div key={s.label} className="border-l border-brand-red pl-3">
                  <p className="font-display text-brand-yellow text-2xl leading-none">{s.value}</p>
                  <p className="font-body text-white/40 text-xs mt-1">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="flex flex-col items-center gap-2"
          >
            <span className="font-heading text-white/30 text-[10px] tracking-[0.2em] uppercase">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-brand-yellow/60 to-transparent" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── REG LOOKUP ── */}
      <section className="bg-brand-red py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            <div className="text-center lg:text-left flex-shrink-0">
              <p className="font-heading text-white/70 text-xs tracking-[0.3em] uppercase mb-1">Quick Quote</p>
              <h2 className="font-display text-white text-3xl lg:text-4xl leading-none">
                CHECK YOUR MOT PRICE
              </h2>
            </div>
            <div className="flex-1 w-full">
              <RegLookup />
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-20 lg:py-28 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 lg:mb-16"
          >
            <p className="font-heading text-brand-yellow text-xs tracking-[0.3em] uppercase mb-3">What We Do</p>
            <h2 className="font-display text-white leading-none" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
              OUR SERVICES
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <Link
                  href={s.href}
                  className="group block bg-brand-gray-dark border border-white/5 hover:border-brand-red p-6 lg:p-8 h-full transition-all duration-300 hover:shadow-lg hover:shadow-brand-red/10 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="text-3xl mb-4 block">{s.icon}</span>
                  <h3 className="font-heading font-600 text-white text-lg tracking-wide uppercase mb-2 group-hover:text-brand-yellow transition-colors">
                    {s.title}
                  </h3>
                  <p className="font-body text-white/50 text-sm leading-relaxed mb-4">{s.desc}</p>
                  <p className="font-heading text-brand-yellow text-sm tracking-wide">{s.price}</p>
                  <div className="flex items-center gap-2 mt-4 text-white/30 group-hover:text-brand-yellow transition-colors text-xs font-heading tracking-wider uppercase">
                    Learn more
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DOMESTIC & COMMERCIAL ── */}
      <section className="py-20 lg:py-28 bg-brand-gray-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="font-heading text-brand-yellow text-xs tracking-[0.3em] uppercase mb-3">Two Centres</p>
            <h2 className="font-display text-white leading-none" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
              DOMESTIC & COMMERCIAL
            </h2>
            <p className="font-body text-white/50 mt-4 max-w-xl mx-auto">
              We operate two dedicated centres in Clydebank — one for domestic vehicles and one for commercial vans and fleets.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Domestic */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative overflow-hidden group"
            >
              <div className="relative h-64 lg:h-80">
                <Image
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80"
                  alt="Domestic car service"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/50 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="font-heading text-brand-yellow text-xs tracking-[0.3em] uppercase mb-1">Class 4 MOT from £45</p>
                    <h3 className="font-display text-white text-3xl leading-none">DOMESTIC CENTRE</h3>
                  </div>
                </div>
                <p className="font-body text-white/60 text-sm mb-4">423 Glasgow Road, Clydebank G81 1LW</p>
                <a href="tel:01419526761" className="inline-flex items-center gap-2 text-white hover:text-brand-yellow font-heading text-sm tracking-wider uppercase transition-colors">
                  0141 952 6761
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </motion.div>

            {/* Commercial */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative overflow-hidden group"
            >
              <div className="relative h-64 lg:h-80">
                <Image
                  src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80"
                  alt="Commercial van service"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/50 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <div className="mb-3">
                  <p className="font-heading text-brand-yellow text-xs tracking-[0.3em] uppercase mb-1">Class 7 MOT from £55</p>
                  <h3 className="font-display text-white text-3xl leading-none">COMMERCIAL CENTRE</h3>
                </div>
                <p className="font-body text-white/60 text-sm mb-4">6 Caledonia Street, Clydebank G81 4EX</p>
                <a href="tel:01419524228" className="inline-flex items-center gap-2 text-white hover:text-brand-yellow font-heading text-sm tracking-wider uppercase transition-colors">
                  0141 952 4228
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <ReviewsStrip />

      {/* ── MAP ── */}
      <section className="py-20 lg:py-28 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <p className="font-heading text-brand-yellow text-xs tracking-[0.3em] uppercase mb-3">Find Us</p>
            <h2 className="font-display text-white leading-none" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
              OUR LOCATIONS
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 overflow-hidden border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2238.489849!2d-4.414!3d55.905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4888460a8a3afb7d%3A0x5ebf13b40e42bc7e!2s423%20Glasgow%20Rd%2C%20Clydebank%20G81%201LW!5e0!3m2!1sen!2suk!4v1"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The Garage Clydebank location map"
              />
            </div>
            <div className="space-y-4">
              <div className="bg-brand-gray-dark border border-white/10 p-6">
                <p className="font-heading text-brand-yellow text-xs tracking-[0.3em] uppercase mb-3">Domestic Centre</p>
                <p className="font-body text-white text-sm mb-1">423 Glasgow Road</p>
                <p className="font-body text-white/60 text-sm mb-3">Clydebank, Glasgow G81 1LW</p>
                <a href="tel:01419526761" className="font-heading text-white hover:text-brand-yellow text-sm tracking-wide transition-colors">0141 952 6761</a>
              </div>
              <div className="bg-brand-gray-dark border border-white/10 p-6">
                <p className="font-heading text-brand-yellow text-xs tracking-[0.3em] uppercase mb-3">Commercial Centre</p>
                <p className="font-body text-white text-sm mb-1">6 Caledonia Street</p>
                <p className="font-body text-white/60 text-sm mb-3">Clydebank, Glasgow G81 4EX</p>
                <a href="tel:01419524228" className="font-heading text-white hover:text-brand-yellow text-sm tracking-wide transition-colors">0141 952 4228</a>
              </div>
              <div className="bg-brand-gray-dark border border-white/10 p-6">
                <p className="font-heading text-brand-yellow text-xs tracking-[0.3em] uppercase mb-3">Opening Hours</p>
                <div className="space-y-1.5 text-sm font-body">
                  <div className="flex justify-between">
                    <span className="text-white/60">Mon – Thu</span>
                    <span className="text-white">8:30am – 6pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Friday</span>
                    <span className="text-white">8:30am – 4pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Weekend</span>
                    <span className="text-white/40">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="relative py-20 overflow-hidden bg-brand-red">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1920&q=80"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-white leading-none mb-4" style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}>
              READY TO BOOK?
            </h2>
            <p className="font-body text-white/80 text-lg mb-8 max-w-lg mx-auto">
              Book online anytime, 24/7 — no payment needed until the work is done.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-brand-red hover:bg-brand-yellow font-heading font-600 tracking-wider uppercase px-10 py-4 text-sm transition-all duration-200 hover:shadow-xl">
                Book Online
              </Link>
              <a href="tel:01419526761" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-brand-red font-heading font-600 tracking-wider uppercase px-10 py-4 text-sm transition-all duration-200">
                Call Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

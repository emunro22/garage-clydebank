"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const values = [
  {
    icon: "🔍",
    title: "Honest & Transparent",
    desc: "We tell you exactly what your vehicle needs, with no unnecessary upselling or hidden charges.",
  },
  {
    icon: "🏆",
    title: "Quality Workmanship",
    desc: "Our experienced technicians take pride in every job, big or small, to the highest standard.",
  },
  {
    icon: "💬",
    title: "Great Communication",
    desc: "You'll always know what's happening with your vehicle and why — no jargon, just clear advice.",
  },
  {
    icon: "💰",
    title: "Fair Pricing",
    desc: "Competitive rates for exceptional work. You only pay after the job is done — no deposits ever.",
  },
];

const services = [
  "MOT Testing (Class 4 & 7)",
  "Vehicle Servicing",
  "Brakes & Clutch",
  "Gearbox Repairs",
  "Engine Replacements",
  "Welding & Bodywork",
  "Wheel Alignment",
  "Diagnostic Checks",
  "DPF Cleaning",
  "Timing Belt & Water Pump",
  "Tyre Fitting",
  "Breakdown Recovery",
  "Courtesy Vehicles",
  "Fleet Packages",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function AboutClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-20 min-h-[50vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1625047509248-ec889cbff17f?auto=format&fit=crop&w=1920&q=80"
            alt="The Garage Clydebank team"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/85 to-brand-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent" />
        </div>
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-red z-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.p
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="font-heading text-brand-yellow text-xs tracking-[0.3em] uppercase mb-3"
          >
            Who We Are
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-white leading-none"
            style={{ fontSize: "clamp(3rem, 8vw, 6.5rem)" }}
          >
            ABOUT US
          </motion.h1>
        </div>
      </section>

      {/* About content */}
      <section className="py-16 lg:py-24 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="space-y-6">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <p className="font-heading text-brand-yellow text-xs tracking-[0.3em] uppercase mb-4">Our Story</p>
                <h2 className="font-display text-white leading-none mb-6" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
                  CLYDEBANK&apos;S TRUSTED GARAGE
                </h2>
                <div className="space-y-4 font-body text-white/60 leading-relaxed">
                  <p>
                    At The Garage Clydebank, we pride ourselves on delivering high-quality car servicing and repairs with integrity and friendliness. Based in Clydebank, Glasgow, our experienced team is dedicated to keeping your vehicle in top condition.
                  </p>
                  <p>
                    Whether it&apos;s a major service or just a simple oil change, we cater for all your vehicle repair and maintenance needs. We have the expertise to deal with all vehicle and repair types — from everyday family cars to commercial vans and fleets.
                  </p>
                  <p>
                    We believe in hard, honest work. Our friendly team is committed to providing transparent and reliable services, ensuring you always leave our garage feeling confident and satisfied.
                  </p>
                </div>
              </motion.div>

              {/* Rating */}
              <motion.div
                variants={fadeUp}
                custom={1}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex items-center gap-6 py-6 border-t border-b border-white/10"
              >
                <div className="text-center">
                  <p className="font-display text-brand-yellow text-5xl leading-none">4.8</p>
                  <div className="flex gap-0.5 justify-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3.5 h-3.5 text-brand-yellow" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                  <p className="font-body text-white/40 text-xs mt-1">48 Reviews</p>
                </div>
                <div className="h-12 w-px bg-white/10" />
                <p className="font-body text-white/60 text-sm italic leading-relaxed">
                  &ldquo;Absolutely brilliant! Gave me the most amazing price. Wee car&apos;s minted!&rdquo;
                  <span className="block text-white/30 not-italic mt-1">— Craig, Clydebank</span>
                </p>
              </motion.div>
            </div>

            {/* Right: values + services list */}
            <div className="space-y-8">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <p className="font-heading text-brand-yellow text-xs tracking-[0.3em] uppercase mb-6">Our Values</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {values.map((v, i) => (
                    <motion.div
                      key={v.title}
                      custom={i}
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                      className="bg-brand-gray-dark border border-white/10 p-5"
                    >
                      <span className="text-2xl mb-3 block">{v.icon}</span>
                      <h3 className="font-heading text-white font-500 tracking-wide text-sm uppercase mb-2">{v.title}</h3>
                      <p className="font-body text-white/50 text-sm leading-relaxed">{v.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                custom={2}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="bg-brand-gray-dark border border-white/10 p-6"
              >
                <p className="font-heading text-brand-yellow text-xs tracking-[0.3em] uppercase mb-4 pb-3 border-b border-white/10">
                  All Our Services
                </p>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                  {services.map((s) => (
                    <li key={s} className="flex items-center gap-2 text-white/60 text-sm font-body">
                      <span className="w-1 h-1 rounded-full bg-brand-red flex-shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 lg:py-20 bg-brand-gray-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="font-heading text-brand-yellow text-xs tracking-[0.3em] uppercase mb-3">Where to Find Us</p>
            <h2 className="font-display text-white leading-none" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
              TWO CENTRES IN CLYDEBANK
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              { name: "Domestic Centre", address: "423 Glasgow Road, Clydebank G81 1LW", phone: "0141 952 6761", tag: "Class 4 MOTs from £45" },
              { name: "Commercial Centre", address: "6 Caledonia Street, Clydebank G81 4EX", phone: "0141 952 4228", tag: "Class 7 MOTs from £55" },
            ].map((loc, i) => (
              <motion.div
                key={loc.name}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="bg-brand-black border border-white/10 p-6"
              >
                <p className="font-heading text-brand-yellow text-xs tracking-[0.3em] uppercase mb-1">{loc.tag}</p>
                <h3 className="font-heading text-white font-600 tracking-wide mb-3">{loc.name}</h3>
                <p className="font-body text-white/60 text-sm mb-1">{loc.address}</p>
                <a href={`tel:${loc.phone.replace(/\s/g, "")}`} className="font-heading text-white hover:text-brand-yellow text-sm transition-colors">
                  {loc.phone}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-red text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-display text-white text-4xl lg:text-5xl leading-none mb-4">READY TO BOOK?</h2>
          <p className="font-body text-white/80 mb-8">No pre-payment needed. Pay only after the work is done.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center bg-white text-brand-red hover:bg-brand-yellow font-heading font-600 tracking-wider uppercase px-8 py-3 text-sm transition-colors">
              Book Online
            </Link>
            <a href="tel:01419526761" className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-brand-red font-heading font-600 tracking-wider uppercase px-8 py-3 text-sm transition-all">
              Call Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

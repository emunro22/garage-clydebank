"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import RegLookup from "@/components/RegLookup";

type ServiceItem = {
  title: string;
  desc: string;
};

type ServicePageProps = {
  title: string;
  subtitle: string;
  heroImage: string;
  heroAlt: string;
  intro: string;
  rating?: boolean;
  showRegLookup?: boolean;
  sections: {
    heading: string;
    body: string;
    items?: ServiceItem[];
  }[];
  benefits?: string[];
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function ServicePageLayout({
  title,
  subtitle,
  heroImage,
  heroAlt,
  intro,
  rating = true,
  showRegLookup = false,
  sections,
  benefits,
}: ServicePageProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-20 min-h-[55vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image src={heroImage} alt={heroAlt} fill className="object-cover object-center" priority />
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
            {subtitle}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-white leading-none"
            style={{ fontSize: "clamp(3rem, 8vw, 6.5rem)" }}
          >
            {title}
          </motion.h1>

          {rating && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-3 mt-6"
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-brand-yellow" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <span className="font-body text-white/60 text-sm">4.8/5.0 · 48 customer reviews</span>
            </motion.div>
          )}
        </div>
      </section>

      {/* Reg lookup banner for MOT page */}
      {showRegLookup && (
        <section className="bg-brand-red py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-14">
              <div className="flex-shrink-0 text-center lg:text-left">
                <p className="font-heading text-white/70 text-xs tracking-[0.3em] uppercase mb-1">Quick Quote</p>
                <h2 className="font-display text-white text-3xl lg:text-4xl leading-none">ENTER YOUR REG</h2>
              </div>
              <div className="flex-1 w-full">
                <RegLookup />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Main content */}
      <section className="py-16 lg:py-24 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Left: main content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Intro */}
              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="font-body text-white/70 text-lg leading-relaxed"
              >
                {intro}
              </motion.p>

              {/* Sections */}
              {sections.map((sec, i) => (
                <motion.div
                  key={sec.heading}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <h2 className="font-heading font-600 text-white text-xl lg:text-2xl tracking-wide">
                    {sec.heading}
                  </h2>
                  <div className="w-12 h-0.5 bg-brand-red" />
                  <p className="font-body text-white/60 leading-relaxed">{sec.body}</p>
                  {sec.items && (
                    <ul className="space-y-3 mt-4">
                      {sec.items.map((item) => (
                        <li key={item.title} className="flex gap-4 items-start">
                          <span className="w-5 h-5 bg-brand-red flex-shrink-0 mt-0.5 flex items-center justify-center">
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                              <polyline points="20 6 9 17 4 12"/>
                            </svg>
                          </span>
                          <div>
                            <span className="font-heading text-white font-500 tracking-wide">{item.title}:</span>{" "}
                            <span className="font-body text-white/60 text-sm">{item.desc}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}

              {/* Benefits */}
              {benefits && (
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="bg-brand-gray-dark border border-white/10 p-6 lg:p-8"
                >
                  <h3 className="font-heading font-600 text-white text-lg tracking-wide mb-4">Key Benefits</h3>
                  <ul className="space-y-2">
                    {benefits.map((b) => (
                      <li key={b} className="flex items-center gap-3 text-white/60 text-sm font-body">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>

            {/* Right: sidebar */}
            <div className="space-y-6">
              {/* Book CTA */}
              <div className="bg-brand-red p-6 lg:p-8">
                <h3 className="font-display text-white text-2xl leading-none mb-2">BOOK TODAY</h3>
                <p className="font-body text-white/80 text-sm mb-5">No deposit needed. Pay after the work&apos;s done.</p>
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 bg-white text-brand-red hover:bg-brand-yellow font-heading font-600 tracking-wider uppercase py-3 text-sm transition-colors w-full mb-3"
                >
                  Book Online
                </Link>
                <a
                  href="tel:01419526761"
                  className="flex items-center justify-center gap-2 border border-white/40 text-white hover:border-white font-heading text-sm tracking-wider uppercase py-3 transition-colors w-full"
                >
                  Call 0141 952 6761
                </a>
              </div>

              {/* Opening hours */}
              <div className="bg-brand-gray-dark border border-white/10 p-6">
                <h4 className="font-heading text-white font-500 tracking-wider uppercase text-xs mb-4 pb-2 border-b border-white/10">Opening Hours</h4>
                <div className="space-y-2 text-sm font-body">
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

              {/* Contact */}
              <div className="bg-brand-gray-dark border border-white/10 p-6 space-y-3">
                <h4 className="font-heading text-white font-500 tracking-wider uppercase text-xs pb-2 border-b border-white/10">Contact Us</h4>
                <div className="space-y-2 text-sm font-body text-white/60">
                  <p>Domestic: <a href="tel:01419526761" className="text-white hover:text-brand-yellow transition-colors">0141 952 6761</a></p>
                  <p>Commercial: <a href="tel:01419524228" className="text-white hover:text-brand-yellow transition-colors">0141 952 4228</a></p>
                  <p>
                    <a href="mailto:repairs@thegarageclydebank.co.uk" className="text-white hover:text-brand-yellow transition-colors break-all">
                      repairs@thegarageclydebank.co.uk
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

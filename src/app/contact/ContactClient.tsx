"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  reg: string;
  service: string;
  centre: string;
  message: string;
};

const initialForm: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  reg: "",
  service: "",
  centre: "",
  message: "",
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function ContactClient() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Wire up to Nodemailer/Resend via an API route
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-20 min-h-[40vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1920&q=80"
            alt="Contact The Garage Clydebank"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/85 to-brand-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent" />
        </div>
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-red z-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.p
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-heading text-brand-yellow text-xs tracking-[0.3em] uppercase mb-3"
          >
            Get In Touch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="font-display text-white leading-none"
            style={{ fontSize: "clamp(3rem, 8vw, 6.5rem)" }}
          >
            CONTACT US
          </motion.h1>
        </div>
      </section>

      {/* Main */}
      <section className="py-16 lg:py-24 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-20 bg-brand-gray-dark border border-white/10"
                >
                  <div className="w-16 h-16 bg-brand-red flex items-center justify-center mb-6">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <h2 className="font-display text-white text-4xl leading-none mb-3">BOOKING REQUEST SENT</h2>
                  <p className="font-body text-white/60 max-w-sm">
                    Thanks! A member of our team will be in touch shortly to confirm your appointment.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm(initialForm); }}
                    className="mt-8 font-heading text-sm tracking-wider uppercase text-brand-yellow hover:text-white border border-brand-yellow hover:border-white px-6 py-2.5 transition-colors"
                  >
                    New Booking
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    animate="show"
                    className="font-body text-white/60 mb-8"
                  >
                    Fill in the form below and we&apos;ll get back to you to confirm your booking. No payment required until the work is complete.
                  </motion.p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { label: "First Name", name: "firstName", required: true },
                      { label: "Last Name", name: "lastName", required: true },
                    ].map((f, i) => (
                      <motion.div key={f.name} custom={i} variants={fadeUp} initial="hidden" animate="show">
                        <label className="block font-heading text-white/50 text-xs tracking-[0.2em] uppercase mb-2">
                          {f.label} {f.required && <span className="text-brand-red">*</span>}
                        </label>
                        <input
                          type="text"
                          name={f.name}
                          value={form[f.name as keyof FormData]}
                          onChange={handleChange}
                          required={f.required}
                          className="w-full bg-brand-gray-dark border border-white/10 focus:border-brand-yellow outline-none text-white font-body text-sm px-4 py-3 transition-colors placeholder:text-white/20"
                        />
                      </motion.div>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <motion.div custom={2} variants={fadeUp} initial="hidden" animate="show">
                      <label className="block font-heading text-white/50 text-xs tracking-[0.2em] uppercase mb-2">
                        Email <span className="text-brand-red">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-brand-gray-dark border border-white/10 focus:border-brand-yellow outline-none text-white font-body text-sm px-4 py-3 transition-colors"
                      />
                    </motion.div>
                    <motion.div custom={3} variants={fadeUp} initial="hidden" animate="show">
                      <label className="block font-heading text-white/50 text-xs tracking-[0.2em] uppercase mb-2">Telephone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full bg-brand-gray-dark border border-white/10 focus:border-brand-yellow outline-none text-white font-body text-sm px-4 py-3 transition-colors"
                      />
                    </motion.div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <motion.div custom={4} variants={fadeUp} initial="hidden" animate="show">
                      <label className="block font-heading text-white/50 text-xs tracking-[0.2em] uppercase mb-2">
                        Vehicle Registration
                      </label>
                      <input
                        type="text"
                        name="reg"
                        value={form.reg}
                        onChange={(e) => setForm((p) => ({ ...p, reg: e.target.value.toUpperCase() }))}
                        placeholder="AB12 CDE"
                        className="w-full bg-brand-gray-dark border border-white/10 focus:border-brand-yellow outline-none text-white font-display text-lg tracking-[0.2em] px-4 py-3 transition-colors placeholder:text-white/20 placeholder:font-body placeholder:text-sm placeholder:tracking-normal"
                      />
                    </motion.div>
                    <motion.div custom={5} variants={fadeUp} initial="hidden" animate="show">
                      <label className="block font-heading text-white/50 text-xs tracking-[0.2em] uppercase mb-2">Service Required</label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="w-full bg-brand-gray-dark border border-white/10 focus:border-brand-yellow outline-none text-white font-body text-sm px-4 py-3 transition-colors appearance-none cursor-pointer"
                      >
                        <option value="">Select a service…</option>
                        <option value="mot">MOT Test</option>
                        <option value="interim-service">Interim Service</option>
                        <option value="full-service">Full Service</option>
                        <option value="major-service">Major Service</option>
                        <option value="repairs">Repairs</option>
                        <option value="tyres">Tyres</option>
                        <option value="diagnostics">Diagnostics</option>
                        <option value="other">Other</option>
                      </select>
                    </motion.div>
                  </div>

                  <motion.div custom={6} variants={fadeUp} initial="hidden" animate="show">
                    <label className="block font-heading text-white/50 text-xs tracking-[0.2em] uppercase mb-2">Preferred Centre</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        { value: "domestic", label: "Domestic Centre", sublabel: "423 Glasgow Road · Cars" },
                        { value: "commercial", label: "Commercial Centre", sublabel: "6 Caledonia Street · Vans" },
                      ].map((c) => (
                        <label
                          key={c.value}
                          className={`flex items-center gap-3 border p-4 cursor-pointer transition-colors ${
                            form.centre === c.value
                              ? "border-brand-yellow bg-brand-yellow/5"
                              : "border-white/10 bg-brand-gray-dark hover:border-white/30"
                          }`}
                        >
                          <input
                            type="radio"
                            name="centre"
                            value={c.value}
                            checked={form.centre === c.value}
                            onChange={handleChange}
                            className="accent-brand-yellow"
                          />
                          <div>
                            <p className="font-heading text-white text-sm tracking-wide">{c.label}</p>
                            <p className="font-body text-white/40 text-xs">{c.sublabel}</p>
                          </div>
                        </label>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div custom={7} variants={fadeUp} initial="hidden" animate="show">
                    <label className="block font-heading text-white/50 text-xs tracking-[0.2em] uppercase mb-2">Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Describe your vehicle issue or any other details…"
                      className="w-full bg-brand-gray-dark border border-white/10 focus:border-brand-yellow outline-none text-white font-body text-sm px-4 py-3 transition-colors resize-none placeholder:text-white/20"
                    />
                  </motion.div>

                  <motion.button
                    custom={8}
                    variants={fadeUp}
                    initial="hidden"
                    animate="show"
                    type="submit"
                    disabled={submitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-brand-red hover:bg-brand-red-dark disabled:opacity-60 disabled:cursor-not-allowed text-white font-heading font-500 tracking-wider uppercase px-10 py-4 text-sm transition-all duration-200 hover:shadow-lg hover:shadow-brand-red/30"
                  >
                    {submitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                        />
                        Sending…
                      </>
                    ) : (
                      <>
                        Send Booking Request
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="bg-brand-gray-dark border border-white/10 p-6"
              >
                <h3 className="font-heading text-white font-500 tracking-wider uppercase text-sm mb-5 pb-3 border-b border-white/10">
                  Domestic Centre
                </h3>
                <div className="space-y-3 text-sm font-body">
                  <p className="text-white/60">423 Glasgow Road<br />Clydebank, Glasgow G81 1LW</p>
                  <a href="tel:01419526761" className="block text-white hover:text-brand-yellow transition-colors">0141 952 6761</a>
                  <a href="mailto:repairs@thegarageclydebank.co.uk" className="block text-white/60 hover:text-brand-yellow transition-colors break-all text-xs">
                    repairs@thegarageclydebank.co.uk
                  </a>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                custom={1}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="bg-brand-gray-dark border border-white/10 p-6"
              >
                <h3 className="font-heading text-white font-500 tracking-wider uppercase text-sm mb-5 pb-3 border-b border-white/10">
                  Commercial Centre
                </h3>
                <div className="space-y-3 text-sm font-body">
                  <p className="text-white/60">6 Caledonia Street<br />Clydebank, Glasgow G81 4EX</p>
                  <a href="tel:01419524228" className="block text-white hover:text-brand-yellow transition-colors">0141 952 4228</a>
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
                <h3 className="font-heading text-white font-500 tracking-wider uppercase text-sm mb-4 pb-3 border-b border-white/10">
                  Opening Hours
                </h3>
                <div className="space-y-2 text-sm font-body">
                  <div className="flex justify-between">
                    <span className="text-white/60">Mon – Thu</span>
                    <span className="text-white">8:30am – 6:00pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Friday</span>
                    <span className="text-white">8:30am – 4:00pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Weekend</span>
                    <span className="text-white/40">Closed</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                custom={3}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="overflow-hidden border border-white/10"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2238.489849!2d-4.414!3d55.905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4888460a8a3afb7d%3A0x5ebf13b40e42bc7e!2s423%20Glasgow%20Rd%2C%20Clydebank%20G81%201LW!5e0!3m2!1sen!2suk!4v1"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="The Garage Clydebank map"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

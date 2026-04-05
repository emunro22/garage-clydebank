"use client";

import { motion } from "framer-motion";

const reviews = [
  {
    name: "Victor",
    date: "31/03/26",
    rating: 5,
    text: "Great service and fast. Very friendly staff!",
    tag: "Would recommend",
  },
  {
    name: "SC",
    date: "03/05/24",
    rating: 5,
    text: "Great experience — my car wasn't able to be completely fixed, but they made big improvements to it. They gave their time and expertise, but wouldn't take a penny from me, which speaks volumes.",
    tag: "Great",
  },
  {
    name: "Craig",
    date: "03/05/24",
    rating: 5,
    text: "Absolutely brilliant! Fitted new handbrake cable, put it through an MOT at short notice, and gave me the most amazing price. Wee car's minted! Got the car back sorted same day!",
    tag: "Brilliant",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className={`w-3.5 h-3.5 ${i < count ? "text-brand-yellow" : "text-white/20"}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsStrip() {
  return (
    <section className="py-20 lg:py-28 bg-brand-gray-mid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12"
        >
          <div>
            <p className="font-heading text-brand-yellow text-xs tracking-[0.3em] uppercase mb-3">What Our Customers Say</p>
            <h2 className="font-display text-white leading-none" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
              REVIEWS
            </h2>
          </div>
          <div className="flex items-center gap-4 bg-brand-red px-6 py-4">
            <div className="text-center">
              <p className="font-display text-white text-4xl leading-none">4.8</p>
              <Stars count={5} />
              <p className="font-body text-white/60 text-xs mt-1">48 reviews</p>
            </div>
          </div>
        </motion.div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name + r.date}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-brand-black border border-white/10 p-6 relative"
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-brand-red" />
              <div className="flex items-center justify-between mb-4">
                <Stars count={r.rating} />
                <span className="font-heading text-brand-yellow text-xs tracking-wider uppercase bg-brand-yellow/10 px-2 py-1">
                  {r.tag}
                </span>
              </div>
              <p className="font-body text-white/70 text-sm leading-relaxed mb-4 flex-1">
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <p className="font-heading text-white text-sm tracking-wide">{r.name}</p>
                <p className="font-body text-white/30 text-xs">{r.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/mot", label: "MOT" },
  { href: "/servicing", label: "Servicing" },
  { href: "/repairs", label: "Repairs" },
  { href: "/tyres", label: "Tyres" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when menu open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-brand-black/95 backdrop-blur-md shadow-lg shadow-black/50"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 flex-shrink-0">
              <div className="relative w-12 h-12 lg:w-14 lg:h-14">
                <Image
                  src="/logo.png"
                  alt="The Garage Clydebank"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="hidden sm:block">
                <p className="font-heading font-700 text-white text-sm leading-tight tracking-wide">
                  THE GARAGE
                </p>
                <p className="font-heading text-brand-yellow text-xs tracking-[0.15em] uppercase">
                  Clydebank
                </p>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-2 font-heading text-sm font-500 tracking-wide uppercase transition-colors duration-200 group ${
                    pathname === link.href
                      ? "text-brand-yellow"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-3 right-3 h-0.5 bg-brand-yellow transform transition-transform duration-200 origin-left ${
                      pathname === link.href
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              ))}
            </nav>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-3">
              <a
                href="tel:01419526761"
                className="hidden md:flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-heading font-500 text-sm tracking-wide uppercase px-4 py-2 transition-colors duration-200"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.93 11a19.79 19.79 0 01-3.07-8.67A2 2 0 012.83 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.16 6.16l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
                0141 952 6761
              </a>

              {/* Hamburger */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
                aria-label="Toggle menu"
                aria-expanded={isOpen}
              >
                <motion.span
                  animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="block w-6 h-0.5 bg-white origin-center"
                />
                <motion.span
                  animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                  className="block w-6 h-0.5 bg-white"
                />
                <motion.span
                  animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="block w-6 h-0.5 bg-white origin-center"
                />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/60 lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.nav
              key="menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-40 w-72 bg-brand-gray-dark lg:hidden flex flex-col"
            >
              {/* Menu header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10">
                    <Image src="/logo.png" alt="The Garage Clydebank" fill className="object-contain" />
                  </div>
                  <div>
                    <p className="font-heading text-white text-sm font-600 tracking-wide">THE GARAGE</p>
                    <p className="font-heading text-brand-yellow text-xs tracking-[0.15em]">CLYDEBANK</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 flex items-center justify-center text-white/60 hover:text-white"
                  aria-label="Close menu"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6L6 18M6 6l12 12"/>
                  </svg>
                </button>
              </div>

              {/* Nav links */}
              <div className="flex-1 overflow-y-auto py-4">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center gap-4 px-6 py-4 font-heading text-base tracking-wider uppercase border-b border-white/5 transition-colors ${
                        pathname === link.href
                          ? "text-brand-yellow bg-white/5"
                          : "text-white/80 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {pathname === link.href && (
                        <span className="w-1 h-4 bg-brand-red" />
                      )}
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Contact info */}
              <div className="p-6 border-t border-white/10 space-y-3">
                <a href="tel:01419526761" className="flex items-center gap-3 text-white/70 hover:text-brand-yellow transition-colors text-sm font-body">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.93 11a19.79 19.79 0 01-3.07-8.67A2 2 0 012.83 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.16 6.16l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                  0141 952 6761
                </a>
                <a href="mailto:repairs@thegarageclydebank.co.uk" className="flex items-center gap-3 text-white/70 hover:text-brand-yellow transition-colors text-sm font-body break-all">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                  </svg>
                  repairs@thegarageclydebank.co.uk
                </a>
                <a
                  href="/contact"
                  className="block w-full text-center bg-brand-red hover:bg-brand-red-dark text-white font-heading font-500 tracking-wider uppercase py-3 mt-4 transition-colors"
                >
                  Book Now
                </a>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

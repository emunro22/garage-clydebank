"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type VehicleData = {
  make: string;
  model: string;
  colour: string;
  fuelType: string;
  yearOfManufacture: number;
  motStatus: string;
  motExpiryDate?: string;
  taxStatus: string;
};

export default function RegLookup() {
  const [reg, setReg] = useState("");
  const [loading, setLoading] = useState(false);
  const [vehicle, setVehicle] = useState<VehicleData | null>(null);
  const [error, setError] = useState("");

  const formatReg = (value: string) => {
    return value.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 7);
  };

  const handleLookup = async () => {
    const cleanReg = reg.replace(/\s/g, "");

    if (cleanReg.length < 2) {
      setError("Please enter a valid registration");
      return;
    }

    setLoading(true);
    setError("");
    setVehicle(null);

    try {
      const res = await fetch("/api/vehicle", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ registrationNumber: cleanReg }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Lookup failed");
      }

      setVehicle(data);
    } catch (err) {
      setError("Unable to fetch vehicle data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const getMotPrice = (fuelType: string) => {
    return "£54.85";
  };

  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row gap-2">
        <div className="relative flex-1">
          <div className="absolute left-0 top-0 bottom-0 flex items-center bg-brand-yellow px-2 rounded-sm">
            <span className="text-brand-black font-display text-lg leading-none">
              GB
            </span>
          </div>

          <input
            type="text"
            value={reg}
            onChange={(e) => {
              setReg(formatReg(e.target.value));
              setError("");
              setVehicle(null);
            }}
            onKeyDown={(e) => e.key === "Enter" && handleLookup()}
            placeholder="AB12 CDE"
            maxLength={8}
            className="w-full pl-14 pr-4 py-4 bg-white text-brand-black font-display text-2xl tracking-[0.2em] placeholder:text-gray-300 placeholder:font-body placeholder:text-base placeholder:tracking-normal focus:outline-none focus:ring-2 focus:ring-white/50"
          />
        </div>

        <button
          onClick={handleLookup}
          disabled={loading || reg.length < 2}
          className="bg-brand-black hover:bg-brand-gray-dark disabled:opacity-50 disabled:cursor-not-allowed text-white font-heading tracking-wider uppercase px-8 py-4 text-sm transition-all duration-200 flex items-center justify-center gap-2 min-w-[140px]"
        >
          {loading ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
              className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
            />
          ) : (
            <>
              Get Quote
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </>
          )}
        </button>
      </div>

      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mt-2 text-white/80 text-sm font-body"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {vehicle && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-4 bg-brand-black/40 border border-white/20 p-4 sm:p-5"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="font-display text-white text-2xl leading-none mb-1">
                  {vehicle.make} {vehicle.model}
                </p>

                <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm font-body text-white/60">
                  <span>{vehicle.yearOfManufacture}</span>
                  <span>{vehicle.colour}</span>
                  <span>{vehicle.fuelType}</span>

                  <span
                    className={`font-500 ${
                      vehicle.motStatus === "Valid"
                        ? "text-green-400"
                        : "text-brand-red"
                    }`}
                  >
                    MOT: {vehicle.motStatus}
                    {vehicle.motExpiryDate &&
                      ` until ${new Date(
                        vehicle.motExpiryDate
                      ).toLocaleDateString("en-GB")}`}
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:items-end gap-2">
                <p className="font-heading text-white/40 text-xs tracking-wider uppercase">
                  MOT Price
                </p>

                <p className="font-display text-brand-yellow text-3xl leading-none">
                  {getMotPrice(vehicle.fuelType)}
                </p>

                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-heading text-xs tracking-wider uppercase px-5 py-2.5 transition-colors"
                >
                  Book MOT
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Car Servicing in Clydebank",
  description: "Interim, full and major car servicing in Clydebank, Glasgow. Keep your vehicle running smoothly. Book online 24/7.",
};

export default function ServicingPage() {
  return (
    <ServicePageLayout
      title="CAR SERVICING"
      subtitle="Servicing in Clydebank"
      heroImage="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1920&q=80"
      heroAlt="Car servicing workshop"
      intro="Regular car servicing is crucial to maintaining the performance, efficiency, and longevity of your vehicle. We offer comprehensive car servicing in Clydebank to ensure your vehicle remains in optimal condition. Trust our experienced team to provide top-quality care tailored to your car's needs."
      sections={[
        {
          heading: "Interim Service",
          body: "Ideal for high-mileage drivers — recommended every 6 months or 6,000 miles, whichever comes first.",
          items: [
            { title: "Oil Change", desc: "Fresh oil to ensure your engine runs smoothly and efficiently." },
            { title: "Fluid Top-Ups", desc: "Checking and topping up brake fluid, power steering, and coolant." },
            { title: "Tyre Inspection", desc: "Visual check of condition, tread depth, and tyre pressure." },
            { title: "Safety Check", desc: "Inspection of tyres, lights, and wipers for optimal safety." },
          ],
        },
        {
          heading: "Full Service",
          body: "Recommended every 12 months or 12,000 miles. Encompasses all aspects of the interim service with additional checks.",
          items: [
            { title: "Air Filter Replacement", desc: "Improves air quality and engine breathing." },
            { title: "Windscreen & Mirrors", desc: "Inspection of windscreen, mirrors, number plates, and seatbelts." },
            { title: "Exhaust Inspection", desc: "Checking for leaks, damage, or corrosion throughout the system." },
            { title: "Complete Brake Inspection", desc: "Pads, discs, calipers, pipes, hoses, and handbrake operation." },
          ],
        },
        {
          heading: "Major Service",
          body: "The most comprehensive option — recommended every 24 months or 24,000 miles. Includes everything in the full service plus:",
          items: [
            { title: "Air Conditioning Check", desc: "Ensuring your A/C system is functioning correctly." },
            { title: "Spark Plugs & Radiator Cap", desc: "Assessment and replacement where required." },
            { title: "Clutch Inspection", desc: "A thorough check of the clutch operation." },
          ],
        },
      ]}
      benefits={[
        "Enhanced safety — brakes and suspension in proper order",
        "Improved fuel efficiency and engine performance",
        "Extends the lifespan of your vehicle",
        "Maintains your car's resale value",
        "No pre-payment required",
        "Covers both domestic and commercial vehicles",
      ]}
    />
  );
}

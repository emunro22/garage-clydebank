import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Car Repairs in Clydebank",
  description: "Expert car repairs in Clydebank, Glasgow. Brakes, clutch, gearbox, welding, diagnostics & more. Book online 24/7.",
};

export default function RepairsPage() {
  return (
    <ServicePageLayout
      title="CAR REPAIRS"
      subtitle="Repairs in Clydebank"
      heroImage="https://images.unsplash.com/photo-1517524285303-d6fc683dddf8?auto=format&fit=crop&w=1920&q=80"
      heroAlt="Mechanic carrying out car repairs"
      intro="When your vehicle needs a repair, trust our expert team to get it done to the highest standards. We offer a comprehensive range of car repairs in Clydebank, ensuring your vehicle is back on the road safely and efficiently — for both Class 4 and Class 7 vehicles."
      sections={[
        {
          heading: "Repairs We Offer",
          body: "We specialise in a wide array of repairs to meet all your needs:",
          items: [
            { title: "Brake Repair", desc: "Inspect, repair and replace pads, discs, and components for reliable braking." },
            { title: "Clutch Repair", desc: "Diagnose and fix slipping, sticking, or worn clutches." },
            { title: "Gearbox Repairs", desc: "Manual and automatic transmission diagnosis, repair or replacement." },
            { title: "Welding", desc: "Structural welding to maintain your vehicle's integrity and safety." },
            { title: "Engine Replacements", desc: "Professional engine sourcing and installation for optimal performance." },
            { title: "Wheel Alignment", desc: "Precise alignment to improve handling and reduce tyre wear." },
            { title: "Diagnostic Checks", desc: "Advanced tools to quickly identify electronic system faults." },
            { title: "DPF Cleaning", desc: "Professional diesel particulate filter cleaning to restore performance." },
            { title: "Timing Belt & Water Pump", desc: "Efficient replacement to keep your engine running correctly." },
          ],
        },
        {
          heading: "Commercial & Fleet Repairs",
          body: "We carry out most repairs on Class 7 vans and LCVs up to 3.5 tonnes at our Clydebank commercial centre. Fleet packages are available — contact us to discuss your requirements.",
        },
        {
          heading: "Book Your Repair Online",
          body: "Don't let car trouble disrupt your day. Book your repair online 24/7 through our contact form, or give us a call. No payment is required until the work is complete.",
        },
      ]}
      benefits={[
        "All makes and models covered",
        "Class 4 and Class 7 vehicles",
        "Advanced diagnostic equipment",
        "Transparent pricing, no hidden costs",
        "Fleet packages available",
        "Courtesy vehicles available",
      ]}
    />
  );
}

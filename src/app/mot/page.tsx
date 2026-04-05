import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "MOT Testing in Clydebank",
  description: "Class 4 & 7 MOT testing in Clydebank, Glasgow. Thorough inspections, honest advice, fast turnaround. Book online 24/7.",
};

export default function MOTPage() {
  return (
    <ServicePageLayout
      title="MOT TESTING"
      subtitle="MOT in Clydebank"
      heroImage="https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?auto=format&fit=crop&w=1920&q=80"
      heroAlt="MOT testing workshop"
      intro="When it comes to ensuring the safety and roadworthiness of your vehicle, an MOT test is essential. We provide thorough and reliable inspections to keep your car compliant with all legal requirements. If you are looking for a professional and trustworthy MOT in Clydebank for your car or van, look no further."
      showRegLookup={true}
      sections={[
        {
          heading: "What is an MOT?",
          body: "The Ministry of Transport (MOT) test is an annual examination required for vehicles over three years old in the UK. This test ensures that your vehicle meets the minimum safety and environmental standards set by the government. During an MOT, various components are checked, including brakes, lights, steering, suspension, tyres, exhaust, emissions and more.",
        },
        {
          heading: "What to Expect During Your MOT",
          body: "When you bring your vehicle to us, you can expect a thorough and professional service:",
          items: [
            { title: "Detailed Inspection", desc: "A thorough check of all required safety and emissions components." },
            { title: "Expert Advice", desc: "Honest and straightforward advice on any issues found, with no hidden charges." },
            { title: "Prompt Service", desc: "Efficient turnaround to get you back on the road as quickly as possible." },
            { title: "MOT Certificate", desc: "Once your vehicle passes, you receive an official MOT certificate." },
          ],
        },
        {
          heading: "Class 7 MOT Testing — Commercial Vans",
          body: "Your van is subject to the same MOT rules as any other vehicle, but you can't afford downtime. At our commercial centre on Caledonia Street, we offer high-quality, efficient MOT testing for all Class 7 vehicles up to 3.5 tonnes in the Glasgow area — getting you back on the road with minimal fuss.",
        },
        {
          heading: "Book Your MOT in Clydebank Today",
          body: "Don't wait until the last minute. Ensure your vehicle is safe and roadworthy by scheduling your MOT with us today. Just enter your reg plate above — no payment needed until after the work is complete.",
        },
      ]}
      benefits={[
        "Class 4 MOTs from £45",
        "Class 7 (van) MOTs from £55",
        "Fast turnaround, often same day",
        "No pre-payment required",
        "Honest advice with no hidden charges",
        "Serving all of the Glasgow area",
      ]}
    />
  );
}

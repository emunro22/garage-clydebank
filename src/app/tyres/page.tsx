import type { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Tyres in Clydebank",
  description: "Tyre fitting, repair and replacement in Clydebank, Glasgow. Wide range of tyres for all makes and models. Book online 24/7.",
};

export default function TyresPage() {
  return (
    <ServicePageLayout
      title="TYRES"
      subtitle="Tyre Fitting in Clydebank"
      heroImage="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1920&q=80"
      heroAlt="Tyre fitting and replacement"
      intro="Having the right tyres is essential for safety, performance, and fuel efficiency on Glasgow's roads. We offer a comprehensive range of tyres in Clydebank to suit all makes and models, with competitive pricing and expert fitting from our experienced team."
      sections={[
        {
          heading: "Why Choose Us for Tyres?",
          body: "We're committed to providing exceptional tyre services at every visit:",
          items: [
            { title: "Wide Selection", desc: "Extensive range from leading brands to affordable options for every budget." },
            { title: "Expert Technicians", desc: "Our team handles all tyre needs with precision and care." },
            { title: "Competitive Pricing", desc: "High-quality tyres and services without breaking the bank." },
            { title: "Customer-Focused", desc: "Friendly, approachable team always ready to help you choose the right tyres." },
          ],
        },
        {
          heading: "The Importance of Good Tyres",
          body: "Your tyres are the only contact point between your car and the road — the right ones matter:",
          items: [
            { title: "Safety", desc: "Good tyres provide better grip and handling, reducing accident risk." },
            { title: "Performance", desc: "The right tyres enhance ride quality and vehicle handling." },
            { title: "Fuel Efficiency", desc: "Well-maintained tyres reduce rolling resistance and save you money." },
            { title: "Longevity", desc: "Quality tyres that are properly maintained last significantly longer." },
          ],
        },
        {
          heading: "Book Your Tyre Fitting in Clydebank",
          body: "Contact us today to book an appointment or to find out what tyres we can source for your vehicle. Our team is always happy to advise on the right tyre for your car and budget.",
        },
      ]}
      benefits={[
        "All makes and models catered for",
        "Budget, mid-range and premium brands available",
        "Same-day fitting where possible",
        "Tyre pressure checks included",
        "Wheel balancing available",
        "Serving Glasgow and surrounding areas",
      ]}
    />
  );
}

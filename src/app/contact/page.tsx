import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact & Book",
  description: "Book your MOT, service or repair at The Garage Clydebank. No deposit needed. Contact us online or call 0141 952 6761.",
};

export default function ContactPage() {
  return <ContactClient />;
}

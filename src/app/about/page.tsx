import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us",
  description: "The Garage Clydebank — honest, expert vehicle care for domestic and commercial customers in Glasgow.",
};

export default function AboutPage() {
  return <AboutClient />;
}

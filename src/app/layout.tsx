import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "The Garage Clydebank | MOT, Servicing & Repairs",
    template: "%s | The Garage Clydebank",
  },
  description:
    "Expert MOT testing, car servicing, and repairs in Clydebank, Glasgow. Class 4 & 7 MOTs. Domestic and commercial vehicles. Book online 24/7.",
  keywords: ["MOT Clydebank", "car service Clydebank", "garage Glasgow", "car repairs Clydebank"],
  icons: {
    icon: "/favicon.ico", // 👈 add this line
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

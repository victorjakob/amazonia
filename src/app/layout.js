import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import Script from "next/script";

const bodySans = Inter({
  variable: "--font-body-sans",
  subsets: ["latin"],
  display: "swap",
});

const displaySerif = Cormorant_Garamond({
  variable: "--font-display-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata = {
  title: "Amazonia Incense | Sacred Tools & Scents from the Amazon",
  description:
    "Discover sacred incense, ritual tools, and natural products ethically sourced from the Amazon rainforest. Support indigenous communities and sustainable practices.",
  keywords: [
    "Amazonia",
    "Incense",
    "Sacred tools",
    "Rainforest",
    "Ethical sourcing",
    "Indigenous crafts",
    "Natural products",
    "Sustainable",
    "Spiritual",
    "Rituals",
    "Handmade",
  ],
  authors: [{ name: "Amazonia Team", url: "https://amazonia.com" }],
  creator: "Amazonia Team",
  openGraph: {
    title: "Amazonia Incense | Sacred Tools & Scents from the Amazon",
    description:
      "Sacred incense and ritual tools from the Amazon rainforest. Ethically sourced, supporting indigenous communities.",
    url: "https://amazonia.com",
    siteName: "Amazonia Incense",
    images: [
      {
        url: "https://res.cloudinary.com/dy8q4hf0k/image/upload/v1752587628/amazon1_iq64cf.jpg",
        width: 712,
        height: 512,
        alt: "Amazonia Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amazonia Incense | Sacred Tools & Scents from the Amazon",
    description:
      "Sacred incense and ritual tools from the Amazon rainforest. Ethically sourced, supporting indigenous communities.",
    site: "@amazonia",
    creator: "@amazonia",
    images: [
      "https://res.cloudinary.com/dy8q4hf0k/image/upload/v1752587628/amazon1_iq64cf.jpg",
    ],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport = {
  themeColor: "#0d1f17",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${bodySans.variable} ${displaySerif.variable} min-h-screen flex flex-col bg-paper text-ink antialiased`}
      >
        <Topbar />
        <main className="flex-1">{children}</main>
        <Footer />
        {/* Cloudflare Web Analytics: cookieless page views, read by the Victory Studio dashboard */}
        <Script
          id="cf-web-analytics"
          src="https://static.cloudflareinsights.com/beacon.min.js"
          strategy="afterInteractive"
          data-cf-beacon='{"token": "bb13d3b6221b4df0b653ee32e0ea87b1"}'
        />
      </body>
    </html>
  );
}

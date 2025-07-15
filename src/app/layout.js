import { Open_Sans } from "next/font/google";
import "./globals.css";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} antialiased`}>
        <Topbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

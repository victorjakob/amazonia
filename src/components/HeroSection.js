"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="w-full py-24 min-h-screen px-6 text-center relative bg-[url('https://res.cloudinary.com/dy8q4hf0k/image/upload/v1752587630/amazon3_unoyak.jpg')] bg-cover bg-center">
      {/* Full black overlay */}
      <div
        className="absolute inset-0 bg-black/30 z-0"
        aria-hidden="true"
      ></div>
      <motion.div
        className="max-w-3xl mx-auto p-6 rounded-sm shadow-lg relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-4xl font-medium mb-4 text-white">
          Sacred Scents from the Heart of the Amazon
        </h1>
        <p className="text-lg mb-6 max-w-sm mx-auto text-white">
          Ethically sourced incense, sage, and rituals crafted by rainforest
          communities.
        </p>
        <Link
          href="/store"
          className="inline-block px-6 py-3 rounded-sm bg-emerald-800 text-white font-semibold hover:bg-green-900 transition"
        >
          Explore the Store
        </Link>
      </motion.div>
    </section>
  );
}

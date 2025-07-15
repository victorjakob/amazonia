"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <motion.section
      className="py-16 px-6 bg-gradient-to-r from-emerald-900 to-emerald-800 text-white text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className="text-3xl font-bold mb-4">
        Bring Ritual into Your Daily Life
      </h2>
      <p className="text-lg mb-6">
        Start your journey with scents, stories, and in sacred connection.
      </p>
      <Link
        href="/store"
        className="inline-block bg-white text-green-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
      >
        Browse Collection
      </Link>
    </motion.section>
  );
}

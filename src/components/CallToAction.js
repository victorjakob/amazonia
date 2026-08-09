"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <section className="relative overflow-hidden bg-forest-900">
      {/* Warm light bleeding in from the edges */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_120%,rgba(176,118,58,0.28),transparent_62%)]"
      />

      <motion.div
        className="relative u-shell py-24 text-center lg:py-32"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <span aria-hidden="true" className="mx-auto mb-8 u-rule" />

        <h2 className="font-display mx-auto max-w-3xl text-[clamp(2rem,4.2vw,3.5rem)] font-light leading-[1.12] text-paper">
          Bring Ritual into Your Daily Life
        </h2>

        <p className="mx-auto mt-6 max-w-lg text-base font-light leading-relaxed text-paper/75 sm:text-lg">
          Start your journey with scents, stories, and in sacred connection.
        </p>

        <div className="mt-11">
          <Link href="/store" className="btn btn-light">
            Browse Collection
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

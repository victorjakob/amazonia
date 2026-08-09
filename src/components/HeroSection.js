"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const HERO_IMAGE =
  "https://res.cloudinary.com/dy8q4hf0k/image/upload/v1752587630/amazon3_unoyak.jpg";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden">
      {/* Artwork */}
      <div
        aria-hidden="true"
        className="absolute inset-0 scale-[1.04] bg-cover bg-center"
        style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
      />

      {/* Layered scrim: keeps type legible without flattening the photograph */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-forest-900/75 via-forest-900/35 to-forest-900/85"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,rgba(13,31,23,0.55)_100%)]"
      />

      <div className="relative z-10 u-shell pt-32 pb-28 text-center">
        <motion.span
          aria-hidden="true"
          className="mx-auto mb-10 u-rule"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        />

        <motion.h1
          className="font-display mx-auto max-w-4xl text-[clamp(2.6rem,6.5vw,5.25rem)] font-light leading-[1.06] text-paper"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
        >
          Sacred Scents from the Heart of the Amazon
        </motion.h1>

        <motion.p
          className="mx-auto mt-7 max-w-md text-base font-light leading-relaxed text-paper/85 sm:text-lg"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
        >
          Ethically sourced incense, sage, and rituals crafted by rainforest
          communities.
        </motion.p>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.45 }}
        >
          <Link href="/store" className="btn btn-light">
            Explore the Store
          </Link>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.span
        aria-hidden="true"
        className="absolute bottom-10 left-1/2 h-14 w-px -translate-x-1/2 overflow-hidden bg-paper/25"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
      >
        <motion.span
          className="block h-5 w-px bg-paper/90"
          animate={{ y: [-20, 56] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.span>
    </section>
  );
}

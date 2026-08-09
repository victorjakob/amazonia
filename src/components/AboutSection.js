"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="bg-sand py-24 lg:py-32">
      <div className="u-shell">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
          {/* Photograph, offset by a hairline frame */}
          <motion.div
            className="relative lg:col-span-7"
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <span
              aria-hidden="true"
              className="absolute -left-4 -top-4 hidden h-full w-full border border-amber-soft/45 lg:block"
            />
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dy8q4hf0k/image/upload/v1752588044/amazon-people_m6nuzd.jpg"
                alt="Indigenous people"
                fill
                sizes="(min-width: 1024px) 58vw, 92vw"
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Copy */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          >
            <span aria-hidden="true" className="u-rule mb-8" />
            <h2 className="font-display text-[clamp(1.9rem,3.4vw,3rem)] font-light leading-[1.15] text-forest-800">
              Honoring the Forest &amp; Its People
            </h2>
            <p className="mt-7 text-[1.0625rem] leading-[1.85] text-ink-soft">
              Our products come directly from indigenous artisans and forest
              families who harvest and craft in harmony with nature. Every
              purchase supports cultural preservation, sustainable living, and
              reforestation efforts in the Amazon rainforest.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

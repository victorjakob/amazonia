"use client";

import { motion } from "framer-motion";
import ProductTile, { tileVariants } from "./ProductTile";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14 } },
};

export default function FeaturedProducts({ products }) {
  return (
    <section className="u-shell py-24 lg:py-32">
      <header className="flex flex-col items-center text-center">
        <span aria-hidden="true" className="u-rule mb-8" />
        <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-light leading-tight text-forest-800">
          Featured Offerings
        </h2>
      </header>

      <motion.div
        className="mt-16 grid grid-cols-1 gap-x-10 gap-y-16 sm:grid-cols-2 md:grid-cols-3"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {products.map((product) => (
          <motion.div key={product.id} variants={tileVariants}>
            <ProductTile product={product} animate="none" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

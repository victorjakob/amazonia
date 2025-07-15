"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function FeaturedProducts({ products }) {
  return (
    <section className="max-w-6xl mx-auto py-20 px-4">
      <h2 className="text-3xl font-bold text-center mb-10">
        Featured Offerings
      </h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="bg-white dark:bg-green-900 rounded-lg shadow-md p-5 flex flex-col items-center group border border-green-100 dark:border-green-900"
            variants={item}
          >
            <div className="relative h-48 w-full mb-4 rounded-lg overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain rounded-md transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-green-900 dark:text-green-100 text-center">
              {product.name}
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 text-center line-clamp-3">
              {product.description}
            </p>
            <div className="text-green-800 dark:text-green-300 font-bold text-lg mb-3">
              ${(product.price / 100).toFixed(2)}
            </div>
            <Link
              href={`/store/${product.id}`}
              className="inline-block text-green-700 dark:text-green-300 hover:underline font-medium"
            >
              Shop Now →
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProductCard({ product, index }) {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-4 sm:p-6 flex flex-col items-center group border border-green-100 max-w-sm w-full mx-auto"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.1 }}
    >
      <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <h2 className="text-lg font-semibold text-center text-green-900 mb-1">
        {product.name}
      </h2>
      <p className="text-sm text-gray-600 text-center mb-4 line-clamp-3">
        {product.description}
      </p>
      <div className="text-green-800 font-bold text-lg mb-3">
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }).format(product.price)}
      </div>
      <Link
        href={`/store/${product.id}`}
        className="inline-block px-5 py-2 rounded-sm bg-emerald-700 hover:bg-emerald-800 text-white font-medium text-sm transition-all w-full text-center"
      >
        View Product
      </Link>
    </motion.div>
  );
}

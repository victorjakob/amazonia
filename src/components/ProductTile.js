"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { formatPrice } from "@/utils/format";

export const tileVariants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: "easeOut" } },
};

/**
 * The single product presentation used by both the homepage selection
 * and the full store grid, so the two never drift apart visually.
 */
export default function ProductTile({
  product,
  index = 0,
  animate = "inView",
  cta = "Shop Now →",
}) {
  const motionProps =
    animate === "none"
      ? {}
      : {
          initial: { opacity: 0, y: 32 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.25 },
          transition: {
            duration: 0.75,
            ease: "easeOut",
            delay: Math.min(index, 5) * 0.09,
          },
        };

  return (
    <motion.article {...motionProps} className="group">
      <Link href={`/store/${product.id}`} className="block">
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-sand">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
            className="object-contain p-8 transition-transform duration-[900ms] ease-out group-hover:scale-[1.07]"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 border border-transparent transition-colors duration-500 group-hover:border-line-strong"
          />
        </div>

        <div className="pt-6 text-center">
          <h3 className="font-display text-2xl leading-snug text-forest-800">
            {product.name}
          </h3>

          <p className="mt-2.5 mx-auto max-w-xs text-sm leading-relaxed text-muted line-clamp-2">
            {product.description}
          </p>

          <p className="mt-4 text-[0.9375rem] tracking-wide text-ink">
            {formatPrice(product.price)}
          </p>

          <span className="mt-5 inline-block u-link u-tracked text-forest-700">
            {cta}
          </span>
        </div>
      </Link>
    </motion.article>
  );
}

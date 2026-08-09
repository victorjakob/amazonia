"use client";

import ProductTile from "@/components/ProductTile";

/**
 * Thin wrapper kept so the store route owns its own component name while
 * the presentation itself stays shared with the homepage selection.
 */
export default function ProductCard({ product, index }) {
  return <ProductTile product={product} index={index} cta="View Product" />;
}

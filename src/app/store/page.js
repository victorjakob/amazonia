export const revalidate = 60;

import { supabase } from "@/utils/supabaseClient";
import ProductCard from "./components/ProductCard";

async function getProducts() {
  const { data, error } = await supabase
    .from("amazonia_products")
    .select("id, name, price, image, description")
    .order("id", { ascending: true })
    .limit(20);
  if (error) throw error;
  return data;
}

export default async function StorePage() {
  const products = await getProducts();

  return (
    <div className="u-shell py-20 lg:py-28">
      <header className="flex flex-col items-center text-center">
        <span aria-hidden="true" className="u-rule mb-8" />
        <h1 className="font-display text-[clamp(2.25rem,5vw,4rem)] font-light leading-tight text-forest-800">
          Our Products
        </h1>
      </header>

      <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-16 sm:grid-cols-2 md:grid-cols-3">
        {products.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>
    </div>
  );
}

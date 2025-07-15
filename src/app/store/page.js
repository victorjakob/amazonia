import Image from "next/image";
import Link from "next/link";
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
    <div className="max-w-7xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-light mb-12 text-center text-black  tracking-wider">
        Our Products
      </h1>
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {products.map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>
    </div>
  );
}

import { supabase } from "@/utils/supabaseClient";
import Image from "next/image";
import OrderForm from "./OrderForm";

export default async function ProductDetail({ params }) {
  const { productId } = params;
  const { data: product, error } = await supabase
    .from("amazonia_products")
    .select("id, name, price, image, description, full_description")
    .eq("id", productId)
    .single();

  if (error || !product) {
    return (
      <main className="max-w-3xl mx-auto p-10 text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">
          Product Not Found
        </h1>
        <p className="text-gray-600">
          Sorry, we couldn&apos;t find the product you&apos;re looking for.
        </p>
      </main>
    );
  }

  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Product Image */}
        <div className="w-full border border-gray-200 rounded-xl p-4 shadow-sm">
          <div className="relative w-full aspect-square rounded-lg overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="w-full">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            {product.name}
          </h1>

          <p className="text-2xl font-semibold text-green-800 mb-6">
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            }).format(product.price)}
          </p>

          <div className="border-t border-gray-200 pt-4 mb-6">
            <p className="text-base text-gray-700 whitespace-pre-line">
              {product.description}
            </p>
          </div>

          {product.full_description && (
            <div className="border-t border-gray-200 pt-4 mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                More Details
              </h2>
              <p className="text-base text-gray-700 whitespace-pre-line">
                {product.full_description}
              </p>
            </div>
          )}

          {/* Order Form */}
          <div className="border-t border-gray-200 pt-6">
            <OrderForm productName={product.name} />
          </div>
        </div>
      </div>
    </main>
  );
}

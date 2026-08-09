import Link from "next/link";
import Image from "next/image";
import { supabase } from "@/utils/supabaseClient";
import { formatPrice } from "@/utils/format";
import OrderForm from "./OrderForm";

export const revalidate = 60;

export default async function ProductDetail({ params }) {
  const { productId } = await params;

  const { data: product, error } = await supabase
    .from("amazonia_products")
    .select("id, name, price, image, description, full_description")
    .eq("id", productId)
    .single();

  if (error || !product) {
    return (
      <div className="u-shell-narrow py-32 text-center">
        <span aria-hidden="true" className="mx-auto mb-8 u-rule" />
        <h1 className="font-display text-4xl font-light text-forest-800">
          Product Not Found
        </h1>
        <p className="mt-5 text-ink-soft">
          Sorry, we couldn&apos;t find the product you&apos;re looking for.
        </p>
        <div className="mt-10">
          <Link href="/store" className="btn btn-outline">
            Our Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="u-shell py-14 lg:py-20">
      <nav aria-label="Breadcrumb" className="mb-10">
        <Link
          href="/store"
          className="u-link u-tracked text-muted hover:text-forest-700 transition-colors duration-300"
        >
          ← Our Products
        </Link>
      </nav>

      <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Imagery */}
        <div className="lg:sticky lg:top-32 lg:self-start">
          <div className="relative aspect-square w-full overflow-hidden bg-sand">
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              sizes="(min-width: 1024px) 46vw, 92vw"
              className="object-contain p-10"
            />
          </div>
        </div>

        {/* Detail */}
        <div>
          <h1 className="font-display text-[clamp(2.1rem,4vw,3.25rem)] font-light leading-[1.12] text-forest-800">
            {product.name}
          </h1>

          <p className="mt-5 text-xl tracking-wide text-ink">
            {formatPrice(product.price)}
          </p>

          <div className="mt-9 border-t border-line pt-8">
            <p className="whitespace-pre-line text-[1.0625rem] leading-[1.85] text-ink-soft">
              {product.description}
            </p>
          </div>

          {product.full_description && (
            <div className="mt-9 border-t border-line pt-8">
              <h2 className="u-tracked text-muted">More Details</h2>
              <p className="mt-4 whitespace-pre-line text-[1.0625rem] leading-[1.85] text-ink-soft">
                {product.full_description}
              </p>
            </div>
          )}

          <div className="mt-9 border-t border-line pt-8">
            <OrderForm productName={product.name} />
          </div>
        </div>
      </div>
    </div>
  );
}

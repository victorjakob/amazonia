import HeroSection from "@/components/HeroSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import AboutSection from "@/components/AboutSection";
import CallToAction from "@/components/CallToAction";
import { supabase } from "@/utils/supabaseClient";

async function getFeaturedProducts() {
  const { data, error } = await supabase
    .from("amazonia_products")
    .select("id, name, price, image, description")
    .order("id", { ascending: true })
    .limit(3);
  if (error) throw error;
  return data;
}

export default async function HomePage() {
  const featured = await getFeaturedProducts();
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-green-50 to-white dark:from-black dark:to-green-950 text-gray-900 dark:text-green-100">
      <HeroSection />
      <FeaturedProducts products={featured} />
      <AboutSection />
      <CallToAction />
    </div>
  );
}

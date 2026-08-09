import HeroSection from "@/components/HeroSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import AboutSection from "@/components/AboutSection";
import CallToAction from "@/components/CallToAction";
import { supabase } from "@/utils/supabaseClient";

export const revalidate = 60;

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
    <>
      <HeroSection />
      <FeaturedProducts products={featured} />
      <AboutSection />
      <CallToAction />
    </>
  );
}

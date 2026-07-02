export const metadata = {
  title: "Home",
  description:
    "Welcome to VivaLaViv Boutique — curated fashion with timeless elegance.",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import AboutPreview from "@/components/about-preview";
import FeaturedCollections from "@/components/featured-collections";
import Reviews from "@/components/reviews";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <AboutPreview />
      <FeaturedCollections />
      <Reviews />
      <Cta />
    </>
  );
}

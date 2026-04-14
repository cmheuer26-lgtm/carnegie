import HeroSlideshow from "@/components/HeroSlideshow";
import WelcomeSection from "@/components/WelcomeSection";
import ThreeImageCards from "@/components/ThreeImageCards";
import DrinksSection from "@/components/DrinksSection";
import ParallaxCTA from "@/components/ParallaxCTA";
import AboutSection from "@/components/AboutSection";
import LocationSection from "@/components/LocationSection";
import GallerySection from "@/components/GallerySection";
import ReviewsSection from "@/components/ReviewsSection";

export default function HomePage() {
  return (
    <>
      <HeroSlideshow />
      <WelcomeSection />
      <ThreeImageCards />
      <DrinksSection />
      <ParallaxCTA />
      <AboutSection />
      <GallerySection />
      <ReviewsSection />
      <LocationSection />
    </>
  );
}

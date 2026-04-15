import HeroSlideshow from "@/components/HeroSlideshow";
import WelcomeSection from "@/components/WelcomeSection";
import ThreeImageCards from "@/components/ThreeImageCards";
import AboutSection from "@/components/AboutSection";
import ParallaxCTA from "@/components/ParallaxCTA";
import DrinksSection from "@/components/DrinksSection";
import GallerySection from "@/components/GallerySection";
import ReviewsSection from "@/components/ReviewsSection";
import LocationSection from "@/components/LocationSection";

export default function HomePage() {
  return (
    <>
      <HeroSlideshow />
      <WelcomeSection />
      <ThreeImageCards />
      <AboutSection />
      <ParallaxCTA />
      <DrinksSection />
      <GallerySection />
      <ReviewsSection />
      <LocationSection />
    </>
  );
}

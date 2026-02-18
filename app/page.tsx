import HeroSection from "./components/section/HeroSection";
import ContactSection from "./components/section/ContactSection";

import MenuSection from "./components/section/MenuSection";
import AboutSection from "./components/section/AboutSection";
import ReviewSection from "./components/section/ReviewSection";

  export default function Home() {
    return (
      <div className="h-full">
        <HeroSection />
        <AboutSection />
        <MenuSection />
        <ReviewSection />
        <ContactSection />
      </div>
    );
  }

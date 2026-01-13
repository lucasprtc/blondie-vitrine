  import Image from "next/image";
  import HeroSection from "./components/section/HeroSection";
  import ContactSection from "./components/section/ContactSection";

  import MenuSection from "./components/section/MenuSection";
import AboutSection from "./components/section/AboutSection";

  export default function Home() {
    return (
      <div className="h-fullw">
        <HeroSection />
        <AboutSection />
        <MenuSection />
        <ContactSection />
      </div>
    );
  }

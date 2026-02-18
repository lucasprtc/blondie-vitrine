"use client";

import { useRef, useEffect, use } from "react"; 
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import ImageWithOverlay from "../ui/Image";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=200%", 
            pin: true,
            scrub: 0.5,
            snap: {
            snapTo: [0, 0.5, 1],
            duration: { min: 0.2, max: 0.8 },
            delay: 0.1,
            ease: "power1.inOut"
          }
        }
      });

      // On part d'une opacité 0 ET d'une hauteur 0 (display none/hidden alternative)
      // pour que la ligne 2 et 3 ne prennent pas de place au début.
      tl.from(".line-2", { 
        opacity: 0,
        height: 0, 
        duration: 0.8,
        ease: "power2.inOut" 
      })
      .from(".line-3", { 
        opacity: 0,
        height: 0,
        duration: 0.8,
        ease: "power2.inOut" 
      });
        
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="h-screen grid-layout w-full flex items-center justify-center overflow-hidden"
    >
      {/* Ce div est le coeur du centrage automatique grâce à flex-col et justify-center */}
      <div className="col-span-10 col-start-2 flex flex-col justify-center items-center text-center">
        
        <p className="line-1 text-xl md:text-3xl font-serif leading-tight tracking-[-0.03em]">
          We make fresh, thin-crust <span className="text-[#800000]">pizzas</span> with quality
        </p>

        <p className="line-2 text-xl md:text-3xl font-serif leading-tight tracking-[-0.03em]">
          <span className="text-[#74614F]">ingredients</span> and a friendly spirit — the kind of
        </p>

        <p className="line-3 text-xl md:text-3xl font-serif leading-tight tracking-[-0.03em]">
          place where good food brings <span className="text-[#5B7C3D]">people together</span>.
        </p>

      </div>
    </section>
  );
};

export default AboutSection;
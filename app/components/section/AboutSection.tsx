"use client";

import { useRef, useEffect } from "react"; 
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

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

      // --- Animation STEP 2 ---
      tl.from(".line-2", { 
        opacity: 0,
        height: 0, 
        duration: 0.8,
        ease: "power2.inOut" 
      })
      .from(".food-left", { x: -300, opacity: 0, rotation: -45, duration: 1 }, "<")
      .from(".food-right", { x: 300, opacity: 0, rotation: 45, duration: 1 }, "<")
      .from(".food-top", { y: -300, opacity: 0, duration: 1 }, "<")
      .from(".food-bottom", { y: 300, opacity: 0, duration: 1 }, "<")

      // --- Animation STEP 3 ---
      .from(".line-3", { 
        opacity: 0,
        height: 0,
        duration: 0.8,
        ease: "power2.inOut" 
      })
      .from(".step3-img", {
        opacity: 0,
        scale: 0.9,
        duration: 0.6,
        stagger: 0.2,
        ease: "power1.out"
      }, "<");
        
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="h-screen w-full flex items-center justify-center overflow-hidden relative"
    >
      {/* step 1 images */}
      <img src="/picture/about-5.png" alt="" className="absolute top-[64px] left-[59vw] w-[12vw]" />
      <img src="/picture/about-2.png" alt="" className="absolute bottom-[48px] left-[25vw] w-[12vw]" />

      {/* step 2 images */}
      <img src="/food/pepperoni.png" alt="" className="food-left absolute top-[16vh] -left-[3vw] w-[176px] h-auto z-10" />
      <img src="/food/origano.png" alt="" className="food-top absolute -top-[16vh] left-[35vw] w-[180px] h-auto rotate-180" />
      <img src="/food/pepper.png" alt="" className="food-right absolute top-[24vh] -right-[6vw] w-[200px] h-auto" />
      <img src="/food/mushroom.png" alt="" className="food-bottom absolute -bottom-[12vh] right-[18vw] w-[220px] h-auto rotate-45" />
      <img src="/food/basil.png" alt="" className="food-left absolute bottom-[1vh] -left-[3vw] w-[230px] h-auto" />

      {/* step 3 images avec classe .step3-img */}
      <img src="/picture/about-1.png" alt="" className="step3-img absolute -top-[10px] left-[32px] w-[12vw]" />
      <img src="/picture/about-7.png" alt="" className="step3-img absolute -bottom-[10px] right-[32px] w-[12vw]" />

      <div className="z-10 flex flex-col justify-center items-center text-center relative px-4">
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
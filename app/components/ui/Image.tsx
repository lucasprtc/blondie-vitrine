import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Position = "TL" | "TR" | "BL" | "BR";
type Topping = "basil" | "mushroom" | "origano" | "pepper" | "pepperoni";

interface ImageWithOverlayProps {
  src: string;
  position?: Position;
  topping?: Topping;
  alt?: string;
  className?: string;
}

const ImageWithOverlay: React.FC<ImageWithOverlayProps> = ({
  src,
  position = "TL",
  topping = "basil",
  alt = "Image",
  className = "",
}) => {
  const toppingRef = useRef<HTMLImageElement>(null);

  const toppingImages: Record<Topping, string> = {
    basil: "/food/basil.png",
    mushroom: "/food/mushroom.png",
    origano: "/food/origano.png",
    pepper: "/food/pepper.png",
    pepperoni: "/food/pepperoni.png",
  };

  const positionClasses: Record<Position, string> = {
    TL: "-translate-x-1/2 -translate-y-1/2 top-0 left-0",
    TR: "translate-x-1/2 -translate-y-1/2 top-0 right-0",
    BL: "-translate-x-1/2 translate-y-1/2 bottom-0 left-0",
    BR: "translate-x-1/2 translate-y-1/2 bottom-0 right-0",
  };

  useEffect(() => {
    if (toppingRef.current) {
      gsap.fromTo(
        toppingRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: toppingRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <div className={`relative inline-block ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover "
      />
      <img 
        ref={toppingRef}
        src={toppingImages[topping]} 
        alt={topping} 
        className={`absolute max-w-[50px] lg:max-w-[120px] ${positionClasses[position]}`} 
      />
    </div>
  );
};

export default ImageWithOverlay;
"cli"

import AnimatedText from "./TextAnimation";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

const PizzaCard = ({ 
  image = "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300&h=300&fit=crop",
  title = "HOUSE PIE",
  ingredients = "Tomato, mozzarella, basil, parmesan.",
  smallPrice = 5,
  largePrice = 37,
  variant = "left",
  noBorder = false
}) => {
    const imageRef = useRef(null);
    const priceRef = useRef(null);

    useEffect(() => {
    if (priceRef.current) {
      gsap.fromTo(
        priceRef.current,
        {
          opacity: 0,
          y: 30
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: priceRef.current,
            start: "top 85%",
            end: "top 65%",
            once: true,
            toggleActions: "play none none reverse"
          }
        }
      );
    }
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        {
          opacity: 0,
          y: 30
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 85%",
            end: "top 65%",
            once: true,
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  }, []);

  const imageElement = (
    <img 
      ref={imageRef}
      src={image} 
      alt={title} 
      className="w-full object-cover max-w-[280px]" 
    />
  );

  return (  
    <div className={`flex flex-row items-center gap-4 py-8 ${noBorder ? '' : 'border-b border-black'}`}>
      <div className={`flex flex-col col-span-3 gap-4 lg:gap-5 w-1/2 ${variant === "left" ? 'order-2' : 'order-1'}`}>
          <AnimatedText text={title} className="">
            <h3 className="font-secondary font-medium text-2xl lg:text-3xl tracking-[-0.03em] uppercase leading-6 lg:leading-10">
              {title}
            </h3>
            <p className="text-black text-xs lg:text-lg tracking-[-0.03em] font-medium font-primary leading-4 lg:leading-7 mt-4 lg:mt-5">
              {ingredients}
            </p>
          </AnimatedText>


        <div ref={priceRef} className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <img src="/icons/slice-pizza.png" alt="icon slice pizza" className="w-6 h-6 " />
            <span className="text-md font-semibold">{largePrice}€</span>
          </div>
          <div className="flex items-center gap-1">
            <img src="/icons/entire-pizza.png" alt="icon entire pizza" className="w-6 h-6 " />
            <span className="text-md font-semibold">{smallPrice}€</span>
          </div>
        </div>
      </div>
      <div className={`w-1/2 ${variant === "left" ? 'order-1' : 'order-2'}`}>
        {imageElement}
      </div>
    </div>
  );
};


export default PizzaCard;
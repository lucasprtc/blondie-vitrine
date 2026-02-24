"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useIsMobile } from "@/app/hooks/useIsMobile";

gsap.registerPlugin(ScrollTrigger);

const ContactSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textBlackRef = useRef<HTMLDivElement>(null);
  const textWhiteRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      const updateClipPath = () => {
        if (!imageRef.current || !textWhiteRef.current) return;
        const imgRect = imageRef.current.getBoundingClientRect();
        const txtRect = textWhiteRef.current.getBoundingClientRect();

        const top = imgRect.top - txtRect.top;
        const left = imgRect.left - txtRect.left;
        const bottom = imgRect.bottom - txtRect.top;
        const right = imgRect.right - txtRect.left;

        gsap.set(textWhiteRef.current, {
          clipPath: `inset(${top}px ${txtRect.width - right}px ${txtRect.height - bottom}px ${left}px)`
        });
      };

      updateClipPath();

      if (footerRef.current) {
        gsap.from(footerRef.current.children, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "40% 50%",
            toggleActions: "play none none none",
            markers: true
          },
          y: 30,
          opacity: 0,
          duration: 1.2,
          stagger: 0.15,
          ease: "power3.out",
        });
      }

      if (isMobile) return;

      const handleMouseMove = (e: MouseEvent) => {
        const { clientX } = e;
        const { innerWidth } = window;
        const xPos = (clientX / innerWidth) - 0.5;

        gsap.to(imageRef.current, {
          x: xPos * 340,
          duration: 1.2,
          ease: "power4.out",
          onUpdate: updateClipPath
        });

        gsap.to([textBlackRef.current, textWhiteRef.current], {
          x: xPos * 220,
          duration: 1.4,
          ease: "power3.out",
          onUpdate: updateClipPath
        });
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    });

    return () => ctx.revert();
  }, []);

  const RenderText = ({ colorClass, reference }: { 
    colorClass: string, 
    reference: React.RefObject<HTMLDivElement | null> 
  }) => (
    <div 
      ref={reference}
      className={`absolute bottom-[24vh] md:bottom-auto left-[5vw] md:left-[45%] z-20 pointer-events-none select-none ${colorClass} whitespace-nowrap`}
    >
      <h2 className="text-3xl md:text-4xl font-serif leading-[0.85] uppercase tracking-tighter">
        <span className="font-primary">Find us, </span><br />
        <span className="font-primary">Grab a slice, </span><br />
        <span className="italic normal-case font-light">Enjoy the vibes.</span>
      </h2>
    </div>
  );

  return (
    <section ref={containerRef} className="relative w-full h-screen flex flex-col justify-between overflow-hidden grid-container">
      <div className="relative flex-grow flex items-center justify-center">
        <div className="relative w-full max-w-6xl h-full flex items-center md:px-10">          
          <RenderText colorClass="text-black" reference={textBlackRef} />
          <div 
            ref={imageRef} 
            className="relative w-[55%] aspect-[4/3] z-10 overflow-hidden"
          >
            <Image
              src="/picture/contact-1.png"
              alt="Restaurant"
              fill
              className="object-cover"
            />
          </div>
          <RenderText colorClass="text-white z-30" reference={textWhiteRef} />
        </div>
      </div>

      <div ref={footerRef} className="grid-layout w-full items-end pb-20 md:pb-8 z-30">
        <div className="col-span-6 md:col-span-2 col-start-1 flex flex-row justify-between md:flex-col md:justify-start">
          <p className="text-sm uppercase font-medium">Vaasankatu 8,</p>
          <p className="text-sm uppercase font-medium">00500 Helsinki</p>
        </div>
        
        <div className="col-span-6 md:col-span-4 col-start-1 md:col-start-5 flex flex-col text-sm uppercase">
          <div className="flex justify-between">
            <span>Tue-Sat</span>
            <span>11.30-22</span>
          </div>
          <div className="flex justify-between">
            <span>Sun</span>
            <span>13-19</span>
          </div>
          <div className="flex justify-between">
            <span>Mon</span>
            <span>CLOSED</span>
          </div>
        </div>

        <div className="col-span-6 flex flex-row md:flex-col justify-between md:justify-start md:col-span-2 md:col-start-11 flex flex-col text-right text-sm uppercase">
          <p>Card only</p>
          <p>No reservation</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
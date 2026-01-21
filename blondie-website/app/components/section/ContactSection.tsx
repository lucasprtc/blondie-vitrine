"use client";

import { useRef, useEffect,  useState } from "react";
import AnimatedText from "../ui/TextAnimation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";


gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const line = useRef<HTMLDivElement>(null);
  const contactSection = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);

    handleResize(); // Vérifie dès le premier rendu côté client
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
            gsap.fromTo(line.current,
            {
                scaleY: 0,
                transformOrigin: "bottom center"
            },
            {
                scaleY: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: contactSection.current,
                    start: "top center",
                    toggleActions: "play none none none"
                }
            }
        );
  }, []);

  return (
    <section ref={contactSection} className="relative grid-container grid-layout pb-20 lg:pb-[60px] pt-[60px] lg:pt-[130px]">
      {isMobile && (
        <AnimatedText className="lg:hidden col-span-6">
          <h2 className="font-secondary text-center lg:text-left text-[2.5rem] lg:text-4xl tracking-[-0.03em] font-medium leading-12">
            Find us, Grab a slice,<br /> Enjoy the vibes.
          </h2>
        </AnimatedText>
      )}
      {isMobile && ( 
        <AnimatedText className="col-span-4 col-start-2 mt-4">
          <img
              src="/picture/contact-1.png"
              alt="Contact"
              className="col-span-4 col-start-2 w-full mt-4"
          />
        </AnimatedText>       
      )}
      <div className="col-span-6 lg:col-span-5 col-start-1 flex flex-col lg:justify-between gap-2 mt-4 lg:mt-0">
        <AnimatedText>
          <h2 className="hidden lg:block font-secondary text-4xl">
            Find us, Grab a slice,<br /> Enjoy the vibes.
          </h2>
        </AnimatedText>

        <div className="flex flex-col gap-2 lg:gap-4">
          <AnimatedText>
            <div className="w-full flex justify-between items-center font-primary">
              <p className="text-sm lg:text-xl font-medium lg:leading-8">
                Vaasankatu 8,<br />00500 Helsinki
              </p>
              <button className="underline lg:text-xl underline-offset-4">Get direction</button>
            </div>
          </AnimatedText>

          <AnimatedText delay={0.1} start="top 80%">
              <div className="w-full flex justify-between items-center font-primary text-sm lg:text-xl font-medium">
                <p>Tue-Sat</p>
                <p>11.30-22</p>
              </div>
              <div className="w-full flex justify-between items-center font-primary text-sm lg:text-xl font-medium">
                <p>Sun</p>
                <p>13-19</p>
              </div>
              <div className="w-full flex justify-between items-center font-primary text-sm lg:text-xl font-medium">
                <p>Mon</p>
                <p className="uppercase">closed</p>
              </div>
          </AnimatedText>

          <AnimatedText delay={0.2} start="top 95%">
            <div className="w-full flex justify-between items-center font-primary text-sm lg:text-xl font-medium">
              <p>Card Only</p>
              <p>No reservation</p>
            </div>
          </AnimatedText>
        </div>
      </div>
      {!isMobile && <div ref={line} className="w-px bg-black h-full col-span-1 lg:col-span-1 lg:col-start-6 mx-6 lg:mx-12 self-center"></div>}
      {!isMobile && (
        <AnimatedText delay={0.2} className="col-span-6 col-start-7">          
          <img
              src="/picture/contact-1.png"
              alt="Contact"
              className="w-full"
          />
        </AnimatedText>
      )}

    </section>
  );
};

export default ContactSection;

"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Vérifie la largeur de la fenêtre côté client
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);

    handleResize(); // Vérifie dès le premier rendu côté client
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative grid-container grid-layout pb-[30px] lg:pb-[60px] pt-[60px] lg:pt-[130px]">
      {isMobile && (
        <h2 className="lg:hidden col-span-6 font-secondary text-center lg:text-left text-[2.5rem] lg:text-4xl tracking-[-0.03em] font-medium leading-12">
          Find us, Grab a slice,<br /> Enjoy the vibes.
        </h2>
      )}
      {isMobile && (        
        <img
            src="/picture/contact-1.png"
            alt="Contact"
            className="col-span-4 col-start-2 w-full mt-4"
        />
      )}
      <div className="col-span-6 lg:col-span-5 col-start-1 flex flex-col lg:justify-between gap-2 mt-4 lg:mt-0">
        <h2 className="hidden lg:block font-secondary text-4xl">
          Find us, Grab a slice,<br /> Enjoy the vibes.
        </h2>

        <div className="flex flex-col gap-2 lg:gap-4">
          <div className="w-full flex justify-between items-center font-primary">
            <p className="text-sm lg:text-xl font-medium lg:leading-8">
              Vaasankatu 8,<br />00500 Helsinki
            </p>
            <button className="underline lg:text-xl underline-offset-4">Get direction</button>
          </div>

          <div>
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
          </div>

          <div className="w-full flex justify-between items-center font-primary text-sm lg:text-xl font-medium">
            <p>Card Only</p>
            <p>No reservation</p>
          </div>
        </div>
      </div>
      {!isMobile && <div className="w-px bg-black h-full col-span-1 lg:col-span-1 lg:col-start-6 mx-6 lg:mx-12 self-center"></div>}
      {!isMobile && (
        <img
            src="/picture/contact-1.png"
            alt="Contact"
            className="col-span-6 w-full col-start-7"
        />
      )}

    </section>
  );
};

export default ContactSection;

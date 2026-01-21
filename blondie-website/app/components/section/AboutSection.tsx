"use client";

import { useRef, useEffect, use } from "react"; 
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import ImageWithOverlay from "../ui/Image";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
    const squareRef = useRef<HTMLDivElement>(null);
    const aboutSectionRef = useRef<HTMLDivElement>(null);
    const line = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const square = squareRef.current;
        const squareInfo = square?.getBoundingClientRect();

        gsap.fromTo(line.current,
            {
                scaleY: 0,
                transformOrigin: "top center"
            },
            {
                scaleY: 1,
                duration: 1.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: aboutSectionRef.current,
                    start: "top center",
                    toggleActions: "play none none none"
                }
            }
        );

       gsap.fromTo(square, 
            { 
                opacity: 0,
                y: 20
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: aboutSectionRef.current,
                    start: "top center",
                    toggleActions: "play none none none"
                }
            }
        );

        gsap.to(square, {
        scrollTrigger: {
            trigger: aboutSectionRef.current,
            start: `top+=${window.innerWidth > 1024 ? 200 : 90} center-=100`,
            end: `bottom-=${window.innerWidth > 1024 ? 200 : 90} center+=${squareInfo!.height - 100}`,
            pin: square,
            scrub: 1,
        }
    });

    return () => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
    }, []);

    return (
        <section ref={aboutSectionRef} className="relative grid-container grid-layout overflow-hidden py-6 lg:py-0">
            <div
                ref={squareRef}
                className="z-10 absolute top-[90px] lg:top-[200px] col-span-6 lg:col-start-4 p-4 w-full lg:w-fit flex flex-row items-center justify-between gap-4 lg:gap-8 bg-white rounded-[10px] shadow-2xl"
            >
                <img src="/picture/about-desc.png" alt="" className="max-w-[110px] lg:max-w-[220px] aspect-square" />
                <p className="font-secondary text-base lg:text-xl tracking-[-0.48px] leading-5 lg:leading-10">We make fresh, thin-crust pizzas with quality ingredients and a friendly spirit — the kind of place where good food brings people together.</p>
            </div>
            <div ref={line} className="absolute translate-x-1/2 h-[375px] lg:h-[800px] w-px bg-black right-1/2 mt-[140px] lg:mt-[220px]"></div>
            <div className="flex flex-row gap-4 w-full col-span-6 lg:col-span-12 lg:pt-[100px]">
                <div className="w-1/2 grid content-start grid-cols-3 lg:grid-cols-6 gap-y-6 lg:gap-y-0 gap-x-4 md:gap-x-6">
                    <div className="col-span-3 grid content-start grid-cols-3 gap-x-4 gap-y-6 md:gap-x-6 lg:gap-y-[70px] lg:pt-[200px]">
                        <ImageWithOverlay src="/picture/about-1.png" alt="Map" topping="pepper" position="TR" className="col-span-2 h-fit" />
                        <ImageWithOverlay src="/picture/about-2.png" alt="Map" topping="basil" position="TL" className="col-start-2 col-span-2 lg:col-span-3 h-fit" />
                    </div>
                    <div className="col-span-3 grid content-start grid-cols-3 gap-x-4 md:gap-x-6 gap-y-6 lg:gap-y-[100px]">
                        <ImageWithOverlay src="/picture/about-3.png" alt="Map" topping="pepperoni" position="BL" className="col-span-2 lg:col-span-3 h-fit" />
                        <ImageWithOverlay src="/picture/about-4.png" alt="Map" topping="origano" position="BL" className="col-start-2 col-span-2 h-fit" />
                    </div>
                </div>
                <div className="w-1/2 grid content-start grid-cols-3 lg:grid-cols-6 gap-y-6 lg:gap-y-0 gap-x-4 md:gap-x-6 pt-[50px]">
                    <div className="col-span-3 grid content-start grid-cols-3 gap-x-4 gap-y-6 md:gap-x-6 lg:gap-y-[100px] lg:pt-[300px]">
                        <ImageWithOverlay src="/picture/about-5.png" alt="Map" topping="origano" position="TL" className="col-span-2 col-start-2 h-fit" />
                        <ImageWithOverlay src="/picture/about-6.png" alt="Map" topping="pepper" position="TR" className="col-span-2 lg:col-span-3 h-fit" />
                    </div>
                    <div className="col-span-3 grid content-start grid-cols-3 gap-x-4 md:gap-x-6 gap-y-6 lg:gap-y-[70px]">
                        <ImageWithOverlay src="/picture/about-7.png" alt="Map" topping="pepperoni" position="TL" className="col-span-2 col-start-2 lg:col-start-1 lg:col-span-3 h-fit" />
                        <ImageWithOverlay src="/picture/about-8.png" alt="Map" topping="basil" position="BR" className="col-span-2 lg:col-start-2 h-fit" />
                    </div>
                </div>  
            </div>
            <div className="col-spa n-3 col-start-1 grid grid-cols-3 gap-4">
            </div>
        </section>
    );
}

export default AboutSection;
"use client";

import { useRef, useEffect } from "react"; 
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import ImageWithOverlay from "../ui/Image";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
    const squareRef = useRef<HTMLDivElement>(null);
    const aboutSectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
    const square = squareRef.current;
    console.log(square?.getBoundingClientRect());
    const squareInfo = square?.getBoundingClientRect();
    console.log(squareInfo?.top);

    gsap.to(square, {
    scrollTrigger: {
        trigger: aboutSectionRef.current,
        start: `top+=${window.innerWidth > 1024 ? 200 : 90} center-=100`,
        end: `bottom-=${window.innerWidth > 1024 ? 200 : 90} center+=${squareInfo!.height - 100}`,
        pin: square,
        scrub: 1,
        markers: true
    }
    });

    return () => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
    }, []);

    return (
        <section ref={aboutSectionRef} className="relative grid-container grid-layout ">
            <div
                ref={squareRef}
                className="z-10 absolute top-[90px] lg:top-[200px] col-span-6 lg:col-start-4 p-4 w-full lg:w-fit flex flex-row items-center justify-between gap-4 lg:gap-8 bg-white rounded-[10px] shadow-2xl"
            >
                <img src="/picture/about-desc.png" alt="" className="max-w-[110px] lg:max-w-[220px] aspect-square" />
                <p className="font-secondary text-base lg:text-xl tracking-[-0.48px] leading-5 lg:leading-10">We make fresh, thin-crust pizzas with quality ingredients and a friendly spirit — the kind of place where good food brings people together.</p>
            </div>
            <div className="absolute translate-x-1/2 h-[350px] lg:h-[800px] w-px bg-black right-1/2 mt-[120px] lg:mt-[220px]"></div>
            <div className="flex flex-row gap-4 w-full col-span-6 lg:col-span-12 lg:pt-[100px]">
                <div className="w-1/2 grid content-start grid-cols-3 lg:grid-cols-6 gap-y-4 lg:gap-y-0 gap-x-4 md:gap-x-6">
                    <div className="col-span-3 grid content-start grid-cols-3 gap-x-4 md:gap-x-6 lg:gap-y-[70px] lg:pt-[200px]">
                        <ImageWithOverlay src="/picture/about-1.png" alt="Map" topping="pepperoni" position="BR" className="col-span-2 h-fit" />
                        <ImageWithOverlay src="/picture/about-2.png" alt="Map" topping="pepperoni" position="BR" className="col-start-2 col-span-2 lg:col-span-3 h-fit" />
                    </div>
                    <div className="col-span-3 grid content-start grid-cols-3 gap-x-4 md:gap-x-6 gap-y-4 lg:gap-y-[100px]">
                        <ImageWithOverlay src="/picture/about-3.png" alt="Map" topping="pepperoni" position="BR" className="col-span-2 lg:col-span-3 h-fit" />
                        <ImageWithOverlay src="/picture/about-4.png" alt="Map" topping="pepperoni" position="BR" className="col-start-2 col-span-2 h-fit" />
                    </div>
                </div>
                <div className="w-1/2 grid content-start grid-cols-3 lg:grid-cols-6 gap-y-4 lg:gap-y-0 gap-x-4 md:gap-x-6 pt-[50px]">
                    <div className="col-span-3 grid content-start grid-cols-3 gap-x-4 md:gap-x-6 lg:gap-y-[100px] lg:pt-[300px]">
                        <ImageWithOverlay src="/picture/about-5.png" alt="Map" topping="pepperoni" position="BR" className="col-span-2 col-start-2 h-fit" />
                        <ImageWithOverlay src="/picture/about-6.png" alt="Map" topping="pepperoni" position="BR" className="col-span-2 lg:col-span-3 h-fit" />
                    </div>
                    <div className="col-span-3 grid content-start grid-cols-3 gap-x-4 md:gap-x-6 gap-y-4 lg:gap-y-[70px]">
                        <ImageWithOverlay src="/picture/about-7.png" alt="Map" topping="pepperoni" position="BR" className="col-span-2 col-start-2 lg:col-start-1 lg:col-span-3 h-fit" />
                        <ImageWithOverlay src="/picture/about-8.png" alt="Map" topping="pepperoni" position="BR" className="col-span-2 lg:col-start-2 h-fit" />
                    </div>
                </div>  
            </div>
            <div className="col-span-3 col-start-1 grid grid-cols-3 gap-4">
            </div>
        </section>
    );
}

export default AboutSection;
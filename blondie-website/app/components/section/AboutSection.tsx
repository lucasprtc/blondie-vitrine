"use client";

import { useRef, useEffect } from "react"; 
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import ImageWithOverlay from "../ui/Image";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
    const squareRef = useRef(null);
    const aboutSectionRef = useRef(null);

    useEffect(() => {
    const square = squareRef.current;

    gsap.to(square, {
    scrollTrigger: {
        trigger: aboutSectionRef.current,
        start: 'top center-=200',
        end: 'center center-=200',
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
                className="z-10 absolute top-[90px] col-span-6 p-4 h-fit w-full flex flex-row items-center justify-between gap-4 bg-white rounded-[10px] shadow-2xl"
            >
                <img src="/picture/about-desc.png" alt="" className="max-w-[110px] aspect-square" />
                <p className="font-secondary text-base tracking-[-0.48px] leading-5">We make fresh, thin-crust pizzas with quality ingredients and a friendly spirit — the kind of place where good food brings people together.</p>
            </div>
            <div className="absolute translate-x-1/2 h-[400px] w-0.5 bg-black right-1/2 mt-[120px]"></div>
            <div className="flex flex-row gap-4 w-full col-span-6">
                <div className="w-1/2 grid grid-cols-3">
                    <ImageWithOverlay src="/picture/about-1.png" alt="Map" topping="pepperoni" position="BR" className="col-span-2 h-fit" />
                    <ImageWithOverlay src="/picture/about-2.png" alt="Map" topping="pepperoni" position="BR" className="col-start-2 col-span-2 h-fit" />
                    <ImageWithOverlay src="/picture/about-3.png" alt="Map" topping="pepperoni" position="BR" className="col-span-2 h-fit" />
                    <ImageWithOverlay src="/picture/about-4.png" alt="Map" topping="pepperoni" position="BR" className="col-start-2 col-span-2 h-fit" />
                </div>
                <div className="w-1/2 grid grid-cols-3 gap-4 pt-[50px]">
                    <ImageWithOverlay src="/picture/about-5.png" alt="Map" topping="pepperoni" position="BR" className="col-start-2 col-span-2 h-fit" />
                    <ImageWithOverlay src="/picture/about-6.png" alt="Map" topping="pepperoni" position="BR" className="col-span-2 h-fit" />
                    <ImageWithOverlay src="/picture/about-7.png" alt="Map" topping="pepperoni" position="BR" className="col-start-2 col-span-2 h-fit" />
                    <ImageWithOverlay src="/picture/about-8.png" alt="Map" topping="pepperoni" position="BR" className="col-span-2 h-fit" />
                </div>
            </div>
            <div className="col-span-3 col-start-1 grid grid-cols-3 gap-4">
            </div>
        </section>
    );
}

export default AboutSection;
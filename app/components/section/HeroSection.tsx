"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedText from '../ui/TextAnimation';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);
    const textAboveImageRef = useRef<HTMLHeadingElement>(null);
    const blackLine1Ref = useRef<HTMLDivElement>(null);
    const blackLine2Ref = useRef<HTMLDivElement>(null);

    // wrapper refs (scroll animation)
    const pepperWrap = useRef<HTMLDivElement>(null);
    const basilWrap = useRef<HTMLDivElement>(null);
    const mushroomWrap = useRef<HTMLDivElement>(null);
    const origanoWrap = useRef<HTMLDivElement>(null);

    // img ref (enter animation)
    const pepperImg = useRef<HTMLImageElement>(null);
    const basilImg = useRef<HTMLImageElement>(null);
    const mushroomImg = useRef<HTMLImageElement>(null);
    const origanoImg = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const isMobile = window.innerWidth < 1024;
            const delayBase = isMobile ? 0.4 : 1;

            //  --- ENTER ANIMATION ---
            
            gsap.fromTo(imageRef.current, 
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out', delay: 0.5 }
            );

            gsap.fromTo(textAboveImageRef.current,
                { y: isMobile ? 20 : 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: 'back.out(0.8)', delay: delayBase }
            );

            // black line animation
            [blackLine1Ref, blackLine2Ref].forEach((ref, i) => {
                gsap.fromTo(ref.current,
                    { scaleX: 0, transformOrigin: i === 0 ? 'left' : 'right' },
                    { scaleX: 1, duration: 1, ease: 'power2.out', delay: 0.5 }
                );
            });

            // food animation
            const ingredients = [
                { ref: pepperImg, x: 100, d: 1.4 },
                { ref: basilImg, x: 80, d: 1.5 },
                { ref: mushroomImg, x: -100, d: 1.6 },
                { ref: origanoImg, x: -80, d: 1.7 },
            ];

            ingredients.forEach(item => {
                gsap.fromTo(item.ref.current,
                    { x: item.x, y: 50, opacity: 0, scale: 0.8 },
                    { x: 0, y: 0, opacity: 0.6, scale: 1, duration: 0.8, ease: 'power2.out', delay: item.d }
                );
            });

            // --- SCROLL ANIMATION ---
            if (!isMobile) {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top top", 
                        end: "bottom top", 
                        scrub: true, 
                    }
                });

                tl.to(pepperWrap.current, { y: -150, x: -70, ease: "none" }, 0)
                  .to(basilWrap.current, { y: -250, x: -60, ease: "none" }, 0)
                  .to(mushroomWrap.current, { y: -18e0, x: 75, ease: "none" }, 0)
                  .to(origanoWrap.current, { y: -230, x: 60, ease: "none" }, 0);
            }

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section 
            ref={sectionRef} 
            id='home' 
            className="px-4 lg:px-0 relative h-lvh lg:h-fit overflow-hidden"
        >
            {/* Header Layout */}
            <div className="grid-layout items-center relative pt-[40%] sm:pt-[25%] lg:pt-[10%]">
                <div ref={blackLine1Ref} className="hidden lg:block h-px bg-black col-span-2"></div>
                <AnimatedText
                    delay={0.1}
                    text="The real New York Slice experience in your city" 
                    className="col-span-5 lg:col-span-8 text-2xl md:text-3xl lg:text-4xl xl:text-5xl lg:text-center text-black font-primary font-medium tracking-[-0.03em] break-normal lg:leading-18 xl:leading-22" 
                />
                <div ref={blackLine2Ref} className="hidden lg:block h-px bg-black col-span-2"></div>
            </div>

            {/* Content Area */}
            <div className="relative grid grid-cols-6 lg:grid-cols-12 gap-4 md:gap-6 lg:gap-y-1 mt-[40%] sm:mt-[15%] lg:mt-[60px]" >
                <h2 
                    ref={textAboveImageRef}
                    className="col-span-5 col-start-3 lg:col-start-4 lg:text-center lg:col-span-6 font-secondary text-xl lg:text-lg xl:text-xl text-black tracking-[-0.852px] relative z-10"
                >
                    Inspired by New York slice culture, crafted with local ingredients.
                </h2>

                <div className="hidden lg:block relative col-span-6 col-start-4">
                    <img 
                        ref={imageRef}
                        src="/picture/homepage-1.png" 
                        alt="Pizza Slice" 
                        className="w-full object-cover z-20 relative" 
                    />

                    <div ref={pepperWrap} className="absolute -top-[5%] -left-[15%] z-0">
                        <img ref={pepperImg} src="/food/pepper.png" alt="" className="w-full max-w-[220px] opacity-0" />
                    </div>

                    <div ref={basilWrap} className="absolute top-[25%] -left-[10%] z-0">
                        <img ref={basilImg} src="/food/basil.png" alt="" className="max-w-[175px] w-full -scale-y-100 transform rotate-180 opacity-0" />
                    </div>

                    <div ref={mushroomWrap} className="absolute -top-[5%] -right-[10%] z-0">
                        <img ref={mushroomImg} src="/food/mushroom.png" alt="" className="max-w-[150px] rotate-35 opacity-0" />
                    </div>

                    <div ref={origanoWrap} className="absolute top-[20%] -right-[15%] z-0">
                        <img ref={origanoImg} src="/food/origano.png" alt="" className="max-w-[200px] w-full object-cover -scale-y-100 transform rotate-180 opacity-0" />
                    </div>
                </div>

                <img src="/food/pepperoni.png" alt="" className="max-w-[150px] absolute -top-[50%] -left-[20%] md:-left-[10%] md:-top-[150%] lg:hidden" />
                <img src="/food/mushroom.png" alt="" className="absolute max-w-[150px] -bottom-[40%] md:-bottom-[20%] -right-[15%] md:-right-[10%] -rotate-15 lg:hidden" />
            </div>
            <img src="/food/origano.png" alt="" className="absolute max-w-[120px] lg:hidden -right-[5%] bottom-0" />
        </section>
    );
}

export default HeroSection;
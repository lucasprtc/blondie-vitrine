"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import AnimatedText from '../ui/TextAnimation';


const HeroSection = () => {
    const imageRef = useRef(null);
    const textAboveImageRef = useRef(null);
    const blackLine1Ref = useRef(null);
    const blackLine2Ref = useRef(null);
    const pepperRef = useRef(null);
    const basilRef = useRef(null);
    const mushroomRef = useRef(null);
    const origanoRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                imageRef.current,
                { 
                    y: 100, 
                    opacity: 0 
                },
                { 
                    y: 0, 
                    opacity: 1, 
                    duration: 1.2, 
                    ease: 'power3.out',
                    delay: 0.5
                }
            );

            // Animation du texte au-dessus de l'image : apparaît de derrière l'image
            gsap.fromTo(
                textAboveImageRef.current,
                { 
                    y: 50,
                    opacity: 0,
                    zIndex: 0
                },
                { 
                    y: 0,
                    opacity: 1,
                    zIndex: 10,
                    duration: 0.8,
                    ease: 'back.out(0.8)',
                    delay: 1
                }
            );

            // Animation des lignes noires : s'agrandissent de l'intérieur
            gsap.fromTo(
                blackLine1Ref.current,
                { 
                    scaleX: 0,
                    transformOrigin: 'left'
                },
                { 
                    scaleX: 1,
                    duration: 1,
                    ease: 'power2.out',
                    delay: 0.5
                }
            );

            gsap.fromTo(
                blackLine2Ref.current,
                { 
                    scaleX: 0,
                    transformOrigin: 'right'
                },
                { 
                    scaleX: 1,
                    duration: 1,
                    ease: 'power2.out',
                    delay: 0.5
                }
            );
            gsap.fromTo(
                pepperRef.current,
                { 
                    x: 100,
                    y: 50,
                    opacity: 0,
                    scale: 0.8
                },
                { 
                    x: 0,
                    y: 0,
                    opacity: 0.6,
                    scale: 1,
                    duration: 0.8,
                    ease: 'power2.out',
                    delay: 1.5
                }
            );

            // Basil (basilic) - vient du centre vers la gauche
            gsap.fromTo(
                basilRef.current,
                { 
                    x: 80,
                    y: 30,
                    opacity: 0,
                    scale: 0.9
                },
                { 
                    x: 0,
                    y: 0,
                    opacity: 0.6,
                    scale: 1,
                    duration: 0.8,
                    ease: 'power2.out',
                    delay: 1.6
                }
            );

            // Mushroom (champignon) - vient du centre vers la droite/haut
            gsap.fromTo(
                mushroomRef.current,
                { 
                    x: -100,
                    y: 50,
                    opacity: 0,
                    scale: 0.8
                },
                { 
                    x: 0,
                    y: 0,
                    opacity: 0.6,
                    scale: 1,
                    duration: 0.8,
                    ease: 'power2.out',
                    delay: 1.7
                }
            );

            // Origano (origan) - vient du centre vers la droite
            gsap.fromTo(
                origanoRef.current,
                { 
                    x: -80,
                    y: 30,
                    opacity: 0,
                    scale: 0.8
                },
                { 
                    x: 0,
                    y: 0,
                    opacity: 0.6,
                    scale: 1,
                    duration: 0.8,
                    ease: 'power2.out',
                    delay: 1.8
                }
            );  
        });

        return () => ctx.revert();
    }, []);

    return (
        <section className="px-4 lg:px-0 relative h-lvh lg:h-fit overflow-hidden">
            <div className="grid-layout items-center relative pt-[40%] lg:pt-[10%]">
                <div ref={blackLine1Ref} className="hidden lg:block h-px bg-black col-span-2"></div>
                <AnimatedText 
                    text="The real New York Slice experience in your city" 
                    className="col-span-5 lg:col-span-8 text-2xl lg:text-5xl lg:text-center text-black font-primary font-medium tracking-[-0.03em] break-normal lg:leading-22" 
                />
                <div ref={blackLine2Ref} className="hidden lg:block h-px bg-black col-span-2"></div>
                <img src="/food/mushroom.png" alt="" className="absolute max-w-[150px] -bottom-[40%] -right-[15%] -rotate-15 lg:hidden" />
            </div>
            <div className="relative grid grid-cols-6 md:grid-cols-12 gap-4 md:gap-6 lg:gap-y-1 mt-[40%] lg:mt-[60px]" >
                <h2 
                    ref={textAboveImageRef}
                    className="col-span-5 lg:col-start-5 lg:col-span-6 col-start-3 font-secondary text-xl text-black tracking-[-0.852px] relative"
                >
                    Inspired by New York slice culture, crafted with local ingredients.
                </h2>

                <div className="hidden lg:block relative col-span-6 col-start-4">
                    <img 
                        ref={imageRef}
                        src="/picture/homepage-1.png" 
                        alt="" 
                        className="w-full object-cover z-10 relative" 
                    />
                    <img 
                        ref={pepperRef}
                        src="/food/pepper.png" 
                        alt="" 
                        className="z-0 opacity-0 w-full max-w-[220px] absolute -top-[5%] -left-[15%]" 
                    />
                    <img 
                        ref={basilRef}
                        src="/food/basil.png" 
                        alt="" 
                        className="z-0 opacity-0 max-w-[175px] w-full -scale-y-100 transform absolute top-[25%] rotate-180 -left-[10%]" 
                    />
                    <img 
                        ref={mushroomRef}
                        src="/food/mushroom.png" 
                        alt="" 
                        className="z-0 opacity-0 max-w-[150px] rotate-35 absolute -top-[5%] -right-[10%]" 
                    />
                    <img 
                        ref={origanoRef}
                        src="/food/origano.png" 
                        alt="" 
                        className="z-0 opacity-0 max-w-[200px] w-full object-cover -scale-y-100 transform rotate-180 absolute top-[20%] -right-[15%]" 
                    />
                </div>

                <img src="/food/pepperoni.png" alt="" className="max-w-[150px] absolute -top-[50%] -left-[20%] lg:hidden" />

            </div>
            <img src="/food/origano.png" alt="" className="absolute -right-[5%] -bottom-[15%]" />
        </section>
    );
}

export default HeroSection;